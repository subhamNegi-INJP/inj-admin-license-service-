
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.22.0
 * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
 */
Prisma.prismaVersion = {
  client: "5.22.0",
  engine: "605197351a3c8bdd595af2d2a9bc3025bca48ea2"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`NotFoundError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.LicensePoolScalarFieldEnum = {
  id: 'id',
  clientId: 'clientId',
  clientName: 'clientName',
  clientEmail: 'clientEmail',
  subscriptionId: 'subscriptionId',
  productId: 'productId',
  productName: 'productName',
  productCode: 'productCode',
  licenseTypeId: 'licenseTypeId',
  licenseTypeName: 'licenseTypeName',
  totalSeats: 'totalSeats',
  allocatedSeats: 'allocatedSeats',
  availableSeats: 'availableSeats',
  poolKey: 'poolKey',
  poolKeyHash: 'poolKeyHash',
  activationDate: 'activationDate',
  expirationDate: 'expirationDate',
  gracePeriodDays: 'gracePeriodDays',
  features: 'features',
  selectedFeatures: 'selectedFeatures',
  billingCycle: 'billingCycle',
  pricePerSeat: 'pricePerSeat',
  totalAmount: 'totalAmount',
  currency: 'currency',
  subscriptionStatus: 'subscriptionStatus',
  paymentStatus: 'paymentStatus',
  autoRenew: 'autoRenew',
  nextBillingDate: 'nextBillingDate',
  status: 'status',
  isActive: 'isActive',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.LicenseScalarFieldEnum = {
  id: 'id',
  licenseKey: 'licenseKey',
  licenseKeyHash: 'licenseKeyHash',
  clientId: 'clientId',
  clientName: 'clientName',
  productId: 'productId',
  productName: 'productName',
  productCode: 'productCode',
  licenseTypeId: 'licenseTypeId',
  licenseTypeName: 'licenseTypeName',
  status: 'status',
  poolId: 'poolId',
  userName: 'userName',
  userEmail: 'userEmail',
  deviceLimit: 'deviceLimit',
  sessionLimit: 'sessionLimit',
  deviceCount: 'deviceCount',
  currentSessions: 'currentSessions',
  lastActive: 'lastActive',
  activationDate: 'activationDate',
  expirationDate: 'expirationDate',
  boundHardwareId: 'boundHardwareId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.LicenseDeviceScalarFieldEnum = {
  id: 'id',
  licenseId: 'licenseId',
  macAddress: 'macAddress',
  ipAddress: 'ipAddress',
  hostname: 'hostname',
  location: 'location',
  deviceType: 'deviceType',
  deviceName: 'deviceName',
  osInfo: 'osInfo',
  status: 'status',
  lastActive: 'lastActive',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.LicenseSessionScalarFieldEnum = {
  id: 'id',
  licenseId: 'licenseId',
  sessionToken: 'sessionToken',
  deviceId: 'deviceId',
  deviceName: 'deviceName',
  ipAddress: 'ipAddress',
  userAgent: 'userAgent',
  location: 'location',
  startedAt: 'startedAt',
  lastActivityAt: 'lastActivityAt',
  expiresAt: 'expiresAt',
  isActive: 'isActive',
  terminatedAt: 'terminatedAt',
  terminatedBy: 'terminatedBy',
  terminateReason: 'terminateReason'
};

exports.Prisma.LicenseAllocationScalarFieldEnum = {
  id: 'id',
  licenseId: 'licenseId',
  poolId: 'poolId',
  clientId: 'clientId',
  employeeName: 'employeeName',
  employeeEmail: 'employeeEmail',
  employeeId: 'employeeId',
  department: 'department',
  action: 'action',
  allocatedAt: 'allocatedAt',
  allocatedById: 'allocatedById',
  allocatedByName: 'allocatedByName',
  activatedAt: 'activatedAt',
  revokedAt: 'revokedAt',
  revokedById: 'revokedById',
  revokedByName: 'revokedByName',
  revokeReason: 'revokeReason',
  transferredFrom: 'transferredFrom',
  isActive: 'isActive',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.LicenseActivationLogScalarFieldEnum = {
  id: 'id',
  licenseId: 'licenseId',
  action: 'action',
  deviceId: 'deviceId',
  deviceType: 'deviceType',
  deviceName: 'deviceName',
  macAddress: 'macAddress',
  ipAddress: 'ipAddress',
  userAgent: 'userAgent',
  location: 'location',
  success: 'success',
  errorMessage: 'errorMessage',
  performedBy: 'performedBy',
  performedByName: 'performedByName',
  timestamp: 'timestamp'
};

exports.Prisma.LicenseUsageStatsScalarFieldEnum = {
  id: 'id',
  licenseId: 'licenseId',
  poolId: 'poolId',
  clientId: 'clientId',
  productId: 'productId',
  periodStart: 'periodStart',
  periodEnd: 'periodEnd',
  periodType: 'periodType',
  activeUsers: 'activeUsers',
  totalSessions: 'totalSessions',
  totalDuration: 'totalDuration',
  peakConcurrent: 'peakConcurrent',
  featureUsage: 'featureUsage',
  createdAt: 'createdAt'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullableJsonNullValueInput = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.JsonNullValueFilter = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
};
exports.PoolStatus = exports.$Enums.PoolStatus = {
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE',
  EXPIRED: 'EXPIRED',
  GRACE_PERIOD: 'GRACE_PERIOD',
  SUSPENDED: 'SUSPENDED'
};

exports.LicenseStatus = exports.$Enums.LicenseStatus = {
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE',
  AVAILABLE: 'AVAILABLE',
  ALLOCATED: 'ALLOCATED',
  EXPIRED: 'EXPIRED',
  GRACE_PERIOD: 'GRACE_PERIOD',
  VIOLATION: 'VIOLATION',
  SUSPENDED: 'SUSPENDED',
  REVOKED: 'REVOKED',
  TERMINATED: 'TERMINATED'
};

exports.DeviceType = exports.$Enums.DeviceType = {
  DESKTOP: 'DESKTOP',
  LAPTOP: 'LAPTOP',
  MOBILE: 'MOBILE',
  TABLET: 'TABLET',
  SERVER: 'SERVER',
  OTHER: 'OTHER'
};

exports.DeviceStatus = exports.$Enums.DeviceStatus = {
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE',
  BLOCKED: 'BLOCKED'
};

exports.AllocationAction = exports.$Enums.AllocationAction = {
  ALLOCATED: 'ALLOCATED',
  REVOKED: 'REVOKED',
  TRANSFERRED: 'TRANSFERRED',
  EXPIRED: 'EXPIRED'
};

exports.Prisma.ModelName = {
  LicensePool: 'LicensePool',
  License: 'License',
  LicenseDevice: 'LicenseDevice',
  LicenseSession: 'LicenseSession',
  LicenseAllocation: 'LicenseAllocation',
  LicenseActivationLog: 'LicenseActivationLog',
  LicenseUsageStats: 'LicenseUsageStats'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
