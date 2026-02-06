// License Pool & Allocation management controllers
// License distribution and tracking APIs

import { Response } from 'express';
import crypto from 'crypto';
import prisma from '../utils/prisma';
import { Prisma } from '../generated/prisma';
import { asyncHandler } from '../middleware/errorHandler';
import {
  sendSuccess,
  sendCreated,
  sendNotFound,
  sendPaginated,
  sendNoContent,
  sendError,
} from '../utils/response';
import type { AuthenticatedRequest } from '../types';

// =============================================================================
// HELPER FUNCTIONS
// =============================================================================

/**
 * Generate a pool key
 */
const generatePoolKey = (): string => {
  const timestamp = Date.now().toString(36).toUpperCase();
  const random = crypto.randomBytes(8).toString('hex').toUpperCase();
  return `POOL-${timestamp}-${random}`;
};

/**
 * Hash a pool key
 */
const hashPoolKey = (key: string): string => {
  return crypto.createHash('sha256').update(key).digest('hex');
};

/**
 * Generate a license key
 */
const generateLicenseKey = (productCode: string, licenseType: string): string => {
  const timestamp = Date.now().toString(36).toUpperCase();
  const random = crypto.randomBytes(4).toString('hex').toUpperCase();
  const typeCode = licenseType.substring(0, 3).toUpperCase();
  return `LIC-${productCode}-${typeCode}-${timestamp}-${random}`;
};

// =============================================================================
// LICENSE POOL CONTROLLERS
// =============================================================================

/**
 * GET /api/license-pools
 * Get all license pools with pagination
 */
export const getLicensePools = asyncHandler(async (req: AuthenticatedRequest, res: Response) => {
  const {
    page = '1',
    limit = '10',
    sortBy = 'createdAt',
    sortOrder = 'desc',
    clientId,
    productId,
    isActive,
    status,
  } = req.query;

  const pageNum = parseInt(page as string, 10);
  const limitNum = parseInt(limit as string, 10);
  const skip = (pageNum - 1) * limitNum;

  const where: Prisma.LicensePoolWhereInput = {};

  if (clientId) where.clientId = clientId as string;
  if (productId) where.productId = productId as string;
  if (isActive !== undefined) where.isActive = isActive === 'true';
  if (status) where.status = status as any;

  const orderBy = { [sortBy as string]: sortOrder === 'desc' ? 'desc' : 'asc' };

  const [pools, total] = await Promise.all([
    prisma.licensePool.findMany({
      where,
      skip,
      take: limitNum,
      orderBy,
      include: {
        _count: { select: { licenses: true, allocations: true } },
      },
    }),
    prisma.licensePool.count({ where }),
  ]);

  sendPaginated(res, pools, pageNum, limitNum, total);
});

/**
 * GET /api/license-pools/:poolId
 * Get license pool by ID
 */
export const getLicensePool = asyncHandler(async (req: AuthenticatedRequest, res: Response) => {
  const { poolId } = req.params;
  const { licenseLimit } = req.query;
  
  // Allow configurable limit, default to 1000 (enough for most use cases)
  const licenseTakeLimit = licenseLimit ? Math.min(parseInt(licenseLimit as string, 10), 10000) : 1000;

  const pool = await prisma.licensePool.findUnique({
    where: { id: poolId },
    include: {
      licenses: {
        take: licenseTakeLimit,
        orderBy: { createdAt: 'desc' },
        include: {
          allocations: {
            where: { isActive: true },
            take: 1,
          },
        },
      },
      allocations: {
        where: { isActive: true },
        take: 100,
        orderBy: { allocatedAt: 'desc' },
      },
      _count: { select: { licenses: true, allocations: true } },
    },
  });

  if (!pool) {
    return sendNotFound(res, 'License pool not found');
  }

  sendSuccess(res, pool);
});

/**
 * POST /api/license-pools
 * Create license pool (called by Subscription Service when subscription is created)
 */
export const createLicensePool = asyncHandler(async (req: AuthenticatedRequest, res: Response) => {
  const {
    clientId,
    clientName,
    clientEmail,
    subscriptionId,
    productId,
    productName,
    productCode,
    licenseTypeId,
    licenseTypeName,
    totalSeats,
    expirationDate,
    gracePeriodDays = 7,
    features = [],
    selectedFeatures = [],
    // New billing-related fields
    billingCycle = 'MONTHLY',
    pricePerSeat,
    totalAmount,
    currency = 'INR',
    subscriptionStatus,
    paymentStatus,
    autoRenew = true,
    nextBillingDate,
  } = req.body;

  // Check if pool already exists for this subscription
  const existingPool = await prisma.licensePool.findUnique({
    where: { subscriptionId },
  });

  if (existingPool) {
    return sendError(res, 'License pool already exists for this subscription', 409);
  }

  // Generate pool key
  const poolKey = generatePoolKey();
  const poolKeyHash = hashPoolKey(poolKey);

  // Create pool and licenses in transaction
  const pool = await prisma.$transaction(async (tx) => {
    // Create the pool
    const newPool = await tx.licensePool.create({
      data: {
        clientId,
        clientName,
        clientEmail,
        subscriptionId,
        productId,
        productName,
        productCode,
        licenseTypeId,
        licenseTypeName,
        totalSeats,
        allocatedSeats: 0,
        availableSeats: totalSeats,
        poolKey,
        poolKeyHash,
        expirationDate: new Date(expirationDate),
        gracePeriodDays,
        features,
        selectedFeatures,
        // Billing info
        billingCycle,
        pricePerSeat: pricePerSeat ? parseFloat(pricePerSeat) : null,
        totalAmount: totalAmount ? parseFloat(totalAmount) : null,
        currency,
        subscriptionStatus,
        paymentStatus,
        autoRenew,
        nextBillingDate: nextBillingDate ? new Date(nextBillingDate) : null,
        status: 'ACTIVE',
        isActive: true,
      },
    });

    // Pre-create licenses for the pool
    const licenseData = Array.from({ length: totalSeats }, () => ({
      licenseKey: generateLicenseKey(productCode, licenseTypeName),
      clientId,
      clientName,
      productId,
      productName,
      productCode,
      licenseTypeId,
      licenseTypeName,
      poolId: newPool.id,
      status: 'AVAILABLE' as const,
      deviceLimit: 1,
      sessionLimit: 1,
      expirationDate: new Date(expirationDate),
    }));

    await tx.license.createMany({ data: licenseData });

    return newPool;
  });

  // Fetch the pool with licenses
  const createdPool = await prisma.licensePool.findUnique({
    where: { id: pool.id },
    include: {
      licenses: { take: 10 },
      _count: { select: { licenses: true } },
    },
  });

  sendCreated(res, createdPool, 'License pool created successfully');
});

/**
 * PUT /api/license-pools/:poolId
 * Update license pool
 */
export const updateLicensePool = asyncHandler(async (req: AuthenticatedRequest, res: Response) => {
  const { poolId } = req.params;
  const {
    totalSeats,
    gracePeriodDays,
    isActive,
    status,
    expirationDate,
    features,
    selectedFeatures,
    // Billing fields
    billingCycle,
    pricePerSeat,
    totalAmount,
    currency,
    subscriptionStatus,
    paymentStatus,
    autoRenew,
    nextBillingDate,
  } = req.body;

  const existing = await prisma.licensePool.findUnique({ where: { id: poolId } });

  if (!existing) {
    return sendNotFound(res, 'License pool not found');
  }

  // If reducing total seats, check if it would go below allocated
  if (totalSeats !== undefined && totalSeats < existing.allocatedSeats) {
    return sendError(
      res,
      `Cannot reduce total seats below allocated count (${existing.allocatedSeats})`,
      400
    );
  }

  // Calculate new available seats if total is changing
  let newAvailableSeats = existing.availableSeats;
  if (totalSeats !== undefined) {
    const seatDiff = totalSeats - existing.totalSeats;
    newAvailableSeats = existing.availableSeats + seatDiff;
  }

  const pool = await prisma.$transaction(async (tx) => {
    const updated = await tx.licensePool.update({
      where: { id: poolId },
      data: {
        totalSeats,
        availableSeats: totalSeats !== undefined ? newAvailableSeats : undefined,
        gracePeriodDays,
        isActive,
        status,
        features,
        selectedFeatures,
        expirationDate: expirationDate ? new Date(expirationDate) : undefined,
        // Billing fields
        billingCycle,
        pricePerSeat: pricePerSeat !== undefined ? parseFloat(pricePerSeat) : undefined,
        totalAmount: totalAmount !== undefined ? parseFloat(totalAmount) : undefined,
        currency,
        subscriptionStatus,
        paymentStatus,
        autoRenew,
        nextBillingDate: nextBillingDate ? new Date(nextBillingDate) : undefined,
      },
    });

    // If adding seats, create new licenses
    if (totalSeats !== undefined && totalSeats > existing.totalSeats) {
      const newLicenseCount = totalSeats - existing.totalSeats;
      const licenseData = Array.from({ length: newLicenseCount }, () => ({
        licenseKey: generateLicenseKey(existing.productCode, existing.licenseTypeName),
        clientId: existing.clientId,
        clientName: existing.clientName,
        productId: existing.productId,
        productName: existing.productName,
        productCode: existing.productCode,
        licenseTypeId: existing.licenseTypeId,
        licenseTypeName: existing.licenseTypeName,
        poolId: existing.id,
        status: 'AVAILABLE' as const,
        deviceLimit: 1,
        sessionLimit: 1,
        expirationDate: expirationDate ? new Date(expirationDate) : existing.expirationDate,
      }));

      await tx.license.createMany({ data: licenseData });
    }

    // If removing seats, delete AVAILABLE licenses
    if (totalSeats !== undefined && totalSeats < existing.totalSeats) {
      const licensesToRemove = existing.totalSeats - totalSeats;
      
      // Find AVAILABLE licenses to delete (oldest first)
      const availableLicenses = await tx.license.findMany({
        where: { 
          poolId: existing.id, 
          status: 'AVAILABLE' 
        },
        orderBy: { createdAt: 'asc' },
        take: licensesToRemove,
        select: { id: true },
      });

      if (availableLicenses.length > 0) {
        await tx.license.deleteMany({
          where: {
            id: { in: availableLicenses.map(l => l.id) },
          },
        });
      }
    }

    return updated;
  });

  sendSuccess(res, pool, 'License pool updated successfully');
});

/**
 * GET /api/license-pools/:poolId/stats
 * Get pool statistics
 */
export const getPoolStats = asyncHandler(async (req: AuthenticatedRequest, res: Response) => {
  const { poolId } = req.params;

  const pool = await prisma.licensePool.findUnique({
    where: { id: poolId },
  });

  if (!pool) {
    return sendNotFound(res, 'License pool not found');
  }

  // Get license counts by status
  const licenseStats = await prisma.license.groupBy({
    by: ['status'],
    where: { poolId },
    _count: { status: true },
  });

  // Get allocation stats
  const activeAllocations = await prisma.licenseAllocation.count({
    where: { poolId, isActive: true },
  });

  const stats = {
    pool: {
      id: pool.id,
      totalSeats: pool.totalSeats,
      allocatedSeats: pool.allocatedSeats,
      availableSeats: pool.availableSeats,
      utilizationRate: pool.totalSeats > 0 
        ? Math.round((pool.allocatedSeats / pool.totalSeats) * 100) 
        : 0,
    },
    licenses: licenseStats.reduce((acc, curr) => {
      acc[curr.status.toLowerCase()] = curr._count.status;
      return acc;
    }, {} as Record<string, number>),
    activeAllocations,
    expiresIn: Math.ceil((pool.expirationDate.getTime() - Date.now()) / (1000 * 60 * 60 * 24)),
    isExpired: pool.expirationDate < new Date(),
  };

  sendSuccess(res, stats);
});

// =============================================================================
// LICENSE ALLOCATION CONTROLLERS
// =============================================================================

/**
 * GET /api/license-pools/:poolId/allocations
 * Get allocations for a pool
 */
export const getPoolAllocations = asyncHandler(async (req: AuthenticatedRequest, res: Response) => {
  const { poolId } = req.params;
  const { page = '1', limit = '20', isActive } = req.query;

  const pageNum = parseInt(page as string, 10);
  const limitNum = parseInt(limit as string, 10);
  const skip = (pageNum - 1) * limitNum;

  const where: Prisma.LicenseAllocationWhereInput = { poolId };
  if (isActive !== undefined) {
    where.isActive = isActive === 'true';
  }

  const [allocations, total] = await Promise.all([
    prisma.licenseAllocation.findMany({
      where,
      skip,
      take: limitNum,
      orderBy: { allocatedAt: 'desc' },
      include: {
        license: { select: { id: true, licenseKey: true, status: true } },
      },
    }),
    prisma.licenseAllocation.count({ where }),
  ]);

  sendPaginated(res, allocations, pageNum, limitNum, total);
});

/**
 * POST /api/license-pools/:poolId/allocate
 * Allocate a license from pool to an employee
 */
export const allocateLicenses = asyncHandler(async (req: AuthenticatedRequest, res: Response) => {
  const { poolId } = req.params;
  const { employeeName, employeeEmail, employeeId, department, allocatedById, allocatedByName } = req.body;

  const pool = await prisma.licensePool.findUnique({
    where: { id: poolId },
  });

  if (!pool) {
    return sendNotFound(res, 'License pool not found');
  }

  if (!pool.isActive || pool.status !== 'ACTIVE') {
    return sendError(res, 'License pool is not active', 400);
  }

  if (pool.availableSeats < 1) {
    return sendError(res, 'No available seats in pool', 400);
  }

  // Check if employee already has active allocation
  const existingAllocation = await prisma.licenseAllocation.findFirst({
    where: {
      poolId,
      employeeEmail,
      isActive: true,
    },
  });

  if (existingAllocation) {
    return sendError(res, 'Employee already has an allocation from this pool', 400);
  }

  // Find an available license
  const availableLicense = await prisma.license.findFirst({
    where: {
      poolId,
      status: 'AVAILABLE',
    },
    orderBy: { createdAt: 'asc' },
  });

  if (!availableLicense) {
    return sendError(res, 'No available licenses in pool', 400);
  }

  // Allocate license and update counts
  const result = await prisma.$transaction(async (tx) => {
    // Update license
    const updatedLicense = await tx.license.update({
      where: { id: availableLicense.id },
      data: {
        status: 'ALLOCATED',
        userName: employeeName,
        userEmail: employeeEmail,
      },
    });

    // Create allocation record
    const allocation = await tx.licenseAllocation.create({
      data: {
        licenseId: availableLicense.id,
        poolId,
        clientId: pool.clientId,
        employeeName,
        employeeEmail,
        employeeId,
        department,
        allocatedById,
        allocatedByName,
        action: 'ALLOCATED',
        isActive: true,
      },
    });

    // Update pool counts
    await tx.licensePool.update({
      where: { id: poolId },
      data: {
        allocatedSeats: { increment: 1 },
        availableSeats: { decrement: 1 },
      },
    });

    return { license: updatedLicense, allocation };
  });

  sendCreated(res, result, 'License allocated successfully');
});

/**
 * POST /api/license-pools/:poolId/deallocate
 * Deallocate (revoke) a license from an employee
 */
export const deallocateLicenses = asyncHandler(async (req: AuthenticatedRequest, res: Response) => {
  const { poolId } = req.params;
  const { employeeEmail, licenseId, reason, revokedById, revokedByName } = req.body;

  // Find the allocation
  const where: Prisma.LicenseAllocationWhereInput = {
    poolId,
    isActive: true,
  };
  
  if (employeeEmail) where.employeeEmail = employeeEmail;
  if (licenseId) where.licenseId = licenseId;

  const allocation = await prisma.licenseAllocation.findFirst({
    where,
    include: { license: true },
  });

  if (!allocation) {
    return sendNotFound(res, 'Active allocation not found');
  }

  // Deallocate
  const result = await prisma.$transaction(async (tx) => {
    // Update allocation
    const updatedAllocation = await tx.licenseAllocation.update({
      where: { id: allocation.id },
      data: {
        action: 'REVOKED',
        isActive: false,
        revokedAt: new Date(),
        revokedById,
        revokedByName,
        revokeReason: reason,
      },
    });

    // Update license
    if (allocation.licenseId) {
      await tx.license.update({
        where: { id: allocation.licenseId },
        data: {
          status: 'AVAILABLE',
          userName: null,
          userEmail: null,
        },
      });
    }

    // Update pool counts
    await tx.licensePool.update({
      where: { id: poolId },
      data: {
        allocatedSeats: { decrement: 1 },
        availableSeats: { increment: 1 },
      },
    });

    return updatedAllocation;
  });

  sendSuccess(res, result, 'License deallocated successfully');
});

/**
 * POST /api/license-pools/:poolId/transfer
 * Transfer a license from one employee to another
 */
export const transferLicenses = asyncHandler(async (req: AuthenticatedRequest, res: Response) => {
  const { poolId } = req.params;
  const {
    fromEmployeeEmail,
    toEmployeeName,
    toEmployeeEmail,
    toEmployeeId,
    toDepartment,
    transferredById,
    transferredByName,
  } = req.body;

  // Find the current allocation
  const currentAllocation = await prisma.licenseAllocation.findFirst({
    where: {
      poolId,
      employeeEmail: fromEmployeeEmail,
      isActive: true,
    },
    include: { license: true },
  });

  if (!currentAllocation) {
    return sendNotFound(res, 'No active allocation found for this employee');
  }

  // Check if target already has allocation
  const existingTarget = await prisma.licenseAllocation.findFirst({
    where: {
      poolId,
      employeeEmail: toEmployeeEmail,
      isActive: true,
    },
  });

  if (existingTarget) {
    return sendError(res, 'Target employee already has an allocation from this pool', 400);
  }

  // Transfer
  const result = await prisma.$transaction(async (tx) => {
    // Mark old allocation as transferred
    await tx.licenseAllocation.update({
      where: { id: currentAllocation.id },
      data: {
        action: 'TRANSFERRED',
        isActive: false,
        revokedAt: new Date(),
        revokedById: transferredById,
        revokedByName: transferredByName,
        revokeReason: `Transferred to ${toEmployeeEmail}`,
      },
    });

    // Create new allocation
    const newAllocation = await tx.licenseAllocation.create({
      data: {
        licenseId: currentAllocation.licenseId,
        poolId,
        clientId: currentAllocation.clientId,
        employeeName: toEmployeeName,
        employeeEmail: toEmployeeEmail,
        employeeId: toEmployeeId,
        department: toDepartment,
        allocatedById: transferredById,
        allocatedByName: transferredByName,
        action: 'ALLOCATED',
        transferredFrom: currentAllocation.id,
        isActive: true,
      },
    });

    // Update license user info
    if (currentAllocation.licenseId) {
      await tx.license.update({
        where: { id: currentAllocation.licenseId },
        data: {
          userName: toEmployeeName,
          userEmail: toEmployeeEmail,
        },
      });
    }

    return newAllocation;
  });

  sendSuccess(res, result, 'License transferred successfully');
});
