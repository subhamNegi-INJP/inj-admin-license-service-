// External License API Controllers
// APIs for product systems to validate, allocate, and deallocate licenses

import { Response } from 'express';
import crypto from 'crypto';
import prisma from '../utils/prisma';
import { asyncHandler } from '../middleware/errorHandler';
import { sendSuccess, sendError, sendNotFound, sendPaginated } from '../utils/response';
import type { ExternalApiRequest } from '../middleware/apiKeyAuth';
import { 
  fetchEnrichedLicenseData, 
  fetchSubscriptionAddons,
  fetchProductFeatures,
  type SubscriptionAddonData,
  type EnrichedLicenseData,
  type ProductFeatureData,
} from '../utils/serviceClients';

// =============================================================================
// HELPER FUNCTIONS
// =============================================================================

/**
 * Generate a unique license key
 */
const generateLicenseKey = (productCode: string, licenseType: string): string => {
  const timestamp = Date.now().toString(36).toUpperCase();
  const random = crypto.randomBytes(4).toString('hex').toUpperCase();
  const typeCode = licenseType.substring(0, 3).toUpperCase();
  return `LIC-${productCode}-${typeCode}-${timestamp}-${random}`;
};

/**
 * Hash a license key for secure storage
 */
const hashLicenseKey = (key: string): string => {
  return crypto.createHash('sha256').update(key).digest('hex');
};

/**
 * Calculate days until a date
 */
const daysUntil = (date: Date): number => {
  return Math.ceil((date.getTime() - Date.now()) / (1000 * 60 * 60 * 24));
};

/**
 * Format addon data for response
 */
const formatAddonForResponse = (addon: SubscriptionAddonData) => ({
  code: addon.addonCode,
  name: addon.addonName,
  description: addon.addonDescription,
  status: addon.status,
  isActive: addon.status === 'ACTIVE',
  pricingType: addon.pricingType,
  price: addon.totalAmount,
  currency: addon.currency,
  billingCycle: addon.billingCycle,
  nextBillingDate: addon.nextBillingDate,
  isRecurring: addon.isRecurring,
  purchasedAt: addon.purchasedAt,
  expirationDate: addon.expirationDate,
});

/**
 * Build comprehensive subscription info for response
 */
const buildSubscriptionInfo = (enrichedData: EnrichedLicenseData, pool: any) => {
  const { subscription, addons, billing } = enrichedData;
  
  if (!subscription) {
    return {
      id: pool.subscriptionId,
      status: pool.subscriptionStatus || 'UNKNOWN',
      billingCycle: pool.billingCycle,
      autoRenew: pool.autoRenew,
      nextBillingDate: pool.nextBillingDate,
    };
  }

  return {
    id: subscription.id,
    status: subscription.status,
    billingCycle: subscription.billingCycle,
    seats: subscription.seats,
    
    // Pricing
    pricing: {
      pricePerSeat: subscription.pricePerSeat,
      subtotal: subscription.subtotal,
      discountPercent: subscription.discountPercent,
      discountAmount: subscription.discountAmount,
      couponCode: subscription.couponCode,
      couponDiscount: subscription.couponDiscount,
      taxPercent: subscription.taxPercent,
      taxAmount: subscription.taxAmount,
      totalAmount: subscription.totalAmount,
      currency: subscription.currency,
    },
    
    // Payment info
    payment: {
      status: subscription.paymentStatus,
      method: subscription.paymentMethod,
      completedAt: subscription.paymentCompletedAt,
    },
    
    // Renewal info
    renewal: {
      autoRenew: subscription.autoRenew,
      nextRenewalDate: subscription.nextRenewalDate,
      daysUntilRenewal: subscription.nextRenewalDate 
        ? daysUntil(new Date(subscription.nextRenewalDate)) 
        : null,
    },
    
    // Dates
    dates: {
      subscriptionDate: subscription.subscriptionDate,
      activationDate: subscription.activationDate,
      expirationDate: subscription.expirationDate,
      daysUntilExpiration: daysUntil(new Date(subscription.expirationDate)),
    },
    
    // Cancellation
    cancellation: subscription.cancelledAt ? {
      cancelledAt: subscription.cancelledAt,
      reason: subscription.cancelReason,
    } : null,
  };
};

/**
 * Build billing summary for response
 */
const buildBillingInfo = (enrichedData: EnrichedLicenseData) => {
  const { billing } = enrichedData;
  
  if (!billing) {
    return null;
  }

  return {
    summary: {
      outstandingBalance: billing.outstandingBalance,
      totalPaid: billing.totalPaid,
      invoiceCount: billing.invoiceCount,
    },
    lastInvoice: billing.lastInvoice ? {
      id: billing.lastInvoice.id,
      invoiceNumber: billing.lastInvoice.invoiceNumber,
      amount: billing.lastInvoice.totalAmount,
      paidAt: billing.lastInvoice.paidAt,
      status: billing.lastInvoice.status,
    } : null,
    nextInvoice: billing.upcomingInvoice ? {
      id: billing.upcomingInvoice.id,
      invoiceNumber: billing.upcomingInvoice.invoiceNumber,
      amount: billing.upcomingInvoice.totalAmount,
      dueDate: billing.upcomingInvoice.dueDate,
      status: billing.upcomingInvoice.status,
    } : null,
  };
};

// =============================================================================
// LICENSE VALIDATION API
// =============================================================================

/**
 * POST /api/external/licenses/validate
 * Validate a license key and check if it's active
 * 
 * Called by product systems to verify if a user's license is valid
 * 
 * Request Body:
 * - licenseKey: string (optional) - The license key to validate
 * - userEmail: string (optional) - Email of user trying to use the license
 * - deviceId: string (optional) - Device identifier for device binding
 * - includeSubscription: boolean (optional) - Include full subscription details
 * - includeAddons: boolean (optional) - Include addon details
 * - includeBilling: boolean (optional) - Include billing info
 * 
 * Response:
 * - valid: boolean - Whether the license is valid
 * - status: string - License status
 * - expirationDate: string - When the license expires
 * - features: string[] - Available features (includes addon features)
 * - subscription: object - Subscription details (if includeSubscription=true)
 * - addons: array - Active addons (if includeAddons=true)
 * - billing: object - Billing summary (if includeBilling=true)
 */
export const validateLicense = asyncHandler(async (req: ExternalApiRequest, res: Response) => {
  const { 
    licenseKey, 
    userEmail, 
    deviceId,
    includeSubscription = false,
    includeAddons = true,  // Include addons by default for feature access
    includeBilling = false,
  } = req.body;
  const pool = req.licensePool!;

  // Fetch enriched data if requested
  let enrichedData: EnrichedLicenseData | null = null;
  let activeAddons: SubscriptionAddonData[] = [];
  
  if (includeSubscription || includeAddons || includeBilling) {
    enrichedData = await fetchEnrichedLicenseData(pool.subscriptionId, pool.clientId);
    activeAddons = enrichedData.addons.filter(a => a.status === 'ACTIVE');
  } else {
    // Always fetch addons for feature access
    activeAddons = (await fetchSubscriptionAddons(pool.subscriptionId))
      .filter(a => a.status === 'ACTIVE');
  }

  // Fetch product features to determine available addons
  const productFeatures = await fetchProductFeatures(pool.productId);

  // Build combined features (license features + active addon feature codes)
  const addonFeatureCodes = activeAddons.map(a => a.addonCode);
  const baseFeatures = pool.selectedFeatures || pool.features;
  const allFeatures = [...new Set([...baseFeatures, ...addonFeatureCodes])];
  
  // Calculate available addons: product features NOT in base features and NOT already purchased
  const baseFeatureCodesUpper = baseFeatures.map(f => f.toUpperCase());
  const purchasedAddonCodesUpper = addonFeatureCodes.map(c => c.toUpperCase());
  const availableAddons = productFeatures.filter(pf => 
    !baseFeatureCodesUpper.includes(pf.code.toUpperCase()) &&
    !purchasedAddonCodesUpper.includes(pf.code.toUpperCase())
  );

  // If license key is provided, validate specific license
  if (licenseKey) {
    const license = await prisma.license.findFirst({
      where: {
        licenseKey: licenseKey,
        poolId: pool.id,
      },
      include: {
        allocations: {
          where: { isActive: true },
          orderBy: { allocatedAt: 'desc' },
          take: 1,
        },
      },
    });

    if (!license) {
      return sendSuccess(res, {
        valid: false,
        reason: 'License key not found in this pool',
        code: 'LICENSE_NOT_FOUND',
      });
    }

    // Check license status
    const validStatuses = ['ACTIVE', 'ALLOCATED'];
    if (!validStatuses.includes(license.status)) {
      return sendSuccess(res, {
        valid: false,
        reason: `License is ${license.status}`,
        code: 'LICENSE_INVALID_STATUS',
        status: license.status,
      });
    }

    // Check if license is expired
    if (license.expirationDate && new Date() > license.expirationDate) {
      return sendSuccess(res, {
        valid: false,
        reason: 'License has expired',
        code: 'LICENSE_EXPIRED',
        expirationDate: license.expirationDate,
      });
    }

    // If user email provided, check if license is allocated to this user
    if (userEmail && license.userEmail && license.userEmail.toLowerCase() !== userEmail.toLowerCase()) {
      return sendSuccess(res, {
        valid: false,
        reason: 'License is allocated to a different user',
        code: 'LICENSE_USER_MISMATCH',
      });
    }

    // Update last active
    await prisma.license.update({
      where: { id: license.id },
      data: { lastActive: new Date() },
    });

    // Log validation check
    await prisma.licenseActivationLog.create({
      data: {
        licenseId: license.id,
        action: 'VALIDATION_CHECK',
        deviceId: deviceId || null,
        ipAddress: req.ip || null,
        userAgent: req.headers['user-agent'] || null,
        success: true,
      },
    });

    // Build response
    const response: any = {
      valid: true,
      license: {
        id: license.id,
        licenseKey: license.licenseKey,
        status: license.status,
        userName: license.userName,
        userEmail: license.userEmail,
        expirationDate: license.expirationDate || pool.expirationDate,
        daysUntilExpiration: daysUntil(license.expirationDate || pool.expirationDate),
        deviceLimit: license.deviceLimit,
        deviceCount: license.deviceCount,
      },
      pool: {
        id: pool.id,
        productName: pool.productName,
        productCode: pool.productCode,
        licenseTypeName: pool.licenseTypeName,
        totalSeats: pool.totalSeats,
        allocatedSeats: pool.allocatedSeats,
        availableSeats: pool.availableSeats,
        expirationDate: pool.expirationDate,
        daysUntilExpiration: daysUntil(pool.expirationDate),
        billingCycle: pool.billingCycle,
        autoRenew: pool.autoRenew,
      },
      features: allFeatures,
      baseFeatures: baseFeatures,
      activeAddons: activeAddons.map(formatAddonForResponse),
      availableAddons: availableAddons,
    };

    // Add subscription details if requested
    if (includeSubscription && enrichedData) {
      response.subscription = buildSubscriptionInfo(enrichedData, pool);
    }

    // Add billing if requested
    if (includeBilling && enrichedData) {
      response.billing = buildBillingInfo(enrichedData);
    }

    return sendSuccess(res, response);
  }

  // If no license key, just validate the pool
  const response: any = {
    valid: pool.isActive && pool.status === 'ACTIVE',
    pool: {
      id: pool.id,
      productName: pool.productName,
      productCode: pool.productCode,
      licenseTypeName: pool.licenseTypeName,
      totalSeats: pool.totalSeats,
      allocatedSeats: pool.allocatedSeats,
      availableSeats: pool.availableSeats,
      expirationDate: pool.expirationDate,
      daysUntilExpiration: daysUntil(pool.expirationDate),
      billingCycle: pool.billingCycle,
      autoRenew: pool.autoRenew,
    },
    features: allFeatures,
    baseFeatures: baseFeatures,
    activeAddons: activeAddons.map(formatAddonForResponse),
    availableAddons: availableAddons,
  };

  // Add subscription details if requested
  if (includeSubscription && enrichedData) {
    response.subscription = buildSubscriptionInfo(enrichedData, pool);
  }

  // Add billing if requested
  if (includeBilling && enrichedData) {
    response.billing = buildBillingInfo(enrichedData);
  }

  return sendSuccess(res, response);
});

// =============================================================================
// LICENSE AUTO-ALLOCATION API
// =============================================================================

/**
 * POST /api/external/licenses/allocate
 * Auto-allocate a license to a user when they are created in the product system
 * 
 * Request Body:
 * - userEmail: string (required) - Email of the user to allocate license to
 * - userName: string (required) - Name of the user
 * - userId: string (optional) - Internal user ID from product system
 * - department: string (optional) - User's department
 * 
 * Response:
 * - allocated: boolean - Whether allocation was successful
 * - license: object - License details if allocated
 */
export const autoAllocateLicense = asyncHandler(async (req: ExternalApiRequest, res: Response) => {
  const { userEmail, userName, userId, department } = req.body;
  const pool = req.licensePool!;

  // Validate required fields
  if (!userEmail || !userName) {
    return sendError(res, 'userEmail and userName are required', 400);
  }

  // Check if user already has an active allocation in this pool (case-insensitive email)
  const existingAllocation = await prisma.licenseAllocation.findFirst({
    where: {
      poolId: pool.id,
      employeeEmail: {
        equals: userEmail,
        mode: 'insensitive',
      },
      isActive: true,
    },
    include: {
      license: {
        select: { id: true, licenseKey: true, status: true },
      },
    },
  });

  if (existingAllocation) {
    return sendSuccess(res, {
      allocated: true,
      alreadyAllocated: true,
      message: 'User already has an allocated license',
      license: existingAllocation.license ? {
        id: existingAllocation.license.id,
        licenseKey: existingAllocation.license.licenseKey,
        status: existingAllocation.license.status,
      } : null,
      allocation: {
        id: existingAllocation.id,
        allocatedAt: existingAllocation.allocatedAt,
      },
    });
  }

  // Check if there are available seats
  if (pool.availableSeats <= 0) {
    return sendError(res, 'No available seats in the license pool', 400);
  }

  // Use transaction for atomic operations
  const result = await prisma.$transaction(async (tx) => {
    // Find an available license in the pool
    let license = await tx.license.findFirst({
      where: {
        poolId: pool.id,
        status: 'AVAILABLE',
        userEmail: null,
      },
      orderBy: { createdAt: 'asc' },
    });

    if (!license) {
      // Create a new license if none available (shouldn't happen with pre-created licenses)
      const licenseKey = generateLicenseKey(pool.productCode, pool.licenseTypeName);

      license = await tx.license.create({
        data: {
          licenseKey,
          licenseKeyHash: hashLicenseKey(licenseKey),
          clientId: pool.clientId,
          clientName: pool.clientName,
          productId: pool.productId,
          productName: pool.productName,
          productCode: pool.productCode,
          licenseTypeId: pool.licenseTypeId,
          licenseTypeName: pool.licenseTypeName,
          poolId: pool.id,
          status: 'ALLOCATED',
          userName,
          userEmail,
          activationDate: new Date(),
          expirationDate: pool.expirationDate,
          deviceLimit: 1,
          sessionLimit: 1,
        },
      });
    } else {
      // Update existing license
      license = await tx.license.update({
        where: { id: license.id },
        data: {
          status: 'ALLOCATED',
          userName,
          userEmail,
          activationDate: new Date(),
          lastActive: new Date(),
        },
      });
    }

    // Create allocation record
    const allocation = await tx.licenseAllocation.create({
      data: {
        licenseId: license.id,
        poolId: pool.id,
        clientId: pool.clientId,
        employeeName: userName,
        employeeEmail: userEmail,
        employeeId: userId || null,
        department: department || null,
        action: 'ALLOCATED',
        allocatedAt: new Date(),
        activatedAt: new Date(),
        isActive: true,
      },
    });

    // Update pool counts
    await tx.licensePool.update({
      where: { id: pool.id },
      data: {
        allocatedSeats: { increment: 1 },
        availableSeats: { decrement: 1 },
      },
    });

    // Log activation
    await tx.licenseActivationLog.create({
      data: {
        licenseId: license.id,
        action: 'AUTO_ALLOCATED',
        ipAddress: req.ip || null,
        userAgent: req.headers['user-agent'] || null,
        success: true,
      },
    });

    return { license, allocation };
  });

  sendSuccess(res, {
    allocated: true,
    license: {
      id: result.license.id,
      licenseKey: result.license.licenseKey,
      status: result.license.status,
      userName: result.license.userName,
      userEmail: result.license.userEmail,
      expirationDate: result.license.expirationDate,
    },
    allocation: {
      id: result.allocation.id,
      allocatedAt: result.allocation.allocatedAt,
    },
    pool: {
      totalSeats: pool.totalSeats,
      allocatedSeats: pool.allocatedSeats + 1,
      availableSeats: pool.availableSeats - 1,
    },
  }, 'License allocated successfully');
});

// =============================================================================
// LICENSE DEALLOCATION API
// =============================================================================

/**
 * POST /api/external/licenses/deallocate
 * Deallocate a license when a user is deleted from the product system
 * 
 * Request Body:
 * - userEmail: string (required) - Email of the user to deallocate license from
 * - reason: string (optional) - Reason for deallocation
 * 
 * Response:
 * - deallocated: boolean - Whether deallocation was successful
 * - license: object - License details (now available for reallocation)
 */
export const deallocateLicense = asyncHandler(async (req: ExternalApiRequest, res: Response) => {
  const { userEmail, reason } = req.body;
  const pool = req.licensePool!;

  // Validate required fields
  if (!userEmail) {
    return sendError(res, 'userEmail is required', 400);
  }

  // Find active allocation for this user in this pool (case-insensitive email)
  const allocation = await prisma.licenseAllocation.findFirst({
    where: {
      poolId: pool.id,
      employeeEmail: {
        equals: userEmail,
        mode: 'insensitive',
      },
      isActive: true,
    },
    include: {
      license: true,
    },
  });

  if (!allocation) {
    return sendSuccess(res, {
      deallocated: false,
      reason: 'No active allocation found for this user',
      code: 'ALLOCATION_NOT_FOUND',
    });
  }

  // Use transaction for atomic operations
  const result = await prisma.$transaction(async (tx) => {
    // Update allocation
    const updatedAllocation = await tx.licenseAllocation.update({
      where: { id: allocation.id },
      data: {
        action: 'REVOKED',
        isActive: false,
        revokedAt: new Date(),
        revokeReason: reason || 'User removed from product system',
      },
    });

    // Update license to available
    let updatedLicense = null;
    if (allocation.licenseId) {
      updatedLicense = await tx.license.update({
        where: { id: allocation.licenseId },
        data: {
          status: 'AVAILABLE',
          userName: null,
          userEmail: null,
          lastActive: new Date(),
        },
      });

      // Log deallocation
      await tx.licenseActivationLog.create({
        data: {
          licenseId: allocation.licenseId,
          action: 'DEALLOCATED',
          ipAddress: req.ip || null,
          userAgent: req.headers['user-agent'] || null,
          success: true,
        },
      });
    }

    // Update pool counts
    await tx.licensePool.update({
      where: { id: pool.id },
      data: {
        allocatedSeats: { decrement: 1 },
        availableSeats: { increment: 1 },
      },
    });

    return { allocation: updatedAllocation, license: updatedLicense };
  });

  sendSuccess(res, {
    deallocated: true,
    license: result.license ? {
      id: result.license.id,
      licenseKey: result.license.licenseKey,
      status: result.license.status,
    } : null,
    pool: {
      totalSeats: pool.totalSeats,
      allocatedSeats: pool.allocatedSeats - 1,
      availableSeats: pool.availableSeats + 1,
    },
  }, 'License deallocated successfully');
});

// =============================================================================
// POOL INFO API
// =============================================================================

/**
 * GET /api/external/licenses/status
 * Get comprehensive license pool status and info
 * 
 * Query Parameters:
 * - includeSubscription: boolean - Include full subscription details
 * - includeAddons: boolean - Include addon details
 * - includeBilling: boolean - Include billing info
 * 
 * Response:
 * - pool: object - Pool details and current seat counts
 * - subscription: object - Subscription details
 * - addons: array - Active addons
 * - billing: object - Billing summary
 * - features: string[] - Combined available features
 */
export const getPoolInfo = asyncHandler(async (req: ExternalApiRequest, res: Response) => {
  const pool = req.licensePool!;
  const { 
    includeSubscription = 'true', 
    includeAddons = 'true', 
    includeBilling = 'true' 
  } = req.query;

  // Fetch enriched data from subscription/billing and product features in parallel
  const [enrichedData, productFeatures] = await Promise.all([
    fetchEnrichedLicenseData(pool.subscriptionId, pool.clientId),
    fetchProductFeatures(pool.productId),
  ]);
  const activeAddons = enrichedData.addons.filter(a => a.status === 'ACTIVE');

  // Check if pool is expired
  const isExpired = pool.expirationDate < new Date();
  const daysUntilExpirationVal = daysUntil(pool.expirationDate);

  // Build combined features (license features + active addon features)
  const addonFeatureCodes = activeAddons.map(a => a.addonCode);
  const baseFeatures = pool.selectedFeatures || pool.features;
  const allFeatures = [...new Set([...baseFeatures, ...addonFeatureCodes])];
  
  // Calculate available addons: product features NOT in base features and NOT already purchased
  const baseFeatureCodesUpper = baseFeatures.map(f => f.toUpperCase());
  const purchasedAddonCodesUpper = addonFeatureCodes.map(c => c.toUpperCase());
  const availableAddons = productFeatures.filter(pf => 
    !baseFeatureCodesUpper.includes(pf.code.toUpperCase()) &&
    !purchasedAddonCodesUpper.includes(pf.code.toUpperCase())
  );

  // Get grace period status
  const gracePeriodEnd = new Date(pool.expirationDate);
  gracePeriodEnd.setDate(gracePeriodEnd.getDate() + pool.gracePeriodDays);
  const isInGracePeriod = isExpired && new Date() < gracePeriodEnd;

  // Build response
  const response: any = {
    pool: {
      id: pool.id,
      clientId: pool.clientId,
      clientName: pool.clientName,
      clientEmail: pool.clientEmail,
      productId: pool.productId,
      productName: pool.productName,
      productCode: pool.productCode,
      licenseTypeId: pool.licenseTypeId,
      licenseTypeName: pool.licenseTypeName,
      
      // Seat info
      seats: {
        total: pool.totalSeats,
        allocated: pool.allocatedSeats,
        available: pool.availableSeats,
        utilizationPercent: pool.totalSeats > 0 
          ? Math.round((pool.allocatedSeats / pool.totalSeats) * 100) 
          : 0,
      },
      
      // Dates and expiration
      dates: {
        activation: pool.activationDate,
        expiration: pool.expirationDate,
        gracePeriodEnd: gracePeriodEnd,
        daysUntilExpiration: isExpired ? 0 : daysUntilExpirationVal,
      },
      
      // Status
      status: {
        poolStatus: pool.status,
        isActive: pool.isActive,
        isExpired,
        isInGracePeriod,
        subscriptionStatus: pool.subscriptionStatus,
        paymentStatus: pool.paymentStatus,
      },
      
      // Billing configuration
      billing: {
        cycle: pool.billingCycle,
        pricePerSeat: pool.pricePerSeat ? Number(pool.pricePerSeat) : null,
        totalAmount: pool.totalAmount ? Number(pool.totalAmount) : null,
        currency: pool.currency,
        autoRenew: pool.autoRenew,
        nextBillingDate: pool.nextBillingDate,
      },
    },
    
    // Features
    features: {
      all: allFeatures,
      base: baseFeatures,
      activeAddons: activeAddons.map(formatAddonForResponse),
      available: availableAddons,
    },
  };

  // Add subscription details if requested
  if (includeSubscription === 'true' && enrichedData.subscription) {
    response.subscription = buildSubscriptionInfo(enrichedData, pool);
  }

  // Add billing info if requested
  if (includeBilling === 'true') {
    response.billing = buildBillingInfo(enrichedData);
  }

  // Add warnings
  const warnings: string[] = [];
  if (isInGracePeriod) {
    warnings.push(`License is in grace period. Expires on ${gracePeriodEnd.toISOString().split('T')[0]}`);
  }
  if (daysUntilExpirationVal <= 30 && daysUntilExpirationVal > 0) {
    warnings.push(`License expires in ${daysUntilExpirationVal} days`);
  }
  if (pool.availableSeats <= 0) {
    warnings.push('No available seats. Consider upgrading your plan.');
  }
  if (enrichedData.billing?.outstandingBalance && enrichedData.billing.outstandingBalance > 0) {
    warnings.push(`Outstanding balance: ${pool.currency} ${enrichedData.billing.outstandingBalance}`);
  }
  if (warnings.length > 0) {
    response.warnings = warnings;
  }

  sendSuccess(res, response);
});

// =============================================================================
// LIST ALLOCATIONS API
// =============================================================================

/**
 * GET /api/external/licenses/allocations
 * List all allocations for the pool
 * 
 * Query Parameters:
 * - active: boolean (optional) - Filter by active status
 * - page: number (optional) - Page number
 * - limit: number (optional) - Results per page
 * 
 * Response:
 * - allocations: array - List of allocations
 */
export const listAllocations = asyncHandler(async (req: ExternalApiRequest, res: Response) => {
  const pool = req.licensePool!;
  const { active, page = '1', limit = '50' } = req.query;

  const pageNum = parseInt(page as string, 10);
  const limitNum = Math.min(parseInt(limit as string, 10), 100);
  const skip = (pageNum - 1) * limitNum;

  const where: any = { poolId: pool.id };
  if (active !== undefined) {
    where.isActive = active === 'true';
  }

  const [allocations, total] = await Promise.all([
    prisma.licenseAllocation.findMany({
      where,
      skip,
      take: limitNum,
      orderBy: { allocatedAt: 'desc' },
      select: {
        id: true,
        employeeName: true,
        employeeEmail: true,
        employeeId: true,
        department: true,
        action: true,
        allocatedAt: true,
        activatedAt: true,
        revokedAt: true,
        isActive: true,
        license: {
          select: {
            id: true,
            licenseKey: true,
            status: true,
            lastActive: true,
          },
        },
      },
    }),
    prisma.licenseAllocation.count({ where }),
  ]);

  sendPaginated(res, allocations, pageNum, limitNum, total);
});

// =============================================================================
// LICENSE ACTIVATION API
// =============================================================================

/**
 * POST /api/external/licenses/activate
 * Activate a license (mark as actively in use)
 */
export const activateLicense = asyncHandler(async (req: ExternalApiRequest, res: Response) => {
  const { licenseKey, userEmail, deviceId, deviceName, deviceType } = req.body;
  const pool = req.licensePool!;

  if (!licenseKey) {
    return sendError(res, 'licenseKey is required', 400);
  }

  const license = await prisma.license.findFirst({
    where: {
      licenseKey,
      poolId: pool.id,
    },
  });

  if (!license) {
    return sendNotFound(res, 'License not found');
  }

  // Verify user email if provided
  if (userEmail && license.userEmail && license.userEmail.toLowerCase() !== userEmail.toLowerCase()) {
    return sendError(res, 'License is assigned to a different user', 403);
  }

  // Update license status
  const updatedLicense = await prisma.license.update({
    where: { id: license.id },
    data: {
      status: 'ACTIVE',
      lastActive: new Date(),
      activationDate: license.activationDate || new Date(),
    },
  });

  // Log activation
  await prisma.licenseActivationLog.create({
    data: {
      licenseId: license.id,
      action: 'ACTIVATED',
      deviceId,
      deviceName,
      deviceType,
      ipAddress: req.ip || null,
      userAgent: req.headers['user-agent'] || null,
      success: true,
    },
  });

  sendSuccess(res, {
    activated: true,
    license: {
      id: updatedLicense.id,
      licenseKey: updatedLicense.licenseKey,
      status: updatedLicense.status,
      activationDate: updatedLicense.activationDate,
      expirationDate: updatedLicense.expirationDate,
    },
  }, 'License activated successfully');
});

/**
 * POST /api/external/licenses/deactivate
 * Deactivate a license (mark as not in use but still allocated)
 */
export const deactivateLicense = asyncHandler(async (req: ExternalApiRequest, res: Response) => {
  const { licenseKey, userEmail, reason } = req.body;
  const pool = req.licensePool!;

  if (!licenseKey) {
    return sendError(res, 'licenseKey is required', 400);
  }

  const license = await prisma.license.findFirst({
    where: {
      licenseKey,
      poolId: pool.id,
    },
  });

  if (!license) {
    return sendNotFound(res, 'License not found');
  }

  // Update license status back to allocated
  const updatedLicense = await prisma.license.update({
    where: { id: license.id },
    data: {
      status: 'ALLOCATED',
      lastActive: new Date(),
    },
  });

  // Log deactivation
  await prisma.licenseActivationLog.create({
    data: {
      licenseId: license.id,
      action: 'DEACTIVATED',
      ipAddress: req.ip || null,
      userAgent: req.headers['user-agent'] || null,
      success: true,
    },
  });

  sendSuccess(res, {
    deactivated: true,
    license: {
      id: updatedLicense.id,
      licenseKey: updatedLicense.licenseKey,
      status: updatedLicense.status,
    },
  }, 'License deactivated successfully');
});
