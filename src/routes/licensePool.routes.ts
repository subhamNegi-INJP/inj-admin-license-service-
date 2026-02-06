// License Pool management routes
// Pool allocation and distribution

import { Router } from 'express';
import {
  getLicensePools,
  getLicensePool,
  createLicensePool,
  updateLicensePool,
  getPoolAllocations,
  allocateLicenses,
  deallocateLicenses,
  transferLicenses,
  getPoolStats,
} from '../controllers/licensePool.controller';
import { authenticate } from '../middleware/auth';
import { adminOnly } from '../middleware/authorize';
import { validate } from '../middleware/validate';
import { body, param, query } from 'express-validator';

const router = Router();

router.use(authenticate);

// =============================================================================
// VALIDATION RULES
// =============================================================================

const paginationValidation = [
  query('page').optional().isInt({ min: 1 }).withMessage('Page must be a positive integer'),
  query('limit').optional().isInt({ min: 1, max: 100 }).withMessage('Limit must be between 1 and 100'),
  query('sortBy').optional().isString(),
  query('sortOrder').optional().isIn(['asc', 'desc']),
];

const poolIdValidation = [
  param('poolId').isString().notEmpty().withMessage('Pool ID is required'),
];

const createPoolValidation = [
  body('clientId').isString().notEmpty().withMessage('Client ID is required'),
  body('clientName').isString().notEmpty().withMessage('Client name is required'),
  body('subscriptionId').isString().notEmpty().withMessage('Subscription ID is required'),
  body('productId').isString().notEmpty().withMessage('Product ID is required'),
  body('productName').isString().notEmpty().withMessage('Product name is required'),
  body('productCode').isString().notEmpty().withMessage('Product code is required'),
  body('licenseTypeId').isString().notEmpty().withMessage('License type ID is required'),
  body('licenseTypeName').isString().notEmpty().withMessage('License type name is required'),
  body('totalSeats').isInt({ min: 1 }).withMessage('Total seats must be at least 1'),
  body('expirationDate').isISO8601().withMessage('Valid expiration date is required'),
  body('gracePeriodDays').optional().isInt({ min: 0 }),
  body('features').optional().isArray(),
  body('selectedFeatures').optional().isArray(),
];

const updatePoolValidation = [
  param('poolId').isString().notEmpty().withMessage('Pool ID is required'),
  body('totalSeats').optional().isInt({ min: 0 }),
  body('gracePeriodDays').optional().isInt({ min: 0 }),
  body('isActive').optional().isBoolean(),
  body('status').optional().isIn(['ACTIVE', 'INACTIVE', 'EXPIRED', 'SUSPENDED']),
  body('expirationDate').optional().isISO8601(),
  body('features').optional().isArray(),
  body('selectedFeatures').optional().isArray(),
];

const allocateValidation = [
  ...poolIdValidation,
  body('employeeName').isString().notEmpty().withMessage('Employee name is required'),
  body('employeeEmail').isEmail().withMessage('Valid employee email is required'),
  body('employeeId').optional().isString(),
  body('department').optional().isString(),
];

const deallocateValidation = [
  ...poolIdValidation,
  body('employeeEmail').optional().isEmail(),
  body('licenseId').optional().isString(),
  body('reason').optional().isString(),
];

const transferValidation = [
  ...poolIdValidation,
  body('fromEmployeeEmail').isEmail().withMessage('From employee email is required'),
  body('toEmployeeName').isString().notEmpty().withMessage('To employee name is required'),
  body('toEmployeeEmail').isEmail().withMessage('Valid to employee email is required'),
  body('toEmployeeId').optional().isString(),
  body('toDepartment').optional().isString(),
];

// =============================================================================
// LICENSE POOL ROUTES
// =============================================================================

/**
 * @route   GET /api/license-pools
 * @desc    Get all license pools
 * @access  Private (Admin)
 */
router.get(
  '/',
  adminOnly,
  validate(paginationValidation),
  getLicensePools
);

/**
 * @route   GET /api/license-pools/:poolId
 * @desc    Get pool by ID
 * @access  Private (Admin)
 */
router.get(
  '/:poolId',
  adminOnly,
  validate(poolIdValidation),
  getLicensePool
);

/**
 * @route   POST /api/license-pools
 * @desc    Create new license pool
 * @access  Private (Admin)
 */
router.post(
  '/',
  adminOnly,
  validate(createPoolValidation),
  createLicensePool
);

/**
 * @route   PUT /api/license-pools/:poolId
 * @desc    Update license pool
 * @access  Private (Admin)
 */
router.put(
  '/:poolId',
  adminOnly,
  validate(updatePoolValidation),
  updateLicensePool
);

/**
 * @route   GET /api/license-pools/:poolId/stats
 * @desc    Get pool statistics
 * @access  Private (Admin)
 */
router.get(
  '/:poolId/stats',
  adminOnly,
  validate(poolIdValidation),
  getPoolStats
);

// =============================================================================
// ALLOCATION ROUTES
// =============================================================================

/**
 * @route   GET /api/license-pools/:poolId/allocations
 * @desc    Get pool allocations
 * @access  Private (Admin)
 */
router.get(
  '/:poolId/allocations',
  adminOnly,
  validate(poolIdValidation),
  getPoolAllocations
);

/**
 * @route   POST /api/license-pools/:poolId/allocate
 * @desc    Allocate licenses from pool
 * @access  Private (Admin)
 */
router.post(
  '/:poolId/allocate',
  adminOnly,
  validate(allocateValidation),
  allocateLicenses
);

/**
 * @route   POST /api/license-pools/:poolId/deallocate
 * @desc    Return licenses to pool
 * @access  Private (Admin)
 */
router.post(
  '/:poolId/deallocate',
  adminOnly,
  validate(deallocateValidation),
  deallocateLicenses
);

/**
 * @route   POST /api/license-pools/:poolId/transfer
 * @desc    Transfer licenses between pools
 * @access  Private (Admin)
 */
router.post(
  '/:poolId/transfer',
  adminOnly,
  validate(transferValidation),
  transferLicenses
);

export default router;
