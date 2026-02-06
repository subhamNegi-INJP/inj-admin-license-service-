
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model LicensePool
 * 
 */
export type LicensePool = $Result.DefaultSelection<Prisma.$LicensePoolPayload>
/**
 * Model License
 * 
 */
export type License = $Result.DefaultSelection<Prisma.$LicensePayload>
/**
 * Model LicenseDevice
 * 
 */
export type LicenseDevice = $Result.DefaultSelection<Prisma.$LicenseDevicePayload>
/**
 * Model LicenseSession
 * 
 */
export type LicenseSession = $Result.DefaultSelection<Prisma.$LicenseSessionPayload>
/**
 * Model LicenseAllocation
 * 
 */
export type LicenseAllocation = $Result.DefaultSelection<Prisma.$LicenseAllocationPayload>
/**
 * Model LicenseActivationLog
 * 
 */
export type LicenseActivationLog = $Result.DefaultSelection<Prisma.$LicenseActivationLogPayload>
/**
 * Model LicenseUsageStats
 * 
 */
export type LicenseUsageStats = $Result.DefaultSelection<Prisma.$LicenseUsageStatsPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const PoolStatus: {
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE',
  EXPIRED: 'EXPIRED',
  SUSPENDED: 'SUSPENDED'
};

export type PoolStatus = (typeof PoolStatus)[keyof typeof PoolStatus]


export const LicenseStatus: {
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

export type LicenseStatus = (typeof LicenseStatus)[keyof typeof LicenseStatus]


export const DeviceType: {
  DESKTOP: 'DESKTOP',
  LAPTOP: 'LAPTOP',
  MOBILE: 'MOBILE',
  TABLET: 'TABLET',
  SERVER: 'SERVER',
  OTHER: 'OTHER'
};

export type DeviceType = (typeof DeviceType)[keyof typeof DeviceType]


export const DeviceStatus: {
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE',
  BLOCKED: 'BLOCKED'
};

export type DeviceStatus = (typeof DeviceStatus)[keyof typeof DeviceStatus]


export const AllocationAction: {
  ALLOCATED: 'ALLOCATED',
  REVOKED: 'REVOKED',
  TRANSFERRED: 'TRANSFERRED',
  EXPIRED: 'EXPIRED'
};

export type AllocationAction = (typeof AllocationAction)[keyof typeof AllocationAction]

}

export type PoolStatus = $Enums.PoolStatus

export const PoolStatus: typeof $Enums.PoolStatus

export type LicenseStatus = $Enums.LicenseStatus

export const LicenseStatus: typeof $Enums.LicenseStatus

export type DeviceType = $Enums.DeviceType

export const DeviceType: typeof $Enums.DeviceType

export type DeviceStatus = $Enums.DeviceStatus

export const DeviceStatus: typeof $Enums.DeviceStatus

export type AllocationAction = $Enums.AllocationAction

export const AllocationAction: typeof $Enums.AllocationAction

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more LicensePools
 * const licensePools = await prisma.licensePool.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more LicensePools
   * const licensePools = await prisma.licensePool.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.licensePool`: Exposes CRUD operations for the **LicensePool** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LicensePools
    * const licensePools = await prisma.licensePool.findMany()
    * ```
    */
  get licensePool(): Prisma.LicensePoolDelegate<ExtArgs>;

  /**
   * `prisma.license`: Exposes CRUD operations for the **License** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Licenses
    * const licenses = await prisma.license.findMany()
    * ```
    */
  get license(): Prisma.LicenseDelegate<ExtArgs>;

  /**
   * `prisma.licenseDevice`: Exposes CRUD operations for the **LicenseDevice** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LicenseDevices
    * const licenseDevices = await prisma.licenseDevice.findMany()
    * ```
    */
  get licenseDevice(): Prisma.LicenseDeviceDelegate<ExtArgs>;

  /**
   * `prisma.licenseSession`: Exposes CRUD operations for the **LicenseSession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LicenseSessions
    * const licenseSessions = await prisma.licenseSession.findMany()
    * ```
    */
  get licenseSession(): Prisma.LicenseSessionDelegate<ExtArgs>;

  /**
   * `prisma.licenseAllocation`: Exposes CRUD operations for the **LicenseAllocation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LicenseAllocations
    * const licenseAllocations = await prisma.licenseAllocation.findMany()
    * ```
    */
  get licenseAllocation(): Prisma.LicenseAllocationDelegate<ExtArgs>;

  /**
   * `prisma.licenseActivationLog`: Exposes CRUD operations for the **LicenseActivationLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LicenseActivationLogs
    * const licenseActivationLogs = await prisma.licenseActivationLog.findMany()
    * ```
    */
  get licenseActivationLog(): Prisma.LicenseActivationLogDelegate<ExtArgs>;

  /**
   * `prisma.licenseUsageStats`: Exposes CRUD operations for the **LicenseUsageStats** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LicenseUsageStats
    * const licenseUsageStats = await prisma.licenseUsageStats.findMany()
    * ```
    */
  get licenseUsageStats(): Prisma.LicenseUsageStatsDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    LicensePool: 'LicensePool',
    License: 'License',
    LicenseDevice: 'LicenseDevice',
    LicenseSession: 'LicenseSession',
    LicenseAllocation: 'LicenseAllocation',
    LicenseActivationLog: 'LicenseActivationLog',
    LicenseUsageStats: 'LicenseUsageStats'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "licensePool" | "license" | "licenseDevice" | "licenseSession" | "licenseAllocation" | "licenseActivationLog" | "licenseUsageStats"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      LicensePool: {
        payload: Prisma.$LicensePoolPayload<ExtArgs>
        fields: Prisma.LicensePoolFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LicensePoolFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicensePoolPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LicensePoolFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicensePoolPayload>
          }
          findFirst: {
            args: Prisma.LicensePoolFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicensePoolPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LicensePoolFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicensePoolPayload>
          }
          findMany: {
            args: Prisma.LicensePoolFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicensePoolPayload>[]
          }
          create: {
            args: Prisma.LicensePoolCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicensePoolPayload>
          }
          createMany: {
            args: Prisma.LicensePoolCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LicensePoolCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicensePoolPayload>[]
          }
          delete: {
            args: Prisma.LicensePoolDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicensePoolPayload>
          }
          update: {
            args: Prisma.LicensePoolUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicensePoolPayload>
          }
          deleteMany: {
            args: Prisma.LicensePoolDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LicensePoolUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LicensePoolUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicensePoolPayload>
          }
          aggregate: {
            args: Prisma.LicensePoolAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLicensePool>
          }
          groupBy: {
            args: Prisma.LicensePoolGroupByArgs<ExtArgs>
            result: $Utils.Optional<LicensePoolGroupByOutputType>[]
          }
          count: {
            args: Prisma.LicensePoolCountArgs<ExtArgs>
            result: $Utils.Optional<LicensePoolCountAggregateOutputType> | number
          }
        }
      }
      License: {
        payload: Prisma.$LicensePayload<ExtArgs>
        fields: Prisma.LicenseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LicenseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicensePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LicenseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicensePayload>
          }
          findFirst: {
            args: Prisma.LicenseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicensePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LicenseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicensePayload>
          }
          findMany: {
            args: Prisma.LicenseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicensePayload>[]
          }
          create: {
            args: Prisma.LicenseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicensePayload>
          }
          createMany: {
            args: Prisma.LicenseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LicenseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicensePayload>[]
          }
          delete: {
            args: Prisma.LicenseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicensePayload>
          }
          update: {
            args: Prisma.LicenseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicensePayload>
          }
          deleteMany: {
            args: Prisma.LicenseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LicenseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LicenseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicensePayload>
          }
          aggregate: {
            args: Prisma.LicenseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLicense>
          }
          groupBy: {
            args: Prisma.LicenseGroupByArgs<ExtArgs>
            result: $Utils.Optional<LicenseGroupByOutputType>[]
          }
          count: {
            args: Prisma.LicenseCountArgs<ExtArgs>
            result: $Utils.Optional<LicenseCountAggregateOutputType> | number
          }
        }
      }
      LicenseDevice: {
        payload: Prisma.$LicenseDevicePayload<ExtArgs>
        fields: Prisma.LicenseDeviceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LicenseDeviceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicenseDevicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LicenseDeviceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicenseDevicePayload>
          }
          findFirst: {
            args: Prisma.LicenseDeviceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicenseDevicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LicenseDeviceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicenseDevicePayload>
          }
          findMany: {
            args: Prisma.LicenseDeviceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicenseDevicePayload>[]
          }
          create: {
            args: Prisma.LicenseDeviceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicenseDevicePayload>
          }
          createMany: {
            args: Prisma.LicenseDeviceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LicenseDeviceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicenseDevicePayload>[]
          }
          delete: {
            args: Prisma.LicenseDeviceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicenseDevicePayload>
          }
          update: {
            args: Prisma.LicenseDeviceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicenseDevicePayload>
          }
          deleteMany: {
            args: Prisma.LicenseDeviceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LicenseDeviceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LicenseDeviceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicenseDevicePayload>
          }
          aggregate: {
            args: Prisma.LicenseDeviceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLicenseDevice>
          }
          groupBy: {
            args: Prisma.LicenseDeviceGroupByArgs<ExtArgs>
            result: $Utils.Optional<LicenseDeviceGroupByOutputType>[]
          }
          count: {
            args: Prisma.LicenseDeviceCountArgs<ExtArgs>
            result: $Utils.Optional<LicenseDeviceCountAggregateOutputType> | number
          }
        }
      }
      LicenseSession: {
        payload: Prisma.$LicenseSessionPayload<ExtArgs>
        fields: Prisma.LicenseSessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LicenseSessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicenseSessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LicenseSessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicenseSessionPayload>
          }
          findFirst: {
            args: Prisma.LicenseSessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicenseSessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LicenseSessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicenseSessionPayload>
          }
          findMany: {
            args: Prisma.LicenseSessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicenseSessionPayload>[]
          }
          create: {
            args: Prisma.LicenseSessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicenseSessionPayload>
          }
          createMany: {
            args: Prisma.LicenseSessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LicenseSessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicenseSessionPayload>[]
          }
          delete: {
            args: Prisma.LicenseSessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicenseSessionPayload>
          }
          update: {
            args: Prisma.LicenseSessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicenseSessionPayload>
          }
          deleteMany: {
            args: Prisma.LicenseSessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LicenseSessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LicenseSessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicenseSessionPayload>
          }
          aggregate: {
            args: Prisma.LicenseSessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLicenseSession>
          }
          groupBy: {
            args: Prisma.LicenseSessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<LicenseSessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.LicenseSessionCountArgs<ExtArgs>
            result: $Utils.Optional<LicenseSessionCountAggregateOutputType> | number
          }
        }
      }
      LicenseAllocation: {
        payload: Prisma.$LicenseAllocationPayload<ExtArgs>
        fields: Prisma.LicenseAllocationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LicenseAllocationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicenseAllocationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LicenseAllocationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicenseAllocationPayload>
          }
          findFirst: {
            args: Prisma.LicenseAllocationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicenseAllocationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LicenseAllocationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicenseAllocationPayload>
          }
          findMany: {
            args: Prisma.LicenseAllocationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicenseAllocationPayload>[]
          }
          create: {
            args: Prisma.LicenseAllocationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicenseAllocationPayload>
          }
          createMany: {
            args: Prisma.LicenseAllocationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LicenseAllocationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicenseAllocationPayload>[]
          }
          delete: {
            args: Prisma.LicenseAllocationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicenseAllocationPayload>
          }
          update: {
            args: Prisma.LicenseAllocationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicenseAllocationPayload>
          }
          deleteMany: {
            args: Prisma.LicenseAllocationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LicenseAllocationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LicenseAllocationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicenseAllocationPayload>
          }
          aggregate: {
            args: Prisma.LicenseAllocationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLicenseAllocation>
          }
          groupBy: {
            args: Prisma.LicenseAllocationGroupByArgs<ExtArgs>
            result: $Utils.Optional<LicenseAllocationGroupByOutputType>[]
          }
          count: {
            args: Prisma.LicenseAllocationCountArgs<ExtArgs>
            result: $Utils.Optional<LicenseAllocationCountAggregateOutputType> | number
          }
        }
      }
      LicenseActivationLog: {
        payload: Prisma.$LicenseActivationLogPayload<ExtArgs>
        fields: Prisma.LicenseActivationLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LicenseActivationLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicenseActivationLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LicenseActivationLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicenseActivationLogPayload>
          }
          findFirst: {
            args: Prisma.LicenseActivationLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicenseActivationLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LicenseActivationLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicenseActivationLogPayload>
          }
          findMany: {
            args: Prisma.LicenseActivationLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicenseActivationLogPayload>[]
          }
          create: {
            args: Prisma.LicenseActivationLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicenseActivationLogPayload>
          }
          createMany: {
            args: Prisma.LicenseActivationLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LicenseActivationLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicenseActivationLogPayload>[]
          }
          delete: {
            args: Prisma.LicenseActivationLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicenseActivationLogPayload>
          }
          update: {
            args: Prisma.LicenseActivationLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicenseActivationLogPayload>
          }
          deleteMany: {
            args: Prisma.LicenseActivationLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LicenseActivationLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LicenseActivationLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicenseActivationLogPayload>
          }
          aggregate: {
            args: Prisma.LicenseActivationLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLicenseActivationLog>
          }
          groupBy: {
            args: Prisma.LicenseActivationLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<LicenseActivationLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.LicenseActivationLogCountArgs<ExtArgs>
            result: $Utils.Optional<LicenseActivationLogCountAggregateOutputType> | number
          }
        }
      }
      LicenseUsageStats: {
        payload: Prisma.$LicenseUsageStatsPayload<ExtArgs>
        fields: Prisma.LicenseUsageStatsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LicenseUsageStatsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicenseUsageStatsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LicenseUsageStatsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicenseUsageStatsPayload>
          }
          findFirst: {
            args: Prisma.LicenseUsageStatsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicenseUsageStatsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LicenseUsageStatsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicenseUsageStatsPayload>
          }
          findMany: {
            args: Prisma.LicenseUsageStatsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicenseUsageStatsPayload>[]
          }
          create: {
            args: Prisma.LicenseUsageStatsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicenseUsageStatsPayload>
          }
          createMany: {
            args: Prisma.LicenseUsageStatsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LicenseUsageStatsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicenseUsageStatsPayload>[]
          }
          delete: {
            args: Prisma.LicenseUsageStatsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicenseUsageStatsPayload>
          }
          update: {
            args: Prisma.LicenseUsageStatsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicenseUsageStatsPayload>
          }
          deleteMany: {
            args: Prisma.LicenseUsageStatsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LicenseUsageStatsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LicenseUsageStatsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicenseUsageStatsPayload>
          }
          aggregate: {
            args: Prisma.LicenseUsageStatsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLicenseUsageStats>
          }
          groupBy: {
            args: Prisma.LicenseUsageStatsGroupByArgs<ExtArgs>
            result: $Utils.Optional<LicenseUsageStatsGroupByOutputType>[]
          }
          count: {
            args: Prisma.LicenseUsageStatsCountArgs<ExtArgs>
            result: $Utils.Optional<LicenseUsageStatsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type LicensePoolCountOutputType
   */

  export type LicensePoolCountOutputType = {
    licenses: number
    allocations: number
  }

  export type LicensePoolCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    licenses?: boolean | LicensePoolCountOutputTypeCountLicensesArgs
    allocations?: boolean | LicensePoolCountOutputTypeCountAllocationsArgs
  }

  // Custom InputTypes
  /**
   * LicensePoolCountOutputType without action
   */
  export type LicensePoolCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LicensePoolCountOutputType
     */
    select?: LicensePoolCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LicensePoolCountOutputType without action
   */
  export type LicensePoolCountOutputTypeCountLicensesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LicenseWhereInput
  }

  /**
   * LicensePoolCountOutputType without action
   */
  export type LicensePoolCountOutputTypeCountAllocationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LicenseAllocationWhereInput
  }


  /**
   * Count Type LicenseCountOutputType
   */

  export type LicenseCountOutputType = {
    devices: number
    sessions: number
    allocations: number
    activationLogs: number
  }

  export type LicenseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    devices?: boolean | LicenseCountOutputTypeCountDevicesArgs
    sessions?: boolean | LicenseCountOutputTypeCountSessionsArgs
    allocations?: boolean | LicenseCountOutputTypeCountAllocationsArgs
    activationLogs?: boolean | LicenseCountOutputTypeCountActivationLogsArgs
  }

  // Custom InputTypes
  /**
   * LicenseCountOutputType without action
   */
  export type LicenseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LicenseCountOutputType
     */
    select?: LicenseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LicenseCountOutputType without action
   */
  export type LicenseCountOutputTypeCountDevicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LicenseDeviceWhereInput
  }

  /**
   * LicenseCountOutputType without action
   */
  export type LicenseCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LicenseSessionWhereInput
  }

  /**
   * LicenseCountOutputType without action
   */
  export type LicenseCountOutputTypeCountAllocationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LicenseAllocationWhereInput
  }

  /**
   * LicenseCountOutputType without action
   */
  export type LicenseCountOutputTypeCountActivationLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LicenseActivationLogWhereInput
  }


  /**
   * Models
   */

  /**
   * Model LicensePool
   */

  export type AggregateLicensePool = {
    _count: LicensePoolCountAggregateOutputType | null
    _avg: LicensePoolAvgAggregateOutputType | null
    _sum: LicensePoolSumAggregateOutputType | null
    _min: LicensePoolMinAggregateOutputType | null
    _max: LicensePoolMaxAggregateOutputType | null
  }

  export type LicensePoolAvgAggregateOutputType = {
    totalSeats: number | null
    allocatedSeats: number | null
    availableSeats: number | null
    gracePeriodDays: number | null
    pricePerSeat: Decimal | null
    totalAmount: Decimal | null
  }

  export type LicensePoolSumAggregateOutputType = {
    totalSeats: number | null
    allocatedSeats: number | null
    availableSeats: number | null
    gracePeriodDays: number | null
    pricePerSeat: Decimal | null
    totalAmount: Decimal | null
  }

  export type LicensePoolMinAggregateOutputType = {
    id: string | null
    clientId: string | null
    clientName: string | null
    clientEmail: string | null
    subscriptionId: string | null
    productId: string | null
    productName: string | null
    productCode: string | null
    licenseTypeId: string | null
    licenseTypeName: string | null
    totalSeats: number | null
    allocatedSeats: number | null
    availableSeats: number | null
    poolKey: string | null
    poolKeyHash: string | null
    activationDate: Date | null
    expirationDate: Date | null
    gracePeriodDays: number | null
    billingCycle: string | null
    pricePerSeat: Decimal | null
    totalAmount: Decimal | null
    currency: string | null
    subscriptionStatus: string | null
    paymentStatus: string | null
    autoRenew: boolean | null
    nextBillingDate: Date | null
    status: $Enums.PoolStatus | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LicensePoolMaxAggregateOutputType = {
    id: string | null
    clientId: string | null
    clientName: string | null
    clientEmail: string | null
    subscriptionId: string | null
    productId: string | null
    productName: string | null
    productCode: string | null
    licenseTypeId: string | null
    licenseTypeName: string | null
    totalSeats: number | null
    allocatedSeats: number | null
    availableSeats: number | null
    poolKey: string | null
    poolKeyHash: string | null
    activationDate: Date | null
    expirationDate: Date | null
    gracePeriodDays: number | null
    billingCycle: string | null
    pricePerSeat: Decimal | null
    totalAmount: Decimal | null
    currency: string | null
    subscriptionStatus: string | null
    paymentStatus: string | null
    autoRenew: boolean | null
    nextBillingDate: Date | null
    status: $Enums.PoolStatus | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LicensePoolCountAggregateOutputType = {
    id: number
    clientId: number
    clientName: number
    clientEmail: number
    subscriptionId: number
    productId: number
    productName: number
    productCode: number
    licenseTypeId: number
    licenseTypeName: number
    totalSeats: number
    allocatedSeats: number
    availableSeats: number
    poolKey: number
    poolKeyHash: number
    activationDate: number
    expirationDate: number
    gracePeriodDays: number
    features: number
    selectedFeatures: number
    billingCycle: number
    pricePerSeat: number
    totalAmount: number
    currency: number
    subscriptionStatus: number
    paymentStatus: number
    autoRenew: number
    nextBillingDate: number
    status: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LicensePoolAvgAggregateInputType = {
    totalSeats?: true
    allocatedSeats?: true
    availableSeats?: true
    gracePeriodDays?: true
    pricePerSeat?: true
    totalAmount?: true
  }

  export type LicensePoolSumAggregateInputType = {
    totalSeats?: true
    allocatedSeats?: true
    availableSeats?: true
    gracePeriodDays?: true
    pricePerSeat?: true
    totalAmount?: true
  }

  export type LicensePoolMinAggregateInputType = {
    id?: true
    clientId?: true
    clientName?: true
    clientEmail?: true
    subscriptionId?: true
    productId?: true
    productName?: true
    productCode?: true
    licenseTypeId?: true
    licenseTypeName?: true
    totalSeats?: true
    allocatedSeats?: true
    availableSeats?: true
    poolKey?: true
    poolKeyHash?: true
    activationDate?: true
    expirationDate?: true
    gracePeriodDays?: true
    billingCycle?: true
    pricePerSeat?: true
    totalAmount?: true
    currency?: true
    subscriptionStatus?: true
    paymentStatus?: true
    autoRenew?: true
    nextBillingDate?: true
    status?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LicensePoolMaxAggregateInputType = {
    id?: true
    clientId?: true
    clientName?: true
    clientEmail?: true
    subscriptionId?: true
    productId?: true
    productName?: true
    productCode?: true
    licenseTypeId?: true
    licenseTypeName?: true
    totalSeats?: true
    allocatedSeats?: true
    availableSeats?: true
    poolKey?: true
    poolKeyHash?: true
    activationDate?: true
    expirationDate?: true
    gracePeriodDays?: true
    billingCycle?: true
    pricePerSeat?: true
    totalAmount?: true
    currency?: true
    subscriptionStatus?: true
    paymentStatus?: true
    autoRenew?: true
    nextBillingDate?: true
    status?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LicensePoolCountAggregateInputType = {
    id?: true
    clientId?: true
    clientName?: true
    clientEmail?: true
    subscriptionId?: true
    productId?: true
    productName?: true
    productCode?: true
    licenseTypeId?: true
    licenseTypeName?: true
    totalSeats?: true
    allocatedSeats?: true
    availableSeats?: true
    poolKey?: true
    poolKeyHash?: true
    activationDate?: true
    expirationDate?: true
    gracePeriodDays?: true
    features?: true
    selectedFeatures?: true
    billingCycle?: true
    pricePerSeat?: true
    totalAmount?: true
    currency?: true
    subscriptionStatus?: true
    paymentStatus?: true
    autoRenew?: true
    nextBillingDate?: true
    status?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LicensePoolAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LicensePool to aggregate.
     */
    where?: LicensePoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LicensePools to fetch.
     */
    orderBy?: LicensePoolOrderByWithRelationInput | LicensePoolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LicensePoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LicensePools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LicensePools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LicensePools
    **/
    _count?: true | LicensePoolCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LicensePoolAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LicensePoolSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LicensePoolMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LicensePoolMaxAggregateInputType
  }

  export type GetLicensePoolAggregateType<T extends LicensePoolAggregateArgs> = {
        [P in keyof T & keyof AggregateLicensePool]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLicensePool[P]>
      : GetScalarType<T[P], AggregateLicensePool[P]>
  }




  export type LicensePoolGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LicensePoolWhereInput
    orderBy?: LicensePoolOrderByWithAggregationInput | LicensePoolOrderByWithAggregationInput[]
    by: LicensePoolScalarFieldEnum[] | LicensePoolScalarFieldEnum
    having?: LicensePoolScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LicensePoolCountAggregateInputType | true
    _avg?: LicensePoolAvgAggregateInputType
    _sum?: LicensePoolSumAggregateInputType
    _min?: LicensePoolMinAggregateInputType
    _max?: LicensePoolMaxAggregateInputType
  }

  export type LicensePoolGroupByOutputType = {
    id: string
    clientId: string
    clientName: string
    clientEmail: string | null
    subscriptionId: string
    productId: string
    productName: string
    productCode: string
    licenseTypeId: string
    licenseTypeName: string
    totalSeats: number
    allocatedSeats: number
    availableSeats: number
    poolKey: string
    poolKeyHash: string
    activationDate: Date | null
    expirationDate: Date
    gracePeriodDays: number
    features: string[]
    selectedFeatures: string[]
    billingCycle: string
    pricePerSeat: Decimal | null
    totalAmount: Decimal | null
    currency: string
    subscriptionStatus: string | null
    paymentStatus: string | null
    autoRenew: boolean
    nextBillingDate: Date | null
    status: $Enums.PoolStatus
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: LicensePoolCountAggregateOutputType | null
    _avg: LicensePoolAvgAggregateOutputType | null
    _sum: LicensePoolSumAggregateOutputType | null
    _min: LicensePoolMinAggregateOutputType | null
    _max: LicensePoolMaxAggregateOutputType | null
  }

  type GetLicensePoolGroupByPayload<T extends LicensePoolGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LicensePoolGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LicensePoolGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LicensePoolGroupByOutputType[P]>
            : GetScalarType<T[P], LicensePoolGroupByOutputType[P]>
        }
      >
    >


  export type LicensePoolSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    clientName?: boolean
    clientEmail?: boolean
    subscriptionId?: boolean
    productId?: boolean
    productName?: boolean
    productCode?: boolean
    licenseTypeId?: boolean
    licenseTypeName?: boolean
    totalSeats?: boolean
    allocatedSeats?: boolean
    availableSeats?: boolean
    poolKey?: boolean
    poolKeyHash?: boolean
    activationDate?: boolean
    expirationDate?: boolean
    gracePeriodDays?: boolean
    features?: boolean
    selectedFeatures?: boolean
    billingCycle?: boolean
    pricePerSeat?: boolean
    totalAmount?: boolean
    currency?: boolean
    subscriptionStatus?: boolean
    paymentStatus?: boolean
    autoRenew?: boolean
    nextBillingDate?: boolean
    status?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    licenses?: boolean | LicensePool$licensesArgs<ExtArgs>
    allocations?: boolean | LicensePool$allocationsArgs<ExtArgs>
    _count?: boolean | LicensePoolCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["licensePool"]>

  export type LicensePoolSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    clientName?: boolean
    clientEmail?: boolean
    subscriptionId?: boolean
    productId?: boolean
    productName?: boolean
    productCode?: boolean
    licenseTypeId?: boolean
    licenseTypeName?: boolean
    totalSeats?: boolean
    allocatedSeats?: boolean
    availableSeats?: boolean
    poolKey?: boolean
    poolKeyHash?: boolean
    activationDate?: boolean
    expirationDate?: boolean
    gracePeriodDays?: boolean
    features?: boolean
    selectedFeatures?: boolean
    billingCycle?: boolean
    pricePerSeat?: boolean
    totalAmount?: boolean
    currency?: boolean
    subscriptionStatus?: boolean
    paymentStatus?: boolean
    autoRenew?: boolean
    nextBillingDate?: boolean
    status?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["licensePool"]>

  export type LicensePoolSelectScalar = {
    id?: boolean
    clientId?: boolean
    clientName?: boolean
    clientEmail?: boolean
    subscriptionId?: boolean
    productId?: boolean
    productName?: boolean
    productCode?: boolean
    licenseTypeId?: boolean
    licenseTypeName?: boolean
    totalSeats?: boolean
    allocatedSeats?: boolean
    availableSeats?: boolean
    poolKey?: boolean
    poolKeyHash?: boolean
    activationDate?: boolean
    expirationDate?: boolean
    gracePeriodDays?: boolean
    features?: boolean
    selectedFeatures?: boolean
    billingCycle?: boolean
    pricePerSeat?: boolean
    totalAmount?: boolean
    currency?: boolean
    subscriptionStatus?: boolean
    paymentStatus?: boolean
    autoRenew?: boolean
    nextBillingDate?: boolean
    status?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type LicensePoolInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    licenses?: boolean | LicensePool$licensesArgs<ExtArgs>
    allocations?: boolean | LicensePool$allocationsArgs<ExtArgs>
    _count?: boolean | LicensePoolCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LicensePoolIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $LicensePoolPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LicensePool"
    objects: {
      licenses: Prisma.$LicensePayload<ExtArgs>[]
      allocations: Prisma.$LicenseAllocationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      clientId: string
      clientName: string
      clientEmail: string | null
      subscriptionId: string
      productId: string
      productName: string
      productCode: string
      licenseTypeId: string
      licenseTypeName: string
      totalSeats: number
      allocatedSeats: number
      availableSeats: number
      poolKey: string
      poolKeyHash: string
      activationDate: Date | null
      expirationDate: Date
      gracePeriodDays: number
      features: string[]
      selectedFeatures: string[]
      billingCycle: string
      pricePerSeat: Prisma.Decimal | null
      totalAmount: Prisma.Decimal | null
      currency: string
      subscriptionStatus: string | null
      paymentStatus: string | null
      autoRenew: boolean
      nextBillingDate: Date | null
      status: $Enums.PoolStatus
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["licensePool"]>
    composites: {}
  }

  type LicensePoolGetPayload<S extends boolean | null | undefined | LicensePoolDefaultArgs> = $Result.GetResult<Prisma.$LicensePoolPayload, S>

  type LicensePoolCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<LicensePoolFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: LicensePoolCountAggregateInputType | true
    }

  export interface LicensePoolDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LicensePool'], meta: { name: 'LicensePool' } }
    /**
     * Find zero or one LicensePool that matches the filter.
     * @param {LicensePoolFindUniqueArgs} args - Arguments to find a LicensePool
     * @example
     * // Get one LicensePool
     * const licensePool = await prisma.licensePool.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LicensePoolFindUniqueArgs>(args: SelectSubset<T, LicensePoolFindUniqueArgs<ExtArgs>>): Prisma__LicensePoolClient<$Result.GetResult<Prisma.$LicensePoolPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one LicensePool that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {LicensePoolFindUniqueOrThrowArgs} args - Arguments to find a LicensePool
     * @example
     * // Get one LicensePool
     * const licensePool = await prisma.licensePool.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LicensePoolFindUniqueOrThrowArgs>(args: SelectSubset<T, LicensePoolFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LicensePoolClient<$Result.GetResult<Prisma.$LicensePoolPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first LicensePool that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicensePoolFindFirstArgs} args - Arguments to find a LicensePool
     * @example
     * // Get one LicensePool
     * const licensePool = await prisma.licensePool.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LicensePoolFindFirstArgs>(args?: SelectSubset<T, LicensePoolFindFirstArgs<ExtArgs>>): Prisma__LicensePoolClient<$Result.GetResult<Prisma.$LicensePoolPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first LicensePool that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicensePoolFindFirstOrThrowArgs} args - Arguments to find a LicensePool
     * @example
     * // Get one LicensePool
     * const licensePool = await prisma.licensePool.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LicensePoolFindFirstOrThrowArgs>(args?: SelectSubset<T, LicensePoolFindFirstOrThrowArgs<ExtArgs>>): Prisma__LicensePoolClient<$Result.GetResult<Prisma.$LicensePoolPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more LicensePools that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicensePoolFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LicensePools
     * const licensePools = await prisma.licensePool.findMany()
     * 
     * // Get first 10 LicensePools
     * const licensePools = await prisma.licensePool.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const licensePoolWithIdOnly = await prisma.licensePool.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LicensePoolFindManyArgs>(args?: SelectSubset<T, LicensePoolFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LicensePoolPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a LicensePool.
     * @param {LicensePoolCreateArgs} args - Arguments to create a LicensePool.
     * @example
     * // Create one LicensePool
     * const LicensePool = await prisma.licensePool.create({
     *   data: {
     *     // ... data to create a LicensePool
     *   }
     * })
     * 
     */
    create<T extends LicensePoolCreateArgs>(args: SelectSubset<T, LicensePoolCreateArgs<ExtArgs>>): Prisma__LicensePoolClient<$Result.GetResult<Prisma.$LicensePoolPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many LicensePools.
     * @param {LicensePoolCreateManyArgs} args - Arguments to create many LicensePools.
     * @example
     * // Create many LicensePools
     * const licensePool = await prisma.licensePool.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LicensePoolCreateManyArgs>(args?: SelectSubset<T, LicensePoolCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LicensePools and returns the data saved in the database.
     * @param {LicensePoolCreateManyAndReturnArgs} args - Arguments to create many LicensePools.
     * @example
     * // Create many LicensePools
     * const licensePool = await prisma.licensePool.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LicensePools and only return the `id`
     * const licensePoolWithIdOnly = await prisma.licensePool.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LicensePoolCreateManyAndReturnArgs>(args?: SelectSubset<T, LicensePoolCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LicensePoolPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a LicensePool.
     * @param {LicensePoolDeleteArgs} args - Arguments to delete one LicensePool.
     * @example
     * // Delete one LicensePool
     * const LicensePool = await prisma.licensePool.delete({
     *   where: {
     *     // ... filter to delete one LicensePool
     *   }
     * })
     * 
     */
    delete<T extends LicensePoolDeleteArgs>(args: SelectSubset<T, LicensePoolDeleteArgs<ExtArgs>>): Prisma__LicensePoolClient<$Result.GetResult<Prisma.$LicensePoolPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one LicensePool.
     * @param {LicensePoolUpdateArgs} args - Arguments to update one LicensePool.
     * @example
     * // Update one LicensePool
     * const licensePool = await prisma.licensePool.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LicensePoolUpdateArgs>(args: SelectSubset<T, LicensePoolUpdateArgs<ExtArgs>>): Prisma__LicensePoolClient<$Result.GetResult<Prisma.$LicensePoolPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more LicensePools.
     * @param {LicensePoolDeleteManyArgs} args - Arguments to filter LicensePools to delete.
     * @example
     * // Delete a few LicensePools
     * const { count } = await prisma.licensePool.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LicensePoolDeleteManyArgs>(args?: SelectSubset<T, LicensePoolDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LicensePools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicensePoolUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LicensePools
     * const licensePool = await prisma.licensePool.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LicensePoolUpdateManyArgs>(args: SelectSubset<T, LicensePoolUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one LicensePool.
     * @param {LicensePoolUpsertArgs} args - Arguments to update or create a LicensePool.
     * @example
     * // Update or create a LicensePool
     * const licensePool = await prisma.licensePool.upsert({
     *   create: {
     *     // ... data to create a LicensePool
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LicensePool we want to update
     *   }
     * })
     */
    upsert<T extends LicensePoolUpsertArgs>(args: SelectSubset<T, LicensePoolUpsertArgs<ExtArgs>>): Prisma__LicensePoolClient<$Result.GetResult<Prisma.$LicensePoolPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of LicensePools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicensePoolCountArgs} args - Arguments to filter LicensePools to count.
     * @example
     * // Count the number of LicensePools
     * const count = await prisma.licensePool.count({
     *   where: {
     *     // ... the filter for the LicensePools we want to count
     *   }
     * })
    **/
    count<T extends LicensePoolCountArgs>(
      args?: Subset<T, LicensePoolCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LicensePoolCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LicensePool.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicensePoolAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LicensePoolAggregateArgs>(args: Subset<T, LicensePoolAggregateArgs>): Prisma.PrismaPromise<GetLicensePoolAggregateType<T>>

    /**
     * Group by LicensePool.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicensePoolGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LicensePoolGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LicensePoolGroupByArgs['orderBy'] }
        : { orderBy?: LicensePoolGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LicensePoolGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLicensePoolGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LicensePool model
   */
  readonly fields: LicensePoolFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LicensePool.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LicensePoolClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    licenses<T extends LicensePool$licensesArgs<ExtArgs> = {}>(args?: Subset<T, LicensePool$licensesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LicensePayload<ExtArgs>, T, "findMany"> | Null>
    allocations<T extends LicensePool$allocationsArgs<ExtArgs> = {}>(args?: Subset<T, LicensePool$allocationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LicenseAllocationPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the LicensePool model
   */ 
  interface LicensePoolFieldRefs {
    readonly id: FieldRef<"LicensePool", 'String'>
    readonly clientId: FieldRef<"LicensePool", 'String'>
    readonly clientName: FieldRef<"LicensePool", 'String'>
    readonly clientEmail: FieldRef<"LicensePool", 'String'>
    readonly subscriptionId: FieldRef<"LicensePool", 'String'>
    readonly productId: FieldRef<"LicensePool", 'String'>
    readonly productName: FieldRef<"LicensePool", 'String'>
    readonly productCode: FieldRef<"LicensePool", 'String'>
    readonly licenseTypeId: FieldRef<"LicensePool", 'String'>
    readonly licenseTypeName: FieldRef<"LicensePool", 'String'>
    readonly totalSeats: FieldRef<"LicensePool", 'Int'>
    readonly allocatedSeats: FieldRef<"LicensePool", 'Int'>
    readonly availableSeats: FieldRef<"LicensePool", 'Int'>
    readonly poolKey: FieldRef<"LicensePool", 'String'>
    readonly poolKeyHash: FieldRef<"LicensePool", 'String'>
    readonly activationDate: FieldRef<"LicensePool", 'DateTime'>
    readonly expirationDate: FieldRef<"LicensePool", 'DateTime'>
    readonly gracePeriodDays: FieldRef<"LicensePool", 'Int'>
    readonly features: FieldRef<"LicensePool", 'String[]'>
    readonly selectedFeatures: FieldRef<"LicensePool", 'String[]'>
    readonly billingCycle: FieldRef<"LicensePool", 'String'>
    readonly pricePerSeat: FieldRef<"LicensePool", 'Decimal'>
    readonly totalAmount: FieldRef<"LicensePool", 'Decimal'>
    readonly currency: FieldRef<"LicensePool", 'String'>
    readonly subscriptionStatus: FieldRef<"LicensePool", 'String'>
    readonly paymentStatus: FieldRef<"LicensePool", 'String'>
    readonly autoRenew: FieldRef<"LicensePool", 'Boolean'>
    readonly nextBillingDate: FieldRef<"LicensePool", 'DateTime'>
    readonly status: FieldRef<"LicensePool", 'PoolStatus'>
    readonly isActive: FieldRef<"LicensePool", 'Boolean'>
    readonly createdAt: FieldRef<"LicensePool", 'DateTime'>
    readonly updatedAt: FieldRef<"LicensePool", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LicensePool findUnique
   */
  export type LicensePoolFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LicensePool
     */
    select?: LicensePoolSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicensePoolInclude<ExtArgs> | null
    /**
     * Filter, which LicensePool to fetch.
     */
    where: LicensePoolWhereUniqueInput
  }

  /**
   * LicensePool findUniqueOrThrow
   */
  export type LicensePoolFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LicensePool
     */
    select?: LicensePoolSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicensePoolInclude<ExtArgs> | null
    /**
     * Filter, which LicensePool to fetch.
     */
    where: LicensePoolWhereUniqueInput
  }

  /**
   * LicensePool findFirst
   */
  export type LicensePoolFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LicensePool
     */
    select?: LicensePoolSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicensePoolInclude<ExtArgs> | null
    /**
     * Filter, which LicensePool to fetch.
     */
    where?: LicensePoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LicensePools to fetch.
     */
    orderBy?: LicensePoolOrderByWithRelationInput | LicensePoolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LicensePools.
     */
    cursor?: LicensePoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LicensePools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LicensePools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LicensePools.
     */
    distinct?: LicensePoolScalarFieldEnum | LicensePoolScalarFieldEnum[]
  }

  /**
   * LicensePool findFirstOrThrow
   */
  export type LicensePoolFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LicensePool
     */
    select?: LicensePoolSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicensePoolInclude<ExtArgs> | null
    /**
     * Filter, which LicensePool to fetch.
     */
    where?: LicensePoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LicensePools to fetch.
     */
    orderBy?: LicensePoolOrderByWithRelationInput | LicensePoolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LicensePools.
     */
    cursor?: LicensePoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LicensePools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LicensePools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LicensePools.
     */
    distinct?: LicensePoolScalarFieldEnum | LicensePoolScalarFieldEnum[]
  }

  /**
   * LicensePool findMany
   */
  export type LicensePoolFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LicensePool
     */
    select?: LicensePoolSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicensePoolInclude<ExtArgs> | null
    /**
     * Filter, which LicensePools to fetch.
     */
    where?: LicensePoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LicensePools to fetch.
     */
    orderBy?: LicensePoolOrderByWithRelationInput | LicensePoolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LicensePools.
     */
    cursor?: LicensePoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LicensePools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LicensePools.
     */
    skip?: number
    distinct?: LicensePoolScalarFieldEnum | LicensePoolScalarFieldEnum[]
  }

  /**
   * LicensePool create
   */
  export type LicensePoolCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LicensePool
     */
    select?: LicensePoolSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicensePoolInclude<ExtArgs> | null
    /**
     * The data needed to create a LicensePool.
     */
    data: XOR<LicensePoolCreateInput, LicensePoolUncheckedCreateInput>
  }

  /**
   * LicensePool createMany
   */
  export type LicensePoolCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LicensePools.
     */
    data: LicensePoolCreateManyInput | LicensePoolCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LicensePool createManyAndReturn
   */
  export type LicensePoolCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LicensePool
     */
    select?: LicensePoolSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many LicensePools.
     */
    data: LicensePoolCreateManyInput | LicensePoolCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LicensePool update
   */
  export type LicensePoolUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LicensePool
     */
    select?: LicensePoolSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicensePoolInclude<ExtArgs> | null
    /**
     * The data needed to update a LicensePool.
     */
    data: XOR<LicensePoolUpdateInput, LicensePoolUncheckedUpdateInput>
    /**
     * Choose, which LicensePool to update.
     */
    where: LicensePoolWhereUniqueInput
  }

  /**
   * LicensePool updateMany
   */
  export type LicensePoolUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LicensePools.
     */
    data: XOR<LicensePoolUpdateManyMutationInput, LicensePoolUncheckedUpdateManyInput>
    /**
     * Filter which LicensePools to update
     */
    where?: LicensePoolWhereInput
  }

  /**
   * LicensePool upsert
   */
  export type LicensePoolUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LicensePool
     */
    select?: LicensePoolSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicensePoolInclude<ExtArgs> | null
    /**
     * The filter to search for the LicensePool to update in case it exists.
     */
    where: LicensePoolWhereUniqueInput
    /**
     * In case the LicensePool found by the `where` argument doesn't exist, create a new LicensePool with this data.
     */
    create: XOR<LicensePoolCreateInput, LicensePoolUncheckedCreateInput>
    /**
     * In case the LicensePool was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LicensePoolUpdateInput, LicensePoolUncheckedUpdateInput>
  }

  /**
   * LicensePool delete
   */
  export type LicensePoolDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LicensePool
     */
    select?: LicensePoolSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicensePoolInclude<ExtArgs> | null
    /**
     * Filter which LicensePool to delete.
     */
    where: LicensePoolWhereUniqueInput
  }

  /**
   * LicensePool deleteMany
   */
  export type LicensePoolDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LicensePools to delete
     */
    where?: LicensePoolWhereInput
  }

  /**
   * LicensePool.licenses
   */
  export type LicensePool$licensesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the License
     */
    select?: LicenseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseInclude<ExtArgs> | null
    where?: LicenseWhereInput
    orderBy?: LicenseOrderByWithRelationInput | LicenseOrderByWithRelationInput[]
    cursor?: LicenseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LicenseScalarFieldEnum | LicenseScalarFieldEnum[]
  }

  /**
   * LicensePool.allocations
   */
  export type LicensePool$allocationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LicenseAllocation
     */
    select?: LicenseAllocationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseAllocationInclude<ExtArgs> | null
    where?: LicenseAllocationWhereInput
    orderBy?: LicenseAllocationOrderByWithRelationInput | LicenseAllocationOrderByWithRelationInput[]
    cursor?: LicenseAllocationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LicenseAllocationScalarFieldEnum | LicenseAllocationScalarFieldEnum[]
  }

  /**
   * LicensePool without action
   */
  export type LicensePoolDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LicensePool
     */
    select?: LicensePoolSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicensePoolInclude<ExtArgs> | null
  }


  /**
   * Model License
   */

  export type AggregateLicense = {
    _count: LicenseCountAggregateOutputType | null
    _avg: LicenseAvgAggregateOutputType | null
    _sum: LicenseSumAggregateOutputType | null
    _min: LicenseMinAggregateOutputType | null
    _max: LicenseMaxAggregateOutputType | null
  }

  export type LicenseAvgAggregateOutputType = {
    deviceLimit: number | null
    sessionLimit: number | null
    deviceCount: number | null
    currentSessions: number | null
  }

  export type LicenseSumAggregateOutputType = {
    deviceLimit: number | null
    sessionLimit: number | null
    deviceCount: number | null
    currentSessions: number | null
  }

  export type LicenseMinAggregateOutputType = {
    id: string | null
    licenseKey: string | null
    licenseKeyHash: string | null
    clientId: string | null
    clientName: string | null
    productId: string | null
    productName: string | null
    productCode: string | null
    licenseTypeId: string | null
    licenseTypeName: string | null
    status: $Enums.LicenseStatus | null
    poolId: string | null
    userName: string | null
    userEmail: string | null
    deviceLimit: number | null
    sessionLimit: number | null
    deviceCount: number | null
    currentSessions: number | null
    lastActive: Date | null
    activationDate: Date | null
    expirationDate: Date | null
    boundHardwareId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LicenseMaxAggregateOutputType = {
    id: string | null
    licenseKey: string | null
    licenseKeyHash: string | null
    clientId: string | null
    clientName: string | null
    productId: string | null
    productName: string | null
    productCode: string | null
    licenseTypeId: string | null
    licenseTypeName: string | null
    status: $Enums.LicenseStatus | null
    poolId: string | null
    userName: string | null
    userEmail: string | null
    deviceLimit: number | null
    sessionLimit: number | null
    deviceCount: number | null
    currentSessions: number | null
    lastActive: Date | null
    activationDate: Date | null
    expirationDate: Date | null
    boundHardwareId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LicenseCountAggregateOutputType = {
    id: number
    licenseKey: number
    licenseKeyHash: number
    clientId: number
    clientName: number
    productId: number
    productName: number
    productCode: number
    licenseTypeId: number
    licenseTypeName: number
    status: number
    poolId: number
    userName: number
    userEmail: number
    deviceLimit: number
    sessionLimit: number
    deviceCount: number
    currentSessions: number
    lastActive: number
    activationDate: number
    expirationDate: number
    boundHardwareId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LicenseAvgAggregateInputType = {
    deviceLimit?: true
    sessionLimit?: true
    deviceCount?: true
    currentSessions?: true
  }

  export type LicenseSumAggregateInputType = {
    deviceLimit?: true
    sessionLimit?: true
    deviceCount?: true
    currentSessions?: true
  }

  export type LicenseMinAggregateInputType = {
    id?: true
    licenseKey?: true
    licenseKeyHash?: true
    clientId?: true
    clientName?: true
    productId?: true
    productName?: true
    productCode?: true
    licenseTypeId?: true
    licenseTypeName?: true
    status?: true
    poolId?: true
    userName?: true
    userEmail?: true
    deviceLimit?: true
    sessionLimit?: true
    deviceCount?: true
    currentSessions?: true
    lastActive?: true
    activationDate?: true
    expirationDate?: true
    boundHardwareId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LicenseMaxAggregateInputType = {
    id?: true
    licenseKey?: true
    licenseKeyHash?: true
    clientId?: true
    clientName?: true
    productId?: true
    productName?: true
    productCode?: true
    licenseTypeId?: true
    licenseTypeName?: true
    status?: true
    poolId?: true
    userName?: true
    userEmail?: true
    deviceLimit?: true
    sessionLimit?: true
    deviceCount?: true
    currentSessions?: true
    lastActive?: true
    activationDate?: true
    expirationDate?: true
    boundHardwareId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LicenseCountAggregateInputType = {
    id?: true
    licenseKey?: true
    licenseKeyHash?: true
    clientId?: true
    clientName?: true
    productId?: true
    productName?: true
    productCode?: true
    licenseTypeId?: true
    licenseTypeName?: true
    status?: true
    poolId?: true
    userName?: true
    userEmail?: true
    deviceLimit?: true
    sessionLimit?: true
    deviceCount?: true
    currentSessions?: true
    lastActive?: true
    activationDate?: true
    expirationDate?: true
    boundHardwareId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LicenseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which License to aggregate.
     */
    where?: LicenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Licenses to fetch.
     */
    orderBy?: LicenseOrderByWithRelationInput | LicenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LicenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Licenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Licenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Licenses
    **/
    _count?: true | LicenseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LicenseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LicenseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LicenseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LicenseMaxAggregateInputType
  }

  export type GetLicenseAggregateType<T extends LicenseAggregateArgs> = {
        [P in keyof T & keyof AggregateLicense]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLicense[P]>
      : GetScalarType<T[P], AggregateLicense[P]>
  }




  export type LicenseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LicenseWhereInput
    orderBy?: LicenseOrderByWithAggregationInput | LicenseOrderByWithAggregationInput[]
    by: LicenseScalarFieldEnum[] | LicenseScalarFieldEnum
    having?: LicenseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LicenseCountAggregateInputType | true
    _avg?: LicenseAvgAggregateInputType
    _sum?: LicenseSumAggregateInputType
    _min?: LicenseMinAggregateInputType
    _max?: LicenseMaxAggregateInputType
  }

  export type LicenseGroupByOutputType = {
    id: string
    licenseKey: string
    licenseKeyHash: string | null
    clientId: string | null
    clientName: string | null
    productId: string
    productName: string
    productCode: string
    licenseTypeId: string | null
    licenseTypeName: string | null
    status: $Enums.LicenseStatus
    poolId: string | null
    userName: string | null
    userEmail: string | null
    deviceLimit: number
    sessionLimit: number
    deviceCount: number
    currentSessions: number
    lastActive: Date | null
    activationDate: Date | null
    expirationDate: Date | null
    boundHardwareId: string | null
    createdAt: Date
    updatedAt: Date
    _count: LicenseCountAggregateOutputType | null
    _avg: LicenseAvgAggregateOutputType | null
    _sum: LicenseSumAggregateOutputType | null
    _min: LicenseMinAggregateOutputType | null
    _max: LicenseMaxAggregateOutputType | null
  }

  type GetLicenseGroupByPayload<T extends LicenseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LicenseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LicenseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LicenseGroupByOutputType[P]>
            : GetScalarType<T[P], LicenseGroupByOutputType[P]>
        }
      >
    >


  export type LicenseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    licenseKey?: boolean
    licenseKeyHash?: boolean
    clientId?: boolean
    clientName?: boolean
    productId?: boolean
    productName?: boolean
    productCode?: boolean
    licenseTypeId?: boolean
    licenseTypeName?: boolean
    status?: boolean
    poolId?: boolean
    userName?: boolean
    userEmail?: boolean
    deviceLimit?: boolean
    sessionLimit?: boolean
    deviceCount?: boolean
    currentSessions?: boolean
    lastActive?: boolean
    activationDate?: boolean
    expirationDate?: boolean
    boundHardwareId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    pool?: boolean | License$poolArgs<ExtArgs>
    devices?: boolean | License$devicesArgs<ExtArgs>
    sessions?: boolean | License$sessionsArgs<ExtArgs>
    allocations?: boolean | License$allocationsArgs<ExtArgs>
    activationLogs?: boolean | License$activationLogsArgs<ExtArgs>
    _count?: boolean | LicenseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["license"]>

  export type LicenseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    licenseKey?: boolean
    licenseKeyHash?: boolean
    clientId?: boolean
    clientName?: boolean
    productId?: boolean
    productName?: boolean
    productCode?: boolean
    licenseTypeId?: boolean
    licenseTypeName?: boolean
    status?: boolean
    poolId?: boolean
    userName?: boolean
    userEmail?: boolean
    deviceLimit?: boolean
    sessionLimit?: boolean
    deviceCount?: boolean
    currentSessions?: boolean
    lastActive?: boolean
    activationDate?: boolean
    expirationDate?: boolean
    boundHardwareId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    pool?: boolean | License$poolArgs<ExtArgs>
  }, ExtArgs["result"]["license"]>

  export type LicenseSelectScalar = {
    id?: boolean
    licenseKey?: boolean
    licenseKeyHash?: boolean
    clientId?: boolean
    clientName?: boolean
    productId?: boolean
    productName?: boolean
    productCode?: boolean
    licenseTypeId?: boolean
    licenseTypeName?: boolean
    status?: boolean
    poolId?: boolean
    userName?: boolean
    userEmail?: boolean
    deviceLimit?: boolean
    sessionLimit?: boolean
    deviceCount?: boolean
    currentSessions?: boolean
    lastActive?: boolean
    activationDate?: boolean
    expirationDate?: boolean
    boundHardwareId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type LicenseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pool?: boolean | License$poolArgs<ExtArgs>
    devices?: boolean | License$devicesArgs<ExtArgs>
    sessions?: boolean | License$sessionsArgs<ExtArgs>
    allocations?: boolean | License$allocationsArgs<ExtArgs>
    activationLogs?: boolean | License$activationLogsArgs<ExtArgs>
    _count?: boolean | LicenseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LicenseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pool?: boolean | License$poolArgs<ExtArgs>
  }

  export type $LicensePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "License"
    objects: {
      pool: Prisma.$LicensePoolPayload<ExtArgs> | null
      devices: Prisma.$LicenseDevicePayload<ExtArgs>[]
      sessions: Prisma.$LicenseSessionPayload<ExtArgs>[]
      allocations: Prisma.$LicenseAllocationPayload<ExtArgs>[]
      activationLogs: Prisma.$LicenseActivationLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      licenseKey: string
      licenseKeyHash: string | null
      clientId: string | null
      clientName: string | null
      productId: string
      productName: string
      productCode: string
      licenseTypeId: string | null
      licenseTypeName: string | null
      status: $Enums.LicenseStatus
      poolId: string | null
      userName: string | null
      userEmail: string | null
      deviceLimit: number
      sessionLimit: number
      deviceCount: number
      currentSessions: number
      lastActive: Date | null
      activationDate: Date | null
      expirationDate: Date | null
      boundHardwareId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["license"]>
    composites: {}
  }

  type LicenseGetPayload<S extends boolean | null | undefined | LicenseDefaultArgs> = $Result.GetResult<Prisma.$LicensePayload, S>

  type LicenseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<LicenseFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: LicenseCountAggregateInputType | true
    }

  export interface LicenseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['License'], meta: { name: 'License' } }
    /**
     * Find zero or one License that matches the filter.
     * @param {LicenseFindUniqueArgs} args - Arguments to find a License
     * @example
     * // Get one License
     * const license = await prisma.license.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LicenseFindUniqueArgs>(args: SelectSubset<T, LicenseFindUniqueArgs<ExtArgs>>): Prisma__LicenseClient<$Result.GetResult<Prisma.$LicensePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one License that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {LicenseFindUniqueOrThrowArgs} args - Arguments to find a License
     * @example
     * // Get one License
     * const license = await prisma.license.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LicenseFindUniqueOrThrowArgs>(args: SelectSubset<T, LicenseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LicenseClient<$Result.GetResult<Prisma.$LicensePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first License that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicenseFindFirstArgs} args - Arguments to find a License
     * @example
     * // Get one License
     * const license = await prisma.license.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LicenseFindFirstArgs>(args?: SelectSubset<T, LicenseFindFirstArgs<ExtArgs>>): Prisma__LicenseClient<$Result.GetResult<Prisma.$LicensePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first License that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicenseFindFirstOrThrowArgs} args - Arguments to find a License
     * @example
     * // Get one License
     * const license = await prisma.license.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LicenseFindFirstOrThrowArgs>(args?: SelectSubset<T, LicenseFindFirstOrThrowArgs<ExtArgs>>): Prisma__LicenseClient<$Result.GetResult<Prisma.$LicensePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Licenses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicenseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Licenses
     * const licenses = await prisma.license.findMany()
     * 
     * // Get first 10 Licenses
     * const licenses = await prisma.license.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const licenseWithIdOnly = await prisma.license.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LicenseFindManyArgs>(args?: SelectSubset<T, LicenseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LicensePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a License.
     * @param {LicenseCreateArgs} args - Arguments to create a License.
     * @example
     * // Create one License
     * const License = await prisma.license.create({
     *   data: {
     *     // ... data to create a License
     *   }
     * })
     * 
     */
    create<T extends LicenseCreateArgs>(args: SelectSubset<T, LicenseCreateArgs<ExtArgs>>): Prisma__LicenseClient<$Result.GetResult<Prisma.$LicensePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Licenses.
     * @param {LicenseCreateManyArgs} args - Arguments to create many Licenses.
     * @example
     * // Create many Licenses
     * const license = await prisma.license.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LicenseCreateManyArgs>(args?: SelectSubset<T, LicenseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Licenses and returns the data saved in the database.
     * @param {LicenseCreateManyAndReturnArgs} args - Arguments to create many Licenses.
     * @example
     * // Create many Licenses
     * const license = await prisma.license.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Licenses and only return the `id`
     * const licenseWithIdOnly = await prisma.license.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LicenseCreateManyAndReturnArgs>(args?: SelectSubset<T, LicenseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LicensePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a License.
     * @param {LicenseDeleteArgs} args - Arguments to delete one License.
     * @example
     * // Delete one License
     * const License = await prisma.license.delete({
     *   where: {
     *     // ... filter to delete one License
     *   }
     * })
     * 
     */
    delete<T extends LicenseDeleteArgs>(args: SelectSubset<T, LicenseDeleteArgs<ExtArgs>>): Prisma__LicenseClient<$Result.GetResult<Prisma.$LicensePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one License.
     * @param {LicenseUpdateArgs} args - Arguments to update one License.
     * @example
     * // Update one License
     * const license = await prisma.license.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LicenseUpdateArgs>(args: SelectSubset<T, LicenseUpdateArgs<ExtArgs>>): Prisma__LicenseClient<$Result.GetResult<Prisma.$LicensePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Licenses.
     * @param {LicenseDeleteManyArgs} args - Arguments to filter Licenses to delete.
     * @example
     * // Delete a few Licenses
     * const { count } = await prisma.license.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LicenseDeleteManyArgs>(args?: SelectSubset<T, LicenseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Licenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicenseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Licenses
     * const license = await prisma.license.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LicenseUpdateManyArgs>(args: SelectSubset<T, LicenseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one License.
     * @param {LicenseUpsertArgs} args - Arguments to update or create a License.
     * @example
     * // Update or create a License
     * const license = await prisma.license.upsert({
     *   create: {
     *     // ... data to create a License
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the License we want to update
     *   }
     * })
     */
    upsert<T extends LicenseUpsertArgs>(args: SelectSubset<T, LicenseUpsertArgs<ExtArgs>>): Prisma__LicenseClient<$Result.GetResult<Prisma.$LicensePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Licenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicenseCountArgs} args - Arguments to filter Licenses to count.
     * @example
     * // Count the number of Licenses
     * const count = await prisma.license.count({
     *   where: {
     *     // ... the filter for the Licenses we want to count
     *   }
     * })
    **/
    count<T extends LicenseCountArgs>(
      args?: Subset<T, LicenseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LicenseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a License.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicenseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LicenseAggregateArgs>(args: Subset<T, LicenseAggregateArgs>): Prisma.PrismaPromise<GetLicenseAggregateType<T>>

    /**
     * Group by License.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicenseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LicenseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LicenseGroupByArgs['orderBy'] }
        : { orderBy?: LicenseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LicenseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLicenseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the License model
   */
  readonly fields: LicenseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for License.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LicenseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pool<T extends License$poolArgs<ExtArgs> = {}>(args?: Subset<T, License$poolArgs<ExtArgs>>): Prisma__LicensePoolClient<$Result.GetResult<Prisma.$LicensePoolPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    devices<T extends License$devicesArgs<ExtArgs> = {}>(args?: Subset<T, License$devicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LicenseDevicePayload<ExtArgs>, T, "findMany"> | Null>
    sessions<T extends License$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, License$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LicenseSessionPayload<ExtArgs>, T, "findMany"> | Null>
    allocations<T extends License$allocationsArgs<ExtArgs> = {}>(args?: Subset<T, License$allocationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LicenseAllocationPayload<ExtArgs>, T, "findMany"> | Null>
    activationLogs<T extends License$activationLogsArgs<ExtArgs> = {}>(args?: Subset<T, License$activationLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LicenseActivationLogPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the License model
   */ 
  interface LicenseFieldRefs {
    readonly id: FieldRef<"License", 'String'>
    readonly licenseKey: FieldRef<"License", 'String'>
    readonly licenseKeyHash: FieldRef<"License", 'String'>
    readonly clientId: FieldRef<"License", 'String'>
    readonly clientName: FieldRef<"License", 'String'>
    readonly productId: FieldRef<"License", 'String'>
    readonly productName: FieldRef<"License", 'String'>
    readonly productCode: FieldRef<"License", 'String'>
    readonly licenseTypeId: FieldRef<"License", 'String'>
    readonly licenseTypeName: FieldRef<"License", 'String'>
    readonly status: FieldRef<"License", 'LicenseStatus'>
    readonly poolId: FieldRef<"License", 'String'>
    readonly userName: FieldRef<"License", 'String'>
    readonly userEmail: FieldRef<"License", 'String'>
    readonly deviceLimit: FieldRef<"License", 'Int'>
    readonly sessionLimit: FieldRef<"License", 'Int'>
    readonly deviceCount: FieldRef<"License", 'Int'>
    readonly currentSessions: FieldRef<"License", 'Int'>
    readonly lastActive: FieldRef<"License", 'DateTime'>
    readonly activationDate: FieldRef<"License", 'DateTime'>
    readonly expirationDate: FieldRef<"License", 'DateTime'>
    readonly boundHardwareId: FieldRef<"License", 'String'>
    readonly createdAt: FieldRef<"License", 'DateTime'>
    readonly updatedAt: FieldRef<"License", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * License findUnique
   */
  export type LicenseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the License
     */
    select?: LicenseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseInclude<ExtArgs> | null
    /**
     * Filter, which License to fetch.
     */
    where: LicenseWhereUniqueInput
  }

  /**
   * License findUniqueOrThrow
   */
  export type LicenseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the License
     */
    select?: LicenseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseInclude<ExtArgs> | null
    /**
     * Filter, which License to fetch.
     */
    where: LicenseWhereUniqueInput
  }

  /**
   * License findFirst
   */
  export type LicenseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the License
     */
    select?: LicenseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseInclude<ExtArgs> | null
    /**
     * Filter, which License to fetch.
     */
    where?: LicenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Licenses to fetch.
     */
    orderBy?: LicenseOrderByWithRelationInput | LicenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Licenses.
     */
    cursor?: LicenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Licenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Licenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Licenses.
     */
    distinct?: LicenseScalarFieldEnum | LicenseScalarFieldEnum[]
  }

  /**
   * License findFirstOrThrow
   */
  export type LicenseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the License
     */
    select?: LicenseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseInclude<ExtArgs> | null
    /**
     * Filter, which License to fetch.
     */
    where?: LicenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Licenses to fetch.
     */
    orderBy?: LicenseOrderByWithRelationInput | LicenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Licenses.
     */
    cursor?: LicenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Licenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Licenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Licenses.
     */
    distinct?: LicenseScalarFieldEnum | LicenseScalarFieldEnum[]
  }

  /**
   * License findMany
   */
  export type LicenseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the License
     */
    select?: LicenseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseInclude<ExtArgs> | null
    /**
     * Filter, which Licenses to fetch.
     */
    where?: LicenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Licenses to fetch.
     */
    orderBy?: LicenseOrderByWithRelationInput | LicenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Licenses.
     */
    cursor?: LicenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Licenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Licenses.
     */
    skip?: number
    distinct?: LicenseScalarFieldEnum | LicenseScalarFieldEnum[]
  }

  /**
   * License create
   */
  export type LicenseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the License
     */
    select?: LicenseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseInclude<ExtArgs> | null
    /**
     * The data needed to create a License.
     */
    data: XOR<LicenseCreateInput, LicenseUncheckedCreateInput>
  }

  /**
   * License createMany
   */
  export type LicenseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Licenses.
     */
    data: LicenseCreateManyInput | LicenseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * License createManyAndReturn
   */
  export type LicenseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the License
     */
    select?: LicenseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Licenses.
     */
    data: LicenseCreateManyInput | LicenseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * License update
   */
  export type LicenseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the License
     */
    select?: LicenseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseInclude<ExtArgs> | null
    /**
     * The data needed to update a License.
     */
    data: XOR<LicenseUpdateInput, LicenseUncheckedUpdateInput>
    /**
     * Choose, which License to update.
     */
    where: LicenseWhereUniqueInput
  }

  /**
   * License updateMany
   */
  export type LicenseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Licenses.
     */
    data: XOR<LicenseUpdateManyMutationInput, LicenseUncheckedUpdateManyInput>
    /**
     * Filter which Licenses to update
     */
    where?: LicenseWhereInput
  }

  /**
   * License upsert
   */
  export type LicenseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the License
     */
    select?: LicenseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseInclude<ExtArgs> | null
    /**
     * The filter to search for the License to update in case it exists.
     */
    where: LicenseWhereUniqueInput
    /**
     * In case the License found by the `where` argument doesn't exist, create a new License with this data.
     */
    create: XOR<LicenseCreateInput, LicenseUncheckedCreateInput>
    /**
     * In case the License was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LicenseUpdateInput, LicenseUncheckedUpdateInput>
  }

  /**
   * License delete
   */
  export type LicenseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the License
     */
    select?: LicenseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseInclude<ExtArgs> | null
    /**
     * Filter which License to delete.
     */
    where: LicenseWhereUniqueInput
  }

  /**
   * License deleteMany
   */
  export type LicenseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Licenses to delete
     */
    where?: LicenseWhereInput
  }

  /**
   * License.pool
   */
  export type License$poolArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LicensePool
     */
    select?: LicensePoolSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicensePoolInclude<ExtArgs> | null
    where?: LicensePoolWhereInput
  }

  /**
   * License.devices
   */
  export type License$devicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LicenseDevice
     */
    select?: LicenseDeviceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseDeviceInclude<ExtArgs> | null
    where?: LicenseDeviceWhereInput
    orderBy?: LicenseDeviceOrderByWithRelationInput | LicenseDeviceOrderByWithRelationInput[]
    cursor?: LicenseDeviceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LicenseDeviceScalarFieldEnum | LicenseDeviceScalarFieldEnum[]
  }

  /**
   * License.sessions
   */
  export type License$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LicenseSession
     */
    select?: LicenseSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseSessionInclude<ExtArgs> | null
    where?: LicenseSessionWhereInput
    orderBy?: LicenseSessionOrderByWithRelationInput | LicenseSessionOrderByWithRelationInput[]
    cursor?: LicenseSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LicenseSessionScalarFieldEnum | LicenseSessionScalarFieldEnum[]
  }

  /**
   * License.allocations
   */
  export type License$allocationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LicenseAllocation
     */
    select?: LicenseAllocationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseAllocationInclude<ExtArgs> | null
    where?: LicenseAllocationWhereInput
    orderBy?: LicenseAllocationOrderByWithRelationInput | LicenseAllocationOrderByWithRelationInput[]
    cursor?: LicenseAllocationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LicenseAllocationScalarFieldEnum | LicenseAllocationScalarFieldEnum[]
  }

  /**
   * License.activationLogs
   */
  export type License$activationLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LicenseActivationLog
     */
    select?: LicenseActivationLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseActivationLogInclude<ExtArgs> | null
    where?: LicenseActivationLogWhereInput
    orderBy?: LicenseActivationLogOrderByWithRelationInput | LicenseActivationLogOrderByWithRelationInput[]
    cursor?: LicenseActivationLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LicenseActivationLogScalarFieldEnum | LicenseActivationLogScalarFieldEnum[]
  }

  /**
   * License without action
   */
  export type LicenseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the License
     */
    select?: LicenseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseInclude<ExtArgs> | null
  }


  /**
   * Model LicenseDevice
   */

  export type AggregateLicenseDevice = {
    _count: LicenseDeviceCountAggregateOutputType | null
    _min: LicenseDeviceMinAggregateOutputType | null
    _max: LicenseDeviceMaxAggregateOutputType | null
  }

  export type LicenseDeviceMinAggregateOutputType = {
    id: string | null
    licenseId: string | null
    macAddress: string | null
    ipAddress: string | null
    hostname: string | null
    location: string | null
    deviceType: $Enums.DeviceType | null
    deviceName: string | null
    osInfo: string | null
    status: $Enums.DeviceStatus | null
    lastActive: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LicenseDeviceMaxAggregateOutputType = {
    id: string | null
    licenseId: string | null
    macAddress: string | null
    ipAddress: string | null
    hostname: string | null
    location: string | null
    deviceType: $Enums.DeviceType | null
    deviceName: string | null
    osInfo: string | null
    status: $Enums.DeviceStatus | null
    lastActive: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LicenseDeviceCountAggregateOutputType = {
    id: number
    licenseId: number
    macAddress: number
    ipAddress: number
    hostname: number
    location: number
    deviceType: number
    deviceName: number
    osInfo: number
    status: number
    lastActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LicenseDeviceMinAggregateInputType = {
    id?: true
    licenseId?: true
    macAddress?: true
    ipAddress?: true
    hostname?: true
    location?: true
    deviceType?: true
    deviceName?: true
    osInfo?: true
    status?: true
    lastActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LicenseDeviceMaxAggregateInputType = {
    id?: true
    licenseId?: true
    macAddress?: true
    ipAddress?: true
    hostname?: true
    location?: true
    deviceType?: true
    deviceName?: true
    osInfo?: true
    status?: true
    lastActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LicenseDeviceCountAggregateInputType = {
    id?: true
    licenseId?: true
    macAddress?: true
    ipAddress?: true
    hostname?: true
    location?: true
    deviceType?: true
    deviceName?: true
    osInfo?: true
    status?: true
    lastActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LicenseDeviceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LicenseDevice to aggregate.
     */
    where?: LicenseDeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LicenseDevices to fetch.
     */
    orderBy?: LicenseDeviceOrderByWithRelationInput | LicenseDeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LicenseDeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LicenseDevices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LicenseDevices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LicenseDevices
    **/
    _count?: true | LicenseDeviceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LicenseDeviceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LicenseDeviceMaxAggregateInputType
  }

  export type GetLicenseDeviceAggregateType<T extends LicenseDeviceAggregateArgs> = {
        [P in keyof T & keyof AggregateLicenseDevice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLicenseDevice[P]>
      : GetScalarType<T[P], AggregateLicenseDevice[P]>
  }




  export type LicenseDeviceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LicenseDeviceWhereInput
    orderBy?: LicenseDeviceOrderByWithAggregationInput | LicenseDeviceOrderByWithAggregationInput[]
    by: LicenseDeviceScalarFieldEnum[] | LicenseDeviceScalarFieldEnum
    having?: LicenseDeviceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LicenseDeviceCountAggregateInputType | true
    _min?: LicenseDeviceMinAggregateInputType
    _max?: LicenseDeviceMaxAggregateInputType
  }

  export type LicenseDeviceGroupByOutputType = {
    id: string
    licenseId: string
    macAddress: string
    ipAddress: string | null
    hostname: string | null
    location: string | null
    deviceType: $Enums.DeviceType
    deviceName: string | null
    osInfo: string | null
    status: $Enums.DeviceStatus
    lastActive: Date
    createdAt: Date
    updatedAt: Date
    _count: LicenseDeviceCountAggregateOutputType | null
    _min: LicenseDeviceMinAggregateOutputType | null
    _max: LicenseDeviceMaxAggregateOutputType | null
  }

  type GetLicenseDeviceGroupByPayload<T extends LicenseDeviceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LicenseDeviceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LicenseDeviceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LicenseDeviceGroupByOutputType[P]>
            : GetScalarType<T[P], LicenseDeviceGroupByOutputType[P]>
        }
      >
    >


  export type LicenseDeviceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    licenseId?: boolean
    macAddress?: boolean
    ipAddress?: boolean
    hostname?: boolean
    location?: boolean
    deviceType?: boolean
    deviceName?: boolean
    osInfo?: boolean
    status?: boolean
    lastActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    license?: boolean | LicenseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["licenseDevice"]>

  export type LicenseDeviceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    licenseId?: boolean
    macAddress?: boolean
    ipAddress?: boolean
    hostname?: boolean
    location?: boolean
    deviceType?: boolean
    deviceName?: boolean
    osInfo?: boolean
    status?: boolean
    lastActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    license?: boolean | LicenseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["licenseDevice"]>

  export type LicenseDeviceSelectScalar = {
    id?: boolean
    licenseId?: boolean
    macAddress?: boolean
    ipAddress?: boolean
    hostname?: boolean
    location?: boolean
    deviceType?: boolean
    deviceName?: boolean
    osInfo?: boolean
    status?: boolean
    lastActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type LicenseDeviceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    license?: boolean | LicenseDefaultArgs<ExtArgs>
  }
  export type LicenseDeviceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    license?: boolean | LicenseDefaultArgs<ExtArgs>
  }

  export type $LicenseDevicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LicenseDevice"
    objects: {
      license: Prisma.$LicensePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      licenseId: string
      macAddress: string
      ipAddress: string | null
      hostname: string | null
      location: string | null
      deviceType: $Enums.DeviceType
      deviceName: string | null
      osInfo: string | null
      status: $Enums.DeviceStatus
      lastActive: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["licenseDevice"]>
    composites: {}
  }

  type LicenseDeviceGetPayload<S extends boolean | null | undefined | LicenseDeviceDefaultArgs> = $Result.GetResult<Prisma.$LicenseDevicePayload, S>

  type LicenseDeviceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<LicenseDeviceFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: LicenseDeviceCountAggregateInputType | true
    }

  export interface LicenseDeviceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LicenseDevice'], meta: { name: 'LicenseDevice' } }
    /**
     * Find zero or one LicenseDevice that matches the filter.
     * @param {LicenseDeviceFindUniqueArgs} args - Arguments to find a LicenseDevice
     * @example
     * // Get one LicenseDevice
     * const licenseDevice = await prisma.licenseDevice.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LicenseDeviceFindUniqueArgs>(args: SelectSubset<T, LicenseDeviceFindUniqueArgs<ExtArgs>>): Prisma__LicenseDeviceClient<$Result.GetResult<Prisma.$LicenseDevicePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one LicenseDevice that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {LicenseDeviceFindUniqueOrThrowArgs} args - Arguments to find a LicenseDevice
     * @example
     * // Get one LicenseDevice
     * const licenseDevice = await prisma.licenseDevice.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LicenseDeviceFindUniqueOrThrowArgs>(args: SelectSubset<T, LicenseDeviceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LicenseDeviceClient<$Result.GetResult<Prisma.$LicenseDevicePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first LicenseDevice that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicenseDeviceFindFirstArgs} args - Arguments to find a LicenseDevice
     * @example
     * // Get one LicenseDevice
     * const licenseDevice = await prisma.licenseDevice.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LicenseDeviceFindFirstArgs>(args?: SelectSubset<T, LicenseDeviceFindFirstArgs<ExtArgs>>): Prisma__LicenseDeviceClient<$Result.GetResult<Prisma.$LicenseDevicePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first LicenseDevice that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicenseDeviceFindFirstOrThrowArgs} args - Arguments to find a LicenseDevice
     * @example
     * // Get one LicenseDevice
     * const licenseDevice = await prisma.licenseDevice.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LicenseDeviceFindFirstOrThrowArgs>(args?: SelectSubset<T, LicenseDeviceFindFirstOrThrowArgs<ExtArgs>>): Prisma__LicenseDeviceClient<$Result.GetResult<Prisma.$LicenseDevicePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more LicenseDevices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicenseDeviceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LicenseDevices
     * const licenseDevices = await prisma.licenseDevice.findMany()
     * 
     * // Get first 10 LicenseDevices
     * const licenseDevices = await prisma.licenseDevice.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const licenseDeviceWithIdOnly = await prisma.licenseDevice.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LicenseDeviceFindManyArgs>(args?: SelectSubset<T, LicenseDeviceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LicenseDevicePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a LicenseDevice.
     * @param {LicenseDeviceCreateArgs} args - Arguments to create a LicenseDevice.
     * @example
     * // Create one LicenseDevice
     * const LicenseDevice = await prisma.licenseDevice.create({
     *   data: {
     *     // ... data to create a LicenseDevice
     *   }
     * })
     * 
     */
    create<T extends LicenseDeviceCreateArgs>(args: SelectSubset<T, LicenseDeviceCreateArgs<ExtArgs>>): Prisma__LicenseDeviceClient<$Result.GetResult<Prisma.$LicenseDevicePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many LicenseDevices.
     * @param {LicenseDeviceCreateManyArgs} args - Arguments to create many LicenseDevices.
     * @example
     * // Create many LicenseDevices
     * const licenseDevice = await prisma.licenseDevice.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LicenseDeviceCreateManyArgs>(args?: SelectSubset<T, LicenseDeviceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LicenseDevices and returns the data saved in the database.
     * @param {LicenseDeviceCreateManyAndReturnArgs} args - Arguments to create many LicenseDevices.
     * @example
     * // Create many LicenseDevices
     * const licenseDevice = await prisma.licenseDevice.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LicenseDevices and only return the `id`
     * const licenseDeviceWithIdOnly = await prisma.licenseDevice.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LicenseDeviceCreateManyAndReturnArgs>(args?: SelectSubset<T, LicenseDeviceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LicenseDevicePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a LicenseDevice.
     * @param {LicenseDeviceDeleteArgs} args - Arguments to delete one LicenseDevice.
     * @example
     * // Delete one LicenseDevice
     * const LicenseDevice = await prisma.licenseDevice.delete({
     *   where: {
     *     // ... filter to delete one LicenseDevice
     *   }
     * })
     * 
     */
    delete<T extends LicenseDeviceDeleteArgs>(args: SelectSubset<T, LicenseDeviceDeleteArgs<ExtArgs>>): Prisma__LicenseDeviceClient<$Result.GetResult<Prisma.$LicenseDevicePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one LicenseDevice.
     * @param {LicenseDeviceUpdateArgs} args - Arguments to update one LicenseDevice.
     * @example
     * // Update one LicenseDevice
     * const licenseDevice = await prisma.licenseDevice.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LicenseDeviceUpdateArgs>(args: SelectSubset<T, LicenseDeviceUpdateArgs<ExtArgs>>): Prisma__LicenseDeviceClient<$Result.GetResult<Prisma.$LicenseDevicePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more LicenseDevices.
     * @param {LicenseDeviceDeleteManyArgs} args - Arguments to filter LicenseDevices to delete.
     * @example
     * // Delete a few LicenseDevices
     * const { count } = await prisma.licenseDevice.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LicenseDeviceDeleteManyArgs>(args?: SelectSubset<T, LicenseDeviceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LicenseDevices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicenseDeviceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LicenseDevices
     * const licenseDevice = await prisma.licenseDevice.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LicenseDeviceUpdateManyArgs>(args: SelectSubset<T, LicenseDeviceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one LicenseDevice.
     * @param {LicenseDeviceUpsertArgs} args - Arguments to update or create a LicenseDevice.
     * @example
     * // Update or create a LicenseDevice
     * const licenseDevice = await prisma.licenseDevice.upsert({
     *   create: {
     *     // ... data to create a LicenseDevice
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LicenseDevice we want to update
     *   }
     * })
     */
    upsert<T extends LicenseDeviceUpsertArgs>(args: SelectSubset<T, LicenseDeviceUpsertArgs<ExtArgs>>): Prisma__LicenseDeviceClient<$Result.GetResult<Prisma.$LicenseDevicePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of LicenseDevices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicenseDeviceCountArgs} args - Arguments to filter LicenseDevices to count.
     * @example
     * // Count the number of LicenseDevices
     * const count = await prisma.licenseDevice.count({
     *   where: {
     *     // ... the filter for the LicenseDevices we want to count
     *   }
     * })
    **/
    count<T extends LicenseDeviceCountArgs>(
      args?: Subset<T, LicenseDeviceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LicenseDeviceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LicenseDevice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicenseDeviceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LicenseDeviceAggregateArgs>(args: Subset<T, LicenseDeviceAggregateArgs>): Prisma.PrismaPromise<GetLicenseDeviceAggregateType<T>>

    /**
     * Group by LicenseDevice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicenseDeviceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LicenseDeviceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LicenseDeviceGroupByArgs['orderBy'] }
        : { orderBy?: LicenseDeviceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LicenseDeviceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLicenseDeviceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LicenseDevice model
   */
  readonly fields: LicenseDeviceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LicenseDevice.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LicenseDeviceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    license<T extends LicenseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LicenseDefaultArgs<ExtArgs>>): Prisma__LicenseClient<$Result.GetResult<Prisma.$LicensePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the LicenseDevice model
   */ 
  interface LicenseDeviceFieldRefs {
    readonly id: FieldRef<"LicenseDevice", 'String'>
    readonly licenseId: FieldRef<"LicenseDevice", 'String'>
    readonly macAddress: FieldRef<"LicenseDevice", 'String'>
    readonly ipAddress: FieldRef<"LicenseDevice", 'String'>
    readonly hostname: FieldRef<"LicenseDevice", 'String'>
    readonly location: FieldRef<"LicenseDevice", 'String'>
    readonly deviceType: FieldRef<"LicenseDevice", 'DeviceType'>
    readonly deviceName: FieldRef<"LicenseDevice", 'String'>
    readonly osInfo: FieldRef<"LicenseDevice", 'String'>
    readonly status: FieldRef<"LicenseDevice", 'DeviceStatus'>
    readonly lastActive: FieldRef<"LicenseDevice", 'DateTime'>
    readonly createdAt: FieldRef<"LicenseDevice", 'DateTime'>
    readonly updatedAt: FieldRef<"LicenseDevice", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LicenseDevice findUnique
   */
  export type LicenseDeviceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LicenseDevice
     */
    select?: LicenseDeviceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseDeviceInclude<ExtArgs> | null
    /**
     * Filter, which LicenseDevice to fetch.
     */
    where: LicenseDeviceWhereUniqueInput
  }

  /**
   * LicenseDevice findUniqueOrThrow
   */
  export type LicenseDeviceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LicenseDevice
     */
    select?: LicenseDeviceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseDeviceInclude<ExtArgs> | null
    /**
     * Filter, which LicenseDevice to fetch.
     */
    where: LicenseDeviceWhereUniqueInput
  }

  /**
   * LicenseDevice findFirst
   */
  export type LicenseDeviceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LicenseDevice
     */
    select?: LicenseDeviceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseDeviceInclude<ExtArgs> | null
    /**
     * Filter, which LicenseDevice to fetch.
     */
    where?: LicenseDeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LicenseDevices to fetch.
     */
    orderBy?: LicenseDeviceOrderByWithRelationInput | LicenseDeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LicenseDevices.
     */
    cursor?: LicenseDeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LicenseDevices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LicenseDevices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LicenseDevices.
     */
    distinct?: LicenseDeviceScalarFieldEnum | LicenseDeviceScalarFieldEnum[]
  }

  /**
   * LicenseDevice findFirstOrThrow
   */
  export type LicenseDeviceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LicenseDevice
     */
    select?: LicenseDeviceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseDeviceInclude<ExtArgs> | null
    /**
     * Filter, which LicenseDevice to fetch.
     */
    where?: LicenseDeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LicenseDevices to fetch.
     */
    orderBy?: LicenseDeviceOrderByWithRelationInput | LicenseDeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LicenseDevices.
     */
    cursor?: LicenseDeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LicenseDevices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LicenseDevices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LicenseDevices.
     */
    distinct?: LicenseDeviceScalarFieldEnum | LicenseDeviceScalarFieldEnum[]
  }

  /**
   * LicenseDevice findMany
   */
  export type LicenseDeviceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LicenseDevice
     */
    select?: LicenseDeviceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseDeviceInclude<ExtArgs> | null
    /**
     * Filter, which LicenseDevices to fetch.
     */
    where?: LicenseDeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LicenseDevices to fetch.
     */
    orderBy?: LicenseDeviceOrderByWithRelationInput | LicenseDeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LicenseDevices.
     */
    cursor?: LicenseDeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LicenseDevices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LicenseDevices.
     */
    skip?: number
    distinct?: LicenseDeviceScalarFieldEnum | LicenseDeviceScalarFieldEnum[]
  }

  /**
   * LicenseDevice create
   */
  export type LicenseDeviceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LicenseDevice
     */
    select?: LicenseDeviceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseDeviceInclude<ExtArgs> | null
    /**
     * The data needed to create a LicenseDevice.
     */
    data: XOR<LicenseDeviceCreateInput, LicenseDeviceUncheckedCreateInput>
  }

  /**
   * LicenseDevice createMany
   */
  export type LicenseDeviceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LicenseDevices.
     */
    data: LicenseDeviceCreateManyInput | LicenseDeviceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LicenseDevice createManyAndReturn
   */
  export type LicenseDeviceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LicenseDevice
     */
    select?: LicenseDeviceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many LicenseDevices.
     */
    data: LicenseDeviceCreateManyInput | LicenseDeviceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseDeviceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LicenseDevice update
   */
  export type LicenseDeviceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LicenseDevice
     */
    select?: LicenseDeviceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseDeviceInclude<ExtArgs> | null
    /**
     * The data needed to update a LicenseDevice.
     */
    data: XOR<LicenseDeviceUpdateInput, LicenseDeviceUncheckedUpdateInput>
    /**
     * Choose, which LicenseDevice to update.
     */
    where: LicenseDeviceWhereUniqueInput
  }

  /**
   * LicenseDevice updateMany
   */
  export type LicenseDeviceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LicenseDevices.
     */
    data: XOR<LicenseDeviceUpdateManyMutationInput, LicenseDeviceUncheckedUpdateManyInput>
    /**
     * Filter which LicenseDevices to update
     */
    where?: LicenseDeviceWhereInput
  }

  /**
   * LicenseDevice upsert
   */
  export type LicenseDeviceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LicenseDevice
     */
    select?: LicenseDeviceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseDeviceInclude<ExtArgs> | null
    /**
     * The filter to search for the LicenseDevice to update in case it exists.
     */
    where: LicenseDeviceWhereUniqueInput
    /**
     * In case the LicenseDevice found by the `where` argument doesn't exist, create a new LicenseDevice with this data.
     */
    create: XOR<LicenseDeviceCreateInput, LicenseDeviceUncheckedCreateInput>
    /**
     * In case the LicenseDevice was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LicenseDeviceUpdateInput, LicenseDeviceUncheckedUpdateInput>
  }

  /**
   * LicenseDevice delete
   */
  export type LicenseDeviceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LicenseDevice
     */
    select?: LicenseDeviceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseDeviceInclude<ExtArgs> | null
    /**
     * Filter which LicenseDevice to delete.
     */
    where: LicenseDeviceWhereUniqueInput
  }

  /**
   * LicenseDevice deleteMany
   */
  export type LicenseDeviceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LicenseDevices to delete
     */
    where?: LicenseDeviceWhereInput
  }

  /**
   * LicenseDevice without action
   */
  export type LicenseDeviceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LicenseDevice
     */
    select?: LicenseDeviceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseDeviceInclude<ExtArgs> | null
  }


  /**
   * Model LicenseSession
   */

  export type AggregateLicenseSession = {
    _count: LicenseSessionCountAggregateOutputType | null
    _min: LicenseSessionMinAggregateOutputType | null
    _max: LicenseSessionMaxAggregateOutputType | null
  }

  export type LicenseSessionMinAggregateOutputType = {
    id: string | null
    licenseId: string | null
    sessionToken: string | null
    deviceId: string | null
    deviceName: string | null
    ipAddress: string | null
    userAgent: string | null
    location: string | null
    startedAt: Date | null
    lastActivityAt: Date | null
    expiresAt: Date | null
    isActive: boolean | null
    terminatedAt: Date | null
    terminatedBy: string | null
    terminateReason: string | null
  }

  export type LicenseSessionMaxAggregateOutputType = {
    id: string | null
    licenseId: string | null
    sessionToken: string | null
    deviceId: string | null
    deviceName: string | null
    ipAddress: string | null
    userAgent: string | null
    location: string | null
    startedAt: Date | null
    lastActivityAt: Date | null
    expiresAt: Date | null
    isActive: boolean | null
    terminatedAt: Date | null
    terminatedBy: string | null
    terminateReason: string | null
  }

  export type LicenseSessionCountAggregateOutputType = {
    id: number
    licenseId: number
    sessionToken: number
    deviceId: number
    deviceName: number
    ipAddress: number
    userAgent: number
    location: number
    startedAt: number
    lastActivityAt: number
    expiresAt: number
    isActive: number
    terminatedAt: number
    terminatedBy: number
    terminateReason: number
    _all: number
  }


  export type LicenseSessionMinAggregateInputType = {
    id?: true
    licenseId?: true
    sessionToken?: true
    deviceId?: true
    deviceName?: true
    ipAddress?: true
    userAgent?: true
    location?: true
    startedAt?: true
    lastActivityAt?: true
    expiresAt?: true
    isActive?: true
    terminatedAt?: true
    terminatedBy?: true
    terminateReason?: true
  }

  export type LicenseSessionMaxAggregateInputType = {
    id?: true
    licenseId?: true
    sessionToken?: true
    deviceId?: true
    deviceName?: true
    ipAddress?: true
    userAgent?: true
    location?: true
    startedAt?: true
    lastActivityAt?: true
    expiresAt?: true
    isActive?: true
    terminatedAt?: true
    terminatedBy?: true
    terminateReason?: true
  }

  export type LicenseSessionCountAggregateInputType = {
    id?: true
    licenseId?: true
    sessionToken?: true
    deviceId?: true
    deviceName?: true
    ipAddress?: true
    userAgent?: true
    location?: true
    startedAt?: true
    lastActivityAt?: true
    expiresAt?: true
    isActive?: true
    terminatedAt?: true
    terminatedBy?: true
    terminateReason?: true
    _all?: true
  }

  export type LicenseSessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LicenseSession to aggregate.
     */
    where?: LicenseSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LicenseSessions to fetch.
     */
    orderBy?: LicenseSessionOrderByWithRelationInput | LicenseSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LicenseSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LicenseSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LicenseSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LicenseSessions
    **/
    _count?: true | LicenseSessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LicenseSessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LicenseSessionMaxAggregateInputType
  }

  export type GetLicenseSessionAggregateType<T extends LicenseSessionAggregateArgs> = {
        [P in keyof T & keyof AggregateLicenseSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLicenseSession[P]>
      : GetScalarType<T[P], AggregateLicenseSession[P]>
  }




  export type LicenseSessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LicenseSessionWhereInput
    orderBy?: LicenseSessionOrderByWithAggregationInput | LicenseSessionOrderByWithAggregationInput[]
    by: LicenseSessionScalarFieldEnum[] | LicenseSessionScalarFieldEnum
    having?: LicenseSessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LicenseSessionCountAggregateInputType | true
    _min?: LicenseSessionMinAggregateInputType
    _max?: LicenseSessionMaxAggregateInputType
  }

  export type LicenseSessionGroupByOutputType = {
    id: string
    licenseId: string
    sessionToken: string
    deviceId: string | null
    deviceName: string | null
    ipAddress: string | null
    userAgent: string | null
    location: string | null
    startedAt: Date
    lastActivityAt: Date
    expiresAt: Date
    isActive: boolean
    terminatedAt: Date | null
    terminatedBy: string | null
    terminateReason: string | null
    _count: LicenseSessionCountAggregateOutputType | null
    _min: LicenseSessionMinAggregateOutputType | null
    _max: LicenseSessionMaxAggregateOutputType | null
  }

  type GetLicenseSessionGroupByPayload<T extends LicenseSessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LicenseSessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LicenseSessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LicenseSessionGroupByOutputType[P]>
            : GetScalarType<T[P], LicenseSessionGroupByOutputType[P]>
        }
      >
    >


  export type LicenseSessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    licenseId?: boolean
    sessionToken?: boolean
    deviceId?: boolean
    deviceName?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    location?: boolean
    startedAt?: boolean
    lastActivityAt?: boolean
    expiresAt?: boolean
    isActive?: boolean
    terminatedAt?: boolean
    terminatedBy?: boolean
    terminateReason?: boolean
    license?: boolean | LicenseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["licenseSession"]>

  export type LicenseSessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    licenseId?: boolean
    sessionToken?: boolean
    deviceId?: boolean
    deviceName?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    location?: boolean
    startedAt?: boolean
    lastActivityAt?: boolean
    expiresAt?: boolean
    isActive?: boolean
    terminatedAt?: boolean
    terminatedBy?: boolean
    terminateReason?: boolean
    license?: boolean | LicenseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["licenseSession"]>

  export type LicenseSessionSelectScalar = {
    id?: boolean
    licenseId?: boolean
    sessionToken?: boolean
    deviceId?: boolean
    deviceName?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    location?: boolean
    startedAt?: boolean
    lastActivityAt?: boolean
    expiresAt?: boolean
    isActive?: boolean
    terminatedAt?: boolean
    terminatedBy?: boolean
    terminateReason?: boolean
  }

  export type LicenseSessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    license?: boolean | LicenseDefaultArgs<ExtArgs>
  }
  export type LicenseSessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    license?: boolean | LicenseDefaultArgs<ExtArgs>
  }

  export type $LicenseSessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LicenseSession"
    objects: {
      license: Prisma.$LicensePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      licenseId: string
      sessionToken: string
      deviceId: string | null
      deviceName: string | null
      ipAddress: string | null
      userAgent: string | null
      location: string | null
      startedAt: Date
      lastActivityAt: Date
      expiresAt: Date
      isActive: boolean
      terminatedAt: Date | null
      terminatedBy: string | null
      terminateReason: string | null
    }, ExtArgs["result"]["licenseSession"]>
    composites: {}
  }

  type LicenseSessionGetPayload<S extends boolean | null | undefined | LicenseSessionDefaultArgs> = $Result.GetResult<Prisma.$LicenseSessionPayload, S>

  type LicenseSessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<LicenseSessionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: LicenseSessionCountAggregateInputType | true
    }

  export interface LicenseSessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LicenseSession'], meta: { name: 'LicenseSession' } }
    /**
     * Find zero or one LicenseSession that matches the filter.
     * @param {LicenseSessionFindUniqueArgs} args - Arguments to find a LicenseSession
     * @example
     * // Get one LicenseSession
     * const licenseSession = await prisma.licenseSession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LicenseSessionFindUniqueArgs>(args: SelectSubset<T, LicenseSessionFindUniqueArgs<ExtArgs>>): Prisma__LicenseSessionClient<$Result.GetResult<Prisma.$LicenseSessionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one LicenseSession that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {LicenseSessionFindUniqueOrThrowArgs} args - Arguments to find a LicenseSession
     * @example
     * // Get one LicenseSession
     * const licenseSession = await prisma.licenseSession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LicenseSessionFindUniqueOrThrowArgs>(args: SelectSubset<T, LicenseSessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LicenseSessionClient<$Result.GetResult<Prisma.$LicenseSessionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first LicenseSession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicenseSessionFindFirstArgs} args - Arguments to find a LicenseSession
     * @example
     * // Get one LicenseSession
     * const licenseSession = await prisma.licenseSession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LicenseSessionFindFirstArgs>(args?: SelectSubset<T, LicenseSessionFindFirstArgs<ExtArgs>>): Prisma__LicenseSessionClient<$Result.GetResult<Prisma.$LicenseSessionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first LicenseSession that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicenseSessionFindFirstOrThrowArgs} args - Arguments to find a LicenseSession
     * @example
     * // Get one LicenseSession
     * const licenseSession = await prisma.licenseSession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LicenseSessionFindFirstOrThrowArgs>(args?: SelectSubset<T, LicenseSessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__LicenseSessionClient<$Result.GetResult<Prisma.$LicenseSessionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more LicenseSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicenseSessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LicenseSessions
     * const licenseSessions = await prisma.licenseSession.findMany()
     * 
     * // Get first 10 LicenseSessions
     * const licenseSessions = await prisma.licenseSession.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const licenseSessionWithIdOnly = await prisma.licenseSession.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LicenseSessionFindManyArgs>(args?: SelectSubset<T, LicenseSessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LicenseSessionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a LicenseSession.
     * @param {LicenseSessionCreateArgs} args - Arguments to create a LicenseSession.
     * @example
     * // Create one LicenseSession
     * const LicenseSession = await prisma.licenseSession.create({
     *   data: {
     *     // ... data to create a LicenseSession
     *   }
     * })
     * 
     */
    create<T extends LicenseSessionCreateArgs>(args: SelectSubset<T, LicenseSessionCreateArgs<ExtArgs>>): Prisma__LicenseSessionClient<$Result.GetResult<Prisma.$LicenseSessionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many LicenseSessions.
     * @param {LicenseSessionCreateManyArgs} args - Arguments to create many LicenseSessions.
     * @example
     * // Create many LicenseSessions
     * const licenseSession = await prisma.licenseSession.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LicenseSessionCreateManyArgs>(args?: SelectSubset<T, LicenseSessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LicenseSessions and returns the data saved in the database.
     * @param {LicenseSessionCreateManyAndReturnArgs} args - Arguments to create many LicenseSessions.
     * @example
     * // Create many LicenseSessions
     * const licenseSession = await prisma.licenseSession.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LicenseSessions and only return the `id`
     * const licenseSessionWithIdOnly = await prisma.licenseSession.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LicenseSessionCreateManyAndReturnArgs>(args?: SelectSubset<T, LicenseSessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LicenseSessionPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a LicenseSession.
     * @param {LicenseSessionDeleteArgs} args - Arguments to delete one LicenseSession.
     * @example
     * // Delete one LicenseSession
     * const LicenseSession = await prisma.licenseSession.delete({
     *   where: {
     *     // ... filter to delete one LicenseSession
     *   }
     * })
     * 
     */
    delete<T extends LicenseSessionDeleteArgs>(args: SelectSubset<T, LicenseSessionDeleteArgs<ExtArgs>>): Prisma__LicenseSessionClient<$Result.GetResult<Prisma.$LicenseSessionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one LicenseSession.
     * @param {LicenseSessionUpdateArgs} args - Arguments to update one LicenseSession.
     * @example
     * // Update one LicenseSession
     * const licenseSession = await prisma.licenseSession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LicenseSessionUpdateArgs>(args: SelectSubset<T, LicenseSessionUpdateArgs<ExtArgs>>): Prisma__LicenseSessionClient<$Result.GetResult<Prisma.$LicenseSessionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more LicenseSessions.
     * @param {LicenseSessionDeleteManyArgs} args - Arguments to filter LicenseSessions to delete.
     * @example
     * // Delete a few LicenseSessions
     * const { count } = await prisma.licenseSession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LicenseSessionDeleteManyArgs>(args?: SelectSubset<T, LicenseSessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LicenseSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicenseSessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LicenseSessions
     * const licenseSession = await prisma.licenseSession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LicenseSessionUpdateManyArgs>(args: SelectSubset<T, LicenseSessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one LicenseSession.
     * @param {LicenseSessionUpsertArgs} args - Arguments to update or create a LicenseSession.
     * @example
     * // Update or create a LicenseSession
     * const licenseSession = await prisma.licenseSession.upsert({
     *   create: {
     *     // ... data to create a LicenseSession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LicenseSession we want to update
     *   }
     * })
     */
    upsert<T extends LicenseSessionUpsertArgs>(args: SelectSubset<T, LicenseSessionUpsertArgs<ExtArgs>>): Prisma__LicenseSessionClient<$Result.GetResult<Prisma.$LicenseSessionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of LicenseSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicenseSessionCountArgs} args - Arguments to filter LicenseSessions to count.
     * @example
     * // Count the number of LicenseSessions
     * const count = await prisma.licenseSession.count({
     *   where: {
     *     // ... the filter for the LicenseSessions we want to count
     *   }
     * })
    **/
    count<T extends LicenseSessionCountArgs>(
      args?: Subset<T, LicenseSessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LicenseSessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LicenseSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicenseSessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LicenseSessionAggregateArgs>(args: Subset<T, LicenseSessionAggregateArgs>): Prisma.PrismaPromise<GetLicenseSessionAggregateType<T>>

    /**
     * Group by LicenseSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicenseSessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LicenseSessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LicenseSessionGroupByArgs['orderBy'] }
        : { orderBy?: LicenseSessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LicenseSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLicenseSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LicenseSession model
   */
  readonly fields: LicenseSessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LicenseSession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LicenseSessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    license<T extends LicenseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LicenseDefaultArgs<ExtArgs>>): Prisma__LicenseClient<$Result.GetResult<Prisma.$LicensePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the LicenseSession model
   */ 
  interface LicenseSessionFieldRefs {
    readonly id: FieldRef<"LicenseSession", 'String'>
    readonly licenseId: FieldRef<"LicenseSession", 'String'>
    readonly sessionToken: FieldRef<"LicenseSession", 'String'>
    readonly deviceId: FieldRef<"LicenseSession", 'String'>
    readonly deviceName: FieldRef<"LicenseSession", 'String'>
    readonly ipAddress: FieldRef<"LicenseSession", 'String'>
    readonly userAgent: FieldRef<"LicenseSession", 'String'>
    readonly location: FieldRef<"LicenseSession", 'String'>
    readonly startedAt: FieldRef<"LicenseSession", 'DateTime'>
    readonly lastActivityAt: FieldRef<"LicenseSession", 'DateTime'>
    readonly expiresAt: FieldRef<"LicenseSession", 'DateTime'>
    readonly isActive: FieldRef<"LicenseSession", 'Boolean'>
    readonly terminatedAt: FieldRef<"LicenseSession", 'DateTime'>
    readonly terminatedBy: FieldRef<"LicenseSession", 'String'>
    readonly terminateReason: FieldRef<"LicenseSession", 'String'>
  }
    

  // Custom InputTypes
  /**
   * LicenseSession findUnique
   */
  export type LicenseSessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LicenseSession
     */
    select?: LicenseSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseSessionInclude<ExtArgs> | null
    /**
     * Filter, which LicenseSession to fetch.
     */
    where: LicenseSessionWhereUniqueInput
  }

  /**
   * LicenseSession findUniqueOrThrow
   */
  export type LicenseSessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LicenseSession
     */
    select?: LicenseSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseSessionInclude<ExtArgs> | null
    /**
     * Filter, which LicenseSession to fetch.
     */
    where: LicenseSessionWhereUniqueInput
  }

  /**
   * LicenseSession findFirst
   */
  export type LicenseSessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LicenseSession
     */
    select?: LicenseSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseSessionInclude<ExtArgs> | null
    /**
     * Filter, which LicenseSession to fetch.
     */
    where?: LicenseSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LicenseSessions to fetch.
     */
    orderBy?: LicenseSessionOrderByWithRelationInput | LicenseSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LicenseSessions.
     */
    cursor?: LicenseSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LicenseSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LicenseSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LicenseSessions.
     */
    distinct?: LicenseSessionScalarFieldEnum | LicenseSessionScalarFieldEnum[]
  }

  /**
   * LicenseSession findFirstOrThrow
   */
  export type LicenseSessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LicenseSession
     */
    select?: LicenseSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseSessionInclude<ExtArgs> | null
    /**
     * Filter, which LicenseSession to fetch.
     */
    where?: LicenseSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LicenseSessions to fetch.
     */
    orderBy?: LicenseSessionOrderByWithRelationInput | LicenseSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LicenseSessions.
     */
    cursor?: LicenseSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LicenseSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LicenseSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LicenseSessions.
     */
    distinct?: LicenseSessionScalarFieldEnum | LicenseSessionScalarFieldEnum[]
  }

  /**
   * LicenseSession findMany
   */
  export type LicenseSessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LicenseSession
     */
    select?: LicenseSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseSessionInclude<ExtArgs> | null
    /**
     * Filter, which LicenseSessions to fetch.
     */
    where?: LicenseSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LicenseSessions to fetch.
     */
    orderBy?: LicenseSessionOrderByWithRelationInput | LicenseSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LicenseSessions.
     */
    cursor?: LicenseSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LicenseSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LicenseSessions.
     */
    skip?: number
    distinct?: LicenseSessionScalarFieldEnum | LicenseSessionScalarFieldEnum[]
  }

  /**
   * LicenseSession create
   */
  export type LicenseSessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LicenseSession
     */
    select?: LicenseSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseSessionInclude<ExtArgs> | null
    /**
     * The data needed to create a LicenseSession.
     */
    data: XOR<LicenseSessionCreateInput, LicenseSessionUncheckedCreateInput>
  }

  /**
   * LicenseSession createMany
   */
  export type LicenseSessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LicenseSessions.
     */
    data: LicenseSessionCreateManyInput | LicenseSessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LicenseSession createManyAndReturn
   */
  export type LicenseSessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LicenseSession
     */
    select?: LicenseSessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many LicenseSessions.
     */
    data: LicenseSessionCreateManyInput | LicenseSessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseSessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LicenseSession update
   */
  export type LicenseSessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LicenseSession
     */
    select?: LicenseSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseSessionInclude<ExtArgs> | null
    /**
     * The data needed to update a LicenseSession.
     */
    data: XOR<LicenseSessionUpdateInput, LicenseSessionUncheckedUpdateInput>
    /**
     * Choose, which LicenseSession to update.
     */
    where: LicenseSessionWhereUniqueInput
  }

  /**
   * LicenseSession updateMany
   */
  export type LicenseSessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LicenseSessions.
     */
    data: XOR<LicenseSessionUpdateManyMutationInput, LicenseSessionUncheckedUpdateManyInput>
    /**
     * Filter which LicenseSessions to update
     */
    where?: LicenseSessionWhereInput
  }

  /**
   * LicenseSession upsert
   */
  export type LicenseSessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LicenseSession
     */
    select?: LicenseSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseSessionInclude<ExtArgs> | null
    /**
     * The filter to search for the LicenseSession to update in case it exists.
     */
    where: LicenseSessionWhereUniqueInput
    /**
     * In case the LicenseSession found by the `where` argument doesn't exist, create a new LicenseSession with this data.
     */
    create: XOR<LicenseSessionCreateInput, LicenseSessionUncheckedCreateInput>
    /**
     * In case the LicenseSession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LicenseSessionUpdateInput, LicenseSessionUncheckedUpdateInput>
  }

  /**
   * LicenseSession delete
   */
  export type LicenseSessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LicenseSession
     */
    select?: LicenseSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseSessionInclude<ExtArgs> | null
    /**
     * Filter which LicenseSession to delete.
     */
    where: LicenseSessionWhereUniqueInput
  }

  /**
   * LicenseSession deleteMany
   */
  export type LicenseSessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LicenseSessions to delete
     */
    where?: LicenseSessionWhereInput
  }

  /**
   * LicenseSession without action
   */
  export type LicenseSessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LicenseSession
     */
    select?: LicenseSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseSessionInclude<ExtArgs> | null
  }


  /**
   * Model LicenseAllocation
   */

  export type AggregateLicenseAllocation = {
    _count: LicenseAllocationCountAggregateOutputType | null
    _min: LicenseAllocationMinAggregateOutputType | null
    _max: LicenseAllocationMaxAggregateOutputType | null
  }

  export type LicenseAllocationMinAggregateOutputType = {
    id: string | null
    licenseId: string | null
    poolId: string | null
    clientId: string | null
    employeeName: string | null
    employeeEmail: string | null
    employeeId: string | null
    department: string | null
    action: $Enums.AllocationAction | null
    allocatedAt: Date | null
    allocatedById: string | null
    allocatedByName: string | null
    activatedAt: Date | null
    revokedAt: Date | null
    revokedById: string | null
    revokedByName: string | null
    revokeReason: string | null
    transferredFrom: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LicenseAllocationMaxAggregateOutputType = {
    id: string | null
    licenseId: string | null
    poolId: string | null
    clientId: string | null
    employeeName: string | null
    employeeEmail: string | null
    employeeId: string | null
    department: string | null
    action: $Enums.AllocationAction | null
    allocatedAt: Date | null
    allocatedById: string | null
    allocatedByName: string | null
    activatedAt: Date | null
    revokedAt: Date | null
    revokedById: string | null
    revokedByName: string | null
    revokeReason: string | null
    transferredFrom: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LicenseAllocationCountAggregateOutputType = {
    id: number
    licenseId: number
    poolId: number
    clientId: number
    employeeName: number
    employeeEmail: number
    employeeId: number
    department: number
    action: number
    allocatedAt: number
    allocatedById: number
    allocatedByName: number
    activatedAt: number
    revokedAt: number
    revokedById: number
    revokedByName: number
    revokeReason: number
    transferredFrom: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LicenseAllocationMinAggregateInputType = {
    id?: true
    licenseId?: true
    poolId?: true
    clientId?: true
    employeeName?: true
    employeeEmail?: true
    employeeId?: true
    department?: true
    action?: true
    allocatedAt?: true
    allocatedById?: true
    allocatedByName?: true
    activatedAt?: true
    revokedAt?: true
    revokedById?: true
    revokedByName?: true
    revokeReason?: true
    transferredFrom?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LicenseAllocationMaxAggregateInputType = {
    id?: true
    licenseId?: true
    poolId?: true
    clientId?: true
    employeeName?: true
    employeeEmail?: true
    employeeId?: true
    department?: true
    action?: true
    allocatedAt?: true
    allocatedById?: true
    allocatedByName?: true
    activatedAt?: true
    revokedAt?: true
    revokedById?: true
    revokedByName?: true
    revokeReason?: true
    transferredFrom?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LicenseAllocationCountAggregateInputType = {
    id?: true
    licenseId?: true
    poolId?: true
    clientId?: true
    employeeName?: true
    employeeEmail?: true
    employeeId?: true
    department?: true
    action?: true
    allocatedAt?: true
    allocatedById?: true
    allocatedByName?: true
    activatedAt?: true
    revokedAt?: true
    revokedById?: true
    revokedByName?: true
    revokeReason?: true
    transferredFrom?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LicenseAllocationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LicenseAllocation to aggregate.
     */
    where?: LicenseAllocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LicenseAllocations to fetch.
     */
    orderBy?: LicenseAllocationOrderByWithRelationInput | LicenseAllocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LicenseAllocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LicenseAllocations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LicenseAllocations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LicenseAllocations
    **/
    _count?: true | LicenseAllocationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LicenseAllocationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LicenseAllocationMaxAggregateInputType
  }

  export type GetLicenseAllocationAggregateType<T extends LicenseAllocationAggregateArgs> = {
        [P in keyof T & keyof AggregateLicenseAllocation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLicenseAllocation[P]>
      : GetScalarType<T[P], AggregateLicenseAllocation[P]>
  }




  export type LicenseAllocationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LicenseAllocationWhereInput
    orderBy?: LicenseAllocationOrderByWithAggregationInput | LicenseAllocationOrderByWithAggregationInput[]
    by: LicenseAllocationScalarFieldEnum[] | LicenseAllocationScalarFieldEnum
    having?: LicenseAllocationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LicenseAllocationCountAggregateInputType | true
    _min?: LicenseAllocationMinAggregateInputType
    _max?: LicenseAllocationMaxAggregateInputType
  }

  export type LicenseAllocationGroupByOutputType = {
    id: string
    licenseId: string | null
    poolId: string | null
    clientId: string
    employeeName: string
    employeeEmail: string
    employeeId: string | null
    department: string | null
    action: $Enums.AllocationAction
    allocatedAt: Date
    allocatedById: string | null
    allocatedByName: string | null
    activatedAt: Date | null
    revokedAt: Date | null
    revokedById: string | null
    revokedByName: string | null
    revokeReason: string | null
    transferredFrom: string | null
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: LicenseAllocationCountAggregateOutputType | null
    _min: LicenseAllocationMinAggregateOutputType | null
    _max: LicenseAllocationMaxAggregateOutputType | null
  }

  type GetLicenseAllocationGroupByPayload<T extends LicenseAllocationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LicenseAllocationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LicenseAllocationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LicenseAllocationGroupByOutputType[P]>
            : GetScalarType<T[P], LicenseAllocationGroupByOutputType[P]>
        }
      >
    >


  export type LicenseAllocationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    licenseId?: boolean
    poolId?: boolean
    clientId?: boolean
    employeeName?: boolean
    employeeEmail?: boolean
    employeeId?: boolean
    department?: boolean
    action?: boolean
    allocatedAt?: boolean
    allocatedById?: boolean
    allocatedByName?: boolean
    activatedAt?: boolean
    revokedAt?: boolean
    revokedById?: boolean
    revokedByName?: boolean
    revokeReason?: boolean
    transferredFrom?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    license?: boolean | LicenseAllocation$licenseArgs<ExtArgs>
    pool?: boolean | LicenseAllocation$poolArgs<ExtArgs>
  }, ExtArgs["result"]["licenseAllocation"]>

  export type LicenseAllocationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    licenseId?: boolean
    poolId?: boolean
    clientId?: boolean
    employeeName?: boolean
    employeeEmail?: boolean
    employeeId?: boolean
    department?: boolean
    action?: boolean
    allocatedAt?: boolean
    allocatedById?: boolean
    allocatedByName?: boolean
    activatedAt?: boolean
    revokedAt?: boolean
    revokedById?: boolean
    revokedByName?: boolean
    revokeReason?: boolean
    transferredFrom?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    license?: boolean | LicenseAllocation$licenseArgs<ExtArgs>
    pool?: boolean | LicenseAllocation$poolArgs<ExtArgs>
  }, ExtArgs["result"]["licenseAllocation"]>

  export type LicenseAllocationSelectScalar = {
    id?: boolean
    licenseId?: boolean
    poolId?: boolean
    clientId?: boolean
    employeeName?: boolean
    employeeEmail?: boolean
    employeeId?: boolean
    department?: boolean
    action?: boolean
    allocatedAt?: boolean
    allocatedById?: boolean
    allocatedByName?: boolean
    activatedAt?: boolean
    revokedAt?: boolean
    revokedById?: boolean
    revokedByName?: boolean
    revokeReason?: boolean
    transferredFrom?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type LicenseAllocationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    license?: boolean | LicenseAllocation$licenseArgs<ExtArgs>
    pool?: boolean | LicenseAllocation$poolArgs<ExtArgs>
  }
  export type LicenseAllocationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    license?: boolean | LicenseAllocation$licenseArgs<ExtArgs>
    pool?: boolean | LicenseAllocation$poolArgs<ExtArgs>
  }

  export type $LicenseAllocationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LicenseAllocation"
    objects: {
      license: Prisma.$LicensePayload<ExtArgs> | null
      pool: Prisma.$LicensePoolPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      licenseId: string | null
      poolId: string | null
      clientId: string
      employeeName: string
      employeeEmail: string
      employeeId: string | null
      department: string | null
      action: $Enums.AllocationAction
      allocatedAt: Date
      allocatedById: string | null
      allocatedByName: string | null
      activatedAt: Date | null
      revokedAt: Date | null
      revokedById: string | null
      revokedByName: string | null
      revokeReason: string | null
      transferredFrom: string | null
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["licenseAllocation"]>
    composites: {}
  }

  type LicenseAllocationGetPayload<S extends boolean | null | undefined | LicenseAllocationDefaultArgs> = $Result.GetResult<Prisma.$LicenseAllocationPayload, S>

  type LicenseAllocationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<LicenseAllocationFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: LicenseAllocationCountAggregateInputType | true
    }

  export interface LicenseAllocationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LicenseAllocation'], meta: { name: 'LicenseAllocation' } }
    /**
     * Find zero or one LicenseAllocation that matches the filter.
     * @param {LicenseAllocationFindUniqueArgs} args - Arguments to find a LicenseAllocation
     * @example
     * // Get one LicenseAllocation
     * const licenseAllocation = await prisma.licenseAllocation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LicenseAllocationFindUniqueArgs>(args: SelectSubset<T, LicenseAllocationFindUniqueArgs<ExtArgs>>): Prisma__LicenseAllocationClient<$Result.GetResult<Prisma.$LicenseAllocationPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one LicenseAllocation that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {LicenseAllocationFindUniqueOrThrowArgs} args - Arguments to find a LicenseAllocation
     * @example
     * // Get one LicenseAllocation
     * const licenseAllocation = await prisma.licenseAllocation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LicenseAllocationFindUniqueOrThrowArgs>(args: SelectSubset<T, LicenseAllocationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LicenseAllocationClient<$Result.GetResult<Prisma.$LicenseAllocationPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first LicenseAllocation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicenseAllocationFindFirstArgs} args - Arguments to find a LicenseAllocation
     * @example
     * // Get one LicenseAllocation
     * const licenseAllocation = await prisma.licenseAllocation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LicenseAllocationFindFirstArgs>(args?: SelectSubset<T, LicenseAllocationFindFirstArgs<ExtArgs>>): Prisma__LicenseAllocationClient<$Result.GetResult<Prisma.$LicenseAllocationPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first LicenseAllocation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicenseAllocationFindFirstOrThrowArgs} args - Arguments to find a LicenseAllocation
     * @example
     * // Get one LicenseAllocation
     * const licenseAllocation = await prisma.licenseAllocation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LicenseAllocationFindFirstOrThrowArgs>(args?: SelectSubset<T, LicenseAllocationFindFirstOrThrowArgs<ExtArgs>>): Prisma__LicenseAllocationClient<$Result.GetResult<Prisma.$LicenseAllocationPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more LicenseAllocations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicenseAllocationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LicenseAllocations
     * const licenseAllocations = await prisma.licenseAllocation.findMany()
     * 
     * // Get first 10 LicenseAllocations
     * const licenseAllocations = await prisma.licenseAllocation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const licenseAllocationWithIdOnly = await prisma.licenseAllocation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LicenseAllocationFindManyArgs>(args?: SelectSubset<T, LicenseAllocationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LicenseAllocationPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a LicenseAllocation.
     * @param {LicenseAllocationCreateArgs} args - Arguments to create a LicenseAllocation.
     * @example
     * // Create one LicenseAllocation
     * const LicenseAllocation = await prisma.licenseAllocation.create({
     *   data: {
     *     // ... data to create a LicenseAllocation
     *   }
     * })
     * 
     */
    create<T extends LicenseAllocationCreateArgs>(args: SelectSubset<T, LicenseAllocationCreateArgs<ExtArgs>>): Prisma__LicenseAllocationClient<$Result.GetResult<Prisma.$LicenseAllocationPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many LicenseAllocations.
     * @param {LicenseAllocationCreateManyArgs} args - Arguments to create many LicenseAllocations.
     * @example
     * // Create many LicenseAllocations
     * const licenseAllocation = await prisma.licenseAllocation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LicenseAllocationCreateManyArgs>(args?: SelectSubset<T, LicenseAllocationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LicenseAllocations and returns the data saved in the database.
     * @param {LicenseAllocationCreateManyAndReturnArgs} args - Arguments to create many LicenseAllocations.
     * @example
     * // Create many LicenseAllocations
     * const licenseAllocation = await prisma.licenseAllocation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LicenseAllocations and only return the `id`
     * const licenseAllocationWithIdOnly = await prisma.licenseAllocation.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LicenseAllocationCreateManyAndReturnArgs>(args?: SelectSubset<T, LicenseAllocationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LicenseAllocationPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a LicenseAllocation.
     * @param {LicenseAllocationDeleteArgs} args - Arguments to delete one LicenseAllocation.
     * @example
     * // Delete one LicenseAllocation
     * const LicenseAllocation = await prisma.licenseAllocation.delete({
     *   where: {
     *     // ... filter to delete one LicenseAllocation
     *   }
     * })
     * 
     */
    delete<T extends LicenseAllocationDeleteArgs>(args: SelectSubset<T, LicenseAllocationDeleteArgs<ExtArgs>>): Prisma__LicenseAllocationClient<$Result.GetResult<Prisma.$LicenseAllocationPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one LicenseAllocation.
     * @param {LicenseAllocationUpdateArgs} args - Arguments to update one LicenseAllocation.
     * @example
     * // Update one LicenseAllocation
     * const licenseAllocation = await prisma.licenseAllocation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LicenseAllocationUpdateArgs>(args: SelectSubset<T, LicenseAllocationUpdateArgs<ExtArgs>>): Prisma__LicenseAllocationClient<$Result.GetResult<Prisma.$LicenseAllocationPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more LicenseAllocations.
     * @param {LicenseAllocationDeleteManyArgs} args - Arguments to filter LicenseAllocations to delete.
     * @example
     * // Delete a few LicenseAllocations
     * const { count } = await prisma.licenseAllocation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LicenseAllocationDeleteManyArgs>(args?: SelectSubset<T, LicenseAllocationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LicenseAllocations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicenseAllocationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LicenseAllocations
     * const licenseAllocation = await prisma.licenseAllocation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LicenseAllocationUpdateManyArgs>(args: SelectSubset<T, LicenseAllocationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one LicenseAllocation.
     * @param {LicenseAllocationUpsertArgs} args - Arguments to update or create a LicenseAllocation.
     * @example
     * // Update or create a LicenseAllocation
     * const licenseAllocation = await prisma.licenseAllocation.upsert({
     *   create: {
     *     // ... data to create a LicenseAllocation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LicenseAllocation we want to update
     *   }
     * })
     */
    upsert<T extends LicenseAllocationUpsertArgs>(args: SelectSubset<T, LicenseAllocationUpsertArgs<ExtArgs>>): Prisma__LicenseAllocationClient<$Result.GetResult<Prisma.$LicenseAllocationPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of LicenseAllocations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicenseAllocationCountArgs} args - Arguments to filter LicenseAllocations to count.
     * @example
     * // Count the number of LicenseAllocations
     * const count = await prisma.licenseAllocation.count({
     *   where: {
     *     // ... the filter for the LicenseAllocations we want to count
     *   }
     * })
    **/
    count<T extends LicenseAllocationCountArgs>(
      args?: Subset<T, LicenseAllocationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LicenseAllocationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LicenseAllocation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicenseAllocationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LicenseAllocationAggregateArgs>(args: Subset<T, LicenseAllocationAggregateArgs>): Prisma.PrismaPromise<GetLicenseAllocationAggregateType<T>>

    /**
     * Group by LicenseAllocation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicenseAllocationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LicenseAllocationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LicenseAllocationGroupByArgs['orderBy'] }
        : { orderBy?: LicenseAllocationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LicenseAllocationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLicenseAllocationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LicenseAllocation model
   */
  readonly fields: LicenseAllocationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LicenseAllocation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LicenseAllocationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    license<T extends LicenseAllocation$licenseArgs<ExtArgs> = {}>(args?: Subset<T, LicenseAllocation$licenseArgs<ExtArgs>>): Prisma__LicenseClient<$Result.GetResult<Prisma.$LicensePayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    pool<T extends LicenseAllocation$poolArgs<ExtArgs> = {}>(args?: Subset<T, LicenseAllocation$poolArgs<ExtArgs>>): Prisma__LicensePoolClient<$Result.GetResult<Prisma.$LicensePoolPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the LicenseAllocation model
   */ 
  interface LicenseAllocationFieldRefs {
    readonly id: FieldRef<"LicenseAllocation", 'String'>
    readonly licenseId: FieldRef<"LicenseAllocation", 'String'>
    readonly poolId: FieldRef<"LicenseAllocation", 'String'>
    readonly clientId: FieldRef<"LicenseAllocation", 'String'>
    readonly employeeName: FieldRef<"LicenseAllocation", 'String'>
    readonly employeeEmail: FieldRef<"LicenseAllocation", 'String'>
    readonly employeeId: FieldRef<"LicenseAllocation", 'String'>
    readonly department: FieldRef<"LicenseAllocation", 'String'>
    readonly action: FieldRef<"LicenseAllocation", 'AllocationAction'>
    readonly allocatedAt: FieldRef<"LicenseAllocation", 'DateTime'>
    readonly allocatedById: FieldRef<"LicenseAllocation", 'String'>
    readonly allocatedByName: FieldRef<"LicenseAllocation", 'String'>
    readonly activatedAt: FieldRef<"LicenseAllocation", 'DateTime'>
    readonly revokedAt: FieldRef<"LicenseAllocation", 'DateTime'>
    readonly revokedById: FieldRef<"LicenseAllocation", 'String'>
    readonly revokedByName: FieldRef<"LicenseAllocation", 'String'>
    readonly revokeReason: FieldRef<"LicenseAllocation", 'String'>
    readonly transferredFrom: FieldRef<"LicenseAllocation", 'String'>
    readonly isActive: FieldRef<"LicenseAllocation", 'Boolean'>
    readonly createdAt: FieldRef<"LicenseAllocation", 'DateTime'>
    readonly updatedAt: FieldRef<"LicenseAllocation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LicenseAllocation findUnique
   */
  export type LicenseAllocationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LicenseAllocation
     */
    select?: LicenseAllocationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseAllocationInclude<ExtArgs> | null
    /**
     * Filter, which LicenseAllocation to fetch.
     */
    where: LicenseAllocationWhereUniqueInput
  }

  /**
   * LicenseAllocation findUniqueOrThrow
   */
  export type LicenseAllocationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LicenseAllocation
     */
    select?: LicenseAllocationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseAllocationInclude<ExtArgs> | null
    /**
     * Filter, which LicenseAllocation to fetch.
     */
    where: LicenseAllocationWhereUniqueInput
  }

  /**
   * LicenseAllocation findFirst
   */
  export type LicenseAllocationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LicenseAllocation
     */
    select?: LicenseAllocationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseAllocationInclude<ExtArgs> | null
    /**
     * Filter, which LicenseAllocation to fetch.
     */
    where?: LicenseAllocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LicenseAllocations to fetch.
     */
    orderBy?: LicenseAllocationOrderByWithRelationInput | LicenseAllocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LicenseAllocations.
     */
    cursor?: LicenseAllocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LicenseAllocations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LicenseAllocations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LicenseAllocations.
     */
    distinct?: LicenseAllocationScalarFieldEnum | LicenseAllocationScalarFieldEnum[]
  }

  /**
   * LicenseAllocation findFirstOrThrow
   */
  export type LicenseAllocationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LicenseAllocation
     */
    select?: LicenseAllocationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseAllocationInclude<ExtArgs> | null
    /**
     * Filter, which LicenseAllocation to fetch.
     */
    where?: LicenseAllocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LicenseAllocations to fetch.
     */
    orderBy?: LicenseAllocationOrderByWithRelationInput | LicenseAllocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LicenseAllocations.
     */
    cursor?: LicenseAllocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LicenseAllocations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LicenseAllocations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LicenseAllocations.
     */
    distinct?: LicenseAllocationScalarFieldEnum | LicenseAllocationScalarFieldEnum[]
  }

  /**
   * LicenseAllocation findMany
   */
  export type LicenseAllocationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LicenseAllocation
     */
    select?: LicenseAllocationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseAllocationInclude<ExtArgs> | null
    /**
     * Filter, which LicenseAllocations to fetch.
     */
    where?: LicenseAllocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LicenseAllocations to fetch.
     */
    orderBy?: LicenseAllocationOrderByWithRelationInput | LicenseAllocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LicenseAllocations.
     */
    cursor?: LicenseAllocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LicenseAllocations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LicenseAllocations.
     */
    skip?: number
    distinct?: LicenseAllocationScalarFieldEnum | LicenseAllocationScalarFieldEnum[]
  }

  /**
   * LicenseAllocation create
   */
  export type LicenseAllocationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LicenseAllocation
     */
    select?: LicenseAllocationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseAllocationInclude<ExtArgs> | null
    /**
     * The data needed to create a LicenseAllocation.
     */
    data: XOR<LicenseAllocationCreateInput, LicenseAllocationUncheckedCreateInput>
  }

  /**
   * LicenseAllocation createMany
   */
  export type LicenseAllocationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LicenseAllocations.
     */
    data: LicenseAllocationCreateManyInput | LicenseAllocationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LicenseAllocation createManyAndReturn
   */
  export type LicenseAllocationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LicenseAllocation
     */
    select?: LicenseAllocationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many LicenseAllocations.
     */
    data: LicenseAllocationCreateManyInput | LicenseAllocationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseAllocationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LicenseAllocation update
   */
  export type LicenseAllocationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LicenseAllocation
     */
    select?: LicenseAllocationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseAllocationInclude<ExtArgs> | null
    /**
     * The data needed to update a LicenseAllocation.
     */
    data: XOR<LicenseAllocationUpdateInput, LicenseAllocationUncheckedUpdateInput>
    /**
     * Choose, which LicenseAllocation to update.
     */
    where: LicenseAllocationWhereUniqueInput
  }

  /**
   * LicenseAllocation updateMany
   */
  export type LicenseAllocationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LicenseAllocations.
     */
    data: XOR<LicenseAllocationUpdateManyMutationInput, LicenseAllocationUncheckedUpdateManyInput>
    /**
     * Filter which LicenseAllocations to update
     */
    where?: LicenseAllocationWhereInput
  }

  /**
   * LicenseAllocation upsert
   */
  export type LicenseAllocationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LicenseAllocation
     */
    select?: LicenseAllocationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseAllocationInclude<ExtArgs> | null
    /**
     * The filter to search for the LicenseAllocation to update in case it exists.
     */
    where: LicenseAllocationWhereUniqueInput
    /**
     * In case the LicenseAllocation found by the `where` argument doesn't exist, create a new LicenseAllocation with this data.
     */
    create: XOR<LicenseAllocationCreateInput, LicenseAllocationUncheckedCreateInput>
    /**
     * In case the LicenseAllocation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LicenseAllocationUpdateInput, LicenseAllocationUncheckedUpdateInput>
  }

  /**
   * LicenseAllocation delete
   */
  export type LicenseAllocationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LicenseAllocation
     */
    select?: LicenseAllocationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseAllocationInclude<ExtArgs> | null
    /**
     * Filter which LicenseAllocation to delete.
     */
    where: LicenseAllocationWhereUniqueInput
  }

  /**
   * LicenseAllocation deleteMany
   */
  export type LicenseAllocationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LicenseAllocations to delete
     */
    where?: LicenseAllocationWhereInput
  }

  /**
   * LicenseAllocation.license
   */
  export type LicenseAllocation$licenseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the License
     */
    select?: LicenseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseInclude<ExtArgs> | null
    where?: LicenseWhereInput
  }

  /**
   * LicenseAllocation.pool
   */
  export type LicenseAllocation$poolArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LicensePool
     */
    select?: LicensePoolSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicensePoolInclude<ExtArgs> | null
    where?: LicensePoolWhereInput
  }

  /**
   * LicenseAllocation without action
   */
  export type LicenseAllocationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LicenseAllocation
     */
    select?: LicenseAllocationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseAllocationInclude<ExtArgs> | null
  }


  /**
   * Model LicenseActivationLog
   */

  export type AggregateLicenseActivationLog = {
    _count: LicenseActivationLogCountAggregateOutputType | null
    _min: LicenseActivationLogMinAggregateOutputType | null
    _max: LicenseActivationLogMaxAggregateOutputType | null
  }

  export type LicenseActivationLogMinAggregateOutputType = {
    id: string | null
    licenseId: string | null
    action: string | null
    deviceId: string | null
    deviceType: string | null
    deviceName: string | null
    macAddress: string | null
    ipAddress: string | null
    userAgent: string | null
    location: string | null
    success: boolean | null
    errorMessage: string | null
    performedBy: string | null
    performedByName: string | null
    timestamp: Date | null
  }

  export type LicenseActivationLogMaxAggregateOutputType = {
    id: string | null
    licenseId: string | null
    action: string | null
    deviceId: string | null
    deviceType: string | null
    deviceName: string | null
    macAddress: string | null
    ipAddress: string | null
    userAgent: string | null
    location: string | null
    success: boolean | null
    errorMessage: string | null
    performedBy: string | null
    performedByName: string | null
    timestamp: Date | null
  }

  export type LicenseActivationLogCountAggregateOutputType = {
    id: number
    licenseId: number
    action: number
    deviceId: number
    deviceType: number
    deviceName: number
    macAddress: number
    ipAddress: number
    userAgent: number
    location: number
    success: number
    errorMessage: number
    performedBy: number
    performedByName: number
    timestamp: number
    _all: number
  }


  export type LicenseActivationLogMinAggregateInputType = {
    id?: true
    licenseId?: true
    action?: true
    deviceId?: true
    deviceType?: true
    deviceName?: true
    macAddress?: true
    ipAddress?: true
    userAgent?: true
    location?: true
    success?: true
    errorMessage?: true
    performedBy?: true
    performedByName?: true
    timestamp?: true
  }

  export type LicenseActivationLogMaxAggregateInputType = {
    id?: true
    licenseId?: true
    action?: true
    deviceId?: true
    deviceType?: true
    deviceName?: true
    macAddress?: true
    ipAddress?: true
    userAgent?: true
    location?: true
    success?: true
    errorMessage?: true
    performedBy?: true
    performedByName?: true
    timestamp?: true
  }

  export type LicenseActivationLogCountAggregateInputType = {
    id?: true
    licenseId?: true
    action?: true
    deviceId?: true
    deviceType?: true
    deviceName?: true
    macAddress?: true
    ipAddress?: true
    userAgent?: true
    location?: true
    success?: true
    errorMessage?: true
    performedBy?: true
    performedByName?: true
    timestamp?: true
    _all?: true
  }

  export type LicenseActivationLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LicenseActivationLog to aggregate.
     */
    where?: LicenseActivationLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LicenseActivationLogs to fetch.
     */
    orderBy?: LicenseActivationLogOrderByWithRelationInput | LicenseActivationLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LicenseActivationLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LicenseActivationLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LicenseActivationLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LicenseActivationLogs
    **/
    _count?: true | LicenseActivationLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LicenseActivationLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LicenseActivationLogMaxAggregateInputType
  }

  export type GetLicenseActivationLogAggregateType<T extends LicenseActivationLogAggregateArgs> = {
        [P in keyof T & keyof AggregateLicenseActivationLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLicenseActivationLog[P]>
      : GetScalarType<T[P], AggregateLicenseActivationLog[P]>
  }




  export type LicenseActivationLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LicenseActivationLogWhereInput
    orderBy?: LicenseActivationLogOrderByWithAggregationInput | LicenseActivationLogOrderByWithAggregationInput[]
    by: LicenseActivationLogScalarFieldEnum[] | LicenseActivationLogScalarFieldEnum
    having?: LicenseActivationLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LicenseActivationLogCountAggregateInputType | true
    _min?: LicenseActivationLogMinAggregateInputType
    _max?: LicenseActivationLogMaxAggregateInputType
  }

  export type LicenseActivationLogGroupByOutputType = {
    id: string
    licenseId: string
    action: string
    deviceId: string | null
    deviceType: string | null
    deviceName: string | null
    macAddress: string | null
    ipAddress: string | null
    userAgent: string | null
    location: string | null
    success: boolean
    errorMessage: string | null
    performedBy: string | null
    performedByName: string | null
    timestamp: Date
    _count: LicenseActivationLogCountAggregateOutputType | null
    _min: LicenseActivationLogMinAggregateOutputType | null
    _max: LicenseActivationLogMaxAggregateOutputType | null
  }

  type GetLicenseActivationLogGroupByPayload<T extends LicenseActivationLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LicenseActivationLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LicenseActivationLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LicenseActivationLogGroupByOutputType[P]>
            : GetScalarType<T[P], LicenseActivationLogGroupByOutputType[P]>
        }
      >
    >


  export type LicenseActivationLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    licenseId?: boolean
    action?: boolean
    deviceId?: boolean
    deviceType?: boolean
    deviceName?: boolean
    macAddress?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    location?: boolean
    success?: boolean
    errorMessage?: boolean
    performedBy?: boolean
    performedByName?: boolean
    timestamp?: boolean
    license?: boolean | LicenseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["licenseActivationLog"]>

  export type LicenseActivationLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    licenseId?: boolean
    action?: boolean
    deviceId?: boolean
    deviceType?: boolean
    deviceName?: boolean
    macAddress?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    location?: boolean
    success?: boolean
    errorMessage?: boolean
    performedBy?: boolean
    performedByName?: boolean
    timestamp?: boolean
    license?: boolean | LicenseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["licenseActivationLog"]>

  export type LicenseActivationLogSelectScalar = {
    id?: boolean
    licenseId?: boolean
    action?: boolean
    deviceId?: boolean
    deviceType?: boolean
    deviceName?: boolean
    macAddress?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    location?: boolean
    success?: boolean
    errorMessage?: boolean
    performedBy?: boolean
    performedByName?: boolean
    timestamp?: boolean
  }

  export type LicenseActivationLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    license?: boolean | LicenseDefaultArgs<ExtArgs>
  }
  export type LicenseActivationLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    license?: boolean | LicenseDefaultArgs<ExtArgs>
  }

  export type $LicenseActivationLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LicenseActivationLog"
    objects: {
      license: Prisma.$LicensePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      licenseId: string
      action: string
      deviceId: string | null
      deviceType: string | null
      deviceName: string | null
      macAddress: string | null
      ipAddress: string | null
      userAgent: string | null
      location: string | null
      success: boolean
      errorMessage: string | null
      performedBy: string | null
      performedByName: string | null
      timestamp: Date
    }, ExtArgs["result"]["licenseActivationLog"]>
    composites: {}
  }

  type LicenseActivationLogGetPayload<S extends boolean | null | undefined | LicenseActivationLogDefaultArgs> = $Result.GetResult<Prisma.$LicenseActivationLogPayload, S>

  type LicenseActivationLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<LicenseActivationLogFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: LicenseActivationLogCountAggregateInputType | true
    }

  export interface LicenseActivationLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LicenseActivationLog'], meta: { name: 'LicenseActivationLog' } }
    /**
     * Find zero or one LicenseActivationLog that matches the filter.
     * @param {LicenseActivationLogFindUniqueArgs} args - Arguments to find a LicenseActivationLog
     * @example
     * // Get one LicenseActivationLog
     * const licenseActivationLog = await prisma.licenseActivationLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LicenseActivationLogFindUniqueArgs>(args: SelectSubset<T, LicenseActivationLogFindUniqueArgs<ExtArgs>>): Prisma__LicenseActivationLogClient<$Result.GetResult<Prisma.$LicenseActivationLogPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one LicenseActivationLog that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {LicenseActivationLogFindUniqueOrThrowArgs} args - Arguments to find a LicenseActivationLog
     * @example
     * // Get one LicenseActivationLog
     * const licenseActivationLog = await prisma.licenseActivationLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LicenseActivationLogFindUniqueOrThrowArgs>(args: SelectSubset<T, LicenseActivationLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LicenseActivationLogClient<$Result.GetResult<Prisma.$LicenseActivationLogPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first LicenseActivationLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicenseActivationLogFindFirstArgs} args - Arguments to find a LicenseActivationLog
     * @example
     * // Get one LicenseActivationLog
     * const licenseActivationLog = await prisma.licenseActivationLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LicenseActivationLogFindFirstArgs>(args?: SelectSubset<T, LicenseActivationLogFindFirstArgs<ExtArgs>>): Prisma__LicenseActivationLogClient<$Result.GetResult<Prisma.$LicenseActivationLogPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first LicenseActivationLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicenseActivationLogFindFirstOrThrowArgs} args - Arguments to find a LicenseActivationLog
     * @example
     * // Get one LicenseActivationLog
     * const licenseActivationLog = await prisma.licenseActivationLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LicenseActivationLogFindFirstOrThrowArgs>(args?: SelectSubset<T, LicenseActivationLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__LicenseActivationLogClient<$Result.GetResult<Prisma.$LicenseActivationLogPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more LicenseActivationLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicenseActivationLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LicenseActivationLogs
     * const licenseActivationLogs = await prisma.licenseActivationLog.findMany()
     * 
     * // Get first 10 LicenseActivationLogs
     * const licenseActivationLogs = await prisma.licenseActivationLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const licenseActivationLogWithIdOnly = await prisma.licenseActivationLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LicenseActivationLogFindManyArgs>(args?: SelectSubset<T, LicenseActivationLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LicenseActivationLogPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a LicenseActivationLog.
     * @param {LicenseActivationLogCreateArgs} args - Arguments to create a LicenseActivationLog.
     * @example
     * // Create one LicenseActivationLog
     * const LicenseActivationLog = await prisma.licenseActivationLog.create({
     *   data: {
     *     // ... data to create a LicenseActivationLog
     *   }
     * })
     * 
     */
    create<T extends LicenseActivationLogCreateArgs>(args: SelectSubset<T, LicenseActivationLogCreateArgs<ExtArgs>>): Prisma__LicenseActivationLogClient<$Result.GetResult<Prisma.$LicenseActivationLogPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many LicenseActivationLogs.
     * @param {LicenseActivationLogCreateManyArgs} args - Arguments to create many LicenseActivationLogs.
     * @example
     * // Create many LicenseActivationLogs
     * const licenseActivationLog = await prisma.licenseActivationLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LicenseActivationLogCreateManyArgs>(args?: SelectSubset<T, LicenseActivationLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LicenseActivationLogs and returns the data saved in the database.
     * @param {LicenseActivationLogCreateManyAndReturnArgs} args - Arguments to create many LicenseActivationLogs.
     * @example
     * // Create many LicenseActivationLogs
     * const licenseActivationLog = await prisma.licenseActivationLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LicenseActivationLogs and only return the `id`
     * const licenseActivationLogWithIdOnly = await prisma.licenseActivationLog.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LicenseActivationLogCreateManyAndReturnArgs>(args?: SelectSubset<T, LicenseActivationLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LicenseActivationLogPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a LicenseActivationLog.
     * @param {LicenseActivationLogDeleteArgs} args - Arguments to delete one LicenseActivationLog.
     * @example
     * // Delete one LicenseActivationLog
     * const LicenseActivationLog = await prisma.licenseActivationLog.delete({
     *   where: {
     *     // ... filter to delete one LicenseActivationLog
     *   }
     * })
     * 
     */
    delete<T extends LicenseActivationLogDeleteArgs>(args: SelectSubset<T, LicenseActivationLogDeleteArgs<ExtArgs>>): Prisma__LicenseActivationLogClient<$Result.GetResult<Prisma.$LicenseActivationLogPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one LicenseActivationLog.
     * @param {LicenseActivationLogUpdateArgs} args - Arguments to update one LicenseActivationLog.
     * @example
     * // Update one LicenseActivationLog
     * const licenseActivationLog = await prisma.licenseActivationLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LicenseActivationLogUpdateArgs>(args: SelectSubset<T, LicenseActivationLogUpdateArgs<ExtArgs>>): Prisma__LicenseActivationLogClient<$Result.GetResult<Prisma.$LicenseActivationLogPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more LicenseActivationLogs.
     * @param {LicenseActivationLogDeleteManyArgs} args - Arguments to filter LicenseActivationLogs to delete.
     * @example
     * // Delete a few LicenseActivationLogs
     * const { count } = await prisma.licenseActivationLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LicenseActivationLogDeleteManyArgs>(args?: SelectSubset<T, LicenseActivationLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LicenseActivationLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicenseActivationLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LicenseActivationLogs
     * const licenseActivationLog = await prisma.licenseActivationLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LicenseActivationLogUpdateManyArgs>(args: SelectSubset<T, LicenseActivationLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one LicenseActivationLog.
     * @param {LicenseActivationLogUpsertArgs} args - Arguments to update or create a LicenseActivationLog.
     * @example
     * // Update or create a LicenseActivationLog
     * const licenseActivationLog = await prisma.licenseActivationLog.upsert({
     *   create: {
     *     // ... data to create a LicenseActivationLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LicenseActivationLog we want to update
     *   }
     * })
     */
    upsert<T extends LicenseActivationLogUpsertArgs>(args: SelectSubset<T, LicenseActivationLogUpsertArgs<ExtArgs>>): Prisma__LicenseActivationLogClient<$Result.GetResult<Prisma.$LicenseActivationLogPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of LicenseActivationLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicenseActivationLogCountArgs} args - Arguments to filter LicenseActivationLogs to count.
     * @example
     * // Count the number of LicenseActivationLogs
     * const count = await prisma.licenseActivationLog.count({
     *   where: {
     *     // ... the filter for the LicenseActivationLogs we want to count
     *   }
     * })
    **/
    count<T extends LicenseActivationLogCountArgs>(
      args?: Subset<T, LicenseActivationLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LicenseActivationLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LicenseActivationLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicenseActivationLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LicenseActivationLogAggregateArgs>(args: Subset<T, LicenseActivationLogAggregateArgs>): Prisma.PrismaPromise<GetLicenseActivationLogAggregateType<T>>

    /**
     * Group by LicenseActivationLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicenseActivationLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LicenseActivationLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LicenseActivationLogGroupByArgs['orderBy'] }
        : { orderBy?: LicenseActivationLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LicenseActivationLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLicenseActivationLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LicenseActivationLog model
   */
  readonly fields: LicenseActivationLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LicenseActivationLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LicenseActivationLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    license<T extends LicenseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LicenseDefaultArgs<ExtArgs>>): Prisma__LicenseClient<$Result.GetResult<Prisma.$LicensePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the LicenseActivationLog model
   */ 
  interface LicenseActivationLogFieldRefs {
    readonly id: FieldRef<"LicenseActivationLog", 'String'>
    readonly licenseId: FieldRef<"LicenseActivationLog", 'String'>
    readonly action: FieldRef<"LicenseActivationLog", 'String'>
    readonly deviceId: FieldRef<"LicenseActivationLog", 'String'>
    readonly deviceType: FieldRef<"LicenseActivationLog", 'String'>
    readonly deviceName: FieldRef<"LicenseActivationLog", 'String'>
    readonly macAddress: FieldRef<"LicenseActivationLog", 'String'>
    readonly ipAddress: FieldRef<"LicenseActivationLog", 'String'>
    readonly userAgent: FieldRef<"LicenseActivationLog", 'String'>
    readonly location: FieldRef<"LicenseActivationLog", 'String'>
    readonly success: FieldRef<"LicenseActivationLog", 'Boolean'>
    readonly errorMessage: FieldRef<"LicenseActivationLog", 'String'>
    readonly performedBy: FieldRef<"LicenseActivationLog", 'String'>
    readonly performedByName: FieldRef<"LicenseActivationLog", 'String'>
    readonly timestamp: FieldRef<"LicenseActivationLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LicenseActivationLog findUnique
   */
  export type LicenseActivationLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LicenseActivationLog
     */
    select?: LicenseActivationLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseActivationLogInclude<ExtArgs> | null
    /**
     * Filter, which LicenseActivationLog to fetch.
     */
    where: LicenseActivationLogWhereUniqueInput
  }

  /**
   * LicenseActivationLog findUniqueOrThrow
   */
  export type LicenseActivationLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LicenseActivationLog
     */
    select?: LicenseActivationLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseActivationLogInclude<ExtArgs> | null
    /**
     * Filter, which LicenseActivationLog to fetch.
     */
    where: LicenseActivationLogWhereUniqueInput
  }

  /**
   * LicenseActivationLog findFirst
   */
  export type LicenseActivationLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LicenseActivationLog
     */
    select?: LicenseActivationLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseActivationLogInclude<ExtArgs> | null
    /**
     * Filter, which LicenseActivationLog to fetch.
     */
    where?: LicenseActivationLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LicenseActivationLogs to fetch.
     */
    orderBy?: LicenseActivationLogOrderByWithRelationInput | LicenseActivationLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LicenseActivationLogs.
     */
    cursor?: LicenseActivationLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LicenseActivationLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LicenseActivationLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LicenseActivationLogs.
     */
    distinct?: LicenseActivationLogScalarFieldEnum | LicenseActivationLogScalarFieldEnum[]
  }

  /**
   * LicenseActivationLog findFirstOrThrow
   */
  export type LicenseActivationLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LicenseActivationLog
     */
    select?: LicenseActivationLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseActivationLogInclude<ExtArgs> | null
    /**
     * Filter, which LicenseActivationLog to fetch.
     */
    where?: LicenseActivationLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LicenseActivationLogs to fetch.
     */
    orderBy?: LicenseActivationLogOrderByWithRelationInput | LicenseActivationLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LicenseActivationLogs.
     */
    cursor?: LicenseActivationLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LicenseActivationLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LicenseActivationLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LicenseActivationLogs.
     */
    distinct?: LicenseActivationLogScalarFieldEnum | LicenseActivationLogScalarFieldEnum[]
  }

  /**
   * LicenseActivationLog findMany
   */
  export type LicenseActivationLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LicenseActivationLog
     */
    select?: LicenseActivationLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseActivationLogInclude<ExtArgs> | null
    /**
     * Filter, which LicenseActivationLogs to fetch.
     */
    where?: LicenseActivationLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LicenseActivationLogs to fetch.
     */
    orderBy?: LicenseActivationLogOrderByWithRelationInput | LicenseActivationLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LicenseActivationLogs.
     */
    cursor?: LicenseActivationLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LicenseActivationLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LicenseActivationLogs.
     */
    skip?: number
    distinct?: LicenseActivationLogScalarFieldEnum | LicenseActivationLogScalarFieldEnum[]
  }

  /**
   * LicenseActivationLog create
   */
  export type LicenseActivationLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LicenseActivationLog
     */
    select?: LicenseActivationLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseActivationLogInclude<ExtArgs> | null
    /**
     * The data needed to create a LicenseActivationLog.
     */
    data: XOR<LicenseActivationLogCreateInput, LicenseActivationLogUncheckedCreateInput>
  }

  /**
   * LicenseActivationLog createMany
   */
  export type LicenseActivationLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LicenseActivationLogs.
     */
    data: LicenseActivationLogCreateManyInput | LicenseActivationLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LicenseActivationLog createManyAndReturn
   */
  export type LicenseActivationLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LicenseActivationLog
     */
    select?: LicenseActivationLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many LicenseActivationLogs.
     */
    data: LicenseActivationLogCreateManyInput | LicenseActivationLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseActivationLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LicenseActivationLog update
   */
  export type LicenseActivationLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LicenseActivationLog
     */
    select?: LicenseActivationLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseActivationLogInclude<ExtArgs> | null
    /**
     * The data needed to update a LicenseActivationLog.
     */
    data: XOR<LicenseActivationLogUpdateInput, LicenseActivationLogUncheckedUpdateInput>
    /**
     * Choose, which LicenseActivationLog to update.
     */
    where: LicenseActivationLogWhereUniqueInput
  }

  /**
   * LicenseActivationLog updateMany
   */
  export type LicenseActivationLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LicenseActivationLogs.
     */
    data: XOR<LicenseActivationLogUpdateManyMutationInput, LicenseActivationLogUncheckedUpdateManyInput>
    /**
     * Filter which LicenseActivationLogs to update
     */
    where?: LicenseActivationLogWhereInput
  }

  /**
   * LicenseActivationLog upsert
   */
  export type LicenseActivationLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LicenseActivationLog
     */
    select?: LicenseActivationLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseActivationLogInclude<ExtArgs> | null
    /**
     * The filter to search for the LicenseActivationLog to update in case it exists.
     */
    where: LicenseActivationLogWhereUniqueInput
    /**
     * In case the LicenseActivationLog found by the `where` argument doesn't exist, create a new LicenseActivationLog with this data.
     */
    create: XOR<LicenseActivationLogCreateInput, LicenseActivationLogUncheckedCreateInput>
    /**
     * In case the LicenseActivationLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LicenseActivationLogUpdateInput, LicenseActivationLogUncheckedUpdateInput>
  }

  /**
   * LicenseActivationLog delete
   */
  export type LicenseActivationLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LicenseActivationLog
     */
    select?: LicenseActivationLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseActivationLogInclude<ExtArgs> | null
    /**
     * Filter which LicenseActivationLog to delete.
     */
    where: LicenseActivationLogWhereUniqueInput
  }

  /**
   * LicenseActivationLog deleteMany
   */
  export type LicenseActivationLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LicenseActivationLogs to delete
     */
    where?: LicenseActivationLogWhereInput
  }

  /**
   * LicenseActivationLog without action
   */
  export type LicenseActivationLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LicenseActivationLog
     */
    select?: LicenseActivationLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseActivationLogInclude<ExtArgs> | null
  }


  /**
   * Model LicenseUsageStats
   */

  export type AggregateLicenseUsageStats = {
    _count: LicenseUsageStatsCountAggregateOutputType | null
    _avg: LicenseUsageStatsAvgAggregateOutputType | null
    _sum: LicenseUsageStatsSumAggregateOutputType | null
    _min: LicenseUsageStatsMinAggregateOutputType | null
    _max: LicenseUsageStatsMaxAggregateOutputType | null
  }

  export type LicenseUsageStatsAvgAggregateOutputType = {
    activeUsers: number | null
    totalSessions: number | null
    totalDuration: number | null
    peakConcurrent: number | null
  }

  export type LicenseUsageStatsSumAggregateOutputType = {
    activeUsers: number | null
    totalSessions: number | null
    totalDuration: number | null
    peakConcurrent: number | null
  }

  export type LicenseUsageStatsMinAggregateOutputType = {
    id: string | null
    licenseId: string | null
    poolId: string | null
    clientId: string | null
    productId: string | null
    periodStart: Date | null
    periodEnd: Date | null
    periodType: string | null
    activeUsers: number | null
    totalSessions: number | null
    totalDuration: number | null
    peakConcurrent: number | null
    createdAt: Date | null
  }

  export type LicenseUsageStatsMaxAggregateOutputType = {
    id: string | null
    licenseId: string | null
    poolId: string | null
    clientId: string | null
    productId: string | null
    periodStart: Date | null
    periodEnd: Date | null
    periodType: string | null
    activeUsers: number | null
    totalSessions: number | null
    totalDuration: number | null
    peakConcurrent: number | null
    createdAt: Date | null
  }

  export type LicenseUsageStatsCountAggregateOutputType = {
    id: number
    licenseId: number
    poolId: number
    clientId: number
    productId: number
    periodStart: number
    periodEnd: number
    periodType: number
    activeUsers: number
    totalSessions: number
    totalDuration: number
    peakConcurrent: number
    featureUsage: number
    createdAt: number
    _all: number
  }


  export type LicenseUsageStatsAvgAggregateInputType = {
    activeUsers?: true
    totalSessions?: true
    totalDuration?: true
    peakConcurrent?: true
  }

  export type LicenseUsageStatsSumAggregateInputType = {
    activeUsers?: true
    totalSessions?: true
    totalDuration?: true
    peakConcurrent?: true
  }

  export type LicenseUsageStatsMinAggregateInputType = {
    id?: true
    licenseId?: true
    poolId?: true
    clientId?: true
    productId?: true
    periodStart?: true
    periodEnd?: true
    periodType?: true
    activeUsers?: true
    totalSessions?: true
    totalDuration?: true
    peakConcurrent?: true
    createdAt?: true
  }

  export type LicenseUsageStatsMaxAggregateInputType = {
    id?: true
    licenseId?: true
    poolId?: true
    clientId?: true
    productId?: true
    periodStart?: true
    periodEnd?: true
    periodType?: true
    activeUsers?: true
    totalSessions?: true
    totalDuration?: true
    peakConcurrent?: true
    createdAt?: true
  }

  export type LicenseUsageStatsCountAggregateInputType = {
    id?: true
    licenseId?: true
    poolId?: true
    clientId?: true
    productId?: true
    periodStart?: true
    periodEnd?: true
    periodType?: true
    activeUsers?: true
    totalSessions?: true
    totalDuration?: true
    peakConcurrent?: true
    featureUsage?: true
    createdAt?: true
    _all?: true
  }

  export type LicenseUsageStatsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LicenseUsageStats to aggregate.
     */
    where?: LicenseUsageStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LicenseUsageStats to fetch.
     */
    orderBy?: LicenseUsageStatsOrderByWithRelationInput | LicenseUsageStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LicenseUsageStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LicenseUsageStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LicenseUsageStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LicenseUsageStats
    **/
    _count?: true | LicenseUsageStatsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LicenseUsageStatsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LicenseUsageStatsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LicenseUsageStatsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LicenseUsageStatsMaxAggregateInputType
  }

  export type GetLicenseUsageStatsAggregateType<T extends LicenseUsageStatsAggregateArgs> = {
        [P in keyof T & keyof AggregateLicenseUsageStats]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLicenseUsageStats[P]>
      : GetScalarType<T[P], AggregateLicenseUsageStats[P]>
  }




  export type LicenseUsageStatsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LicenseUsageStatsWhereInput
    orderBy?: LicenseUsageStatsOrderByWithAggregationInput | LicenseUsageStatsOrderByWithAggregationInput[]
    by: LicenseUsageStatsScalarFieldEnum[] | LicenseUsageStatsScalarFieldEnum
    having?: LicenseUsageStatsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LicenseUsageStatsCountAggregateInputType | true
    _avg?: LicenseUsageStatsAvgAggregateInputType
    _sum?: LicenseUsageStatsSumAggregateInputType
    _min?: LicenseUsageStatsMinAggregateInputType
    _max?: LicenseUsageStatsMaxAggregateInputType
  }

  export type LicenseUsageStatsGroupByOutputType = {
    id: string
    licenseId: string | null
    poolId: string | null
    clientId: string
    productId: string
    periodStart: Date
    periodEnd: Date
    periodType: string
    activeUsers: number
    totalSessions: number
    totalDuration: number
    peakConcurrent: number
    featureUsage: JsonValue | null
    createdAt: Date
    _count: LicenseUsageStatsCountAggregateOutputType | null
    _avg: LicenseUsageStatsAvgAggregateOutputType | null
    _sum: LicenseUsageStatsSumAggregateOutputType | null
    _min: LicenseUsageStatsMinAggregateOutputType | null
    _max: LicenseUsageStatsMaxAggregateOutputType | null
  }

  type GetLicenseUsageStatsGroupByPayload<T extends LicenseUsageStatsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LicenseUsageStatsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LicenseUsageStatsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LicenseUsageStatsGroupByOutputType[P]>
            : GetScalarType<T[P], LicenseUsageStatsGroupByOutputType[P]>
        }
      >
    >


  export type LicenseUsageStatsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    licenseId?: boolean
    poolId?: boolean
    clientId?: boolean
    productId?: boolean
    periodStart?: boolean
    periodEnd?: boolean
    periodType?: boolean
    activeUsers?: boolean
    totalSessions?: boolean
    totalDuration?: boolean
    peakConcurrent?: boolean
    featureUsage?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["licenseUsageStats"]>

  export type LicenseUsageStatsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    licenseId?: boolean
    poolId?: boolean
    clientId?: boolean
    productId?: boolean
    periodStart?: boolean
    periodEnd?: boolean
    periodType?: boolean
    activeUsers?: boolean
    totalSessions?: boolean
    totalDuration?: boolean
    peakConcurrent?: boolean
    featureUsage?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["licenseUsageStats"]>

  export type LicenseUsageStatsSelectScalar = {
    id?: boolean
    licenseId?: boolean
    poolId?: boolean
    clientId?: boolean
    productId?: boolean
    periodStart?: boolean
    periodEnd?: boolean
    periodType?: boolean
    activeUsers?: boolean
    totalSessions?: boolean
    totalDuration?: boolean
    peakConcurrent?: boolean
    featureUsage?: boolean
    createdAt?: boolean
  }


  export type $LicenseUsageStatsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LicenseUsageStats"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      licenseId: string | null
      poolId: string | null
      clientId: string
      productId: string
      periodStart: Date
      periodEnd: Date
      periodType: string
      activeUsers: number
      totalSessions: number
      totalDuration: number
      peakConcurrent: number
      featureUsage: Prisma.JsonValue | null
      createdAt: Date
    }, ExtArgs["result"]["licenseUsageStats"]>
    composites: {}
  }

  type LicenseUsageStatsGetPayload<S extends boolean | null | undefined | LicenseUsageStatsDefaultArgs> = $Result.GetResult<Prisma.$LicenseUsageStatsPayload, S>

  type LicenseUsageStatsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<LicenseUsageStatsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: LicenseUsageStatsCountAggregateInputType | true
    }

  export interface LicenseUsageStatsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LicenseUsageStats'], meta: { name: 'LicenseUsageStats' } }
    /**
     * Find zero or one LicenseUsageStats that matches the filter.
     * @param {LicenseUsageStatsFindUniqueArgs} args - Arguments to find a LicenseUsageStats
     * @example
     * // Get one LicenseUsageStats
     * const licenseUsageStats = await prisma.licenseUsageStats.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LicenseUsageStatsFindUniqueArgs>(args: SelectSubset<T, LicenseUsageStatsFindUniqueArgs<ExtArgs>>): Prisma__LicenseUsageStatsClient<$Result.GetResult<Prisma.$LicenseUsageStatsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one LicenseUsageStats that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {LicenseUsageStatsFindUniqueOrThrowArgs} args - Arguments to find a LicenseUsageStats
     * @example
     * // Get one LicenseUsageStats
     * const licenseUsageStats = await prisma.licenseUsageStats.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LicenseUsageStatsFindUniqueOrThrowArgs>(args: SelectSubset<T, LicenseUsageStatsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LicenseUsageStatsClient<$Result.GetResult<Prisma.$LicenseUsageStatsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first LicenseUsageStats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicenseUsageStatsFindFirstArgs} args - Arguments to find a LicenseUsageStats
     * @example
     * // Get one LicenseUsageStats
     * const licenseUsageStats = await prisma.licenseUsageStats.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LicenseUsageStatsFindFirstArgs>(args?: SelectSubset<T, LicenseUsageStatsFindFirstArgs<ExtArgs>>): Prisma__LicenseUsageStatsClient<$Result.GetResult<Prisma.$LicenseUsageStatsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first LicenseUsageStats that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicenseUsageStatsFindFirstOrThrowArgs} args - Arguments to find a LicenseUsageStats
     * @example
     * // Get one LicenseUsageStats
     * const licenseUsageStats = await prisma.licenseUsageStats.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LicenseUsageStatsFindFirstOrThrowArgs>(args?: SelectSubset<T, LicenseUsageStatsFindFirstOrThrowArgs<ExtArgs>>): Prisma__LicenseUsageStatsClient<$Result.GetResult<Prisma.$LicenseUsageStatsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more LicenseUsageStats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicenseUsageStatsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LicenseUsageStats
     * const licenseUsageStats = await prisma.licenseUsageStats.findMany()
     * 
     * // Get first 10 LicenseUsageStats
     * const licenseUsageStats = await prisma.licenseUsageStats.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const licenseUsageStatsWithIdOnly = await prisma.licenseUsageStats.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LicenseUsageStatsFindManyArgs>(args?: SelectSubset<T, LicenseUsageStatsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LicenseUsageStatsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a LicenseUsageStats.
     * @param {LicenseUsageStatsCreateArgs} args - Arguments to create a LicenseUsageStats.
     * @example
     * // Create one LicenseUsageStats
     * const LicenseUsageStats = await prisma.licenseUsageStats.create({
     *   data: {
     *     // ... data to create a LicenseUsageStats
     *   }
     * })
     * 
     */
    create<T extends LicenseUsageStatsCreateArgs>(args: SelectSubset<T, LicenseUsageStatsCreateArgs<ExtArgs>>): Prisma__LicenseUsageStatsClient<$Result.GetResult<Prisma.$LicenseUsageStatsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many LicenseUsageStats.
     * @param {LicenseUsageStatsCreateManyArgs} args - Arguments to create many LicenseUsageStats.
     * @example
     * // Create many LicenseUsageStats
     * const licenseUsageStats = await prisma.licenseUsageStats.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LicenseUsageStatsCreateManyArgs>(args?: SelectSubset<T, LicenseUsageStatsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LicenseUsageStats and returns the data saved in the database.
     * @param {LicenseUsageStatsCreateManyAndReturnArgs} args - Arguments to create many LicenseUsageStats.
     * @example
     * // Create many LicenseUsageStats
     * const licenseUsageStats = await prisma.licenseUsageStats.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LicenseUsageStats and only return the `id`
     * const licenseUsageStatsWithIdOnly = await prisma.licenseUsageStats.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LicenseUsageStatsCreateManyAndReturnArgs>(args?: SelectSubset<T, LicenseUsageStatsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LicenseUsageStatsPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a LicenseUsageStats.
     * @param {LicenseUsageStatsDeleteArgs} args - Arguments to delete one LicenseUsageStats.
     * @example
     * // Delete one LicenseUsageStats
     * const LicenseUsageStats = await prisma.licenseUsageStats.delete({
     *   where: {
     *     // ... filter to delete one LicenseUsageStats
     *   }
     * })
     * 
     */
    delete<T extends LicenseUsageStatsDeleteArgs>(args: SelectSubset<T, LicenseUsageStatsDeleteArgs<ExtArgs>>): Prisma__LicenseUsageStatsClient<$Result.GetResult<Prisma.$LicenseUsageStatsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one LicenseUsageStats.
     * @param {LicenseUsageStatsUpdateArgs} args - Arguments to update one LicenseUsageStats.
     * @example
     * // Update one LicenseUsageStats
     * const licenseUsageStats = await prisma.licenseUsageStats.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LicenseUsageStatsUpdateArgs>(args: SelectSubset<T, LicenseUsageStatsUpdateArgs<ExtArgs>>): Prisma__LicenseUsageStatsClient<$Result.GetResult<Prisma.$LicenseUsageStatsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more LicenseUsageStats.
     * @param {LicenseUsageStatsDeleteManyArgs} args - Arguments to filter LicenseUsageStats to delete.
     * @example
     * // Delete a few LicenseUsageStats
     * const { count } = await prisma.licenseUsageStats.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LicenseUsageStatsDeleteManyArgs>(args?: SelectSubset<T, LicenseUsageStatsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LicenseUsageStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicenseUsageStatsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LicenseUsageStats
     * const licenseUsageStats = await prisma.licenseUsageStats.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LicenseUsageStatsUpdateManyArgs>(args: SelectSubset<T, LicenseUsageStatsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one LicenseUsageStats.
     * @param {LicenseUsageStatsUpsertArgs} args - Arguments to update or create a LicenseUsageStats.
     * @example
     * // Update or create a LicenseUsageStats
     * const licenseUsageStats = await prisma.licenseUsageStats.upsert({
     *   create: {
     *     // ... data to create a LicenseUsageStats
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LicenseUsageStats we want to update
     *   }
     * })
     */
    upsert<T extends LicenseUsageStatsUpsertArgs>(args: SelectSubset<T, LicenseUsageStatsUpsertArgs<ExtArgs>>): Prisma__LicenseUsageStatsClient<$Result.GetResult<Prisma.$LicenseUsageStatsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of LicenseUsageStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicenseUsageStatsCountArgs} args - Arguments to filter LicenseUsageStats to count.
     * @example
     * // Count the number of LicenseUsageStats
     * const count = await prisma.licenseUsageStats.count({
     *   where: {
     *     // ... the filter for the LicenseUsageStats we want to count
     *   }
     * })
    **/
    count<T extends LicenseUsageStatsCountArgs>(
      args?: Subset<T, LicenseUsageStatsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LicenseUsageStatsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LicenseUsageStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicenseUsageStatsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LicenseUsageStatsAggregateArgs>(args: Subset<T, LicenseUsageStatsAggregateArgs>): Prisma.PrismaPromise<GetLicenseUsageStatsAggregateType<T>>

    /**
     * Group by LicenseUsageStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicenseUsageStatsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LicenseUsageStatsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LicenseUsageStatsGroupByArgs['orderBy'] }
        : { orderBy?: LicenseUsageStatsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LicenseUsageStatsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLicenseUsageStatsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LicenseUsageStats model
   */
  readonly fields: LicenseUsageStatsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LicenseUsageStats.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LicenseUsageStatsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the LicenseUsageStats model
   */ 
  interface LicenseUsageStatsFieldRefs {
    readonly id: FieldRef<"LicenseUsageStats", 'String'>
    readonly licenseId: FieldRef<"LicenseUsageStats", 'String'>
    readonly poolId: FieldRef<"LicenseUsageStats", 'String'>
    readonly clientId: FieldRef<"LicenseUsageStats", 'String'>
    readonly productId: FieldRef<"LicenseUsageStats", 'String'>
    readonly periodStart: FieldRef<"LicenseUsageStats", 'DateTime'>
    readonly periodEnd: FieldRef<"LicenseUsageStats", 'DateTime'>
    readonly periodType: FieldRef<"LicenseUsageStats", 'String'>
    readonly activeUsers: FieldRef<"LicenseUsageStats", 'Int'>
    readonly totalSessions: FieldRef<"LicenseUsageStats", 'Int'>
    readonly totalDuration: FieldRef<"LicenseUsageStats", 'Int'>
    readonly peakConcurrent: FieldRef<"LicenseUsageStats", 'Int'>
    readonly featureUsage: FieldRef<"LicenseUsageStats", 'Json'>
    readonly createdAt: FieldRef<"LicenseUsageStats", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LicenseUsageStats findUnique
   */
  export type LicenseUsageStatsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LicenseUsageStats
     */
    select?: LicenseUsageStatsSelect<ExtArgs> | null
    /**
     * Filter, which LicenseUsageStats to fetch.
     */
    where: LicenseUsageStatsWhereUniqueInput
  }

  /**
   * LicenseUsageStats findUniqueOrThrow
   */
  export type LicenseUsageStatsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LicenseUsageStats
     */
    select?: LicenseUsageStatsSelect<ExtArgs> | null
    /**
     * Filter, which LicenseUsageStats to fetch.
     */
    where: LicenseUsageStatsWhereUniqueInput
  }

  /**
   * LicenseUsageStats findFirst
   */
  export type LicenseUsageStatsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LicenseUsageStats
     */
    select?: LicenseUsageStatsSelect<ExtArgs> | null
    /**
     * Filter, which LicenseUsageStats to fetch.
     */
    where?: LicenseUsageStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LicenseUsageStats to fetch.
     */
    orderBy?: LicenseUsageStatsOrderByWithRelationInput | LicenseUsageStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LicenseUsageStats.
     */
    cursor?: LicenseUsageStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LicenseUsageStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LicenseUsageStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LicenseUsageStats.
     */
    distinct?: LicenseUsageStatsScalarFieldEnum | LicenseUsageStatsScalarFieldEnum[]
  }

  /**
   * LicenseUsageStats findFirstOrThrow
   */
  export type LicenseUsageStatsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LicenseUsageStats
     */
    select?: LicenseUsageStatsSelect<ExtArgs> | null
    /**
     * Filter, which LicenseUsageStats to fetch.
     */
    where?: LicenseUsageStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LicenseUsageStats to fetch.
     */
    orderBy?: LicenseUsageStatsOrderByWithRelationInput | LicenseUsageStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LicenseUsageStats.
     */
    cursor?: LicenseUsageStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LicenseUsageStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LicenseUsageStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LicenseUsageStats.
     */
    distinct?: LicenseUsageStatsScalarFieldEnum | LicenseUsageStatsScalarFieldEnum[]
  }

  /**
   * LicenseUsageStats findMany
   */
  export type LicenseUsageStatsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LicenseUsageStats
     */
    select?: LicenseUsageStatsSelect<ExtArgs> | null
    /**
     * Filter, which LicenseUsageStats to fetch.
     */
    where?: LicenseUsageStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LicenseUsageStats to fetch.
     */
    orderBy?: LicenseUsageStatsOrderByWithRelationInput | LicenseUsageStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LicenseUsageStats.
     */
    cursor?: LicenseUsageStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LicenseUsageStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LicenseUsageStats.
     */
    skip?: number
    distinct?: LicenseUsageStatsScalarFieldEnum | LicenseUsageStatsScalarFieldEnum[]
  }

  /**
   * LicenseUsageStats create
   */
  export type LicenseUsageStatsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LicenseUsageStats
     */
    select?: LicenseUsageStatsSelect<ExtArgs> | null
    /**
     * The data needed to create a LicenseUsageStats.
     */
    data: XOR<LicenseUsageStatsCreateInput, LicenseUsageStatsUncheckedCreateInput>
  }

  /**
   * LicenseUsageStats createMany
   */
  export type LicenseUsageStatsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LicenseUsageStats.
     */
    data: LicenseUsageStatsCreateManyInput | LicenseUsageStatsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LicenseUsageStats createManyAndReturn
   */
  export type LicenseUsageStatsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LicenseUsageStats
     */
    select?: LicenseUsageStatsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many LicenseUsageStats.
     */
    data: LicenseUsageStatsCreateManyInput | LicenseUsageStatsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LicenseUsageStats update
   */
  export type LicenseUsageStatsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LicenseUsageStats
     */
    select?: LicenseUsageStatsSelect<ExtArgs> | null
    /**
     * The data needed to update a LicenseUsageStats.
     */
    data: XOR<LicenseUsageStatsUpdateInput, LicenseUsageStatsUncheckedUpdateInput>
    /**
     * Choose, which LicenseUsageStats to update.
     */
    where: LicenseUsageStatsWhereUniqueInput
  }

  /**
   * LicenseUsageStats updateMany
   */
  export type LicenseUsageStatsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LicenseUsageStats.
     */
    data: XOR<LicenseUsageStatsUpdateManyMutationInput, LicenseUsageStatsUncheckedUpdateManyInput>
    /**
     * Filter which LicenseUsageStats to update
     */
    where?: LicenseUsageStatsWhereInput
  }

  /**
   * LicenseUsageStats upsert
   */
  export type LicenseUsageStatsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LicenseUsageStats
     */
    select?: LicenseUsageStatsSelect<ExtArgs> | null
    /**
     * The filter to search for the LicenseUsageStats to update in case it exists.
     */
    where: LicenseUsageStatsWhereUniqueInput
    /**
     * In case the LicenseUsageStats found by the `where` argument doesn't exist, create a new LicenseUsageStats with this data.
     */
    create: XOR<LicenseUsageStatsCreateInput, LicenseUsageStatsUncheckedCreateInput>
    /**
     * In case the LicenseUsageStats was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LicenseUsageStatsUpdateInput, LicenseUsageStatsUncheckedUpdateInput>
  }

  /**
   * LicenseUsageStats delete
   */
  export type LicenseUsageStatsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LicenseUsageStats
     */
    select?: LicenseUsageStatsSelect<ExtArgs> | null
    /**
     * Filter which LicenseUsageStats to delete.
     */
    where: LicenseUsageStatsWhereUniqueInput
  }

  /**
   * LicenseUsageStats deleteMany
   */
  export type LicenseUsageStatsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LicenseUsageStats to delete
     */
    where?: LicenseUsageStatsWhereInput
  }

  /**
   * LicenseUsageStats without action
   */
  export type LicenseUsageStatsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LicenseUsageStats
     */
    select?: LicenseUsageStatsSelect<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const LicensePoolScalarFieldEnum: {
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

  export type LicensePoolScalarFieldEnum = (typeof LicensePoolScalarFieldEnum)[keyof typeof LicensePoolScalarFieldEnum]


  export const LicenseScalarFieldEnum: {
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

  export type LicenseScalarFieldEnum = (typeof LicenseScalarFieldEnum)[keyof typeof LicenseScalarFieldEnum]


  export const LicenseDeviceScalarFieldEnum: {
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

  export type LicenseDeviceScalarFieldEnum = (typeof LicenseDeviceScalarFieldEnum)[keyof typeof LicenseDeviceScalarFieldEnum]


  export const LicenseSessionScalarFieldEnum: {
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

  export type LicenseSessionScalarFieldEnum = (typeof LicenseSessionScalarFieldEnum)[keyof typeof LicenseSessionScalarFieldEnum]


  export const LicenseAllocationScalarFieldEnum: {
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

  export type LicenseAllocationScalarFieldEnum = (typeof LicenseAllocationScalarFieldEnum)[keyof typeof LicenseAllocationScalarFieldEnum]


  export const LicenseActivationLogScalarFieldEnum: {
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

  export type LicenseActivationLogScalarFieldEnum = (typeof LicenseActivationLogScalarFieldEnum)[keyof typeof LicenseActivationLogScalarFieldEnum]


  export const LicenseUsageStatsScalarFieldEnum: {
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

  export type LicenseUsageStatsScalarFieldEnum = (typeof LicenseUsageStatsScalarFieldEnum)[keyof typeof LicenseUsageStatsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'PoolStatus'
   */
  export type EnumPoolStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PoolStatus'>
    


  /**
   * Reference to a field of type 'PoolStatus[]'
   */
  export type ListEnumPoolStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PoolStatus[]'>
    


  /**
   * Reference to a field of type 'LicenseStatus'
   */
  export type EnumLicenseStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LicenseStatus'>
    


  /**
   * Reference to a field of type 'LicenseStatus[]'
   */
  export type ListEnumLicenseStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LicenseStatus[]'>
    


  /**
   * Reference to a field of type 'DeviceType'
   */
  export type EnumDeviceTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DeviceType'>
    


  /**
   * Reference to a field of type 'DeviceType[]'
   */
  export type ListEnumDeviceTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DeviceType[]'>
    


  /**
   * Reference to a field of type 'DeviceStatus'
   */
  export type EnumDeviceStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DeviceStatus'>
    


  /**
   * Reference to a field of type 'DeviceStatus[]'
   */
  export type ListEnumDeviceStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DeviceStatus[]'>
    


  /**
   * Reference to a field of type 'AllocationAction'
   */
  export type EnumAllocationActionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AllocationAction'>
    


  /**
   * Reference to a field of type 'AllocationAction[]'
   */
  export type ListEnumAllocationActionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AllocationAction[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type LicensePoolWhereInput = {
    AND?: LicensePoolWhereInput | LicensePoolWhereInput[]
    OR?: LicensePoolWhereInput[]
    NOT?: LicensePoolWhereInput | LicensePoolWhereInput[]
    id?: StringFilter<"LicensePool"> | string
    clientId?: StringFilter<"LicensePool"> | string
    clientName?: StringFilter<"LicensePool"> | string
    clientEmail?: StringNullableFilter<"LicensePool"> | string | null
    subscriptionId?: StringFilter<"LicensePool"> | string
    productId?: StringFilter<"LicensePool"> | string
    productName?: StringFilter<"LicensePool"> | string
    productCode?: StringFilter<"LicensePool"> | string
    licenseTypeId?: StringFilter<"LicensePool"> | string
    licenseTypeName?: StringFilter<"LicensePool"> | string
    totalSeats?: IntFilter<"LicensePool"> | number
    allocatedSeats?: IntFilter<"LicensePool"> | number
    availableSeats?: IntFilter<"LicensePool"> | number
    poolKey?: StringFilter<"LicensePool"> | string
    poolKeyHash?: StringFilter<"LicensePool"> | string
    activationDate?: DateTimeNullableFilter<"LicensePool"> | Date | string | null
    expirationDate?: DateTimeFilter<"LicensePool"> | Date | string
    gracePeriodDays?: IntFilter<"LicensePool"> | number
    features?: StringNullableListFilter<"LicensePool">
    selectedFeatures?: StringNullableListFilter<"LicensePool">
    billingCycle?: StringFilter<"LicensePool"> | string
    pricePerSeat?: DecimalNullableFilter<"LicensePool"> | Decimal | DecimalJsLike | number | string | null
    totalAmount?: DecimalNullableFilter<"LicensePool"> | Decimal | DecimalJsLike | number | string | null
    currency?: StringFilter<"LicensePool"> | string
    subscriptionStatus?: StringNullableFilter<"LicensePool"> | string | null
    paymentStatus?: StringNullableFilter<"LicensePool"> | string | null
    autoRenew?: BoolFilter<"LicensePool"> | boolean
    nextBillingDate?: DateTimeNullableFilter<"LicensePool"> | Date | string | null
    status?: EnumPoolStatusFilter<"LicensePool"> | $Enums.PoolStatus
    isActive?: BoolFilter<"LicensePool"> | boolean
    createdAt?: DateTimeFilter<"LicensePool"> | Date | string
    updatedAt?: DateTimeFilter<"LicensePool"> | Date | string
    licenses?: LicenseListRelationFilter
    allocations?: LicenseAllocationListRelationFilter
  }

  export type LicensePoolOrderByWithRelationInput = {
    id?: SortOrder
    clientId?: SortOrder
    clientName?: SortOrder
    clientEmail?: SortOrderInput | SortOrder
    subscriptionId?: SortOrder
    productId?: SortOrder
    productName?: SortOrder
    productCode?: SortOrder
    licenseTypeId?: SortOrder
    licenseTypeName?: SortOrder
    totalSeats?: SortOrder
    allocatedSeats?: SortOrder
    availableSeats?: SortOrder
    poolKey?: SortOrder
    poolKeyHash?: SortOrder
    activationDate?: SortOrderInput | SortOrder
    expirationDate?: SortOrder
    gracePeriodDays?: SortOrder
    features?: SortOrder
    selectedFeatures?: SortOrder
    billingCycle?: SortOrder
    pricePerSeat?: SortOrderInput | SortOrder
    totalAmount?: SortOrderInput | SortOrder
    currency?: SortOrder
    subscriptionStatus?: SortOrderInput | SortOrder
    paymentStatus?: SortOrderInput | SortOrder
    autoRenew?: SortOrder
    nextBillingDate?: SortOrderInput | SortOrder
    status?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    licenses?: LicenseOrderByRelationAggregateInput
    allocations?: LicenseAllocationOrderByRelationAggregateInput
  }

  export type LicensePoolWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    subscriptionId?: string
    poolKey?: string
    AND?: LicensePoolWhereInput | LicensePoolWhereInput[]
    OR?: LicensePoolWhereInput[]
    NOT?: LicensePoolWhereInput | LicensePoolWhereInput[]
    clientId?: StringFilter<"LicensePool"> | string
    clientName?: StringFilter<"LicensePool"> | string
    clientEmail?: StringNullableFilter<"LicensePool"> | string | null
    productId?: StringFilter<"LicensePool"> | string
    productName?: StringFilter<"LicensePool"> | string
    productCode?: StringFilter<"LicensePool"> | string
    licenseTypeId?: StringFilter<"LicensePool"> | string
    licenseTypeName?: StringFilter<"LicensePool"> | string
    totalSeats?: IntFilter<"LicensePool"> | number
    allocatedSeats?: IntFilter<"LicensePool"> | number
    availableSeats?: IntFilter<"LicensePool"> | number
    poolKeyHash?: StringFilter<"LicensePool"> | string
    activationDate?: DateTimeNullableFilter<"LicensePool"> | Date | string | null
    expirationDate?: DateTimeFilter<"LicensePool"> | Date | string
    gracePeriodDays?: IntFilter<"LicensePool"> | number
    features?: StringNullableListFilter<"LicensePool">
    selectedFeatures?: StringNullableListFilter<"LicensePool">
    billingCycle?: StringFilter<"LicensePool"> | string
    pricePerSeat?: DecimalNullableFilter<"LicensePool"> | Decimal | DecimalJsLike | number | string | null
    totalAmount?: DecimalNullableFilter<"LicensePool"> | Decimal | DecimalJsLike | number | string | null
    currency?: StringFilter<"LicensePool"> | string
    subscriptionStatus?: StringNullableFilter<"LicensePool"> | string | null
    paymentStatus?: StringNullableFilter<"LicensePool"> | string | null
    autoRenew?: BoolFilter<"LicensePool"> | boolean
    nextBillingDate?: DateTimeNullableFilter<"LicensePool"> | Date | string | null
    status?: EnumPoolStatusFilter<"LicensePool"> | $Enums.PoolStatus
    isActive?: BoolFilter<"LicensePool"> | boolean
    createdAt?: DateTimeFilter<"LicensePool"> | Date | string
    updatedAt?: DateTimeFilter<"LicensePool"> | Date | string
    licenses?: LicenseListRelationFilter
    allocations?: LicenseAllocationListRelationFilter
  }, "id" | "subscriptionId" | "poolKey">

  export type LicensePoolOrderByWithAggregationInput = {
    id?: SortOrder
    clientId?: SortOrder
    clientName?: SortOrder
    clientEmail?: SortOrderInput | SortOrder
    subscriptionId?: SortOrder
    productId?: SortOrder
    productName?: SortOrder
    productCode?: SortOrder
    licenseTypeId?: SortOrder
    licenseTypeName?: SortOrder
    totalSeats?: SortOrder
    allocatedSeats?: SortOrder
    availableSeats?: SortOrder
    poolKey?: SortOrder
    poolKeyHash?: SortOrder
    activationDate?: SortOrderInput | SortOrder
    expirationDate?: SortOrder
    gracePeriodDays?: SortOrder
    features?: SortOrder
    selectedFeatures?: SortOrder
    billingCycle?: SortOrder
    pricePerSeat?: SortOrderInput | SortOrder
    totalAmount?: SortOrderInput | SortOrder
    currency?: SortOrder
    subscriptionStatus?: SortOrderInput | SortOrder
    paymentStatus?: SortOrderInput | SortOrder
    autoRenew?: SortOrder
    nextBillingDate?: SortOrderInput | SortOrder
    status?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LicensePoolCountOrderByAggregateInput
    _avg?: LicensePoolAvgOrderByAggregateInput
    _max?: LicensePoolMaxOrderByAggregateInput
    _min?: LicensePoolMinOrderByAggregateInput
    _sum?: LicensePoolSumOrderByAggregateInput
  }

  export type LicensePoolScalarWhereWithAggregatesInput = {
    AND?: LicensePoolScalarWhereWithAggregatesInput | LicensePoolScalarWhereWithAggregatesInput[]
    OR?: LicensePoolScalarWhereWithAggregatesInput[]
    NOT?: LicensePoolScalarWhereWithAggregatesInput | LicensePoolScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LicensePool"> | string
    clientId?: StringWithAggregatesFilter<"LicensePool"> | string
    clientName?: StringWithAggregatesFilter<"LicensePool"> | string
    clientEmail?: StringNullableWithAggregatesFilter<"LicensePool"> | string | null
    subscriptionId?: StringWithAggregatesFilter<"LicensePool"> | string
    productId?: StringWithAggregatesFilter<"LicensePool"> | string
    productName?: StringWithAggregatesFilter<"LicensePool"> | string
    productCode?: StringWithAggregatesFilter<"LicensePool"> | string
    licenseTypeId?: StringWithAggregatesFilter<"LicensePool"> | string
    licenseTypeName?: StringWithAggregatesFilter<"LicensePool"> | string
    totalSeats?: IntWithAggregatesFilter<"LicensePool"> | number
    allocatedSeats?: IntWithAggregatesFilter<"LicensePool"> | number
    availableSeats?: IntWithAggregatesFilter<"LicensePool"> | number
    poolKey?: StringWithAggregatesFilter<"LicensePool"> | string
    poolKeyHash?: StringWithAggregatesFilter<"LicensePool"> | string
    activationDate?: DateTimeNullableWithAggregatesFilter<"LicensePool"> | Date | string | null
    expirationDate?: DateTimeWithAggregatesFilter<"LicensePool"> | Date | string
    gracePeriodDays?: IntWithAggregatesFilter<"LicensePool"> | number
    features?: StringNullableListFilter<"LicensePool">
    selectedFeatures?: StringNullableListFilter<"LicensePool">
    billingCycle?: StringWithAggregatesFilter<"LicensePool"> | string
    pricePerSeat?: DecimalNullableWithAggregatesFilter<"LicensePool"> | Decimal | DecimalJsLike | number | string | null
    totalAmount?: DecimalNullableWithAggregatesFilter<"LicensePool"> | Decimal | DecimalJsLike | number | string | null
    currency?: StringWithAggregatesFilter<"LicensePool"> | string
    subscriptionStatus?: StringNullableWithAggregatesFilter<"LicensePool"> | string | null
    paymentStatus?: StringNullableWithAggregatesFilter<"LicensePool"> | string | null
    autoRenew?: BoolWithAggregatesFilter<"LicensePool"> | boolean
    nextBillingDate?: DateTimeNullableWithAggregatesFilter<"LicensePool"> | Date | string | null
    status?: EnumPoolStatusWithAggregatesFilter<"LicensePool"> | $Enums.PoolStatus
    isActive?: BoolWithAggregatesFilter<"LicensePool"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"LicensePool"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"LicensePool"> | Date | string
  }

  export type LicenseWhereInput = {
    AND?: LicenseWhereInput | LicenseWhereInput[]
    OR?: LicenseWhereInput[]
    NOT?: LicenseWhereInput | LicenseWhereInput[]
    id?: StringFilter<"License"> | string
    licenseKey?: StringFilter<"License"> | string
    licenseKeyHash?: StringNullableFilter<"License"> | string | null
    clientId?: StringNullableFilter<"License"> | string | null
    clientName?: StringNullableFilter<"License"> | string | null
    productId?: StringFilter<"License"> | string
    productName?: StringFilter<"License"> | string
    productCode?: StringFilter<"License"> | string
    licenseTypeId?: StringNullableFilter<"License"> | string | null
    licenseTypeName?: StringNullableFilter<"License"> | string | null
    status?: EnumLicenseStatusFilter<"License"> | $Enums.LicenseStatus
    poolId?: StringNullableFilter<"License"> | string | null
    userName?: StringNullableFilter<"License"> | string | null
    userEmail?: StringNullableFilter<"License"> | string | null
    deviceLimit?: IntFilter<"License"> | number
    sessionLimit?: IntFilter<"License"> | number
    deviceCount?: IntFilter<"License"> | number
    currentSessions?: IntFilter<"License"> | number
    lastActive?: DateTimeNullableFilter<"License"> | Date | string | null
    activationDate?: DateTimeNullableFilter<"License"> | Date | string | null
    expirationDate?: DateTimeNullableFilter<"License"> | Date | string | null
    boundHardwareId?: StringNullableFilter<"License"> | string | null
    createdAt?: DateTimeFilter<"License"> | Date | string
    updatedAt?: DateTimeFilter<"License"> | Date | string
    pool?: XOR<LicensePoolNullableRelationFilter, LicensePoolWhereInput> | null
    devices?: LicenseDeviceListRelationFilter
    sessions?: LicenseSessionListRelationFilter
    allocations?: LicenseAllocationListRelationFilter
    activationLogs?: LicenseActivationLogListRelationFilter
  }

  export type LicenseOrderByWithRelationInput = {
    id?: SortOrder
    licenseKey?: SortOrder
    licenseKeyHash?: SortOrderInput | SortOrder
    clientId?: SortOrderInput | SortOrder
    clientName?: SortOrderInput | SortOrder
    productId?: SortOrder
    productName?: SortOrder
    productCode?: SortOrder
    licenseTypeId?: SortOrderInput | SortOrder
    licenseTypeName?: SortOrderInput | SortOrder
    status?: SortOrder
    poolId?: SortOrderInput | SortOrder
    userName?: SortOrderInput | SortOrder
    userEmail?: SortOrderInput | SortOrder
    deviceLimit?: SortOrder
    sessionLimit?: SortOrder
    deviceCount?: SortOrder
    currentSessions?: SortOrder
    lastActive?: SortOrderInput | SortOrder
    activationDate?: SortOrderInput | SortOrder
    expirationDate?: SortOrderInput | SortOrder
    boundHardwareId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    pool?: LicensePoolOrderByWithRelationInput
    devices?: LicenseDeviceOrderByRelationAggregateInput
    sessions?: LicenseSessionOrderByRelationAggregateInput
    allocations?: LicenseAllocationOrderByRelationAggregateInput
    activationLogs?: LicenseActivationLogOrderByRelationAggregateInput
  }

  export type LicenseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    licenseKey?: string
    AND?: LicenseWhereInput | LicenseWhereInput[]
    OR?: LicenseWhereInput[]
    NOT?: LicenseWhereInput | LicenseWhereInput[]
    licenseKeyHash?: StringNullableFilter<"License"> | string | null
    clientId?: StringNullableFilter<"License"> | string | null
    clientName?: StringNullableFilter<"License"> | string | null
    productId?: StringFilter<"License"> | string
    productName?: StringFilter<"License"> | string
    productCode?: StringFilter<"License"> | string
    licenseTypeId?: StringNullableFilter<"License"> | string | null
    licenseTypeName?: StringNullableFilter<"License"> | string | null
    status?: EnumLicenseStatusFilter<"License"> | $Enums.LicenseStatus
    poolId?: StringNullableFilter<"License"> | string | null
    userName?: StringNullableFilter<"License"> | string | null
    userEmail?: StringNullableFilter<"License"> | string | null
    deviceLimit?: IntFilter<"License"> | number
    sessionLimit?: IntFilter<"License"> | number
    deviceCount?: IntFilter<"License"> | number
    currentSessions?: IntFilter<"License"> | number
    lastActive?: DateTimeNullableFilter<"License"> | Date | string | null
    activationDate?: DateTimeNullableFilter<"License"> | Date | string | null
    expirationDate?: DateTimeNullableFilter<"License"> | Date | string | null
    boundHardwareId?: StringNullableFilter<"License"> | string | null
    createdAt?: DateTimeFilter<"License"> | Date | string
    updatedAt?: DateTimeFilter<"License"> | Date | string
    pool?: XOR<LicensePoolNullableRelationFilter, LicensePoolWhereInput> | null
    devices?: LicenseDeviceListRelationFilter
    sessions?: LicenseSessionListRelationFilter
    allocations?: LicenseAllocationListRelationFilter
    activationLogs?: LicenseActivationLogListRelationFilter
  }, "id" | "licenseKey">

  export type LicenseOrderByWithAggregationInput = {
    id?: SortOrder
    licenseKey?: SortOrder
    licenseKeyHash?: SortOrderInput | SortOrder
    clientId?: SortOrderInput | SortOrder
    clientName?: SortOrderInput | SortOrder
    productId?: SortOrder
    productName?: SortOrder
    productCode?: SortOrder
    licenseTypeId?: SortOrderInput | SortOrder
    licenseTypeName?: SortOrderInput | SortOrder
    status?: SortOrder
    poolId?: SortOrderInput | SortOrder
    userName?: SortOrderInput | SortOrder
    userEmail?: SortOrderInput | SortOrder
    deviceLimit?: SortOrder
    sessionLimit?: SortOrder
    deviceCount?: SortOrder
    currentSessions?: SortOrder
    lastActive?: SortOrderInput | SortOrder
    activationDate?: SortOrderInput | SortOrder
    expirationDate?: SortOrderInput | SortOrder
    boundHardwareId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LicenseCountOrderByAggregateInput
    _avg?: LicenseAvgOrderByAggregateInput
    _max?: LicenseMaxOrderByAggregateInput
    _min?: LicenseMinOrderByAggregateInput
    _sum?: LicenseSumOrderByAggregateInput
  }

  export type LicenseScalarWhereWithAggregatesInput = {
    AND?: LicenseScalarWhereWithAggregatesInput | LicenseScalarWhereWithAggregatesInput[]
    OR?: LicenseScalarWhereWithAggregatesInput[]
    NOT?: LicenseScalarWhereWithAggregatesInput | LicenseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"License"> | string
    licenseKey?: StringWithAggregatesFilter<"License"> | string
    licenseKeyHash?: StringNullableWithAggregatesFilter<"License"> | string | null
    clientId?: StringNullableWithAggregatesFilter<"License"> | string | null
    clientName?: StringNullableWithAggregatesFilter<"License"> | string | null
    productId?: StringWithAggregatesFilter<"License"> | string
    productName?: StringWithAggregatesFilter<"License"> | string
    productCode?: StringWithAggregatesFilter<"License"> | string
    licenseTypeId?: StringNullableWithAggregatesFilter<"License"> | string | null
    licenseTypeName?: StringNullableWithAggregatesFilter<"License"> | string | null
    status?: EnumLicenseStatusWithAggregatesFilter<"License"> | $Enums.LicenseStatus
    poolId?: StringNullableWithAggregatesFilter<"License"> | string | null
    userName?: StringNullableWithAggregatesFilter<"License"> | string | null
    userEmail?: StringNullableWithAggregatesFilter<"License"> | string | null
    deviceLimit?: IntWithAggregatesFilter<"License"> | number
    sessionLimit?: IntWithAggregatesFilter<"License"> | number
    deviceCount?: IntWithAggregatesFilter<"License"> | number
    currentSessions?: IntWithAggregatesFilter<"License"> | number
    lastActive?: DateTimeNullableWithAggregatesFilter<"License"> | Date | string | null
    activationDate?: DateTimeNullableWithAggregatesFilter<"License"> | Date | string | null
    expirationDate?: DateTimeNullableWithAggregatesFilter<"License"> | Date | string | null
    boundHardwareId?: StringNullableWithAggregatesFilter<"License"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"License"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"License"> | Date | string
  }

  export type LicenseDeviceWhereInput = {
    AND?: LicenseDeviceWhereInput | LicenseDeviceWhereInput[]
    OR?: LicenseDeviceWhereInput[]
    NOT?: LicenseDeviceWhereInput | LicenseDeviceWhereInput[]
    id?: StringFilter<"LicenseDevice"> | string
    licenseId?: StringFilter<"LicenseDevice"> | string
    macAddress?: StringFilter<"LicenseDevice"> | string
    ipAddress?: StringNullableFilter<"LicenseDevice"> | string | null
    hostname?: StringNullableFilter<"LicenseDevice"> | string | null
    location?: StringNullableFilter<"LicenseDevice"> | string | null
    deviceType?: EnumDeviceTypeFilter<"LicenseDevice"> | $Enums.DeviceType
    deviceName?: StringNullableFilter<"LicenseDevice"> | string | null
    osInfo?: StringNullableFilter<"LicenseDevice"> | string | null
    status?: EnumDeviceStatusFilter<"LicenseDevice"> | $Enums.DeviceStatus
    lastActive?: DateTimeFilter<"LicenseDevice"> | Date | string
    createdAt?: DateTimeFilter<"LicenseDevice"> | Date | string
    updatedAt?: DateTimeFilter<"LicenseDevice"> | Date | string
    license?: XOR<LicenseRelationFilter, LicenseWhereInput>
  }

  export type LicenseDeviceOrderByWithRelationInput = {
    id?: SortOrder
    licenseId?: SortOrder
    macAddress?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    hostname?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    deviceType?: SortOrder
    deviceName?: SortOrderInput | SortOrder
    osInfo?: SortOrderInput | SortOrder
    status?: SortOrder
    lastActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    license?: LicenseOrderByWithRelationInput
  }

  export type LicenseDeviceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    licenseId_macAddress?: LicenseDeviceLicenseIdMacAddressCompoundUniqueInput
    AND?: LicenseDeviceWhereInput | LicenseDeviceWhereInput[]
    OR?: LicenseDeviceWhereInput[]
    NOT?: LicenseDeviceWhereInput | LicenseDeviceWhereInput[]
    licenseId?: StringFilter<"LicenseDevice"> | string
    macAddress?: StringFilter<"LicenseDevice"> | string
    ipAddress?: StringNullableFilter<"LicenseDevice"> | string | null
    hostname?: StringNullableFilter<"LicenseDevice"> | string | null
    location?: StringNullableFilter<"LicenseDevice"> | string | null
    deviceType?: EnumDeviceTypeFilter<"LicenseDevice"> | $Enums.DeviceType
    deviceName?: StringNullableFilter<"LicenseDevice"> | string | null
    osInfo?: StringNullableFilter<"LicenseDevice"> | string | null
    status?: EnumDeviceStatusFilter<"LicenseDevice"> | $Enums.DeviceStatus
    lastActive?: DateTimeFilter<"LicenseDevice"> | Date | string
    createdAt?: DateTimeFilter<"LicenseDevice"> | Date | string
    updatedAt?: DateTimeFilter<"LicenseDevice"> | Date | string
    license?: XOR<LicenseRelationFilter, LicenseWhereInput>
  }, "id" | "licenseId_macAddress">

  export type LicenseDeviceOrderByWithAggregationInput = {
    id?: SortOrder
    licenseId?: SortOrder
    macAddress?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    hostname?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    deviceType?: SortOrder
    deviceName?: SortOrderInput | SortOrder
    osInfo?: SortOrderInput | SortOrder
    status?: SortOrder
    lastActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LicenseDeviceCountOrderByAggregateInput
    _max?: LicenseDeviceMaxOrderByAggregateInput
    _min?: LicenseDeviceMinOrderByAggregateInput
  }

  export type LicenseDeviceScalarWhereWithAggregatesInput = {
    AND?: LicenseDeviceScalarWhereWithAggregatesInput | LicenseDeviceScalarWhereWithAggregatesInput[]
    OR?: LicenseDeviceScalarWhereWithAggregatesInput[]
    NOT?: LicenseDeviceScalarWhereWithAggregatesInput | LicenseDeviceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LicenseDevice"> | string
    licenseId?: StringWithAggregatesFilter<"LicenseDevice"> | string
    macAddress?: StringWithAggregatesFilter<"LicenseDevice"> | string
    ipAddress?: StringNullableWithAggregatesFilter<"LicenseDevice"> | string | null
    hostname?: StringNullableWithAggregatesFilter<"LicenseDevice"> | string | null
    location?: StringNullableWithAggregatesFilter<"LicenseDevice"> | string | null
    deviceType?: EnumDeviceTypeWithAggregatesFilter<"LicenseDevice"> | $Enums.DeviceType
    deviceName?: StringNullableWithAggregatesFilter<"LicenseDevice"> | string | null
    osInfo?: StringNullableWithAggregatesFilter<"LicenseDevice"> | string | null
    status?: EnumDeviceStatusWithAggregatesFilter<"LicenseDevice"> | $Enums.DeviceStatus
    lastActive?: DateTimeWithAggregatesFilter<"LicenseDevice"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"LicenseDevice"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"LicenseDevice"> | Date | string
  }

  export type LicenseSessionWhereInput = {
    AND?: LicenseSessionWhereInput | LicenseSessionWhereInput[]
    OR?: LicenseSessionWhereInput[]
    NOT?: LicenseSessionWhereInput | LicenseSessionWhereInput[]
    id?: StringFilter<"LicenseSession"> | string
    licenseId?: StringFilter<"LicenseSession"> | string
    sessionToken?: StringFilter<"LicenseSession"> | string
    deviceId?: StringNullableFilter<"LicenseSession"> | string | null
    deviceName?: StringNullableFilter<"LicenseSession"> | string | null
    ipAddress?: StringNullableFilter<"LicenseSession"> | string | null
    userAgent?: StringNullableFilter<"LicenseSession"> | string | null
    location?: StringNullableFilter<"LicenseSession"> | string | null
    startedAt?: DateTimeFilter<"LicenseSession"> | Date | string
    lastActivityAt?: DateTimeFilter<"LicenseSession"> | Date | string
    expiresAt?: DateTimeFilter<"LicenseSession"> | Date | string
    isActive?: BoolFilter<"LicenseSession"> | boolean
    terminatedAt?: DateTimeNullableFilter<"LicenseSession"> | Date | string | null
    terminatedBy?: StringNullableFilter<"LicenseSession"> | string | null
    terminateReason?: StringNullableFilter<"LicenseSession"> | string | null
    license?: XOR<LicenseRelationFilter, LicenseWhereInput>
  }

  export type LicenseSessionOrderByWithRelationInput = {
    id?: SortOrder
    licenseId?: SortOrder
    sessionToken?: SortOrder
    deviceId?: SortOrderInput | SortOrder
    deviceName?: SortOrderInput | SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    startedAt?: SortOrder
    lastActivityAt?: SortOrder
    expiresAt?: SortOrder
    isActive?: SortOrder
    terminatedAt?: SortOrderInput | SortOrder
    terminatedBy?: SortOrderInput | SortOrder
    terminateReason?: SortOrderInput | SortOrder
    license?: LicenseOrderByWithRelationInput
  }

  export type LicenseSessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sessionToken?: string
    AND?: LicenseSessionWhereInput | LicenseSessionWhereInput[]
    OR?: LicenseSessionWhereInput[]
    NOT?: LicenseSessionWhereInput | LicenseSessionWhereInput[]
    licenseId?: StringFilter<"LicenseSession"> | string
    deviceId?: StringNullableFilter<"LicenseSession"> | string | null
    deviceName?: StringNullableFilter<"LicenseSession"> | string | null
    ipAddress?: StringNullableFilter<"LicenseSession"> | string | null
    userAgent?: StringNullableFilter<"LicenseSession"> | string | null
    location?: StringNullableFilter<"LicenseSession"> | string | null
    startedAt?: DateTimeFilter<"LicenseSession"> | Date | string
    lastActivityAt?: DateTimeFilter<"LicenseSession"> | Date | string
    expiresAt?: DateTimeFilter<"LicenseSession"> | Date | string
    isActive?: BoolFilter<"LicenseSession"> | boolean
    terminatedAt?: DateTimeNullableFilter<"LicenseSession"> | Date | string | null
    terminatedBy?: StringNullableFilter<"LicenseSession"> | string | null
    terminateReason?: StringNullableFilter<"LicenseSession"> | string | null
    license?: XOR<LicenseRelationFilter, LicenseWhereInput>
  }, "id" | "sessionToken">

  export type LicenseSessionOrderByWithAggregationInput = {
    id?: SortOrder
    licenseId?: SortOrder
    sessionToken?: SortOrder
    deviceId?: SortOrderInput | SortOrder
    deviceName?: SortOrderInput | SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    startedAt?: SortOrder
    lastActivityAt?: SortOrder
    expiresAt?: SortOrder
    isActive?: SortOrder
    terminatedAt?: SortOrderInput | SortOrder
    terminatedBy?: SortOrderInput | SortOrder
    terminateReason?: SortOrderInput | SortOrder
    _count?: LicenseSessionCountOrderByAggregateInput
    _max?: LicenseSessionMaxOrderByAggregateInput
    _min?: LicenseSessionMinOrderByAggregateInput
  }

  export type LicenseSessionScalarWhereWithAggregatesInput = {
    AND?: LicenseSessionScalarWhereWithAggregatesInput | LicenseSessionScalarWhereWithAggregatesInput[]
    OR?: LicenseSessionScalarWhereWithAggregatesInput[]
    NOT?: LicenseSessionScalarWhereWithAggregatesInput | LicenseSessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LicenseSession"> | string
    licenseId?: StringWithAggregatesFilter<"LicenseSession"> | string
    sessionToken?: StringWithAggregatesFilter<"LicenseSession"> | string
    deviceId?: StringNullableWithAggregatesFilter<"LicenseSession"> | string | null
    deviceName?: StringNullableWithAggregatesFilter<"LicenseSession"> | string | null
    ipAddress?: StringNullableWithAggregatesFilter<"LicenseSession"> | string | null
    userAgent?: StringNullableWithAggregatesFilter<"LicenseSession"> | string | null
    location?: StringNullableWithAggregatesFilter<"LicenseSession"> | string | null
    startedAt?: DateTimeWithAggregatesFilter<"LicenseSession"> | Date | string
    lastActivityAt?: DateTimeWithAggregatesFilter<"LicenseSession"> | Date | string
    expiresAt?: DateTimeWithAggregatesFilter<"LicenseSession"> | Date | string
    isActive?: BoolWithAggregatesFilter<"LicenseSession"> | boolean
    terminatedAt?: DateTimeNullableWithAggregatesFilter<"LicenseSession"> | Date | string | null
    terminatedBy?: StringNullableWithAggregatesFilter<"LicenseSession"> | string | null
    terminateReason?: StringNullableWithAggregatesFilter<"LicenseSession"> | string | null
  }

  export type LicenseAllocationWhereInput = {
    AND?: LicenseAllocationWhereInput | LicenseAllocationWhereInput[]
    OR?: LicenseAllocationWhereInput[]
    NOT?: LicenseAllocationWhereInput | LicenseAllocationWhereInput[]
    id?: StringFilter<"LicenseAllocation"> | string
    licenseId?: StringNullableFilter<"LicenseAllocation"> | string | null
    poolId?: StringNullableFilter<"LicenseAllocation"> | string | null
    clientId?: StringFilter<"LicenseAllocation"> | string
    employeeName?: StringFilter<"LicenseAllocation"> | string
    employeeEmail?: StringFilter<"LicenseAllocation"> | string
    employeeId?: StringNullableFilter<"LicenseAllocation"> | string | null
    department?: StringNullableFilter<"LicenseAllocation"> | string | null
    action?: EnumAllocationActionFilter<"LicenseAllocation"> | $Enums.AllocationAction
    allocatedAt?: DateTimeFilter<"LicenseAllocation"> | Date | string
    allocatedById?: StringNullableFilter<"LicenseAllocation"> | string | null
    allocatedByName?: StringNullableFilter<"LicenseAllocation"> | string | null
    activatedAt?: DateTimeNullableFilter<"LicenseAllocation"> | Date | string | null
    revokedAt?: DateTimeNullableFilter<"LicenseAllocation"> | Date | string | null
    revokedById?: StringNullableFilter<"LicenseAllocation"> | string | null
    revokedByName?: StringNullableFilter<"LicenseAllocation"> | string | null
    revokeReason?: StringNullableFilter<"LicenseAllocation"> | string | null
    transferredFrom?: StringNullableFilter<"LicenseAllocation"> | string | null
    isActive?: BoolFilter<"LicenseAllocation"> | boolean
    createdAt?: DateTimeFilter<"LicenseAllocation"> | Date | string
    updatedAt?: DateTimeFilter<"LicenseAllocation"> | Date | string
    license?: XOR<LicenseNullableRelationFilter, LicenseWhereInput> | null
    pool?: XOR<LicensePoolNullableRelationFilter, LicensePoolWhereInput> | null
  }

  export type LicenseAllocationOrderByWithRelationInput = {
    id?: SortOrder
    licenseId?: SortOrderInput | SortOrder
    poolId?: SortOrderInput | SortOrder
    clientId?: SortOrder
    employeeName?: SortOrder
    employeeEmail?: SortOrder
    employeeId?: SortOrderInput | SortOrder
    department?: SortOrderInput | SortOrder
    action?: SortOrder
    allocatedAt?: SortOrder
    allocatedById?: SortOrderInput | SortOrder
    allocatedByName?: SortOrderInput | SortOrder
    activatedAt?: SortOrderInput | SortOrder
    revokedAt?: SortOrderInput | SortOrder
    revokedById?: SortOrderInput | SortOrder
    revokedByName?: SortOrderInput | SortOrder
    revokeReason?: SortOrderInput | SortOrder
    transferredFrom?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    license?: LicenseOrderByWithRelationInput
    pool?: LicensePoolOrderByWithRelationInput
  }

  export type LicenseAllocationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LicenseAllocationWhereInput | LicenseAllocationWhereInput[]
    OR?: LicenseAllocationWhereInput[]
    NOT?: LicenseAllocationWhereInput | LicenseAllocationWhereInput[]
    licenseId?: StringNullableFilter<"LicenseAllocation"> | string | null
    poolId?: StringNullableFilter<"LicenseAllocation"> | string | null
    clientId?: StringFilter<"LicenseAllocation"> | string
    employeeName?: StringFilter<"LicenseAllocation"> | string
    employeeEmail?: StringFilter<"LicenseAllocation"> | string
    employeeId?: StringNullableFilter<"LicenseAllocation"> | string | null
    department?: StringNullableFilter<"LicenseAllocation"> | string | null
    action?: EnumAllocationActionFilter<"LicenseAllocation"> | $Enums.AllocationAction
    allocatedAt?: DateTimeFilter<"LicenseAllocation"> | Date | string
    allocatedById?: StringNullableFilter<"LicenseAllocation"> | string | null
    allocatedByName?: StringNullableFilter<"LicenseAllocation"> | string | null
    activatedAt?: DateTimeNullableFilter<"LicenseAllocation"> | Date | string | null
    revokedAt?: DateTimeNullableFilter<"LicenseAllocation"> | Date | string | null
    revokedById?: StringNullableFilter<"LicenseAllocation"> | string | null
    revokedByName?: StringNullableFilter<"LicenseAllocation"> | string | null
    revokeReason?: StringNullableFilter<"LicenseAllocation"> | string | null
    transferredFrom?: StringNullableFilter<"LicenseAllocation"> | string | null
    isActive?: BoolFilter<"LicenseAllocation"> | boolean
    createdAt?: DateTimeFilter<"LicenseAllocation"> | Date | string
    updatedAt?: DateTimeFilter<"LicenseAllocation"> | Date | string
    license?: XOR<LicenseNullableRelationFilter, LicenseWhereInput> | null
    pool?: XOR<LicensePoolNullableRelationFilter, LicensePoolWhereInput> | null
  }, "id">

  export type LicenseAllocationOrderByWithAggregationInput = {
    id?: SortOrder
    licenseId?: SortOrderInput | SortOrder
    poolId?: SortOrderInput | SortOrder
    clientId?: SortOrder
    employeeName?: SortOrder
    employeeEmail?: SortOrder
    employeeId?: SortOrderInput | SortOrder
    department?: SortOrderInput | SortOrder
    action?: SortOrder
    allocatedAt?: SortOrder
    allocatedById?: SortOrderInput | SortOrder
    allocatedByName?: SortOrderInput | SortOrder
    activatedAt?: SortOrderInput | SortOrder
    revokedAt?: SortOrderInput | SortOrder
    revokedById?: SortOrderInput | SortOrder
    revokedByName?: SortOrderInput | SortOrder
    revokeReason?: SortOrderInput | SortOrder
    transferredFrom?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LicenseAllocationCountOrderByAggregateInput
    _max?: LicenseAllocationMaxOrderByAggregateInput
    _min?: LicenseAllocationMinOrderByAggregateInput
  }

  export type LicenseAllocationScalarWhereWithAggregatesInput = {
    AND?: LicenseAllocationScalarWhereWithAggregatesInput | LicenseAllocationScalarWhereWithAggregatesInput[]
    OR?: LicenseAllocationScalarWhereWithAggregatesInput[]
    NOT?: LicenseAllocationScalarWhereWithAggregatesInput | LicenseAllocationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LicenseAllocation"> | string
    licenseId?: StringNullableWithAggregatesFilter<"LicenseAllocation"> | string | null
    poolId?: StringNullableWithAggregatesFilter<"LicenseAllocation"> | string | null
    clientId?: StringWithAggregatesFilter<"LicenseAllocation"> | string
    employeeName?: StringWithAggregatesFilter<"LicenseAllocation"> | string
    employeeEmail?: StringWithAggregatesFilter<"LicenseAllocation"> | string
    employeeId?: StringNullableWithAggregatesFilter<"LicenseAllocation"> | string | null
    department?: StringNullableWithAggregatesFilter<"LicenseAllocation"> | string | null
    action?: EnumAllocationActionWithAggregatesFilter<"LicenseAllocation"> | $Enums.AllocationAction
    allocatedAt?: DateTimeWithAggregatesFilter<"LicenseAllocation"> | Date | string
    allocatedById?: StringNullableWithAggregatesFilter<"LicenseAllocation"> | string | null
    allocatedByName?: StringNullableWithAggregatesFilter<"LicenseAllocation"> | string | null
    activatedAt?: DateTimeNullableWithAggregatesFilter<"LicenseAllocation"> | Date | string | null
    revokedAt?: DateTimeNullableWithAggregatesFilter<"LicenseAllocation"> | Date | string | null
    revokedById?: StringNullableWithAggregatesFilter<"LicenseAllocation"> | string | null
    revokedByName?: StringNullableWithAggregatesFilter<"LicenseAllocation"> | string | null
    revokeReason?: StringNullableWithAggregatesFilter<"LicenseAllocation"> | string | null
    transferredFrom?: StringNullableWithAggregatesFilter<"LicenseAllocation"> | string | null
    isActive?: BoolWithAggregatesFilter<"LicenseAllocation"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"LicenseAllocation"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"LicenseAllocation"> | Date | string
  }

  export type LicenseActivationLogWhereInput = {
    AND?: LicenseActivationLogWhereInput | LicenseActivationLogWhereInput[]
    OR?: LicenseActivationLogWhereInput[]
    NOT?: LicenseActivationLogWhereInput | LicenseActivationLogWhereInput[]
    id?: StringFilter<"LicenseActivationLog"> | string
    licenseId?: StringFilter<"LicenseActivationLog"> | string
    action?: StringFilter<"LicenseActivationLog"> | string
    deviceId?: StringNullableFilter<"LicenseActivationLog"> | string | null
    deviceType?: StringNullableFilter<"LicenseActivationLog"> | string | null
    deviceName?: StringNullableFilter<"LicenseActivationLog"> | string | null
    macAddress?: StringNullableFilter<"LicenseActivationLog"> | string | null
    ipAddress?: StringNullableFilter<"LicenseActivationLog"> | string | null
    userAgent?: StringNullableFilter<"LicenseActivationLog"> | string | null
    location?: StringNullableFilter<"LicenseActivationLog"> | string | null
    success?: BoolFilter<"LicenseActivationLog"> | boolean
    errorMessage?: StringNullableFilter<"LicenseActivationLog"> | string | null
    performedBy?: StringNullableFilter<"LicenseActivationLog"> | string | null
    performedByName?: StringNullableFilter<"LicenseActivationLog"> | string | null
    timestamp?: DateTimeFilter<"LicenseActivationLog"> | Date | string
    license?: XOR<LicenseRelationFilter, LicenseWhereInput>
  }

  export type LicenseActivationLogOrderByWithRelationInput = {
    id?: SortOrder
    licenseId?: SortOrder
    action?: SortOrder
    deviceId?: SortOrderInput | SortOrder
    deviceType?: SortOrderInput | SortOrder
    deviceName?: SortOrderInput | SortOrder
    macAddress?: SortOrderInput | SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    success?: SortOrder
    errorMessage?: SortOrderInput | SortOrder
    performedBy?: SortOrderInput | SortOrder
    performedByName?: SortOrderInput | SortOrder
    timestamp?: SortOrder
    license?: LicenseOrderByWithRelationInput
  }

  export type LicenseActivationLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LicenseActivationLogWhereInput | LicenseActivationLogWhereInput[]
    OR?: LicenseActivationLogWhereInput[]
    NOT?: LicenseActivationLogWhereInput | LicenseActivationLogWhereInput[]
    licenseId?: StringFilter<"LicenseActivationLog"> | string
    action?: StringFilter<"LicenseActivationLog"> | string
    deviceId?: StringNullableFilter<"LicenseActivationLog"> | string | null
    deviceType?: StringNullableFilter<"LicenseActivationLog"> | string | null
    deviceName?: StringNullableFilter<"LicenseActivationLog"> | string | null
    macAddress?: StringNullableFilter<"LicenseActivationLog"> | string | null
    ipAddress?: StringNullableFilter<"LicenseActivationLog"> | string | null
    userAgent?: StringNullableFilter<"LicenseActivationLog"> | string | null
    location?: StringNullableFilter<"LicenseActivationLog"> | string | null
    success?: BoolFilter<"LicenseActivationLog"> | boolean
    errorMessage?: StringNullableFilter<"LicenseActivationLog"> | string | null
    performedBy?: StringNullableFilter<"LicenseActivationLog"> | string | null
    performedByName?: StringNullableFilter<"LicenseActivationLog"> | string | null
    timestamp?: DateTimeFilter<"LicenseActivationLog"> | Date | string
    license?: XOR<LicenseRelationFilter, LicenseWhereInput>
  }, "id">

  export type LicenseActivationLogOrderByWithAggregationInput = {
    id?: SortOrder
    licenseId?: SortOrder
    action?: SortOrder
    deviceId?: SortOrderInput | SortOrder
    deviceType?: SortOrderInput | SortOrder
    deviceName?: SortOrderInput | SortOrder
    macAddress?: SortOrderInput | SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    success?: SortOrder
    errorMessage?: SortOrderInput | SortOrder
    performedBy?: SortOrderInput | SortOrder
    performedByName?: SortOrderInput | SortOrder
    timestamp?: SortOrder
    _count?: LicenseActivationLogCountOrderByAggregateInput
    _max?: LicenseActivationLogMaxOrderByAggregateInput
    _min?: LicenseActivationLogMinOrderByAggregateInput
  }

  export type LicenseActivationLogScalarWhereWithAggregatesInput = {
    AND?: LicenseActivationLogScalarWhereWithAggregatesInput | LicenseActivationLogScalarWhereWithAggregatesInput[]
    OR?: LicenseActivationLogScalarWhereWithAggregatesInput[]
    NOT?: LicenseActivationLogScalarWhereWithAggregatesInput | LicenseActivationLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LicenseActivationLog"> | string
    licenseId?: StringWithAggregatesFilter<"LicenseActivationLog"> | string
    action?: StringWithAggregatesFilter<"LicenseActivationLog"> | string
    deviceId?: StringNullableWithAggregatesFilter<"LicenseActivationLog"> | string | null
    deviceType?: StringNullableWithAggregatesFilter<"LicenseActivationLog"> | string | null
    deviceName?: StringNullableWithAggregatesFilter<"LicenseActivationLog"> | string | null
    macAddress?: StringNullableWithAggregatesFilter<"LicenseActivationLog"> | string | null
    ipAddress?: StringNullableWithAggregatesFilter<"LicenseActivationLog"> | string | null
    userAgent?: StringNullableWithAggregatesFilter<"LicenseActivationLog"> | string | null
    location?: StringNullableWithAggregatesFilter<"LicenseActivationLog"> | string | null
    success?: BoolWithAggregatesFilter<"LicenseActivationLog"> | boolean
    errorMessage?: StringNullableWithAggregatesFilter<"LicenseActivationLog"> | string | null
    performedBy?: StringNullableWithAggregatesFilter<"LicenseActivationLog"> | string | null
    performedByName?: StringNullableWithAggregatesFilter<"LicenseActivationLog"> | string | null
    timestamp?: DateTimeWithAggregatesFilter<"LicenseActivationLog"> | Date | string
  }

  export type LicenseUsageStatsWhereInput = {
    AND?: LicenseUsageStatsWhereInput | LicenseUsageStatsWhereInput[]
    OR?: LicenseUsageStatsWhereInput[]
    NOT?: LicenseUsageStatsWhereInput | LicenseUsageStatsWhereInput[]
    id?: StringFilter<"LicenseUsageStats"> | string
    licenseId?: StringNullableFilter<"LicenseUsageStats"> | string | null
    poolId?: StringNullableFilter<"LicenseUsageStats"> | string | null
    clientId?: StringFilter<"LicenseUsageStats"> | string
    productId?: StringFilter<"LicenseUsageStats"> | string
    periodStart?: DateTimeFilter<"LicenseUsageStats"> | Date | string
    periodEnd?: DateTimeFilter<"LicenseUsageStats"> | Date | string
    periodType?: StringFilter<"LicenseUsageStats"> | string
    activeUsers?: IntFilter<"LicenseUsageStats"> | number
    totalSessions?: IntFilter<"LicenseUsageStats"> | number
    totalDuration?: IntFilter<"LicenseUsageStats"> | number
    peakConcurrent?: IntFilter<"LicenseUsageStats"> | number
    featureUsage?: JsonNullableFilter<"LicenseUsageStats">
    createdAt?: DateTimeFilter<"LicenseUsageStats"> | Date | string
  }

  export type LicenseUsageStatsOrderByWithRelationInput = {
    id?: SortOrder
    licenseId?: SortOrderInput | SortOrder
    poolId?: SortOrderInput | SortOrder
    clientId?: SortOrder
    productId?: SortOrder
    periodStart?: SortOrder
    periodEnd?: SortOrder
    periodType?: SortOrder
    activeUsers?: SortOrder
    totalSessions?: SortOrder
    totalDuration?: SortOrder
    peakConcurrent?: SortOrder
    featureUsage?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type LicenseUsageStatsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    licenseId_periodStart_periodType?: LicenseUsageStatsLicenseIdPeriodStartPeriodTypeCompoundUniqueInput
    poolId_periodStart_periodType?: LicenseUsageStatsPoolIdPeriodStartPeriodTypeCompoundUniqueInput
    AND?: LicenseUsageStatsWhereInput | LicenseUsageStatsWhereInput[]
    OR?: LicenseUsageStatsWhereInput[]
    NOT?: LicenseUsageStatsWhereInput | LicenseUsageStatsWhereInput[]
    licenseId?: StringNullableFilter<"LicenseUsageStats"> | string | null
    poolId?: StringNullableFilter<"LicenseUsageStats"> | string | null
    clientId?: StringFilter<"LicenseUsageStats"> | string
    productId?: StringFilter<"LicenseUsageStats"> | string
    periodStart?: DateTimeFilter<"LicenseUsageStats"> | Date | string
    periodEnd?: DateTimeFilter<"LicenseUsageStats"> | Date | string
    periodType?: StringFilter<"LicenseUsageStats"> | string
    activeUsers?: IntFilter<"LicenseUsageStats"> | number
    totalSessions?: IntFilter<"LicenseUsageStats"> | number
    totalDuration?: IntFilter<"LicenseUsageStats"> | number
    peakConcurrent?: IntFilter<"LicenseUsageStats"> | number
    featureUsage?: JsonNullableFilter<"LicenseUsageStats">
    createdAt?: DateTimeFilter<"LicenseUsageStats"> | Date | string
  }, "id" | "licenseId_periodStart_periodType" | "poolId_periodStart_periodType">

  export type LicenseUsageStatsOrderByWithAggregationInput = {
    id?: SortOrder
    licenseId?: SortOrderInput | SortOrder
    poolId?: SortOrderInput | SortOrder
    clientId?: SortOrder
    productId?: SortOrder
    periodStart?: SortOrder
    periodEnd?: SortOrder
    periodType?: SortOrder
    activeUsers?: SortOrder
    totalSessions?: SortOrder
    totalDuration?: SortOrder
    peakConcurrent?: SortOrder
    featureUsage?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: LicenseUsageStatsCountOrderByAggregateInput
    _avg?: LicenseUsageStatsAvgOrderByAggregateInput
    _max?: LicenseUsageStatsMaxOrderByAggregateInput
    _min?: LicenseUsageStatsMinOrderByAggregateInput
    _sum?: LicenseUsageStatsSumOrderByAggregateInput
  }

  export type LicenseUsageStatsScalarWhereWithAggregatesInput = {
    AND?: LicenseUsageStatsScalarWhereWithAggregatesInput | LicenseUsageStatsScalarWhereWithAggregatesInput[]
    OR?: LicenseUsageStatsScalarWhereWithAggregatesInput[]
    NOT?: LicenseUsageStatsScalarWhereWithAggregatesInput | LicenseUsageStatsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LicenseUsageStats"> | string
    licenseId?: StringNullableWithAggregatesFilter<"LicenseUsageStats"> | string | null
    poolId?: StringNullableWithAggregatesFilter<"LicenseUsageStats"> | string | null
    clientId?: StringWithAggregatesFilter<"LicenseUsageStats"> | string
    productId?: StringWithAggregatesFilter<"LicenseUsageStats"> | string
    periodStart?: DateTimeWithAggregatesFilter<"LicenseUsageStats"> | Date | string
    periodEnd?: DateTimeWithAggregatesFilter<"LicenseUsageStats"> | Date | string
    periodType?: StringWithAggregatesFilter<"LicenseUsageStats"> | string
    activeUsers?: IntWithAggregatesFilter<"LicenseUsageStats"> | number
    totalSessions?: IntWithAggregatesFilter<"LicenseUsageStats"> | number
    totalDuration?: IntWithAggregatesFilter<"LicenseUsageStats"> | number
    peakConcurrent?: IntWithAggregatesFilter<"LicenseUsageStats"> | number
    featureUsage?: JsonNullableWithAggregatesFilter<"LicenseUsageStats">
    createdAt?: DateTimeWithAggregatesFilter<"LicenseUsageStats"> | Date | string
  }

  export type LicensePoolCreateInput = {
    id?: string
    clientId: string
    clientName: string
    clientEmail?: string | null
    subscriptionId: string
    productId: string
    productName: string
    productCode: string
    licenseTypeId: string
    licenseTypeName: string
    totalSeats: number
    allocatedSeats?: number
    availableSeats: number
    poolKey: string
    poolKeyHash: string
    activationDate?: Date | string | null
    expirationDate: Date | string
    gracePeriodDays?: number
    features?: LicensePoolCreatefeaturesInput | string[]
    selectedFeatures?: LicensePoolCreateselectedFeaturesInput | string[]
    billingCycle?: string
    pricePerSeat?: Decimal | DecimalJsLike | number | string | null
    totalAmount?: Decimal | DecimalJsLike | number | string | null
    currency?: string
    subscriptionStatus?: string | null
    paymentStatus?: string | null
    autoRenew?: boolean
    nextBillingDate?: Date | string | null
    status?: $Enums.PoolStatus
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    licenses?: LicenseCreateNestedManyWithoutPoolInput
    allocations?: LicenseAllocationCreateNestedManyWithoutPoolInput
  }

  export type LicensePoolUncheckedCreateInput = {
    id?: string
    clientId: string
    clientName: string
    clientEmail?: string | null
    subscriptionId: string
    productId: string
    productName: string
    productCode: string
    licenseTypeId: string
    licenseTypeName: string
    totalSeats: number
    allocatedSeats?: number
    availableSeats: number
    poolKey: string
    poolKeyHash: string
    activationDate?: Date | string | null
    expirationDate: Date | string
    gracePeriodDays?: number
    features?: LicensePoolCreatefeaturesInput | string[]
    selectedFeatures?: LicensePoolCreateselectedFeaturesInput | string[]
    billingCycle?: string
    pricePerSeat?: Decimal | DecimalJsLike | number | string | null
    totalAmount?: Decimal | DecimalJsLike | number | string | null
    currency?: string
    subscriptionStatus?: string | null
    paymentStatus?: string | null
    autoRenew?: boolean
    nextBillingDate?: Date | string | null
    status?: $Enums.PoolStatus
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    licenses?: LicenseUncheckedCreateNestedManyWithoutPoolInput
    allocations?: LicenseAllocationUncheckedCreateNestedManyWithoutPoolInput
  }

  export type LicensePoolUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    clientName?: StringFieldUpdateOperationsInput | string
    clientEmail?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    productCode?: StringFieldUpdateOperationsInput | string
    licenseTypeId?: StringFieldUpdateOperationsInput | string
    licenseTypeName?: StringFieldUpdateOperationsInput | string
    totalSeats?: IntFieldUpdateOperationsInput | number
    allocatedSeats?: IntFieldUpdateOperationsInput | number
    availableSeats?: IntFieldUpdateOperationsInput | number
    poolKey?: StringFieldUpdateOperationsInput | string
    poolKeyHash?: StringFieldUpdateOperationsInput | string
    activationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expirationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    gracePeriodDays?: IntFieldUpdateOperationsInput | number
    features?: LicensePoolUpdatefeaturesInput | string[]
    selectedFeatures?: LicensePoolUpdateselectedFeaturesInput | string[]
    billingCycle?: StringFieldUpdateOperationsInput | string
    pricePerSeat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    totalAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    currency?: StringFieldUpdateOperationsInput | string
    subscriptionStatus?: NullableStringFieldUpdateOperationsInput | string | null
    paymentStatus?: NullableStringFieldUpdateOperationsInput | string | null
    autoRenew?: BoolFieldUpdateOperationsInput | boolean
    nextBillingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumPoolStatusFieldUpdateOperationsInput | $Enums.PoolStatus
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    licenses?: LicenseUpdateManyWithoutPoolNestedInput
    allocations?: LicenseAllocationUpdateManyWithoutPoolNestedInput
  }

  export type LicensePoolUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    clientName?: StringFieldUpdateOperationsInput | string
    clientEmail?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    productCode?: StringFieldUpdateOperationsInput | string
    licenseTypeId?: StringFieldUpdateOperationsInput | string
    licenseTypeName?: StringFieldUpdateOperationsInput | string
    totalSeats?: IntFieldUpdateOperationsInput | number
    allocatedSeats?: IntFieldUpdateOperationsInput | number
    availableSeats?: IntFieldUpdateOperationsInput | number
    poolKey?: StringFieldUpdateOperationsInput | string
    poolKeyHash?: StringFieldUpdateOperationsInput | string
    activationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expirationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    gracePeriodDays?: IntFieldUpdateOperationsInput | number
    features?: LicensePoolUpdatefeaturesInput | string[]
    selectedFeatures?: LicensePoolUpdateselectedFeaturesInput | string[]
    billingCycle?: StringFieldUpdateOperationsInput | string
    pricePerSeat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    totalAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    currency?: StringFieldUpdateOperationsInput | string
    subscriptionStatus?: NullableStringFieldUpdateOperationsInput | string | null
    paymentStatus?: NullableStringFieldUpdateOperationsInput | string | null
    autoRenew?: BoolFieldUpdateOperationsInput | boolean
    nextBillingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumPoolStatusFieldUpdateOperationsInput | $Enums.PoolStatus
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    licenses?: LicenseUncheckedUpdateManyWithoutPoolNestedInput
    allocations?: LicenseAllocationUncheckedUpdateManyWithoutPoolNestedInput
  }

  export type LicensePoolCreateManyInput = {
    id?: string
    clientId: string
    clientName: string
    clientEmail?: string | null
    subscriptionId: string
    productId: string
    productName: string
    productCode: string
    licenseTypeId: string
    licenseTypeName: string
    totalSeats: number
    allocatedSeats?: number
    availableSeats: number
    poolKey: string
    poolKeyHash: string
    activationDate?: Date | string | null
    expirationDate: Date | string
    gracePeriodDays?: number
    features?: LicensePoolCreatefeaturesInput | string[]
    selectedFeatures?: LicensePoolCreateselectedFeaturesInput | string[]
    billingCycle?: string
    pricePerSeat?: Decimal | DecimalJsLike | number | string | null
    totalAmount?: Decimal | DecimalJsLike | number | string | null
    currency?: string
    subscriptionStatus?: string | null
    paymentStatus?: string | null
    autoRenew?: boolean
    nextBillingDate?: Date | string | null
    status?: $Enums.PoolStatus
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LicensePoolUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    clientName?: StringFieldUpdateOperationsInput | string
    clientEmail?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    productCode?: StringFieldUpdateOperationsInput | string
    licenseTypeId?: StringFieldUpdateOperationsInput | string
    licenseTypeName?: StringFieldUpdateOperationsInput | string
    totalSeats?: IntFieldUpdateOperationsInput | number
    allocatedSeats?: IntFieldUpdateOperationsInput | number
    availableSeats?: IntFieldUpdateOperationsInput | number
    poolKey?: StringFieldUpdateOperationsInput | string
    poolKeyHash?: StringFieldUpdateOperationsInput | string
    activationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expirationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    gracePeriodDays?: IntFieldUpdateOperationsInput | number
    features?: LicensePoolUpdatefeaturesInput | string[]
    selectedFeatures?: LicensePoolUpdateselectedFeaturesInput | string[]
    billingCycle?: StringFieldUpdateOperationsInput | string
    pricePerSeat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    totalAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    currency?: StringFieldUpdateOperationsInput | string
    subscriptionStatus?: NullableStringFieldUpdateOperationsInput | string | null
    paymentStatus?: NullableStringFieldUpdateOperationsInput | string | null
    autoRenew?: BoolFieldUpdateOperationsInput | boolean
    nextBillingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumPoolStatusFieldUpdateOperationsInput | $Enums.PoolStatus
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LicensePoolUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    clientName?: StringFieldUpdateOperationsInput | string
    clientEmail?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    productCode?: StringFieldUpdateOperationsInput | string
    licenseTypeId?: StringFieldUpdateOperationsInput | string
    licenseTypeName?: StringFieldUpdateOperationsInput | string
    totalSeats?: IntFieldUpdateOperationsInput | number
    allocatedSeats?: IntFieldUpdateOperationsInput | number
    availableSeats?: IntFieldUpdateOperationsInput | number
    poolKey?: StringFieldUpdateOperationsInput | string
    poolKeyHash?: StringFieldUpdateOperationsInput | string
    activationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expirationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    gracePeriodDays?: IntFieldUpdateOperationsInput | number
    features?: LicensePoolUpdatefeaturesInput | string[]
    selectedFeatures?: LicensePoolUpdateselectedFeaturesInput | string[]
    billingCycle?: StringFieldUpdateOperationsInput | string
    pricePerSeat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    totalAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    currency?: StringFieldUpdateOperationsInput | string
    subscriptionStatus?: NullableStringFieldUpdateOperationsInput | string | null
    paymentStatus?: NullableStringFieldUpdateOperationsInput | string | null
    autoRenew?: BoolFieldUpdateOperationsInput | boolean
    nextBillingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumPoolStatusFieldUpdateOperationsInput | $Enums.PoolStatus
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LicenseCreateInput = {
    id?: string
    licenseKey: string
    licenseKeyHash?: string | null
    clientId?: string | null
    clientName?: string | null
    productId: string
    productName: string
    productCode: string
    licenseTypeId?: string | null
    licenseTypeName?: string | null
    status?: $Enums.LicenseStatus
    userName?: string | null
    userEmail?: string | null
    deviceLimit?: number
    sessionLimit?: number
    deviceCount?: number
    currentSessions?: number
    lastActive?: Date | string | null
    activationDate?: Date | string | null
    expirationDate?: Date | string | null
    boundHardwareId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    pool?: LicensePoolCreateNestedOneWithoutLicensesInput
    devices?: LicenseDeviceCreateNestedManyWithoutLicenseInput
    sessions?: LicenseSessionCreateNestedManyWithoutLicenseInput
    allocations?: LicenseAllocationCreateNestedManyWithoutLicenseInput
    activationLogs?: LicenseActivationLogCreateNestedManyWithoutLicenseInput
  }

  export type LicenseUncheckedCreateInput = {
    id?: string
    licenseKey: string
    licenseKeyHash?: string | null
    clientId?: string | null
    clientName?: string | null
    productId: string
    productName: string
    productCode: string
    licenseTypeId?: string | null
    licenseTypeName?: string | null
    status?: $Enums.LicenseStatus
    poolId?: string | null
    userName?: string | null
    userEmail?: string | null
    deviceLimit?: number
    sessionLimit?: number
    deviceCount?: number
    currentSessions?: number
    lastActive?: Date | string | null
    activationDate?: Date | string | null
    expirationDate?: Date | string | null
    boundHardwareId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    devices?: LicenseDeviceUncheckedCreateNestedManyWithoutLicenseInput
    sessions?: LicenseSessionUncheckedCreateNestedManyWithoutLicenseInput
    allocations?: LicenseAllocationUncheckedCreateNestedManyWithoutLicenseInput
    activationLogs?: LicenseActivationLogUncheckedCreateNestedManyWithoutLicenseInput
  }

  export type LicenseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    licenseKey?: StringFieldUpdateOperationsInput | string
    licenseKeyHash?: NullableStringFieldUpdateOperationsInput | string | null
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
    clientName?: NullableStringFieldUpdateOperationsInput | string | null
    productId?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    productCode?: StringFieldUpdateOperationsInput | string
    licenseTypeId?: NullableStringFieldUpdateOperationsInput | string | null
    licenseTypeName?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumLicenseStatusFieldUpdateOperationsInput | $Enums.LicenseStatus
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    userEmail?: NullableStringFieldUpdateOperationsInput | string | null
    deviceLimit?: IntFieldUpdateOperationsInput | number
    sessionLimit?: IntFieldUpdateOperationsInput | number
    deviceCount?: IntFieldUpdateOperationsInput | number
    currentSessions?: IntFieldUpdateOperationsInput | number
    lastActive?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    activationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expirationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    boundHardwareId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pool?: LicensePoolUpdateOneWithoutLicensesNestedInput
    devices?: LicenseDeviceUpdateManyWithoutLicenseNestedInput
    sessions?: LicenseSessionUpdateManyWithoutLicenseNestedInput
    allocations?: LicenseAllocationUpdateManyWithoutLicenseNestedInput
    activationLogs?: LicenseActivationLogUpdateManyWithoutLicenseNestedInput
  }

  export type LicenseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    licenseKey?: StringFieldUpdateOperationsInput | string
    licenseKeyHash?: NullableStringFieldUpdateOperationsInput | string | null
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
    clientName?: NullableStringFieldUpdateOperationsInput | string | null
    productId?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    productCode?: StringFieldUpdateOperationsInput | string
    licenseTypeId?: NullableStringFieldUpdateOperationsInput | string | null
    licenseTypeName?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumLicenseStatusFieldUpdateOperationsInput | $Enums.LicenseStatus
    poolId?: NullableStringFieldUpdateOperationsInput | string | null
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    userEmail?: NullableStringFieldUpdateOperationsInput | string | null
    deviceLimit?: IntFieldUpdateOperationsInput | number
    sessionLimit?: IntFieldUpdateOperationsInput | number
    deviceCount?: IntFieldUpdateOperationsInput | number
    currentSessions?: IntFieldUpdateOperationsInput | number
    lastActive?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    activationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expirationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    boundHardwareId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    devices?: LicenseDeviceUncheckedUpdateManyWithoutLicenseNestedInput
    sessions?: LicenseSessionUncheckedUpdateManyWithoutLicenseNestedInput
    allocations?: LicenseAllocationUncheckedUpdateManyWithoutLicenseNestedInput
    activationLogs?: LicenseActivationLogUncheckedUpdateManyWithoutLicenseNestedInput
  }

  export type LicenseCreateManyInput = {
    id?: string
    licenseKey: string
    licenseKeyHash?: string | null
    clientId?: string | null
    clientName?: string | null
    productId: string
    productName: string
    productCode: string
    licenseTypeId?: string | null
    licenseTypeName?: string | null
    status?: $Enums.LicenseStatus
    poolId?: string | null
    userName?: string | null
    userEmail?: string | null
    deviceLimit?: number
    sessionLimit?: number
    deviceCount?: number
    currentSessions?: number
    lastActive?: Date | string | null
    activationDate?: Date | string | null
    expirationDate?: Date | string | null
    boundHardwareId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LicenseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    licenseKey?: StringFieldUpdateOperationsInput | string
    licenseKeyHash?: NullableStringFieldUpdateOperationsInput | string | null
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
    clientName?: NullableStringFieldUpdateOperationsInput | string | null
    productId?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    productCode?: StringFieldUpdateOperationsInput | string
    licenseTypeId?: NullableStringFieldUpdateOperationsInput | string | null
    licenseTypeName?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumLicenseStatusFieldUpdateOperationsInput | $Enums.LicenseStatus
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    userEmail?: NullableStringFieldUpdateOperationsInput | string | null
    deviceLimit?: IntFieldUpdateOperationsInput | number
    sessionLimit?: IntFieldUpdateOperationsInput | number
    deviceCount?: IntFieldUpdateOperationsInput | number
    currentSessions?: IntFieldUpdateOperationsInput | number
    lastActive?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    activationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expirationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    boundHardwareId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LicenseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    licenseKey?: StringFieldUpdateOperationsInput | string
    licenseKeyHash?: NullableStringFieldUpdateOperationsInput | string | null
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
    clientName?: NullableStringFieldUpdateOperationsInput | string | null
    productId?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    productCode?: StringFieldUpdateOperationsInput | string
    licenseTypeId?: NullableStringFieldUpdateOperationsInput | string | null
    licenseTypeName?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumLicenseStatusFieldUpdateOperationsInput | $Enums.LicenseStatus
    poolId?: NullableStringFieldUpdateOperationsInput | string | null
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    userEmail?: NullableStringFieldUpdateOperationsInput | string | null
    deviceLimit?: IntFieldUpdateOperationsInput | number
    sessionLimit?: IntFieldUpdateOperationsInput | number
    deviceCount?: IntFieldUpdateOperationsInput | number
    currentSessions?: IntFieldUpdateOperationsInput | number
    lastActive?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    activationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expirationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    boundHardwareId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LicenseDeviceCreateInput = {
    id?: string
    macAddress: string
    ipAddress?: string | null
    hostname?: string | null
    location?: string | null
    deviceType?: $Enums.DeviceType
    deviceName?: string | null
    osInfo?: string | null
    status?: $Enums.DeviceStatus
    lastActive?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    license: LicenseCreateNestedOneWithoutDevicesInput
  }

  export type LicenseDeviceUncheckedCreateInput = {
    id?: string
    licenseId: string
    macAddress: string
    ipAddress?: string | null
    hostname?: string | null
    location?: string | null
    deviceType?: $Enums.DeviceType
    deviceName?: string | null
    osInfo?: string | null
    status?: $Enums.DeviceStatus
    lastActive?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LicenseDeviceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    macAddress?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    hostname?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    deviceType?: EnumDeviceTypeFieldUpdateOperationsInput | $Enums.DeviceType
    deviceName?: NullableStringFieldUpdateOperationsInput | string | null
    osInfo?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumDeviceStatusFieldUpdateOperationsInput | $Enums.DeviceStatus
    lastActive?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    license?: LicenseUpdateOneRequiredWithoutDevicesNestedInput
  }

  export type LicenseDeviceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    licenseId?: StringFieldUpdateOperationsInput | string
    macAddress?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    hostname?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    deviceType?: EnumDeviceTypeFieldUpdateOperationsInput | $Enums.DeviceType
    deviceName?: NullableStringFieldUpdateOperationsInput | string | null
    osInfo?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumDeviceStatusFieldUpdateOperationsInput | $Enums.DeviceStatus
    lastActive?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LicenseDeviceCreateManyInput = {
    id?: string
    licenseId: string
    macAddress: string
    ipAddress?: string | null
    hostname?: string | null
    location?: string | null
    deviceType?: $Enums.DeviceType
    deviceName?: string | null
    osInfo?: string | null
    status?: $Enums.DeviceStatus
    lastActive?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LicenseDeviceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    macAddress?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    hostname?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    deviceType?: EnumDeviceTypeFieldUpdateOperationsInput | $Enums.DeviceType
    deviceName?: NullableStringFieldUpdateOperationsInput | string | null
    osInfo?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumDeviceStatusFieldUpdateOperationsInput | $Enums.DeviceStatus
    lastActive?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LicenseDeviceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    licenseId?: StringFieldUpdateOperationsInput | string
    macAddress?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    hostname?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    deviceType?: EnumDeviceTypeFieldUpdateOperationsInput | $Enums.DeviceType
    deviceName?: NullableStringFieldUpdateOperationsInput | string | null
    osInfo?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumDeviceStatusFieldUpdateOperationsInput | $Enums.DeviceStatus
    lastActive?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LicenseSessionCreateInput = {
    id?: string
    sessionToken: string
    deviceId?: string | null
    deviceName?: string | null
    ipAddress?: string | null
    userAgent?: string | null
    location?: string | null
    startedAt?: Date | string
    lastActivityAt?: Date | string
    expiresAt: Date | string
    isActive?: boolean
    terminatedAt?: Date | string | null
    terminatedBy?: string | null
    terminateReason?: string | null
    license: LicenseCreateNestedOneWithoutSessionsInput
  }

  export type LicenseSessionUncheckedCreateInput = {
    id?: string
    licenseId: string
    sessionToken: string
    deviceId?: string | null
    deviceName?: string | null
    ipAddress?: string | null
    userAgent?: string | null
    location?: string | null
    startedAt?: Date | string
    lastActivityAt?: Date | string
    expiresAt: Date | string
    isActive?: boolean
    terminatedAt?: Date | string | null
    terminatedBy?: string | null
    terminateReason?: string | null
  }

  export type LicenseSessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    deviceId?: NullableStringFieldUpdateOperationsInput | string | null
    deviceName?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActivityAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    terminatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    terminatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    terminateReason?: NullableStringFieldUpdateOperationsInput | string | null
    license?: LicenseUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type LicenseSessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    licenseId?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    deviceId?: NullableStringFieldUpdateOperationsInput | string | null
    deviceName?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActivityAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    terminatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    terminatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    terminateReason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LicenseSessionCreateManyInput = {
    id?: string
    licenseId: string
    sessionToken: string
    deviceId?: string | null
    deviceName?: string | null
    ipAddress?: string | null
    userAgent?: string | null
    location?: string | null
    startedAt?: Date | string
    lastActivityAt?: Date | string
    expiresAt: Date | string
    isActive?: boolean
    terminatedAt?: Date | string | null
    terminatedBy?: string | null
    terminateReason?: string | null
  }

  export type LicenseSessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    deviceId?: NullableStringFieldUpdateOperationsInput | string | null
    deviceName?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActivityAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    terminatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    terminatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    terminateReason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LicenseSessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    licenseId?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    deviceId?: NullableStringFieldUpdateOperationsInput | string | null
    deviceName?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActivityAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    terminatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    terminatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    terminateReason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LicenseAllocationCreateInput = {
    id?: string
    clientId: string
    employeeName: string
    employeeEmail: string
    employeeId?: string | null
    department?: string | null
    action?: $Enums.AllocationAction
    allocatedAt?: Date | string
    allocatedById?: string | null
    allocatedByName?: string | null
    activatedAt?: Date | string | null
    revokedAt?: Date | string | null
    revokedById?: string | null
    revokedByName?: string | null
    revokeReason?: string | null
    transferredFrom?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    license?: LicenseCreateNestedOneWithoutAllocationsInput
    pool?: LicensePoolCreateNestedOneWithoutAllocationsInput
  }

  export type LicenseAllocationUncheckedCreateInput = {
    id?: string
    licenseId?: string | null
    poolId?: string | null
    clientId: string
    employeeName: string
    employeeEmail: string
    employeeId?: string | null
    department?: string | null
    action?: $Enums.AllocationAction
    allocatedAt?: Date | string
    allocatedById?: string | null
    allocatedByName?: string | null
    activatedAt?: Date | string | null
    revokedAt?: Date | string | null
    revokedById?: string | null
    revokedByName?: string | null
    revokeReason?: string | null
    transferredFrom?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LicenseAllocationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    employeeName?: StringFieldUpdateOperationsInput | string
    employeeEmail?: StringFieldUpdateOperationsInput | string
    employeeId?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    action?: EnumAllocationActionFieldUpdateOperationsInput | $Enums.AllocationAction
    allocatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    allocatedById?: NullableStringFieldUpdateOperationsInput | string | null
    allocatedByName?: NullableStringFieldUpdateOperationsInput | string | null
    activatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revokedById?: NullableStringFieldUpdateOperationsInput | string | null
    revokedByName?: NullableStringFieldUpdateOperationsInput | string | null
    revokeReason?: NullableStringFieldUpdateOperationsInput | string | null
    transferredFrom?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    license?: LicenseUpdateOneWithoutAllocationsNestedInput
    pool?: LicensePoolUpdateOneWithoutAllocationsNestedInput
  }

  export type LicenseAllocationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    licenseId?: NullableStringFieldUpdateOperationsInput | string | null
    poolId?: NullableStringFieldUpdateOperationsInput | string | null
    clientId?: StringFieldUpdateOperationsInput | string
    employeeName?: StringFieldUpdateOperationsInput | string
    employeeEmail?: StringFieldUpdateOperationsInput | string
    employeeId?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    action?: EnumAllocationActionFieldUpdateOperationsInput | $Enums.AllocationAction
    allocatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    allocatedById?: NullableStringFieldUpdateOperationsInput | string | null
    allocatedByName?: NullableStringFieldUpdateOperationsInput | string | null
    activatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revokedById?: NullableStringFieldUpdateOperationsInput | string | null
    revokedByName?: NullableStringFieldUpdateOperationsInput | string | null
    revokeReason?: NullableStringFieldUpdateOperationsInput | string | null
    transferredFrom?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LicenseAllocationCreateManyInput = {
    id?: string
    licenseId?: string | null
    poolId?: string | null
    clientId: string
    employeeName: string
    employeeEmail: string
    employeeId?: string | null
    department?: string | null
    action?: $Enums.AllocationAction
    allocatedAt?: Date | string
    allocatedById?: string | null
    allocatedByName?: string | null
    activatedAt?: Date | string | null
    revokedAt?: Date | string | null
    revokedById?: string | null
    revokedByName?: string | null
    revokeReason?: string | null
    transferredFrom?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LicenseAllocationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    employeeName?: StringFieldUpdateOperationsInput | string
    employeeEmail?: StringFieldUpdateOperationsInput | string
    employeeId?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    action?: EnumAllocationActionFieldUpdateOperationsInput | $Enums.AllocationAction
    allocatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    allocatedById?: NullableStringFieldUpdateOperationsInput | string | null
    allocatedByName?: NullableStringFieldUpdateOperationsInput | string | null
    activatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revokedById?: NullableStringFieldUpdateOperationsInput | string | null
    revokedByName?: NullableStringFieldUpdateOperationsInput | string | null
    revokeReason?: NullableStringFieldUpdateOperationsInput | string | null
    transferredFrom?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LicenseAllocationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    licenseId?: NullableStringFieldUpdateOperationsInput | string | null
    poolId?: NullableStringFieldUpdateOperationsInput | string | null
    clientId?: StringFieldUpdateOperationsInput | string
    employeeName?: StringFieldUpdateOperationsInput | string
    employeeEmail?: StringFieldUpdateOperationsInput | string
    employeeId?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    action?: EnumAllocationActionFieldUpdateOperationsInput | $Enums.AllocationAction
    allocatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    allocatedById?: NullableStringFieldUpdateOperationsInput | string | null
    allocatedByName?: NullableStringFieldUpdateOperationsInput | string | null
    activatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revokedById?: NullableStringFieldUpdateOperationsInput | string | null
    revokedByName?: NullableStringFieldUpdateOperationsInput | string | null
    revokeReason?: NullableStringFieldUpdateOperationsInput | string | null
    transferredFrom?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LicenseActivationLogCreateInput = {
    id?: string
    action: string
    deviceId?: string | null
    deviceType?: string | null
    deviceName?: string | null
    macAddress?: string | null
    ipAddress?: string | null
    userAgent?: string | null
    location?: string | null
    success?: boolean
    errorMessage?: string | null
    performedBy?: string | null
    performedByName?: string | null
    timestamp?: Date | string
    license: LicenseCreateNestedOneWithoutActivationLogsInput
  }

  export type LicenseActivationLogUncheckedCreateInput = {
    id?: string
    licenseId: string
    action: string
    deviceId?: string | null
    deviceType?: string | null
    deviceName?: string | null
    macAddress?: string | null
    ipAddress?: string | null
    userAgent?: string | null
    location?: string | null
    success?: boolean
    errorMessage?: string | null
    performedBy?: string | null
    performedByName?: string | null
    timestamp?: Date | string
  }

  export type LicenseActivationLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    deviceId?: NullableStringFieldUpdateOperationsInput | string | null
    deviceType?: NullableStringFieldUpdateOperationsInput | string | null
    deviceName?: NullableStringFieldUpdateOperationsInput | string | null
    macAddress?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    success?: BoolFieldUpdateOperationsInput | boolean
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    performedBy?: NullableStringFieldUpdateOperationsInput | string | null
    performedByName?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    license?: LicenseUpdateOneRequiredWithoutActivationLogsNestedInput
  }

  export type LicenseActivationLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    licenseId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    deviceId?: NullableStringFieldUpdateOperationsInput | string | null
    deviceType?: NullableStringFieldUpdateOperationsInput | string | null
    deviceName?: NullableStringFieldUpdateOperationsInput | string | null
    macAddress?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    success?: BoolFieldUpdateOperationsInput | boolean
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    performedBy?: NullableStringFieldUpdateOperationsInput | string | null
    performedByName?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LicenseActivationLogCreateManyInput = {
    id?: string
    licenseId: string
    action: string
    deviceId?: string | null
    deviceType?: string | null
    deviceName?: string | null
    macAddress?: string | null
    ipAddress?: string | null
    userAgent?: string | null
    location?: string | null
    success?: boolean
    errorMessage?: string | null
    performedBy?: string | null
    performedByName?: string | null
    timestamp?: Date | string
  }

  export type LicenseActivationLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    deviceId?: NullableStringFieldUpdateOperationsInput | string | null
    deviceType?: NullableStringFieldUpdateOperationsInput | string | null
    deviceName?: NullableStringFieldUpdateOperationsInput | string | null
    macAddress?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    success?: BoolFieldUpdateOperationsInput | boolean
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    performedBy?: NullableStringFieldUpdateOperationsInput | string | null
    performedByName?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LicenseActivationLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    licenseId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    deviceId?: NullableStringFieldUpdateOperationsInput | string | null
    deviceType?: NullableStringFieldUpdateOperationsInput | string | null
    deviceName?: NullableStringFieldUpdateOperationsInput | string | null
    macAddress?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    success?: BoolFieldUpdateOperationsInput | boolean
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    performedBy?: NullableStringFieldUpdateOperationsInput | string | null
    performedByName?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LicenseUsageStatsCreateInput = {
    id?: string
    licenseId?: string | null
    poolId?: string | null
    clientId: string
    productId: string
    periodStart: Date | string
    periodEnd: Date | string
    periodType: string
    activeUsers?: number
    totalSessions?: number
    totalDuration?: number
    peakConcurrent?: number
    featureUsage?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type LicenseUsageStatsUncheckedCreateInput = {
    id?: string
    licenseId?: string | null
    poolId?: string | null
    clientId: string
    productId: string
    periodStart: Date | string
    periodEnd: Date | string
    periodType: string
    activeUsers?: number
    totalSessions?: number
    totalDuration?: number
    peakConcurrent?: number
    featureUsage?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type LicenseUsageStatsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    licenseId?: NullableStringFieldUpdateOperationsInput | string | null
    poolId?: NullableStringFieldUpdateOperationsInput | string | null
    clientId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    periodType?: StringFieldUpdateOperationsInput | string
    activeUsers?: IntFieldUpdateOperationsInput | number
    totalSessions?: IntFieldUpdateOperationsInput | number
    totalDuration?: IntFieldUpdateOperationsInput | number
    peakConcurrent?: IntFieldUpdateOperationsInput | number
    featureUsage?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LicenseUsageStatsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    licenseId?: NullableStringFieldUpdateOperationsInput | string | null
    poolId?: NullableStringFieldUpdateOperationsInput | string | null
    clientId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    periodType?: StringFieldUpdateOperationsInput | string
    activeUsers?: IntFieldUpdateOperationsInput | number
    totalSessions?: IntFieldUpdateOperationsInput | number
    totalDuration?: IntFieldUpdateOperationsInput | number
    peakConcurrent?: IntFieldUpdateOperationsInput | number
    featureUsage?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LicenseUsageStatsCreateManyInput = {
    id?: string
    licenseId?: string | null
    poolId?: string | null
    clientId: string
    productId: string
    periodStart: Date | string
    periodEnd: Date | string
    periodType: string
    activeUsers?: number
    totalSessions?: number
    totalDuration?: number
    peakConcurrent?: number
    featureUsage?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type LicenseUsageStatsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    licenseId?: NullableStringFieldUpdateOperationsInput | string | null
    poolId?: NullableStringFieldUpdateOperationsInput | string | null
    clientId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    periodType?: StringFieldUpdateOperationsInput | string
    activeUsers?: IntFieldUpdateOperationsInput | number
    totalSessions?: IntFieldUpdateOperationsInput | number
    totalDuration?: IntFieldUpdateOperationsInput | number
    peakConcurrent?: IntFieldUpdateOperationsInput | number
    featureUsage?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LicenseUsageStatsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    licenseId?: NullableStringFieldUpdateOperationsInput | string | null
    poolId?: NullableStringFieldUpdateOperationsInput | string | null
    clientId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    periodType?: StringFieldUpdateOperationsInput | string
    activeUsers?: IntFieldUpdateOperationsInput | number
    totalSessions?: IntFieldUpdateOperationsInput | number
    totalDuration?: IntFieldUpdateOperationsInput | number
    peakConcurrent?: IntFieldUpdateOperationsInput | number
    featureUsage?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EnumPoolStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PoolStatus | EnumPoolStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PoolStatus[] | ListEnumPoolStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PoolStatus[] | ListEnumPoolStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPoolStatusFilter<$PrismaModel> | $Enums.PoolStatus
  }

  export type LicenseListRelationFilter = {
    every?: LicenseWhereInput
    some?: LicenseWhereInput
    none?: LicenseWhereInput
  }

  export type LicenseAllocationListRelationFilter = {
    every?: LicenseAllocationWhereInput
    some?: LicenseAllocationWhereInput
    none?: LicenseAllocationWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type LicenseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LicenseAllocationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LicensePoolCountOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    clientName?: SortOrder
    clientEmail?: SortOrder
    subscriptionId?: SortOrder
    productId?: SortOrder
    productName?: SortOrder
    productCode?: SortOrder
    licenseTypeId?: SortOrder
    licenseTypeName?: SortOrder
    totalSeats?: SortOrder
    allocatedSeats?: SortOrder
    availableSeats?: SortOrder
    poolKey?: SortOrder
    poolKeyHash?: SortOrder
    activationDate?: SortOrder
    expirationDate?: SortOrder
    gracePeriodDays?: SortOrder
    features?: SortOrder
    selectedFeatures?: SortOrder
    billingCycle?: SortOrder
    pricePerSeat?: SortOrder
    totalAmount?: SortOrder
    currency?: SortOrder
    subscriptionStatus?: SortOrder
    paymentStatus?: SortOrder
    autoRenew?: SortOrder
    nextBillingDate?: SortOrder
    status?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LicensePoolAvgOrderByAggregateInput = {
    totalSeats?: SortOrder
    allocatedSeats?: SortOrder
    availableSeats?: SortOrder
    gracePeriodDays?: SortOrder
    pricePerSeat?: SortOrder
    totalAmount?: SortOrder
  }

  export type LicensePoolMaxOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    clientName?: SortOrder
    clientEmail?: SortOrder
    subscriptionId?: SortOrder
    productId?: SortOrder
    productName?: SortOrder
    productCode?: SortOrder
    licenseTypeId?: SortOrder
    licenseTypeName?: SortOrder
    totalSeats?: SortOrder
    allocatedSeats?: SortOrder
    availableSeats?: SortOrder
    poolKey?: SortOrder
    poolKeyHash?: SortOrder
    activationDate?: SortOrder
    expirationDate?: SortOrder
    gracePeriodDays?: SortOrder
    billingCycle?: SortOrder
    pricePerSeat?: SortOrder
    totalAmount?: SortOrder
    currency?: SortOrder
    subscriptionStatus?: SortOrder
    paymentStatus?: SortOrder
    autoRenew?: SortOrder
    nextBillingDate?: SortOrder
    status?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LicensePoolMinOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    clientName?: SortOrder
    clientEmail?: SortOrder
    subscriptionId?: SortOrder
    productId?: SortOrder
    productName?: SortOrder
    productCode?: SortOrder
    licenseTypeId?: SortOrder
    licenseTypeName?: SortOrder
    totalSeats?: SortOrder
    allocatedSeats?: SortOrder
    availableSeats?: SortOrder
    poolKey?: SortOrder
    poolKeyHash?: SortOrder
    activationDate?: SortOrder
    expirationDate?: SortOrder
    gracePeriodDays?: SortOrder
    billingCycle?: SortOrder
    pricePerSeat?: SortOrder
    totalAmount?: SortOrder
    currency?: SortOrder
    subscriptionStatus?: SortOrder
    paymentStatus?: SortOrder
    autoRenew?: SortOrder
    nextBillingDate?: SortOrder
    status?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LicensePoolSumOrderByAggregateInput = {
    totalSeats?: SortOrder
    allocatedSeats?: SortOrder
    availableSeats?: SortOrder
    gracePeriodDays?: SortOrder
    pricePerSeat?: SortOrder
    totalAmount?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumPoolStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PoolStatus | EnumPoolStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PoolStatus[] | ListEnumPoolStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PoolStatus[] | ListEnumPoolStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPoolStatusWithAggregatesFilter<$PrismaModel> | $Enums.PoolStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPoolStatusFilter<$PrismaModel>
    _max?: NestedEnumPoolStatusFilter<$PrismaModel>
  }

  export type EnumLicenseStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.LicenseStatus | EnumLicenseStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LicenseStatus[] | ListEnumLicenseStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.LicenseStatus[] | ListEnumLicenseStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumLicenseStatusFilter<$PrismaModel> | $Enums.LicenseStatus
  }

  export type LicensePoolNullableRelationFilter = {
    is?: LicensePoolWhereInput | null
    isNot?: LicensePoolWhereInput | null
  }

  export type LicenseDeviceListRelationFilter = {
    every?: LicenseDeviceWhereInput
    some?: LicenseDeviceWhereInput
    none?: LicenseDeviceWhereInput
  }

  export type LicenseSessionListRelationFilter = {
    every?: LicenseSessionWhereInput
    some?: LicenseSessionWhereInput
    none?: LicenseSessionWhereInput
  }

  export type LicenseActivationLogListRelationFilter = {
    every?: LicenseActivationLogWhereInput
    some?: LicenseActivationLogWhereInput
    none?: LicenseActivationLogWhereInput
  }

  export type LicenseDeviceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LicenseSessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LicenseActivationLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LicenseCountOrderByAggregateInput = {
    id?: SortOrder
    licenseKey?: SortOrder
    licenseKeyHash?: SortOrder
    clientId?: SortOrder
    clientName?: SortOrder
    productId?: SortOrder
    productName?: SortOrder
    productCode?: SortOrder
    licenseTypeId?: SortOrder
    licenseTypeName?: SortOrder
    status?: SortOrder
    poolId?: SortOrder
    userName?: SortOrder
    userEmail?: SortOrder
    deviceLimit?: SortOrder
    sessionLimit?: SortOrder
    deviceCount?: SortOrder
    currentSessions?: SortOrder
    lastActive?: SortOrder
    activationDate?: SortOrder
    expirationDate?: SortOrder
    boundHardwareId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LicenseAvgOrderByAggregateInput = {
    deviceLimit?: SortOrder
    sessionLimit?: SortOrder
    deviceCount?: SortOrder
    currentSessions?: SortOrder
  }

  export type LicenseMaxOrderByAggregateInput = {
    id?: SortOrder
    licenseKey?: SortOrder
    licenseKeyHash?: SortOrder
    clientId?: SortOrder
    clientName?: SortOrder
    productId?: SortOrder
    productName?: SortOrder
    productCode?: SortOrder
    licenseTypeId?: SortOrder
    licenseTypeName?: SortOrder
    status?: SortOrder
    poolId?: SortOrder
    userName?: SortOrder
    userEmail?: SortOrder
    deviceLimit?: SortOrder
    sessionLimit?: SortOrder
    deviceCount?: SortOrder
    currentSessions?: SortOrder
    lastActive?: SortOrder
    activationDate?: SortOrder
    expirationDate?: SortOrder
    boundHardwareId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LicenseMinOrderByAggregateInput = {
    id?: SortOrder
    licenseKey?: SortOrder
    licenseKeyHash?: SortOrder
    clientId?: SortOrder
    clientName?: SortOrder
    productId?: SortOrder
    productName?: SortOrder
    productCode?: SortOrder
    licenseTypeId?: SortOrder
    licenseTypeName?: SortOrder
    status?: SortOrder
    poolId?: SortOrder
    userName?: SortOrder
    userEmail?: SortOrder
    deviceLimit?: SortOrder
    sessionLimit?: SortOrder
    deviceCount?: SortOrder
    currentSessions?: SortOrder
    lastActive?: SortOrder
    activationDate?: SortOrder
    expirationDate?: SortOrder
    boundHardwareId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LicenseSumOrderByAggregateInput = {
    deviceLimit?: SortOrder
    sessionLimit?: SortOrder
    deviceCount?: SortOrder
    currentSessions?: SortOrder
  }

  export type EnumLicenseStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LicenseStatus | EnumLicenseStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LicenseStatus[] | ListEnumLicenseStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.LicenseStatus[] | ListEnumLicenseStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumLicenseStatusWithAggregatesFilter<$PrismaModel> | $Enums.LicenseStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLicenseStatusFilter<$PrismaModel>
    _max?: NestedEnumLicenseStatusFilter<$PrismaModel>
  }

  export type EnumDeviceTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.DeviceType | EnumDeviceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DeviceType[] | ListEnumDeviceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.DeviceType[] | ListEnumDeviceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumDeviceTypeFilter<$PrismaModel> | $Enums.DeviceType
  }

  export type EnumDeviceStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.DeviceStatus | EnumDeviceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DeviceStatus[] | ListEnumDeviceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DeviceStatus[] | ListEnumDeviceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDeviceStatusFilter<$PrismaModel> | $Enums.DeviceStatus
  }

  export type LicenseRelationFilter = {
    is?: LicenseWhereInput
    isNot?: LicenseWhereInput
  }

  export type LicenseDeviceLicenseIdMacAddressCompoundUniqueInput = {
    licenseId: string
    macAddress: string
  }

  export type LicenseDeviceCountOrderByAggregateInput = {
    id?: SortOrder
    licenseId?: SortOrder
    macAddress?: SortOrder
    ipAddress?: SortOrder
    hostname?: SortOrder
    location?: SortOrder
    deviceType?: SortOrder
    deviceName?: SortOrder
    osInfo?: SortOrder
    status?: SortOrder
    lastActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LicenseDeviceMaxOrderByAggregateInput = {
    id?: SortOrder
    licenseId?: SortOrder
    macAddress?: SortOrder
    ipAddress?: SortOrder
    hostname?: SortOrder
    location?: SortOrder
    deviceType?: SortOrder
    deviceName?: SortOrder
    osInfo?: SortOrder
    status?: SortOrder
    lastActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LicenseDeviceMinOrderByAggregateInput = {
    id?: SortOrder
    licenseId?: SortOrder
    macAddress?: SortOrder
    ipAddress?: SortOrder
    hostname?: SortOrder
    location?: SortOrder
    deviceType?: SortOrder
    deviceName?: SortOrder
    osInfo?: SortOrder
    status?: SortOrder
    lastActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumDeviceTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DeviceType | EnumDeviceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DeviceType[] | ListEnumDeviceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.DeviceType[] | ListEnumDeviceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumDeviceTypeWithAggregatesFilter<$PrismaModel> | $Enums.DeviceType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDeviceTypeFilter<$PrismaModel>
    _max?: NestedEnumDeviceTypeFilter<$PrismaModel>
  }

  export type EnumDeviceStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DeviceStatus | EnumDeviceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DeviceStatus[] | ListEnumDeviceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DeviceStatus[] | ListEnumDeviceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDeviceStatusWithAggregatesFilter<$PrismaModel> | $Enums.DeviceStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDeviceStatusFilter<$PrismaModel>
    _max?: NestedEnumDeviceStatusFilter<$PrismaModel>
  }

  export type LicenseSessionCountOrderByAggregateInput = {
    id?: SortOrder
    licenseId?: SortOrder
    sessionToken?: SortOrder
    deviceId?: SortOrder
    deviceName?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    location?: SortOrder
    startedAt?: SortOrder
    lastActivityAt?: SortOrder
    expiresAt?: SortOrder
    isActive?: SortOrder
    terminatedAt?: SortOrder
    terminatedBy?: SortOrder
    terminateReason?: SortOrder
  }

  export type LicenseSessionMaxOrderByAggregateInput = {
    id?: SortOrder
    licenseId?: SortOrder
    sessionToken?: SortOrder
    deviceId?: SortOrder
    deviceName?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    location?: SortOrder
    startedAt?: SortOrder
    lastActivityAt?: SortOrder
    expiresAt?: SortOrder
    isActive?: SortOrder
    terminatedAt?: SortOrder
    terminatedBy?: SortOrder
    terminateReason?: SortOrder
  }

  export type LicenseSessionMinOrderByAggregateInput = {
    id?: SortOrder
    licenseId?: SortOrder
    sessionToken?: SortOrder
    deviceId?: SortOrder
    deviceName?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    location?: SortOrder
    startedAt?: SortOrder
    lastActivityAt?: SortOrder
    expiresAt?: SortOrder
    isActive?: SortOrder
    terminatedAt?: SortOrder
    terminatedBy?: SortOrder
    terminateReason?: SortOrder
  }

  export type EnumAllocationActionFilter<$PrismaModel = never> = {
    equals?: $Enums.AllocationAction | EnumAllocationActionFieldRefInput<$PrismaModel>
    in?: $Enums.AllocationAction[] | ListEnumAllocationActionFieldRefInput<$PrismaModel>
    notIn?: $Enums.AllocationAction[] | ListEnumAllocationActionFieldRefInput<$PrismaModel>
    not?: NestedEnumAllocationActionFilter<$PrismaModel> | $Enums.AllocationAction
  }

  export type LicenseNullableRelationFilter = {
    is?: LicenseWhereInput | null
    isNot?: LicenseWhereInput | null
  }

  export type LicenseAllocationCountOrderByAggregateInput = {
    id?: SortOrder
    licenseId?: SortOrder
    poolId?: SortOrder
    clientId?: SortOrder
    employeeName?: SortOrder
    employeeEmail?: SortOrder
    employeeId?: SortOrder
    department?: SortOrder
    action?: SortOrder
    allocatedAt?: SortOrder
    allocatedById?: SortOrder
    allocatedByName?: SortOrder
    activatedAt?: SortOrder
    revokedAt?: SortOrder
    revokedById?: SortOrder
    revokedByName?: SortOrder
    revokeReason?: SortOrder
    transferredFrom?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LicenseAllocationMaxOrderByAggregateInput = {
    id?: SortOrder
    licenseId?: SortOrder
    poolId?: SortOrder
    clientId?: SortOrder
    employeeName?: SortOrder
    employeeEmail?: SortOrder
    employeeId?: SortOrder
    department?: SortOrder
    action?: SortOrder
    allocatedAt?: SortOrder
    allocatedById?: SortOrder
    allocatedByName?: SortOrder
    activatedAt?: SortOrder
    revokedAt?: SortOrder
    revokedById?: SortOrder
    revokedByName?: SortOrder
    revokeReason?: SortOrder
    transferredFrom?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LicenseAllocationMinOrderByAggregateInput = {
    id?: SortOrder
    licenseId?: SortOrder
    poolId?: SortOrder
    clientId?: SortOrder
    employeeName?: SortOrder
    employeeEmail?: SortOrder
    employeeId?: SortOrder
    department?: SortOrder
    action?: SortOrder
    allocatedAt?: SortOrder
    allocatedById?: SortOrder
    allocatedByName?: SortOrder
    activatedAt?: SortOrder
    revokedAt?: SortOrder
    revokedById?: SortOrder
    revokedByName?: SortOrder
    revokeReason?: SortOrder
    transferredFrom?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumAllocationActionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AllocationAction | EnumAllocationActionFieldRefInput<$PrismaModel>
    in?: $Enums.AllocationAction[] | ListEnumAllocationActionFieldRefInput<$PrismaModel>
    notIn?: $Enums.AllocationAction[] | ListEnumAllocationActionFieldRefInput<$PrismaModel>
    not?: NestedEnumAllocationActionWithAggregatesFilter<$PrismaModel> | $Enums.AllocationAction
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAllocationActionFilter<$PrismaModel>
    _max?: NestedEnumAllocationActionFilter<$PrismaModel>
  }

  export type LicenseActivationLogCountOrderByAggregateInput = {
    id?: SortOrder
    licenseId?: SortOrder
    action?: SortOrder
    deviceId?: SortOrder
    deviceType?: SortOrder
    deviceName?: SortOrder
    macAddress?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    location?: SortOrder
    success?: SortOrder
    errorMessage?: SortOrder
    performedBy?: SortOrder
    performedByName?: SortOrder
    timestamp?: SortOrder
  }

  export type LicenseActivationLogMaxOrderByAggregateInput = {
    id?: SortOrder
    licenseId?: SortOrder
    action?: SortOrder
    deviceId?: SortOrder
    deviceType?: SortOrder
    deviceName?: SortOrder
    macAddress?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    location?: SortOrder
    success?: SortOrder
    errorMessage?: SortOrder
    performedBy?: SortOrder
    performedByName?: SortOrder
    timestamp?: SortOrder
  }

  export type LicenseActivationLogMinOrderByAggregateInput = {
    id?: SortOrder
    licenseId?: SortOrder
    action?: SortOrder
    deviceId?: SortOrder
    deviceType?: SortOrder
    deviceName?: SortOrder
    macAddress?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    location?: SortOrder
    success?: SortOrder
    errorMessage?: SortOrder
    performedBy?: SortOrder
    performedByName?: SortOrder
    timestamp?: SortOrder
  }
  export type JsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type LicenseUsageStatsLicenseIdPeriodStartPeriodTypeCompoundUniqueInput = {
    licenseId: string
    periodStart: Date | string
    periodType: string
  }

  export type LicenseUsageStatsPoolIdPeriodStartPeriodTypeCompoundUniqueInput = {
    poolId: string
    periodStart: Date | string
    periodType: string
  }

  export type LicenseUsageStatsCountOrderByAggregateInput = {
    id?: SortOrder
    licenseId?: SortOrder
    poolId?: SortOrder
    clientId?: SortOrder
    productId?: SortOrder
    periodStart?: SortOrder
    periodEnd?: SortOrder
    periodType?: SortOrder
    activeUsers?: SortOrder
    totalSessions?: SortOrder
    totalDuration?: SortOrder
    peakConcurrent?: SortOrder
    featureUsage?: SortOrder
    createdAt?: SortOrder
  }

  export type LicenseUsageStatsAvgOrderByAggregateInput = {
    activeUsers?: SortOrder
    totalSessions?: SortOrder
    totalDuration?: SortOrder
    peakConcurrent?: SortOrder
  }

  export type LicenseUsageStatsMaxOrderByAggregateInput = {
    id?: SortOrder
    licenseId?: SortOrder
    poolId?: SortOrder
    clientId?: SortOrder
    productId?: SortOrder
    periodStart?: SortOrder
    periodEnd?: SortOrder
    periodType?: SortOrder
    activeUsers?: SortOrder
    totalSessions?: SortOrder
    totalDuration?: SortOrder
    peakConcurrent?: SortOrder
    createdAt?: SortOrder
  }

  export type LicenseUsageStatsMinOrderByAggregateInput = {
    id?: SortOrder
    licenseId?: SortOrder
    poolId?: SortOrder
    clientId?: SortOrder
    productId?: SortOrder
    periodStart?: SortOrder
    periodEnd?: SortOrder
    periodType?: SortOrder
    activeUsers?: SortOrder
    totalSessions?: SortOrder
    totalDuration?: SortOrder
    peakConcurrent?: SortOrder
    createdAt?: SortOrder
  }

  export type LicenseUsageStatsSumOrderByAggregateInput = {
    activeUsers?: SortOrder
    totalSessions?: SortOrder
    totalDuration?: SortOrder
    peakConcurrent?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type LicensePoolCreatefeaturesInput = {
    set: string[]
  }

  export type LicensePoolCreateselectedFeaturesInput = {
    set: string[]
  }

  export type LicenseCreateNestedManyWithoutPoolInput = {
    create?: XOR<LicenseCreateWithoutPoolInput, LicenseUncheckedCreateWithoutPoolInput> | LicenseCreateWithoutPoolInput[] | LicenseUncheckedCreateWithoutPoolInput[]
    connectOrCreate?: LicenseCreateOrConnectWithoutPoolInput | LicenseCreateOrConnectWithoutPoolInput[]
    createMany?: LicenseCreateManyPoolInputEnvelope
    connect?: LicenseWhereUniqueInput | LicenseWhereUniqueInput[]
  }

  export type LicenseAllocationCreateNestedManyWithoutPoolInput = {
    create?: XOR<LicenseAllocationCreateWithoutPoolInput, LicenseAllocationUncheckedCreateWithoutPoolInput> | LicenseAllocationCreateWithoutPoolInput[] | LicenseAllocationUncheckedCreateWithoutPoolInput[]
    connectOrCreate?: LicenseAllocationCreateOrConnectWithoutPoolInput | LicenseAllocationCreateOrConnectWithoutPoolInput[]
    createMany?: LicenseAllocationCreateManyPoolInputEnvelope
    connect?: LicenseAllocationWhereUniqueInput | LicenseAllocationWhereUniqueInput[]
  }

  export type LicenseUncheckedCreateNestedManyWithoutPoolInput = {
    create?: XOR<LicenseCreateWithoutPoolInput, LicenseUncheckedCreateWithoutPoolInput> | LicenseCreateWithoutPoolInput[] | LicenseUncheckedCreateWithoutPoolInput[]
    connectOrCreate?: LicenseCreateOrConnectWithoutPoolInput | LicenseCreateOrConnectWithoutPoolInput[]
    createMany?: LicenseCreateManyPoolInputEnvelope
    connect?: LicenseWhereUniqueInput | LicenseWhereUniqueInput[]
  }

  export type LicenseAllocationUncheckedCreateNestedManyWithoutPoolInput = {
    create?: XOR<LicenseAllocationCreateWithoutPoolInput, LicenseAllocationUncheckedCreateWithoutPoolInput> | LicenseAllocationCreateWithoutPoolInput[] | LicenseAllocationUncheckedCreateWithoutPoolInput[]
    connectOrCreate?: LicenseAllocationCreateOrConnectWithoutPoolInput | LicenseAllocationCreateOrConnectWithoutPoolInput[]
    createMany?: LicenseAllocationCreateManyPoolInputEnvelope
    connect?: LicenseAllocationWhereUniqueInput | LicenseAllocationWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type LicensePoolUpdatefeaturesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type LicensePoolUpdateselectedFeaturesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type EnumPoolStatusFieldUpdateOperationsInput = {
    set?: $Enums.PoolStatus
  }

  export type LicenseUpdateManyWithoutPoolNestedInput = {
    create?: XOR<LicenseCreateWithoutPoolInput, LicenseUncheckedCreateWithoutPoolInput> | LicenseCreateWithoutPoolInput[] | LicenseUncheckedCreateWithoutPoolInput[]
    connectOrCreate?: LicenseCreateOrConnectWithoutPoolInput | LicenseCreateOrConnectWithoutPoolInput[]
    upsert?: LicenseUpsertWithWhereUniqueWithoutPoolInput | LicenseUpsertWithWhereUniqueWithoutPoolInput[]
    createMany?: LicenseCreateManyPoolInputEnvelope
    set?: LicenseWhereUniqueInput | LicenseWhereUniqueInput[]
    disconnect?: LicenseWhereUniqueInput | LicenseWhereUniqueInput[]
    delete?: LicenseWhereUniqueInput | LicenseWhereUniqueInput[]
    connect?: LicenseWhereUniqueInput | LicenseWhereUniqueInput[]
    update?: LicenseUpdateWithWhereUniqueWithoutPoolInput | LicenseUpdateWithWhereUniqueWithoutPoolInput[]
    updateMany?: LicenseUpdateManyWithWhereWithoutPoolInput | LicenseUpdateManyWithWhereWithoutPoolInput[]
    deleteMany?: LicenseScalarWhereInput | LicenseScalarWhereInput[]
  }

  export type LicenseAllocationUpdateManyWithoutPoolNestedInput = {
    create?: XOR<LicenseAllocationCreateWithoutPoolInput, LicenseAllocationUncheckedCreateWithoutPoolInput> | LicenseAllocationCreateWithoutPoolInput[] | LicenseAllocationUncheckedCreateWithoutPoolInput[]
    connectOrCreate?: LicenseAllocationCreateOrConnectWithoutPoolInput | LicenseAllocationCreateOrConnectWithoutPoolInput[]
    upsert?: LicenseAllocationUpsertWithWhereUniqueWithoutPoolInput | LicenseAllocationUpsertWithWhereUniqueWithoutPoolInput[]
    createMany?: LicenseAllocationCreateManyPoolInputEnvelope
    set?: LicenseAllocationWhereUniqueInput | LicenseAllocationWhereUniqueInput[]
    disconnect?: LicenseAllocationWhereUniqueInput | LicenseAllocationWhereUniqueInput[]
    delete?: LicenseAllocationWhereUniqueInput | LicenseAllocationWhereUniqueInput[]
    connect?: LicenseAllocationWhereUniqueInput | LicenseAllocationWhereUniqueInput[]
    update?: LicenseAllocationUpdateWithWhereUniqueWithoutPoolInput | LicenseAllocationUpdateWithWhereUniqueWithoutPoolInput[]
    updateMany?: LicenseAllocationUpdateManyWithWhereWithoutPoolInput | LicenseAllocationUpdateManyWithWhereWithoutPoolInput[]
    deleteMany?: LicenseAllocationScalarWhereInput | LicenseAllocationScalarWhereInput[]
  }

  export type LicenseUncheckedUpdateManyWithoutPoolNestedInput = {
    create?: XOR<LicenseCreateWithoutPoolInput, LicenseUncheckedCreateWithoutPoolInput> | LicenseCreateWithoutPoolInput[] | LicenseUncheckedCreateWithoutPoolInput[]
    connectOrCreate?: LicenseCreateOrConnectWithoutPoolInput | LicenseCreateOrConnectWithoutPoolInput[]
    upsert?: LicenseUpsertWithWhereUniqueWithoutPoolInput | LicenseUpsertWithWhereUniqueWithoutPoolInput[]
    createMany?: LicenseCreateManyPoolInputEnvelope
    set?: LicenseWhereUniqueInput | LicenseWhereUniqueInput[]
    disconnect?: LicenseWhereUniqueInput | LicenseWhereUniqueInput[]
    delete?: LicenseWhereUniqueInput | LicenseWhereUniqueInput[]
    connect?: LicenseWhereUniqueInput | LicenseWhereUniqueInput[]
    update?: LicenseUpdateWithWhereUniqueWithoutPoolInput | LicenseUpdateWithWhereUniqueWithoutPoolInput[]
    updateMany?: LicenseUpdateManyWithWhereWithoutPoolInput | LicenseUpdateManyWithWhereWithoutPoolInput[]
    deleteMany?: LicenseScalarWhereInput | LicenseScalarWhereInput[]
  }

  export type LicenseAllocationUncheckedUpdateManyWithoutPoolNestedInput = {
    create?: XOR<LicenseAllocationCreateWithoutPoolInput, LicenseAllocationUncheckedCreateWithoutPoolInput> | LicenseAllocationCreateWithoutPoolInput[] | LicenseAllocationUncheckedCreateWithoutPoolInput[]
    connectOrCreate?: LicenseAllocationCreateOrConnectWithoutPoolInput | LicenseAllocationCreateOrConnectWithoutPoolInput[]
    upsert?: LicenseAllocationUpsertWithWhereUniqueWithoutPoolInput | LicenseAllocationUpsertWithWhereUniqueWithoutPoolInput[]
    createMany?: LicenseAllocationCreateManyPoolInputEnvelope
    set?: LicenseAllocationWhereUniqueInput | LicenseAllocationWhereUniqueInput[]
    disconnect?: LicenseAllocationWhereUniqueInput | LicenseAllocationWhereUniqueInput[]
    delete?: LicenseAllocationWhereUniqueInput | LicenseAllocationWhereUniqueInput[]
    connect?: LicenseAllocationWhereUniqueInput | LicenseAllocationWhereUniqueInput[]
    update?: LicenseAllocationUpdateWithWhereUniqueWithoutPoolInput | LicenseAllocationUpdateWithWhereUniqueWithoutPoolInput[]
    updateMany?: LicenseAllocationUpdateManyWithWhereWithoutPoolInput | LicenseAllocationUpdateManyWithWhereWithoutPoolInput[]
    deleteMany?: LicenseAllocationScalarWhereInput | LicenseAllocationScalarWhereInput[]
  }

  export type LicensePoolCreateNestedOneWithoutLicensesInput = {
    create?: XOR<LicensePoolCreateWithoutLicensesInput, LicensePoolUncheckedCreateWithoutLicensesInput>
    connectOrCreate?: LicensePoolCreateOrConnectWithoutLicensesInput
    connect?: LicensePoolWhereUniqueInput
  }

  export type LicenseDeviceCreateNestedManyWithoutLicenseInput = {
    create?: XOR<LicenseDeviceCreateWithoutLicenseInput, LicenseDeviceUncheckedCreateWithoutLicenseInput> | LicenseDeviceCreateWithoutLicenseInput[] | LicenseDeviceUncheckedCreateWithoutLicenseInput[]
    connectOrCreate?: LicenseDeviceCreateOrConnectWithoutLicenseInput | LicenseDeviceCreateOrConnectWithoutLicenseInput[]
    createMany?: LicenseDeviceCreateManyLicenseInputEnvelope
    connect?: LicenseDeviceWhereUniqueInput | LicenseDeviceWhereUniqueInput[]
  }

  export type LicenseSessionCreateNestedManyWithoutLicenseInput = {
    create?: XOR<LicenseSessionCreateWithoutLicenseInput, LicenseSessionUncheckedCreateWithoutLicenseInput> | LicenseSessionCreateWithoutLicenseInput[] | LicenseSessionUncheckedCreateWithoutLicenseInput[]
    connectOrCreate?: LicenseSessionCreateOrConnectWithoutLicenseInput | LicenseSessionCreateOrConnectWithoutLicenseInput[]
    createMany?: LicenseSessionCreateManyLicenseInputEnvelope
    connect?: LicenseSessionWhereUniqueInput | LicenseSessionWhereUniqueInput[]
  }

  export type LicenseAllocationCreateNestedManyWithoutLicenseInput = {
    create?: XOR<LicenseAllocationCreateWithoutLicenseInput, LicenseAllocationUncheckedCreateWithoutLicenseInput> | LicenseAllocationCreateWithoutLicenseInput[] | LicenseAllocationUncheckedCreateWithoutLicenseInput[]
    connectOrCreate?: LicenseAllocationCreateOrConnectWithoutLicenseInput | LicenseAllocationCreateOrConnectWithoutLicenseInput[]
    createMany?: LicenseAllocationCreateManyLicenseInputEnvelope
    connect?: LicenseAllocationWhereUniqueInput | LicenseAllocationWhereUniqueInput[]
  }

  export type LicenseActivationLogCreateNestedManyWithoutLicenseInput = {
    create?: XOR<LicenseActivationLogCreateWithoutLicenseInput, LicenseActivationLogUncheckedCreateWithoutLicenseInput> | LicenseActivationLogCreateWithoutLicenseInput[] | LicenseActivationLogUncheckedCreateWithoutLicenseInput[]
    connectOrCreate?: LicenseActivationLogCreateOrConnectWithoutLicenseInput | LicenseActivationLogCreateOrConnectWithoutLicenseInput[]
    createMany?: LicenseActivationLogCreateManyLicenseInputEnvelope
    connect?: LicenseActivationLogWhereUniqueInput | LicenseActivationLogWhereUniqueInput[]
  }

  export type LicenseDeviceUncheckedCreateNestedManyWithoutLicenseInput = {
    create?: XOR<LicenseDeviceCreateWithoutLicenseInput, LicenseDeviceUncheckedCreateWithoutLicenseInput> | LicenseDeviceCreateWithoutLicenseInput[] | LicenseDeviceUncheckedCreateWithoutLicenseInput[]
    connectOrCreate?: LicenseDeviceCreateOrConnectWithoutLicenseInput | LicenseDeviceCreateOrConnectWithoutLicenseInput[]
    createMany?: LicenseDeviceCreateManyLicenseInputEnvelope
    connect?: LicenseDeviceWhereUniqueInput | LicenseDeviceWhereUniqueInput[]
  }

  export type LicenseSessionUncheckedCreateNestedManyWithoutLicenseInput = {
    create?: XOR<LicenseSessionCreateWithoutLicenseInput, LicenseSessionUncheckedCreateWithoutLicenseInput> | LicenseSessionCreateWithoutLicenseInput[] | LicenseSessionUncheckedCreateWithoutLicenseInput[]
    connectOrCreate?: LicenseSessionCreateOrConnectWithoutLicenseInput | LicenseSessionCreateOrConnectWithoutLicenseInput[]
    createMany?: LicenseSessionCreateManyLicenseInputEnvelope
    connect?: LicenseSessionWhereUniqueInput | LicenseSessionWhereUniqueInput[]
  }

  export type LicenseAllocationUncheckedCreateNestedManyWithoutLicenseInput = {
    create?: XOR<LicenseAllocationCreateWithoutLicenseInput, LicenseAllocationUncheckedCreateWithoutLicenseInput> | LicenseAllocationCreateWithoutLicenseInput[] | LicenseAllocationUncheckedCreateWithoutLicenseInput[]
    connectOrCreate?: LicenseAllocationCreateOrConnectWithoutLicenseInput | LicenseAllocationCreateOrConnectWithoutLicenseInput[]
    createMany?: LicenseAllocationCreateManyLicenseInputEnvelope
    connect?: LicenseAllocationWhereUniqueInput | LicenseAllocationWhereUniqueInput[]
  }

  export type LicenseActivationLogUncheckedCreateNestedManyWithoutLicenseInput = {
    create?: XOR<LicenseActivationLogCreateWithoutLicenseInput, LicenseActivationLogUncheckedCreateWithoutLicenseInput> | LicenseActivationLogCreateWithoutLicenseInput[] | LicenseActivationLogUncheckedCreateWithoutLicenseInput[]
    connectOrCreate?: LicenseActivationLogCreateOrConnectWithoutLicenseInput | LicenseActivationLogCreateOrConnectWithoutLicenseInput[]
    createMany?: LicenseActivationLogCreateManyLicenseInputEnvelope
    connect?: LicenseActivationLogWhereUniqueInput | LicenseActivationLogWhereUniqueInput[]
  }

  export type EnumLicenseStatusFieldUpdateOperationsInput = {
    set?: $Enums.LicenseStatus
  }

  export type LicensePoolUpdateOneWithoutLicensesNestedInput = {
    create?: XOR<LicensePoolCreateWithoutLicensesInput, LicensePoolUncheckedCreateWithoutLicensesInput>
    connectOrCreate?: LicensePoolCreateOrConnectWithoutLicensesInput
    upsert?: LicensePoolUpsertWithoutLicensesInput
    disconnect?: LicensePoolWhereInput | boolean
    delete?: LicensePoolWhereInput | boolean
    connect?: LicensePoolWhereUniqueInput
    update?: XOR<XOR<LicensePoolUpdateToOneWithWhereWithoutLicensesInput, LicensePoolUpdateWithoutLicensesInput>, LicensePoolUncheckedUpdateWithoutLicensesInput>
  }

  export type LicenseDeviceUpdateManyWithoutLicenseNestedInput = {
    create?: XOR<LicenseDeviceCreateWithoutLicenseInput, LicenseDeviceUncheckedCreateWithoutLicenseInput> | LicenseDeviceCreateWithoutLicenseInput[] | LicenseDeviceUncheckedCreateWithoutLicenseInput[]
    connectOrCreate?: LicenseDeviceCreateOrConnectWithoutLicenseInput | LicenseDeviceCreateOrConnectWithoutLicenseInput[]
    upsert?: LicenseDeviceUpsertWithWhereUniqueWithoutLicenseInput | LicenseDeviceUpsertWithWhereUniqueWithoutLicenseInput[]
    createMany?: LicenseDeviceCreateManyLicenseInputEnvelope
    set?: LicenseDeviceWhereUniqueInput | LicenseDeviceWhereUniqueInput[]
    disconnect?: LicenseDeviceWhereUniqueInput | LicenseDeviceWhereUniqueInput[]
    delete?: LicenseDeviceWhereUniqueInput | LicenseDeviceWhereUniqueInput[]
    connect?: LicenseDeviceWhereUniqueInput | LicenseDeviceWhereUniqueInput[]
    update?: LicenseDeviceUpdateWithWhereUniqueWithoutLicenseInput | LicenseDeviceUpdateWithWhereUniqueWithoutLicenseInput[]
    updateMany?: LicenseDeviceUpdateManyWithWhereWithoutLicenseInput | LicenseDeviceUpdateManyWithWhereWithoutLicenseInput[]
    deleteMany?: LicenseDeviceScalarWhereInput | LicenseDeviceScalarWhereInput[]
  }

  export type LicenseSessionUpdateManyWithoutLicenseNestedInput = {
    create?: XOR<LicenseSessionCreateWithoutLicenseInput, LicenseSessionUncheckedCreateWithoutLicenseInput> | LicenseSessionCreateWithoutLicenseInput[] | LicenseSessionUncheckedCreateWithoutLicenseInput[]
    connectOrCreate?: LicenseSessionCreateOrConnectWithoutLicenseInput | LicenseSessionCreateOrConnectWithoutLicenseInput[]
    upsert?: LicenseSessionUpsertWithWhereUniqueWithoutLicenseInput | LicenseSessionUpsertWithWhereUniqueWithoutLicenseInput[]
    createMany?: LicenseSessionCreateManyLicenseInputEnvelope
    set?: LicenseSessionWhereUniqueInput | LicenseSessionWhereUniqueInput[]
    disconnect?: LicenseSessionWhereUniqueInput | LicenseSessionWhereUniqueInput[]
    delete?: LicenseSessionWhereUniqueInput | LicenseSessionWhereUniqueInput[]
    connect?: LicenseSessionWhereUniqueInput | LicenseSessionWhereUniqueInput[]
    update?: LicenseSessionUpdateWithWhereUniqueWithoutLicenseInput | LicenseSessionUpdateWithWhereUniqueWithoutLicenseInput[]
    updateMany?: LicenseSessionUpdateManyWithWhereWithoutLicenseInput | LicenseSessionUpdateManyWithWhereWithoutLicenseInput[]
    deleteMany?: LicenseSessionScalarWhereInput | LicenseSessionScalarWhereInput[]
  }

  export type LicenseAllocationUpdateManyWithoutLicenseNestedInput = {
    create?: XOR<LicenseAllocationCreateWithoutLicenseInput, LicenseAllocationUncheckedCreateWithoutLicenseInput> | LicenseAllocationCreateWithoutLicenseInput[] | LicenseAllocationUncheckedCreateWithoutLicenseInput[]
    connectOrCreate?: LicenseAllocationCreateOrConnectWithoutLicenseInput | LicenseAllocationCreateOrConnectWithoutLicenseInput[]
    upsert?: LicenseAllocationUpsertWithWhereUniqueWithoutLicenseInput | LicenseAllocationUpsertWithWhereUniqueWithoutLicenseInput[]
    createMany?: LicenseAllocationCreateManyLicenseInputEnvelope
    set?: LicenseAllocationWhereUniqueInput | LicenseAllocationWhereUniqueInput[]
    disconnect?: LicenseAllocationWhereUniqueInput | LicenseAllocationWhereUniqueInput[]
    delete?: LicenseAllocationWhereUniqueInput | LicenseAllocationWhereUniqueInput[]
    connect?: LicenseAllocationWhereUniqueInput | LicenseAllocationWhereUniqueInput[]
    update?: LicenseAllocationUpdateWithWhereUniqueWithoutLicenseInput | LicenseAllocationUpdateWithWhereUniqueWithoutLicenseInput[]
    updateMany?: LicenseAllocationUpdateManyWithWhereWithoutLicenseInput | LicenseAllocationUpdateManyWithWhereWithoutLicenseInput[]
    deleteMany?: LicenseAllocationScalarWhereInput | LicenseAllocationScalarWhereInput[]
  }

  export type LicenseActivationLogUpdateManyWithoutLicenseNestedInput = {
    create?: XOR<LicenseActivationLogCreateWithoutLicenseInput, LicenseActivationLogUncheckedCreateWithoutLicenseInput> | LicenseActivationLogCreateWithoutLicenseInput[] | LicenseActivationLogUncheckedCreateWithoutLicenseInput[]
    connectOrCreate?: LicenseActivationLogCreateOrConnectWithoutLicenseInput | LicenseActivationLogCreateOrConnectWithoutLicenseInput[]
    upsert?: LicenseActivationLogUpsertWithWhereUniqueWithoutLicenseInput | LicenseActivationLogUpsertWithWhereUniqueWithoutLicenseInput[]
    createMany?: LicenseActivationLogCreateManyLicenseInputEnvelope
    set?: LicenseActivationLogWhereUniqueInput | LicenseActivationLogWhereUniqueInput[]
    disconnect?: LicenseActivationLogWhereUniqueInput | LicenseActivationLogWhereUniqueInput[]
    delete?: LicenseActivationLogWhereUniqueInput | LicenseActivationLogWhereUniqueInput[]
    connect?: LicenseActivationLogWhereUniqueInput | LicenseActivationLogWhereUniqueInput[]
    update?: LicenseActivationLogUpdateWithWhereUniqueWithoutLicenseInput | LicenseActivationLogUpdateWithWhereUniqueWithoutLicenseInput[]
    updateMany?: LicenseActivationLogUpdateManyWithWhereWithoutLicenseInput | LicenseActivationLogUpdateManyWithWhereWithoutLicenseInput[]
    deleteMany?: LicenseActivationLogScalarWhereInput | LicenseActivationLogScalarWhereInput[]
  }

  export type LicenseDeviceUncheckedUpdateManyWithoutLicenseNestedInput = {
    create?: XOR<LicenseDeviceCreateWithoutLicenseInput, LicenseDeviceUncheckedCreateWithoutLicenseInput> | LicenseDeviceCreateWithoutLicenseInput[] | LicenseDeviceUncheckedCreateWithoutLicenseInput[]
    connectOrCreate?: LicenseDeviceCreateOrConnectWithoutLicenseInput | LicenseDeviceCreateOrConnectWithoutLicenseInput[]
    upsert?: LicenseDeviceUpsertWithWhereUniqueWithoutLicenseInput | LicenseDeviceUpsertWithWhereUniqueWithoutLicenseInput[]
    createMany?: LicenseDeviceCreateManyLicenseInputEnvelope
    set?: LicenseDeviceWhereUniqueInput | LicenseDeviceWhereUniqueInput[]
    disconnect?: LicenseDeviceWhereUniqueInput | LicenseDeviceWhereUniqueInput[]
    delete?: LicenseDeviceWhereUniqueInput | LicenseDeviceWhereUniqueInput[]
    connect?: LicenseDeviceWhereUniqueInput | LicenseDeviceWhereUniqueInput[]
    update?: LicenseDeviceUpdateWithWhereUniqueWithoutLicenseInput | LicenseDeviceUpdateWithWhereUniqueWithoutLicenseInput[]
    updateMany?: LicenseDeviceUpdateManyWithWhereWithoutLicenseInput | LicenseDeviceUpdateManyWithWhereWithoutLicenseInput[]
    deleteMany?: LicenseDeviceScalarWhereInput | LicenseDeviceScalarWhereInput[]
  }

  export type LicenseSessionUncheckedUpdateManyWithoutLicenseNestedInput = {
    create?: XOR<LicenseSessionCreateWithoutLicenseInput, LicenseSessionUncheckedCreateWithoutLicenseInput> | LicenseSessionCreateWithoutLicenseInput[] | LicenseSessionUncheckedCreateWithoutLicenseInput[]
    connectOrCreate?: LicenseSessionCreateOrConnectWithoutLicenseInput | LicenseSessionCreateOrConnectWithoutLicenseInput[]
    upsert?: LicenseSessionUpsertWithWhereUniqueWithoutLicenseInput | LicenseSessionUpsertWithWhereUniqueWithoutLicenseInput[]
    createMany?: LicenseSessionCreateManyLicenseInputEnvelope
    set?: LicenseSessionWhereUniqueInput | LicenseSessionWhereUniqueInput[]
    disconnect?: LicenseSessionWhereUniqueInput | LicenseSessionWhereUniqueInput[]
    delete?: LicenseSessionWhereUniqueInput | LicenseSessionWhereUniqueInput[]
    connect?: LicenseSessionWhereUniqueInput | LicenseSessionWhereUniqueInput[]
    update?: LicenseSessionUpdateWithWhereUniqueWithoutLicenseInput | LicenseSessionUpdateWithWhereUniqueWithoutLicenseInput[]
    updateMany?: LicenseSessionUpdateManyWithWhereWithoutLicenseInput | LicenseSessionUpdateManyWithWhereWithoutLicenseInput[]
    deleteMany?: LicenseSessionScalarWhereInput | LicenseSessionScalarWhereInput[]
  }

  export type LicenseAllocationUncheckedUpdateManyWithoutLicenseNestedInput = {
    create?: XOR<LicenseAllocationCreateWithoutLicenseInput, LicenseAllocationUncheckedCreateWithoutLicenseInput> | LicenseAllocationCreateWithoutLicenseInput[] | LicenseAllocationUncheckedCreateWithoutLicenseInput[]
    connectOrCreate?: LicenseAllocationCreateOrConnectWithoutLicenseInput | LicenseAllocationCreateOrConnectWithoutLicenseInput[]
    upsert?: LicenseAllocationUpsertWithWhereUniqueWithoutLicenseInput | LicenseAllocationUpsertWithWhereUniqueWithoutLicenseInput[]
    createMany?: LicenseAllocationCreateManyLicenseInputEnvelope
    set?: LicenseAllocationWhereUniqueInput | LicenseAllocationWhereUniqueInput[]
    disconnect?: LicenseAllocationWhereUniqueInput | LicenseAllocationWhereUniqueInput[]
    delete?: LicenseAllocationWhereUniqueInput | LicenseAllocationWhereUniqueInput[]
    connect?: LicenseAllocationWhereUniqueInput | LicenseAllocationWhereUniqueInput[]
    update?: LicenseAllocationUpdateWithWhereUniqueWithoutLicenseInput | LicenseAllocationUpdateWithWhereUniqueWithoutLicenseInput[]
    updateMany?: LicenseAllocationUpdateManyWithWhereWithoutLicenseInput | LicenseAllocationUpdateManyWithWhereWithoutLicenseInput[]
    deleteMany?: LicenseAllocationScalarWhereInput | LicenseAllocationScalarWhereInput[]
  }

  export type LicenseActivationLogUncheckedUpdateManyWithoutLicenseNestedInput = {
    create?: XOR<LicenseActivationLogCreateWithoutLicenseInput, LicenseActivationLogUncheckedCreateWithoutLicenseInput> | LicenseActivationLogCreateWithoutLicenseInput[] | LicenseActivationLogUncheckedCreateWithoutLicenseInput[]
    connectOrCreate?: LicenseActivationLogCreateOrConnectWithoutLicenseInput | LicenseActivationLogCreateOrConnectWithoutLicenseInput[]
    upsert?: LicenseActivationLogUpsertWithWhereUniqueWithoutLicenseInput | LicenseActivationLogUpsertWithWhereUniqueWithoutLicenseInput[]
    createMany?: LicenseActivationLogCreateManyLicenseInputEnvelope
    set?: LicenseActivationLogWhereUniqueInput | LicenseActivationLogWhereUniqueInput[]
    disconnect?: LicenseActivationLogWhereUniqueInput | LicenseActivationLogWhereUniqueInput[]
    delete?: LicenseActivationLogWhereUniqueInput | LicenseActivationLogWhereUniqueInput[]
    connect?: LicenseActivationLogWhereUniqueInput | LicenseActivationLogWhereUniqueInput[]
    update?: LicenseActivationLogUpdateWithWhereUniqueWithoutLicenseInput | LicenseActivationLogUpdateWithWhereUniqueWithoutLicenseInput[]
    updateMany?: LicenseActivationLogUpdateManyWithWhereWithoutLicenseInput | LicenseActivationLogUpdateManyWithWhereWithoutLicenseInput[]
    deleteMany?: LicenseActivationLogScalarWhereInput | LicenseActivationLogScalarWhereInput[]
  }

  export type LicenseCreateNestedOneWithoutDevicesInput = {
    create?: XOR<LicenseCreateWithoutDevicesInput, LicenseUncheckedCreateWithoutDevicesInput>
    connectOrCreate?: LicenseCreateOrConnectWithoutDevicesInput
    connect?: LicenseWhereUniqueInput
  }

  export type EnumDeviceTypeFieldUpdateOperationsInput = {
    set?: $Enums.DeviceType
  }

  export type EnumDeviceStatusFieldUpdateOperationsInput = {
    set?: $Enums.DeviceStatus
  }

  export type LicenseUpdateOneRequiredWithoutDevicesNestedInput = {
    create?: XOR<LicenseCreateWithoutDevicesInput, LicenseUncheckedCreateWithoutDevicesInput>
    connectOrCreate?: LicenseCreateOrConnectWithoutDevicesInput
    upsert?: LicenseUpsertWithoutDevicesInput
    connect?: LicenseWhereUniqueInput
    update?: XOR<XOR<LicenseUpdateToOneWithWhereWithoutDevicesInput, LicenseUpdateWithoutDevicesInput>, LicenseUncheckedUpdateWithoutDevicesInput>
  }

  export type LicenseCreateNestedOneWithoutSessionsInput = {
    create?: XOR<LicenseCreateWithoutSessionsInput, LicenseUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: LicenseCreateOrConnectWithoutSessionsInput
    connect?: LicenseWhereUniqueInput
  }

  export type LicenseUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<LicenseCreateWithoutSessionsInput, LicenseUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: LicenseCreateOrConnectWithoutSessionsInput
    upsert?: LicenseUpsertWithoutSessionsInput
    connect?: LicenseWhereUniqueInput
    update?: XOR<XOR<LicenseUpdateToOneWithWhereWithoutSessionsInput, LicenseUpdateWithoutSessionsInput>, LicenseUncheckedUpdateWithoutSessionsInput>
  }

  export type LicenseCreateNestedOneWithoutAllocationsInput = {
    create?: XOR<LicenseCreateWithoutAllocationsInput, LicenseUncheckedCreateWithoutAllocationsInput>
    connectOrCreate?: LicenseCreateOrConnectWithoutAllocationsInput
    connect?: LicenseWhereUniqueInput
  }

  export type LicensePoolCreateNestedOneWithoutAllocationsInput = {
    create?: XOR<LicensePoolCreateWithoutAllocationsInput, LicensePoolUncheckedCreateWithoutAllocationsInput>
    connectOrCreate?: LicensePoolCreateOrConnectWithoutAllocationsInput
    connect?: LicensePoolWhereUniqueInput
  }

  export type EnumAllocationActionFieldUpdateOperationsInput = {
    set?: $Enums.AllocationAction
  }

  export type LicenseUpdateOneWithoutAllocationsNestedInput = {
    create?: XOR<LicenseCreateWithoutAllocationsInput, LicenseUncheckedCreateWithoutAllocationsInput>
    connectOrCreate?: LicenseCreateOrConnectWithoutAllocationsInput
    upsert?: LicenseUpsertWithoutAllocationsInput
    disconnect?: LicenseWhereInput | boolean
    delete?: LicenseWhereInput | boolean
    connect?: LicenseWhereUniqueInput
    update?: XOR<XOR<LicenseUpdateToOneWithWhereWithoutAllocationsInput, LicenseUpdateWithoutAllocationsInput>, LicenseUncheckedUpdateWithoutAllocationsInput>
  }

  export type LicensePoolUpdateOneWithoutAllocationsNestedInput = {
    create?: XOR<LicensePoolCreateWithoutAllocationsInput, LicensePoolUncheckedCreateWithoutAllocationsInput>
    connectOrCreate?: LicensePoolCreateOrConnectWithoutAllocationsInput
    upsert?: LicensePoolUpsertWithoutAllocationsInput
    disconnect?: LicensePoolWhereInput | boolean
    delete?: LicensePoolWhereInput | boolean
    connect?: LicensePoolWhereUniqueInput
    update?: XOR<XOR<LicensePoolUpdateToOneWithWhereWithoutAllocationsInput, LicensePoolUpdateWithoutAllocationsInput>, LicensePoolUncheckedUpdateWithoutAllocationsInput>
  }

  export type LicenseCreateNestedOneWithoutActivationLogsInput = {
    create?: XOR<LicenseCreateWithoutActivationLogsInput, LicenseUncheckedCreateWithoutActivationLogsInput>
    connectOrCreate?: LicenseCreateOrConnectWithoutActivationLogsInput
    connect?: LicenseWhereUniqueInput
  }

  export type LicenseUpdateOneRequiredWithoutActivationLogsNestedInput = {
    create?: XOR<LicenseCreateWithoutActivationLogsInput, LicenseUncheckedCreateWithoutActivationLogsInput>
    connectOrCreate?: LicenseCreateOrConnectWithoutActivationLogsInput
    upsert?: LicenseUpsertWithoutActivationLogsInput
    connect?: LicenseWhereUniqueInput
    update?: XOR<XOR<LicenseUpdateToOneWithWhereWithoutActivationLogsInput, LicenseUpdateWithoutActivationLogsInput>, LicenseUncheckedUpdateWithoutActivationLogsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumPoolStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PoolStatus | EnumPoolStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PoolStatus[] | ListEnumPoolStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PoolStatus[] | ListEnumPoolStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPoolStatusFilter<$PrismaModel> | $Enums.PoolStatus
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumPoolStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PoolStatus | EnumPoolStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PoolStatus[] | ListEnumPoolStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PoolStatus[] | ListEnumPoolStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPoolStatusWithAggregatesFilter<$PrismaModel> | $Enums.PoolStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPoolStatusFilter<$PrismaModel>
    _max?: NestedEnumPoolStatusFilter<$PrismaModel>
  }

  export type NestedEnumLicenseStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.LicenseStatus | EnumLicenseStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LicenseStatus[] | ListEnumLicenseStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.LicenseStatus[] | ListEnumLicenseStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumLicenseStatusFilter<$PrismaModel> | $Enums.LicenseStatus
  }

  export type NestedEnumLicenseStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LicenseStatus | EnumLicenseStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LicenseStatus[] | ListEnumLicenseStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.LicenseStatus[] | ListEnumLicenseStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumLicenseStatusWithAggregatesFilter<$PrismaModel> | $Enums.LicenseStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLicenseStatusFilter<$PrismaModel>
    _max?: NestedEnumLicenseStatusFilter<$PrismaModel>
  }

  export type NestedEnumDeviceTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.DeviceType | EnumDeviceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DeviceType[] | ListEnumDeviceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.DeviceType[] | ListEnumDeviceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumDeviceTypeFilter<$PrismaModel> | $Enums.DeviceType
  }

  export type NestedEnumDeviceStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.DeviceStatus | EnumDeviceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DeviceStatus[] | ListEnumDeviceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DeviceStatus[] | ListEnumDeviceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDeviceStatusFilter<$PrismaModel> | $Enums.DeviceStatus
  }

  export type NestedEnumDeviceTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DeviceType | EnumDeviceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DeviceType[] | ListEnumDeviceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.DeviceType[] | ListEnumDeviceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumDeviceTypeWithAggregatesFilter<$PrismaModel> | $Enums.DeviceType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDeviceTypeFilter<$PrismaModel>
    _max?: NestedEnumDeviceTypeFilter<$PrismaModel>
  }

  export type NestedEnumDeviceStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DeviceStatus | EnumDeviceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DeviceStatus[] | ListEnumDeviceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DeviceStatus[] | ListEnumDeviceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDeviceStatusWithAggregatesFilter<$PrismaModel> | $Enums.DeviceStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDeviceStatusFilter<$PrismaModel>
    _max?: NestedEnumDeviceStatusFilter<$PrismaModel>
  }

  export type NestedEnumAllocationActionFilter<$PrismaModel = never> = {
    equals?: $Enums.AllocationAction | EnumAllocationActionFieldRefInput<$PrismaModel>
    in?: $Enums.AllocationAction[] | ListEnumAllocationActionFieldRefInput<$PrismaModel>
    notIn?: $Enums.AllocationAction[] | ListEnumAllocationActionFieldRefInput<$PrismaModel>
    not?: NestedEnumAllocationActionFilter<$PrismaModel> | $Enums.AllocationAction
  }

  export type NestedEnumAllocationActionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AllocationAction | EnumAllocationActionFieldRefInput<$PrismaModel>
    in?: $Enums.AllocationAction[] | ListEnumAllocationActionFieldRefInput<$PrismaModel>
    notIn?: $Enums.AllocationAction[] | ListEnumAllocationActionFieldRefInput<$PrismaModel>
    not?: NestedEnumAllocationActionWithAggregatesFilter<$PrismaModel> | $Enums.AllocationAction
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAllocationActionFilter<$PrismaModel>
    _max?: NestedEnumAllocationActionFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type LicenseCreateWithoutPoolInput = {
    id?: string
    licenseKey: string
    licenseKeyHash?: string | null
    clientId?: string | null
    clientName?: string | null
    productId: string
    productName: string
    productCode: string
    licenseTypeId?: string | null
    licenseTypeName?: string | null
    status?: $Enums.LicenseStatus
    userName?: string | null
    userEmail?: string | null
    deviceLimit?: number
    sessionLimit?: number
    deviceCount?: number
    currentSessions?: number
    lastActive?: Date | string | null
    activationDate?: Date | string | null
    expirationDate?: Date | string | null
    boundHardwareId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    devices?: LicenseDeviceCreateNestedManyWithoutLicenseInput
    sessions?: LicenseSessionCreateNestedManyWithoutLicenseInput
    allocations?: LicenseAllocationCreateNestedManyWithoutLicenseInput
    activationLogs?: LicenseActivationLogCreateNestedManyWithoutLicenseInput
  }

  export type LicenseUncheckedCreateWithoutPoolInput = {
    id?: string
    licenseKey: string
    licenseKeyHash?: string | null
    clientId?: string | null
    clientName?: string | null
    productId: string
    productName: string
    productCode: string
    licenseTypeId?: string | null
    licenseTypeName?: string | null
    status?: $Enums.LicenseStatus
    userName?: string | null
    userEmail?: string | null
    deviceLimit?: number
    sessionLimit?: number
    deviceCount?: number
    currentSessions?: number
    lastActive?: Date | string | null
    activationDate?: Date | string | null
    expirationDate?: Date | string | null
    boundHardwareId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    devices?: LicenseDeviceUncheckedCreateNestedManyWithoutLicenseInput
    sessions?: LicenseSessionUncheckedCreateNestedManyWithoutLicenseInput
    allocations?: LicenseAllocationUncheckedCreateNestedManyWithoutLicenseInput
    activationLogs?: LicenseActivationLogUncheckedCreateNestedManyWithoutLicenseInput
  }

  export type LicenseCreateOrConnectWithoutPoolInput = {
    where: LicenseWhereUniqueInput
    create: XOR<LicenseCreateWithoutPoolInput, LicenseUncheckedCreateWithoutPoolInput>
  }

  export type LicenseCreateManyPoolInputEnvelope = {
    data: LicenseCreateManyPoolInput | LicenseCreateManyPoolInput[]
    skipDuplicates?: boolean
  }

  export type LicenseAllocationCreateWithoutPoolInput = {
    id?: string
    clientId: string
    employeeName: string
    employeeEmail: string
    employeeId?: string | null
    department?: string | null
    action?: $Enums.AllocationAction
    allocatedAt?: Date | string
    allocatedById?: string | null
    allocatedByName?: string | null
    activatedAt?: Date | string | null
    revokedAt?: Date | string | null
    revokedById?: string | null
    revokedByName?: string | null
    revokeReason?: string | null
    transferredFrom?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    license?: LicenseCreateNestedOneWithoutAllocationsInput
  }

  export type LicenseAllocationUncheckedCreateWithoutPoolInput = {
    id?: string
    licenseId?: string | null
    clientId: string
    employeeName: string
    employeeEmail: string
    employeeId?: string | null
    department?: string | null
    action?: $Enums.AllocationAction
    allocatedAt?: Date | string
    allocatedById?: string | null
    allocatedByName?: string | null
    activatedAt?: Date | string | null
    revokedAt?: Date | string | null
    revokedById?: string | null
    revokedByName?: string | null
    revokeReason?: string | null
    transferredFrom?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LicenseAllocationCreateOrConnectWithoutPoolInput = {
    where: LicenseAllocationWhereUniqueInput
    create: XOR<LicenseAllocationCreateWithoutPoolInput, LicenseAllocationUncheckedCreateWithoutPoolInput>
  }

  export type LicenseAllocationCreateManyPoolInputEnvelope = {
    data: LicenseAllocationCreateManyPoolInput | LicenseAllocationCreateManyPoolInput[]
    skipDuplicates?: boolean
  }

  export type LicenseUpsertWithWhereUniqueWithoutPoolInput = {
    where: LicenseWhereUniqueInput
    update: XOR<LicenseUpdateWithoutPoolInput, LicenseUncheckedUpdateWithoutPoolInput>
    create: XOR<LicenseCreateWithoutPoolInput, LicenseUncheckedCreateWithoutPoolInput>
  }

  export type LicenseUpdateWithWhereUniqueWithoutPoolInput = {
    where: LicenseWhereUniqueInput
    data: XOR<LicenseUpdateWithoutPoolInput, LicenseUncheckedUpdateWithoutPoolInput>
  }

  export type LicenseUpdateManyWithWhereWithoutPoolInput = {
    where: LicenseScalarWhereInput
    data: XOR<LicenseUpdateManyMutationInput, LicenseUncheckedUpdateManyWithoutPoolInput>
  }

  export type LicenseScalarWhereInput = {
    AND?: LicenseScalarWhereInput | LicenseScalarWhereInput[]
    OR?: LicenseScalarWhereInput[]
    NOT?: LicenseScalarWhereInput | LicenseScalarWhereInput[]
    id?: StringFilter<"License"> | string
    licenseKey?: StringFilter<"License"> | string
    licenseKeyHash?: StringNullableFilter<"License"> | string | null
    clientId?: StringNullableFilter<"License"> | string | null
    clientName?: StringNullableFilter<"License"> | string | null
    productId?: StringFilter<"License"> | string
    productName?: StringFilter<"License"> | string
    productCode?: StringFilter<"License"> | string
    licenseTypeId?: StringNullableFilter<"License"> | string | null
    licenseTypeName?: StringNullableFilter<"License"> | string | null
    status?: EnumLicenseStatusFilter<"License"> | $Enums.LicenseStatus
    poolId?: StringNullableFilter<"License"> | string | null
    userName?: StringNullableFilter<"License"> | string | null
    userEmail?: StringNullableFilter<"License"> | string | null
    deviceLimit?: IntFilter<"License"> | number
    sessionLimit?: IntFilter<"License"> | number
    deviceCount?: IntFilter<"License"> | number
    currentSessions?: IntFilter<"License"> | number
    lastActive?: DateTimeNullableFilter<"License"> | Date | string | null
    activationDate?: DateTimeNullableFilter<"License"> | Date | string | null
    expirationDate?: DateTimeNullableFilter<"License"> | Date | string | null
    boundHardwareId?: StringNullableFilter<"License"> | string | null
    createdAt?: DateTimeFilter<"License"> | Date | string
    updatedAt?: DateTimeFilter<"License"> | Date | string
  }

  export type LicenseAllocationUpsertWithWhereUniqueWithoutPoolInput = {
    where: LicenseAllocationWhereUniqueInput
    update: XOR<LicenseAllocationUpdateWithoutPoolInput, LicenseAllocationUncheckedUpdateWithoutPoolInput>
    create: XOR<LicenseAllocationCreateWithoutPoolInput, LicenseAllocationUncheckedCreateWithoutPoolInput>
  }

  export type LicenseAllocationUpdateWithWhereUniqueWithoutPoolInput = {
    where: LicenseAllocationWhereUniqueInput
    data: XOR<LicenseAllocationUpdateWithoutPoolInput, LicenseAllocationUncheckedUpdateWithoutPoolInput>
  }

  export type LicenseAllocationUpdateManyWithWhereWithoutPoolInput = {
    where: LicenseAllocationScalarWhereInput
    data: XOR<LicenseAllocationUpdateManyMutationInput, LicenseAllocationUncheckedUpdateManyWithoutPoolInput>
  }

  export type LicenseAllocationScalarWhereInput = {
    AND?: LicenseAllocationScalarWhereInput | LicenseAllocationScalarWhereInput[]
    OR?: LicenseAllocationScalarWhereInput[]
    NOT?: LicenseAllocationScalarWhereInput | LicenseAllocationScalarWhereInput[]
    id?: StringFilter<"LicenseAllocation"> | string
    licenseId?: StringNullableFilter<"LicenseAllocation"> | string | null
    poolId?: StringNullableFilter<"LicenseAllocation"> | string | null
    clientId?: StringFilter<"LicenseAllocation"> | string
    employeeName?: StringFilter<"LicenseAllocation"> | string
    employeeEmail?: StringFilter<"LicenseAllocation"> | string
    employeeId?: StringNullableFilter<"LicenseAllocation"> | string | null
    department?: StringNullableFilter<"LicenseAllocation"> | string | null
    action?: EnumAllocationActionFilter<"LicenseAllocation"> | $Enums.AllocationAction
    allocatedAt?: DateTimeFilter<"LicenseAllocation"> | Date | string
    allocatedById?: StringNullableFilter<"LicenseAllocation"> | string | null
    allocatedByName?: StringNullableFilter<"LicenseAllocation"> | string | null
    activatedAt?: DateTimeNullableFilter<"LicenseAllocation"> | Date | string | null
    revokedAt?: DateTimeNullableFilter<"LicenseAllocation"> | Date | string | null
    revokedById?: StringNullableFilter<"LicenseAllocation"> | string | null
    revokedByName?: StringNullableFilter<"LicenseAllocation"> | string | null
    revokeReason?: StringNullableFilter<"LicenseAllocation"> | string | null
    transferredFrom?: StringNullableFilter<"LicenseAllocation"> | string | null
    isActive?: BoolFilter<"LicenseAllocation"> | boolean
    createdAt?: DateTimeFilter<"LicenseAllocation"> | Date | string
    updatedAt?: DateTimeFilter<"LicenseAllocation"> | Date | string
  }

  export type LicensePoolCreateWithoutLicensesInput = {
    id?: string
    clientId: string
    clientName: string
    clientEmail?: string | null
    subscriptionId: string
    productId: string
    productName: string
    productCode: string
    licenseTypeId: string
    licenseTypeName: string
    totalSeats: number
    allocatedSeats?: number
    availableSeats: number
    poolKey: string
    poolKeyHash: string
    activationDate?: Date | string | null
    expirationDate: Date | string
    gracePeriodDays?: number
    features?: LicensePoolCreatefeaturesInput | string[]
    selectedFeatures?: LicensePoolCreateselectedFeaturesInput | string[]
    billingCycle?: string
    pricePerSeat?: Decimal | DecimalJsLike | number | string | null
    totalAmount?: Decimal | DecimalJsLike | number | string | null
    currency?: string
    subscriptionStatus?: string | null
    paymentStatus?: string | null
    autoRenew?: boolean
    nextBillingDate?: Date | string | null
    status?: $Enums.PoolStatus
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    allocations?: LicenseAllocationCreateNestedManyWithoutPoolInput
  }

  export type LicensePoolUncheckedCreateWithoutLicensesInput = {
    id?: string
    clientId: string
    clientName: string
    clientEmail?: string | null
    subscriptionId: string
    productId: string
    productName: string
    productCode: string
    licenseTypeId: string
    licenseTypeName: string
    totalSeats: number
    allocatedSeats?: number
    availableSeats: number
    poolKey: string
    poolKeyHash: string
    activationDate?: Date | string | null
    expirationDate: Date | string
    gracePeriodDays?: number
    features?: LicensePoolCreatefeaturesInput | string[]
    selectedFeatures?: LicensePoolCreateselectedFeaturesInput | string[]
    billingCycle?: string
    pricePerSeat?: Decimal | DecimalJsLike | number | string | null
    totalAmount?: Decimal | DecimalJsLike | number | string | null
    currency?: string
    subscriptionStatus?: string | null
    paymentStatus?: string | null
    autoRenew?: boolean
    nextBillingDate?: Date | string | null
    status?: $Enums.PoolStatus
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    allocations?: LicenseAllocationUncheckedCreateNestedManyWithoutPoolInput
  }

  export type LicensePoolCreateOrConnectWithoutLicensesInput = {
    where: LicensePoolWhereUniqueInput
    create: XOR<LicensePoolCreateWithoutLicensesInput, LicensePoolUncheckedCreateWithoutLicensesInput>
  }

  export type LicenseDeviceCreateWithoutLicenseInput = {
    id?: string
    macAddress: string
    ipAddress?: string | null
    hostname?: string | null
    location?: string | null
    deviceType?: $Enums.DeviceType
    deviceName?: string | null
    osInfo?: string | null
    status?: $Enums.DeviceStatus
    lastActive?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LicenseDeviceUncheckedCreateWithoutLicenseInput = {
    id?: string
    macAddress: string
    ipAddress?: string | null
    hostname?: string | null
    location?: string | null
    deviceType?: $Enums.DeviceType
    deviceName?: string | null
    osInfo?: string | null
    status?: $Enums.DeviceStatus
    lastActive?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LicenseDeviceCreateOrConnectWithoutLicenseInput = {
    where: LicenseDeviceWhereUniqueInput
    create: XOR<LicenseDeviceCreateWithoutLicenseInput, LicenseDeviceUncheckedCreateWithoutLicenseInput>
  }

  export type LicenseDeviceCreateManyLicenseInputEnvelope = {
    data: LicenseDeviceCreateManyLicenseInput | LicenseDeviceCreateManyLicenseInput[]
    skipDuplicates?: boolean
  }

  export type LicenseSessionCreateWithoutLicenseInput = {
    id?: string
    sessionToken: string
    deviceId?: string | null
    deviceName?: string | null
    ipAddress?: string | null
    userAgent?: string | null
    location?: string | null
    startedAt?: Date | string
    lastActivityAt?: Date | string
    expiresAt: Date | string
    isActive?: boolean
    terminatedAt?: Date | string | null
    terminatedBy?: string | null
    terminateReason?: string | null
  }

  export type LicenseSessionUncheckedCreateWithoutLicenseInput = {
    id?: string
    sessionToken: string
    deviceId?: string | null
    deviceName?: string | null
    ipAddress?: string | null
    userAgent?: string | null
    location?: string | null
    startedAt?: Date | string
    lastActivityAt?: Date | string
    expiresAt: Date | string
    isActive?: boolean
    terminatedAt?: Date | string | null
    terminatedBy?: string | null
    terminateReason?: string | null
  }

  export type LicenseSessionCreateOrConnectWithoutLicenseInput = {
    where: LicenseSessionWhereUniqueInput
    create: XOR<LicenseSessionCreateWithoutLicenseInput, LicenseSessionUncheckedCreateWithoutLicenseInput>
  }

  export type LicenseSessionCreateManyLicenseInputEnvelope = {
    data: LicenseSessionCreateManyLicenseInput | LicenseSessionCreateManyLicenseInput[]
    skipDuplicates?: boolean
  }

  export type LicenseAllocationCreateWithoutLicenseInput = {
    id?: string
    clientId: string
    employeeName: string
    employeeEmail: string
    employeeId?: string | null
    department?: string | null
    action?: $Enums.AllocationAction
    allocatedAt?: Date | string
    allocatedById?: string | null
    allocatedByName?: string | null
    activatedAt?: Date | string | null
    revokedAt?: Date | string | null
    revokedById?: string | null
    revokedByName?: string | null
    revokeReason?: string | null
    transferredFrom?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    pool?: LicensePoolCreateNestedOneWithoutAllocationsInput
  }

  export type LicenseAllocationUncheckedCreateWithoutLicenseInput = {
    id?: string
    poolId?: string | null
    clientId: string
    employeeName: string
    employeeEmail: string
    employeeId?: string | null
    department?: string | null
    action?: $Enums.AllocationAction
    allocatedAt?: Date | string
    allocatedById?: string | null
    allocatedByName?: string | null
    activatedAt?: Date | string | null
    revokedAt?: Date | string | null
    revokedById?: string | null
    revokedByName?: string | null
    revokeReason?: string | null
    transferredFrom?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LicenseAllocationCreateOrConnectWithoutLicenseInput = {
    where: LicenseAllocationWhereUniqueInput
    create: XOR<LicenseAllocationCreateWithoutLicenseInput, LicenseAllocationUncheckedCreateWithoutLicenseInput>
  }

  export type LicenseAllocationCreateManyLicenseInputEnvelope = {
    data: LicenseAllocationCreateManyLicenseInput | LicenseAllocationCreateManyLicenseInput[]
    skipDuplicates?: boolean
  }

  export type LicenseActivationLogCreateWithoutLicenseInput = {
    id?: string
    action: string
    deviceId?: string | null
    deviceType?: string | null
    deviceName?: string | null
    macAddress?: string | null
    ipAddress?: string | null
    userAgent?: string | null
    location?: string | null
    success?: boolean
    errorMessage?: string | null
    performedBy?: string | null
    performedByName?: string | null
    timestamp?: Date | string
  }

  export type LicenseActivationLogUncheckedCreateWithoutLicenseInput = {
    id?: string
    action: string
    deviceId?: string | null
    deviceType?: string | null
    deviceName?: string | null
    macAddress?: string | null
    ipAddress?: string | null
    userAgent?: string | null
    location?: string | null
    success?: boolean
    errorMessage?: string | null
    performedBy?: string | null
    performedByName?: string | null
    timestamp?: Date | string
  }

  export type LicenseActivationLogCreateOrConnectWithoutLicenseInput = {
    where: LicenseActivationLogWhereUniqueInput
    create: XOR<LicenseActivationLogCreateWithoutLicenseInput, LicenseActivationLogUncheckedCreateWithoutLicenseInput>
  }

  export type LicenseActivationLogCreateManyLicenseInputEnvelope = {
    data: LicenseActivationLogCreateManyLicenseInput | LicenseActivationLogCreateManyLicenseInput[]
    skipDuplicates?: boolean
  }

  export type LicensePoolUpsertWithoutLicensesInput = {
    update: XOR<LicensePoolUpdateWithoutLicensesInput, LicensePoolUncheckedUpdateWithoutLicensesInput>
    create: XOR<LicensePoolCreateWithoutLicensesInput, LicensePoolUncheckedCreateWithoutLicensesInput>
    where?: LicensePoolWhereInput
  }

  export type LicensePoolUpdateToOneWithWhereWithoutLicensesInput = {
    where?: LicensePoolWhereInput
    data: XOR<LicensePoolUpdateWithoutLicensesInput, LicensePoolUncheckedUpdateWithoutLicensesInput>
  }

  export type LicensePoolUpdateWithoutLicensesInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    clientName?: StringFieldUpdateOperationsInput | string
    clientEmail?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    productCode?: StringFieldUpdateOperationsInput | string
    licenseTypeId?: StringFieldUpdateOperationsInput | string
    licenseTypeName?: StringFieldUpdateOperationsInput | string
    totalSeats?: IntFieldUpdateOperationsInput | number
    allocatedSeats?: IntFieldUpdateOperationsInput | number
    availableSeats?: IntFieldUpdateOperationsInput | number
    poolKey?: StringFieldUpdateOperationsInput | string
    poolKeyHash?: StringFieldUpdateOperationsInput | string
    activationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expirationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    gracePeriodDays?: IntFieldUpdateOperationsInput | number
    features?: LicensePoolUpdatefeaturesInput | string[]
    selectedFeatures?: LicensePoolUpdateselectedFeaturesInput | string[]
    billingCycle?: StringFieldUpdateOperationsInput | string
    pricePerSeat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    totalAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    currency?: StringFieldUpdateOperationsInput | string
    subscriptionStatus?: NullableStringFieldUpdateOperationsInput | string | null
    paymentStatus?: NullableStringFieldUpdateOperationsInput | string | null
    autoRenew?: BoolFieldUpdateOperationsInput | boolean
    nextBillingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumPoolStatusFieldUpdateOperationsInput | $Enums.PoolStatus
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    allocations?: LicenseAllocationUpdateManyWithoutPoolNestedInput
  }

  export type LicensePoolUncheckedUpdateWithoutLicensesInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    clientName?: StringFieldUpdateOperationsInput | string
    clientEmail?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    productCode?: StringFieldUpdateOperationsInput | string
    licenseTypeId?: StringFieldUpdateOperationsInput | string
    licenseTypeName?: StringFieldUpdateOperationsInput | string
    totalSeats?: IntFieldUpdateOperationsInput | number
    allocatedSeats?: IntFieldUpdateOperationsInput | number
    availableSeats?: IntFieldUpdateOperationsInput | number
    poolKey?: StringFieldUpdateOperationsInput | string
    poolKeyHash?: StringFieldUpdateOperationsInput | string
    activationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expirationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    gracePeriodDays?: IntFieldUpdateOperationsInput | number
    features?: LicensePoolUpdatefeaturesInput | string[]
    selectedFeatures?: LicensePoolUpdateselectedFeaturesInput | string[]
    billingCycle?: StringFieldUpdateOperationsInput | string
    pricePerSeat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    totalAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    currency?: StringFieldUpdateOperationsInput | string
    subscriptionStatus?: NullableStringFieldUpdateOperationsInput | string | null
    paymentStatus?: NullableStringFieldUpdateOperationsInput | string | null
    autoRenew?: BoolFieldUpdateOperationsInput | boolean
    nextBillingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumPoolStatusFieldUpdateOperationsInput | $Enums.PoolStatus
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    allocations?: LicenseAllocationUncheckedUpdateManyWithoutPoolNestedInput
  }

  export type LicenseDeviceUpsertWithWhereUniqueWithoutLicenseInput = {
    where: LicenseDeviceWhereUniqueInput
    update: XOR<LicenseDeviceUpdateWithoutLicenseInput, LicenseDeviceUncheckedUpdateWithoutLicenseInput>
    create: XOR<LicenseDeviceCreateWithoutLicenseInput, LicenseDeviceUncheckedCreateWithoutLicenseInput>
  }

  export type LicenseDeviceUpdateWithWhereUniqueWithoutLicenseInput = {
    where: LicenseDeviceWhereUniqueInput
    data: XOR<LicenseDeviceUpdateWithoutLicenseInput, LicenseDeviceUncheckedUpdateWithoutLicenseInput>
  }

  export type LicenseDeviceUpdateManyWithWhereWithoutLicenseInput = {
    where: LicenseDeviceScalarWhereInput
    data: XOR<LicenseDeviceUpdateManyMutationInput, LicenseDeviceUncheckedUpdateManyWithoutLicenseInput>
  }

  export type LicenseDeviceScalarWhereInput = {
    AND?: LicenseDeviceScalarWhereInput | LicenseDeviceScalarWhereInput[]
    OR?: LicenseDeviceScalarWhereInput[]
    NOT?: LicenseDeviceScalarWhereInput | LicenseDeviceScalarWhereInput[]
    id?: StringFilter<"LicenseDevice"> | string
    licenseId?: StringFilter<"LicenseDevice"> | string
    macAddress?: StringFilter<"LicenseDevice"> | string
    ipAddress?: StringNullableFilter<"LicenseDevice"> | string | null
    hostname?: StringNullableFilter<"LicenseDevice"> | string | null
    location?: StringNullableFilter<"LicenseDevice"> | string | null
    deviceType?: EnumDeviceTypeFilter<"LicenseDevice"> | $Enums.DeviceType
    deviceName?: StringNullableFilter<"LicenseDevice"> | string | null
    osInfo?: StringNullableFilter<"LicenseDevice"> | string | null
    status?: EnumDeviceStatusFilter<"LicenseDevice"> | $Enums.DeviceStatus
    lastActive?: DateTimeFilter<"LicenseDevice"> | Date | string
    createdAt?: DateTimeFilter<"LicenseDevice"> | Date | string
    updatedAt?: DateTimeFilter<"LicenseDevice"> | Date | string
  }

  export type LicenseSessionUpsertWithWhereUniqueWithoutLicenseInput = {
    where: LicenseSessionWhereUniqueInput
    update: XOR<LicenseSessionUpdateWithoutLicenseInput, LicenseSessionUncheckedUpdateWithoutLicenseInput>
    create: XOR<LicenseSessionCreateWithoutLicenseInput, LicenseSessionUncheckedCreateWithoutLicenseInput>
  }

  export type LicenseSessionUpdateWithWhereUniqueWithoutLicenseInput = {
    where: LicenseSessionWhereUniqueInput
    data: XOR<LicenseSessionUpdateWithoutLicenseInput, LicenseSessionUncheckedUpdateWithoutLicenseInput>
  }

  export type LicenseSessionUpdateManyWithWhereWithoutLicenseInput = {
    where: LicenseSessionScalarWhereInput
    data: XOR<LicenseSessionUpdateManyMutationInput, LicenseSessionUncheckedUpdateManyWithoutLicenseInput>
  }

  export type LicenseSessionScalarWhereInput = {
    AND?: LicenseSessionScalarWhereInput | LicenseSessionScalarWhereInput[]
    OR?: LicenseSessionScalarWhereInput[]
    NOT?: LicenseSessionScalarWhereInput | LicenseSessionScalarWhereInput[]
    id?: StringFilter<"LicenseSession"> | string
    licenseId?: StringFilter<"LicenseSession"> | string
    sessionToken?: StringFilter<"LicenseSession"> | string
    deviceId?: StringNullableFilter<"LicenseSession"> | string | null
    deviceName?: StringNullableFilter<"LicenseSession"> | string | null
    ipAddress?: StringNullableFilter<"LicenseSession"> | string | null
    userAgent?: StringNullableFilter<"LicenseSession"> | string | null
    location?: StringNullableFilter<"LicenseSession"> | string | null
    startedAt?: DateTimeFilter<"LicenseSession"> | Date | string
    lastActivityAt?: DateTimeFilter<"LicenseSession"> | Date | string
    expiresAt?: DateTimeFilter<"LicenseSession"> | Date | string
    isActive?: BoolFilter<"LicenseSession"> | boolean
    terminatedAt?: DateTimeNullableFilter<"LicenseSession"> | Date | string | null
    terminatedBy?: StringNullableFilter<"LicenseSession"> | string | null
    terminateReason?: StringNullableFilter<"LicenseSession"> | string | null
  }

  export type LicenseAllocationUpsertWithWhereUniqueWithoutLicenseInput = {
    where: LicenseAllocationWhereUniqueInput
    update: XOR<LicenseAllocationUpdateWithoutLicenseInput, LicenseAllocationUncheckedUpdateWithoutLicenseInput>
    create: XOR<LicenseAllocationCreateWithoutLicenseInput, LicenseAllocationUncheckedCreateWithoutLicenseInput>
  }

  export type LicenseAllocationUpdateWithWhereUniqueWithoutLicenseInput = {
    where: LicenseAllocationWhereUniqueInput
    data: XOR<LicenseAllocationUpdateWithoutLicenseInput, LicenseAllocationUncheckedUpdateWithoutLicenseInput>
  }

  export type LicenseAllocationUpdateManyWithWhereWithoutLicenseInput = {
    where: LicenseAllocationScalarWhereInput
    data: XOR<LicenseAllocationUpdateManyMutationInput, LicenseAllocationUncheckedUpdateManyWithoutLicenseInput>
  }

  export type LicenseActivationLogUpsertWithWhereUniqueWithoutLicenseInput = {
    where: LicenseActivationLogWhereUniqueInput
    update: XOR<LicenseActivationLogUpdateWithoutLicenseInput, LicenseActivationLogUncheckedUpdateWithoutLicenseInput>
    create: XOR<LicenseActivationLogCreateWithoutLicenseInput, LicenseActivationLogUncheckedCreateWithoutLicenseInput>
  }

  export type LicenseActivationLogUpdateWithWhereUniqueWithoutLicenseInput = {
    where: LicenseActivationLogWhereUniqueInput
    data: XOR<LicenseActivationLogUpdateWithoutLicenseInput, LicenseActivationLogUncheckedUpdateWithoutLicenseInput>
  }

  export type LicenseActivationLogUpdateManyWithWhereWithoutLicenseInput = {
    where: LicenseActivationLogScalarWhereInput
    data: XOR<LicenseActivationLogUpdateManyMutationInput, LicenseActivationLogUncheckedUpdateManyWithoutLicenseInput>
  }

  export type LicenseActivationLogScalarWhereInput = {
    AND?: LicenseActivationLogScalarWhereInput | LicenseActivationLogScalarWhereInput[]
    OR?: LicenseActivationLogScalarWhereInput[]
    NOT?: LicenseActivationLogScalarWhereInput | LicenseActivationLogScalarWhereInput[]
    id?: StringFilter<"LicenseActivationLog"> | string
    licenseId?: StringFilter<"LicenseActivationLog"> | string
    action?: StringFilter<"LicenseActivationLog"> | string
    deviceId?: StringNullableFilter<"LicenseActivationLog"> | string | null
    deviceType?: StringNullableFilter<"LicenseActivationLog"> | string | null
    deviceName?: StringNullableFilter<"LicenseActivationLog"> | string | null
    macAddress?: StringNullableFilter<"LicenseActivationLog"> | string | null
    ipAddress?: StringNullableFilter<"LicenseActivationLog"> | string | null
    userAgent?: StringNullableFilter<"LicenseActivationLog"> | string | null
    location?: StringNullableFilter<"LicenseActivationLog"> | string | null
    success?: BoolFilter<"LicenseActivationLog"> | boolean
    errorMessage?: StringNullableFilter<"LicenseActivationLog"> | string | null
    performedBy?: StringNullableFilter<"LicenseActivationLog"> | string | null
    performedByName?: StringNullableFilter<"LicenseActivationLog"> | string | null
    timestamp?: DateTimeFilter<"LicenseActivationLog"> | Date | string
  }

  export type LicenseCreateWithoutDevicesInput = {
    id?: string
    licenseKey: string
    licenseKeyHash?: string | null
    clientId?: string | null
    clientName?: string | null
    productId: string
    productName: string
    productCode: string
    licenseTypeId?: string | null
    licenseTypeName?: string | null
    status?: $Enums.LicenseStatus
    userName?: string | null
    userEmail?: string | null
    deviceLimit?: number
    sessionLimit?: number
    deviceCount?: number
    currentSessions?: number
    lastActive?: Date | string | null
    activationDate?: Date | string | null
    expirationDate?: Date | string | null
    boundHardwareId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    pool?: LicensePoolCreateNestedOneWithoutLicensesInput
    sessions?: LicenseSessionCreateNestedManyWithoutLicenseInput
    allocations?: LicenseAllocationCreateNestedManyWithoutLicenseInput
    activationLogs?: LicenseActivationLogCreateNestedManyWithoutLicenseInput
  }

  export type LicenseUncheckedCreateWithoutDevicesInput = {
    id?: string
    licenseKey: string
    licenseKeyHash?: string | null
    clientId?: string | null
    clientName?: string | null
    productId: string
    productName: string
    productCode: string
    licenseTypeId?: string | null
    licenseTypeName?: string | null
    status?: $Enums.LicenseStatus
    poolId?: string | null
    userName?: string | null
    userEmail?: string | null
    deviceLimit?: number
    sessionLimit?: number
    deviceCount?: number
    currentSessions?: number
    lastActive?: Date | string | null
    activationDate?: Date | string | null
    expirationDate?: Date | string | null
    boundHardwareId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: LicenseSessionUncheckedCreateNestedManyWithoutLicenseInput
    allocations?: LicenseAllocationUncheckedCreateNestedManyWithoutLicenseInput
    activationLogs?: LicenseActivationLogUncheckedCreateNestedManyWithoutLicenseInput
  }

  export type LicenseCreateOrConnectWithoutDevicesInput = {
    where: LicenseWhereUniqueInput
    create: XOR<LicenseCreateWithoutDevicesInput, LicenseUncheckedCreateWithoutDevicesInput>
  }

  export type LicenseUpsertWithoutDevicesInput = {
    update: XOR<LicenseUpdateWithoutDevicesInput, LicenseUncheckedUpdateWithoutDevicesInput>
    create: XOR<LicenseCreateWithoutDevicesInput, LicenseUncheckedCreateWithoutDevicesInput>
    where?: LicenseWhereInput
  }

  export type LicenseUpdateToOneWithWhereWithoutDevicesInput = {
    where?: LicenseWhereInput
    data: XOR<LicenseUpdateWithoutDevicesInput, LicenseUncheckedUpdateWithoutDevicesInput>
  }

  export type LicenseUpdateWithoutDevicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    licenseKey?: StringFieldUpdateOperationsInput | string
    licenseKeyHash?: NullableStringFieldUpdateOperationsInput | string | null
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
    clientName?: NullableStringFieldUpdateOperationsInput | string | null
    productId?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    productCode?: StringFieldUpdateOperationsInput | string
    licenseTypeId?: NullableStringFieldUpdateOperationsInput | string | null
    licenseTypeName?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumLicenseStatusFieldUpdateOperationsInput | $Enums.LicenseStatus
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    userEmail?: NullableStringFieldUpdateOperationsInput | string | null
    deviceLimit?: IntFieldUpdateOperationsInput | number
    sessionLimit?: IntFieldUpdateOperationsInput | number
    deviceCount?: IntFieldUpdateOperationsInput | number
    currentSessions?: IntFieldUpdateOperationsInput | number
    lastActive?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    activationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expirationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    boundHardwareId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pool?: LicensePoolUpdateOneWithoutLicensesNestedInput
    sessions?: LicenseSessionUpdateManyWithoutLicenseNestedInput
    allocations?: LicenseAllocationUpdateManyWithoutLicenseNestedInput
    activationLogs?: LicenseActivationLogUpdateManyWithoutLicenseNestedInput
  }

  export type LicenseUncheckedUpdateWithoutDevicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    licenseKey?: StringFieldUpdateOperationsInput | string
    licenseKeyHash?: NullableStringFieldUpdateOperationsInput | string | null
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
    clientName?: NullableStringFieldUpdateOperationsInput | string | null
    productId?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    productCode?: StringFieldUpdateOperationsInput | string
    licenseTypeId?: NullableStringFieldUpdateOperationsInput | string | null
    licenseTypeName?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumLicenseStatusFieldUpdateOperationsInput | $Enums.LicenseStatus
    poolId?: NullableStringFieldUpdateOperationsInput | string | null
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    userEmail?: NullableStringFieldUpdateOperationsInput | string | null
    deviceLimit?: IntFieldUpdateOperationsInput | number
    sessionLimit?: IntFieldUpdateOperationsInput | number
    deviceCount?: IntFieldUpdateOperationsInput | number
    currentSessions?: IntFieldUpdateOperationsInput | number
    lastActive?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    activationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expirationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    boundHardwareId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: LicenseSessionUncheckedUpdateManyWithoutLicenseNestedInput
    allocations?: LicenseAllocationUncheckedUpdateManyWithoutLicenseNestedInput
    activationLogs?: LicenseActivationLogUncheckedUpdateManyWithoutLicenseNestedInput
  }

  export type LicenseCreateWithoutSessionsInput = {
    id?: string
    licenseKey: string
    licenseKeyHash?: string | null
    clientId?: string | null
    clientName?: string | null
    productId: string
    productName: string
    productCode: string
    licenseTypeId?: string | null
    licenseTypeName?: string | null
    status?: $Enums.LicenseStatus
    userName?: string | null
    userEmail?: string | null
    deviceLimit?: number
    sessionLimit?: number
    deviceCount?: number
    currentSessions?: number
    lastActive?: Date | string | null
    activationDate?: Date | string | null
    expirationDate?: Date | string | null
    boundHardwareId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    pool?: LicensePoolCreateNestedOneWithoutLicensesInput
    devices?: LicenseDeviceCreateNestedManyWithoutLicenseInput
    allocations?: LicenseAllocationCreateNestedManyWithoutLicenseInput
    activationLogs?: LicenseActivationLogCreateNestedManyWithoutLicenseInput
  }

  export type LicenseUncheckedCreateWithoutSessionsInput = {
    id?: string
    licenseKey: string
    licenseKeyHash?: string | null
    clientId?: string | null
    clientName?: string | null
    productId: string
    productName: string
    productCode: string
    licenseTypeId?: string | null
    licenseTypeName?: string | null
    status?: $Enums.LicenseStatus
    poolId?: string | null
    userName?: string | null
    userEmail?: string | null
    deviceLimit?: number
    sessionLimit?: number
    deviceCount?: number
    currentSessions?: number
    lastActive?: Date | string | null
    activationDate?: Date | string | null
    expirationDate?: Date | string | null
    boundHardwareId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    devices?: LicenseDeviceUncheckedCreateNestedManyWithoutLicenseInput
    allocations?: LicenseAllocationUncheckedCreateNestedManyWithoutLicenseInput
    activationLogs?: LicenseActivationLogUncheckedCreateNestedManyWithoutLicenseInput
  }

  export type LicenseCreateOrConnectWithoutSessionsInput = {
    where: LicenseWhereUniqueInput
    create: XOR<LicenseCreateWithoutSessionsInput, LicenseUncheckedCreateWithoutSessionsInput>
  }

  export type LicenseUpsertWithoutSessionsInput = {
    update: XOR<LicenseUpdateWithoutSessionsInput, LicenseUncheckedUpdateWithoutSessionsInput>
    create: XOR<LicenseCreateWithoutSessionsInput, LicenseUncheckedCreateWithoutSessionsInput>
    where?: LicenseWhereInput
  }

  export type LicenseUpdateToOneWithWhereWithoutSessionsInput = {
    where?: LicenseWhereInput
    data: XOR<LicenseUpdateWithoutSessionsInput, LicenseUncheckedUpdateWithoutSessionsInput>
  }

  export type LicenseUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    licenseKey?: StringFieldUpdateOperationsInput | string
    licenseKeyHash?: NullableStringFieldUpdateOperationsInput | string | null
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
    clientName?: NullableStringFieldUpdateOperationsInput | string | null
    productId?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    productCode?: StringFieldUpdateOperationsInput | string
    licenseTypeId?: NullableStringFieldUpdateOperationsInput | string | null
    licenseTypeName?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumLicenseStatusFieldUpdateOperationsInput | $Enums.LicenseStatus
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    userEmail?: NullableStringFieldUpdateOperationsInput | string | null
    deviceLimit?: IntFieldUpdateOperationsInput | number
    sessionLimit?: IntFieldUpdateOperationsInput | number
    deviceCount?: IntFieldUpdateOperationsInput | number
    currentSessions?: IntFieldUpdateOperationsInput | number
    lastActive?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    activationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expirationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    boundHardwareId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pool?: LicensePoolUpdateOneWithoutLicensesNestedInput
    devices?: LicenseDeviceUpdateManyWithoutLicenseNestedInput
    allocations?: LicenseAllocationUpdateManyWithoutLicenseNestedInput
    activationLogs?: LicenseActivationLogUpdateManyWithoutLicenseNestedInput
  }

  export type LicenseUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    licenseKey?: StringFieldUpdateOperationsInput | string
    licenseKeyHash?: NullableStringFieldUpdateOperationsInput | string | null
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
    clientName?: NullableStringFieldUpdateOperationsInput | string | null
    productId?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    productCode?: StringFieldUpdateOperationsInput | string
    licenseTypeId?: NullableStringFieldUpdateOperationsInput | string | null
    licenseTypeName?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumLicenseStatusFieldUpdateOperationsInput | $Enums.LicenseStatus
    poolId?: NullableStringFieldUpdateOperationsInput | string | null
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    userEmail?: NullableStringFieldUpdateOperationsInput | string | null
    deviceLimit?: IntFieldUpdateOperationsInput | number
    sessionLimit?: IntFieldUpdateOperationsInput | number
    deviceCount?: IntFieldUpdateOperationsInput | number
    currentSessions?: IntFieldUpdateOperationsInput | number
    lastActive?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    activationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expirationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    boundHardwareId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    devices?: LicenseDeviceUncheckedUpdateManyWithoutLicenseNestedInput
    allocations?: LicenseAllocationUncheckedUpdateManyWithoutLicenseNestedInput
    activationLogs?: LicenseActivationLogUncheckedUpdateManyWithoutLicenseNestedInput
  }

  export type LicenseCreateWithoutAllocationsInput = {
    id?: string
    licenseKey: string
    licenseKeyHash?: string | null
    clientId?: string | null
    clientName?: string | null
    productId: string
    productName: string
    productCode: string
    licenseTypeId?: string | null
    licenseTypeName?: string | null
    status?: $Enums.LicenseStatus
    userName?: string | null
    userEmail?: string | null
    deviceLimit?: number
    sessionLimit?: number
    deviceCount?: number
    currentSessions?: number
    lastActive?: Date | string | null
    activationDate?: Date | string | null
    expirationDate?: Date | string | null
    boundHardwareId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    pool?: LicensePoolCreateNestedOneWithoutLicensesInput
    devices?: LicenseDeviceCreateNestedManyWithoutLicenseInput
    sessions?: LicenseSessionCreateNestedManyWithoutLicenseInput
    activationLogs?: LicenseActivationLogCreateNestedManyWithoutLicenseInput
  }

  export type LicenseUncheckedCreateWithoutAllocationsInput = {
    id?: string
    licenseKey: string
    licenseKeyHash?: string | null
    clientId?: string | null
    clientName?: string | null
    productId: string
    productName: string
    productCode: string
    licenseTypeId?: string | null
    licenseTypeName?: string | null
    status?: $Enums.LicenseStatus
    poolId?: string | null
    userName?: string | null
    userEmail?: string | null
    deviceLimit?: number
    sessionLimit?: number
    deviceCount?: number
    currentSessions?: number
    lastActive?: Date | string | null
    activationDate?: Date | string | null
    expirationDate?: Date | string | null
    boundHardwareId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    devices?: LicenseDeviceUncheckedCreateNestedManyWithoutLicenseInput
    sessions?: LicenseSessionUncheckedCreateNestedManyWithoutLicenseInput
    activationLogs?: LicenseActivationLogUncheckedCreateNestedManyWithoutLicenseInput
  }

  export type LicenseCreateOrConnectWithoutAllocationsInput = {
    where: LicenseWhereUniqueInput
    create: XOR<LicenseCreateWithoutAllocationsInput, LicenseUncheckedCreateWithoutAllocationsInput>
  }

  export type LicensePoolCreateWithoutAllocationsInput = {
    id?: string
    clientId: string
    clientName: string
    clientEmail?: string | null
    subscriptionId: string
    productId: string
    productName: string
    productCode: string
    licenseTypeId: string
    licenseTypeName: string
    totalSeats: number
    allocatedSeats?: number
    availableSeats: number
    poolKey: string
    poolKeyHash: string
    activationDate?: Date | string | null
    expirationDate: Date | string
    gracePeriodDays?: number
    features?: LicensePoolCreatefeaturesInput | string[]
    selectedFeatures?: LicensePoolCreateselectedFeaturesInput | string[]
    billingCycle?: string
    pricePerSeat?: Decimal | DecimalJsLike | number | string | null
    totalAmount?: Decimal | DecimalJsLike | number | string | null
    currency?: string
    subscriptionStatus?: string | null
    paymentStatus?: string | null
    autoRenew?: boolean
    nextBillingDate?: Date | string | null
    status?: $Enums.PoolStatus
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    licenses?: LicenseCreateNestedManyWithoutPoolInput
  }

  export type LicensePoolUncheckedCreateWithoutAllocationsInput = {
    id?: string
    clientId: string
    clientName: string
    clientEmail?: string | null
    subscriptionId: string
    productId: string
    productName: string
    productCode: string
    licenseTypeId: string
    licenseTypeName: string
    totalSeats: number
    allocatedSeats?: number
    availableSeats: number
    poolKey: string
    poolKeyHash: string
    activationDate?: Date | string | null
    expirationDate: Date | string
    gracePeriodDays?: number
    features?: LicensePoolCreatefeaturesInput | string[]
    selectedFeatures?: LicensePoolCreateselectedFeaturesInput | string[]
    billingCycle?: string
    pricePerSeat?: Decimal | DecimalJsLike | number | string | null
    totalAmount?: Decimal | DecimalJsLike | number | string | null
    currency?: string
    subscriptionStatus?: string | null
    paymentStatus?: string | null
    autoRenew?: boolean
    nextBillingDate?: Date | string | null
    status?: $Enums.PoolStatus
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    licenses?: LicenseUncheckedCreateNestedManyWithoutPoolInput
  }

  export type LicensePoolCreateOrConnectWithoutAllocationsInput = {
    where: LicensePoolWhereUniqueInput
    create: XOR<LicensePoolCreateWithoutAllocationsInput, LicensePoolUncheckedCreateWithoutAllocationsInput>
  }

  export type LicenseUpsertWithoutAllocationsInput = {
    update: XOR<LicenseUpdateWithoutAllocationsInput, LicenseUncheckedUpdateWithoutAllocationsInput>
    create: XOR<LicenseCreateWithoutAllocationsInput, LicenseUncheckedCreateWithoutAllocationsInput>
    where?: LicenseWhereInput
  }

  export type LicenseUpdateToOneWithWhereWithoutAllocationsInput = {
    where?: LicenseWhereInput
    data: XOR<LicenseUpdateWithoutAllocationsInput, LicenseUncheckedUpdateWithoutAllocationsInput>
  }

  export type LicenseUpdateWithoutAllocationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    licenseKey?: StringFieldUpdateOperationsInput | string
    licenseKeyHash?: NullableStringFieldUpdateOperationsInput | string | null
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
    clientName?: NullableStringFieldUpdateOperationsInput | string | null
    productId?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    productCode?: StringFieldUpdateOperationsInput | string
    licenseTypeId?: NullableStringFieldUpdateOperationsInput | string | null
    licenseTypeName?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumLicenseStatusFieldUpdateOperationsInput | $Enums.LicenseStatus
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    userEmail?: NullableStringFieldUpdateOperationsInput | string | null
    deviceLimit?: IntFieldUpdateOperationsInput | number
    sessionLimit?: IntFieldUpdateOperationsInput | number
    deviceCount?: IntFieldUpdateOperationsInput | number
    currentSessions?: IntFieldUpdateOperationsInput | number
    lastActive?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    activationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expirationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    boundHardwareId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pool?: LicensePoolUpdateOneWithoutLicensesNestedInput
    devices?: LicenseDeviceUpdateManyWithoutLicenseNestedInput
    sessions?: LicenseSessionUpdateManyWithoutLicenseNestedInput
    activationLogs?: LicenseActivationLogUpdateManyWithoutLicenseNestedInput
  }

  export type LicenseUncheckedUpdateWithoutAllocationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    licenseKey?: StringFieldUpdateOperationsInput | string
    licenseKeyHash?: NullableStringFieldUpdateOperationsInput | string | null
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
    clientName?: NullableStringFieldUpdateOperationsInput | string | null
    productId?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    productCode?: StringFieldUpdateOperationsInput | string
    licenseTypeId?: NullableStringFieldUpdateOperationsInput | string | null
    licenseTypeName?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumLicenseStatusFieldUpdateOperationsInput | $Enums.LicenseStatus
    poolId?: NullableStringFieldUpdateOperationsInput | string | null
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    userEmail?: NullableStringFieldUpdateOperationsInput | string | null
    deviceLimit?: IntFieldUpdateOperationsInput | number
    sessionLimit?: IntFieldUpdateOperationsInput | number
    deviceCount?: IntFieldUpdateOperationsInput | number
    currentSessions?: IntFieldUpdateOperationsInput | number
    lastActive?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    activationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expirationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    boundHardwareId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    devices?: LicenseDeviceUncheckedUpdateManyWithoutLicenseNestedInput
    sessions?: LicenseSessionUncheckedUpdateManyWithoutLicenseNestedInput
    activationLogs?: LicenseActivationLogUncheckedUpdateManyWithoutLicenseNestedInput
  }

  export type LicensePoolUpsertWithoutAllocationsInput = {
    update: XOR<LicensePoolUpdateWithoutAllocationsInput, LicensePoolUncheckedUpdateWithoutAllocationsInput>
    create: XOR<LicensePoolCreateWithoutAllocationsInput, LicensePoolUncheckedCreateWithoutAllocationsInput>
    where?: LicensePoolWhereInput
  }

  export type LicensePoolUpdateToOneWithWhereWithoutAllocationsInput = {
    where?: LicensePoolWhereInput
    data: XOR<LicensePoolUpdateWithoutAllocationsInput, LicensePoolUncheckedUpdateWithoutAllocationsInput>
  }

  export type LicensePoolUpdateWithoutAllocationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    clientName?: StringFieldUpdateOperationsInput | string
    clientEmail?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    productCode?: StringFieldUpdateOperationsInput | string
    licenseTypeId?: StringFieldUpdateOperationsInput | string
    licenseTypeName?: StringFieldUpdateOperationsInput | string
    totalSeats?: IntFieldUpdateOperationsInput | number
    allocatedSeats?: IntFieldUpdateOperationsInput | number
    availableSeats?: IntFieldUpdateOperationsInput | number
    poolKey?: StringFieldUpdateOperationsInput | string
    poolKeyHash?: StringFieldUpdateOperationsInput | string
    activationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expirationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    gracePeriodDays?: IntFieldUpdateOperationsInput | number
    features?: LicensePoolUpdatefeaturesInput | string[]
    selectedFeatures?: LicensePoolUpdateselectedFeaturesInput | string[]
    billingCycle?: StringFieldUpdateOperationsInput | string
    pricePerSeat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    totalAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    currency?: StringFieldUpdateOperationsInput | string
    subscriptionStatus?: NullableStringFieldUpdateOperationsInput | string | null
    paymentStatus?: NullableStringFieldUpdateOperationsInput | string | null
    autoRenew?: BoolFieldUpdateOperationsInput | boolean
    nextBillingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumPoolStatusFieldUpdateOperationsInput | $Enums.PoolStatus
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    licenses?: LicenseUpdateManyWithoutPoolNestedInput
  }

  export type LicensePoolUncheckedUpdateWithoutAllocationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    clientName?: StringFieldUpdateOperationsInput | string
    clientEmail?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    productCode?: StringFieldUpdateOperationsInput | string
    licenseTypeId?: StringFieldUpdateOperationsInput | string
    licenseTypeName?: StringFieldUpdateOperationsInput | string
    totalSeats?: IntFieldUpdateOperationsInput | number
    allocatedSeats?: IntFieldUpdateOperationsInput | number
    availableSeats?: IntFieldUpdateOperationsInput | number
    poolKey?: StringFieldUpdateOperationsInput | string
    poolKeyHash?: StringFieldUpdateOperationsInput | string
    activationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expirationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    gracePeriodDays?: IntFieldUpdateOperationsInput | number
    features?: LicensePoolUpdatefeaturesInput | string[]
    selectedFeatures?: LicensePoolUpdateselectedFeaturesInput | string[]
    billingCycle?: StringFieldUpdateOperationsInput | string
    pricePerSeat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    totalAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    currency?: StringFieldUpdateOperationsInput | string
    subscriptionStatus?: NullableStringFieldUpdateOperationsInput | string | null
    paymentStatus?: NullableStringFieldUpdateOperationsInput | string | null
    autoRenew?: BoolFieldUpdateOperationsInput | boolean
    nextBillingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumPoolStatusFieldUpdateOperationsInput | $Enums.PoolStatus
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    licenses?: LicenseUncheckedUpdateManyWithoutPoolNestedInput
  }

  export type LicenseCreateWithoutActivationLogsInput = {
    id?: string
    licenseKey: string
    licenseKeyHash?: string | null
    clientId?: string | null
    clientName?: string | null
    productId: string
    productName: string
    productCode: string
    licenseTypeId?: string | null
    licenseTypeName?: string | null
    status?: $Enums.LicenseStatus
    userName?: string | null
    userEmail?: string | null
    deviceLimit?: number
    sessionLimit?: number
    deviceCount?: number
    currentSessions?: number
    lastActive?: Date | string | null
    activationDate?: Date | string | null
    expirationDate?: Date | string | null
    boundHardwareId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    pool?: LicensePoolCreateNestedOneWithoutLicensesInput
    devices?: LicenseDeviceCreateNestedManyWithoutLicenseInput
    sessions?: LicenseSessionCreateNestedManyWithoutLicenseInput
    allocations?: LicenseAllocationCreateNestedManyWithoutLicenseInput
  }

  export type LicenseUncheckedCreateWithoutActivationLogsInput = {
    id?: string
    licenseKey: string
    licenseKeyHash?: string | null
    clientId?: string | null
    clientName?: string | null
    productId: string
    productName: string
    productCode: string
    licenseTypeId?: string | null
    licenseTypeName?: string | null
    status?: $Enums.LicenseStatus
    poolId?: string | null
    userName?: string | null
    userEmail?: string | null
    deviceLimit?: number
    sessionLimit?: number
    deviceCount?: number
    currentSessions?: number
    lastActive?: Date | string | null
    activationDate?: Date | string | null
    expirationDate?: Date | string | null
    boundHardwareId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    devices?: LicenseDeviceUncheckedCreateNestedManyWithoutLicenseInput
    sessions?: LicenseSessionUncheckedCreateNestedManyWithoutLicenseInput
    allocations?: LicenseAllocationUncheckedCreateNestedManyWithoutLicenseInput
  }

  export type LicenseCreateOrConnectWithoutActivationLogsInput = {
    where: LicenseWhereUniqueInput
    create: XOR<LicenseCreateWithoutActivationLogsInput, LicenseUncheckedCreateWithoutActivationLogsInput>
  }

  export type LicenseUpsertWithoutActivationLogsInput = {
    update: XOR<LicenseUpdateWithoutActivationLogsInput, LicenseUncheckedUpdateWithoutActivationLogsInput>
    create: XOR<LicenseCreateWithoutActivationLogsInput, LicenseUncheckedCreateWithoutActivationLogsInput>
    where?: LicenseWhereInput
  }

  export type LicenseUpdateToOneWithWhereWithoutActivationLogsInput = {
    where?: LicenseWhereInput
    data: XOR<LicenseUpdateWithoutActivationLogsInput, LicenseUncheckedUpdateWithoutActivationLogsInput>
  }

  export type LicenseUpdateWithoutActivationLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    licenseKey?: StringFieldUpdateOperationsInput | string
    licenseKeyHash?: NullableStringFieldUpdateOperationsInput | string | null
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
    clientName?: NullableStringFieldUpdateOperationsInput | string | null
    productId?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    productCode?: StringFieldUpdateOperationsInput | string
    licenseTypeId?: NullableStringFieldUpdateOperationsInput | string | null
    licenseTypeName?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumLicenseStatusFieldUpdateOperationsInput | $Enums.LicenseStatus
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    userEmail?: NullableStringFieldUpdateOperationsInput | string | null
    deviceLimit?: IntFieldUpdateOperationsInput | number
    sessionLimit?: IntFieldUpdateOperationsInput | number
    deviceCount?: IntFieldUpdateOperationsInput | number
    currentSessions?: IntFieldUpdateOperationsInput | number
    lastActive?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    activationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expirationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    boundHardwareId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pool?: LicensePoolUpdateOneWithoutLicensesNestedInput
    devices?: LicenseDeviceUpdateManyWithoutLicenseNestedInput
    sessions?: LicenseSessionUpdateManyWithoutLicenseNestedInput
    allocations?: LicenseAllocationUpdateManyWithoutLicenseNestedInput
  }

  export type LicenseUncheckedUpdateWithoutActivationLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    licenseKey?: StringFieldUpdateOperationsInput | string
    licenseKeyHash?: NullableStringFieldUpdateOperationsInput | string | null
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
    clientName?: NullableStringFieldUpdateOperationsInput | string | null
    productId?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    productCode?: StringFieldUpdateOperationsInput | string
    licenseTypeId?: NullableStringFieldUpdateOperationsInput | string | null
    licenseTypeName?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumLicenseStatusFieldUpdateOperationsInput | $Enums.LicenseStatus
    poolId?: NullableStringFieldUpdateOperationsInput | string | null
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    userEmail?: NullableStringFieldUpdateOperationsInput | string | null
    deviceLimit?: IntFieldUpdateOperationsInput | number
    sessionLimit?: IntFieldUpdateOperationsInput | number
    deviceCount?: IntFieldUpdateOperationsInput | number
    currentSessions?: IntFieldUpdateOperationsInput | number
    lastActive?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    activationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expirationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    boundHardwareId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    devices?: LicenseDeviceUncheckedUpdateManyWithoutLicenseNestedInput
    sessions?: LicenseSessionUncheckedUpdateManyWithoutLicenseNestedInput
    allocations?: LicenseAllocationUncheckedUpdateManyWithoutLicenseNestedInput
  }

  export type LicenseCreateManyPoolInput = {
    id?: string
    licenseKey: string
    licenseKeyHash?: string | null
    clientId?: string | null
    clientName?: string | null
    productId: string
    productName: string
    productCode: string
    licenseTypeId?: string | null
    licenseTypeName?: string | null
    status?: $Enums.LicenseStatus
    userName?: string | null
    userEmail?: string | null
    deviceLimit?: number
    sessionLimit?: number
    deviceCount?: number
    currentSessions?: number
    lastActive?: Date | string | null
    activationDate?: Date | string | null
    expirationDate?: Date | string | null
    boundHardwareId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LicenseAllocationCreateManyPoolInput = {
    id?: string
    licenseId?: string | null
    clientId: string
    employeeName: string
    employeeEmail: string
    employeeId?: string | null
    department?: string | null
    action?: $Enums.AllocationAction
    allocatedAt?: Date | string
    allocatedById?: string | null
    allocatedByName?: string | null
    activatedAt?: Date | string | null
    revokedAt?: Date | string | null
    revokedById?: string | null
    revokedByName?: string | null
    revokeReason?: string | null
    transferredFrom?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LicenseUpdateWithoutPoolInput = {
    id?: StringFieldUpdateOperationsInput | string
    licenseKey?: StringFieldUpdateOperationsInput | string
    licenseKeyHash?: NullableStringFieldUpdateOperationsInput | string | null
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
    clientName?: NullableStringFieldUpdateOperationsInput | string | null
    productId?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    productCode?: StringFieldUpdateOperationsInput | string
    licenseTypeId?: NullableStringFieldUpdateOperationsInput | string | null
    licenseTypeName?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumLicenseStatusFieldUpdateOperationsInput | $Enums.LicenseStatus
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    userEmail?: NullableStringFieldUpdateOperationsInput | string | null
    deviceLimit?: IntFieldUpdateOperationsInput | number
    sessionLimit?: IntFieldUpdateOperationsInput | number
    deviceCount?: IntFieldUpdateOperationsInput | number
    currentSessions?: IntFieldUpdateOperationsInput | number
    lastActive?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    activationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expirationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    boundHardwareId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    devices?: LicenseDeviceUpdateManyWithoutLicenseNestedInput
    sessions?: LicenseSessionUpdateManyWithoutLicenseNestedInput
    allocations?: LicenseAllocationUpdateManyWithoutLicenseNestedInput
    activationLogs?: LicenseActivationLogUpdateManyWithoutLicenseNestedInput
  }

  export type LicenseUncheckedUpdateWithoutPoolInput = {
    id?: StringFieldUpdateOperationsInput | string
    licenseKey?: StringFieldUpdateOperationsInput | string
    licenseKeyHash?: NullableStringFieldUpdateOperationsInput | string | null
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
    clientName?: NullableStringFieldUpdateOperationsInput | string | null
    productId?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    productCode?: StringFieldUpdateOperationsInput | string
    licenseTypeId?: NullableStringFieldUpdateOperationsInput | string | null
    licenseTypeName?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumLicenseStatusFieldUpdateOperationsInput | $Enums.LicenseStatus
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    userEmail?: NullableStringFieldUpdateOperationsInput | string | null
    deviceLimit?: IntFieldUpdateOperationsInput | number
    sessionLimit?: IntFieldUpdateOperationsInput | number
    deviceCount?: IntFieldUpdateOperationsInput | number
    currentSessions?: IntFieldUpdateOperationsInput | number
    lastActive?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    activationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expirationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    boundHardwareId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    devices?: LicenseDeviceUncheckedUpdateManyWithoutLicenseNestedInput
    sessions?: LicenseSessionUncheckedUpdateManyWithoutLicenseNestedInput
    allocations?: LicenseAllocationUncheckedUpdateManyWithoutLicenseNestedInput
    activationLogs?: LicenseActivationLogUncheckedUpdateManyWithoutLicenseNestedInput
  }

  export type LicenseUncheckedUpdateManyWithoutPoolInput = {
    id?: StringFieldUpdateOperationsInput | string
    licenseKey?: StringFieldUpdateOperationsInput | string
    licenseKeyHash?: NullableStringFieldUpdateOperationsInput | string | null
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
    clientName?: NullableStringFieldUpdateOperationsInput | string | null
    productId?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    productCode?: StringFieldUpdateOperationsInput | string
    licenseTypeId?: NullableStringFieldUpdateOperationsInput | string | null
    licenseTypeName?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumLicenseStatusFieldUpdateOperationsInput | $Enums.LicenseStatus
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    userEmail?: NullableStringFieldUpdateOperationsInput | string | null
    deviceLimit?: IntFieldUpdateOperationsInput | number
    sessionLimit?: IntFieldUpdateOperationsInput | number
    deviceCount?: IntFieldUpdateOperationsInput | number
    currentSessions?: IntFieldUpdateOperationsInput | number
    lastActive?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    activationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expirationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    boundHardwareId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LicenseAllocationUpdateWithoutPoolInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    employeeName?: StringFieldUpdateOperationsInput | string
    employeeEmail?: StringFieldUpdateOperationsInput | string
    employeeId?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    action?: EnumAllocationActionFieldUpdateOperationsInput | $Enums.AllocationAction
    allocatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    allocatedById?: NullableStringFieldUpdateOperationsInput | string | null
    allocatedByName?: NullableStringFieldUpdateOperationsInput | string | null
    activatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revokedById?: NullableStringFieldUpdateOperationsInput | string | null
    revokedByName?: NullableStringFieldUpdateOperationsInput | string | null
    revokeReason?: NullableStringFieldUpdateOperationsInput | string | null
    transferredFrom?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    license?: LicenseUpdateOneWithoutAllocationsNestedInput
  }

  export type LicenseAllocationUncheckedUpdateWithoutPoolInput = {
    id?: StringFieldUpdateOperationsInput | string
    licenseId?: NullableStringFieldUpdateOperationsInput | string | null
    clientId?: StringFieldUpdateOperationsInput | string
    employeeName?: StringFieldUpdateOperationsInput | string
    employeeEmail?: StringFieldUpdateOperationsInput | string
    employeeId?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    action?: EnumAllocationActionFieldUpdateOperationsInput | $Enums.AllocationAction
    allocatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    allocatedById?: NullableStringFieldUpdateOperationsInput | string | null
    allocatedByName?: NullableStringFieldUpdateOperationsInput | string | null
    activatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revokedById?: NullableStringFieldUpdateOperationsInput | string | null
    revokedByName?: NullableStringFieldUpdateOperationsInput | string | null
    revokeReason?: NullableStringFieldUpdateOperationsInput | string | null
    transferredFrom?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LicenseAllocationUncheckedUpdateManyWithoutPoolInput = {
    id?: StringFieldUpdateOperationsInput | string
    licenseId?: NullableStringFieldUpdateOperationsInput | string | null
    clientId?: StringFieldUpdateOperationsInput | string
    employeeName?: StringFieldUpdateOperationsInput | string
    employeeEmail?: StringFieldUpdateOperationsInput | string
    employeeId?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    action?: EnumAllocationActionFieldUpdateOperationsInput | $Enums.AllocationAction
    allocatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    allocatedById?: NullableStringFieldUpdateOperationsInput | string | null
    allocatedByName?: NullableStringFieldUpdateOperationsInput | string | null
    activatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revokedById?: NullableStringFieldUpdateOperationsInput | string | null
    revokedByName?: NullableStringFieldUpdateOperationsInput | string | null
    revokeReason?: NullableStringFieldUpdateOperationsInput | string | null
    transferredFrom?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LicenseDeviceCreateManyLicenseInput = {
    id?: string
    macAddress: string
    ipAddress?: string | null
    hostname?: string | null
    location?: string | null
    deviceType?: $Enums.DeviceType
    deviceName?: string | null
    osInfo?: string | null
    status?: $Enums.DeviceStatus
    lastActive?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LicenseSessionCreateManyLicenseInput = {
    id?: string
    sessionToken: string
    deviceId?: string | null
    deviceName?: string | null
    ipAddress?: string | null
    userAgent?: string | null
    location?: string | null
    startedAt?: Date | string
    lastActivityAt?: Date | string
    expiresAt: Date | string
    isActive?: boolean
    terminatedAt?: Date | string | null
    terminatedBy?: string | null
    terminateReason?: string | null
  }

  export type LicenseAllocationCreateManyLicenseInput = {
    id?: string
    poolId?: string | null
    clientId: string
    employeeName: string
    employeeEmail: string
    employeeId?: string | null
    department?: string | null
    action?: $Enums.AllocationAction
    allocatedAt?: Date | string
    allocatedById?: string | null
    allocatedByName?: string | null
    activatedAt?: Date | string | null
    revokedAt?: Date | string | null
    revokedById?: string | null
    revokedByName?: string | null
    revokeReason?: string | null
    transferredFrom?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LicenseActivationLogCreateManyLicenseInput = {
    id?: string
    action: string
    deviceId?: string | null
    deviceType?: string | null
    deviceName?: string | null
    macAddress?: string | null
    ipAddress?: string | null
    userAgent?: string | null
    location?: string | null
    success?: boolean
    errorMessage?: string | null
    performedBy?: string | null
    performedByName?: string | null
    timestamp?: Date | string
  }

  export type LicenseDeviceUpdateWithoutLicenseInput = {
    id?: StringFieldUpdateOperationsInput | string
    macAddress?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    hostname?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    deviceType?: EnumDeviceTypeFieldUpdateOperationsInput | $Enums.DeviceType
    deviceName?: NullableStringFieldUpdateOperationsInput | string | null
    osInfo?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumDeviceStatusFieldUpdateOperationsInput | $Enums.DeviceStatus
    lastActive?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LicenseDeviceUncheckedUpdateWithoutLicenseInput = {
    id?: StringFieldUpdateOperationsInput | string
    macAddress?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    hostname?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    deviceType?: EnumDeviceTypeFieldUpdateOperationsInput | $Enums.DeviceType
    deviceName?: NullableStringFieldUpdateOperationsInput | string | null
    osInfo?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumDeviceStatusFieldUpdateOperationsInput | $Enums.DeviceStatus
    lastActive?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LicenseDeviceUncheckedUpdateManyWithoutLicenseInput = {
    id?: StringFieldUpdateOperationsInput | string
    macAddress?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    hostname?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    deviceType?: EnumDeviceTypeFieldUpdateOperationsInput | $Enums.DeviceType
    deviceName?: NullableStringFieldUpdateOperationsInput | string | null
    osInfo?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumDeviceStatusFieldUpdateOperationsInput | $Enums.DeviceStatus
    lastActive?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LicenseSessionUpdateWithoutLicenseInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    deviceId?: NullableStringFieldUpdateOperationsInput | string | null
    deviceName?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActivityAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    terminatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    terminatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    terminateReason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LicenseSessionUncheckedUpdateWithoutLicenseInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    deviceId?: NullableStringFieldUpdateOperationsInput | string | null
    deviceName?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActivityAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    terminatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    terminatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    terminateReason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LicenseSessionUncheckedUpdateManyWithoutLicenseInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    deviceId?: NullableStringFieldUpdateOperationsInput | string | null
    deviceName?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActivityAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    terminatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    terminatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    terminateReason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LicenseAllocationUpdateWithoutLicenseInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    employeeName?: StringFieldUpdateOperationsInput | string
    employeeEmail?: StringFieldUpdateOperationsInput | string
    employeeId?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    action?: EnumAllocationActionFieldUpdateOperationsInput | $Enums.AllocationAction
    allocatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    allocatedById?: NullableStringFieldUpdateOperationsInput | string | null
    allocatedByName?: NullableStringFieldUpdateOperationsInput | string | null
    activatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revokedById?: NullableStringFieldUpdateOperationsInput | string | null
    revokedByName?: NullableStringFieldUpdateOperationsInput | string | null
    revokeReason?: NullableStringFieldUpdateOperationsInput | string | null
    transferredFrom?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pool?: LicensePoolUpdateOneWithoutAllocationsNestedInput
  }

  export type LicenseAllocationUncheckedUpdateWithoutLicenseInput = {
    id?: StringFieldUpdateOperationsInput | string
    poolId?: NullableStringFieldUpdateOperationsInput | string | null
    clientId?: StringFieldUpdateOperationsInput | string
    employeeName?: StringFieldUpdateOperationsInput | string
    employeeEmail?: StringFieldUpdateOperationsInput | string
    employeeId?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    action?: EnumAllocationActionFieldUpdateOperationsInput | $Enums.AllocationAction
    allocatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    allocatedById?: NullableStringFieldUpdateOperationsInput | string | null
    allocatedByName?: NullableStringFieldUpdateOperationsInput | string | null
    activatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revokedById?: NullableStringFieldUpdateOperationsInput | string | null
    revokedByName?: NullableStringFieldUpdateOperationsInput | string | null
    revokeReason?: NullableStringFieldUpdateOperationsInput | string | null
    transferredFrom?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LicenseAllocationUncheckedUpdateManyWithoutLicenseInput = {
    id?: StringFieldUpdateOperationsInput | string
    poolId?: NullableStringFieldUpdateOperationsInput | string | null
    clientId?: StringFieldUpdateOperationsInput | string
    employeeName?: StringFieldUpdateOperationsInput | string
    employeeEmail?: StringFieldUpdateOperationsInput | string
    employeeId?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    action?: EnumAllocationActionFieldUpdateOperationsInput | $Enums.AllocationAction
    allocatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    allocatedById?: NullableStringFieldUpdateOperationsInput | string | null
    allocatedByName?: NullableStringFieldUpdateOperationsInput | string | null
    activatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revokedById?: NullableStringFieldUpdateOperationsInput | string | null
    revokedByName?: NullableStringFieldUpdateOperationsInput | string | null
    revokeReason?: NullableStringFieldUpdateOperationsInput | string | null
    transferredFrom?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LicenseActivationLogUpdateWithoutLicenseInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    deviceId?: NullableStringFieldUpdateOperationsInput | string | null
    deviceType?: NullableStringFieldUpdateOperationsInput | string | null
    deviceName?: NullableStringFieldUpdateOperationsInput | string | null
    macAddress?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    success?: BoolFieldUpdateOperationsInput | boolean
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    performedBy?: NullableStringFieldUpdateOperationsInput | string | null
    performedByName?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LicenseActivationLogUncheckedUpdateWithoutLicenseInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    deviceId?: NullableStringFieldUpdateOperationsInput | string | null
    deviceType?: NullableStringFieldUpdateOperationsInput | string | null
    deviceName?: NullableStringFieldUpdateOperationsInput | string | null
    macAddress?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    success?: BoolFieldUpdateOperationsInput | boolean
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    performedBy?: NullableStringFieldUpdateOperationsInput | string | null
    performedByName?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LicenseActivationLogUncheckedUpdateManyWithoutLicenseInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    deviceId?: NullableStringFieldUpdateOperationsInput | string | null
    deviceType?: NullableStringFieldUpdateOperationsInput | string | null
    deviceName?: NullableStringFieldUpdateOperationsInput | string | null
    macAddress?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    success?: BoolFieldUpdateOperationsInput | boolean
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    performedBy?: NullableStringFieldUpdateOperationsInput | string | null
    performedByName?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use LicensePoolCountOutputTypeDefaultArgs instead
     */
    export type LicensePoolCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LicensePoolCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LicenseCountOutputTypeDefaultArgs instead
     */
    export type LicenseCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LicenseCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LicensePoolDefaultArgs instead
     */
    export type LicensePoolArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LicensePoolDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LicenseDefaultArgs instead
     */
    export type LicenseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LicenseDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LicenseDeviceDefaultArgs instead
     */
    export type LicenseDeviceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LicenseDeviceDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LicenseSessionDefaultArgs instead
     */
    export type LicenseSessionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LicenseSessionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LicenseAllocationDefaultArgs instead
     */
    export type LicenseAllocationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LicenseAllocationDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LicenseActivationLogDefaultArgs instead
     */
    export type LicenseActivationLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LicenseActivationLogDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LicenseUsageStatsDefaultArgs instead
     */
    export type LicenseUsageStatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LicenseUsageStatsDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}