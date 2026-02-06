// License Service Entry Point
// Port 3004 - License lifecycle, allocation, validation, and device management

import express, { Express, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import rateLimit from 'express-rate-limit';

import { config } from './config';
import { errorHandler } from './middleware/errorHandler';

// Import routes
import licenseRoutes from './routes/license.routes';
import licensePoolRoutes from './routes/licensePool.routes';
import licenseExternalRoutes from './routes/licenseExternal.routes';
import jobsRoutes from './routes/jobs.routes';

// Initialize Express app
const app: Express = express();

// =============================================================================
// MIDDLEWARE
// =============================================================================

// Security headers
app.use(helmet({
  crossOriginResourcePolicy: { policy: 'cross-origin' },
}));

// CORS configuration
app.use(cors({
  origin: config.cors.origin,
  credentials: config.cors.credentials,
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Pool-Key', 'X-Request-Id'],
}));

// Compression
app.use(compression());

// Body parsing
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Cookie parsing
app.use(cookieParser());

// Rate limiting for internal APIs
const internalLimiter = rateLimit({
  windowMs: config.rateLimit.windowMs,
  max: config.rateLimit.maxRequests,
  message: { 
    success: false, 
    error: 'Too many requests, please try again later.' 
  },
  standardHeaders: true,
  legacyHeaders: false,
});

// Rate limiting for external APIs (stricter)
const externalLimiter = rateLimit({
  windowMs: config.externalRateLimit.windowMs,
  max: config.externalRateLimit.maxRequests,
  message: { 
    success: false, 
    error: 'Rate limit exceeded. Please contact support.' 
  },
  standardHeaders: true,
  legacyHeaders: false,
  keyGenerator: (req: Request) => {
    // Use pool key for rate limiting external APIs
    return (req.headers['x-pool-key'] as string) || req.ip || 'unknown';
  },
});

// =============================================================================
// HEALTH CHECK
// =============================================================================

app.get('/health', (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    service: config.serviceName,
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    version: '1.0.0',
  });
});

// =============================================================================
// API ROUTES
// =============================================================================

// Apply rate limiting
app.use('/api/licenses', internalLimiter);
app.use('/api/license-pools', internalLimiter);
app.use('/api/allocations', internalLimiter);

// External API with stricter rate limiting
app.use('/api/external', externalLimiter);

// Mount routes
app.use('/api/licenses', licenseRoutes);
app.use('/api/license-pools', licensePoolRoutes);
app.use('/api/external/licenses', licenseExternalRoutes);
app.use('/api/jobs', jobsRoutes);

// =============================================================================
// 404 HANDLER
// =============================================================================

app.use((req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    error: 'Route not found',
    path: req.path,
    method: req.method,
  });
});

// =============================================================================
// ERROR HANDLER
// =============================================================================

app.use(errorHandler);

// =============================================================================
// START SERVER
// =============================================================================

const PORT = config.port;

app.listen(PORT, () => {
  console.log('='.repeat(60));
  console.log(`🔑 License Service`);
  console.log('='.repeat(60));
  console.log(`   Port: ${PORT}`);
  console.log(`   Environment: ${config.nodeEnv}`);
  console.log(`   Health: http://localhost:${PORT}/health`);
  console.log('');
  console.log('📡 Internal API Endpoints:');
  console.log(`   GET    /api/licenses`);
  console.log(`   GET    /api/licenses/:id`);
  console.log(`   PATCH  /api/licenses/:id/status`);
  console.log(`   POST   /api/licenses/:id/block`);
  console.log(`   POST   /api/licenses/:id/unblock`);
  console.log('');
  console.log(`   GET    /api/license-pools`);
  console.log(`   POST   /api/license-pools`);
  console.log(`   GET    /api/license-pools/:id`);
  console.log(`   PUT    /api/license-pools/:id`);
  console.log(`   GET    /api/license-pools/:id/allocations`);
  console.log(`   POST   /api/license-pools/:id/allocate`);
  console.log(`   POST   /api/license-pools/:id/deallocate`);
  console.log('');
  console.log('🌐 External API Endpoints (Pool Key Required):');
  console.log(`   POST   /api/external/licenses/validate`);
  console.log(`   POST   /api/external/licenses/allocate`);
  console.log(`   POST   /api/external/licenses/deallocate`);
  console.log(`   GET    /api/external/licenses/status`);
  console.log(`   GET    /api/external/licenses/allocations`);
  console.log('='.repeat(60));
});

export default app;
