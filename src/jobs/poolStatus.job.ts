// License Pool Status Job
// Handles automatic status transitions for license pools
// - Syncs pool status with subscription status (GRACE_PERIOD, SUSPENDED)

import prisma from '../utils/prisma';

// Note: After adding GRACE_PERIOD to PoolStatus enum, run `npx prisma generate`
// to update the Prisma client types

interface PoolStatusTransitionResult {
  poolId: string;
  clientId: string;
  productName: string;
  previousStatus: string;
  newStatus: string;
  reason: string;
}

// =============================================================================
// SYNC POOL STATUS WITH SUBSCRIPTION STATUS
// This fetches subscription data and updates pool status accordingly
// =============================================================================

export const syncPoolStatusWithSubscription = async (): Promise<PoolStatusTransitionResult[]> => {
  const results: PoolStatusTransitionResult[] = [];

  try {
    // Get all active pools with their subscription IDs
    const pools = await prisma.licensePool.findMany({
      where: {
        subscriptionId: {
          not: '',
        },
      },
      select: {
        id: true,
        clientId: true,
        productName: true,
        status: true,
        subscriptionId: true,
        subscriptionStatus: true,
        expirationDate: true,
        gracePeriodDays: true,
      },
    });

    console.log(`Checking ${pools.length} pools for status sync`);

    const now = new Date();

    for (const pool of pools) {
      try {
        // Calculate pool status based on subscription status and dates
        let newStatus: string = pool.status;
        let reason = '';

        // Check if subscription status indicates a change is needed
        const subscriptionStatus = pool.subscriptionStatus;

        if (subscriptionStatus === 'SUSPENDED') {
          if (pool.status !== 'SUSPENDED') {
            newStatus = 'SUSPENDED';
            reason = 'Subscription has been suspended';
          }
        } else if (subscriptionStatus === 'GRACE_PERIOD') {
          if ((pool.status as string) !== 'GRACE_PERIOD') {
            newStatus = 'GRACE_PERIOD';
            reason = 'Subscription is in grace period';
          }
        } else if (subscriptionStatus === 'ACTIVE') {
          if ((pool.status as string) === 'GRACE_PERIOD' || pool.status === 'SUSPENDED') {
            newStatus = 'ACTIVE';
            reason = 'Subscription has been reactivated';
          }
        } else if (subscriptionStatus === 'EXPIRED' || subscriptionStatus === 'CANCELLED') {
          // Check if we're in grace period based on dates
          const expirationDate = pool.expirationDate;
          const gracePeriodEndDate = new Date(expirationDate);
          gracePeriodEndDate.setDate(gracePeriodEndDate.getDate() + pool.gracePeriodDays);

          if (now <= gracePeriodEndDate && (pool.status as string) !== 'GRACE_PERIOD') {
            newStatus = 'GRACE_PERIOD';
            reason = `Subscription expired, grace period ends on ${gracePeriodEndDate.toISOString().split('T')[0]}`;
          } else if (now > gracePeriodEndDate && pool.status !== 'SUSPENDED') {
            newStatus = 'SUSPENDED';
            reason = 'Grace period has ended without payment';
          }
        }

        // Update if status changed
        if (newStatus !== pool.status) {
          await prisma.licensePool.update({
            where: { id: pool.id },
            data: {
              status: newStatus as any,
              isActive: newStatus === 'ACTIVE',
            },
          });

          results.push({
            poolId: pool.id,
            clientId: pool.clientId,
            productName: pool.productName,
            previousStatus: pool.status,
            newStatus,
            reason,
          });

          console.log(`Pool ${pool.id}: ${pool.status} → ${newStatus} (${reason})`);
        }
      } catch (error) {
        console.error(`Error processing pool ${pool.id}:`, error);
      }
    }

    return results;
  } catch (error) {
    console.error('Error in syncPoolStatusWithSubscription:', error);
    throw error;
  }
};

// =============================================================================
// CHECK EXPIRED POOLS AND TRANSITION TO GRACE PERIOD
// This is a fallback for pools that don't have subscription sync
// =============================================================================

export const transitionExpiredPoolsToGracePeriod = async (): Promise<PoolStatusTransitionResult[]> => {
  const now = new Date();
  const results: PoolStatusTransitionResult[] = [];

  try {
    // Find ACTIVE pools that have passed their expiration date
    const expiredPools = await prisma.licensePool.findMany({
      where: {
        status: 'ACTIVE',
        expirationDate: {
          lt: now,
        },
      },
    });

    console.log(`Found ${expiredPools.length} expired pools to move to grace period`);

    for (const pool of expiredPools) {
      try {
        await prisma.licensePool.update({
          where: { id: pool.id },
          data: {
            status: 'GRACE_PERIOD' as any,
          },
        });

        results.push({
          poolId: pool.id,
          clientId: pool.clientId,
          productName: pool.productName,
          previousStatus: 'ACTIVE',
          newStatus: 'GRACE_PERIOD',
          reason: `Expiration date passed. Grace period: ${pool.gracePeriodDays} days`,
        });
      } catch (error) {
        console.error(`Error transitioning pool ${pool.id}:`, error);
      }
    }

    return results;
  } catch (error) {
    console.error('Error in transitionExpiredPoolsToGracePeriod:', error);
    throw error;
  }
};

// =============================================================================
// CHECK GRACE PERIOD POOLS AND TRANSITION TO SUSPENDED
// =============================================================================

export const transitionGracePeriodPoolsToSuspended = async (): Promise<PoolStatusTransitionResult[]> => {
  const now = new Date();
  const results: PoolStatusTransitionResult[] = [];

  try {
    // Note: After running prisma generate, this can use 'GRACE_PERIOD' directly
    const gracePeriodPools = await prisma.licensePool.findMany({
      where: {
        status: 'GRACE_PERIOD' as any,
      },
    });

    console.log(`Found ${gracePeriodPools.length} pools in grace period to check`);

    for (const pool of gracePeriodPools) {
      // Calculate when grace period ends
      const gracePeriodEndDate = new Date(pool.expirationDate);
      gracePeriodEndDate.setDate(gracePeriodEndDate.getDate() + pool.gracePeriodDays);

      // If grace period has ended, suspend the pool
      if (now > gracePeriodEndDate) {
        try {
          await prisma.licensePool.update({
            where: { id: pool.id },
            data: {
              status: 'SUSPENDED',
              isActive: false,
            },
          });

          results.push({
            poolId: pool.id,
            clientId: pool.clientId,
            productName: pool.productName,
            previousStatus: 'GRACE_PERIOD',
            newStatus: 'SUSPENDED',
            reason: 'Grace period ended without payment',
          });
        } catch (error) {
          console.error(`Error suspending pool ${pool.id}:`, error);
        }
      }
    }

    return results;
  } catch (error) {
    console.error('Error in transitionGracePeriodPoolsToSuspended:', error);
    throw error;
  }
};

// =============================================================================
// RUN ALL STATUS CHECKS
// =============================================================================

export interface PoolStatusCheckResult {
  timestamp: string;
  syncedWithSubscription: PoolStatusTransitionResult[];
  toGracePeriod: PoolStatusTransitionResult[];
  toSuspended: PoolStatusTransitionResult[];
  summary: {
    totalTransitions: number;
    syncedWithSubscription: number;
    movedToGracePeriod: number;
    movedToSuspended: number;
  };
}

export const runPoolStatusCheck = async (): Promise<PoolStatusCheckResult> => {
  console.log('Starting pool status check...');
  const startTime = Date.now();

  // First, sync with subscription statuses
  const syncedWithSubscription = await syncPoolStatusWithSubscription();

  // Then, check for expired pools (as fallback)
  const toGracePeriod = await transitionExpiredPoolsToGracePeriod();

  // Finally, suspend pools whose grace period has ended
  const toSuspended = await transitionGracePeriodPoolsToSuspended();

  const result: PoolStatusCheckResult = {
    timestamp: new Date().toISOString(),
    syncedWithSubscription,
    toGracePeriod,
    toSuspended,
    summary: {
      totalTransitions: syncedWithSubscription.length + toGracePeriod.length + toSuspended.length,
      syncedWithSubscription: syncedWithSubscription.length,
      movedToGracePeriod: toGracePeriod.length,
      movedToSuspended: toSuspended.length,
    },
  };

  console.log(`Pool status check completed in ${Date.now() - startTime}ms`);
  console.log(`Summary: ${result.summary.syncedWithSubscription} synced, ${result.summary.movedToGracePeriod} → GRACE_PERIOD, ${result.summary.movedToSuspended} → SUSPENDED`);

  return result;
};

// =============================================================================
// REACTIVATE POOL (Called when subscription is reactivated)
// =============================================================================

export const reactivatePool = async (
  poolId: string,
  newExpirationDate?: Date
): Promise<{
  success: boolean;
  pool?: any;
  error?: string;
}> => {
  try {
    const pool = await prisma.licensePool.findUnique({
      where: { id: poolId },
    });

    if (!pool) {
      return { success: false, error: 'Pool not found' };
    }

    // Only allow reactivation from SUSPENDED or GRACE_PERIOD status
    const poolStatus = pool.status as string;
    if (!['SUSPENDED', 'GRACE_PERIOD'].includes(poolStatus)) {
      return {
        success: false,
        error: `Cannot reactivate pool with status: ${pool.status}. Only SUSPENDED or GRACE_PERIOD pools can be reactivated.`,
      };
    }

    // Update pool to ACTIVE
    const updatedPool = await prisma.licensePool.update({
      where: { id: poolId },
      data: {
        status: 'ACTIVE',
        isActive: true,
        subscriptionStatus: 'ACTIVE',
        expirationDate: newExpirationDate || pool.expirationDate,
      },
    });

    console.log(`Pool ${poolId} reactivated from ${pool.status} to ACTIVE`);

    return { success: true, pool: updatedPool };
  } catch (error) {
    console.error(`Error reactivating pool ${poolId}:`, error);
    return { success: false, error: 'Failed to reactivate pool' };
  }
};
