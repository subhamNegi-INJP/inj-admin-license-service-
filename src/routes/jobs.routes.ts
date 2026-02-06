// Jobs Routes
// API endpoints for running background jobs

import { Router, Response } from 'express';
import { sendSuccess, sendError } from '../utils/response';
import {
  runPoolStatusCheck,
  reactivatePool,
} from '../jobs';
import type { AuthenticatedRequest } from '../types';

const router = Router();

// =============================================================================
// RUN POOL STATUS CHECK
// Triggers the job to sync pool status with subscription,
// transition expired pools to GRACE_PERIOD, and suspend pools after grace period
// =============================================================================

router.post(
  '/run-status-check',
  async (req: AuthenticatedRequest, res: Response): Promise<void> => {
    try {
      const result = await runPoolStatusCheck();
      sendSuccess(res, result, 'Pool status check completed');
    } catch (error) {
      console.error('Error running pool status check:', error);
      sendError(res, 'Failed to run pool status check', 500);
    }
  }
);

// =============================================================================
// REACTIVATE POOL
// Manually reactivate a suspended/grace-period pool
// =============================================================================

router.post(
  '/reactivate/:poolId',
  async (req: AuthenticatedRequest, res: Response): Promise<void> => {
    try {
      const { poolId } = req.params;
      const { expirationDate } = req.body;

      const newExpirationDate = expirationDate ? new Date(expirationDate) : undefined;

      const result = await reactivatePool(poolId, newExpirationDate);

      if (result.success) {
        sendSuccess(res, {
          pool: result.pool,
        }, 'Pool reactivated successfully');
      } else {
        sendError(res, result.error || 'Failed to reactivate pool', 400);
      }
    } catch (error) {
      console.error('Error reactivating pool:', error);
      sendError(res, 'Failed to reactivate pool', 500);
    }
  }
);

export default router;
