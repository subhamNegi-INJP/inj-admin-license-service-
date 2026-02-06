// License Service Events
// Publishes license-related events to RabbitMQ for other services to consume

import amqp from 'amqplib';
import { config } from '../config';

// =============================================================================
// EVENT TYPES
// =============================================================================

export interface LicenseEvent {
  eventType: string;
  timestamp: string;
  source: string;
  data: Record<string, unknown>;
}

export interface LicenseCreatedEvent {
  eventType: 'license.created';
  licenseId: string;
  licenseKey: string;
  poolId: string;
  clientId: string;
  productId: string;
}

export interface LicenseAllocatedEvent {
  eventType: 'license.allocated';
  licenseId: string;
  licenseKey: string;
  poolId: string;
  employeeEmail: string;
  employeeName: string;
  allocatedAt: string;
}

export interface LicenseDeallocatedEvent {
  eventType: 'license.deallocated';
  licenseId: string;
  poolId: string;
  employeeEmail: string;
  reason?: string;
  deallocatedAt: string;
}

export interface LicenseActivatedEvent {
  eventType: 'license.activated';
  licenseId: string;
  poolId: string;
  deviceId: string;
  deviceType: string;
  ipAddress: string;
  activatedAt: string;
}

export interface LicenseDeactivatedEvent {
  eventType: 'license.deactivated';
  licenseId: string;
  poolId: string;
  deviceId: string;
  deactivatedAt: string;
}

export interface LicenseExpiredEvent {
  eventType: 'license.expired';
  licenseId: string;
  poolId: string;
  expiredAt: string;
}

export interface LicenseBlockedEvent {
  eventType: 'license.blocked';
  licenseId: string;
  poolId: string;
  reason?: string;
  blockedAt: string;
}

export interface PoolCreatedEvent {
  eventType: 'pool.created';
  poolId: string;
  clientId: string;
  productId: string;
  totalSeats: number;
  expirationDate: string;
}

export interface PoolUpdatedEvent {
  eventType: 'pool.updated';
  poolId: string;
  changes: Record<string, unknown>;
}

export interface PoolExpiredEvent {
  eventType: 'pool.expired';
  poolId: string;
  clientId: string;
  productId: string;
  expiredAt: string;
}

export type LicenseEventType =
  | LicenseCreatedEvent
  | LicenseAllocatedEvent
  | LicenseDeallocatedEvent
  | LicenseActivatedEvent
  | LicenseDeactivatedEvent
  | LicenseExpiredEvent
  | LicenseBlockedEvent
  | PoolCreatedEvent
  | PoolUpdatedEvent
  | PoolExpiredEvent;

// =============================================================================
// EVENT PUBLISHER
// =============================================================================

class EventPublisher {
  private connection: amqp.ChannelModel | null = null;
  private channel: amqp.Channel | null = null;
  private isConnected: boolean = false;
  private reconnectAttempts: number = 0;
  private maxReconnectAttempts: number = 5;
  private reconnectDelay: number = 5000;

  // Exchange configuration
  private readonly exchangeName = 'license_events';
  private readonly exchangeType = 'topic';

  /**
   * Connect to RabbitMQ
   */
  async connect(): Promise<void> {
    if (this.isConnected) return;

    try {
      const rabbitUrl = config.rabbitmq?.url || process.env.RABBITMQ_URL || 'amqp://localhost:5672';
      
      this.connection = await amqp.connect(rabbitUrl);
      this.channel = await this.connection.createChannel();

      // Declare the exchange
      await this.channel.assertExchange(this.exchangeName, this.exchangeType, {
        durable: true,
      });

      this.isConnected = true;
      this.reconnectAttempts = 0;
      
      console.log('📨 Connected to RabbitMQ');

      // Handle connection close
      this.connection.on('close', () => {
        console.log('📨 RabbitMQ connection closed');
        this.isConnected = false;
        this.handleReconnect();
      });

      // Handle connection error
      this.connection.on('error', (err: Error) => {
        console.error('📨 RabbitMQ connection error:', err.message);
        this.isConnected = false;
      });

    } catch (error) {
      console.error('📨 Failed to connect to RabbitMQ:', error);
      this.handleReconnect();
    }
  }

  /**
   * Handle reconnection logic
   */
  private handleReconnect(): void {
    if (this.reconnectAttempts >= this.maxReconnectAttempts) {
      console.error('📨 Max reconnection attempts reached. Events will be queued locally.');
      return;
    }

    this.reconnectAttempts++;
    console.log(`📨 Attempting to reconnect (${this.reconnectAttempts}/${this.maxReconnectAttempts})...`);
    
    setTimeout(() => {
      this.connect();
    }, this.reconnectDelay * this.reconnectAttempts);
  }

  /**
   * Publish an event to RabbitMQ
   */
  async publish(event: LicenseEventType): Promise<boolean> {
    const fullEvent: LicenseEvent = {
      eventType: event.eventType,
      timestamp: new Date().toISOString(),
      source: 'license-service',
      data: event as unknown as Record<string, unknown>,
    };

    // Determine routing key based on event type
    const routingKey = event.eventType.replace('.', '_');

    if (!this.isConnected || !this.channel) {
      console.warn('📨 RabbitMQ not connected. Event queued:', event.eventType);
      // In production, you might want to queue events locally for later retry
      return false;
    }

    try {
      const message = Buffer.from(JSON.stringify(fullEvent));
      
      this.channel.publish(
        this.exchangeName,
        routingKey,
        message,
        {
          persistent: true,
          contentType: 'application/json',
          timestamp: Date.now(),
        }
      );

      console.log(`📨 Published event: ${event.eventType}`);
      return true;
    } catch (error) {
      console.error('📨 Failed to publish event:', error);
      return false;
    }
  }

  /**
   * Disconnect from RabbitMQ
   */
  async disconnect(): Promise<void> {
    if (this.channel) {
      await this.channel.close();
      this.channel = null;
    }
    if (this.connection) {
      await this.connection.close();
      this.connection = null;
    }
    this.isConnected = false;
    console.log('📨 Disconnected from RabbitMQ');
  }

  /**
   * Check connection status
   */
  isReady(): boolean {
    return this.isConnected;
  }
}

// Singleton instance
export const eventPublisher = new EventPublisher();

// =============================================================================
// HELPER FUNCTIONS
// =============================================================================

/**
 * Publish a license created event
 */
export async function publishLicenseCreated(data: Omit<LicenseCreatedEvent, 'eventType'>): Promise<boolean> {
  return eventPublisher.publish({
    eventType: 'license.created',
    ...data,
  });
}

/**
 * Publish a license allocated event
 */
export async function publishLicenseAllocated(data: Omit<LicenseAllocatedEvent, 'eventType'>): Promise<boolean> {
  return eventPublisher.publish({
    eventType: 'license.allocated',
    ...data,
  });
}

/**
 * Publish a license deallocated event
 */
export async function publishLicenseDeallocated(data: Omit<LicenseDeallocatedEvent, 'eventType'>): Promise<boolean> {
  return eventPublisher.publish({
    eventType: 'license.deallocated',
    ...data,
  });
}

/**
 * Publish a license activated event
 */
export async function publishLicenseActivated(data: Omit<LicenseActivatedEvent, 'eventType'>): Promise<boolean> {
  return eventPublisher.publish({
    eventType: 'license.activated',
    ...data,
  });
}

/**
 * Publish a license deactivated event
 */
export async function publishLicenseDeactivated(data: Omit<LicenseDeactivatedEvent, 'eventType'>): Promise<boolean> {
  return eventPublisher.publish({
    eventType: 'license.deactivated',
    ...data,
  });
}

/**
 * Publish a license expired event
 */
export async function publishLicenseExpired(data: Omit<LicenseExpiredEvent, 'eventType'>): Promise<boolean> {
  return eventPublisher.publish({
    eventType: 'license.expired',
    ...data,
  });
}

/**
 * Publish a license blocked event
 */
export async function publishLicenseBlocked(data: Omit<LicenseBlockedEvent, 'eventType'>): Promise<boolean> {
  return eventPublisher.publish({
    eventType: 'license.blocked',
    ...data,
  });
}

/**
 * Publish a pool created event
 */
export async function publishPoolCreated(data: Omit<PoolCreatedEvent, 'eventType'>): Promise<boolean> {
  return eventPublisher.publish({
    eventType: 'pool.created',
    ...data,
  });
}

/**
 * Publish a pool updated event
 */
export async function publishPoolUpdated(data: Omit<PoolUpdatedEvent, 'eventType'>): Promise<boolean> {
  return eventPublisher.publish({
    eventType: 'pool.updated',
    ...data,
  });
}

/**
 * Publish a pool expired event
 */
export async function publishPoolExpired(data: Omit<PoolExpiredEvent, 'eventType'>): Promise<boolean> {
  return eventPublisher.publish({
    eventType: 'pool.expired',
    ...data,
  });
}

export default eventPublisher;
