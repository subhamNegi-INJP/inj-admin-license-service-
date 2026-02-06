# License Service API Reference

## Base URL

```
http://localhost:3004
```

## Authentication

### Internal API (JWT)

All internal endpoints require JWT authentication via the `Authorization` header:

```
Authorization: Bearer <jwt-token>
```

### External API (Pool Key)

External endpoints require pool key authentication via the `X-Pool-Key` header:

```
X-Pool-Key: <pool-key>
```

---

## Internal API Endpoints

### Licenses

#### GET /api/licenses

Get all licenses with pagination and filtering.

**Query Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `page` | number | Page number (default: 1) |
| `limit` | number | Items per page (default: 20, max: 100) |
| `status` | string | Filter by status |
| `poolId` | string | Filter by pool ID |
| `clientId` | string | Filter by client ID |
| `productId` | string | Filter by product ID |
| `sortBy` | string | Sort field (default: createdAt) |
| `sortOrder` | string | Sort order: asc/desc (default: desc) |

**Response:**

```json
{
  "success": true,
  "data": [
    {
      "id": "cuid...",
      "licenseKey": "XXXX-XXXX-XXXX-XXXX",
      "status": "ACTIVE",
      "clientId": "client-123",
      "clientName": "Acme Corp",
      "productId": "prod-456",
      "productName": "SuperAdmin Pro",
      "userName": "John Doe",
      "userEmail": "john@acme.com",
      "deviceLimit": 3,
      "deviceCount": 1,
      "expirationDate": "2026-01-15T00:00:00.000Z",
      "createdAt": "2025-01-15T10:00:00.000Z",
      "updatedAt": "2025-01-15T10:00:00.000Z"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 150,
    "totalPages": 8,
    "hasMore": true
  }
}
```

---

#### GET /api/licenses/:licenseId

Get a single license by ID.

**Path Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `licenseId` | string | License ID |

**Response:**

```json
{
  "success": true,
  "data": {
    "id": "cuid...",
    "licenseKey": "XXXX-XXXX-XXXX-XXXX",
    "status": "ACTIVE",
    "clientId": "client-123",
    "clientName": "Acme Corp",
    "productId": "prod-456",
    "productName": "SuperAdmin Pro",
    "productCode": "SA-PRO",
    "licenseTypeId": "lt-001",
    "licenseTypeName": "Professional",
    "userName": "John Doe",
    "userEmail": "john@acme.com",
    "deviceLimit": 3,
    "deviceCount": 1,
    "sessionLimit": 1,
    "currentSessions": 0,
    "activationDate": "2025-01-15T10:00:00.000Z",
    "expirationDate": "2026-01-15T00:00:00.000Z",
    "lastActive": "2025-01-15T15:30:00.000Z",
    "pool": {
      "id": "pool-123",
      "clientName": "Acme Corp",
      "productName": "SuperAdmin Pro",
      "totalSeats": 50,
      "allocatedSeats": 25
    },
    "devices": [
      {
        "id": "device-123",
        "macAddress": "AA:BB:CC:DD:EE:FF",
        "deviceName": "Work Laptop",
        "deviceType": "LAPTOP",
        "status": "ACTIVE",
        "lastActive": "2025-01-15T15:30:00.000Z"
      }
    ],
    "createdAt": "2025-01-15T10:00:00.000Z",
    "updatedAt": "2025-01-15T10:00:00.000Z"
  }
}
```

---

#### PATCH /api/licenses/:licenseId/status

Update license status.

**Path Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `licenseId` | string | License ID |

**Request Body:**

```json
{
  "status": "SUSPENDED"
}
```

**Valid Status Values:**

- `ACTIVE` - License is active and usable
- `INACTIVE` - License is temporarily inactive
- `AVAILABLE` - Not assigned (in pool)
- `ALLOCATED` - Assigned to user, not activated
- `EXPIRED` - License has expired
- `GRACE_PERIOD` - Expired but in grace period
- `VIOLATION` - Device limit exceeded
- `SUSPENDED` - Temporarily suspended
- `REVOKED` - Permanently disabled
- `TERMINATED` - License ended

**Response:**

```json
{
  "success": true,
  "data": {
    "id": "cuid...",
    "status": "SUSPENDED",
    "updatedAt": "2025-01-15T16:00:00.000Z"
  },
  "message": "License status updated successfully"
}
```

---

#### POST /api/licenses/:licenseId/block

Block a license.

**Path Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `licenseId` | string | License ID |

**Request Body:**

```json
{
  "reason": "Suspicious activity detected"
}
```

**Response:**

```json
{
  "success": true,
  "data": {
    "id": "cuid...",
    "status": "SUSPENDED"
  },
  "message": "License blocked successfully"
}
```

---

#### POST /api/licenses/:licenseId/unblock

Unblock a license.

**Path Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `licenseId` | string | License ID |

**Response:**

```json
{
  "success": true,
  "data": {
    "id": "cuid...",
    "status": "ACTIVE"
  },
  "message": "License unblocked successfully"
}
```

---

### License Pools

#### GET /api/license-pools

Get all license pools with pagination.

**Query Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `page` | number | Page number (default: 1) |
| `limit` | number | Items per page (default: 20, max: 100) |
| `clientId` | string | Filter by client ID |
| `productId` | string | Filter by product ID |
| `status` | string | Filter by status |
| `sortBy` | string | Sort field |
| `sortOrder` | string | Sort order: asc/desc |

**Response:**

```json
{
  "success": true,
  "data": [
    {
      "id": "pool-123",
      "clientId": "client-123",
      "clientName": "Acme Corp",
      "productId": "prod-456",
      "productName": "SuperAdmin Pro",
      "productCode": "SA-PRO",
      "licenseTypeName": "Professional",
      "totalSeats": 50,
      "allocatedSeats": 25,
      "availableSeats": 25,
      "status": "ACTIVE",
      "isActive": true,
      "expirationDate": "2026-01-15T00:00:00.000Z",
      "createdAt": "2025-01-15T10:00:00.000Z"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 10,
    "totalPages": 1,
    "hasMore": false
  }
}
```

---

#### POST /api/license-pools

Create a new license pool.

**Request Body:**

```json
{
  "clientId": "client-123",
  "clientName": "Acme Corp",
  "clientEmail": "admin@acme.com",
  "subscriptionId": "sub-456",
  "productId": "prod-789",
  "productName": "SuperAdmin Pro",
  "productCode": "SA-PRO",
  "licenseTypeId": "lt-001",
  "licenseTypeName": "Professional",
  "totalSeats": 25,
  "expirationDate": "2026-01-15T00:00:00.000Z",
  "gracePeriodDays": 7,
  "features": ["sso", "audit-logs", "api-access"],
  "selectedFeatures": ["sso", "api-access"]
}
```

**Response:**

```json
{
  "success": true,
  "data": {
    "id": "pool-123",
    "poolKey": "PK-XXXXXXXX...",
    "clientId": "client-123",
    "clientName": "Acme Corp",
    "totalSeats": 25,
    "allocatedSeats": 0,
    "availableSeats": 25,
    "status": "ACTIVE",
    "expirationDate": "2026-01-15T00:00:00.000Z",
    "createdAt": "2025-01-15T10:00:00.000Z"
  },
  "message": "License pool created successfully"
}
```

---

#### POST /api/license-pools/:poolId/allocate

Allocate a license from the pool.

**Path Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `poolId` | string | Pool ID |

**Request Body:**

```json
{
  "employeeName": "John Doe",
  "employeeEmail": "john@acme.com",
  "employeeId": "EMP-001",
  "department": "Engineering"
}
```

**Response:**

```json
{
  "success": true,
  "data": {
    "license": {
      "id": "license-123",
      "licenseKey": "XXXX-XXXX-XXXX-XXXX",
      "status": "ALLOCATED",
      "userName": "John Doe",
      "userEmail": "john@acme.com"
    },
    "allocation": {
      "id": "alloc-123",
      "allocatedAt": "2025-01-15T10:00:00.000Z"
    },
    "pool": {
      "totalSeats": 25,
      "allocatedSeats": 1,
      "availableSeats": 24
    }
  },
  "message": "License allocated successfully"
}
```

---

#### POST /api/license-pools/:poolId/deallocate

Deallocate a license from the pool.

**Path Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `poolId` | string | Pool ID |

**Request Body:**

```json
{
  "employeeEmail": "john@acme.com",
  "reason": "Employee left company"
}
```

**Response:**

```json
{
  "success": true,
  "data": {
    "license": {
      "id": "license-123",
      "status": "AVAILABLE"
    },
    "pool": {
      "totalSeats": 25,
      "allocatedSeats": 0,
      "availableSeats": 25
    }
  },
  "message": "License deallocated successfully"
}
```

---

## External API Endpoints

### POST /api/external/licenses/validate

Validate a license or check pool status.

**Request Body:**

```json
{
  "licenseKey": "XXXX-XXXX-XXXX-XXXX",
  "userEmail": "john@acme.com",
  "deviceId": "device-uuid"
}
```

All fields are optional. If no fields provided, validates pool status only.

**Response (Valid):**

```json
{
  "success": true,
  "data": {
    "valid": true,
    "license": {
      "id": "license-123",
      "licenseKey": "XXXX-XXXX-XXXX-XXXX",
      "status": "ACTIVE",
      "userName": "John Doe",
      "userEmail": "john@acme.com",
      "expirationDate": "2026-01-15T00:00:00.000Z",
      "features": ["sso", "api-access"]
    },
    "pool": {
      "id": "pool-123",
      "totalSeats": 50,
      "allocatedSeats": 25,
      "availableSeats": 25,
      "expirationDate": "2026-01-15T00:00:00.000Z"
    }
  }
}
```

**Response (Invalid):**

```json
{
  "success": true,
  "data": {
    "valid": false,
    "reason": "License has expired",
    "code": "LICENSE_EXPIRED"
  }
}
```

---

### POST /api/external/licenses/allocate

Auto-allocate a license to a user.

**Request Body:**

```json
{
  "userEmail": "newemployee@acme.com",
  "userName": "Jane Smith",
  "userId": "ext-user-123",
  "department": "Marketing"
}
```

**Response:**

```json
{
  "success": true,
  "data": {
    "allocated": true,
    "alreadyAllocated": false,
    "license": {
      "id": "license-456",
      "licenseKey": "YYYY-YYYY-YYYY-YYYY",
      "status": "ALLOCATED",
      "userName": "Jane Smith",
      "userEmail": "newemployee@acme.com",
      "expirationDate": "2026-01-15T00:00:00.000Z"
    },
    "allocation": {
      "id": "alloc-789",
      "allocatedAt": "2025-01-15T10:00:00.000Z"
    },
    "pool": {
      "totalSeats": 50,
      "allocatedSeats": 26,
      "availableSeats": 24
    }
  }
}
```

---

### POST /api/external/licenses/deallocate

Deallocate a license from a user.

**Request Body:**

```json
{
  "userEmail": "oldemployee@acme.com",
  "reason": "User account deleted"
}
```

**Response:**

```json
{
  "success": true,
  "data": {
    "deallocated": true,
    "license": {
      "id": "license-456",
      "status": "AVAILABLE"
    },
    "pool": {
      "totalSeats": 50,
      "allocatedSeats": 25,
      "availableSeats": 25
    }
  },
  "message": "License deallocated successfully"
}
```

---

### GET /api/external/licenses/pool-info

Get pool information.

**Response:**

```json
{
  "success": true,
  "data": {
    "id": "pool-123",
    "productName": "SuperAdmin Pro",
    "productCode": "SA-PRO",
    "licenseTypeName": "Professional",
    "totalSeats": 50,
    "allocatedSeats": 25,
    "availableSeats": 25,
    "status": "ACTIVE",
    "expirationDate": "2026-01-15T00:00:00.000Z",
    "features": ["sso", "audit-logs", "api-access"],
    "selectedFeatures": ["sso", "api-access"]
  }
}
```

---

### GET /api/external/licenses/allocations

List current allocations.

**Query Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `active` | boolean | Filter active only (default: true) |
| `page` | number | Page number |
| `limit` | number | Items per page |

**Response:**

```json
{
  "success": true,
  "data": [
    {
      "id": "alloc-123",
      "license": {
        "id": "license-123",
        "licenseKey": "XXXX-XXXX-XXXX-XXXX",
        "status": "ACTIVE"
      },
      "employeeName": "John Doe",
      "employeeEmail": "john@acme.com",
      "department": "Engineering",
      "allocatedAt": "2025-01-15T10:00:00.000Z",
      "isActive": true
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 25,
    "totalPages": 2,
    "hasMore": true
  }
}
```

---

### POST /api/external/licenses/activate

Activate a license on a device.

**Request Body:**

```json
{
  "userEmail": "john@acme.com",
  "deviceId": "device-uuid",
  "deviceName": "Work Laptop",
  "deviceType": "LAPTOP",
  "osInfo": "Windows 11"
}
```

**Response:**

```json
{
  "success": true,
  "data": {
    "activated": true,
    "license": {
      "id": "license-123",
      "status": "ACTIVE",
      "deviceCount": 1,
      "deviceLimit": 3
    },
    "device": {
      "id": "device-123",
      "deviceName": "Work Laptop",
      "status": "ACTIVE"
    }
  },
  "message": "License activated on device successfully"
}
```

---

### POST /api/external/licenses/deactivate

Deactivate a license from a device.

**Request Body:**

```json
{
  "userEmail": "john@acme.com",
  "deviceId": "device-uuid"
}
```

**Response:**

```json
{
  "success": true,
  "data": {
    "deactivated": true,
    "license": {
      "id": "license-123",
      "deviceCount": 0
    }
  },
  "message": "License deactivated from device successfully"
}
```

---

## Error Responses

All error responses follow this format:

```json
{
  "success": false,
  "error": "Error message here",
  "errors": [
    {
      "field": "fieldName",
      "message": "Validation error message"
    }
  ]
}
```

### HTTP Status Codes

| Status | Description |
|--------|-------------|
| 200 | Success |
| 201 | Created |
| 400 | Bad Request / Validation Error |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |
| 409 | Conflict |
| 422 | Unprocessable Entity |
| 429 | Too Many Requests |
| 500 | Internal Server Error |
