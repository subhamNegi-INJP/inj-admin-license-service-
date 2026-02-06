// License management controllers
// Phase 4.3: Individual license management operations

import { Response } from 'express';
import prisma from '../utils/prisma';
import { LicenseStatus } from '../generated/prisma';
import { asyncHandler } from '../middleware/errorHandler';
import {
  sendSuccess,
  sendNotFound,
  sendError,
  sendPaginated,
} from '../utils/response';
import type { AuthenticatedRequest } from '../types';

/**
 * GET /api/licenses
 * Get all licenses with pagination and filtering
 */
export const getAllLicenses = asyncHandler(async (req: AuthenticatedRequest, res: Response) => {
  const {
    page = '1',
    limit = '10',
    sortBy = 'createdAt',
    sortOrder = 'desc',
    clientId,
    productId,
    poolId,
    status,
    userEmail,
  } = req.query;

  const pageNum = parseInt(page as string, 10);
  const limitNum = parseInt(limit as string, 10);
  const skip = (pageNum - 1) * limitNum;

  const where: any = {};
  if (clientId) where.clientId = clientId as string;
  if (productId) where.productId = productId as string;
  if (poolId) where.poolId = poolId as string;
  if (status) where.status = status as string;
  if (userEmail) where.userEmail = { contains: userEmail as string, mode: 'insensitive' };

  const orderBy = { [sortBy as string]: sortOrder === 'desc' ? 'desc' : 'asc' };

  const [licenses, total] = await Promise.all([
    prisma.license.findMany({
      where,
      skip,
      take: limitNum,
      orderBy,
      include: {
        pool: { select: { id: true, poolKey: true, clientId: true, clientName: true } },
        devices: { take: 5, orderBy: { lastActive: 'desc' } },
        allocations: { where: { isActive: true }, take: 1 },
      },
    }),
    prisma.license.count({ where }),
  ]);

  sendPaginated(res, licenses, pageNum, limitNum, total);
});

/**
 * GET /api/licenses/:licenseId
 * Get license by ID
 */
export const getLicenseById = asyncHandler(async (req: AuthenticatedRequest, res: Response) => {
  const { licenseId } = req.params;

  const license = await prisma.license.findUnique({
    where: { id: licenseId },
    include: {
      pool: { select: { id: true, poolKey: true, clientId: true, clientName: true, productName: true } },
      devices: {
        orderBy: { lastActive: 'desc' },
      },
      allocations: {
        where: { isActive: true },
        orderBy: { allocatedAt: 'desc' },
        take: 10,
      },
    },
  });

  if (!license) {
    return sendNotFound(res, 'License not found');
  }

  sendSuccess(res, license);
});

/**
 * PATCH /api/licenses/:licenseId/status
 * Update license status
 */
export const updateLicenseStatus = asyncHandler(async (req: AuthenticatedRequest, res: Response) => {
  const { licenseId } = req.params;
  const { status } = req.body;

  // Validate status
  const validStatuses: LicenseStatus[] = [
    'ACTIVE', 'INACTIVE', 'AVAILABLE', 'ALLOCATED', 
    'EXPIRED', 'GRACE_PERIOD', 'VIOLATION', 'SUSPENDED', 
    'REVOKED', 'TERMINATED'
  ];

  if (!validStatuses.includes(status)) {
    return sendError(res, `Invalid status. Must be one of: ${validStatuses.join(', ')}`, 400);
  }

  const license = await prisma.license.findUnique({
    where: { id: licenseId },
  });

  if (!license) {
    return sendNotFound(res, 'License not found');
  }

  const updatedLicense = await prisma.license.update({
    where: { id: licenseId },
    data: { status },
    include: {
      pool: { select: { id: true, poolKey: true } },
    },
  });

  sendSuccess(res, updatedLicense, `License status updated to ${status}`);
});

/**
 * POST /api/licenses/:licenseId/block
 * Block a license
 */
export const blockLicense = asyncHandler(async (req: AuthenticatedRequest, res: Response) => {
  const { licenseId } = req.params;
  const { reason } = req.body;

  const license = await prisma.license.findUnique({
    where: { id: licenseId },
  });

  if (!license) {
    return sendNotFound(res, 'License not found');
  }

  if (license.status === 'SUSPENDED' || license.status === 'REVOKED') {
    return sendError(res, 'License is already blocked/suspended', 400);
  }

  const updatedLicense = await prisma.$transaction(async (tx) => {
    // Update license status
    const updated = await tx.license.update({
      where: { id: licenseId },
      data: { status: 'SUSPENDED' },
    });

    // Log activation event
    await tx.licenseActivationLog.create({
      data: {
        licenseId,
        action: 'BLOCKED',
        ipAddress: req.ip,
        userAgent: req.headers['user-agent'],
      },
    });

    return updated;
  });

  sendSuccess(res, updatedLicense, 'License blocked successfully');
});

/**
 * POST /api/licenses/:licenseId/unblock
 * Unblock a license
 */
export const unblockLicense = asyncHandler(async (req: AuthenticatedRequest, res: Response) => {
  const { licenseId } = req.params;

  const license = await prisma.license.findUnique({
    where: { id: licenseId },
  });

  if (!license) {
    return sendNotFound(res, 'License not found');
  }

  if (license.status !== 'SUSPENDED') {
    return sendError(res, 'License is not blocked', 400);
  }

  const updatedLicense = await prisma.$transaction(async (tx) => {
    // Update license status
    const updated = await tx.license.update({
      where: { id: licenseId },
      data: { status: 'ACTIVE' },
    });

    // Log activation event
    await tx.licenseActivationLog.create({
      data: {
        licenseId,
        action: 'UNBLOCKED',
        ipAddress: req.ip,
        userAgent: req.headers['user-agent'],
      },
    });

    return updated;
  });

  sendSuccess(res, updatedLicense, 'License unblocked successfully');
});

/**
 * POST /api/licenses/:licenseId/devices/:deviceId/block
 * Block a device on a license
 */
export const blockDevice = asyncHandler(async (req: AuthenticatedRequest, res: Response) => {
  const { licenseId, deviceId } = req.params;

  const device = await prisma.licenseDevice.findFirst({
    where: {
      id: deviceId,
      licenseId,
    },
  });

  if (!device) {
    return sendNotFound(res, 'Device not found for this license');
  }

  if (device.status === 'BLOCKED') {
    return sendError(res, 'Device is already blocked', 400);
  }

  await prisma.$transaction(async (tx) => {
    // Block the device
    await tx.licenseDevice.update({
      where: { id: deviceId },
      data: { status :'BLOCKED'},
    });

    // Decrement device count on license
    await tx.license.update({
      where: { id: licenseId },
      data: { deviceCount: { decrement: 1 } },
    });

    // Log event
    await tx.licenseActivationLog.create({
      data: {
        licenseId,
        action: 'DEVICE_BLOCKED',
        deviceId,
        ipAddress: req.ip,
        userAgent: req.headers['user-agent'],
      },
    });
  });

  // Return updated license
  const updatedLicense = await prisma.license.findUnique({
    where: { id: licenseId },
    include: {
      devices: true,
    },
  });

  sendSuccess(res, updatedLicense, 'Device blocked successfully');
});

/**
 * POST /api/licenses/:licenseId/devices/:deviceId/unblock
 * Unblock a device on a license
 */
export const unblockDevice = asyncHandler(async (req: AuthenticatedRequest, res: Response) => {
  const { licenseId, deviceId } = req.params;

  const device = await prisma.licenseDevice.findFirst({
    where: {
      id: deviceId,
      licenseId,
    },
  });

  if (!device) {
    return sendNotFound(res, 'Device not found for this license');
  }

  if (device.status !== 'BLOCKED') {
    return sendError(res, 'Device is not blocked', 400);
  }

  await prisma.$transaction(async (tx) => {
    // Unblock the device
    await tx.licenseDevice.update({
      where: { id: deviceId },
      data: { status: 'ACTIVE' },
    });

    // Increment device count on license
    await tx.license.update({
      where: { id: licenseId },
      data: { deviceCount: { increment: 1 } },
    });

    // Log event
    await tx.licenseActivationLog.create({
      data: {
        licenseId,
        action: 'DEVICE_UNBLOCKED',
        deviceId,
        ipAddress: req.ip,
        userAgent: req.headers['user-agent'],
      },
    });
  });

  // Return updated license
  const updatedLicense = await prisma.license.findUnique({
    where: { id: licenseId },
    include: {
      devices: true,
    },
  });

  sendSuccess(res, updatedLicense, 'Device unblocked successfully');
});
