// License Service Type Definitions

import { Request } from 'express';

// =============================================================================
// JWT & AUTH TYPES
// =============================================================================

export interface JWTPayload {
  userId: string;
  email: string;
  name: string;
  roleId: string;
  roleName: string;
  permissions?: Array<{
    resourceCode: string;
    action: string;
  }>;
  iat?: number;
  exp?: number;
}

export interface AuthenticatedRequest extends Request {
  user?: JWTPayload;
  userId?: string;
  userType?: 'user' | 'client';
}

// =============================================================================
// API RESPONSE TYPES
// =============================================================================

export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
  errors?: ValidationError[];
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    hasMore: boolean;
  };
}

export interface ValidationError {
  field: string;
  message: string;
}

// =============================================================================
// LICENSE TYPES
// =============================================================================

export type LicenseStatus = 
  | 'ACTIVE'
  | 'INACTIVE'
  | 'AVAILABLE'
  | 'ALLOCATED'
  | 'EXPIRED'
  | 'GRACE_PERIOD'
  | 'VIOLATION'
  | 'SUSPENDED'
  | 'REVOKED'
  | 'TERMINATED';

export type DeviceStatus = 'ACTIVE' | 'INACTIVE' | 'BLOCKED';

export type DeviceType = 'DESKTOP' | 'LAPTOP' | 'MOBILE' | 'TABLET' | 'SERVER' | 'OTHER';

export type AllocationAction = 'ALLOCATED' | 'REVOKED' | 'TRANSFERRED' | 'EXPIRED';

export type PoolStatus = 'ACTIVE' | 'INACTIVE' | 'EXPIRED' | 'SUSPENDED';

// =============================================================================
// LICENSE POOL TYPES
// =============================================================================

export interface CreateLicensePoolRequest {
  clientId: string;
  clientName: string;
  clientEmail?: string;
  subscriptionId: string;
  productId: string;
  productName: string;
  productCode: string;
  licenseTypeId: string;
  licenseTypeName: string;
  totalSeats: number;
  expirationDate: string;
  gracePeriodDays?: number;
  features?: string[];
  selectedFeatures?: string[];
}

export interface UpdateLicensePoolRequest {
  totalSeats?: number;
  expirationDate?: string;
  gracePeriodDays?: number;
  features?: string[];
  selectedFeatures?: string[];
  isActive?: boolean;
  status?: PoolStatus;
}

// =============================================================================
// LICENSE TYPES
// =============================================================================

export interface CreateLicenseRequest {
  clientId?: string;
  clientName?: string;
  productId: string;
  productName: string;
  productCode: string;
  licenseTypeId?: string;
  licenseTypeName?: string;
  poolId?: string;
  userName?: string;
  userEmail?: string;
  deviceLimit?: number;
  sessionLimit?: number;
  expirationDate?: string;
}

export interface UpdateLicenseRequest {
  status?: LicenseStatus;
  userName?: string;
  userEmail?: string;
  deviceLimit?: number;
  sessionLimit?: number;
  expirationDate?: string;
}

// =============================================================================
// ALLOCATION TYPES
// =============================================================================

export interface AllocateLicenseRequest {
  poolId?: string;
  licenseId?: string;
  employeeName: string;
  employeeEmail: string;
  employeeId?: string;
  department?: string;
  allocatedById?: string;
  allocatedByName?: string;
}

export interface DeallocateLicenseRequest {
  licenseId?: string;
  allocationId?: string;
  employeeEmail?: string;
  reason?: string;
  revokedById?: string;
  revokedByName?: string;
}

export interface TransferLicenseRequest {
  fromAllocationId: string;
  toEmployeeName: string;
  toEmployeeEmail: string;
  toEmployeeId?: string;
  toDepartment?: string;
  transferredById?: string;
  transferredByName?: string;
}

// =============================================================================
// DEVICE TYPES
// =============================================================================

export interface RegisterDeviceRequest {
  licenseId: string;
  macAddress: string;
  ipAddress?: string;
  hostname?: string;
  deviceType?: DeviceType;
  deviceName?: string;
  osInfo?: string;
  location?: string;
}

// =============================================================================
// SESSION TYPES
// =============================================================================

export interface CreateSessionRequest {
  licenseId: string;
  deviceId?: string;
  deviceName?: string;
  ipAddress?: string;
  userAgent?: string;
  location?: string;
  expiresAt: string;
}

// =============================================================================
// EXTERNAL API TYPES
// =============================================================================

export interface ValidateLicenseRequest {
  licenseKey?: string;
  userEmail?: string;
  deviceId?: string;
}

export interface ValidateLicenseResponse {
  valid: boolean;
  reason?: string;
  code?: string;
  license?: {
    id: string;
    licenseKey: string;
    status: LicenseStatus;
    userName?: string;
    userEmail?: string;
    expirationDate?: Date;
    deviceLimit: number;
    deviceCount: number;
    features: string[];
    selectedFeatures: string[];
  };
  pool?: {
    id: string;
    totalSeats: number;
    allocatedSeats: number;
    availableSeats: number;
    expirationDate: Date;
  };
}

export interface AutoAllocateRequest {
  userEmail: string;
  userName: string;
  userId?: string;
  department?: string;
}

export interface AutoAllocateResponse {
  allocated: boolean;
  reason?: string;
  license?: {
    id: string;
    licenseKey: string;
    status: LicenseStatus;
    expirationDate?: Date;
  };
  allocation?: {
    id: string;
    allocatedAt: Date;
  };
}

// =============================================================================
// EVENT TYPES
// =============================================================================

export interface LicenseEvent {
  eventId: string;
  eventType: string;
  aggregateId: string;
  aggregateType: 'License' | 'LicensePool' | 'LicenseAllocation' | 'LicenseDevice';
  timestamp: string;
  version: number;
  payload: Record<string, unknown>;
  metadata: {
    correlationId: string;
    causationId?: string;
    userId?: string;
  };
}

// Event types
export type LicenseEventType =
  | 'license.created'
  | 'license.activated'
  | 'license.deactivated'
  | 'license.expired'
  | 'license.revoked'
  | 'license.suspended'
  | 'license.allocated'
  | 'license.deallocated'
  | 'license.transferred'
  | 'licensePool.created'
  | 'licensePool.updated'
  | 'licensePool.seatsUpdated'
  | 'licensePool.expired'
  | 'device.registered'
  | 'device.blocked'
  | 'device.unblocked'
  | 'session.started'
  | 'session.ended';

// =============================================================================
// STATS TYPES
// =============================================================================

export interface LicenseStats {
  totalLicenses: number;
  activeLicenses: number;
  allocatedLicenses: number;
  availableLicenses: number;
  expiredLicenses: number;
  suspendedLicenses: number;
}

export interface PoolStats {
  totalPools: number;
  activePools: number;
  totalSeats: number;
  allocatedSeats: number;
  availableSeats: number;
  utilizationRate: number;
}
