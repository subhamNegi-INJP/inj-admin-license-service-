// Service Clients for Internal API Communication
// Fetch data from Subscription and Billing services

import config from '../config';

// =============================================================================
// TYPES
// =============================================================================

export interface SubscriptionData {
  id: string;
  clientId: string;
  clientName: string;
  clientEmail?: string;
  productId: string;
  productName: string;
  productCode: string;
  licenseTypeId: string;
  licenseTypeName: string;
  pricingPlanId: string;
  pricingPlanName?: string;
  billingCycle: string;
  seats: number;
  subscriptionDate: string;
  activationDate?: string;
  expirationDate: string;
  gracePeriodDays: number;
  status: string;
  pricePerSeat: number;
  subtotal: number;
  discountPercent: number;
  discountAmount: number;
  couponCode?: string;
  couponDiscount: number;
  taxPercent: number;
  taxAmount: number;
  totalAmount: number;
  currency: string;
  paymentStatus: string;
  paymentMethod?: string;
  paymentCompletedAt?: string;
  autoRenew: boolean;
  nextRenewalDate?: string;
  cancelledAt?: string;
  cancelReason?: string;
  availableFeatures: string[];
  selectedFeatures: string[];
  addons?: SubscriptionAddonData[];
}

export interface SubscriptionAddonData {
  id: string;
  addonCode: string;
  addonName: string;
  addonDescription?: string;
  pricingType: string;
  pricePerUnit: number;
  quantity: number;
  subtotal: number;
  taxPercent: number;
  taxAmount: number;
  totalAmount: number;
  currency: string;
  billingCycle?: string;
  nextBillingDate?: string;
  isRecurring: boolean;
  status: string;
  purchasedAt?: string;
  activatedAt?: string;
  expirationDate?: string;
  cancelledAt?: string;
  paymentStatus: string;
}

// Product feature from product service
export interface ProductFeatureData {
  code: string;
  name: string;
  description?: string;
  pricingType: string;
  price: number;
  currency: string;
}

export interface InvoiceData {
  id: string;
  invoiceNumber: string;
  clientId: string;
  clientName: string;
  subscriptionId?: string;
  issueDate: string;
  dueDate: string;
  periodStart?: string;
  periodEnd?: string;
  status: string;
  subtotal: number;
  discountAmount: number;
  taxPercent: number;
  taxAmount: number;
  totalAmount: number;
  paidAmount: number;
  balanceAmount: number;
  currency: string;
  paidAt?: string;
}

export interface BillingInfo {
  lastInvoice?: InvoiceData;
  upcomingInvoice?: InvoiceData;
  outstandingBalance: number;
  totalPaid: number;
  invoiceCount: number;
}

// =============================================================================
// SUBSCRIPTION SERVICE CLIENT
// =============================================================================

/**
 * Fetch subscription details by subscription ID
 */
export const fetchSubscription = async (subscriptionId: string): Promise<SubscriptionData | null> => {
  try {
    const response = await fetch(`${config.subscriptionServiceUrl}/api/subscriptions/${subscriptionId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-Internal-Service': 'license-service', // Internal service header
      },
    });

    if (!response.ok) {
      console.error(`Failed to fetch subscription ${subscriptionId}:`, response.status);
      return null;
    }

    const data = await response.json();
    return data.data || data;
  } catch (error) {
    console.error(`Error fetching subscription ${subscriptionId}:`, error);
    return null;
  }
};

/**
 * Fetch addons for a subscription
 */
export const fetchSubscriptionAddons = async (subscriptionId: string): Promise<SubscriptionAddonData[]> => {
  try {
    const response = await fetch(
      `${config.subscriptionServiceUrl}/api/subscriptions/${subscriptionId}/addons`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'X-Internal-Service': 'license-service',
        },
      }
    );

    if (!response.ok) {
      console.error(`Failed to fetch addons for subscription ${subscriptionId}:`, response.status);
      return [];
    }

    const data = await response.json();
    return data.data?.addons || data.addons || [];
  } catch (error) {
    console.error(`Error fetching addons for subscription ${subscriptionId}:`, error);
    return [];
  }
};

// =============================================================================
// BILLING SERVICE CLIENT
// =============================================================================

/**
 * Fetch billing info for a subscription
 */
export const fetchBillingInfo = async (subscriptionId: string, clientId: string): Promise<BillingInfo | null> => {
  try {
    // Fetch invoices for this subscription
    const response = await fetch(
      `${config.billingServiceUrl}/api/invoices?subscriptionId=${subscriptionId}&limit=10&sortBy=invoiceDate&sortOrder=desc`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'X-Internal-Service': 'license-service',
        },
      }
    );

    if (!response.ok) {
      console.error(`Failed to fetch billing info for subscription ${subscriptionId}:`, response.status);
      return null;
    }

    const data = await response.json();
    const invoices: InvoiceData[] = data.data || [];

    // Calculate billing summary
    const paidInvoices = invoices.filter(inv => inv.status === 'PAID');
    const pendingInvoices = invoices.filter(inv => ['PENDING', 'SENT', 'OVERDUE'].includes(inv.status));
    const upcomingInvoices = invoices.filter(inv => inv.status === 'DRAFT');

    const totalPaid = paidInvoices.reduce((sum, inv) => sum + (inv.paidAmount || 0), 0);
    const outstandingBalance = pendingInvoices.reduce((sum, inv) => sum + (inv.balanceAmount || 0), 0);

    // Get the most recent paid invoice and upcoming/pending invoice
    const lastInvoice = paidInvoices[0] || null;
    const upcomingInvoice = upcomingInvoices[0] || pendingInvoices[0] || null;

    return {
      lastInvoice,
      upcomingInvoice,
      outstandingBalance,
      totalPaid,
      invoiceCount: invoices.length,
    };
  } catch (error) {
    console.error(`Error fetching billing info for subscription ${subscriptionId}:`, error);
    return null;
  }
};

/**
 * Fetch the latest invoice for a subscription
 */
export const fetchLatestInvoice = async (subscriptionId: string): Promise<InvoiceData | null> => {
  try {
    const response = await fetch(
      `${config.billingServiceUrl}/api/invoices?subscriptionId=${subscriptionId}&limit=1&sortBy=invoiceDate&sortOrder=desc`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'X-Internal-Service': 'license-service',
        },
      }
    );

    if (!response.ok) {
      return null;
    }

    const data = await response.json();
    const invoices = data.data || [];
    return invoices[0] || null;
  } catch (error) {
    console.error(`Error fetching latest invoice for subscription ${subscriptionId}:`, error);
    return null;
  }
};

// =============================================================================
// PRODUCT SERVICE CLIENT
// =============================================================================

/**
 * Fetch product features by product ID
 * Returns all features defined for a product (used to calculate available addons)
 */
export const fetchProductFeatures = async (productId: string): Promise<ProductFeatureData[]> => {
  try {
    const response = await fetch(
      `${config.productServiceUrl}/api/products/${productId}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'X-Internal-Service': 'license-service',
        },
      }
    );

    if (!response.ok) {
      console.error(`Failed to fetch product ${productId}:`, response.status);
      return [];
    }

    const data = await response.json();
    const product = data.data || data;
    // Product features are stored as JSON array
    return product.features || [];
  } catch (error) {
    console.error(`Error fetching product ${productId}:`, error);
    return [];
  }
};

// =============================================================================
// COMBINED DATA FETCHER
// =============================================================================

export interface EnrichedLicenseData {
  subscription: SubscriptionData | null;
  addons: SubscriptionAddonData[];
  billing: BillingInfo | null;
}

/**
 * Fetch all enriched data for a license pool
 */
export const fetchEnrichedLicenseData = async (
  subscriptionId: string,
  clientId: string
): Promise<EnrichedLicenseData> => {
  // Fetch subscription, addons, and billing in parallel
  const [subscription, addons, billing] = await Promise.all([
    fetchSubscription(subscriptionId),
    fetchSubscriptionAddons(subscriptionId),
    fetchBillingInfo(subscriptionId, clientId),
  ]);

  return {
    subscription,
    addons,
    billing,
  };
};
