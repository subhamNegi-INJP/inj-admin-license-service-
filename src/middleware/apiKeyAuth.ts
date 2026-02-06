// API Key Authentication Middleware
// For external product system authentication

import { Request, Response, NextFunction } from 'express';
import crypto from 'crypto';
import prisma from '../utils/prisma';
import type { LicensePool } from '../generated/prisma';

export interface ExternalApiRequest extends Request {
  licensePool?: LicensePool;
  client?: {
    id: string;
    name: string;
    email: string | null;
  };
}

/**
 * Hash a pool key for comparison
 */
const hashPoolKey = (key: string): string => {
  return crypto.createHash('sha256').update(key).digest('hex');
};

/**
 * Authenticate external API requests using pool key
 * 
 * The pool key is sent in the X-Pool-Key header
 * This allows product systems to make API calls for license operations
 */
export const authenticatePoolKey = async (
  req: ExternalApiRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const poolKey = req.headers['x-pool-key'] as string;

    if (!poolKey) {
      res.status(401).json({
        success: false,
        error: 'Pool key is required',
        code: 'MISSING_POOL_KEY',
      });
      return;
    }

    // Hash the provided key for lookup
    const poolKeyHash = hashPoolKey(poolKey);

    // Find the license pool by pool key or hash
    const licensePool = await prisma.licensePool.findFirst({
      where: {
        OR: [
          { poolKey: poolKey },
          { poolKeyHash: poolKeyHash },
        ],
      },
    });

    if (!licensePool) {
      res.status(401).json({
        success: false,
        error: 'Invalid pool key',
        code: 'INVALID_POOL_KEY',
      });
      return;
    }

    // Check if pool is active
    if (!licensePool.isActive || licensePool.status !== 'ACTIVE') {
      res.status(403).json({
        success: false,
        error: 'License pool is inactive',
        code: 'POOL_INACTIVE',
      });
      return;
    }

    // Check if pool has expired
    if (new Date() > licensePool.expirationDate) {
      // Check grace period
      const gracePeriodEnd = new Date(licensePool.expirationDate);
      gracePeriodEnd.setDate(gracePeriodEnd.getDate() + licensePool.gracePeriodDays);
      
      if (new Date() > gracePeriodEnd) {
        res.status(403).json({
          success: false,
          error: 'License pool has expired',
          code: 'POOL_EXPIRED',
        });
        return;
      }
      // In grace period - allow but could add warning header
      res.setHeader('X-License-Warning', 'License pool is in grace period');
    }

    // Attach pool info to request
    req.licensePool = licensePool;

    // Attach client info (from denormalized data)
    req.client = {
      id: licensePool.clientId,
      name: licensePool.clientName,
      email: licensePool.clientEmail,
    };

    next();
  } catch (error) {
    console.error('Pool key authentication error:', error);
    res.status(500).json({
      success: false,
      error: 'Authentication failed',
      code: 'AUTH_ERROR',
    });
  }
};
