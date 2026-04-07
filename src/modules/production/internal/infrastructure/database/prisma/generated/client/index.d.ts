
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model ProductionOrder
 * 
 */
export type ProductionOrder = $Result.DefaultSelection<Prisma.$ProductionOrderPayload>
/**
 * Model ProductionOrderAddonResolution
 * 
 */
export type ProductionOrderAddonResolution = $Result.DefaultSelection<Prisma.$ProductionOrderAddonResolutionPayload>
/**
 * Model FillingOrder
 * 
 */
export type FillingOrder = $Result.DefaultSelection<Prisma.$FillingOrderPayload>
/**
 * Model FillingOrderLine
 * 
 */
export type FillingOrderLine = $Result.DefaultSelection<Prisma.$FillingOrderLinePayload>
/**
 * Model BulkStock
 * 
 */
export type BulkStock = $Result.DefaultSelection<Prisma.$BulkStockPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more ProductionOrders
 * const productionOrders = await prisma.productionOrder.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more ProductionOrders
   * const productionOrders = await prisma.productionOrder.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.productionOrder`: Exposes CRUD operations for the **ProductionOrder** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductionOrders
    * const productionOrders = await prisma.productionOrder.findMany()
    * ```
    */
  get productionOrder(): Prisma.ProductionOrderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.productionOrderAddonResolution`: Exposes CRUD operations for the **ProductionOrderAddonResolution** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductionOrderAddonResolutions
    * const productionOrderAddonResolutions = await prisma.productionOrderAddonResolution.findMany()
    * ```
    */
  get productionOrderAddonResolution(): Prisma.ProductionOrderAddonResolutionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.fillingOrder`: Exposes CRUD operations for the **FillingOrder** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FillingOrders
    * const fillingOrders = await prisma.fillingOrder.findMany()
    * ```
    */
  get fillingOrder(): Prisma.FillingOrderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.fillingOrderLine`: Exposes CRUD operations for the **FillingOrderLine** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FillingOrderLines
    * const fillingOrderLines = await prisma.fillingOrderLine.findMany()
    * ```
    */
  get fillingOrderLine(): Prisma.FillingOrderLineDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bulkStock`: Exposes CRUD operations for the **BulkStock** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BulkStocks
    * const bulkStocks = await prisma.bulkStock.findMany()
    * ```
    */
  get bulkStock(): Prisma.BulkStockDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.4.2
   * Query Engine version: 94a226be1cf2967af2541cca5529f0f7ba866919
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    ProductionOrder: 'ProductionOrder',
    ProductionOrderAddonResolution: 'ProductionOrderAddonResolution',
    FillingOrder: 'FillingOrder',
    FillingOrderLine: 'FillingOrderLine',
    BulkStock: 'BulkStock'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "productionOrder" | "productionOrderAddonResolution" | "fillingOrder" | "fillingOrderLine" | "bulkStock"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      ProductionOrder: {
        payload: Prisma.$ProductionOrderPayload<ExtArgs>
        fields: Prisma.ProductionOrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductionOrderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductionOrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductionOrderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductionOrderPayload>
          }
          findFirst: {
            args: Prisma.ProductionOrderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductionOrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductionOrderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductionOrderPayload>
          }
          findMany: {
            args: Prisma.ProductionOrderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductionOrderPayload>[]
          }
          create: {
            args: Prisma.ProductionOrderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductionOrderPayload>
          }
          createMany: {
            args: Prisma.ProductionOrderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductionOrderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductionOrderPayload>[]
          }
          delete: {
            args: Prisma.ProductionOrderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductionOrderPayload>
          }
          update: {
            args: Prisma.ProductionOrderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductionOrderPayload>
          }
          deleteMany: {
            args: Prisma.ProductionOrderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductionOrderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductionOrderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductionOrderPayload>[]
          }
          upsert: {
            args: Prisma.ProductionOrderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductionOrderPayload>
          }
          aggregate: {
            args: Prisma.ProductionOrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductionOrder>
          }
          groupBy: {
            args: Prisma.ProductionOrderGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductionOrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductionOrderCountArgs<ExtArgs>
            result: $Utils.Optional<ProductionOrderCountAggregateOutputType> | number
          }
        }
      }
      ProductionOrderAddonResolution: {
        payload: Prisma.$ProductionOrderAddonResolutionPayload<ExtArgs>
        fields: Prisma.ProductionOrderAddonResolutionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductionOrderAddonResolutionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductionOrderAddonResolutionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductionOrderAddonResolutionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductionOrderAddonResolutionPayload>
          }
          findFirst: {
            args: Prisma.ProductionOrderAddonResolutionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductionOrderAddonResolutionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductionOrderAddonResolutionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductionOrderAddonResolutionPayload>
          }
          findMany: {
            args: Prisma.ProductionOrderAddonResolutionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductionOrderAddonResolutionPayload>[]
          }
          create: {
            args: Prisma.ProductionOrderAddonResolutionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductionOrderAddonResolutionPayload>
          }
          createMany: {
            args: Prisma.ProductionOrderAddonResolutionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductionOrderAddonResolutionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductionOrderAddonResolutionPayload>[]
          }
          delete: {
            args: Prisma.ProductionOrderAddonResolutionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductionOrderAddonResolutionPayload>
          }
          update: {
            args: Prisma.ProductionOrderAddonResolutionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductionOrderAddonResolutionPayload>
          }
          deleteMany: {
            args: Prisma.ProductionOrderAddonResolutionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductionOrderAddonResolutionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductionOrderAddonResolutionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductionOrderAddonResolutionPayload>[]
          }
          upsert: {
            args: Prisma.ProductionOrderAddonResolutionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductionOrderAddonResolutionPayload>
          }
          aggregate: {
            args: Prisma.ProductionOrderAddonResolutionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductionOrderAddonResolution>
          }
          groupBy: {
            args: Prisma.ProductionOrderAddonResolutionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductionOrderAddonResolutionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductionOrderAddonResolutionCountArgs<ExtArgs>
            result: $Utils.Optional<ProductionOrderAddonResolutionCountAggregateOutputType> | number
          }
        }
      }
      FillingOrder: {
        payload: Prisma.$FillingOrderPayload<ExtArgs>
        fields: Prisma.FillingOrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FillingOrderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FillingOrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FillingOrderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FillingOrderPayload>
          }
          findFirst: {
            args: Prisma.FillingOrderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FillingOrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FillingOrderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FillingOrderPayload>
          }
          findMany: {
            args: Prisma.FillingOrderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FillingOrderPayload>[]
          }
          create: {
            args: Prisma.FillingOrderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FillingOrderPayload>
          }
          createMany: {
            args: Prisma.FillingOrderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FillingOrderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FillingOrderPayload>[]
          }
          delete: {
            args: Prisma.FillingOrderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FillingOrderPayload>
          }
          update: {
            args: Prisma.FillingOrderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FillingOrderPayload>
          }
          deleteMany: {
            args: Prisma.FillingOrderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FillingOrderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FillingOrderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FillingOrderPayload>[]
          }
          upsert: {
            args: Prisma.FillingOrderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FillingOrderPayload>
          }
          aggregate: {
            args: Prisma.FillingOrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFillingOrder>
          }
          groupBy: {
            args: Prisma.FillingOrderGroupByArgs<ExtArgs>
            result: $Utils.Optional<FillingOrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.FillingOrderCountArgs<ExtArgs>
            result: $Utils.Optional<FillingOrderCountAggregateOutputType> | number
          }
        }
      }
      FillingOrderLine: {
        payload: Prisma.$FillingOrderLinePayload<ExtArgs>
        fields: Prisma.FillingOrderLineFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FillingOrderLineFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FillingOrderLinePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FillingOrderLineFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FillingOrderLinePayload>
          }
          findFirst: {
            args: Prisma.FillingOrderLineFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FillingOrderLinePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FillingOrderLineFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FillingOrderLinePayload>
          }
          findMany: {
            args: Prisma.FillingOrderLineFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FillingOrderLinePayload>[]
          }
          create: {
            args: Prisma.FillingOrderLineCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FillingOrderLinePayload>
          }
          createMany: {
            args: Prisma.FillingOrderLineCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FillingOrderLineCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FillingOrderLinePayload>[]
          }
          delete: {
            args: Prisma.FillingOrderLineDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FillingOrderLinePayload>
          }
          update: {
            args: Prisma.FillingOrderLineUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FillingOrderLinePayload>
          }
          deleteMany: {
            args: Prisma.FillingOrderLineDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FillingOrderLineUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FillingOrderLineUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FillingOrderLinePayload>[]
          }
          upsert: {
            args: Prisma.FillingOrderLineUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FillingOrderLinePayload>
          }
          aggregate: {
            args: Prisma.FillingOrderLineAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFillingOrderLine>
          }
          groupBy: {
            args: Prisma.FillingOrderLineGroupByArgs<ExtArgs>
            result: $Utils.Optional<FillingOrderLineGroupByOutputType>[]
          }
          count: {
            args: Prisma.FillingOrderLineCountArgs<ExtArgs>
            result: $Utils.Optional<FillingOrderLineCountAggregateOutputType> | number
          }
        }
      }
      BulkStock: {
        payload: Prisma.$BulkStockPayload<ExtArgs>
        fields: Prisma.BulkStockFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BulkStockFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BulkStockPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BulkStockFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BulkStockPayload>
          }
          findFirst: {
            args: Prisma.BulkStockFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BulkStockPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BulkStockFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BulkStockPayload>
          }
          findMany: {
            args: Prisma.BulkStockFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BulkStockPayload>[]
          }
          create: {
            args: Prisma.BulkStockCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BulkStockPayload>
          }
          createMany: {
            args: Prisma.BulkStockCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BulkStockCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BulkStockPayload>[]
          }
          delete: {
            args: Prisma.BulkStockDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BulkStockPayload>
          }
          update: {
            args: Prisma.BulkStockUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BulkStockPayload>
          }
          deleteMany: {
            args: Prisma.BulkStockDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BulkStockUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BulkStockUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BulkStockPayload>[]
          }
          upsert: {
            args: Prisma.BulkStockUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BulkStockPayload>
          }
          aggregate: {
            args: Prisma.BulkStockAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBulkStock>
          }
          groupBy: {
            args: Prisma.BulkStockGroupByArgs<ExtArgs>
            result: $Utils.Optional<BulkStockGroupByOutputType>[]
          }
          count: {
            args: Prisma.BulkStockCountArgs<ExtArgs>
            result: $Utils.Optional<BulkStockCountAggregateOutputType> | number
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    productionOrder?: ProductionOrderOmit
    productionOrderAddonResolution?: ProductionOrderAddonResolutionOmit
    fillingOrder?: FillingOrderOmit
    fillingOrderLine?: FillingOrderLineOmit
    bulkStock?: BulkStockOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    | 'updateManyAndReturn'
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
   * Count Type ProductionOrderCountOutputType
   */

  export type ProductionOrderCountOutputType = {
    addonResolutions: number
  }

  export type ProductionOrderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    addonResolutions?: boolean | ProductionOrderCountOutputTypeCountAddonResolutionsArgs
  }

  // Custom InputTypes
  /**
   * ProductionOrderCountOutputType without action
   */
  export type ProductionOrderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductionOrderCountOutputType
     */
    select?: ProductionOrderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductionOrderCountOutputType without action
   */
  export type ProductionOrderCountOutputTypeCountAddonResolutionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductionOrderAddonResolutionWhereInput
  }


  /**
   * Count Type FillingOrderCountOutputType
   */

  export type FillingOrderCountOutputType = {
    lines: number
  }

  export type FillingOrderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lines?: boolean | FillingOrderCountOutputTypeCountLinesArgs
  }

  // Custom InputTypes
  /**
   * FillingOrderCountOutputType without action
   */
  export type FillingOrderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FillingOrderCountOutputType
     */
    select?: FillingOrderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FillingOrderCountOutputType without action
   */
  export type FillingOrderCountOutputTypeCountLinesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FillingOrderLineWhereInput
  }


  /**
   * Models
   */

  /**
   * Model ProductionOrder
   */

  export type AggregateProductionOrder = {
    _count: ProductionOrderCountAggregateOutputType | null
    _avg: ProductionOrderAvgAggregateOutputType | null
    _sum: ProductionOrderSumAggregateOutputType | null
    _min: ProductionOrderMinAggregateOutputType | null
    _max: ProductionOrderMaxAggregateOutputType | null
  }

  export type ProductionOrderAvgAggregateOutputType = {
    batchWeightGm: number | null
    wastePercent: number | null
  }

  export type ProductionOrderSumAggregateOutputType = {
    batchWeightGm: number | null
    wastePercent: number | null
  }

  export type ProductionOrderMinAggregateOutputType = {
    id: string | null
    productId: string | null
    batchWeightGm: number | null
    wastePercent: number | null
    notes: string | null
    status: string | null
    performedBy: string | null
    executedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductionOrderMaxAggregateOutputType = {
    id: string | null
    productId: string | null
    batchWeightGm: number | null
    wastePercent: number | null
    notes: string | null
    status: string | null
    performedBy: string | null
    executedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductionOrderCountAggregateOutputType = {
    id: number
    productId: number
    batchWeightGm: number
    wastePercent: number
    notes: number
    status: number
    performedBy: number
    executedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProductionOrderAvgAggregateInputType = {
    batchWeightGm?: true
    wastePercent?: true
  }

  export type ProductionOrderSumAggregateInputType = {
    batchWeightGm?: true
    wastePercent?: true
  }

  export type ProductionOrderMinAggregateInputType = {
    id?: true
    productId?: true
    batchWeightGm?: true
    wastePercent?: true
    notes?: true
    status?: true
    performedBy?: true
    executedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductionOrderMaxAggregateInputType = {
    id?: true
    productId?: true
    batchWeightGm?: true
    wastePercent?: true
    notes?: true
    status?: true
    performedBy?: true
    executedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductionOrderCountAggregateInputType = {
    id?: true
    productId?: true
    batchWeightGm?: true
    wastePercent?: true
    notes?: true
    status?: true
    performedBy?: true
    executedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProductionOrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductionOrder to aggregate.
     */
    where?: ProductionOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductionOrders to fetch.
     */
    orderBy?: ProductionOrderOrderByWithRelationInput | ProductionOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductionOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductionOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductionOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductionOrders
    **/
    _count?: true | ProductionOrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductionOrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductionOrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductionOrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductionOrderMaxAggregateInputType
  }

  export type GetProductionOrderAggregateType<T extends ProductionOrderAggregateArgs> = {
        [P in keyof T & keyof AggregateProductionOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductionOrder[P]>
      : GetScalarType<T[P], AggregateProductionOrder[P]>
  }




  export type ProductionOrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductionOrderWhereInput
    orderBy?: ProductionOrderOrderByWithAggregationInput | ProductionOrderOrderByWithAggregationInput[]
    by: ProductionOrderScalarFieldEnum[] | ProductionOrderScalarFieldEnum
    having?: ProductionOrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductionOrderCountAggregateInputType | true
    _avg?: ProductionOrderAvgAggregateInputType
    _sum?: ProductionOrderSumAggregateInputType
    _min?: ProductionOrderMinAggregateInputType
    _max?: ProductionOrderMaxAggregateInputType
  }

  export type ProductionOrderGroupByOutputType = {
    id: string
    productId: string
    batchWeightGm: number
    wastePercent: number
    notes: string | null
    status: string
    performedBy: string | null
    executedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: ProductionOrderCountAggregateOutputType | null
    _avg: ProductionOrderAvgAggregateOutputType | null
    _sum: ProductionOrderSumAggregateOutputType | null
    _min: ProductionOrderMinAggregateOutputType | null
    _max: ProductionOrderMaxAggregateOutputType | null
  }

  type GetProductionOrderGroupByPayload<T extends ProductionOrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductionOrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductionOrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductionOrderGroupByOutputType[P]>
            : GetScalarType<T[P], ProductionOrderGroupByOutputType[P]>
        }
      >
    >


  export type ProductionOrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    batchWeightGm?: boolean
    wastePercent?: boolean
    notes?: boolean
    status?: boolean
    performedBy?: boolean
    executedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    addonResolutions?: boolean | ProductionOrder$addonResolutionsArgs<ExtArgs>
    _count?: boolean | ProductionOrderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productionOrder"]>

  export type ProductionOrderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    batchWeightGm?: boolean
    wastePercent?: boolean
    notes?: boolean
    status?: boolean
    performedBy?: boolean
    executedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["productionOrder"]>

  export type ProductionOrderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    batchWeightGm?: boolean
    wastePercent?: boolean
    notes?: boolean
    status?: boolean
    performedBy?: boolean
    executedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["productionOrder"]>

  export type ProductionOrderSelectScalar = {
    id?: boolean
    productId?: boolean
    batchWeightGm?: boolean
    wastePercent?: boolean
    notes?: boolean
    status?: boolean
    performedBy?: boolean
    executedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProductionOrderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "productId" | "batchWeightGm" | "wastePercent" | "notes" | "status" | "performedBy" | "executedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["productionOrder"]>
  export type ProductionOrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    addonResolutions?: boolean | ProductionOrder$addonResolutionsArgs<ExtArgs>
    _count?: boolean | ProductionOrderCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductionOrderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ProductionOrderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProductionOrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductionOrder"
    objects: {
      addonResolutions: Prisma.$ProductionOrderAddonResolutionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      productId: string
      batchWeightGm: number
      wastePercent: number
      notes: string | null
      status: string
      performedBy: string | null
      executedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["productionOrder"]>
    composites: {}
  }

  type ProductionOrderGetPayload<S extends boolean | null | undefined | ProductionOrderDefaultArgs> = $Result.GetResult<Prisma.$ProductionOrderPayload, S>

  type ProductionOrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductionOrderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductionOrderCountAggregateInputType | true
    }

  export interface ProductionOrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductionOrder'], meta: { name: 'ProductionOrder' } }
    /**
     * Find zero or one ProductionOrder that matches the filter.
     * @param {ProductionOrderFindUniqueArgs} args - Arguments to find a ProductionOrder
     * @example
     * // Get one ProductionOrder
     * const productionOrder = await prisma.productionOrder.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductionOrderFindUniqueArgs>(args: SelectSubset<T, ProductionOrderFindUniqueArgs<ExtArgs>>): Prisma__ProductionOrderClient<$Result.GetResult<Prisma.$ProductionOrderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProductionOrder that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductionOrderFindUniqueOrThrowArgs} args - Arguments to find a ProductionOrder
     * @example
     * // Get one ProductionOrder
     * const productionOrder = await prisma.productionOrder.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductionOrderFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductionOrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductionOrderClient<$Result.GetResult<Prisma.$ProductionOrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductionOrder that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductionOrderFindFirstArgs} args - Arguments to find a ProductionOrder
     * @example
     * // Get one ProductionOrder
     * const productionOrder = await prisma.productionOrder.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductionOrderFindFirstArgs>(args?: SelectSubset<T, ProductionOrderFindFirstArgs<ExtArgs>>): Prisma__ProductionOrderClient<$Result.GetResult<Prisma.$ProductionOrderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductionOrder that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductionOrderFindFirstOrThrowArgs} args - Arguments to find a ProductionOrder
     * @example
     * // Get one ProductionOrder
     * const productionOrder = await prisma.productionOrder.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductionOrderFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductionOrderFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductionOrderClient<$Result.GetResult<Prisma.$ProductionOrderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProductionOrders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductionOrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductionOrders
     * const productionOrders = await prisma.productionOrder.findMany()
     * 
     * // Get first 10 ProductionOrders
     * const productionOrders = await prisma.productionOrder.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productionOrderWithIdOnly = await prisma.productionOrder.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductionOrderFindManyArgs>(args?: SelectSubset<T, ProductionOrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductionOrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProductionOrder.
     * @param {ProductionOrderCreateArgs} args - Arguments to create a ProductionOrder.
     * @example
     * // Create one ProductionOrder
     * const ProductionOrder = await prisma.productionOrder.create({
     *   data: {
     *     // ... data to create a ProductionOrder
     *   }
     * })
     * 
     */
    create<T extends ProductionOrderCreateArgs>(args: SelectSubset<T, ProductionOrderCreateArgs<ExtArgs>>): Prisma__ProductionOrderClient<$Result.GetResult<Prisma.$ProductionOrderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProductionOrders.
     * @param {ProductionOrderCreateManyArgs} args - Arguments to create many ProductionOrders.
     * @example
     * // Create many ProductionOrders
     * const productionOrder = await prisma.productionOrder.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductionOrderCreateManyArgs>(args?: SelectSubset<T, ProductionOrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProductionOrders and returns the data saved in the database.
     * @param {ProductionOrderCreateManyAndReturnArgs} args - Arguments to create many ProductionOrders.
     * @example
     * // Create many ProductionOrders
     * const productionOrder = await prisma.productionOrder.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProductionOrders and only return the `id`
     * const productionOrderWithIdOnly = await prisma.productionOrder.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductionOrderCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductionOrderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductionOrderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProductionOrder.
     * @param {ProductionOrderDeleteArgs} args - Arguments to delete one ProductionOrder.
     * @example
     * // Delete one ProductionOrder
     * const ProductionOrder = await prisma.productionOrder.delete({
     *   where: {
     *     // ... filter to delete one ProductionOrder
     *   }
     * })
     * 
     */
    delete<T extends ProductionOrderDeleteArgs>(args: SelectSubset<T, ProductionOrderDeleteArgs<ExtArgs>>): Prisma__ProductionOrderClient<$Result.GetResult<Prisma.$ProductionOrderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProductionOrder.
     * @param {ProductionOrderUpdateArgs} args - Arguments to update one ProductionOrder.
     * @example
     * // Update one ProductionOrder
     * const productionOrder = await prisma.productionOrder.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductionOrderUpdateArgs>(args: SelectSubset<T, ProductionOrderUpdateArgs<ExtArgs>>): Prisma__ProductionOrderClient<$Result.GetResult<Prisma.$ProductionOrderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProductionOrders.
     * @param {ProductionOrderDeleteManyArgs} args - Arguments to filter ProductionOrders to delete.
     * @example
     * // Delete a few ProductionOrders
     * const { count } = await prisma.productionOrder.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductionOrderDeleteManyArgs>(args?: SelectSubset<T, ProductionOrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductionOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductionOrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductionOrders
     * const productionOrder = await prisma.productionOrder.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductionOrderUpdateManyArgs>(args: SelectSubset<T, ProductionOrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductionOrders and returns the data updated in the database.
     * @param {ProductionOrderUpdateManyAndReturnArgs} args - Arguments to update many ProductionOrders.
     * @example
     * // Update many ProductionOrders
     * const productionOrder = await prisma.productionOrder.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProductionOrders and only return the `id`
     * const productionOrderWithIdOnly = await prisma.productionOrder.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProductionOrderUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductionOrderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductionOrderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProductionOrder.
     * @param {ProductionOrderUpsertArgs} args - Arguments to update or create a ProductionOrder.
     * @example
     * // Update or create a ProductionOrder
     * const productionOrder = await prisma.productionOrder.upsert({
     *   create: {
     *     // ... data to create a ProductionOrder
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductionOrder we want to update
     *   }
     * })
     */
    upsert<T extends ProductionOrderUpsertArgs>(args: SelectSubset<T, ProductionOrderUpsertArgs<ExtArgs>>): Prisma__ProductionOrderClient<$Result.GetResult<Prisma.$ProductionOrderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProductionOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductionOrderCountArgs} args - Arguments to filter ProductionOrders to count.
     * @example
     * // Count the number of ProductionOrders
     * const count = await prisma.productionOrder.count({
     *   where: {
     *     // ... the filter for the ProductionOrders we want to count
     *   }
     * })
    **/
    count<T extends ProductionOrderCountArgs>(
      args?: Subset<T, ProductionOrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductionOrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductionOrder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductionOrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductionOrderAggregateArgs>(args: Subset<T, ProductionOrderAggregateArgs>): Prisma.PrismaPromise<GetProductionOrderAggregateType<T>>

    /**
     * Group by ProductionOrder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductionOrderGroupByArgs} args - Group by arguments.
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
      T extends ProductionOrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductionOrderGroupByArgs['orderBy'] }
        : { orderBy?: ProductionOrderGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductionOrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductionOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductionOrder model
   */
  readonly fields: ProductionOrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductionOrder.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductionOrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    addonResolutions<T extends ProductionOrder$addonResolutionsArgs<ExtArgs> = {}>(args?: Subset<T, ProductionOrder$addonResolutionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductionOrderAddonResolutionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the ProductionOrder model
   */
  interface ProductionOrderFieldRefs {
    readonly id: FieldRef<"ProductionOrder", 'String'>
    readonly productId: FieldRef<"ProductionOrder", 'String'>
    readonly batchWeightGm: FieldRef<"ProductionOrder", 'Float'>
    readonly wastePercent: FieldRef<"ProductionOrder", 'Float'>
    readonly notes: FieldRef<"ProductionOrder", 'String'>
    readonly status: FieldRef<"ProductionOrder", 'String'>
    readonly performedBy: FieldRef<"ProductionOrder", 'String'>
    readonly executedAt: FieldRef<"ProductionOrder", 'DateTime'>
    readonly createdAt: FieldRef<"ProductionOrder", 'DateTime'>
    readonly updatedAt: FieldRef<"ProductionOrder", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProductionOrder findUnique
   */
  export type ProductionOrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductionOrder
     */
    select?: ProductionOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductionOrder
     */
    omit?: ProductionOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductionOrderInclude<ExtArgs> | null
    /**
     * Filter, which ProductionOrder to fetch.
     */
    where: ProductionOrderWhereUniqueInput
  }

  /**
   * ProductionOrder findUniqueOrThrow
   */
  export type ProductionOrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductionOrder
     */
    select?: ProductionOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductionOrder
     */
    omit?: ProductionOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductionOrderInclude<ExtArgs> | null
    /**
     * Filter, which ProductionOrder to fetch.
     */
    where: ProductionOrderWhereUniqueInput
  }

  /**
   * ProductionOrder findFirst
   */
  export type ProductionOrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductionOrder
     */
    select?: ProductionOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductionOrder
     */
    omit?: ProductionOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductionOrderInclude<ExtArgs> | null
    /**
     * Filter, which ProductionOrder to fetch.
     */
    where?: ProductionOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductionOrders to fetch.
     */
    orderBy?: ProductionOrderOrderByWithRelationInput | ProductionOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductionOrders.
     */
    cursor?: ProductionOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductionOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductionOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductionOrders.
     */
    distinct?: ProductionOrderScalarFieldEnum | ProductionOrderScalarFieldEnum[]
  }

  /**
   * ProductionOrder findFirstOrThrow
   */
  export type ProductionOrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductionOrder
     */
    select?: ProductionOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductionOrder
     */
    omit?: ProductionOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductionOrderInclude<ExtArgs> | null
    /**
     * Filter, which ProductionOrder to fetch.
     */
    where?: ProductionOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductionOrders to fetch.
     */
    orderBy?: ProductionOrderOrderByWithRelationInput | ProductionOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductionOrders.
     */
    cursor?: ProductionOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductionOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductionOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductionOrders.
     */
    distinct?: ProductionOrderScalarFieldEnum | ProductionOrderScalarFieldEnum[]
  }

  /**
   * ProductionOrder findMany
   */
  export type ProductionOrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductionOrder
     */
    select?: ProductionOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductionOrder
     */
    omit?: ProductionOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductionOrderInclude<ExtArgs> | null
    /**
     * Filter, which ProductionOrders to fetch.
     */
    where?: ProductionOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductionOrders to fetch.
     */
    orderBy?: ProductionOrderOrderByWithRelationInput | ProductionOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductionOrders.
     */
    cursor?: ProductionOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductionOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductionOrders.
     */
    skip?: number
    distinct?: ProductionOrderScalarFieldEnum | ProductionOrderScalarFieldEnum[]
  }

  /**
   * ProductionOrder create
   */
  export type ProductionOrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductionOrder
     */
    select?: ProductionOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductionOrder
     */
    omit?: ProductionOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductionOrderInclude<ExtArgs> | null
    /**
     * The data needed to create a ProductionOrder.
     */
    data: XOR<ProductionOrderCreateInput, ProductionOrderUncheckedCreateInput>
  }

  /**
   * ProductionOrder createMany
   */
  export type ProductionOrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductionOrders.
     */
    data: ProductionOrderCreateManyInput | ProductionOrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProductionOrder createManyAndReturn
   */
  export type ProductionOrderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductionOrder
     */
    select?: ProductionOrderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductionOrder
     */
    omit?: ProductionOrderOmit<ExtArgs> | null
    /**
     * The data used to create many ProductionOrders.
     */
    data: ProductionOrderCreateManyInput | ProductionOrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProductionOrder update
   */
  export type ProductionOrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductionOrder
     */
    select?: ProductionOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductionOrder
     */
    omit?: ProductionOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductionOrderInclude<ExtArgs> | null
    /**
     * The data needed to update a ProductionOrder.
     */
    data: XOR<ProductionOrderUpdateInput, ProductionOrderUncheckedUpdateInput>
    /**
     * Choose, which ProductionOrder to update.
     */
    where: ProductionOrderWhereUniqueInput
  }

  /**
   * ProductionOrder updateMany
   */
  export type ProductionOrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductionOrders.
     */
    data: XOR<ProductionOrderUpdateManyMutationInput, ProductionOrderUncheckedUpdateManyInput>
    /**
     * Filter which ProductionOrders to update
     */
    where?: ProductionOrderWhereInput
    /**
     * Limit how many ProductionOrders to update.
     */
    limit?: number
  }

  /**
   * ProductionOrder updateManyAndReturn
   */
  export type ProductionOrderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductionOrder
     */
    select?: ProductionOrderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductionOrder
     */
    omit?: ProductionOrderOmit<ExtArgs> | null
    /**
     * The data used to update ProductionOrders.
     */
    data: XOR<ProductionOrderUpdateManyMutationInput, ProductionOrderUncheckedUpdateManyInput>
    /**
     * Filter which ProductionOrders to update
     */
    where?: ProductionOrderWhereInput
    /**
     * Limit how many ProductionOrders to update.
     */
    limit?: number
  }

  /**
   * ProductionOrder upsert
   */
  export type ProductionOrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductionOrder
     */
    select?: ProductionOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductionOrder
     */
    omit?: ProductionOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductionOrderInclude<ExtArgs> | null
    /**
     * The filter to search for the ProductionOrder to update in case it exists.
     */
    where: ProductionOrderWhereUniqueInput
    /**
     * In case the ProductionOrder found by the `where` argument doesn't exist, create a new ProductionOrder with this data.
     */
    create: XOR<ProductionOrderCreateInput, ProductionOrderUncheckedCreateInput>
    /**
     * In case the ProductionOrder was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductionOrderUpdateInput, ProductionOrderUncheckedUpdateInput>
  }

  /**
   * ProductionOrder delete
   */
  export type ProductionOrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductionOrder
     */
    select?: ProductionOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductionOrder
     */
    omit?: ProductionOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductionOrderInclude<ExtArgs> | null
    /**
     * Filter which ProductionOrder to delete.
     */
    where: ProductionOrderWhereUniqueInput
  }

  /**
   * ProductionOrder deleteMany
   */
  export type ProductionOrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductionOrders to delete
     */
    where?: ProductionOrderWhereInput
    /**
     * Limit how many ProductionOrders to delete.
     */
    limit?: number
  }

  /**
   * ProductionOrder.addonResolutions
   */
  export type ProductionOrder$addonResolutionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductionOrderAddonResolution
     */
    select?: ProductionOrderAddonResolutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductionOrderAddonResolution
     */
    omit?: ProductionOrderAddonResolutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductionOrderAddonResolutionInclude<ExtArgs> | null
    where?: ProductionOrderAddonResolutionWhereInput
    orderBy?: ProductionOrderAddonResolutionOrderByWithRelationInput | ProductionOrderAddonResolutionOrderByWithRelationInput[]
    cursor?: ProductionOrderAddonResolutionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductionOrderAddonResolutionScalarFieldEnum | ProductionOrderAddonResolutionScalarFieldEnum[]
  }

  /**
   * ProductionOrder without action
   */
  export type ProductionOrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductionOrder
     */
    select?: ProductionOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductionOrder
     */
    omit?: ProductionOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductionOrderInclude<ExtArgs> | null
  }


  /**
   * Model ProductionOrderAddonResolution
   */

  export type AggregateProductionOrderAddonResolution = {
    _count: ProductionOrderAddonResolutionCountAggregateOutputType | null
    _min: ProductionOrderAddonResolutionMinAggregateOutputType | null
    _max: ProductionOrderAddonResolutionMaxAggregateOutputType | null
  }

  export type ProductionOrderAddonResolutionMinAggregateOutputType = {
    id: string | null
    orderId: string | null
    ingredientCategory: string | null
    addonItemId: string | null
  }

  export type ProductionOrderAddonResolutionMaxAggregateOutputType = {
    id: string | null
    orderId: string | null
    ingredientCategory: string | null
    addonItemId: string | null
  }

  export type ProductionOrderAddonResolutionCountAggregateOutputType = {
    id: number
    orderId: number
    ingredientCategory: number
    addonItemId: number
    _all: number
  }


  export type ProductionOrderAddonResolutionMinAggregateInputType = {
    id?: true
    orderId?: true
    ingredientCategory?: true
    addonItemId?: true
  }

  export type ProductionOrderAddonResolutionMaxAggregateInputType = {
    id?: true
    orderId?: true
    ingredientCategory?: true
    addonItemId?: true
  }

  export type ProductionOrderAddonResolutionCountAggregateInputType = {
    id?: true
    orderId?: true
    ingredientCategory?: true
    addonItemId?: true
    _all?: true
  }

  export type ProductionOrderAddonResolutionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductionOrderAddonResolution to aggregate.
     */
    where?: ProductionOrderAddonResolutionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductionOrderAddonResolutions to fetch.
     */
    orderBy?: ProductionOrderAddonResolutionOrderByWithRelationInput | ProductionOrderAddonResolutionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductionOrderAddonResolutionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductionOrderAddonResolutions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductionOrderAddonResolutions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductionOrderAddonResolutions
    **/
    _count?: true | ProductionOrderAddonResolutionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductionOrderAddonResolutionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductionOrderAddonResolutionMaxAggregateInputType
  }

  export type GetProductionOrderAddonResolutionAggregateType<T extends ProductionOrderAddonResolutionAggregateArgs> = {
        [P in keyof T & keyof AggregateProductionOrderAddonResolution]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductionOrderAddonResolution[P]>
      : GetScalarType<T[P], AggregateProductionOrderAddonResolution[P]>
  }




  export type ProductionOrderAddonResolutionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductionOrderAddonResolutionWhereInput
    orderBy?: ProductionOrderAddonResolutionOrderByWithAggregationInput | ProductionOrderAddonResolutionOrderByWithAggregationInput[]
    by: ProductionOrderAddonResolutionScalarFieldEnum[] | ProductionOrderAddonResolutionScalarFieldEnum
    having?: ProductionOrderAddonResolutionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductionOrderAddonResolutionCountAggregateInputType | true
    _min?: ProductionOrderAddonResolutionMinAggregateInputType
    _max?: ProductionOrderAddonResolutionMaxAggregateInputType
  }

  export type ProductionOrderAddonResolutionGroupByOutputType = {
    id: string
    orderId: string
    ingredientCategory: string
    addonItemId: string
    _count: ProductionOrderAddonResolutionCountAggregateOutputType | null
    _min: ProductionOrderAddonResolutionMinAggregateOutputType | null
    _max: ProductionOrderAddonResolutionMaxAggregateOutputType | null
  }

  type GetProductionOrderAddonResolutionGroupByPayload<T extends ProductionOrderAddonResolutionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductionOrderAddonResolutionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductionOrderAddonResolutionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductionOrderAddonResolutionGroupByOutputType[P]>
            : GetScalarType<T[P], ProductionOrderAddonResolutionGroupByOutputType[P]>
        }
      >
    >


  export type ProductionOrderAddonResolutionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    ingredientCategory?: boolean
    addonItemId?: boolean
    order?: boolean | ProductionOrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productionOrderAddonResolution"]>

  export type ProductionOrderAddonResolutionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    ingredientCategory?: boolean
    addonItemId?: boolean
    order?: boolean | ProductionOrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productionOrderAddonResolution"]>

  export type ProductionOrderAddonResolutionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    ingredientCategory?: boolean
    addonItemId?: boolean
    order?: boolean | ProductionOrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productionOrderAddonResolution"]>

  export type ProductionOrderAddonResolutionSelectScalar = {
    id?: boolean
    orderId?: boolean
    ingredientCategory?: boolean
    addonItemId?: boolean
  }

  export type ProductionOrderAddonResolutionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orderId" | "ingredientCategory" | "addonItemId", ExtArgs["result"]["productionOrderAddonResolution"]>
  export type ProductionOrderAddonResolutionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | ProductionOrderDefaultArgs<ExtArgs>
  }
  export type ProductionOrderAddonResolutionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | ProductionOrderDefaultArgs<ExtArgs>
  }
  export type ProductionOrderAddonResolutionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | ProductionOrderDefaultArgs<ExtArgs>
  }

  export type $ProductionOrderAddonResolutionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductionOrderAddonResolution"
    objects: {
      order: Prisma.$ProductionOrderPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orderId: string
      ingredientCategory: string
      addonItemId: string
    }, ExtArgs["result"]["productionOrderAddonResolution"]>
    composites: {}
  }

  type ProductionOrderAddonResolutionGetPayload<S extends boolean | null | undefined | ProductionOrderAddonResolutionDefaultArgs> = $Result.GetResult<Prisma.$ProductionOrderAddonResolutionPayload, S>

  type ProductionOrderAddonResolutionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductionOrderAddonResolutionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductionOrderAddonResolutionCountAggregateInputType | true
    }

  export interface ProductionOrderAddonResolutionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductionOrderAddonResolution'], meta: { name: 'ProductionOrderAddonResolution' } }
    /**
     * Find zero or one ProductionOrderAddonResolution that matches the filter.
     * @param {ProductionOrderAddonResolutionFindUniqueArgs} args - Arguments to find a ProductionOrderAddonResolution
     * @example
     * // Get one ProductionOrderAddonResolution
     * const productionOrderAddonResolution = await prisma.productionOrderAddonResolution.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductionOrderAddonResolutionFindUniqueArgs>(args: SelectSubset<T, ProductionOrderAddonResolutionFindUniqueArgs<ExtArgs>>): Prisma__ProductionOrderAddonResolutionClient<$Result.GetResult<Prisma.$ProductionOrderAddonResolutionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProductionOrderAddonResolution that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductionOrderAddonResolutionFindUniqueOrThrowArgs} args - Arguments to find a ProductionOrderAddonResolution
     * @example
     * // Get one ProductionOrderAddonResolution
     * const productionOrderAddonResolution = await prisma.productionOrderAddonResolution.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductionOrderAddonResolutionFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductionOrderAddonResolutionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductionOrderAddonResolutionClient<$Result.GetResult<Prisma.$ProductionOrderAddonResolutionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductionOrderAddonResolution that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductionOrderAddonResolutionFindFirstArgs} args - Arguments to find a ProductionOrderAddonResolution
     * @example
     * // Get one ProductionOrderAddonResolution
     * const productionOrderAddonResolution = await prisma.productionOrderAddonResolution.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductionOrderAddonResolutionFindFirstArgs>(args?: SelectSubset<T, ProductionOrderAddonResolutionFindFirstArgs<ExtArgs>>): Prisma__ProductionOrderAddonResolutionClient<$Result.GetResult<Prisma.$ProductionOrderAddonResolutionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductionOrderAddonResolution that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductionOrderAddonResolutionFindFirstOrThrowArgs} args - Arguments to find a ProductionOrderAddonResolution
     * @example
     * // Get one ProductionOrderAddonResolution
     * const productionOrderAddonResolution = await prisma.productionOrderAddonResolution.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductionOrderAddonResolutionFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductionOrderAddonResolutionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductionOrderAddonResolutionClient<$Result.GetResult<Prisma.$ProductionOrderAddonResolutionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProductionOrderAddonResolutions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductionOrderAddonResolutionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductionOrderAddonResolutions
     * const productionOrderAddonResolutions = await prisma.productionOrderAddonResolution.findMany()
     * 
     * // Get first 10 ProductionOrderAddonResolutions
     * const productionOrderAddonResolutions = await prisma.productionOrderAddonResolution.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productionOrderAddonResolutionWithIdOnly = await prisma.productionOrderAddonResolution.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductionOrderAddonResolutionFindManyArgs>(args?: SelectSubset<T, ProductionOrderAddonResolutionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductionOrderAddonResolutionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProductionOrderAddonResolution.
     * @param {ProductionOrderAddonResolutionCreateArgs} args - Arguments to create a ProductionOrderAddonResolution.
     * @example
     * // Create one ProductionOrderAddonResolution
     * const ProductionOrderAddonResolution = await prisma.productionOrderAddonResolution.create({
     *   data: {
     *     // ... data to create a ProductionOrderAddonResolution
     *   }
     * })
     * 
     */
    create<T extends ProductionOrderAddonResolutionCreateArgs>(args: SelectSubset<T, ProductionOrderAddonResolutionCreateArgs<ExtArgs>>): Prisma__ProductionOrderAddonResolutionClient<$Result.GetResult<Prisma.$ProductionOrderAddonResolutionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProductionOrderAddonResolutions.
     * @param {ProductionOrderAddonResolutionCreateManyArgs} args - Arguments to create many ProductionOrderAddonResolutions.
     * @example
     * // Create many ProductionOrderAddonResolutions
     * const productionOrderAddonResolution = await prisma.productionOrderAddonResolution.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductionOrderAddonResolutionCreateManyArgs>(args?: SelectSubset<T, ProductionOrderAddonResolutionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProductionOrderAddonResolutions and returns the data saved in the database.
     * @param {ProductionOrderAddonResolutionCreateManyAndReturnArgs} args - Arguments to create many ProductionOrderAddonResolutions.
     * @example
     * // Create many ProductionOrderAddonResolutions
     * const productionOrderAddonResolution = await prisma.productionOrderAddonResolution.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProductionOrderAddonResolutions and only return the `id`
     * const productionOrderAddonResolutionWithIdOnly = await prisma.productionOrderAddonResolution.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductionOrderAddonResolutionCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductionOrderAddonResolutionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductionOrderAddonResolutionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProductionOrderAddonResolution.
     * @param {ProductionOrderAddonResolutionDeleteArgs} args - Arguments to delete one ProductionOrderAddonResolution.
     * @example
     * // Delete one ProductionOrderAddonResolution
     * const ProductionOrderAddonResolution = await prisma.productionOrderAddonResolution.delete({
     *   where: {
     *     // ... filter to delete one ProductionOrderAddonResolution
     *   }
     * })
     * 
     */
    delete<T extends ProductionOrderAddonResolutionDeleteArgs>(args: SelectSubset<T, ProductionOrderAddonResolutionDeleteArgs<ExtArgs>>): Prisma__ProductionOrderAddonResolutionClient<$Result.GetResult<Prisma.$ProductionOrderAddonResolutionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProductionOrderAddonResolution.
     * @param {ProductionOrderAddonResolutionUpdateArgs} args - Arguments to update one ProductionOrderAddonResolution.
     * @example
     * // Update one ProductionOrderAddonResolution
     * const productionOrderAddonResolution = await prisma.productionOrderAddonResolution.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductionOrderAddonResolutionUpdateArgs>(args: SelectSubset<T, ProductionOrderAddonResolutionUpdateArgs<ExtArgs>>): Prisma__ProductionOrderAddonResolutionClient<$Result.GetResult<Prisma.$ProductionOrderAddonResolutionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProductionOrderAddonResolutions.
     * @param {ProductionOrderAddonResolutionDeleteManyArgs} args - Arguments to filter ProductionOrderAddonResolutions to delete.
     * @example
     * // Delete a few ProductionOrderAddonResolutions
     * const { count } = await prisma.productionOrderAddonResolution.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductionOrderAddonResolutionDeleteManyArgs>(args?: SelectSubset<T, ProductionOrderAddonResolutionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductionOrderAddonResolutions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductionOrderAddonResolutionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductionOrderAddonResolutions
     * const productionOrderAddonResolution = await prisma.productionOrderAddonResolution.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductionOrderAddonResolutionUpdateManyArgs>(args: SelectSubset<T, ProductionOrderAddonResolutionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductionOrderAddonResolutions and returns the data updated in the database.
     * @param {ProductionOrderAddonResolutionUpdateManyAndReturnArgs} args - Arguments to update many ProductionOrderAddonResolutions.
     * @example
     * // Update many ProductionOrderAddonResolutions
     * const productionOrderAddonResolution = await prisma.productionOrderAddonResolution.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProductionOrderAddonResolutions and only return the `id`
     * const productionOrderAddonResolutionWithIdOnly = await prisma.productionOrderAddonResolution.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProductionOrderAddonResolutionUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductionOrderAddonResolutionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductionOrderAddonResolutionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProductionOrderAddonResolution.
     * @param {ProductionOrderAddonResolutionUpsertArgs} args - Arguments to update or create a ProductionOrderAddonResolution.
     * @example
     * // Update or create a ProductionOrderAddonResolution
     * const productionOrderAddonResolution = await prisma.productionOrderAddonResolution.upsert({
     *   create: {
     *     // ... data to create a ProductionOrderAddonResolution
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductionOrderAddonResolution we want to update
     *   }
     * })
     */
    upsert<T extends ProductionOrderAddonResolutionUpsertArgs>(args: SelectSubset<T, ProductionOrderAddonResolutionUpsertArgs<ExtArgs>>): Prisma__ProductionOrderAddonResolutionClient<$Result.GetResult<Prisma.$ProductionOrderAddonResolutionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProductionOrderAddonResolutions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductionOrderAddonResolutionCountArgs} args - Arguments to filter ProductionOrderAddonResolutions to count.
     * @example
     * // Count the number of ProductionOrderAddonResolutions
     * const count = await prisma.productionOrderAddonResolution.count({
     *   where: {
     *     // ... the filter for the ProductionOrderAddonResolutions we want to count
     *   }
     * })
    **/
    count<T extends ProductionOrderAddonResolutionCountArgs>(
      args?: Subset<T, ProductionOrderAddonResolutionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductionOrderAddonResolutionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductionOrderAddonResolution.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductionOrderAddonResolutionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductionOrderAddonResolutionAggregateArgs>(args: Subset<T, ProductionOrderAddonResolutionAggregateArgs>): Prisma.PrismaPromise<GetProductionOrderAddonResolutionAggregateType<T>>

    /**
     * Group by ProductionOrderAddonResolution.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductionOrderAddonResolutionGroupByArgs} args - Group by arguments.
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
      T extends ProductionOrderAddonResolutionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductionOrderAddonResolutionGroupByArgs['orderBy'] }
        : { orderBy?: ProductionOrderAddonResolutionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductionOrderAddonResolutionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductionOrderAddonResolutionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductionOrderAddonResolution model
   */
  readonly fields: ProductionOrderAddonResolutionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductionOrderAddonResolution.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductionOrderAddonResolutionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    order<T extends ProductionOrderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductionOrderDefaultArgs<ExtArgs>>): Prisma__ProductionOrderClient<$Result.GetResult<Prisma.$ProductionOrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ProductionOrderAddonResolution model
   */
  interface ProductionOrderAddonResolutionFieldRefs {
    readonly id: FieldRef<"ProductionOrderAddonResolution", 'String'>
    readonly orderId: FieldRef<"ProductionOrderAddonResolution", 'String'>
    readonly ingredientCategory: FieldRef<"ProductionOrderAddonResolution", 'String'>
    readonly addonItemId: FieldRef<"ProductionOrderAddonResolution", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ProductionOrderAddonResolution findUnique
   */
  export type ProductionOrderAddonResolutionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductionOrderAddonResolution
     */
    select?: ProductionOrderAddonResolutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductionOrderAddonResolution
     */
    omit?: ProductionOrderAddonResolutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductionOrderAddonResolutionInclude<ExtArgs> | null
    /**
     * Filter, which ProductionOrderAddonResolution to fetch.
     */
    where: ProductionOrderAddonResolutionWhereUniqueInput
  }

  /**
   * ProductionOrderAddonResolution findUniqueOrThrow
   */
  export type ProductionOrderAddonResolutionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductionOrderAddonResolution
     */
    select?: ProductionOrderAddonResolutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductionOrderAddonResolution
     */
    omit?: ProductionOrderAddonResolutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductionOrderAddonResolutionInclude<ExtArgs> | null
    /**
     * Filter, which ProductionOrderAddonResolution to fetch.
     */
    where: ProductionOrderAddonResolutionWhereUniqueInput
  }

  /**
   * ProductionOrderAddonResolution findFirst
   */
  export type ProductionOrderAddonResolutionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductionOrderAddonResolution
     */
    select?: ProductionOrderAddonResolutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductionOrderAddonResolution
     */
    omit?: ProductionOrderAddonResolutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductionOrderAddonResolutionInclude<ExtArgs> | null
    /**
     * Filter, which ProductionOrderAddonResolution to fetch.
     */
    where?: ProductionOrderAddonResolutionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductionOrderAddonResolutions to fetch.
     */
    orderBy?: ProductionOrderAddonResolutionOrderByWithRelationInput | ProductionOrderAddonResolutionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductionOrderAddonResolutions.
     */
    cursor?: ProductionOrderAddonResolutionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductionOrderAddonResolutions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductionOrderAddonResolutions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductionOrderAddonResolutions.
     */
    distinct?: ProductionOrderAddonResolutionScalarFieldEnum | ProductionOrderAddonResolutionScalarFieldEnum[]
  }

  /**
   * ProductionOrderAddonResolution findFirstOrThrow
   */
  export type ProductionOrderAddonResolutionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductionOrderAddonResolution
     */
    select?: ProductionOrderAddonResolutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductionOrderAddonResolution
     */
    omit?: ProductionOrderAddonResolutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductionOrderAddonResolutionInclude<ExtArgs> | null
    /**
     * Filter, which ProductionOrderAddonResolution to fetch.
     */
    where?: ProductionOrderAddonResolutionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductionOrderAddonResolutions to fetch.
     */
    orderBy?: ProductionOrderAddonResolutionOrderByWithRelationInput | ProductionOrderAddonResolutionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductionOrderAddonResolutions.
     */
    cursor?: ProductionOrderAddonResolutionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductionOrderAddonResolutions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductionOrderAddonResolutions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductionOrderAddonResolutions.
     */
    distinct?: ProductionOrderAddonResolutionScalarFieldEnum | ProductionOrderAddonResolutionScalarFieldEnum[]
  }

  /**
   * ProductionOrderAddonResolution findMany
   */
  export type ProductionOrderAddonResolutionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductionOrderAddonResolution
     */
    select?: ProductionOrderAddonResolutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductionOrderAddonResolution
     */
    omit?: ProductionOrderAddonResolutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductionOrderAddonResolutionInclude<ExtArgs> | null
    /**
     * Filter, which ProductionOrderAddonResolutions to fetch.
     */
    where?: ProductionOrderAddonResolutionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductionOrderAddonResolutions to fetch.
     */
    orderBy?: ProductionOrderAddonResolutionOrderByWithRelationInput | ProductionOrderAddonResolutionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductionOrderAddonResolutions.
     */
    cursor?: ProductionOrderAddonResolutionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductionOrderAddonResolutions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductionOrderAddonResolutions.
     */
    skip?: number
    distinct?: ProductionOrderAddonResolutionScalarFieldEnum | ProductionOrderAddonResolutionScalarFieldEnum[]
  }

  /**
   * ProductionOrderAddonResolution create
   */
  export type ProductionOrderAddonResolutionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductionOrderAddonResolution
     */
    select?: ProductionOrderAddonResolutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductionOrderAddonResolution
     */
    omit?: ProductionOrderAddonResolutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductionOrderAddonResolutionInclude<ExtArgs> | null
    /**
     * The data needed to create a ProductionOrderAddonResolution.
     */
    data: XOR<ProductionOrderAddonResolutionCreateInput, ProductionOrderAddonResolutionUncheckedCreateInput>
  }

  /**
   * ProductionOrderAddonResolution createMany
   */
  export type ProductionOrderAddonResolutionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductionOrderAddonResolutions.
     */
    data: ProductionOrderAddonResolutionCreateManyInput | ProductionOrderAddonResolutionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProductionOrderAddonResolution createManyAndReturn
   */
  export type ProductionOrderAddonResolutionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductionOrderAddonResolution
     */
    select?: ProductionOrderAddonResolutionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductionOrderAddonResolution
     */
    omit?: ProductionOrderAddonResolutionOmit<ExtArgs> | null
    /**
     * The data used to create many ProductionOrderAddonResolutions.
     */
    data: ProductionOrderAddonResolutionCreateManyInput | ProductionOrderAddonResolutionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductionOrderAddonResolutionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductionOrderAddonResolution update
   */
  export type ProductionOrderAddonResolutionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductionOrderAddonResolution
     */
    select?: ProductionOrderAddonResolutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductionOrderAddonResolution
     */
    omit?: ProductionOrderAddonResolutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductionOrderAddonResolutionInclude<ExtArgs> | null
    /**
     * The data needed to update a ProductionOrderAddonResolution.
     */
    data: XOR<ProductionOrderAddonResolutionUpdateInput, ProductionOrderAddonResolutionUncheckedUpdateInput>
    /**
     * Choose, which ProductionOrderAddonResolution to update.
     */
    where: ProductionOrderAddonResolutionWhereUniqueInput
  }

  /**
   * ProductionOrderAddonResolution updateMany
   */
  export type ProductionOrderAddonResolutionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductionOrderAddonResolutions.
     */
    data: XOR<ProductionOrderAddonResolutionUpdateManyMutationInput, ProductionOrderAddonResolutionUncheckedUpdateManyInput>
    /**
     * Filter which ProductionOrderAddonResolutions to update
     */
    where?: ProductionOrderAddonResolutionWhereInput
    /**
     * Limit how many ProductionOrderAddonResolutions to update.
     */
    limit?: number
  }

  /**
   * ProductionOrderAddonResolution updateManyAndReturn
   */
  export type ProductionOrderAddonResolutionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductionOrderAddonResolution
     */
    select?: ProductionOrderAddonResolutionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductionOrderAddonResolution
     */
    omit?: ProductionOrderAddonResolutionOmit<ExtArgs> | null
    /**
     * The data used to update ProductionOrderAddonResolutions.
     */
    data: XOR<ProductionOrderAddonResolutionUpdateManyMutationInput, ProductionOrderAddonResolutionUncheckedUpdateManyInput>
    /**
     * Filter which ProductionOrderAddonResolutions to update
     */
    where?: ProductionOrderAddonResolutionWhereInput
    /**
     * Limit how many ProductionOrderAddonResolutions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductionOrderAddonResolutionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductionOrderAddonResolution upsert
   */
  export type ProductionOrderAddonResolutionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductionOrderAddonResolution
     */
    select?: ProductionOrderAddonResolutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductionOrderAddonResolution
     */
    omit?: ProductionOrderAddonResolutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductionOrderAddonResolutionInclude<ExtArgs> | null
    /**
     * The filter to search for the ProductionOrderAddonResolution to update in case it exists.
     */
    where: ProductionOrderAddonResolutionWhereUniqueInput
    /**
     * In case the ProductionOrderAddonResolution found by the `where` argument doesn't exist, create a new ProductionOrderAddonResolution with this data.
     */
    create: XOR<ProductionOrderAddonResolutionCreateInput, ProductionOrderAddonResolutionUncheckedCreateInput>
    /**
     * In case the ProductionOrderAddonResolution was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductionOrderAddonResolutionUpdateInput, ProductionOrderAddonResolutionUncheckedUpdateInput>
  }

  /**
   * ProductionOrderAddonResolution delete
   */
  export type ProductionOrderAddonResolutionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductionOrderAddonResolution
     */
    select?: ProductionOrderAddonResolutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductionOrderAddonResolution
     */
    omit?: ProductionOrderAddonResolutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductionOrderAddonResolutionInclude<ExtArgs> | null
    /**
     * Filter which ProductionOrderAddonResolution to delete.
     */
    where: ProductionOrderAddonResolutionWhereUniqueInput
  }

  /**
   * ProductionOrderAddonResolution deleteMany
   */
  export type ProductionOrderAddonResolutionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductionOrderAddonResolutions to delete
     */
    where?: ProductionOrderAddonResolutionWhereInput
    /**
     * Limit how many ProductionOrderAddonResolutions to delete.
     */
    limit?: number
  }

  /**
   * ProductionOrderAddonResolution without action
   */
  export type ProductionOrderAddonResolutionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductionOrderAddonResolution
     */
    select?: ProductionOrderAddonResolutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductionOrderAddonResolution
     */
    omit?: ProductionOrderAddonResolutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductionOrderAddonResolutionInclude<ExtArgs> | null
  }


  /**
   * Model FillingOrder
   */

  export type AggregateFillingOrder = {
    _count: FillingOrderCountAggregateOutputType | null
    _avg: FillingOrderAvgAggregateOutputType | null
    _sum: FillingOrderSumAggregateOutputType | null
    _min: FillingOrderMinAggregateOutputType | null
    _max: FillingOrderMaxAggregateOutputType | null
  }

  export type FillingOrderAvgAggregateOutputType = {
    bulkUsedGm: number | null
  }

  export type FillingOrderSumAggregateOutputType = {
    bulkUsedGm: number | null
  }

  export type FillingOrderMinAggregateOutputType = {
    id: string | null
    productId: string | null
    bulkUsedGm: number | null
    notes: string | null
    status: string | null
    performedBy: string | null
    executedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FillingOrderMaxAggregateOutputType = {
    id: string | null
    productId: string | null
    bulkUsedGm: number | null
    notes: string | null
    status: string | null
    performedBy: string | null
    executedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FillingOrderCountAggregateOutputType = {
    id: number
    productId: number
    bulkUsedGm: number
    notes: number
    status: number
    performedBy: number
    executedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FillingOrderAvgAggregateInputType = {
    bulkUsedGm?: true
  }

  export type FillingOrderSumAggregateInputType = {
    bulkUsedGm?: true
  }

  export type FillingOrderMinAggregateInputType = {
    id?: true
    productId?: true
    bulkUsedGm?: true
    notes?: true
    status?: true
    performedBy?: true
    executedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FillingOrderMaxAggregateInputType = {
    id?: true
    productId?: true
    bulkUsedGm?: true
    notes?: true
    status?: true
    performedBy?: true
    executedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FillingOrderCountAggregateInputType = {
    id?: true
    productId?: true
    bulkUsedGm?: true
    notes?: true
    status?: true
    performedBy?: true
    executedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FillingOrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FillingOrder to aggregate.
     */
    where?: FillingOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FillingOrders to fetch.
     */
    orderBy?: FillingOrderOrderByWithRelationInput | FillingOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FillingOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FillingOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FillingOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FillingOrders
    **/
    _count?: true | FillingOrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FillingOrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FillingOrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FillingOrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FillingOrderMaxAggregateInputType
  }

  export type GetFillingOrderAggregateType<T extends FillingOrderAggregateArgs> = {
        [P in keyof T & keyof AggregateFillingOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFillingOrder[P]>
      : GetScalarType<T[P], AggregateFillingOrder[P]>
  }




  export type FillingOrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FillingOrderWhereInput
    orderBy?: FillingOrderOrderByWithAggregationInput | FillingOrderOrderByWithAggregationInput[]
    by: FillingOrderScalarFieldEnum[] | FillingOrderScalarFieldEnum
    having?: FillingOrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FillingOrderCountAggregateInputType | true
    _avg?: FillingOrderAvgAggregateInputType
    _sum?: FillingOrderSumAggregateInputType
    _min?: FillingOrderMinAggregateInputType
    _max?: FillingOrderMaxAggregateInputType
  }

  export type FillingOrderGroupByOutputType = {
    id: string
    productId: string
    bulkUsedGm: number
    notes: string | null
    status: string
    performedBy: string | null
    executedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: FillingOrderCountAggregateOutputType | null
    _avg: FillingOrderAvgAggregateOutputType | null
    _sum: FillingOrderSumAggregateOutputType | null
    _min: FillingOrderMinAggregateOutputType | null
    _max: FillingOrderMaxAggregateOutputType | null
  }

  type GetFillingOrderGroupByPayload<T extends FillingOrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FillingOrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FillingOrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FillingOrderGroupByOutputType[P]>
            : GetScalarType<T[P], FillingOrderGroupByOutputType[P]>
        }
      >
    >


  export type FillingOrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    bulkUsedGm?: boolean
    notes?: boolean
    status?: boolean
    performedBy?: boolean
    executedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lines?: boolean | FillingOrder$linesArgs<ExtArgs>
    _count?: boolean | FillingOrderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fillingOrder"]>

  export type FillingOrderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    bulkUsedGm?: boolean
    notes?: boolean
    status?: boolean
    performedBy?: boolean
    executedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["fillingOrder"]>

  export type FillingOrderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    bulkUsedGm?: boolean
    notes?: boolean
    status?: boolean
    performedBy?: boolean
    executedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["fillingOrder"]>

  export type FillingOrderSelectScalar = {
    id?: boolean
    productId?: boolean
    bulkUsedGm?: boolean
    notes?: boolean
    status?: boolean
    performedBy?: boolean
    executedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FillingOrderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "productId" | "bulkUsedGm" | "notes" | "status" | "performedBy" | "executedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["fillingOrder"]>
  export type FillingOrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lines?: boolean | FillingOrder$linesArgs<ExtArgs>
    _count?: boolean | FillingOrderCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FillingOrderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type FillingOrderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $FillingOrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FillingOrder"
    objects: {
      lines: Prisma.$FillingOrderLinePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      productId: string
      bulkUsedGm: number
      notes: string | null
      status: string
      performedBy: string | null
      executedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["fillingOrder"]>
    composites: {}
  }

  type FillingOrderGetPayload<S extends boolean | null | undefined | FillingOrderDefaultArgs> = $Result.GetResult<Prisma.$FillingOrderPayload, S>

  type FillingOrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FillingOrderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FillingOrderCountAggregateInputType | true
    }

  export interface FillingOrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FillingOrder'], meta: { name: 'FillingOrder' } }
    /**
     * Find zero or one FillingOrder that matches the filter.
     * @param {FillingOrderFindUniqueArgs} args - Arguments to find a FillingOrder
     * @example
     * // Get one FillingOrder
     * const fillingOrder = await prisma.fillingOrder.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FillingOrderFindUniqueArgs>(args: SelectSubset<T, FillingOrderFindUniqueArgs<ExtArgs>>): Prisma__FillingOrderClient<$Result.GetResult<Prisma.$FillingOrderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FillingOrder that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FillingOrderFindUniqueOrThrowArgs} args - Arguments to find a FillingOrder
     * @example
     * // Get one FillingOrder
     * const fillingOrder = await prisma.fillingOrder.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FillingOrderFindUniqueOrThrowArgs>(args: SelectSubset<T, FillingOrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FillingOrderClient<$Result.GetResult<Prisma.$FillingOrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FillingOrder that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FillingOrderFindFirstArgs} args - Arguments to find a FillingOrder
     * @example
     * // Get one FillingOrder
     * const fillingOrder = await prisma.fillingOrder.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FillingOrderFindFirstArgs>(args?: SelectSubset<T, FillingOrderFindFirstArgs<ExtArgs>>): Prisma__FillingOrderClient<$Result.GetResult<Prisma.$FillingOrderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FillingOrder that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FillingOrderFindFirstOrThrowArgs} args - Arguments to find a FillingOrder
     * @example
     * // Get one FillingOrder
     * const fillingOrder = await prisma.fillingOrder.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FillingOrderFindFirstOrThrowArgs>(args?: SelectSubset<T, FillingOrderFindFirstOrThrowArgs<ExtArgs>>): Prisma__FillingOrderClient<$Result.GetResult<Prisma.$FillingOrderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FillingOrders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FillingOrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FillingOrders
     * const fillingOrders = await prisma.fillingOrder.findMany()
     * 
     * // Get first 10 FillingOrders
     * const fillingOrders = await prisma.fillingOrder.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fillingOrderWithIdOnly = await prisma.fillingOrder.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FillingOrderFindManyArgs>(args?: SelectSubset<T, FillingOrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FillingOrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FillingOrder.
     * @param {FillingOrderCreateArgs} args - Arguments to create a FillingOrder.
     * @example
     * // Create one FillingOrder
     * const FillingOrder = await prisma.fillingOrder.create({
     *   data: {
     *     // ... data to create a FillingOrder
     *   }
     * })
     * 
     */
    create<T extends FillingOrderCreateArgs>(args: SelectSubset<T, FillingOrderCreateArgs<ExtArgs>>): Prisma__FillingOrderClient<$Result.GetResult<Prisma.$FillingOrderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FillingOrders.
     * @param {FillingOrderCreateManyArgs} args - Arguments to create many FillingOrders.
     * @example
     * // Create many FillingOrders
     * const fillingOrder = await prisma.fillingOrder.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FillingOrderCreateManyArgs>(args?: SelectSubset<T, FillingOrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FillingOrders and returns the data saved in the database.
     * @param {FillingOrderCreateManyAndReturnArgs} args - Arguments to create many FillingOrders.
     * @example
     * // Create many FillingOrders
     * const fillingOrder = await prisma.fillingOrder.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FillingOrders and only return the `id`
     * const fillingOrderWithIdOnly = await prisma.fillingOrder.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FillingOrderCreateManyAndReturnArgs>(args?: SelectSubset<T, FillingOrderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FillingOrderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FillingOrder.
     * @param {FillingOrderDeleteArgs} args - Arguments to delete one FillingOrder.
     * @example
     * // Delete one FillingOrder
     * const FillingOrder = await prisma.fillingOrder.delete({
     *   where: {
     *     // ... filter to delete one FillingOrder
     *   }
     * })
     * 
     */
    delete<T extends FillingOrderDeleteArgs>(args: SelectSubset<T, FillingOrderDeleteArgs<ExtArgs>>): Prisma__FillingOrderClient<$Result.GetResult<Prisma.$FillingOrderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FillingOrder.
     * @param {FillingOrderUpdateArgs} args - Arguments to update one FillingOrder.
     * @example
     * // Update one FillingOrder
     * const fillingOrder = await prisma.fillingOrder.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FillingOrderUpdateArgs>(args: SelectSubset<T, FillingOrderUpdateArgs<ExtArgs>>): Prisma__FillingOrderClient<$Result.GetResult<Prisma.$FillingOrderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FillingOrders.
     * @param {FillingOrderDeleteManyArgs} args - Arguments to filter FillingOrders to delete.
     * @example
     * // Delete a few FillingOrders
     * const { count } = await prisma.fillingOrder.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FillingOrderDeleteManyArgs>(args?: SelectSubset<T, FillingOrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FillingOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FillingOrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FillingOrders
     * const fillingOrder = await prisma.fillingOrder.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FillingOrderUpdateManyArgs>(args: SelectSubset<T, FillingOrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FillingOrders and returns the data updated in the database.
     * @param {FillingOrderUpdateManyAndReturnArgs} args - Arguments to update many FillingOrders.
     * @example
     * // Update many FillingOrders
     * const fillingOrder = await prisma.fillingOrder.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FillingOrders and only return the `id`
     * const fillingOrderWithIdOnly = await prisma.fillingOrder.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FillingOrderUpdateManyAndReturnArgs>(args: SelectSubset<T, FillingOrderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FillingOrderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FillingOrder.
     * @param {FillingOrderUpsertArgs} args - Arguments to update or create a FillingOrder.
     * @example
     * // Update or create a FillingOrder
     * const fillingOrder = await prisma.fillingOrder.upsert({
     *   create: {
     *     // ... data to create a FillingOrder
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FillingOrder we want to update
     *   }
     * })
     */
    upsert<T extends FillingOrderUpsertArgs>(args: SelectSubset<T, FillingOrderUpsertArgs<ExtArgs>>): Prisma__FillingOrderClient<$Result.GetResult<Prisma.$FillingOrderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FillingOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FillingOrderCountArgs} args - Arguments to filter FillingOrders to count.
     * @example
     * // Count the number of FillingOrders
     * const count = await prisma.fillingOrder.count({
     *   where: {
     *     // ... the filter for the FillingOrders we want to count
     *   }
     * })
    **/
    count<T extends FillingOrderCountArgs>(
      args?: Subset<T, FillingOrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FillingOrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FillingOrder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FillingOrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FillingOrderAggregateArgs>(args: Subset<T, FillingOrderAggregateArgs>): Prisma.PrismaPromise<GetFillingOrderAggregateType<T>>

    /**
     * Group by FillingOrder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FillingOrderGroupByArgs} args - Group by arguments.
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
      T extends FillingOrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FillingOrderGroupByArgs['orderBy'] }
        : { orderBy?: FillingOrderGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FillingOrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFillingOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FillingOrder model
   */
  readonly fields: FillingOrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FillingOrder.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FillingOrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    lines<T extends FillingOrder$linesArgs<ExtArgs> = {}>(args?: Subset<T, FillingOrder$linesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FillingOrderLinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the FillingOrder model
   */
  interface FillingOrderFieldRefs {
    readonly id: FieldRef<"FillingOrder", 'String'>
    readonly productId: FieldRef<"FillingOrder", 'String'>
    readonly bulkUsedGm: FieldRef<"FillingOrder", 'Float'>
    readonly notes: FieldRef<"FillingOrder", 'String'>
    readonly status: FieldRef<"FillingOrder", 'String'>
    readonly performedBy: FieldRef<"FillingOrder", 'String'>
    readonly executedAt: FieldRef<"FillingOrder", 'DateTime'>
    readonly createdAt: FieldRef<"FillingOrder", 'DateTime'>
    readonly updatedAt: FieldRef<"FillingOrder", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FillingOrder findUnique
   */
  export type FillingOrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FillingOrder
     */
    select?: FillingOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FillingOrder
     */
    omit?: FillingOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FillingOrderInclude<ExtArgs> | null
    /**
     * Filter, which FillingOrder to fetch.
     */
    where: FillingOrderWhereUniqueInput
  }

  /**
   * FillingOrder findUniqueOrThrow
   */
  export type FillingOrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FillingOrder
     */
    select?: FillingOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FillingOrder
     */
    omit?: FillingOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FillingOrderInclude<ExtArgs> | null
    /**
     * Filter, which FillingOrder to fetch.
     */
    where: FillingOrderWhereUniqueInput
  }

  /**
   * FillingOrder findFirst
   */
  export type FillingOrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FillingOrder
     */
    select?: FillingOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FillingOrder
     */
    omit?: FillingOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FillingOrderInclude<ExtArgs> | null
    /**
     * Filter, which FillingOrder to fetch.
     */
    where?: FillingOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FillingOrders to fetch.
     */
    orderBy?: FillingOrderOrderByWithRelationInput | FillingOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FillingOrders.
     */
    cursor?: FillingOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FillingOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FillingOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FillingOrders.
     */
    distinct?: FillingOrderScalarFieldEnum | FillingOrderScalarFieldEnum[]
  }

  /**
   * FillingOrder findFirstOrThrow
   */
  export type FillingOrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FillingOrder
     */
    select?: FillingOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FillingOrder
     */
    omit?: FillingOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FillingOrderInclude<ExtArgs> | null
    /**
     * Filter, which FillingOrder to fetch.
     */
    where?: FillingOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FillingOrders to fetch.
     */
    orderBy?: FillingOrderOrderByWithRelationInput | FillingOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FillingOrders.
     */
    cursor?: FillingOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FillingOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FillingOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FillingOrders.
     */
    distinct?: FillingOrderScalarFieldEnum | FillingOrderScalarFieldEnum[]
  }

  /**
   * FillingOrder findMany
   */
  export type FillingOrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FillingOrder
     */
    select?: FillingOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FillingOrder
     */
    omit?: FillingOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FillingOrderInclude<ExtArgs> | null
    /**
     * Filter, which FillingOrders to fetch.
     */
    where?: FillingOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FillingOrders to fetch.
     */
    orderBy?: FillingOrderOrderByWithRelationInput | FillingOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FillingOrders.
     */
    cursor?: FillingOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FillingOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FillingOrders.
     */
    skip?: number
    distinct?: FillingOrderScalarFieldEnum | FillingOrderScalarFieldEnum[]
  }

  /**
   * FillingOrder create
   */
  export type FillingOrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FillingOrder
     */
    select?: FillingOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FillingOrder
     */
    omit?: FillingOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FillingOrderInclude<ExtArgs> | null
    /**
     * The data needed to create a FillingOrder.
     */
    data: XOR<FillingOrderCreateInput, FillingOrderUncheckedCreateInput>
  }

  /**
   * FillingOrder createMany
   */
  export type FillingOrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FillingOrders.
     */
    data: FillingOrderCreateManyInput | FillingOrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FillingOrder createManyAndReturn
   */
  export type FillingOrderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FillingOrder
     */
    select?: FillingOrderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FillingOrder
     */
    omit?: FillingOrderOmit<ExtArgs> | null
    /**
     * The data used to create many FillingOrders.
     */
    data: FillingOrderCreateManyInput | FillingOrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FillingOrder update
   */
  export type FillingOrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FillingOrder
     */
    select?: FillingOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FillingOrder
     */
    omit?: FillingOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FillingOrderInclude<ExtArgs> | null
    /**
     * The data needed to update a FillingOrder.
     */
    data: XOR<FillingOrderUpdateInput, FillingOrderUncheckedUpdateInput>
    /**
     * Choose, which FillingOrder to update.
     */
    where: FillingOrderWhereUniqueInput
  }

  /**
   * FillingOrder updateMany
   */
  export type FillingOrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FillingOrders.
     */
    data: XOR<FillingOrderUpdateManyMutationInput, FillingOrderUncheckedUpdateManyInput>
    /**
     * Filter which FillingOrders to update
     */
    where?: FillingOrderWhereInput
    /**
     * Limit how many FillingOrders to update.
     */
    limit?: number
  }

  /**
   * FillingOrder updateManyAndReturn
   */
  export type FillingOrderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FillingOrder
     */
    select?: FillingOrderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FillingOrder
     */
    omit?: FillingOrderOmit<ExtArgs> | null
    /**
     * The data used to update FillingOrders.
     */
    data: XOR<FillingOrderUpdateManyMutationInput, FillingOrderUncheckedUpdateManyInput>
    /**
     * Filter which FillingOrders to update
     */
    where?: FillingOrderWhereInput
    /**
     * Limit how many FillingOrders to update.
     */
    limit?: number
  }

  /**
   * FillingOrder upsert
   */
  export type FillingOrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FillingOrder
     */
    select?: FillingOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FillingOrder
     */
    omit?: FillingOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FillingOrderInclude<ExtArgs> | null
    /**
     * The filter to search for the FillingOrder to update in case it exists.
     */
    where: FillingOrderWhereUniqueInput
    /**
     * In case the FillingOrder found by the `where` argument doesn't exist, create a new FillingOrder with this data.
     */
    create: XOR<FillingOrderCreateInput, FillingOrderUncheckedCreateInput>
    /**
     * In case the FillingOrder was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FillingOrderUpdateInput, FillingOrderUncheckedUpdateInput>
  }

  /**
   * FillingOrder delete
   */
  export type FillingOrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FillingOrder
     */
    select?: FillingOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FillingOrder
     */
    omit?: FillingOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FillingOrderInclude<ExtArgs> | null
    /**
     * Filter which FillingOrder to delete.
     */
    where: FillingOrderWhereUniqueInput
  }

  /**
   * FillingOrder deleteMany
   */
  export type FillingOrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FillingOrders to delete
     */
    where?: FillingOrderWhereInput
    /**
     * Limit how many FillingOrders to delete.
     */
    limit?: number
  }

  /**
   * FillingOrder.lines
   */
  export type FillingOrder$linesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FillingOrderLine
     */
    select?: FillingOrderLineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FillingOrderLine
     */
    omit?: FillingOrderLineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FillingOrderLineInclude<ExtArgs> | null
    where?: FillingOrderLineWhereInput
    orderBy?: FillingOrderLineOrderByWithRelationInput | FillingOrderLineOrderByWithRelationInput[]
    cursor?: FillingOrderLineWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FillingOrderLineScalarFieldEnum | FillingOrderLineScalarFieldEnum[]
  }

  /**
   * FillingOrder without action
   */
  export type FillingOrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FillingOrder
     */
    select?: FillingOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FillingOrder
     */
    omit?: FillingOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FillingOrderInclude<ExtArgs> | null
  }


  /**
   * Model FillingOrderLine
   */

  export type AggregateFillingOrderLine = {
    _count: FillingOrderLineCountAggregateOutputType | null
    _avg: FillingOrderLineAvgAggregateOutputType | null
    _sum: FillingOrderLineSumAggregateOutputType | null
    _min: FillingOrderLineMinAggregateOutputType | null
    _max: FillingOrderLineMaxAggregateOutputType | null
  }

  export type FillingOrderLineAvgAggregateOutputType = {
    quantityUnits: number | null
    unitWeightGm: number | null
    bulkUsedGm: number | null
  }

  export type FillingOrderLineSumAggregateOutputType = {
    quantityUnits: number | null
    unitWeightGm: number | null
    bulkUsedGm: number | null
  }

  export type FillingOrderLineMinAggregateOutputType = {
    id: string | null
    fillingOrderId: string | null
    variantItemId: string | null
    variantName: string | null
    quantityUnits: number | null
    unitWeightGm: number | null
    bulkUsedGm: number | null
  }

  export type FillingOrderLineMaxAggregateOutputType = {
    id: string | null
    fillingOrderId: string | null
    variantItemId: string | null
    variantName: string | null
    quantityUnits: number | null
    unitWeightGm: number | null
    bulkUsedGm: number | null
  }

  export type FillingOrderLineCountAggregateOutputType = {
    id: number
    fillingOrderId: number
    variantItemId: number
    variantName: number
    quantityUnits: number
    unitWeightGm: number
    bulkUsedGm: number
    _all: number
  }


  export type FillingOrderLineAvgAggregateInputType = {
    quantityUnits?: true
    unitWeightGm?: true
    bulkUsedGm?: true
  }

  export type FillingOrderLineSumAggregateInputType = {
    quantityUnits?: true
    unitWeightGm?: true
    bulkUsedGm?: true
  }

  export type FillingOrderLineMinAggregateInputType = {
    id?: true
    fillingOrderId?: true
    variantItemId?: true
    variantName?: true
    quantityUnits?: true
    unitWeightGm?: true
    bulkUsedGm?: true
  }

  export type FillingOrderLineMaxAggregateInputType = {
    id?: true
    fillingOrderId?: true
    variantItemId?: true
    variantName?: true
    quantityUnits?: true
    unitWeightGm?: true
    bulkUsedGm?: true
  }

  export type FillingOrderLineCountAggregateInputType = {
    id?: true
    fillingOrderId?: true
    variantItemId?: true
    variantName?: true
    quantityUnits?: true
    unitWeightGm?: true
    bulkUsedGm?: true
    _all?: true
  }

  export type FillingOrderLineAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FillingOrderLine to aggregate.
     */
    where?: FillingOrderLineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FillingOrderLines to fetch.
     */
    orderBy?: FillingOrderLineOrderByWithRelationInput | FillingOrderLineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FillingOrderLineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FillingOrderLines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FillingOrderLines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FillingOrderLines
    **/
    _count?: true | FillingOrderLineCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FillingOrderLineAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FillingOrderLineSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FillingOrderLineMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FillingOrderLineMaxAggregateInputType
  }

  export type GetFillingOrderLineAggregateType<T extends FillingOrderLineAggregateArgs> = {
        [P in keyof T & keyof AggregateFillingOrderLine]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFillingOrderLine[P]>
      : GetScalarType<T[P], AggregateFillingOrderLine[P]>
  }




  export type FillingOrderLineGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FillingOrderLineWhereInput
    orderBy?: FillingOrderLineOrderByWithAggregationInput | FillingOrderLineOrderByWithAggregationInput[]
    by: FillingOrderLineScalarFieldEnum[] | FillingOrderLineScalarFieldEnum
    having?: FillingOrderLineScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FillingOrderLineCountAggregateInputType | true
    _avg?: FillingOrderLineAvgAggregateInputType
    _sum?: FillingOrderLineSumAggregateInputType
    _min?: FillingOrderLineMinAggregateInputType
    _max?: FillingOrderLineMaxAggregateInputType
  }

  export type FillingOrderLineGroupByOutputType = {
    id: string
    fillingOrderId: string
    variantItemId: string
    variantName: string
    quantityUnits: number
    unitWeightGm: number
    bulkUsedGm: number
    _count: FillingOrderLineCountAggregateOutputType | null
    _avg: FillingOrderLineAvgAggregateOutputType | null
    _sum: FillingOrderLineSumAggregateOutputType | null
    _min: FillingOrderLineMinAggregateOutputType | null
    _max: FillingOrderLineMaxAggregateOutputType | null
  }

  type GetFillingOrderLineGroupByPayload<T extends FillingOrderLineGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FillingOrderLineGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FillingOrderLineGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FillingOrderLineGroupByOutputType[P]>
            : GetScalarType<T[P], FillingOrderLineGroupByOutputType[P]>
        }
      >
    >


  export type FillingOrderLineSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fillingOrderId?: boolean
    variantItemId?: boolean
    variantName?: boolean
    quantityUnits?: boolean
    unitWeightGm?: boolean
    bulkUsedGm?: boolean
    fillingOrder?: boolean | FillingOrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fillingOrderLine"]>

  export type FillingOrderLineSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fillingOrderId?: boolean
    variantItemId?: boolean
    variantName?: boolean
    quantityUnits?: boolean
    unitWeightGm?: boolean
    bulkUsedGm?: boolean
    fillingOrder?: boolean | FillingOrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fillingOrderLine"]>

  export type FillingOrderLineSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fillingOrderId?: boolean
    variantItemId?: boolean
    variantName?: boolean
    quantityUnits?: boolean
    unitWeightGm?: boolean
    bulkUsedGm?: boolean
    fillingOrder?: boolean | FillingOrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fillingOrderLine"]>

  export type FillingOrderLineSelectScalar = {
    id?: boolean
    fillingOrderId?: boolean
    variantItemId?: boolean
    variantName?: boolean
    quantityUnits?: boolean
    unitWeightGm?: boolean
    bulkUsedGm?: boolean
  }

  export type FillingOrderLineOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fillingOrderId" | "variantItemId" | "variantName" | "quantityUnits" | "unitWeightGm" | "bulkUsedGm", ExtArgs["result"]["fillingOrderLine"]>
  export type FillingOrderLineInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fillingOrder?: boolean | FillingOrderDefaultArgs<ExtArgs>
  }
  export type FillingOrderLineIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fillingOrder?: boolean | FillingOrderDefaultArgs<ExtArgs>
  }
  export type FillingOrderLineIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fillingOrder?: boolean | FillingOrderDefaultArgs<ExtArgs>
  }

  export type $FillingOrderLinePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FillingOrderLine"
    objects: {
      fillingOrder: Prisma.$FillingOrderPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fillingOrderId: string
      variantItemId: string
      variantName: string
      quantityUnits: number
      unitWeightGm: number
      bulkUsedGm: number
    }, ExtArgs["result"]["fillingOrderLine"]>
    composites: {}
  }

  type FillingOrderLineGetPayload<S extends boolean | null | undefined | FillingOrderLineDefaultArgs> = $Result.GetResult<Prisma.$FillingOrderLinePayload, S>

  type FillingOrderLineCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FillingOrderLineFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FillingOrderLineCountAggregateInputType | true
    }

  export interface FillingOrderLineDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FillingOrderLine'], meta: { name: 'FillingOrderLine' } }
    /**
     * Find zero or one FillingOrderLine that matches the filter.
     * @param {FillingOrderLineFindUniqueArgs} args - Arguments to find a FillingOrderLine
     * @example
     * // Get one FillingOrderLine
     * const fillingOrderLine = await prisma.fillingOrderLine.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FillingOrderLineFindUniqueArgs>(args: SelectSubset<T, FillingOrderLineFindUniqueArgs<ExtArgs>>): Prisma__FillingOrderLineClient<$Result.GetResult<Prisma.$FillingOrderLinePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FillingOrderLine that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FillingOrderLineFindUniqueOrThrowArgs} args - Arguments to find a FillingOrderLine
     * @example
     * // Get one FillingOrderLine
     * const fillingOrderLine = await prisma.fillingOrderLine.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FillingOrderLineFindUniqueOrThrowArgs>(args: SelectSubset<T, FillingOrderLineFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FillingOrderLineClient<$Result.GetResult<Prisma.$FillingOrderLinePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FillingOrderLine that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FillingOrderLineFindFirstArgs} args - Arguments to find a FillingOrderLine
     * @example
     * // Get one FillingOrderLine
     * const fillingOrderLine = await prisma.fillingOrderLine.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FillingOrderLineFindFirstArgs>(args?: SelectSubset<T, FillingOrderLineFindFirstArgs<ExtArgs>>): Prisma__FillingOrderLineClient<$Result.GetResult<Prisma.$FillingOrderLinePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FillingOrderLine that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FillingOrderLineFindFirstOrThrowArgs} args - Arguments to find a FillingOrderLine
     * @example
     * // Get one FillingOrderLine
     * const fillingOrderLine = await prisma.fillingOrderLine.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FillingOrderLineFindFirstOrThrowArgs>(args?: SelectSubset<T, FillingOrderLineFindFirstOrThrowArgs<ExtArgs>>): Prisma__FillingOrderLineClient<$Result.GetResult<Prisma.$FillingOrderLinePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FillingOrderLines that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FillingOrderLineFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FillingOrderLines
     * const fillingOrderLines = await prisma.fillingOrderLine.findMany()
     * 
     * // Get first 10 FillingOrderLines
     * const fillingOrderLines = await prisma.fillingOrderLine.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fillingOrderLineWithIdOnly = await prisma.fillingOrderLine.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FillingOrderLineFindManyArgs>(args?: SelectSubset<T, FillingOrderLineFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FillingOrderLinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FillingOrderLine.
     * @param {FillingOrderLineCreateArgs} args - Arguments to create a FillingOrderLine.
     * @example
     * // Create one FillingOrderLine
     * const FillingOrderLine = await prisma.fillingOrderLine.create({
     *   data: {
     *     // ... data to create a FillingOrderLine
     *   }
     * })
     * 
     */
    create<T extends FillingOrderLineCreateArgs>(args: SelectSubset<T, FillingOrderLineCreateArgs<ExtArgs>>): Prisma__FillingOrderLineClient<$Result.GetResult<Prisma.$FillingOrderLinePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FillingOrderLines.
     * @param {FillingOrderLineCreateManyArgs} args - Arguments to create many FillingOrderLines.
     * @example
     * // Create many FillingOrderLines
     * const fillingOrderLine = await prisma.fillingOrderLine.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FillingOrderLineCreateManyArgs>(args?: SelectSubset<T, FillingOrderLineCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FillingOrderLines and returns the data saved in the database.
     * @param {FillingOrderLineCreateManyAndReturnArgs} args - Arguments to create many FillingOrderLines.
     * @example
     * // Create many FillingOrderLines
     * const fillingOrderLine = await prisma.fillingOrderLine.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FillingOrderLines and only return the `id`
     * const fillingOrderLineWithIdOnly = await prisma.fillingOrderLine.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FillingOrderLineCreateManyAndReturnArgs>(args?: SelectSubset<T, FillingOrderLineCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FillingOrderLinePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FillingOrderLine.
     * @param {FillingOrderLineDeleteArgs} args - Arguments to delete one FillingOrderLine.
     * @example
     * // Delete one FillingOrderLine
     * const FillingOrderLine = await prisma.fillingOrderLine.delete({
     *   where: {
     *     // ... filter to delete one FillingOrderLine
     *   }
     * })
     * 
     */
    delete<T extends FillingOrderLineDeleteArgs>(args: SelectSubset<T, FillingOrderLineDeleteArgs<ExtArgs>>): Prisma__FillingOrderLineClient<$Result.GetResult<Prisma.$FillingOrderLinePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FillingOrderLine.
     * @param {FillingOrderLineUpdateArgs} args - Arguments to update one FillingOrderLine.
     * @example
     * // Update one FillingOrderLine
     * const fillingOrderLine = await prisma.fillingOrderLine.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FillingOrderLineUpdateArgs>(args: SelectSubset<T, FillingOrderLineUpdateArgs<ExtArgs>>): Prisma__FillingOrderLineClient<$Result.GetResult<Prisma.$FillingOrderLinePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FillingOrderLines.
     * @param {FillingOrderLineDeleteManyArgs} args - Arguments to filter FillingOrderLines to delete.
     * @example
     * // Delete a few FillingOrderLines
     * const { count } = await prisma.fillingOrderLine.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FillingOrderLineDeleteManyArgs>(args?: SelectSubset<T, FillingOrderLineDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FillingOrderLines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FillingOrderLineUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FillingOrderLines
     * const fillingOrderLine = await prisma.fillingOrderLine.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FillingOrderLineUpdateManyArgs>(args: SelectSubset<T, FillingOrderLineUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FillingOrderLines and returns the data updated in the database.
     * @param {FillingOrderLineUpdateManyAndReturnArgs} args - Arguments to update many FillingOrderLines.
     * @example
     * // Update many FillingOrderLines
     * const fillingOrderLine = await prisma.fillingOrderLine.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FillingOrderLines and only return the `id`
     * const fillingOrderLineWithIdOnly = await prisma.fillingOrderLine.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FillingOrderLineUpdateManyAndReturnArgs>(args: SelectSubset<T, FillingOrderLineUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FillingOrderLinePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FillingOrderLine.
     * @param {FillingOrderLineUpsertArgs} args - Arguments to update or create a FillingOrderLine.
     * @example
     * // Update or create a FillingOrderLine
     * const fillingOrderLine = await prisma.fillingOrderLine.upsert({
     *   create: {
     *     // ... data to create a FillingOrderLine
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FillingOrderLine we want to update
     *   }
     * })
     */
    upsert<T extends FillingOrderLineUpsertArgs>(args: SelectSubset<T, FillingOrderLineUpsertArgs<ExtArgs>>): Prisma__FillingOrderLineClient<$Result.GetResult<Prisma.$FillingOrderLinePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FillingOrderLines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FillingOrderLineCountArgs} args - Arguments to filter FillingOrderLines to count.
     * @example
     * // Count the number of FillingOrderLines
     * const count = await prisma.fillingOrderLine.count({
     *   where: {
     *     // ... the filter for the FillingOrderLines we want to count
     *   }
     * })
    **/
    count<T extends FillingOrderLineCountArgs>(
      args?: Subset<T, FillingOrderLineCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FillingOrderLineCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FillingOrderLine.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FillingOrderLineAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FillingOrderLineAggregateArgs>(args: Subset<T, FillingOrderLineAggregateArgs>): Prisma.PrismaPromise<GetFillingOrderLineAggregateType<T>>

    /**
     * Group by FillingOrderLine.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FillingOrderLineGroupByArgs} args - Group by arguments.
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
      T extends FillingOrderLineGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FillingOrderLineGroupByArgs['orderBy'] }
        : { orderBy?: FillingOrderLineGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FillingOrderLineGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFillingOrderLineGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FillingOrderLine model
   */
  readonly fields: FillingOrderLineFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FillingOrderLine.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FillingOrderLineClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    fillingOrder<T extends FillingOrderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FillingOrderDefaultArgs<ExtArgs>>): Prisma__FillingOrderClient<$Result.GetResult<Prisma.$FillingOrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the FillingOrderLine model
   */
  interface FillingOrderLineFieldRefs {
    readonly id: FieldRef<"FillingOrderLine", 'String'>
    readonly fillingOrderId: FieldRef<"FillingOrderLine", 'String'>
    readonly variantItemId: FieldRef<"FillingOrderLine", 'String'>
    readonly variantName: FieldRef<"FillingOrderLine", 'String'>
    readonly quantityUnits: FieldRef<"FillingOrderLine", 'Float'>
    readonly unitWeightGm: FieldRef<"FillingOrderLine", 'Float'>
    readonly bulkUsedGm: FieldRef<"FillingOrderLine", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * FillingOrderLine findUnique
   */
  export type FillingOrderLineFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FillingOrderLine
     */
    select?: FillingOrderLineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FillingOrderLine
     */
    omit?: FillingOrderLineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FillingOrderLineInclude<ExtArgs> | null
    /**
     * Filter, which FillingOrderLine to fetch.
     */
    where: FillingOrderLineWhereUniqueInput
  }

  /**
   * FillingOrderLine findUniqueOrThrow
   */
  export type FillingOrderLineFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FillingOrderLine
     */
    select?: FillingOrderLineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FillingOrderLine
     */
    omit?: FillingOrderLineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FillingOrderLineInclude<ExtArgs> | null
    /**
     * Filter, which FillingOrderLine to fetch.
     */
    where: FillingOrderLineWhereUniqueInput
  }

  /**
   * FillingOrderLine findFirst
   */
  export type FillingOrderLineFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FillingOrderLine
     */
    select?: FillingOrderLineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FillingOrderLine
     */
    omit?: FillingOrderLineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FillingOrderLineInclude<ExtArgs> | null
    /**
     * Filter, which FillingOrderLine to fetch.
     */
    where?: FillingOrderLineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FillingOrderLines to fetch.
     */
    orderBy?: FillingOrderLineOrderByWithRelationInput | FillingOrderLineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FillingOrderLines.
     */
    cursor?: FillingOrderLineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FillingOrderLines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FillingOrderLines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FillingOrderLines.
     */
    distinct?: FillingOrderLineScalarFieldEnum | FillingOrderLineScalarFieldEnum[]
  }

  /**
   * FillingOrderLine findFirstOrThrow
   */
  export type FillingOrderLineFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FillingOrderLine
     */
    select?: FillingOrderLineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FillingOrderLine
     */
    omit?: FillingOrderLineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FillingOrderLineInclude<ExtArgs> | null
    /**
     * Filter, which FillingOrderLine to fetch.
     */
    where?: FillingOrderLineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FillingOrderLines to fetch.
     */
    orderBy?: FillingOrderLineOrderByWithRelationInput | FillingOrderLineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FillingOrderLines.
     */
    cursor?: FillingOrderLineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FillingOrderLines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FillingOrderLines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FillingOrderLines.
     */
    distinct?: FillingOrderLineScalarFieldEnum | FillingOrderLineScalarFieldEnum[]
  }

  /**
   * FillingOrderLine findMany
   */
  export type FillingOrderLineFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FillingOrderLine
     */
    select?: FillingOrderLineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FillingOrderLine
     */
    omit?: FillingOrderLineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FillingOrderLineInclude<ExtArgs> | null
    /**
     * Filter, which FillingOrderLines to fetch.
     */
    where?: FillingOrderLineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FillingOrderLines to fetch.
     */
    orderBy?: FillingOrderLineOrderByWithRelationInput | FillingOrderLineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FillingOrderLines.
     */
    cursor?: FillingOrderLineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FillingOrderLines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FillingOrderLines.
     */
    skip?: number
    distinct?: FillingOrderLineScalarFieldEnum | FillingOrderLineScalarFieldEnum[]
  }

  /**
   * FillingOrderLine create
   */
  export type FillingOrderLineCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FillingOrderLine
     */
    select?: FillingOrderLineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FillingOrderLine
     */
    omit?: FillingOrderLineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FillingOrderLineInclude<ExtArgs> | null
    /**
     * The data needed to create a FillingOrderLine.
     */
    data: XOR<FillingOrderLineCreateInput, FillingOrderLineUncheckedCreateInput>
  }

  /**
   * FillingOrderLine createMany
   */
  export type FillingOrderLineCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FillingOrderLines.
     */
    data: FillingOrderLineCreateManyInput | FillingOrderLineCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FillingOrderLine createManyAndReturn
   */
  export type FillingOrderLineCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FillingOrderLine
     */
    select?: FillingOrderLineSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FillingOrderLine
     */
    omit?: FillingOrderLineOmit<ExtArgs> | null
    /**
     * The data used to create many FillingOrderLines.
     */
    data: FillingOrderLineCreateManyInput | FillingOrderLineCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FillingOrderLineIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FillingOrderLine update
   */
  export type FillingOrderLineUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FillingOrderLine
     */
    select?: FillingOrderLineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FillingOrderLine
     */
    omit?: FillingOrderLineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FillingOrderLineInclude<ExtArgs> | null
    /**
     * The data needed to update a FillingOrderLine.
     */
    data: XOR<FillingOrderLineUpdateInput, FillingOrderLineUncheckedUpdateInput>
    /**
     * Choose, which FillingOrderLine to update.
     */
    where: FillingOrderLineWhereUniqueInput
  }

  /**
   * FillingOrderLine updateMany
   */
  export type FillingOrderLineUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FillingOrderLines.
     */
    data: XOR<FillingOrderLineUpdateManyMutationInput, FillingOrderLineUncheckedUpdateManyInput>
    /**
     * Filter which FillingOrderLines to update
     */
    where?: FillingOrderLineWhereInput
    /**
     * Limit how many FillingOrderLines to update.
     */
    limit?: number
  }

  /**
   * FillingOrderLine updateManyAndReturn
   */
  export type FillingOrderLineUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FillingOrderLine
     */
    select?: FillingOrderLineSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FillingOrderLine
     */
    omit?: FillingOrderLineOmit<ExtArgs> | null
    /**
     * The data used to update FillingOrderLines.
     */
    data: XOR<FillingOrderLineUpdateManyMutationInput, FillingOrderLineUncheckedUpdateManyInput>
    /**
     * Filter which FillingOrderLines to update
     */
    where?: FillingOrderLineWhereInput
    /**
     * Limit how many FillingOrderLines to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FillingOrderLineIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * FillingOrderLine upsert
   */
  export type FillingOrderLineUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FillingOrderLine
     */
    select?: FillingOrderLineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FillingOrderLine
     */
    omit?: FillingOrderLineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FillingOrderLineInclude<ExtArgs> | null
    /**
     * The filter to search for the FillingOrderLine to update in case it exists.
     */
    where: FillingOrderLineWhereUniqueInput
    /**
     * In case the FillingOrderLine found by the `where` argument doesn't exist, create a new FillingOrderLine with this data.
     */
    create: XOR<FillingOrderLineCreateInput, FillingOrderLineUncheckedCreateInput>
    /**
     * In case the FillingOrderLine was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FillingOrderLineUpdateInput, FillingOrderLineUncheckedUpdateInput>
  }

  /**
   * FillingOrderLine delete
   */
  export type FillingOrderLineDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FillingOrderLine
     */
    select?: FillingOrderLineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FillingOrderLine
     */
    omit?: FillingOrderLineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FillingOrderLineInclude<ExtArgs> | null
    /**
     * Filter which FillingOrderLine to delete.
     */
    where: FillingOrderLineWhereUniqueInput
  }

  /**
   * FillingOrderLine deleteMany
   */
  export type FillingOrderLineDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FillingOrderLines to delete
     */
    where?: FillingOrderLineWhereInput
    /**
     * Limit how many FillingOrderLines to delete.
     */
    limit?: number
  }

  /**
   * FillingOrderLine without action
   */
  export type FillingOrderLineDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FillingOrderLine
     */
    select?: FillingOrderLineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FillingOrderLine
     */
    omit?: FillingOrderLineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FillingOrderLineInclude<ExtArgs> | null
  }


  /**
   * Model BulkStock
   */

  export type AggregateBulkStock = {
    _count: BulkStockCountAggregateOutputType | null
    _avg: BulkStockAvgAggregateOutputType | null
    _sum: BulkStockSumAggregateOutputType | null
    _min: BulkStockMinAggregateOutputType | null
    _max: BulkStockMaxAggregateOutputType | null
  }

  export type BulkStockAvgAggregateOutputType = {
    availableGm: number | null
  }

  export type BulkStockSumAggregateOutputType = {
    availableGm: number | null
  }

  export type BulkStockMinAggregateOutputType = {
    id: string | null
    productId: string | null
    availableGm: number | null
    updatedAt: Date | null
  }

  export type BulkStockMaxAggregateOutputType = {
    id: string | null
    productId: string | null
    availableGm: number | null
    updatedAt: Date | null
  }

  export type BulkStockCountAggregateOutputType = {
    id: number
    productId: number
    availableGm: number
    updatedAt: number
    _all: number
  }


  export type BulkStockAvgAggregateInputType = {
    availableGm?: true
  }

  export type BulkStockSumAggregateInputType = {
    availableGm?: true
  }

  export type BulkStockMinAggregateInputType = {
    id?: true
    productId?: true
    availableGm?: true
    updatedAt?: true
  }

  export type BulkStockMaxAggregateInputType = {
    id?: true
    productId?: true
    availableGm?: true
    updatedAt?: true
  }

  export type BulkStockCountAggregateInputType = {
    id?: true
    productId?: true
    availableGm?: true
    updatedAt?: true
    _all?: true
  }

  export type BulkStockAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BulkStock to aggregate.
     */
    where?: BulkStockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BulkStocks to fetch.
     */
    orderBy?: BulkStockOrderByWithRelationInput | BulkStockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BulkStockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BulkStocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BulkStocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BulkStocks
    **/
    _count?: true | BulkStockCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BulkStockAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BulkStockSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BulkStockMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BulkStockMaxAggregateInputType
  }

  export type GetBulkStockAggregateType<T extends BulkStockAggregateArgs> = {
        [P in keyof T & keyof AggregateBulkStock]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBulkStock[P]>
      : GetScalarType<T[P], AggregateBulkStock[P]>
  }




  export type BulkStockGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BulkStockWhereInput
    orderBy?: BulkStockOrderByWithAggregationInput | BulkStockOrderByWithAggregationInput[]
    by: BulkStockScalarFieldEnum[] | BulkStockScalarFieldEnum
    having?: BulkStockScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BulkStockCountAggregateInputType | true
    _avg?: BulkStockAvgAggregateInputType
    _sum?: BulkStockSumAggregateInputType
    _min?: BulkStockMinAggregateInputType
    _max?: BulkStockMaxAggregateInputType
  }

  export type BulkStockGroupByOutputType = {
    id: string
    productId: string
    availableGm: number
    updatedAt: Date
    _count: BulkStockCountAggregateOutputType | null
    _avg: BulkStockAvgAggregateOutputType | null
    _sum: BulkStockSumAggregateOutputType | null
    _min: BulkStockMinAggregateOutputType | null
    _max: BulkStockMaxAggregateOutputType | null
  }

  type GetBulkStockGroupByPayload<T extends BulkStockGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BulkStockGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BulkStockGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BulkStockGroupByOutputType[P]>
            : GetScalarType<T[P], BulkStockGroupByOutputType[P]>
        }
      >
    >


  export type BulkStockSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    availableGm?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["bulkStock"]>

  export type BulkStockSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    availableGm?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["bulkStock"]>

  export type BulkStockSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    availableGm?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["bulkStock"]>

  export type BulkStockSelectScalar = {
    id?: boolean
    productId?: boolean
    availableGm?: boolean
    updatedAt?: boolean
  }

  export type BulkStockOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "productId" | "availableGm" | "updatedAt", ExtArgs["result"]["bulkStock"]>

  export type $BulkStockPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BulkStock"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      productId: string
      availableGm: number
      updatedAt: Date
    }, ExtArgs["result"]["bulkStock"]>
    composites: {}
  }

  type BulkStockGetPayload<S extends boolean | null | undefined | BulkStockDefaultArgs> = $Result.GetResult<Prisma.$BulkStockPayload, S>

  type BulkStockCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BulkStockFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BulkStockCountAggregateInputType | true
    }

  export interface BulkStockDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BulkStock'], meta: { name: 'BulkStock' } }
    /**
     * Find zero or one BulkStock that matches the filter.
     * @param {BulkStockFindUniqueArgs} args - Arguments to find a BulkStock
     * @example
     * // Get one BulkStock
     * const bulkStock = await prisma.bulkStock.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BulkStockFindUniqueArgs>(args: SelectSubset<T, BulkStockFindUniqueArgs<ExtArgs>>): Prisma__BulkStockClient<$Result.GetResult<Prisma.$BulkStockPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BulkStock that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BulkStockFindUniqueOrThrowArgs} args - Arguments to find a BulkStock
     * @example
     * // Get one BulkStock
     * const bulkStock = await prisma.bulkStock.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BulkStockFindUniqueOrThrowArgs>(args: SelectSubset<T, BulkStockFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BulkStockClient<$Result.GetResult<Prisma.$BulkStockPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BulkStock that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BulkStockFindFirstArgs} args - Arguments to find a BulkStock
     * @example
     * // Get one BulkStock
     * const bulkStock = await prisma.bulkStock.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BulkStockFindFirstArgs>(args?: SelectSubset<T, BulkStockFindFirstArgs<ExtArgs>>): Prisma__BulkStockClient<$Result.GetResult<Prisma.$BulkStockPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BulkStock that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BulkStockFindFirstOrThrowArgs} args - Arguments to find a BulkStock
     * @example
     * // Get one BulkStock
     * const bulkStock = await prisma.bulkStock.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BulkStockFindFirstOrThrowArgs>(args?: SelectSubset<T, BulkStockFindFirstOrThrowArgs<ExtArgs>>): Prisma__BulkStockClient<$Result.GetResult<Prisma.$BulkStockPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BulkStocks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BulkStockFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BulkStocks
     * const bulkStocks = await prisma.bulkStock.findMany()
     * 
     * // Get first 10 BulkStocks
     * const bulkStocks = await prisma.bulkStock.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bulkStockWithIdOnly = await prisma.bulkStock.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BulkStockFindManyArgs>(args?: SelectSubset<T, BulkStockFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BulkStockPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BulkStock.
     * @param {BulkStockCreateArgs} args - Arguments to create a BulkStock.
     * @example
     * // Create one BulkStock
     * const BulkStock = await prisma.bulkStock.create({
     *   data: {
     *     // ... data to create a BulkStock
     *   }
     * })
     * 
     */
    create<T extends BulkStockCreateArgs>(args: SelectSubset<T, BulkStockCreateArgs<ExtArgs>>): Prisma__BulkStockClient<$Result.GetResult<Prisma.$BulkStockPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BulkStocks.
     * @param {BulkStockCreateManyArgs} args - Arguments to create many BulkStocks.
     * @example
     * // Create many BulkStocks
     * const bulkStock = await prisma.bulkStock.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BulkStockCreateManyArgs>(args?: SelectSubset<T, BulkStockCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BulkStocks and returns the data saved in the database.
     * @param {BulkStockCreateManyAndReturnArgs} args - Arguments to create many BulkStocks.
     * @example
     * // Create many BulkStocks
     * const bulkStock = await prisma.bulkStock.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BulkStocks and only return the `id`
     * const bulkStockWithIdOnly = await prisma.bulkStock.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BulkStockCreateManyAndReturnArgs>(args?: SelectSubset<T, BulkStockCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BulkStockPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BulkStock.
     * @param {BulkStockDeleteArgs} args - Arguments to delete one BulkStock.
     * @example
     * // Delete one BulkStock
     * const BulkStock = await prisma.bulkStock.delete({
     *   where: {
     *     // ... filter to delete one BulkStock
     *   }
     * })
     * 
     */
    delete<T extends BulkStockDeleteArgs>(args: SelectSubset<T, BulkStockDeleteArgs<ExtArgs>>): Prisma__BulkStockClient<$Result.GetResult<Prisma.$BulkStockPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BulkStock.
     * @param {BulkStockUpdateArgs} args - Arguments to update one BulkStock.
     * @example
     * // Update one BulkStock
     * const bulkStock = await prisma.bulkStock.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BulkStockUpdateArgs>(args: SelectSubset<T, BulkStockUpdateArgs<ExtArgs>>): Prisma__BulkStockClient<$Result.GetResult<Prisma.$BulkStockPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BulkStocks.
     * @param {BulkStockDeleteManyArgs} args - Arguments to filter BulkStocks to delete.
     * @example
     * // Delete a few BulkStocks
     * const { count } = await prisma.bulkStock.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BulkStockDeleteManyArgs>(args?: SelectSubset<T, BulkStockDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BulkStocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BulkStockUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BulkStocks
     * const bulkStock = await prisma.bulkStock.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BulkStockUpdateManyArgs>(args: SelectSubset<T, BulkStockUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BulkStocks and returns the data updated in the database.
     * @param {BulkStockUpdateManyAndReturnArgs} args - Arguments to update many BulkStocks.
     * @example
     * // Update many BulkStocks
     * const bulkStock = await prisma.bulkStock.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BulkStocks and only return the `id`
     * const bulkStockWithIdOnly = await prisma.bulkStock.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BulkStockUpdateManyAndReturnArgs>(args: SelectSubset<T, BulkStockUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BulkStockPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BulkStock.
     * @param {BulkStockUpsertArgs} args - Arguments to update or create a BulkStock.
     * @example
     * // Update or create a BulkStock
     * const bulkStock = await prisma.bulkStock.upsert({
     *   create: {
     *     // ... data to create a BulkStock
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BulkStock we want to update
     *   }
     * })
     */
    upsert<T extends BulkStockUpsertArgs>(args: SelectSubset<T, BulkStockUpsertArgs<ExtArgs>>): Prisma__BulkStockClient<$Result.GetResult<Prisma.$BulkStockPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BulkStocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BulkStockCountArgs} args - Arguments to filter BulkStocks to count.
     * @example
     * // Count the number of BulkStocks
     * const count = await prisma.bulkStock.count({
     *   where: {
     *     // ... the filter for the BulkStocks we want to count
     *   }
     * })
    **/
    count<T extends BulkStockCountArgs>(
      args?: Subset<T, BulkStockCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BulkStockCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BulkStock.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BulkStockAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BulkStockAggregateArgs>(args: Subset<T, BulkStockAggregateArgs>): Prisma.PrismaPromise<GetBulkStockAggregateType<T>>

    /**
     * Group by BulkStock.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BulkStockGroupByArgs} args - Group by arguments.
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
      T extends BulkStockGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BulkStockGroupByArgs['orderBy'] }
        : { orderBy?: BulkStockGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BulkStockGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBulkStockGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BulkStock model
   */
  readonly fields: BulkStockFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BulkStock.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BulkStockClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the BulkStock model
   */
  interface BulkStockFieldRefs {
    readonly id: FieldRef<"BulkStock", 'String'>
    readonly productId: FieldRef<"BulkStock", 'String'>
    readonly availableGm: FieldRef<"BulkStock", 'Float'>
    readonly updatedAt: FieldRef<"BulkStock", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BulkStock findUnique
   */
  export type BulkStockFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BulkStock
     */
    select?: BulkStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BulkStock
     */
    omit?: BulkStockOmit<ExtArgs> | null
    /**
     * Filter, which BulkStock to fetch.
     */
    where: BulkStockWhereUniqueInput
  }

  /**
   * BulkStock findUniqueOrThrow
   */
  export type BulkStockFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BulkStock
     */
    select?: BulkStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BulkStock
     */
    omit?: BulkStockOmit<ExtArgs> | null
    /**
     * Filter, which BulkStock to fetch.
     */
    where: BulkStockWhereUniqueInput
  }

  /**
   * BulkStock findFirst
   */
  export type BulkStockFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BulkStock
     */
    select?: BulkStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BulkStock
     */
    omit?: BulkStockOmit<ExtArgs> | null
    /**
     * Filter, which BulkStock to fetch.
     */
    where?: BulkStockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BulkStocks to fetch.
     */
    orderBy?: BulkStockOrderByWithRelationInput | BulkStockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BulkStocks.
     */
    cursor?: BulkStockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BulkStocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BulkStocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BulkStocks.
     */
    distinct?: BulkStockScalarFieldEnum | BulkStockScalarFieldEnum[]
  }

  /**
   * BulkStock findFirstOrThrow
   */
  export type BulkStockFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BulkStock
     */
    select?: BulkStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BulkStock
     */
    omit?: BulkStockOmit<ExtArgs> | null
    /**
     * Filter, which BulkStock to fetch.
     */
    where?: BulkStockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BulkStocks to fetch.
     */
    orderBy?: BulkStockOrderByWithRelationInput | BulkStockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BulkStocks.
     */
    cursor?: BulkStockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BulkStocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BulkStocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BulkStocks.
     */
    distinct?: BulkStockScalarFieldEnum | BulkStockScalarFieldEnum[]
  }

  /**
   * BulkStock findMany
   */
  export type BulkStockFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BulkStock
     */
    select?: BulkStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BulkStock
     */
    omit?: BulkStockOmit<ExtArgs> | null
    /**
     * Filter, which BulkStocks to fetch.
     */
    where?: BulkStockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BulkStocks to fetch.
     */
    orderBy?: BulkStockOrderByWithRelationInput | BulkStockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BulkStocks.
     */
    cursor?: BulkStockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BulkStocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BulkStocks.
     */
    skip?: number
    distinct?: BulkStockScalarFieldEnum | BulkStockScalarFieldEnum[]
  }

  /**
   * BulkStock create
   */
  export type BulkStockCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BulkStock
     */
    select?: BulkStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BulkStock
     */
    omit?: BulkStockOmit<ExtArgs> | null
    /**
     * The data needed to create a BulkStock.
     */
    data: XOR<BulkStockCreateInput, BulkStockUncheckedCreateInput>
  }

  /**
   * BulkStock createMany
   */
  export type BulkStockCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BulkStocks.
     */
    data: BulkStockCreateManyInput | BulkStockCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BulkStock createManyAndReturn
   */
  export type BulkStockCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BulkStock
     */
    select?: BulkStockSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BulkStock
     */
    omit?: BulkStockOmit<ExtArgs> | null
    /**
     * The data used to create many BulkStocks.
     */
    data: BulkStockCreateManyInput | BulkStockCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BulkStock update
   */
  export type BulkStockUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BulkStock
     */
    select?: BulkStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BulkStock
     */
    omit?: BulkStockOmit<ExtArgs> | null
    /**
     * The data needed to update a BulkStock.
     */
    data: XOR<BulkStockUpdateInput, BulkStockUncheckedUpdateInput>
    /**
     * Choose, which BulkStock to update.
     */
    where: BulkStockWhereUniqueInput
  }

  /**
   * BulkStock updateMany
   */
  export type BulkStockUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BulkStocks.
     */
    data: XOR<BulkStockUpdateManyMutationInput, BulkStockUncheckedUpdateManyInput>
    /**
     * Filter which BulkStocks to update
     */
    where?: BulkStockWhereInput
    /**
     * Limit how many BulkStocks to update.
     */
    limit?: number
  }

  /**
   * BulkStock updateManyAndReturn
   */
  export type BulkStockUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BulkStock
     */
    select?: BulkStockSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BulkStock
     */
    omit?: BulkStockOmit<ExtArgs> | null
    /**
     * The data used to update BulkStocks.
     */
    data: XOR<BulkStockUpdateManyMutationInput, BulkStockUncheckedUpdateManyInput>
    /**
     * Filter which BulkStocks to update
     */
    where?: BulkStockWhereInput
    /**
     * Limit how many BulkStocks to update.
     */
    limit?: number
  }

  /**
   * BulkStock upsert
   */
  export type BulkStockUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BulkStock
     */
    select?: BulkStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BulkStock
     */
    omit?: BulkStockOmit<ExtArgs> | null
    /**
     * The filter to search for the BulkStock to update in case it exists.
     */
    where: BulkStockWhereUniqueInput
    /**
     * In case the BulkStock found by the `where` argument doesn't exist, create a new BulkStock with this data.
     */
    create: XOR<BulkStockCreateInput, BulkStockUncheckedCreateInput>
    /**
     * In case the BulkStock was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BulkStockUpdateInput, BulkStockUncheckedUpdateInput>
  }

  /**
   * BulkStock delete
   */
  export type BulkStockDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BulkStock
     */
    select?: BulkStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BulkStock
     */
    omit?: BulkStockOmit<ExtArgs> | null
    /**
     * Filter which BulkStock to delete.
     */
    where: BulkStockWhereUniqueInput
  }

  /**
   * BulkStock deleteMany
   */
  export type BulkStockDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BulkStocks to delete
     */
    where?: BulkStockWhereInput
    /**
     * Limit how many BulkStocks to delete.
     */
    limit?: number
  }

  /**
   * BulkStock without action
   */
  export type BulkStockDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BulkStock
     */
    select?: BulkStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BulkStock
     */
    omit?: BulkStockOmit<ExtArgs> | null
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


  export const ProductionOrderScalarFieldEnum: {
    id: 'id',
    productId: 'productId',
    batchWeightGm: 'batchWeightGm',
    wastePercent: 'wastePercent',
    notes: 'notes',
    status: 'status',
    performedBy: 'performedBy',
    executedAt: 'executedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProductionOrderScalarFieldEnum = (typeof ProductionOrderScalarFieldEnum)[keyof typeof ProductionOrderScalarFieldEnum]


  export const ProductionOrderAddonResolutionScalarFieldEnum: {
    id: 'id',
    orderId: 'orderId',
    ingredientCategory: 'ingredientCategory',
    addonItemId: 'addonItemId'
  };

  export type ProductionOrderAddonResolutionScalarFieldEnum = (typeof ProductionOrderAddonResolutionScalarFieldEnum)[keyof typeof ProductionOrderAddonResolutionScalarFieldEnum]


  export const FillingOrderScalarFieldEnum: {
    id: 'id',
    productId: 'productId',
    bulkUsedGm: 'bulkUsedGm',
    notes: 'notes',
    status: 'status',
    performedBy: 'performedBy',
    executedAt: 'executedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FillingOrderScalarFieldEnum = (typeof FillingOrderScalarFieldEnum)[keyof typeof FillingOrderScalarFieldEnum]


  export const FillingOrderLineScalarFieldEnum: {
    id: 'id',
    fillingOrderId: 'fillingOrderId',
    variantItemId: 'variantItemId',
    variantName: 'variantName',
    quantityUnits: 'quantityUnits',
    unitWeightGm: 'unitWeightGm',
    bulkUsedGm: 'bulkUsedGm'
  };

  export type FillingOrderLineScalarFieldEnum = (typeof FillingOrderLineScalarFieldEnum)[keyof typeof FillingOrderLineScalarFieldEnum]


  export const BulkStockScalarFieldEnum: {
    id: 'id',
    productId: 'productId',
    availableGm: 'availableGm',
    updatedAt: 'updatedAt'
  };

  export type BulkStockScalarFieldEnum = (typeof BulkStockScalarFieldEnum)[keyof typeof BulkStockScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type ProductionOrderWhereInput = {
    AND?: ProductionOrderWhereInput | ProductionOrderWhereInput[]
    OR?: ProductionOrderWhereInput[]
    NOT?: ProductionOrderWhereInput | ProductionOrderWhereInput[]
    id?: StringFilter<"ProductionOrder"> | string
    productId?: StringFilter<"ProductionOrder"> | string
    batchWeightGm?: FloatFilter<"ProductionOrder"> | number
    wastePercent?: FloatFilter<"ProductionOrder"> | number
    notes?: StringNullableFilter<"ProductionOrder"> | string | null
    status?: StringFilter<"ProductionOrder"> | string
    performedBy?: StringNullableFilter<"ProductionOrder"> | string | null
    executedAt?: DateTimeNullableFilter<"ProductionOrder"> | Date | string | null
    createdAt?: DateTimeFilter<"ProductionOrder"> | Date | string
    updatedAt?: DateTimeFilter<"ProductionOrder"> | Date | string
    addonResolutions?: ProductionOrderAddonResolutionListRelationFilter
  }

  export type ProductionOrderOrderByWithRelationInput = {
    id?: SortOrder
    productId?: SortOrder
    batchWeightGm?: SortOrder
    wastePercent?: SortOrder
    notes?: SortOrderInput | SortOrder
    status?: SortOrder
    performedBy?: SortOrderInput | SortOrder
    executedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    addonResolutions?: ProductionOrderAddonResolutionOrderByRelationAggregateInput
  }

  export type ProductionOrderWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProductionOrderWhereInput | ProductionOrderWhereInput[]
    OR?: ProductionOrderWhereInput[]
    NOT?: ProductionOrderWhereInput | ProductionOrderWhereInput[]
    productId?: StringFilter<"ProductionOrder"> | string
    batchWeightGm?: FloatFilter<"ProductionOrder"> | number
    wastePercent?: FloatFilter<"ProductionOrder"> | number
    notes?: StringNullableFilter<"ProductionOrder"> | string | null
    status?: StringFilter<"ProductionOrder"> | string
    performedBy?: StringNullableFilter<"ProductionOrder"> | string | null
    executedAt?: DateTimeNullableFilter<"ProductionOrder"> | Date | string | null
    createdAt?: DateTimeFilter<"ProductionOrder"> | Date | string
    updatedAt?: DateTimeFilter<"ProductionOrder"> | Date | string
    addonResolutions?: ProductionOrderAddonResolutionListRelationFilter
  }, "id">

  export type ProductionOrderOrderByWithAggregationInput = {
    id?: SortOrder
    productId?: SortOrder
    batchWeightGm?: SortOrder
    wastePercent?: SortOrder
    notes?: SortOrderInput | SortOrder
    status?: SortOrder
    performedBy?: SortOrderInput | SortOrder
    executedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProductionOrderCountOrderByAggregateInput
    _avg?: ProductionOrderAvgOrderByAggregateInput
    _max?: ProductionOrderMaxOrderByAggregateInput
    _min?: ProductionOrderMinOrderByAggregateInput
    _sum?: ProductionOrderSumOrderByAggregateInput
  }

  export type ProductionOrderScalarWhereWithAggregatesInput = {
    AND?: ProductionOrderScalarWhereWithAggregatesInput | ProductionOrderScalarWhereWithAggregatesInput[]
    OR?: ProductionOrderScalarWhereWithAggregatesInput[]
    NOT?: ProductionOrderScalarWhereWithAggregatesInput | ProductionOrderScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProductionOrder"> | string
    productId?: StringWithAggregatesFilter<"ProductionOrder"> | string
    batchWeightGm?: FloatWithAggregatesFilter<"ProductionOrder"> | number
    wastePercent?: FloatWithAggregatesFilter<"ProductionOrder"> | number
    notes?: StringNullableWithAggregatesFilter<"ProductionOrder"> | string | null
    status?: StringWithAggregatesFilter<"ProductionOrder"> | string
    performedBy?: StringNullableWithAggregatesFilter<"ProductionOrder"> | string | null
    executedAt?: DateTimeNullableWithAggregatesFilter<"ProductionOrder"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ProductionOrder"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ProductionOrder"> | Date | string
  }

  export type ProductionOrderAddonResolutionWhereInput = {
    AND?: ProductionOrderAddonResolutionWhereInput | ProductionOrderAddonResolutionWhereInput[]
    OR?: ProductionOrderAddonResolutionWhereInput[]
    NOT?: ProductionOrderAddonResolutionWhereInput | ProductionOrderAddonResolutionWhereInput[]
    id?: StringFilter<"ProductionOrderAddonResolution"> | string
    orderId?: StringFilter<"ProductionOrderAddonResolution"> | string
    ingredientCategory?: StringFilter<"ProductionOrderAddonResolution"> | string
    addonItemId?: StringFilter<"ProductionOrderAddonResolution"> | string
    order?: XOR<ProductionOrderScalarRelationFilter, ProductionOrderWhereInput>
  }

  export type ProductionOrderAddonResolutionOrderByWithRelationInput = {
    id?: SortOrder
    orderId?: SortOrder
    ingredientCategory?: SortOrder
    addonItemId?: SortOrder
    order?: ProductionOrderOrderByWithRelationInput
  }

  export type ProductionOrderAddonResolutionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProductionOrderAddonResolutionWhereInput | ProductionOrderAddonResolutionWhereInput[]
    OR?: ProductionOrderAddonResolutionWhereInput[]
    NOT?: ProductionOrderAddonResolutionWhereInput | ProductionOrderAddonResolutionWhereInput[]
    orderId?: StringFilter<"ProductionOrderAddonResolution"> | string
    ingredientCategory?: StringFilter<"ProductionOrderAddonResolution"> | string
    addonItemId?: StringFilter<"ProductionOrderAddonResolution"> | string
    order?: XOR<ProductionOrderScalarRelationFilter, ProductionOrderWhereInput>
  }, "id">

  export type ProductionOrderAddonResolutionOrderByWithAggregationInput = {
    id?: SortOrder
    orderId?: SortOrder
    ingredientCategory?: SortOrder
    addonItemId?: SortOrder
    _count?: ProductionOrderAddonResolutionCountOrderByAggregateInput
    _max?: ProductionOrderAddonResolutionMaxOrderByAggregateInput
    _min?: ProductionOrderAddonResolutionMinOrderByAggregateInput
  }

  export type ProductionOrderAddonResolutionScalarWhereWithAggregatesInput = {
    AND?: ProductionOrderAddonResolutionScalarWhereWithAggregatesInput | ProductionOrderAddonResolutionScalarWhereWithAggregatesInput[]
    OR?: ProductionOrderAddonResolutionScalarWhereWithAggregatesInput[]
    NOT?: ProductionOrderAddonResolutionScalarWhereWithAggregatesInput | ProductionOrderAddonResolutionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProductionOrderAddonResolution"> | string
    orderId?: StringWithAggregatesFilter<"ProductionOrderAddonResolution"> | string
    ingredientCategory?: StringWithAggregatesFilter<"ProductionOrderAddonResolution"> | string
    addonItemId?: StringWithAggregatesFilter<"ProductionOrderAddonResolution"> | string
  }

  export type FillingOrderWhereInput = {
    AND?: FillingOrderWhereInput | FillingOrderWhereInput[]
    OR?: FillingOrderWhereInput[]
    NOT?: FillingOrderWhereInput | FillingOrderWhereInput[]
    id?: StringFilter<"FillingOrder"> | string
    productId?: StringFilter<"FillingOrder"> | string
    bulkUsedGm?: FloatFilter<"FillingOrder"> | number
    notes?: StringNullableFilter<"FillingOrder"> | string | null
    status?: StringFilter<"FillingOrder"> | string
    performedBy?: StringNullableFilter<"FillingOrder"> | string | null
    executedAt?: DateTimeNullableFilter<"FillingOrder"> | Date | string | null
    createdAt?: DateTimeFilter<"FillingOrder"> | Date | string
    updatedAt?: DateTimeFilter<"FillingOrder"> | Date | string
    lines?: FillingOrderLineListRelationFilter
  }

  export type FillingOrderOrderByWithRelationInput = {
    id?: SortOrder
    productId?: SortOrder
    bulkUsedGm?: SortOrder
    notes?: SortOrderInput | SortOrder
    status?: SortOrder
    performedBy?: SortOrderInput | SortOrder
    executedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lines?: FillingOrderLineOrderByRelationAggregateInput
  }

  export type FillingOrderWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FillingOrderWhereInput | FillingOrderWhereInput[]
    OR?: FillingOrderWhereInput[]
    NOT?: FillingOrderWhereInput | FillingOrderWhereInput[]
    productId?: StringFilter<"FillingOrder"> | string
    bulkUsedGm?: FloatFilter<"FillingOrder"> | number
    notes?: StringNullableFilter<"FillingOrder"> | string | null
    status?: StringFilter<"FillingOrder"> | string
    performedBy?: StringNullableFilter<"FillingOrder"> | string | null
    executedAt?: DateTimeNullableFilter<"FillingOrder"> | Date | string | null
    createdAt?: DateTimeFilter<"FillingOrder"> | Date | string
    updatedAt?: DateTimeFilter<"FillingOrder"> | Date | string
    lines?: FillingOrderLineListRelationFilter
  }, "id">

  export type FillingOrderOrderByWithAggregationInput = {
    id?: SortOrder
    productId?: SortOrder
    bulkUsedGm?: SortOrder
    notes?: SortOrderInput | SortOrder
    status?: SortOrder
    performedBy?: SortOrderInput | SortOrder
    executedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FillingOrderCountOrderByAggregateInput
    _avg?: FillingOrderAvgOrderByAggregateInput
    _max?: FillingOrderMaxOrderByAggregateInput
    _min?: FillingOrderMinOrderByAggregateInput
    _sum?: FillingOrderSumOrderByAggregateInput
  }

  export type FillingOrderScalarWhereWithAggregatesInput = {
    AND?: FillingOrderScalarWhereWithAggregatesInput | FillingOrderScalarWhereWithAggregatesInput[]
    OR?: FillingOrderScalarWhereWithAggregatesInput[]
    NOT?: FillingOrderScalarWhereWithAggregatesInput | FillingOrderScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FillingOrder"> | string
    productId?: StringWithAggregatesFilter<"FillingOrder"> | string
    bulkUsedGm?: FloatWithAggregatesFilter<"FillingOrder"> | number
    notes?: StringNullableWithAggregatesFilter<"FillingOrder"> | string | null
    status?: StringWithAggregatesFilter<"FillingOrder"> | string
    performedBy?: StringNullableWithAggregatesFilter<"FillingOrder"> | string | null
    executedAt?: DateTimeNullableWithAggregatesFilter<"FillingOrder"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"FillingOrder"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"FillingOrder"> | Date | string
  }

  export type FillingOrderLineWhereInput = {
    AND?: FillingOrderLineWhereInput | FillingOrderLineWhereInput[]
    OR?: FillingOrderLineWhereInput[]
    NOT?: FillingOrderLineWhereInput | FillingOrderLineWhereInput[]
    id?: StringFilter<"FillingOrderLine"> | string
    fillingOrderId?: StringFilter<"FillingOrderLine"> | string
    variantItemId?: StringFilter<"FillingOrderLine"> | string
    variantName?: StringFilter<"FillingOrderLine"> | string
    quantityUnits?: FloatFilter<"FillingOrderLine"> | number
    unitWeightGm?: FloatFilter<"FillingOrderLine"> | number
    bulkUsedGm?: FloatFilter<"FillingOrderLine"> | number
    fillingOrder?: XOR<FillingOrderScalarRelationFilter, FillingOrderWhereInput>
  }

  export type FillingOrderLineOrderByWithRelationInput = {
    id?: SortOrder
    fillingOrderId?: SortOrder
    variantItemId?: SortOrder
    variantName?: SortOrder
    quantityUnits?: SortOrder
    unitWeightGm?: SortOrder
    bulkUsedGm?: SortOrder
    fillingOrder?: FillingOrderOrderByWithRelationInput
  }

  export type FillingOrderLineWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FillingOrderLineWhereInput | FillingOrderLineWhereInput[]
    OR?: FillingOrderLineWhereInput[]
    NOT?: FillingOrderLineWhereInput | FillingOrderLineWhereInput[]
    fillingOrderId?: StringFilter<"FillingOrderLine"> | string
    variantItemId?: StringFilter<"FillingOrderLine"> | string
    variantName?: StringFilter<"FillingOrderLine"> | string
    quantityUnits?: FloatFilter<"FillingOrderLine"> | number
    unitWeightGm?: FloatFilter<"FillingOrderLine"> | number
    bulkUsedGm?: FloatFilter<"FillingOrderLine"> | number
    fillingOrder?: XOR<FillingOrderScalarRelationFilter, FillingOrderWhereInput>
  }, "id">

  export type FillingOrderLineOrderByWithAggregationInput = {
    id?: SortOrder
    fillingOrderId?: SortOrder
    variantItemId?: SortOrder
    variantName?: SortOrder
    quantityUnits?: SortOrder
    unitWeightGm?: SortOrder
    bulkUsedGm?: SortOrder
    _count?: FillingOrderLineCountOrderByAggregateInput
    _avg?: FillingOrderLineAvgOrderByAggregateInput
    _max?: FillingOrderLineMaxOrderByAggregateInput
    _min?: FillingOrderLineMinOrderByAggregateInput
    _sum?: FillingOrderLineSumOrderByAggregateInput
  }

  export type FillingOrderLineScalarWhereWithAggregatesInput = {
    AND?: FillingOrderLineScalarWhereWithAggregatesInput | FillingOrderLineScalarWhereWithAggregatesInput[]
    OR?: FillingOrderLineScalarWhereWithAggregatesInput[]
    NOT?: FillingOrderLineScalarWhereWithAggregatesInput | FillingOrderLineScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FillingOrderLine"> | string
    fillingOrderId?: StringWithAggregatesFilter<"FillingOrderLine"> | string
    variantItemId?: StringWithAggregatesFilter<"FillingOrderLine"> | string
    variantName?: StringWithAggregatesFilter<"FillingOrderLine"> | string
    quantityUnits?: FloatWithAggregatesFilter<"FillingOrderLine"> | number
    unitWeightGm?: FloatWithAggregatesFilter<"FillingOrderLine"> | number
    bulkUsedGm?: FloatWithAggregatesFilter<"FillingOrderLine"> | number
  }

  export type BulkStockWhereInput = {
    AND?: BulkStockWhereInput | BulkStockWhereInput[]
    OR?: BulkStockWhereInput[]
    NOT?: BulkStockWhereInput | BulkStockWhereInput[]
    id?: StringFilter<"BulkStock"> | string
    productId?: StringFilter<"BulkStock"> | string
    availableGm?: FloatFilter<"BulkStock"> | number
    updatedAt?: DateTimeFilter<"BulkStock"> | Date | string
  }

  export type BulkStockOrderByWithRelationInput = {
    id?: SortOrder
    productId?: SortOrder
    availableGm?: SortOrder
    updatedAt?: SortOrder
  }

  export type BulkStockWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    productId?: string
    AND?: BulkStockWhereInput | BulkStockWhereInput[]
    OR?: BulkStockWhereInput[]
    NOT?: BulkStockWhereInput | BulkStockWhereInput[]
    availableGm?: FloatFilter<"BulkStock"> | number
    updatedAt?: DateTimeFilter<"BulkStock"> | Date | string
  }, "id" | "productId">

  export type BulkStockOrderByWithAggregationInput = {
    id?: SortOrder
    productId?: SortOrder
    availableGm?: SortOrder
    updatedAt?: SortOrder
    _count?: BulkStockCountOrderByAggregateInput
    _avg?: BulkStockAvgOrderByAggregateInput
    _max?: BulkStockMaxOrderByAggregateInput
    _min?: BulkStockMinOrderByAggregateInput
    _sum?: BulkStockSumOrderByAggregateInput
  }

  export type BulkStockScalarWhereWithAggregatesInput = {
    AND?: BulkStockScalarWhereWithAggregatesInput | BulkStockScalarWhereWithAggregatesInput[]
    OR?: BulkStockScalarWhereWithAggregatesInput[]
    NOT?: BulkStockScalarWhereWithAggregatesInput | BulkStockScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BulkStock"> | string
    productId?: StringWithAggregatesFilter<"BulkStock"> | string
    availableGm?: FloatWithAggregatesFilter<"BulkStock"> | number
    updatedAt?: DateTimeWithAggregatesFilter<"BulkStock"> | Date | string
  }

  export type ProductionOrderCreateInput = {
    id: string
    productId: string
    batchWeightGm: number
    wastePercent?: number
    notes?: string | null
    status?: string
    performedBy?: string | null
    executedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    addonResolutions?: ProductionOrderAddonResolutionCreateNestedManyWithoutOrderInput
  }

  export type ProductionOrderUncheckedCreateInput = {
    id: string
    productId: string
    batchWeightGm: number
    wastePercent?: number
    notes?: string | null
    status?: string
    performedBy?: string | null
    executedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    addonResolutions?: ProductionOrderAddonResolutionUncheckedCreateNestedManyWithoutOrderInput
  }

  export type ProductionOrderUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    batchWeightGm?: FloatFieldUpdateOperationsInput | number
    wastePercent?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    performedBy?: NullableStringFieldUpdateOperationsInput | string | null
    executedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    addonResolutions?: ProductionOrderAddonResolutionUpdateManyWithoutOrderNestedInput
  }

  export type ProductionOrderUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    batchWeightGm?: FloatFieldUpdateOperationsInput | number
    wastePercent?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    performedBy?: NullableStringFieldUpdateOperationsInput | string | null
    executedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    addonResolutions?: ProductionOrderAddonResolutionUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type ProductionOrderCreateManyInput = {
    id: string
    productId: string
    batchWeightGm: number
    wastePercent?: number
    notes?: string | null
    status?: string
    performedBy?: string | null
    executedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductionOrderUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    batchWeightGm?: FloatFieldUpdateOperationsInput | number
    wastePercent?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    performedBy?: NullableStringFieldUpdateOperationsInput | string | null
    executedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductionOrderUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    batchWeightGm?: FloatFieldUpdateOperationsInput | number
    wastePercent?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    performedBy?: NullableStringFieldUpdateOperationsInput | string | null
    executedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductionOrderAddonResolutionCreateInput = {
    id: string
    ingredientCategory: string
    addonItemId: string
    order: ProductionOrderCreateNestedOneWithoutAddonResolutionsInput
  }

  export type ProductionOrderAddonResolutionUncheckedCreateInput = {
    id: string
    orderId: string
    ingredientCategory: string
    addonItemId: string
  }

  export type ProductionOrderAddonResolutionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ingredientCategory?: StringFieldUpdateOperationsInput | string
    addonItemId?: StringFieldUpdateOperationsInput | string
    order?: ProductionOrderUpdateOneRequiredWithoutAddonResolutionsNestedInput
  }

  export type ProductionOrderAddonResolutionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    ingredientCategory?: StringFieldUpdateOperationsInput | string
    addonItemId?: StringFieldUpdateOperationsInput | string
  }

  export type ProductionOrderAddonResolutionCreateManyInput = {
    id: string
    orderId: string
    ingredientCategory: string
    addonItemId: string
  }

  export type ProductionOrderAddonResolutionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    ingredientCategory?: StringFieldUpdateOperationsInput | string
    addonItemId?: StringFieldUpdateOperationsInput | string
  }

  export type ProductionOrderAddonResolutionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    ingredientCategory?: StringFieldUpdateOperationsInput | string
    addonItemId?: StringFieldUpdateOperationsInput | string
  }

  export type FillingOrderCreateInput = {
    id: string
    productId: string
    bulkUsedGm?: number
    notes?: string | null
    status?: string
    performedBy?: string | null
    executedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lines?: FillingOrderLineCreateNestedManyWithoutFillingOrderInput
  }

  export type FillingOrderUncheckedCreateInput = {
    id: string
    productId: string
    bulkUsedGm?: number
    notes?: string | null
    status?: string
    performedBy?: string | null
    executedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lines?: FillingOrderLineUncheckedCreateNestedManyWithoutFillingOrderInput
  }

  export type FillingOrderUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    bulkUsedGm?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    performedBy?: NullableStringFieldUpdateOperationsInput | string | null
    executedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lines?: FillingOrderLineUpdateManyWithoutFillingOrderNestedInput
  }

  export type FillingOrderUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    bulkUsedGm?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    performedBy?: NullableStringFieldUpdateOperationsInput | string | null
    executedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lines?: FillingOrderLineUncheckedUpdateManyWithoutFillingOrderNestedInput
  }

  export type FillingOrderCreateManyInput = {
    id: string
    productId: string
    bulkUsedGm?: number
    notes?: string | null
    status?: string
    performedBy?: string | null
    executedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FillingOrderUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    bulkUsedGm?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    performedBy?: NullableStringFieldUpdateOperationsInput | string | null
    executedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FillingOrderUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    bulkUsedGm?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    performedBy?: NullableStringFieldUpdateOperationsInput | string | null
    executedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FillingOrderLineCreateInput = {
    id: string
    variantItemId: string
    variantName: string
    quantityUnits: number
    unitWeightGm: number
    bulkUsedGm: number
    fillingOrder: FillingOrderCreateNestedOneWithoutLinesInput
  }

  export type FillingOrderLineUncheckedCreateInput = {
    id: string
    fillingOrderId: string
    variantItemId: string
    variantName: string
    quantityUnits: number
    unitWeightGm: number
    bulkUsedGm: number
  }

  export type FillingOrderLineUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    variantItemId?: StringFieldUpdateOperationsInput | string
    variantName?: StringFieldUpdateOperationsInput | string
    quantityUnits?: FloatFieldUpdateOperationsInput | number
    unitWeightGm?: FloatFieldUpdateOperationsInput | number
    bulkUsedGm?: FloatFieldUpdateOperationsInput | number
    fillingOrder?: FillingOrderUpdateOneRequiredWithoutLinesNestedInput
  }

  export type FillingOrderLineUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fillingOrderId?: StringFieldUpdateOperationsInput | string
    variantItemId?: StringFieldUpdateOperationsInput | string
    variantName?: StringFieldUpdateOperationsInput | string
    quantityUnits?: FloatFieldUpdateOperationsInput | number
    unitWeightGm?: FloatFieldUpdateOperationsInput | number
    bulkUsedGm?: FloatFieldUpdateOperationsInput | number
  }

  export type FillingOrderLineCreateManyInput = {
    id: string
    fillingOrderId: string
    variantItemId: string
    variantName: string
    quantityUnits: number
    unitWeightGm: number
    bulkUsedGm: number
  }

  export type FillingOrderLineUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    variantItemId?: StringFieldUpdateOperationsInput | string
    variantName?: StringFieldUpdateOperationsInput | string
    quantityUnits?: FloatFieldUpdateOperationsInput | number
    unitWeightGm?: FloatFieldUpdateOperationsInput | number
    bulkUsedGm?: FloatFieldUpdateOperationsInput | number
  }

  export type FillingOrderLineUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fillingOrderId?: StringFieldUpdateOperationsInput | string
    variantItemId?: StringFieldUpdateOperationsInput | string
    variantName?: StringFieldUpdateOperationsInput | string
    quantityUnits?: FloatFieldUpdateOperationsInput | number
    unitWeightGm?: FloatFieldUpdateOperationsInput | number
    bulkUsedGm?: FloatFieldUpdateOperationsInput | number
  }

  export type BulkStockCreateInput = {
    id: string
    productId: string
    availableGm?: number
    updatedAt?: Date | string
  }

  export type BulkStockUncheckedCreateInput = {
    id: string
    productId: string
    availableGm?: number
    updatedAt?: Date | string
  }

  export type BulkStockUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    availableGm?: FloatFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BulkStockUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    availableGm?: FloatFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BulkStockCreateManyInput = {
    id: string
    productId: string
    availableGm?: number
    updatedAt?: Date | string
  }

  export type BulkStockUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    availableGm?: FloatFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BulkStockUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    availableGm?: FloatFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
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

  export type ProductionOrderAddonResolutionListRelationFilter = {
    every?: ProductionOrderAddonResolutionWhereInput
    some?: ProductionOrderAddonResolutionWhereInput
    none?: ProductionOrderAddonResolutionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ProductionOrderAddonResolutionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductionOrderCountOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    batchWeightGm?: SortOrder
    wastePercent?: SortOrder
    notes?: SortOrder
    status?: SortOrder
    performedBy?: SortOrder
    executedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductionOrderAvgOrderByAggregateInput = {
    batchWeightGm?: SortOrder
    wastePercent?: SortOrder
  }

  export type ProductionOrderMaxOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    batchWeightGm?: SortOrder
    wastePercent?: SortOrder
    notes?: SortOrder
    status?: SortOrder
    performedBy?: SortOrder
    executedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductionOrderMinOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    batchWeightGm?: SortOrder
    wastePercent?: SortOrder
    notes?: SortOrder
    status?: SortOrder
    performedBy?: SortOrder
    executedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductionOrderSumOrderByAggregateInput = {
    batchWeightGm?: SortOrder
    wastePercent?: SortOrder
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

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
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

  export type ProductionOrderScalarRelationFilter = {
    is?: ProductionOrderWhereInput
    isNot?: ProductionOrderWhereInput
  }

  export type ProductionOrderAddonResolutionCountOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    ingredientCategory?: SortOrder
    addonItemId?: SortOrder
  }

  export type ProductionOrderAddonResolutionMaxOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    ingredientCategory?: SortOrder
    addonItemId?: SortOrder
  }

  export type ProductionOrderAddonResolutionMinOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    ingredientCategory?: SortOrder
    addonItemId?: SortOrder
  }

  export type FillingOrderLineListRelationFilter = {
    every?: FillingOrderLineWhereInput
    some?: FillingOrderLineWhereInput
    none?: FillingOrderLineWhereInput
  }

  export type FillingOrderLineOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FillingOrderCountOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    bulkUsedGm?: SortOrder
    notes?: SortOrder
    status?: SortOrder
    performedBy?: SortOrder
    executedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FillingOrderAvgOrderByAggregateInput = {
    bulkUsedGm?: SortOrder
  }

  export type FillingOrderMaxOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    bulkUsedGm?: SortOrder
    notes?: SortOrder
    status?: SortOrder
    performedBy?: SortOrder
    executedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FillingOrderMinOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    bulkUsedGm?: SortOrder
    notes?: SortOrder
    status?: SortOrder
    performedBy?: SortOrder
    executedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FillingOrderSumOrderByAggregateInput = {
    bulkUsedGm?: SortOrder
  }

  export type FillingOrderScalarRelationFilter = {
    is?: FillingOrderWhereInput
    isNot?: FillingOrderWhereInput
  }

  export type FillingOrderLineCountOrderByAggregateInput = {
    id?: SortOrder
    fillingOrderId?: SortOrder
    variantItemId?: SortOrder
    variantName?: SortOrder
    quantityUnits?: SortOrder
    unitWeightGm?: SortOrder
    bulkUsedGm?: SortOrder
  }

  export type FillingOrderLineAvgOrderByAggregateInput = {
    quantityUnits?: SortOrder
    unitWeightGm?: SortOrder
    bulkUsedGm?: SortOrder
  }

  export type FillingOrderLineMaxOrderByAggregateInput = {
    id?: SortOrder
    fillingOrderId?: SortOrder
    variantItemId?: SortOrder
    variantName?: SortOrder
    quantityUnits?: SortOrder
    unitWeightGm?: SortOrder
    bulkUsedGm?: SortOrder
  }

  export type FillingOrderLineMinOrderByAggregateInput = {
    id?: SortOrder
    fillingOrderId?: SortOrder
    variantItemId?: SortOrder
    variantName?: SortOrder
    quantityUnits?: SortOrder
    unitWeightGm?: SortOrder
    bulkUsedGm?: SortOrder
  }

  export type FillingOrderLineSumOrderByAggregateInput = {
    quantityUnits?: SortOrder
    unitWeightGm?: SortOrder
    bulkUsedGm?: SortOrder
  }

  export type BulkStockCountOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    availableGm?: SortOrder
    updatedAt?: SortOrder
  }

  export type BulkStockAvgOrderByAggregateInput = {
    availableGm?: SortOrder
  }

  export type BulkStockMaxOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    availableGm?: SortOrder
    updatedAt?: SortOrder
  }

  export type BulkStockMinOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    availableGm?: SortOrder
    updatedAt?: SortOrder
  }

  export type BulkStockSumOrderByAggregateInput = {
    availableGm?: SortOrder
  }

  export type ProductionOrderAddonResolutionCreateNestedManyWithoutOrderInput = {
    create?: XOR<ProductionOrderAddonResolutionCreateWithoutOrderInput, ProductionOrderAddonResolutionUncheckedCreateWithoutOrderInput> | ProductionOrderAddonResolutionCreateWithoutOrderInput[] | ProductionOrderAddonResolutionUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: ProductionOrderAddonResolutionCreateOrConnectWithoutOrderInput | ProductionOrderAddonResolutionCreateOrConnectWithoutOrderInput[]
    createMany?: ProductionOrderAddonResolutionCreateManyOrderInputEnvelope
    connect?: ProductionOrderAddonResolutionWhereUniqueInput | ProductionOrderAddonResolutionWhereUniqueInput[]
  }

  export type ProductionOrderAddonResolutionUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<ProductionOrderAddonResolutionCreateWithoutOrderInput, ProductionOrderAddonResolutionUncheckedCreateWithoutOrderInput> | ProductionOrderAddonResolutionCreateWithoutOrderInput[] | ProductionOrderAddonResolutionUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: ProductionOrderAddonResolutionCreateOrConnectWithoutOrderInput | ProductionOrderAddonResolutionCreateOrConnectWithoutOrderInput[]
    createMany?: ProductionOrderAddonResolutionCreateManyOrderInputEnvelope
    connect?: ProductionOrderAddonResolutionWhereUniqueInput | ProductionOrderAddonResolutionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ProductionOrderAddonResolutionUpdateManyWithoutOrderNestedInput = {
    create?: XOR<ProductionOrderAddonResolutionCreateWithoutOrderInput, ProductionOrderAddonResolutionUncheckedCreateWithoutOrderInput> | ProductionOrderAddonResolutionCreateWithoutOrderInput[] | ProductionOrderAddonResolutionUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: ProductionOrderAddonResolutionCreateOrConnectWithoutOrderInput | ProductionOrderAddonResolutionCreateOrConnectWithoutOrderInput[]
    upsert?: ProductionOrderAddonResolutionUpsertWithWhereUniqueWithoutOrderInput | ProductionOrderAddonResolutionUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: ProductionOrderAddonResolutionCreateManyOrderInputEnvelope
    set?: ProductionOrderAddonResolutionWhereUniqueInput | ProductionOrderAddonResolutionWhereUniqueInput[]
    disconnect?: ProductionOrderAddonResolutionWhereUniqueInput | ProductionOrderAddonResolutionWhereUniqueInput[]
    delete?: ProductionOrderAddonResolutionWhereUniqueInput | ProductionOrderAddonResolutionWhereUniqueInput[]
    connect?: ProductionOrderAddonResolutionWhereUniqueInput | ProductionOrderAddonResolutionWhereUniqueInput[]
    update?: ProductionOrderAddonResolutionUpdateWithWhereUniqueWithoutOrderInput | ProductionOrderAddonResolutionUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: ProductionOrderAddonResolutionUpdateManyWithWhereWithoutOrderInput | ProductionOrderAddonResolutionUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: ProductionOrderAddonResolutionScalarWhereInput | ProductionOrderAddonResolutionScalarWhereInput[]
  }

  export type ProductionOrderAddonResolutionUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<ProductionOrderAddonResolutionCreateWithoutOrderInput, ProductionOrderAddonResolutionUncheckedCreateWithoutOrderInput> | ProductionOrderAddonResolutionCreateWithoutOrderInput[] | ProductionOrderAddonResolutionUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: ProductionOrderAddonResolutionCreateOrConnectWithoutOrderInput | ProductionOrderAddonResolutionCreateOrConnectWithoutOrderInput[]
    upsert?: ProductionOrderAddonResolutionUpsertWithWhereUniqueWithoutOrderInput | ProductionOrderAddonResolutionUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: ProductionOrderAddonResolutionCreateManyOrderInputEnvelope
    set?: ProductionOrderAddonResolutionWhereUniqueInput | ProductionOrderAddonResolutionWhereUniqueInput[]
    disconnect?: ProductionOrderAddonResolutionWhereUniqueInput | ProductionOrderAddonResolutionWhereUniqueInput[]
    delete?: ProductionOrderAddonResolutionWhereUniqueInput | ProductionOrderAddonResolutionWhereUniqueInput[]
    connect?: ProductionOrderAddonResolutionWhereUniqueInput | ProductionOrderAddonResolutionWhereUniqueInput[]
    update?: ProductionOrderAddonResolutionUpdateWithWhereUniqueWithoutOrderInput | ProductionOrderAddonResolutionUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: ProductionOrderAddonResolutionUpdateManyWithWhereWithoutOrderInput | ProductionOrderAddonResolutionUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: ProductionOrderAddonResolutionScalarWhereInput | ProductionOrderAddonResolutionScalarWhereInput[]
  }

  export type ProductionOrderCreateNestedOneWithoutAddonResolutionsInput = {
    create?: XOR<ProductionOrderCreateWithoutAddonResolutionsInput, ProductionOrderUncheckedCreateWithoutAddonResolutionsInput>
    connectOrCreate?: ProductionOrderCreateOrConnectWithoutAddonResolutionsInput
    connect?: ProductionOrderWhereUniqueInput
  }

  export type ProductionOrderUpdateOneRequiredWithoutAddonResolutionsNestedInput = {
    create?: XOR<ProductionOrderCreateWithoutAddonResolutionsInput, ProductionOrderUncheckedCreateWithoutAddonResolutionsInput>
    connectOrCreate?: ProductionOrderCreateOrConnectWithoutAddonResolutionsInput
    upsert?: ProductionOrderUpsertWithoutAddonResolutionsInput
    connect?: ProductionOrderWhereUniqueInput
    update?: XOR<XOR<ProductionOrderUpdateToOneWithWhereWithoutAddonResolutionsInput, ProductionOrderUpdateWithoutAddonResolutionsInput>, ProductionOrderUncheckedUpdateWithoutAddonResolutionsInput>
  }

  export type FillingOrderLineCreateNestedManyWithoutFillingOrderInput = {
    create?: XOR<FillingOrderLineCreateWithoutFillingOrderInput, FillingOrderLineUncheckedCreateWithoutFillingOrderInput> | FillingOrderLineCreateWithoutFillingOrderInput[] | FillingOrderLineUncheckedCreateWithoutFillingOrderInput[]
    connectOrCreate?: FillingOrderLineCreateOrConnectWithoutFillingOrderInput | FillingOrderLineCreateOrConnectWithoutFillingOrderInput[]
    createMany?: FillingOrderLineCreateManyFillingOrderInputEnvelope
    connect?: FillingOrderLineWhereUniqueInput | FillingOrderLineWhereUniqueInput[]
  }

  export type FillingOrderLineUncheckedCreateNestedManyWithoutFillingOrderInput = {
    create?: XOR<FillingOrderLineCreateWithoutFillingOrderInput, FillingOrderLineUncheckedCreateWithoutFillingOrderInput> | FillingOrderLineCreateWithoutFillingOrderInput[] | FillingOrderLineUncheckedCreateWithoutFillingOrderInput[]
    connectOrCreate?: FillingOrderLineCreateOrConnectWithoutFillingOrderInput | FillingOrderLineCreateOrConnectWithoutFillingOrderInput[]
    createMany?: FillingOrderLineCreateManyFillingOrderInputEnvelope
    connect?: FillingOrderLineWhereUniqueInput | FillingOrderLineWhereUniqueInput[]
  }

  export type FillingOrderLineUpdateManyWithoutFillingOrderNestedInput = {
    create?: XOR<FillingOrderLineCreateWithoutFillingOrderInput, FillingOrderLineUncheckedCreateWithoutFillingOrderInput> | FillingOrderLineCreateWithoutFillingOrderInput[] | FillingOrderLineUncheckedCreateWithoutFillingOrderInput[]
    connectOrCreate?: FillingOrderLineCreateOrConnectWithoutFillingOrderInput | FillingOrderLineCreateOrConnectWithoutFillingOrderInput[]
    upsert?: FillingOrderLineUpsertWithWhereUniqueWithoutFillingOrderInput | FillingOrderLineUpsertWithWhereUniqueWithoutFillingOrderInput[]
    createMany?: FillingOrderLineCreateManyFillingOrderInputEnvelope
    set?: FillingOrderLineWhereUniqueInput | FillingOrderLineWhereUniqueInput[]
    disconnect?: FillingOrderLineWhereUniqueInput | FillingOrderLineWhereUniqueInput[]
    delete?: FillingOrderLineWhereUniqueInput | FillingOrderLineWhereUniqueInput[]
    connect?: FillingOrderLineWhereUniqueInput | FillingOrderLineWhereUniqueInput[]
    update?: FillingOrderLineUpdateWithWhereUniqueWithoutFillingOrderInput | FillingOrderLineUpdateWithWhereUniqueWithoutFillingOrderInput[]
    updateMany?: FillingOrderLineUpdateManyWithWhereWithoutFillingOrderInput | FillingOrderLineUpdateManyWithWhereWithoutFillingOrderInput[]
    deleteMany?: FillingOrderLineScalarWhereInput | FillingOrderLineScalarWhereInput[]
  }

  export type FillingOrderLineUncheckedUpdateManyWithoutFillingOrderNestedInput = {
    create?: XOR<FillingOrderLineCreateWithoutFillingOrderInput, FillingOrderLineUncheckedCreateWithoutFillingOrderInput> | FillingOrderLineCreateWithoutFillingOrderInput[] | FillingOrderLineUncheckedCreateWithoutFillingOrderInput[]
    connectOrCreate?: FillingOrderLineCreateOrConnectWithoutFillingOrderInput | FillingOrderLineCreateOrConnectWithoutFillingOrderInput[]
    upsert?: FillingOrderLineUpsertWithWhereUniqueWithoutFillingOrderInput | FillingOrderLineUpsertWithWhereUniqueWithoutFillingOrderInput[]
    createMany?: FillingOrderLineCreateManyFillingOrderInputEnvelope
    set?: FillingOrderLineWhereUniqueInput | FillingOrderLineWhereUniqueInput[]
    disconnect?: FillingOrderLineWhereUniqueInput | FillingOrderLineWhereUniqueInput[]
    delete?: FillingOrderLineWhereUniqueInput | FillingOrderLineWhereUniqueInput[]
    connect?: FillingOrderLineWhereUniqueInput | FillingOrderLineWhereUniqueInput[]
    update?: FillingOrderLineUpdateWithWhereUniqueWithoutFillingOrderInput | FillingOrderLineUpdateWithWhereUniqueWithoutFillingOrderInput[]
    updateMany?: FillingOrderLineUpdateManyWithWhereWithoutFillingOrderInput | FillingOrderLineUpdateManyWithWhereWithoutFillingOrderInput[]
    deleteMany?: FillingOrderLineScalarWhereInput | FillingOrderLineScalarWhereInput[]
  }

  export type FillingOrderCreateNestedOneWithoutLinesInput = {
    create?: XOR<FillingOrderCreateWithoutLinesInput, FillingOrderUncheckedCreateWithoutLinesInput>
    connectOrCreate?: FillingOrderCreateOrConnectWithoutLinesInput
    connect?: FillingOrderWhereUniqueInput
  }

  export type FillingOrderUpdateOneRequiredWithoutLinesNestedInput = {
    create?: XOR<FillingOrderCreateWithoutLinesInput, FillingOrderUncheckedCreateWithoutLinesInput>
    connectOrCreate?: FillingOrderCreateOrConnectWithoutLinesInput
    upsert?: FillingOrderUpsertWithoutLinesInput
    connect?: FillingOrderWhereUniqueInput
    update?: XOR<XOR<FillingOrderUpdateToOneWithWhereWithoutLinesInput, FillingOrderUpdateWithoutLinesInput>, FillingOrderUncheckedUpdateWithoutLinesInput>
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
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

  export type ProductionOrderAddonResolutionCreateWithoutOrderInput = {
    id: string
    ingredientCategory: string
    addonItemId: string
  }

  export type ProductionOrderAddonResolutionUncheckedCreateWithoutOrderInput = {
    id: string
    ingredientCategory: string
    addonItemId: string
  }

  export type ProductionOrderAddonResolutionCreateOrConnectWithoutOrderInput = {
    where: ProductionOrderAddonResolutionWhereUniqueInput
    create: XOR<ProductionOrderAddonResolutionCreateWithoutOrderInput, ProductionOrderAddonResolutionUncheckedCreateWithoutOrderInput>
  }

  export type ProductionOrderAddonResolutionCreateManyOrderInputEnvelope = {
    data: ProductionOrderAddonResolutionCreateManyOrderInput | ProductionOrderAddonResolutionCreateManyOrderInput[]
    skipDuplicates?: boolean
  }

  export type ProductionOrderAddonResolutionUpsertWithWhereUniqueWithoutOrderInput = {
    where: ProductionOrderAddonResolutionWhereUniqueInput
    update: XOR<ProductionOrderAddonResolutionUpdateWithoutOrderInput, ProductionOrderAddonResolutionUncheckedUpdateWithoutOrderInput>
    create: XOR<ProductionOrderAddonResolutionCreateWithoutOrderInput, ProductionOrderAddonResolutionUncheckedCreateWithoutOrderInput>
  }

  export type ProductionOrderAddonResolutionUpdateWithWhereUniqueWithoutOrderInput = {
    where: ProductionOrderAddonResolutionWhereUniqueInput
    data: XOR<ProductionOrderAddonResolutionUpdateWithoutOrderInput, ProductionOrderAddonResolutionUncheckedUpdateWithoutOrderInput>
  }

  export type ProductionOrderAddonResolutionUpdateManyWithWhereWithoutOrderInput = {
    where: ProductionOrderAddonResolutionScalarWhereInput
    data: XOR<ProductionOrderAddonResolutionUpdateManyMutationInput, ProductionOrderAddonResolutionUncheckedUpdateManyWithoutOrderInput>
  }

  export type ProductionOrderAddonResolutionScalarWhereInput = {
    AND?: ProductionOrderAddonResolutionScalarWhereInput | ProductionOrderAddonResolutionScalarWhereInput[]
    OR?: ProductionOrderAddonResolutionScalarWhereInput[]
    NOT?: ProductionOrderAddonResolutionScalarWhereInput | ProductionOrderAddonResolutionScalarWhereInput[]
    id?: StringFilter<"ProductionOrderAddonResolution"> | string
    orderId?: StringFilter<"ProductionOrderAddonResolution"> | string
    ingredientCategory?: StringFilter<"ProductionOrderAddonResolution"> | string
    addonItemId?: StringFilter<"ProductionOrderAddonResolution"> | string
  }

  export type ProductionOrderCreateWithoutAddonResolutionsInput = {
    id: string
    productId: string
    batchWeightGm: number
    wastePercent?: number
    notes?: string | null
    status?: string
    performedBy?: string | null
    executedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductionOrderUncheckedCreateWithoutAddonResolutionsInput = {
    id: string
    productId: string
    batchWeightGm: number
    wastePercent?: number
    notes?: string | null
    status?: string
    performedBy?: string | null
    executedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductionOrderCreateOrConnectWithoutAddonResolutionsInput = {
    where: ProductionOrderWhereUniqueInput
    create: XOR<ProductionOrderCreateWithoutAddonResolutionsInput, ProductionOrderUncheckedCreateWithoutAddonResolutionsInput>
  }

  export type ProductionOrderUpsertWithoutAddonResolutionsInput = {
    update: XOR<ProductionOrderUpdateWithoutAddonResolutionsInput, ProductionOrderUncheckedUpdateWithoutAddonResolutionsInput>
    create: XOR<ProductionOrderCreateWithoutAddonResolutionsInput, ProductionOrderUncheckedCreateWithoutAddonResolutionsInput>
    where?: ProductionOrderWhereInput
  }

  export type ProductionOrderUpdateToOneWithWhereWithoutAddonResolutionsInput = {
    where?: ProductionOrderWhereInput
    data: XOR<ProductionOrderUpdateWithoutAddonResolutionsInput, ProductionOrderUncheckedUpdateWithoutAddonResolutionsInput>
  }

  export type ProductionOrderUpdateWithoutAddonResolutionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    batchWeightGm?: FloatFieldUpdateOperationsInput | number
    wastePercent?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    performedBy?: NullableStringFieldUpdateOperationsInput | string | null
    executedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductionOrderUncheckedUpdateWithoutAddonResolutionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    batchWeightGm?: FloatFieldUpdateOperationsInput | number
    wastePercent?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    performedBy?: NullableStringFieldUpdateOperationsInput | string | null
    executedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FillingOrderLineCreateWithoutFillingOrderInput = {
    id: string
    variantItemId: string
    variantName: string
    quantityUnits: number
    unitWeightGm: number
    bulkUsedGm: number
  }

  export type FillingOrderLineUncheckedCreateWithoutFillingOrderInput = {
    id: string
    variantItemId: string
    variantName: string
    quantityUnits: number
    unitWeightGm: number
    bulkUsedGm: number
  }

  export type FillingOrderLineCreateOrConnectWithoutFillingOrderInput = {
    where: FillingOrderLineWhereUniqueInput
    create: XOR<FillingOrderLineCreateWithoutFillingOrderInput, FillingOrderLineUncheckedCreateWithoutFillingOrderInput>
  }

  export type FillingOrderLineCreateManyFillingOrderInputEnvelope = {
    data: FillingOrderLineCreateManyFillingOrderInput | FillingOrderLineCreateManyFillingOrderInput[]
    skipDuplicates?: boolean
  }

  export type FillingOrderLineUpsertWithWhereUniqueWithoutFillingOrderInput = {
    where: FillingOrderLineWhereUniqueInput
    update: XOR<FillingOrderLineUpdateWithoutFillingOrderInput, FillingOrderLineUncheckedUpdateWithoutFillingOrderInput>
    create: XOR<FillingOrderLineCreateWithoutFillingOrderInput, FillingOrderLineUncheckedCreateWithoutFillingOrderInput>
  }

  export type FillingOrderLineUpdateWithWhereUniqueWithoutFillingOrderInput = {
    where: FillingOrderLineWhereUniqueInput
    data: XOR<FillingOrderLineUpdateWithoutFillingOrderInput, FillingOrderLineUncheckedUpdateWithoutFillingOrderInput>
  }

  export type FillingOrderLineUpdateManyWithWhereWithoutFillingOrderInput = {
    where: FillingOrderLineScalarWhereInput
    data: XOR<FillingOrderLineUpdateManyMutationInput, FillingOrderLineUncheckedUpdateManyWithoutFillingOrderInput>
  }

  export type FillingOrderLineScalarWhereInput = {
    AND?: FillingOrderLineScalarWhereInput | FillingOrderLineScalarWhereInput[]
    OR?: FillingOrderLineScalarWhereInput[]
    NOT?: FillingOrderLineScalarWhereInput | FillingOrderLineScalarWhereInput[]
    id?: StringFilter<"FillingOrderLine"> | string
    fillingOrderId?: StringFilter<"FillingOrderLine"> | string
    variantItemId?: StringFilter<"FillingOrderLine"> | string
    variantName?: StringFilter<"FillingOrderLine"> | string
    quantityUnits?: FloatFilter<"FillingOrderLine"> | number
    unitWeightGm?: FloatFilter<"FillingOrderLine"> | number
    bulkUsedGm?: FloatFilter<"FillingOrderLine"> | number
  }

  export type FillingOrderCreateWithoutLinesInput = {
    id: string
    productId: string
    bulkUsedGm?: number
    notes?: string | null
    status?: string
    performedBy?: string | null
    executedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FillingOrderUncheckedCreateWithoutLinesInput = {
    id: string
    productId: string
    bulkUsedGm?: number
    notes?: string | null
    status?: string
    performedBy?: string | null
    executedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FillingOrderCreateOrConnectWithoutLinesInput = {
    where: FillingOrderWhereUniqueInput
    create: XOR<FillingOrderCreateWithoutLinesInput, FillingOrderUncheckedCreateWithoutLinesInput>
  }

  export type FillingOrderUpsertWithoutLinesInput = {
    update: XOR<FillingOrderUpdateWithoutLinesInput, FillingOrderUncheckedUpdateWithoutLinesInput>
    create: XOR<FillingOrderCreateWithoutLinesInput, FillingOrderUncheckedCreateWithoutLinesInput>
    where?: FillingOrderWhereInput
  }

  export type FillingOrderUpdateToOneWithWhereWithoutLinesInput = {
    where?: FillingOrderWhereInput
    data: XOR<FillingOrderUpdateWithoutLinesInput, FillingOrderUncheckedUpdateWithoutLinesInput>
  }

  export type FillingOrderUpdateWithoutLinesInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    bulkUsedGm?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    performedBy?: NullableStringFieldUpdateOperationsInput | string | null
    executedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FillingOrderUncheckedUpdateWithoutLinesInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    bulkUsedGm?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    performedBy?: NullableStringFieldUpdateOperationsInput | string | null
    executedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductionOrderAddonResolutionCreateManyOrderInput = {
    id: string
    ingredientCategory: string
    addonItemId: string
  }

  export type ProductionOrderAddonResolutionUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    ingredientCategory?: StringFieldUpdateOperationsInput | string
    addonItemId?: StringFieldUpdateOperationsInput | string
  }

  export type ProductionOrderAddonResolutionUncheckedUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    ingredientCategory?: StringFieldUpdateOperationsInput | string
    addonItemId?: StringFieldUpdateOperationsInput | string
  }

  export type ProductionOrderAddonResolutionUncheckedUpdateManyWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    ingredientCategory?: StringFieldUpdateOperationsInput | string
    addonItemId?: StringFieldUpdateOperationsInput | string
  }

  export type FillingOrderLineCreateManyFillingOrderInput = {
    id: string
    variantItemId: string
    variantName: string
    quantityUnits: number
    unitWeightGm: number
    bulkUsedGm: number
  }

  export type FillingOrderLineUpdateWithoutFillingOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    variantItemId?: StringFieldUpdateOperationsInput | string
    variantName?: StringFieldUpdateOperationsInput | string
    quantityUnits?: FloatFieldUpdateOperationsInput | number
    unitWeightGm?: FloatFieldUpdateOperationsInput | number
    bulkUsedGm?: FloatFieldUpdateOperationsInput | number
  }

  export type FillingOrderLineUncheckedUpdateWithoutFillingOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    variantItemId?: StringFieldUpdateOperationsInput | string
    variantName?: StringFieldUpdateOperationsInput | string
    quantityUnits?: FloatFieldUpdateOperationsInput | number
    unitWeightGm?: FloatFieldUpdateOperationsInput | number
    bulkUsedGm?: FloatFieldUpdateOperationsInput | number
  }

  export type FillingOrderLineUncheckedUpdateManyWithoutFillingOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    variantItemId?: StringFieldUpdateOperationsInput | string
    variantName?: StringFieldUpdateOperationsInput | string
    quantityUnits?: FloatFieldUpdateOperationsInput | number
    unitWeightGm?: FloatFieldUpdateOperationsInput | number
    bulkUsedGm?: FloatFieldUpdateOperationsInput | number
  }



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