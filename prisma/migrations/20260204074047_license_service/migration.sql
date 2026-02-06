-- CreateEnum
CREATE TYPE "LicenseStatus" AS ENUM ('ACTIVE', 'INACTIVE', 'AVAILABLE', 'ALLOCATED', 'EXPIRED', 'GRACE_PERIOD', 'VIOLATION', 'SUSPENDED', 'REVOKED', 'TERMINATED');

-- CreateEnum
CREATE TYPE "DeviceStatus" AS ENUM ('ACTIVE', 'INACTIVE', 'BLOCKED');

-- CreateEnum
CREATE TYPE "DeviceType" AS ENUM ('DESKTOP', 'LAPTOP', 'MOBILE', 'TABLET', 'SERVER', 'OTHER');

-- CreateEnum
CREATE TYPE "AllocationAction" AS ENUM ('ALLOCATED', 'REVOKED', 'TRANSFERRED', 'EXPIRED');

-- CreateEnum
CREATE TYPE "PoolStatus" AS ENUM ('ACTIVE', 'INACTIVE', 'EXPIRED', 'SUSPENDED');

-- CreateTable
CREATE TABLE "license_pools" (
    "id" TEXT NOT NULL,
    "clientId" TEXT NOT NULL,
    "clientName" TEXT NOT NULL,
    "clientEmail" TEXT,
    "subscriptionId" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    "productName" TEXT NOT NULL,
    "productCode" TEXT NOT NULL,
    "licenseTypeId" TEXT NOT NULL,
    "licenseTypeName" TEXT NOT NULL,
    "totalSeats" INTEGER NOT NULL,
    "allocatedSeats" INTEGER NOT NULL DEFAULT 0,
    "availableSeats" INTEGER NOT NULL,
    "poolKey" TEXT NOT NULL,
    "poolKeyHash" TEXT NOT NULL,
    "activationDate" TIMESTAMP(3),
    "expirationDate" TIMESTAMP(3) NOT NULL,
    "gracePeriodDays" INTEGER NOT NULL DEFAULT 7,
    "features" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "selectedFeatures" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "status" "PoolStatus" NOT NULL DEFAULT 'ACTIVE',
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "license_pools_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "licenses" (
    "id" TEXT NOT NULL,
    "licenseKey" TEXT NOT NULL,
    "licenseKeyHash" TEXT,
    "clientId" TEXT,
    "clientName" TEXT,
    "productId" TEXT NOT NULL,
    "productName" TEXT NOT NULL,
    "productCode" TEXT NOT NULL,
    "licenseTypeId" TEXT,
    "licenseTypeName" TEXT,
    "status" "LicenseStatus" NOT NULL DEFAULT 'AVAILABLE',
    "poolId" TEXT,
    "userName" TEXT,
    "userEmail" TEXT,
    "deviceLimit" INTEGER NOT NULL DEFAULT 1,
    "sessionLimit" INTEGER NOT NULL DEFAULT 1,
    "deviceCount" INTEGER NOT NULL DEFAULT 0,
    "currentSessions" INTEGER NOT NULL DEFAULT 0,
    "lastActive" TIMESTAMP(3),
    "activationDate" TIMESTAMP(3),
    "expirationDate" TIMESTAMP(3),
    "boundHardwareId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "licenses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "license_devices" (
    "id" TEXT NOT NULL,
    "licenseId" TEXT NOT NULL,
    "macAddress" TEXT NOT NULL,
    "ipAddress" TEXT,
    "hostname" TEXT,
    "location" TEXT,
    "deviceType" "DeviceType" NOT NULL DEFAULT 'DESKTOP',
    "deviceName" TEXT,
    "osInfo" TEXT,
    "status" "DeviceStatus" NOT NULL DEFAULT 'ACTIVE',
    "lastActive" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "license_devices_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "license_sessions" (
    "id" TEXT NOT NULL,
    "licenseId" TEXT NOT NULL,
    "sessionToken" TEXT NOT NULL,
    "deviceId" TEXT,
    "deviceName" TEXT,
    "ipAddress" TEXT,
    "userAgent" TEXT,
    "location" TEXT,
    "startedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lastActivityAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "terminatedAt" TIMESTAMP(3),
    "terminatedBy" TEXT,
    "terminateReason" TEXT,

    CONSTRAINT "license_sessions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "license_allocations" (
    "id" TEXT NOT NULL,
    "licenseId" TEXT,
    "poolId" TEXT,
    "clientId" TEXT NOT NULL,
    "employeeName" TEXT NOT NULL,
    "employeeEmail" TEXT NOT NULL,
    "employeeId" TEXT,
    "department" TEXT,
    "action" "AllocationAction" NOT NULL DEFAULT 'ALLOCATED',
    "allocatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "allocatedById" TEXT,
    "allocatedByName" TEXT,
    "activatedAt" TIMESTAMP(3),
    "revokedAt" TIMESTAMP(3),
    "revokedById" TEXT,
    "revokedByName" TEXT,
    "revokeReason" TEXT,
    "transferredFrom" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "license_allocations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "license_activation_logs" (
    "id" TEXT NOT NULL,
    "licenseId" TEXT NOT NULL,
    "action" TEXT NOT NULL,
    "deviceId" TEXT,
    "deviceType" TEXT,
    "deviceName" TEXT,
    "macAddress" TEXT,
    "ipAddress" TEXT,
    "userAgent" TEXT,
    "location" TEXT,
    "success" BOOLEAN NOT NULL DEFAULT true,
    "errorMessage" TEXT,
    "performedBy" TEXT,
    "performedByName" TEXT,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "license_activation_logs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "license_usage_stats" (
    "id" TEXT NOT NULL,
    "licenseId" TEXT,
    "poolId" TEXT,
    "clientId" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    "periodStart" TIMESTAMP(3) NOT NULL,
    "periodEnd" TIMESTAMP(3) NOT NULL,
    "periodType" TEXT NOT NULL,
    "activeUsers" INTEGER NOT NULL DEFAULT 0,
    "totalSessions" INTEGER NOT NULL DEFAULT 0,
    "totalDuration" INTEGER NOT NULL DEFAULT 0,
    "peakConcurrent" INTEGER NOT NULL DEFAULT 0,
    "featureUsage" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "license_usage_stats_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "license_pools_subscriptionId_key" ON "license_pools"("subscriptionId");

-- CreateIndex
CREATE UNIQUE INDEX "license_pools_poolKey_key" ON "license_pools"("poolKey");

-- CreateIndex
CREATE INDEX "license_pools_clientId_idx" ON "license_pools"("clientId");

-- CreateIndex
CREATE INDEX "license_pools_subscriptionId_idx" ON "license_pools"("subscriptionId");

-- CreateIndex
CREATE INDEX "license_pools_productId_idx" ON "license_pools"("productId");

-- CreateIndex
CREATE INDEX "license_pools_status_idx" ON "license_pools"("status");

-- CreateIndex
CREATE UNIQUE INDEX "licenses_licenseKey_key" ON "licenses"("licenseKey");

-- CreateIndex
CREATE INDEX "licenses_clientId_idx" ON "licenses"("clientId");

-- CreateIndex
CREATE INDEX "licenses_productId_idx" ON "licenses"("productId");

-- CreateIndex
CREATE INDEX "licenses_licenseTypeId_idx" ON "licenses"("licenseTypeId");

-- CreateIndex
CREATE INDEX "licenses_poolId_idx" ON "licenses"("poolId");

-- CreateIndex
CREATE INDEX "licenses_status_idx" ON "licenses"("status");

-- CreateIndex
CREATE INDEX "licenses_licenseKey_idx" ON "licenses"("licenseKey");

-- CreateIndex
CREATE INDEX "licenses_userEmail_idx" ON "licenses"("userEmail");

-- CreateIndex
CREATE INDEX "license_devices_licenseId_idx" ON "license_devices"("licenseId");

-- CreateIndex
CREATE INDEX "license_devices_status_idx" ON "license_devices"("status");

-- CreateIndex
CREATE UNIQUE INDEX "license_devices_licenseId_macAddress_key" ON "license_devices"("licenseId", "macAddress");

-- CreateIndex
CREATE UNIQUE INDEX "license_sessions_sessionToken_key" ON "license_sessions"("sessionToken");

-- CreateIndex
CREATE INDEX "license_sessions_licenseId_idx" ON "license_sessions"("licenseId");

-- CreateIndex
CREATE INDEX "license_sessions_sessionToken_idx" ON "license_sessions"("sessionToken");

-- CreateIndex
CREATE INDEX "license_sessions_isActive_idx" ON "license_sessions"("isActive");

-- CreateIndex
CREATE INDEX "license_allocations_licenseId_idx" ON "license_allocations"("licenseId");

-- CreateIndex
CREATE INDEX "license_allocations_poolId_idx" ON "license_allocations"("poolId");

-- CreateIndex
CREATE INDEX "license_allocations_clientId_idx" ON "license_allocations"("clientId");

-- CreateIndex
CREATE INDEX "license_allocations_employeeEmail_idx" ON "license_allocations"("employeeEmail");

-- CreateIndex
CREATE INDEX "license_allocations_isActive_idx" ON "license_allocations"("isActive");

-- CreateIndex
CREATE INDEX "license_activation_logs_licenseId_idx" ON "license_activation_logs"("licenseId");

-- CreateIndex
CREATE INDEX "license_activation_logs_timestamp_idx" ON "license_activation_logs"("timestamp");

-- CreateIndex
CREATE INDEX "license_activation_logs_action_idx" ON "license_activation_logs"("action");

-- CreateIndex
CREATE INDEX "license_usage_stats_clientId_idx" ON "license_usage_stats"("clientId");

-- CreateIndex
CREATE INDEX "license_usage_stats_productId_idx" ON "license_usage_stats"("productId");

-- CreateIndex
CREATE INDEX "license_usage_stats_periodStart_idx" ON "license_usage_stats"("periodStart");

-- CreateIndex
CREATE UNIQUE INDEX "license_usage_stats_licenseId_periodStart_periodType_key" ON "license_usage_stats"("licenseId", "periodStart", "periodType");

-- CreateIndex
CREATE UNIQUE INDEX "license_usage_stats_poolId_periodStart_periodType_key" ON "license_usage_stats"("poolId", "periodStart", "periodType");

-- AddForeignKey
ALTER TABLE "licenses" ADD CONSTRAINT "licenses_poolId_fkey" FOREIGN KEY ("poolId") REFERENCES "license_pools"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "license_devices" ADD CONSTRAINT "license_devices_licenseId_fkey" FOREIGN KEY ("licenseId") REFERENCES "licenses"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "license_sessions" ADD CONSTRAINT "license_sessions_licenseId_fkey" FOREIGN KEY ("licenseId") REFERENCES "licenses"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "license_allocations" ADD CONSTRAINT "license_allocations_licenseId_fkey" FOREIGN KEY ("licenseId") REFERENCES "licenses"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "license_allocations" ADD CONSTRAINT "license_allocations_poolId_fkey" FOREIGN KEY ("poolId") REFERENCES "license_pools"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "license_activation_logs" ADD CONSTRAINT "license_activation_logs_licenseId_fkey" FOREIGN KEY ("licenseId") REFERENCES "licenses"("id") ON DELETE CASCADE ON UPDATE CASCADE;
