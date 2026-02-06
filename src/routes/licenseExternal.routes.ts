// External License API Routes
// Phase 4.6: Routes for product systems to validate, allocate, and deallocate licenses

import { Router } from 'express';
import { body, query } from 'express-validator';
import { validate } from '../middleware/validate';
import { authenticatePoolKey } from '../middleware/apiKeyAuth';
import {
  validateLicense,
  autoAllocateLicense,
  deallocateLicense,
  getPoolInfo,
  listAllocations,
  activateLicense,
  deactivateLicense,
} from '../controllers/licenseExternal.controller';

const router = Router();

// =============================================================================
// MIDDLEWARE
// All routes require pool key authentication
// =============================================================================
router.use(authenticatePoolKey);

// =============================================================================
// VALIDATION SCHEMAS
// =============================================================================

const validateLicenseValidation = [
  body('licenseKey')
    .optional()
    .isString()
    .withMessage('License key must be a string'),
  body('userEmail')
    .optional()
    .isEmail()
    .withMessage('Invalid email format'),
  body('deviceId')
    .optional()
    .isString()
    .withMessage('Device ID must be a string'),
];

const allocateLicenseValidation = [
  body('userEmail')
    .isEmail()
    .withMessage('Valid email is required'),
  body('userName')
    .isString()
    .trim()
    .isLength({ min: 1, max: 200 })
    .withMessage('User name is required (1-200 characters)'),
  body('userId')
    .optional()
    .isString()
    .withMessage('User ID must be a string'),
  body('department')
    .optional()
    .isString()
    .trim()
    .isLength({ max: 100 })
    .withMessage('Department must be at most 100 characters'),
];

const deallocateLicenseValidation = [
  body('userEmail')
    .isEmail()
    .withMessage('Valid email is required'),
  body('reason')
    .optional()
    .isString()
    .trim()
    .isLength({ max: 500 })
    .withMessage('Reason must be at most 500 characters'),
];

const listAllocationsValidation = [
  query('active')
    .optional()
    .isIn(['true', 'false'])
    .withMessage('Active must be true or false'),
  query('page')
    .optional()
    .isInt({ min: 1 })
    .withMessage('Page must be a positive integer'),
  query('limit')
    .optional()
    .isInt({ min: 1, max: 100 })
    .withMessage('Limit must be between 1 and 100'),
];

// =============================================================================
// ROUTES
// =============================================================================

/**
 * @route   POST /api/external/licenses/validate
 * @desc    Validate a license key or pool
 * @access  External (Pool Key required)
 * 
 * @header  X-Pool-Key - The pool key for authentication
 * 
 * @body    {
 *            licenseKey?: string,  // Optional: specific license to validate
 *            userEmail?: string,   // Optional: check if allocated to this user
 *            deviceId?: string     // Optional: device identifier for logging
 *          }
 * 
 * @returns {
 *            valid: boolean,
 *            license?: { id, licenseKey, status, userName, userEmail, expirationDate, features },
 *            pool?: { id, totalSeats, allocatedSeats, availableSeats, expirationDate },
 *            reason?: string,      // If invalid, the reason
 *            code?: string         // Error code for programmatic handling
 *          }
 */
router.post('/validate', validate(validateLicenseValidation), validateLicense);

/**
 * @route   POST /api/external/licenses/allocate
 * @desc    Auto-allocate a license to a user
 * @access  External (Pool Key required)
 * 
 * @header  X-Pool-Key - The pool key for authentication
 * 
 * @body    {
 *            userEmail: string,    // Required: email of user to allocate to
 *            userName: string,     // Required: name of the user
 *            userId?: string,      // Optional: internal user ID from product system
 *            department?: string   // Optional: user's department
 *          }
 * 
 * @returns {
 *            allocated: boolean,
 *            alreadyAllocated?: boolean,  // True if user already had a license
 *            license: { id, licenseKey, status, userName, userEmail, expirationDate },
 *            allocation: { id, allocatedAt },
 *            pool: { totalSeats, allocatedSeats, availableSeats }
 *          }
 */
router.post('/allocate', validate(allocateLicenseValidation), autoAllocateLicense);

/**
 * @route   POST /api/external/licenses/deallocate
 * @desc    Deallocate a license from a user
 * @access  External (Pool Key required)
 * 
 * @header  X-Pool-Key - The pool key for authentication
 * 
 * @body    {
 *            userEmail: string,    // Required: email of user to deallocate from
 *            reason?: string       // Optional: reason for deallocation
 *          }
 * 
 * @returns {
 *            deallocated: boolean,
 *            previousUser?: { email, name },
 *            license?: { id, licenseKey, status },
 *            pool: { totalSeats, allocatedSeats, availableSeats }
 *          }
 */
router.post('/deallocate', validate(deallocateLicenseValidation), deallocateLicense);

/**
 * @route   GET /api/external/licenses/pool-info
 * @desc    Get current pool information
 * @access  External (Pool Key required)
 * 
 * @header  X-Pool-Key - The pool key for authentication
 * 
 * @returns {
 *            pool: { id, poolKey, totalSeats, allocatedSeats, availableSeats, ... },
 *            client: { id, name },
 *            product: { id, name, code },
 *            licenseType: { id, type, displayName, features },
 *            subscription: { id, status, billingCycle, ... },
 *            allocations: [ { id, employeeName, employeeEmail, ... } ]
 *          }
 */
router.get('/pool-info', getPoolInfo);

/**
 * @route   GET /api/external/licenses/allocations
 * @desc    List all allocations in the pool
 * @access  External (Pool Key required)
 * 
 * @header  X-Pool-Key - The pool key for authentication
 * 
 * @query   {
 *            active?: boolean,     // Filter by active/inactive
 *            page?: number,        // Page number (default: 1)
 *            limit?: number        // Items per page (default: 50, max: 100)
 *          }
 * 
 * @returns {
 *            allocations: [ { id, employeeName, employeeEmail, license, ... } ],
 *            pagination: { page, limit, total, totalPages },
 *            pool: { totalSeats, allocatedSeats, availableSeats }
 *          }
 */
router.get('/allocations', validate(listAllocationsValidation), listAllocations);

/**
 * @route   GET /api/external/licenses/status
 * @desc    Get pool status (alias for pool-info)
 * @access  External (Pool Key required)
 */
router.get('/status', getPoolInfo);

/**
 * @route   POST /api/external/licenses/activate
 * @desc    Activate a license (mark as actively in use)
 * @access  External (Pool Key required)
 */
router.post('/activate', activateLicense);

/**
 * @route   POST /api/external/licenses/deactivate
 * @desc    Deactivate a license (mark as not in use but still allocated)
 * @access  External (Pool Key required)
 */
router.post('/deactivate', deactivateLicense);

export default router;
