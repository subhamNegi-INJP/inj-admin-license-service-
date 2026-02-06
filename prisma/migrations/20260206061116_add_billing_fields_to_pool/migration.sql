-- AlterTable
ALTER TABLE "license_pools" ADD COLUMN     "autoRenew" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "billingCycle" TEXT NOT NULL DEFAULT 'MONTHLY',
ADD COLUMN     "currency" TEXT NOT NULL DEFAULT 'INR',
ADD COLUMN     "nextBillingDate" TIMESTAMP(3),
ADD COLUMN     "paymentStatus" TEXT,
ADD COLUMN     "pricePerSeat" DECIMAL(10,2),
ADD COLUMN     "subscriptionStatus" TEXT,
ADD COLUMN     "totalAmount" DECIMAL(12,2);
