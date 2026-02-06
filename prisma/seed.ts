// License Service Database Seed
// Creates sample license pools and licenses for development

import { PrismaClient } from '../src/generated/prisma';
import crypto from 'crypto';

const prisma = new PrismaClient();

/**
 * Generate a random license key
 */
function generateLicenseKey(): string {
  const segments = [];
  for (let i = 0; i < 4; i++) {
    segments.push(crypto.randomBytes(2).toString('hex').toUpperCase());
  }
  return segments.join('-');
}

/**
 * Generate a pool key
 */
function generatePoolKey(): string {
  return `PK-${crypto.randomBytes(16).toString('hex').toUpperCase()}`;
}

/**
 * Hash a key for secure storage
 */
function hashKey(key: string): string {
  return crypto.createHash('sha256').update(key).digest('hex');
}

/**
 * Generate MAC address
 */
function generateMacAddress(): string {
  return 'XX:XX:XX:XX:XX:XX'.replace(/X/g, () => 
    '0123456789ABCDEF'.charAt(Math.floor(Math.random() * 16))
  );
}

async function main() {
  console.log('🌱 Seeding license database...');

  // Clean existing data
  await prisma.licenseUsageStats.deleteMany();
  await prisma.licenseActivationLog.deleteMany();
  await prisma.licenseAllocation.deleteMany();
  await prisma.licenseSession.deleteMany();
  await prisma.licenseDevice.deleteMany();
  await prisma.license.deleteMany();
  await prisma.licensePool.deleteMany();

  console.log('🗑️  Cleared existing data');

  // Create sample license pools
  const pools = [
    {
      id: 'pool-acme-enterprise',
      clientId: 'client-acme-corp',
      clientName: 'Acme Corporation',
      clientEmail: 'admin@acme.com',
      subscriptionId: 'sub-acme-001',
      productId: 'prod-superadmin',
      productName: 'SuperAdmin Enterprise',
      productCode: 'SA-ENT',
      licenseTypeId: 'lt-enterprise',
      licenseTypeName: 'Enterprise',
      totalSeats: 50,
      allocatedSeats: 3,
      availableSeats: 47,
      poolKey: generatePoolKey(),
      gracePeriodDays: 14,
      features: ['sso', 'audit-logs', 'custom-branding', 'priority-support', 'api-access'],
      selectedFeatures: ['sso', 'audit-logs', 'api-access'],
      expirationDate: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000), // 1 year from now
      isActive: true,
      status: 'ACTIVE' as const,
      deviceLimit: 5,
    },
    {
      id: 'pool-techstart-pro',
      clientId: 'client-techstart',
      clientName: 'TechStart Inc',
      clientEmail: 'licenses@techstart.io',
      subscriptionId: 'sub-techstart-001',
      productId: 'prod-superadmin',
      productName: 'SuperAdmin Pro',
      productCode: 'SA-PRO',
      licenseTypeId: 'lt-pro',
      licenseTypeName: 'Professional',
      totalSeats: 10,
      allocatedSeats: 5,
      availableSeats: 5,
      poolKey: generatePoolKey(),
      gracePeriodDays: 7,
      features: ['audit-logs', 'api-access'],
      selectedFeatures: ['audit-logs'],
      expirationDate: new Date(Date.now() + 180 * 24 * 60 * 60 * 1000), // 6 months from now
      isActive: true,
      status: 'ACTIVE' as const,
      deviceLimit: 3,
    },
    {
      id: 'pool-demo-basic',
      clientId: 'client-demo',
      clientName: 'Demo Company',
      clientEmail: 'demo@example.com',
      subscriptionId: 'sub-demo-001',
      productId: 'prod-superadmin',
      productName: 'SuperAdmin Basic',
      productCode: 'SA-BASIC',
      licenseTypeId: 'lt-basic',
      licenseTypeName: 'Basic',
      totalSeats: 5,
      allocatedSeats: 2,
      availableSeats: 3,
      poolKey: generatePoolKey(),
      gracePeriodDays: 3,
      features: [],
      selectedFeatures: [],
      expirationDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days from now
      isActive: true,
      status: 'ACTIVE' as const,
      deviceLimit: 1,
    },
  ];

  const createdPools: Array<{ poolKey: string; clientName: string }> = [];

  // Create pools
  for (const pool of pools) {
    const createdPool = await prisma.licensePool.create({
      data: {
        id: pool.id,
        clientId: pool.clientId,
        clientName: pool.clientName,
        clientEmail: pool.clientEmail,
        subscriptionId: pool.subscriptionId,
        productId: pool.productId,
        productName: pool.productName,
        productCode: pool.productCode,
        licenseTypeId: pool.licenseTypeId,
        licenseTypeName: pool.licenseTypeName,
        totalSeats: pool.totalSeats,
        allocatedSeats: pool.allocatedSeats,
        availableSeats: pool.availableSeats,
        poolKey: pool.poolKey,
        poolKeyHash: hashKey(pool.poolKey),
        gracePeriodDays: pool.gracePeriodDays,
        features: pool.features,
        selectedFeatures: pool.selectedFeatures,
        expirationDate: pool.expirationDate,
        isActive: pool.isActive,
        status: pool.status,
      },
    });

    createdPools.push({ poolKey: pool.poolKey, clientName: pool.clientName });
    console.log(`✅ Created pool: ${createdPool.clientName} (${createdPool.productName})`);

    // Create licenses for each pool
    for (let i = 0; i < pool.totalSeats; i++) {
      const isAllocated = i < pool.allocatedSeats;
      const licenseKey = generateLicenseKey();
      const departments = ['Engineering', 'Sales', 'Marketing', 'Support'];
      
      const licenseData: any = {
        poolId: createdPool.id,
        licenseKey: licenseKey,
        licenseKeyHash: hashKey(licenseKey),
        clientId: pool.clientId,
        clientName: pool.clientName,
        productId: pool.productId,
        productName: pool.productName,
        productCode: pool.productCode,
        licenseTypeId: pool.licenseTypeId,
        licenseTypeName: pool.licenseTypeName,
        status: isAllocated ? 'ALLOCATED' : 'AVAILABLE',
        deviceLimit: pool.deviceLimit,
        expirationDate: pool.expirationDate,
      };

      // Add user info if allocated
      if (isAllocated) {
        licenseData.userName = `Employee ${i + 1}`;
        licenseData.userEmail = `employee${i + 1}@${pool.clientName.toLowerCase().replace(/\s+/g, '')}.com`;
      }

      const license = await prisma.license.create({ data: licenseData });

      // Create allocation record if allocated
      if (isAllocated) {
        await prisma.licenseAllocation.create({
          data: {
            licenseId: license.id,
            poolId: createdPool.id,
            clientId: pool.clientId,
            employeeName: license.userName!,
            employeeEmail: license.userEmail!,
            employeeId: `EMP-${String(i + 1).padStart(4, '0')}`,
            department: departments[i % 4],
            action: 'ALLOCATED',
            allocatedById: 'system-seed',
            allocatedByName: 'System Seed',
          },
        });
      }
    }

    console.log(`   📄 Created ${pool.totalSeats} licenses (${pool.allocatedSeats} allocated)`);
  }

  // Add some device activations for the first allocated license
  const firstLicense = await prisma.license.findFirst({
    where: { status: 'ALLOCATED' },
  });

  if (firstLicense) {
    const macAddress = generateMacAddress();
    
    const device = await prisma.licenseDevice.create({
      data: {
        licenseId: firstLicense.id,
        macAddress: macAddress,
        hostname: 'WORK-LAPTOP-001',
        deviceType: 'LAPTOP',
        deviceName: 'Work Laptop',
        osInfo: 'Windows 11 23H2',
        status: 'ACTIVE',
        ipAddress: '192.168.1.100',
      },
    });

    // Create activation log
    await prisma.licenseActivationLog.create({
      data: {
        licenseId: firstLicense.id,
        action: 'ACTIVATED',
        deviceId: device.id,
        deviceType: 'LAPTOP',
        deviceName: 'Work Laptop',
        macAddress: macAddress,
        ipAddress: '192.168.1.100',
        userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/120.0.0.0',
        performedBy: firstLicense.userEmail,
        performedByName: firstLicense.userName,
        success: true,
      },
    });

    // Update license device count
    await prisma.license.update({
      where: { id: firstLicense.id },
      data: { deviceCount: 1, status: 'ACTIVE' },
    });

    console.log(`   🖥️  Added device activation for first license`);
  }

  // Create some usage stats
  const allPools = await prisma.licensePool.findMany();
  const now = new Date();
  const dayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const dayEnd = new Date(dayStart.getTime() + 24 * 60 * 60 * 1000);
  
  for (const pool of allPools) {
    await prisma.licenseUsageStats.create({
      data: {
        poolId: pool.id,
        clientId: pool.clientId,
        productId: pool.productId,
        periodStart: dayStart,
        periodEnd: dayEnd,
        periodType: 'DAILY',
        activeUsers: Math.floor(pool.allocatedSeats * 0.8), // 80% active
        totalSessions: Math.floor(Math.random() * 100) + 10,
        totalDuration: Math.floor(Math.random() * 10000) + 1000,
        peakConcurrent: pool.allocatedSeats,
      },
    });
  }
  console.log(`   📊 Added usage stats for all pools`);

  console.log('\n✅ Seeding completed successfully!');
  console.log('\n📋 Pool Keys for testing (store securely):');
  for (const pool of createdPools) {
    console.log(`   ${pool.clientName}: ${pool.poolKey}`);
  }
}

main()
  .catch((e) => {
    console.error('❌ Seeding failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
