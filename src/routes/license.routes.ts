// License routes
// Phase 4.3: Individual license management routes

import { Router } from 'express';
import { body, param, query } from 'express-validator';
import { authenticate } from '../middleware/auth';
import { adminOnly } from '../middleware/authorize';
import { validate } from '../middleware/validate';
import {
  getAllLicenses,
  getLicenseById,
  updateLicenseStatus,
  blockLicense,
  unblockLicense,
  blockDevice,
  unblockDevice,
} from '../controllers/license.controller';

const router = Router();

// Apply authentication to all routes
router.use(authenticate);

// =============================================================================
// VALIDATION SCHEMAS
// =============================================================================

const paginationValidation = [
  query('page').optional().isInt({ min: 1 }).withMessage('Page must be a positive integer'),
  query('limit').optional().isInt({ min: 1, max: 100 }).withMessage('Limit must be between 1 and 100'),
  query('sortBy').optional().isString(),
  query('sortOrder').optional().isIn(['asc', 'desc']),
];

const licenseIdValidation = [
  param('licenseId').isString().notEmpty().withMessage('License ID is required'),
];

const deviceIdValidation = [
  param('deviceId').isString().notEmpty().withMessage('Device ID is required'),
];

const statusValidation = [
  body('status')
    .isString()
    .isIn(['ACTIVE', 'INACTIVE', 'AVAILABLE', 'ALLOCATED', 'EXPIRED', 'GRACE_PERIOD', 'VIOLATION', 'SUSPENDED', 'REVOKED', 'TERMINATED'])
    .withMessage('Invalid license status'),
];

// =============================================================================
// LICENSE ROUTES
// =============================================================================

/**
 * @route   GET /api/licenses
 * @desc    Get all licenses with pagination
 * @access  Private (Admin)
 */
router.get(
  '/',
  adminOnly,
  validate(paginationValidation),
  getAllLicenses
);

/**
 * @route   GET /api/licenses/:licenseId
 * @desc    Get license by ID
 * @access  Private (Admin)
 */
router.get(
  '/:licenseId',
  adminOnly,
  validate(licenseIdValidation),
  getLicenseById
);

/**
 * @route   PATCH /api/licenses/:licenseId/status
 * @desc    Update license status
 * @access  Private (Admin)
 */
router.patch(
  '/:licenseId/status',
  adminOnly,
  validate([...licenseIdValidation, ...statusValidation]),
  updateLicenseStatus
);

/**
 * @route   POST /api/licenses/:licenseId/block
 * @desc    Block a license
 * @access  Private (Admin)
 */
router.post(
  '/:licenseId/block',
  adminOnly,
  validate([
    ...licenseIdValidation,
    body('reason').optional().isString(),
  ]),
  blockLicense
);

/**
 * @route   POST /api/licenses/:licenseId/unblock
 * @desc    Unblock a license
 * @access  Private (Admin)
 */
router.post(
  '/:licenseId/unblock',
  adminOnly,
  validate(licenseIdValidation),
  unblockLicense
);

/**
 * @route   POST /api/licenses/:licenseId/devices/:deviceId/block
 * @desc    Block a device on a license
 * @access  Private (Admin)
 */
router.post(
  '/:licenseId/devices/:deviceId/block',
  adminOnly,
  validate([...licenseIdValidation, ...deviceIdValidation]),
  blockDevice
);

/**
 * @route   POST /api/licenses/:licenseId/devices/:deviceId/unblock
 * @desc    Unblock a device on a license
 * @access  Private (Admin)
 */
router.post(
  '/:licenseId/devices/:deviceId/unblock',
  adminOnly,
  validate([...licenseIdValidation, ...deviceIdValidation]),
  unblockDevice
);

export default router;
