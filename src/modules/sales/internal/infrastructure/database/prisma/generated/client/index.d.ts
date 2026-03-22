
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
 * Model SalesOrder
 * 
 */
export type SalesOrder = $Result.DefaultSelection<Prisma.$SalesOrderPayload>
/**
 * Model DiscountCode
 * 
 */
export type DiscountCode = $Result.DefaultSelection<Prisma.$DiscountCodePayload>
/**
 * Model SalesOrderLine
 * 
 */
export type SalesOrderLine = $Result.DefaultSelection<Prisma.$SalesOrderLinePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more SalesOrders
 * const salesOrders = await prisma.salesOrder.findMany()
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
   * // Fetch zero or more SalesOrders
   * const salesOrders = await prisma.salesOrder.findMany()
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
   * `prisma.salesOrder`: Exposes CRUD operations for the **SalesOrder** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SalesOrders
    * const salesOrders = await prisma.salesOrder.findMany()
    * ```
    */
  get salesOrder(): Prisma.SalesOrderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.discountCode`: Exposes CRUD operations for the **DiscountCode** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DiscountCodes
    * const discountCodes = await prisma.discountCode.findMany()
    * ```
    */
  get discountCode(): Prisma.DiscountCodeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.salesOrderLine`: Exposes CRUD operations for the **SalesOrderLine** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SalesOrderLines
    * const salesOrderLines = await prisma.salesOrderLine.findMany()
    * ```
    */
  get salesOrderLine(): Prisma.SalesOrderLineDelegate<ExtArgs, ClientOptions>;
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
    SalesOrder: 'SalesOrder',
    DiscountCode: 'DiscountCode',
    SalesOrderLine: 'SalesOrderLine'
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
      modelProps: "salesOrder" | "discountCode" | "salesOrderLine"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      SalesOrder: {
        payload: Prisma.$SalesOrderPayload<ExtArgs>
        fields: Prisma.SalesOrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SalesOrderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesOrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SalesOrderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesOrderPayload>
          }
          findFirst: {
            args: Prisma.SalesOrderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesOrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SalesOrderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesOrderPayload>
          }
          findMany: {
            args: Prisma.SalesOrderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesOrderPayload>[]
          }
          create: {
            args: Prisma.SalesOrderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesOrderPayload>
          }
          createMany: {
            args: Prisma.SalesOrderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SalesOrderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesOrderPayload>[]
          }
          delete: {
            args: Prisma.SalesOrderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesOrderPayload>
          }
          update: {
            args: Prisma.SalesOrderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesOrderPayload>
          }
          deleteMany: {
            args: Prisma.SalesOrderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SalesOrderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SalesOrderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesOrderPayload>[]
          }
          upsert: {
            args: Prisma.SalesOrderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesOrderPayload>
          }
          aggregate: {
            args: Prisma.SalesOrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSalesOrder>
          }
          groupBy: {
            args: Prisma.SalesOrderGroupByArgs<ExtArgs>
            result: $Utils.Optional<SalesOrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.SalesOrderCountArgs<ExtArgs>
            result: $Utils.Optional<SalesOrderCountAggregateOutputType> | number
          }
        }
      }
      DiscountCode: {
        payload: Prisma.$DiscountCodePayload<ExtArgs>
        fields: Prisma.DiscountCodeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DiscountCodeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscountCodePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DiscountCodeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscountCodePayload>
          }
          findFirst: {
            args: Prisma.DiscountCodeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscountCodePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DiscountCodeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscountCodePayload>
          }
          findMany: {
            args: Prisma.DiscountCodeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscountCodePayload>[]
          }
          create: {
            args: Prisma.DiscountCodeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscountCodePayload>
          }
          createMany: {
            args: Prisma.DiscountCodeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DiscountCodeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscountCodePayload>[]
          }
          delete: {
            args: Prisma.DiscountCodeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscountCodePayload>
          }
          update: {
            args: Prisma.DiscountCodeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscountCodePayload>
          }
          deleteMany: {
            args: Prisma.DiscountCodeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DiscountCodeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DiscountCodeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscountCodePayload>[]
          }
          upsert: {
            args: Prisma.DiscountCodeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscountCodePayload>
          }
          aggregate: {
            args: Prisma.DiscountCodeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDiscountCode>
          }
          groupBy: {
            args: Prisma.DiscountCodeGroupByArgs<ExtArgs>
            result: $Utils.Optional<DiscountCodeGroupByOutputType>[]
          }
          count: {
            args: Prisma.DiscountCodeCountArgs<ExtArgs>
            result: $Utils.Optional<DiscountCodeCountAggregateOutputType> | number
          }
        }
      }
      SalesOrderLine: {
        payload: Prisma.$SalesOrderLinePayload<ExtArgs>
        fields: Prisma.SalesOrderLineFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SalesOrderLineFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesOrderLinePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SalesOrderLineFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesOrderLinePayload>
          }
          findFirst: {
            args: Prisma.SalesOrderLineFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesOrderLinePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SalesOrderLineFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesOrderLinePayload>
          }
          findMany: {
            args: Prisma.SalesOrderLineFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesOrderLinePayload>[]
          }
          create: {
            args: Prisma.SalesOrderLineCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesOrderLinePayload>
          }
          createMany: {
            args: Prisma.SalesOrderLineCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SalesOrderLineCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesOrderLinePayload>[]
          }
          delete: {
            args: Prisma.SalesOrderLineDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesOrderLinePayload>
          }
          update: {
            args: Prisma.SalesOrderLineUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesOrderLinePayload>
          }
          deleteMany: {
            args: Prisma.SalesOrderLineDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SalesOrderLineUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SalesOrderLineUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesOrderLinePayload>[]
          }
          upsert: {
            args: Prisma.SalesOrderLineUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesOrderLinePayload>
          }
          aggregate: {
            args: Prisma.SalesOrderLineAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSalesOrderLine>
          }
          groupBy: {
            args: Prisma.SalesOrderLineGroupByArgs<ExtArgs>
            result: $Utils.Optional<SalesOrderLineGroupByOutputType>[]
          }
          count: {
            args: Prisma.SalesOrderLineCountArgs<ExtArgs>
            result: $Utils.Optional<SalesOrderLineCountAggregateOutputType> | number
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
    salesOrder?: SalesOrderOmit
    discountCode?: DiscountCodeOmit
    salesOrderLine?: SalesOrderLineOmit
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
   * Count Type SalesOrderCountOutputType
   */

  export type SalesOrderCountOutputType = {
    lines: number
  }

  export type SalesOrderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lines?: boolean | SalesOrderCountOutputTypeCountLinesArgs
  }

  // Custom InputTypes
  /**
   * SalesOrderCountOutputType without action
   */
  export type SalesOrderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesOrderCountOutputType
     */
    select?: SalesOrderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SalesOrderCountOutputType without action
   */
  export type SalesOrderCountOutputTypeCountLinesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SalesOrderLineWhereInput
  }


  /**
   * Models
   */

  /**
   * Model SalesOrder
   */

  export type AggregateSalesOrder = {
    _count: SalesOrderCountAggregateOutputType | null
    _avg: SalesOrderAvgAggregateOutputType | null
    _sum: SalesOrderSumAggregateOutputType | null
    _min: SalesOrderMinAggregateOutputType | null
    _max: SalesOrderMaxAggregateOutputType | null
  }

  export type SalesOrderAvgAggregateOutputType = {
    discountAmount: Decimal | null
  }

  export type SalesOrderSumAggregateOutputType = {
    discountAmount: Decimal | null
  }

  export type SalesOrderMinAggregateOutputType = {
    id: string | null
    customerName: string | null
    customerPhone: string | null
    customerContact: string | null
    status: string | null
    notes: string | null
    shippedAt: Date | null
    invoiceNumber: string | null
    paymentStatus: string | null
    paidAt: Date | null
    discountCode: string | null
    discountAmount: Decimal | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SalesOrderMaxAggregateOutputType = {
    id: string | null
    customerName: string | null
    customerPhone: string | null
    customerContact: string | null
    status: string | null
    notes: string | null
    shippedAt: Date | null
    invoiceNumber: string | null
    paymentStatus: string | null
    paidAt: Date | null
    discountCode: string | null
    discountAmount: Decimal | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SalesOrderCountAggregateOutputType = {
    id: number
    customerName: number
    customerPhone: number
    customerContact: number
    status: number
    notes: number
    shippedAt: number
    invoiceNumber: number
    paymentStatus: number
    paidAt: number
    discountCode: number
    discountAmount: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SalesOrderAvgAggregateInputType = {
    discountAmount?: true
  }

  export type SalesOrderSumAggregateInputType = {
    discountAmount?: true
  }

  export type SalesOrderMinAggregateInputType = {
    id?: true
    customerName?: true
    customerPhone?: true
    customerContact?: true
    status?: true
    notes?: true
    shippedAt?: true
    invoiceNumber?: true
    paymentStatus?: true
    paidAt?: true
    discountCode?: true
    discountAmount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SalesOrderMaxAggregateInputType = {
    id?: true
    customerName?: true
    customerPhone?: true
    customerContact?: true
    status?: true
    notes?: true
    shippedAt?: true
    invoiceNumber?: true
    paymentStatus?: true
    paidAt?: true
    discountCode?: true
    discountAmount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SalesOrderCountAggregateInputType = {
    id?: true
    customerName?: true
    customerPhone?: true
    customerContact?: true
    status?: true
    notes?: true
    shippedAt?: true
    invoiceNumber?: true
    paymentStatus?: true
    paidAt?: true
    discountCode?: true
    discountAmount?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SalesOrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SalesOrder to aggregate.
     */
    where?: SalesOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SalesOrders to fetch.
     */
    orderBy?: SalesOrderOrderByWithRelationInput | SalesOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SalesOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SalesOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SalesOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SalesOrders
    **/
    _count?: true | SalesOrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SalesOrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SalesOrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SalesOrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SalesOrderMaxAggregateInputType
  }

  export type GetSalesOrderAggregateType<T extends SalesOrderAggregateArgs> = {
        [P in keyof T & keyof AggregateSalesOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSalesOrder[P]>
      : GetScalarType<T[P], AggregateSalesOrder[P]>
  }




  export type SalesOrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SalesOrderWhereInput
    orderBy?: SalesOrderOrderByWithAggregationInput | SalesOrderOrderByWithAggregationInput[]
    by: SalesOrderScalarFieldEnum[] | SalesOrderScalarFieldEnum
    having?: SalesOrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SalesOrderCountAggregateInputType | true
    _avg?: SalesOrderAvgAggregateInputType
    _sum?: SalesOrderSumAggregateInputType
    _min?: SalesOrderMinAggregateInputType
    _max?: SalesOrderMaxAggregateInputType
  }

  export type SalesOrderGroupByOutputType = {
    id: string
    customerName: string
    customerPhone: string | null
    customerContact: string | null
    status: string
    notes: string | null
    shippedAt: Date | null
    invoiceNumber: string | null
    paymentStatus: string | null
    paidAt: Date | null
    discountCode: string | null
    discountAmount: Decimal
    createdAt: Date
    updatedAt: Date
    _count: SalesOrderCountAggregateOutputType | null
    _avg: SalesOrderAvgAggregateOutputType | null
    _sum: SalesOrderSumAggregateOutputType | null
    _min: SalesOrderMinAggregateOutputType | null
    _max: SalesOrderMaxAggregateOutputType | null
  }

  type GetSalesOrderGroupByPayload<T extends SalesOrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SalesOrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SalesOrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SalesOrderGroupByOutputType[P]>
            : GetScalarType<T[P], SalesOrderGroupByOutputType[P]>
        }
      >
    >


  export type SalesOrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerName?: boolean
    customerPhone?: boolean
    customerContact?: boolean
    status?: boolean
    notes?: boolean
    shippedAt?: boolean
    invoiceNumber?: boolean
    paymentStatus?: boolean
    paidAt?: boolean
    discountCode?: boolean
    discountAmount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lines?: boolean | SalesOrder$linesArgs<ExtArgs>
    _count?: boolean | SalesOrderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["salesOrder"]>

  export type SalesOrderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerName?: boolean
    customerPhone?: boolean
    customerContact?: boolean
    status?: boolean
    notes?: boolean
    shippedAt?: boolean
    invoiceNumber?: boolean
    paymentStatus?: boolean
    paidAt?: boolean
    discountCode?: boolean
    discountAmount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["salesOrder"]>

  export type SalesOrderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerName?: boolean
    customerPhone?: boolean
    customerContact?: boolean
    status?: boolean
    notes?: boolean
    shippedAt?: boolean
    invoiceNumber?: boolean
    paymentStatus?: boolean
    paidAt?: boolean
    discountCode?: boolean
    discountAmount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["salesOrder"]>

  export type SalesOrderSelectScalar = {
    id?: boolean
    customerName?: boolean
    customerPhone?: boolean
    customerContact?: boolean
    status?: boolean
    notes?: boolean
    shippedAt?: boolean
    invoiceNumber?: boolean
    paymentStatus?: boolean
    paidAt?: boolean
    discountCode?: boolean
    discountAmount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SalesOrderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "customerName" | "customerPhone" | "customerContact" | "status" | "notes" | "shippedAt" | "invoiceNumber" | "paymentStatus" | "paidAt" | "discountCode" | "discountAmount" | "createdAt" | "updatedAt", ExtArgs["result"]["salesOrder"]>
  export type SalesOrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lines?: boolean | SalesOrder$linesArgs<ExtArgs>
    _count?: boolean | SalesOrderCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SalesOrderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SalesOrderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SalesOrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SalesOrder"
    objects: {
      lines: Prisma.$SalesOrderLinePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      customerName: string
      customerPhone: string | null
      customerContact: string | null
      status: string
      notes: string | null
      shippedAt: Date | null
      invoiceNumber: string | null
      paymentStatus: string | null
      paidAt: Date | null
      discountCode: string | null
      discountAmount: Prisma.Decimal
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["salesOrder"]>
    composites: {}
  }

  type SalesOrderGetPayload<S extends boolean | null | undefined | SalesOrderDefaultArgs> = $Result.GetResult<Prisma.$SalesOrderPayload, S>

  type SalesOrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SalesOrderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SalesOrderCountAggregateInputType | true
    }

  export interface SalesOrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SalesOrder'], meta: { name: 'SalesOrder' } }
    /**
     * Find zero or one SalesOrder that matches the filter.
     * @param {SalesOrderFindUniqueArgs} args - Arguments to find a SalesOrder
     * @example
     * // Get one SalesOrder
     * const salesOrder = await prisma.salesOrder.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SalesOrderFindUniqueArgs>(args: SelectSubset<T, SalesOrderFindUniqueArgs<ExtArgs>>): Prisma__SalesOrderClient<$Result.GetResult<Prisma.$SalesOrderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SalesOrder that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SalesOrderFindUniqueOrThrowArgs} args - Arguments to find a SalesOrder
     * @example
     * // Get one SalesOrder
     * const salesOrder = await prisma.salesOrder.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SalesOrderFindUniqueOrThrowArgs>(args: SelectSubset<T, SalesOrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SalesOrderClient<$Result.GetResult<Prisma.$SalesOrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SalesOrder that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesOrderFindFirstArgs} args - Arguments to find a SalesOrder
     * @example
     * // Get one SalesOrder
     * const salesOrder = await prisma.salesOrder.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SalesOrderFindFirstArgs>(args?: SelectSubset<T, SalesOrderFindFirstArgs<ExtArgs>>): Prisma__SalesOrderClient<$Result.GetResult<Prisma.$SalesOrderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SalesOrder that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesOrderFindFirstOrThrowArgs} args - Arguments to find a SalesOrder
     * @example
     * // Get one SalesOrder
     * const salesOrder = await prisma.salesOrder.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SalesOrderFindFirstOrThrowArgs>(args?: SelectSubset<T, SalesOrderFindFirstOrThrowArgs<ExtArgs>>): Prisma__SalesOrderClient<$Result.GetResult<Prisma.$SalesOrderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SalesOrders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesOrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SalesOrders
     * const salesOrders = await prisma.salesOrder.findMany()
     * 
     * // Get first 10 SalesOrders
     * const salesOrders = await prisma.salesOrder.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const salesOrderWithIdOnly = await prisma.salesOrder.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SalesOrderFindManyArgs>(args?: SelectSubset<T, SalesOrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalesOrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SalesOrder.
     * @param {SalesOrderCreateArgs} args - Arguments to create a SalesOrder.
     * @example
     * // Create one SalesOrder
     * const SalesOrder = await prisma.salesOrder.create({
     *   data: {
     *     // ... data to create a SalesOrder
     *   }
     * })
     * 
     */
    create<T extends SalesOrderCreateArgs>(args: SelectSubset<T, SalesOrderCreateArgs<ExtArgs>>): Prisma__SalesOrderClient<$Result.GetResult<Prisma.$SalesOrderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SalesOrders.
     * @param {SalesOrderCreateManyArgs} args - Arguments to create many SalesOrders.
     * @example
     * // Create many SalesOrders
     * const salesOrder = await prisma.salesOrder.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SalesOrderCreateManyArgs>(args?: SelectSubset<T, SalesOrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SalesOrders and returns the data saved in the database.
     * @param {SalesOrderCreateManyAndReturnArgs} args - Arguments to create many SalesOrders.
     * @example
     * // Create many SalesOrders
     * const salesOrder = await prisma.salesOrder.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SalesOrders and only return the `id`
     * const salesOrderWithIdOnly = await prisma.salesOrder.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SalesOrderCreateManyAndReturnArgs>(args?: SelectSubset<T, SalesOrderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalesOrderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SalesOrder.
     * @param {SalesOrderDeleteArgs} args - Arguments to delete one SalesOrder.
     * @example
     * // Delete one SalesOrder
     * const SalesOrder = await prisma.salesOrder.delete({
     *   where: {
     *     // ... filter to delete one SalesOrder
     *   }
     * })
     * 
     */
    delete<T extends SalesOrderDeleteArgs>(args: SelectSubset<T, SalesOrderDeleteArgs<ExtArgs>>): Prisma__SalesOrderClient<$Result.GetResult<Prisma.$SalesOrderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SalesOrder.
     * @param {SalesOrderUpdateArgs} args - Arguments to update one SalesOrder.
     * @example
     * // Update one SalesOrder
     * const salesOrder = await prisma.salesOrder.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SalesOrderUpdateArgs>(args: SelectSubset<T, SalesOrderUpdateArgs<ExtArgs>>): Prisma__SalesOrderClient<$Result.GetResult<Prisma.$SalesOrderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SalesOrders.
     * @param {SalesOrderDeleteManyArgs} args - Arguments to filter SalesOrders to delete.
     * @example
     * // Delete a few SalesOrders
     * const { count } = await prisma.salesOrder.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SalesOrderDeleteManyArgs>(args?: SelectSubset<T, SalesOrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SalesOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesOrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SalesOrders
     * const salesOrder = await prisma.salesOrder.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SalesOrderUpdateManyArgs>(args: SelectSubset<T, SalesOrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SalesOrders and returns the data updated in the database.
     * @param {SalesOrderUpdateManyAndReturnArgs} args - Arguments to update many SalesOrders.
     * @example
     * // Update many SalesOrders
     * const salesOrder = await prisma.salesOrder.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SalesOrders and only return the `id`
     * const salesOrderWithIdOnly = await prisma.salesOrder.updateManyAndReturn({
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
    updateManyAndReturn<T extends SalesOrderUpdateManyAndReturnArgs>(args: SelectSubset<T, SalesOrderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalesOrderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SalesOrder.
     * @param {SalesOrderUpsertArgs} args - Arguments to update or create a SalesOrder.
     * @example
     * // Update or create a SalesOrder
     * const salesOrder = await prisma.salesOrder.upsert({
     *   create: {
     *     // ... data to create a SalesOrder
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SalesOrder we want to update
     *   }
     * })
     */
    upsert<T extends SalesOrderUpsertArgs>(args: SelectSubset<T, SalesOrderUpsertArgs<ExtArgs>>): Prisma__SalesOrderClient<$Result.GetResult<Prisma.$SalesOrderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SalesOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesOrderCountArgs} args - Arguments to filter SalesOrders to count.
     * @example
     * // Count the number of SalesOrders
     * const count = await prisma.salesOrder.count({
     *   where: {
     *     // ... the filter for the SalesOrders we want to count
     *   }
     * })
    **/
    count<T extends SalesOrderCountArgs>(
      args?: Subset<T, SalesOrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SalesOrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SalesOrder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesOrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SalesOrderAggregateArgs>(args: Subset<T, SalesOrderAggregateArgs>): Prisma.PrismaPromise<GetSalesOrderAggregateType<T>>

    /**
     * Group by SalesOrder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesOrderGroupByArgs} args - Group by arguments.
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
      T extends SalesOrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SalesOrderGroupByArgs['orderBy'] }
        : { orderBy?: SalesOrderGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SalesOrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSalesOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SalesOrder model
   */
  readonly fields: SalesOrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SalesOrder.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SalesOrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    lines<T extends SalesOrder$linesArgs<ExtArgs> = {}>(args?: Subset<T, SalesOrder$linesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalesOrderLinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the SalesOrder model
   */
  interface SalesOrderFieldRefs {
    readonly id: FieldRef<"SalesOrder", 'String'>
    readonly customerName: FieldRef<"SalesOrder", 'String'>
    readonly customerPhone: FieldRef<"SalesOrder", 'String'>
    readonly customerContact: FieldRef<"SalesOrder", 'String'>
    readonly status: FieldRef<"SalesOrder", 'String'>
    readonly notes: FieldRef<"SalesOrder", 'String'>
    readonly shippedAt: FieldRef<"SalesOrder", 'DateTime'>
    readonly invoiceNumber: FieldRef<"SalesOrder", 'String'>
    readonly paymentStatus: FieldRef<"SalesOrder", 'String'>
    readonly paidAt: FieldRef<"SalesOrder", 'DateTime'>
    readonly discountCode: FieldRef<"SalesOrder", 'String'>
    readonly discountAmount: FieldRef<"SalesOrder", 'Decimal'>
    readonly createdAt: FieldRef<"SalesOrder", 'DateTime'>
    readonly updatedAt: FieldRef<"SalesOrder", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SalesOrder findUnique
   */
  export type SalesOrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesOrder
     */
    select?: SalesOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalesOrder
     */
    omit?: SalesOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesOrderInclude<ExtArgs> | null
    /**
     * Filter, which SalesOrder to fetch.
     */
    where: SalesOrderWhereUniqueInput
  }

  /**
   * SalesOrder findUniqueOrThrow
   */
  export type SalesOrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesOrder
     */
    select?: SalesOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalesOrder
     */
    omit?: SalesOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesOrderInclude<ExtArgs> | null
    /**
     * Filter, which SalesOrder to fetch.
     */
    where: SalesOrderWhereUniqueInput
  }

  /**
   * SalesOrder findFirst
   */
  export type SalesOrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesOrder
     */
    select?: SalesOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalesOrder
     */
    omit?: SalesOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesOrderInclude<ExtArgs> | null
    /**
     * Filter, which SalesOrder to fetch.
     */
    where?: SalesOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SalesOrders to fetch.
     */
    orderBy?: SalesOrderOrderByWithRelationInput | SalesOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SalesOrders.
     */
    cursor?: SalesOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SalesOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SalesOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SalesOrders.
     */
    distinct?: SalesOrderScalarFieldEnum | SalesOrderScalarFieldEnum[]
  }

  /**
   * SalesOrder findFirstOrThrow
   */
  export type SalesOrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesOrder
     */
    select?: SalesOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalesOrder
     */
    omit?: SalesOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesOrderInclude<ExtArgs> | null
    /**
     * Filter, which SalesOrder to fetch.
     */
    where?: SalesOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SalesOrders to fetch.
     */
    orderBy?: SalesOrderOrderByWithRelationInput | SalesOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SalesOrders.
     */
    cursor?: SalesOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SalesOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SalesOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SalesOrders.
     */
    distinct?: SalesOrderScalarFieldEnum | SalesOrderScalarFieldEnum[]
  }

  /**
   * SalesOrder findMany
   */
  export type SalesOrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesOrder
     */
    select?: SalesOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalesOrder
     */
    omit?: SalesOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesOrderInclude<ExtArgs> | null
    /**
     * Filter, which SalesOrders to fetch.
     */
    where?: SalesOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SalesOrders to fetch.
     */
    orderBy?: SalesOrderOrderByWithRelationInput | SalesOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SalesOrders.
     */
    cursor?: SalesOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SalesOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SalesOrders.
     */
    skip?: number
    distinct?: SalesOrderScalarFieldEnum | SalesOrderScalarFieldEnum[]
  }

  /**
   * SalesOrder create
   */
  export type SalesOrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesOrder
     */
    select?: SalesOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalesOrder
     */
    omit?: SalesOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesOrderInclude<ExtArgs> | null
    /**
     * The data needed to create a SalesOrder.
     */
    data: XOR<SalesOrderCreateInput, SalesOrderUncheckedCreateInput>
  }

  /**
   * SalesOrder createMany
   */
  export type SalesOrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SalesOrders.
     */
    data: SalesOrderCreateManyInput | SalesOrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SalesOrder createManyAndReturn
   */
  export type SalesOrderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesOrder
     */
    select?: SalesOrderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SalesOrder
     */
    omit?: SalesOrderOmit<ExtArgs> | null
    /**
     * The data used to create many SalesOrders.
     */
    data: SalesOrderCreateManyInput | SalesOrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SalesOrder update
   */
  export type SalesOrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesOrder
     */
    select?: SalesOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalesOrder
     */
    omit?: SalesOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesOrderInclude<ExtArgs> | null
    /**
     * The data needed to update a SalesOrder.
     */
    data: XOR<SalesOrderUpdateInput, SalesOrderUncheckedUpdateInput>
    /**
     * Choose, which SalesOrder to update.
     */
    where: SalesOrderWhereUniqueInput
  }

  /**
   * SalesOrder updateMany
   */
  export type SalesOrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SalesOrders.
     */
    data: XOR<SalesOrderUpdateManyMutationInput, SalesOrderUncheckedUpdateManyInput>
    /**
     * Filter which SalesOrders to update
     */
    where?: SalesOrderWhereInput
    /**
     * Limit how many SalesOrders to update.
     */
    limit?: number
  }

  /**
   * SalesOrder updateManyAndReturn
   */
  export type SalesOrderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesOrder
     */
    select?: SalesOrderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SalesOrder
     */
    omit?: SalesOrderOmit<ExtArgs> | null
    /**
     * The data used to update SalesOrders.
     */
    data: XOR<SalesOrderUpdateManyMutationInput, SalesOrderUncheckedUpdateManyInput>
    /**
     * Filter which SalesOrders to update
     */
    where?: SalesOrderWhereInput
    /**
     * Limit how many SalesOrders to update.
     */
    limit?: number
  }

  /**
   * SalesOrder upsert
   */
  export type SalesOrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesOrder
     */
    select?: SalesOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalesOrder
     */
    omit?: SalesOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesOrderInclude<ExtArgs> | null
    /**
     * The filter to search for the SalesOrder to update in case it exists.
     */
    where: SalesOrderWhereUniqueInput
    /**
     * In case the SalesOrder found by the `where` argument doesn't exist, create a new SalesOrder with this data.
     */
    create: XOR<SalesOrderCreateInput, SalesOrderUncheckedCreateInput>
    /**
     * In case the SalesOrder was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SalesOrderUpdateInput, SalesOrderUncheckedUpdateInput>
  }

  /**
   * SalesOrder delete
   */
  export type SalesOrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesOrder
     */
    select?: SalesOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalesOrder
     */
    omit?: SalesOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesOrderInclude<ExtArgs> | null
    /**
     * Filter which SalesOrder to delete.
     */
    where: SalesOrderWhereUniqueInput
  }

  /**
   * SalesOrder deleteMany
   */
  export type SalesOrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SalesOrders to delete
     */
    where?: SalesOrderWhereInput
    /**
     * Limit how many SalesOrders to delete.
     */
    limit?: number
  }

  /**
   * SalesOrder.lines
   */
  export type SalesOrder$linesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesOrderLine
     */
    select?: SalesOrderLineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalesOrderLine
     */
    omit?: SalesOrderLineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesOrderLineInclude<ExtArgs> | null
    where?: SalesOrderLineWhereInput
    orderBy?: SalesOrderLineOrderByWithRelationInput | SalesOrderLineOrderByWithRelationInput[]
    cursor?: SalesOrderLineWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SalesOrderLineScalarFieldEnum | SalesOrderLineScalarFieldEnum[]
  }

  /**
   * SalesOrder without action
   */
  export type SalesOrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesOrder
     */
    select?: SalesOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalesOrder
     */
    omit?: SalesOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesOrderInclude<ExtArgs> | null
  }


  /**
   * Model DiscountCode
   */

  export type AggregateDiscountCode = {
    _count: DiscountCodeCountAggregateOutputType | null
    _avg: DiscountCodeAvgAggregateOutputType | null
    _sum: DiscountCodeSumAggregateOutputType | null
    _min: DiscountCodeMinAggregateOutputType | null
    _max: DiscountCodeMaxAggregateOutputType | null
  }

  export type DiscountCodeAvgAggregateOutputType = {
    value: Decimal | null
    maxUses: number | null
    usedCount: number | null
  }

  export type DiscountCodeSumAggregateOutputType = {
    value: Decimal | null
    maxUses: number | null
    usedCount: number | null
  }

  export type DiscountCodeMinAggregateOutputType = {
    id: string | null
    code: string | null
    type: string | null
    value: Decimal | null
    maxUses: number | null
    usedCount: number | null
    expiresAt: Date | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DiscountCodeMaxAggregateOutputType = {
    id: string | null
    code: string | null
    type: string | null
    value: Decimal | null
    maxUses: number | null
    usedCount: number | null
    expiresAt: Date | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DiscountCodeCountAggregateOutputType = {
    id: number
    code: number
    type: number
    value: number
    maxUses: number
    usedCount: number
    expiresAt: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DiscountCodeAvgAggregateInputType = {
    value?: true
    maxUses?: true
    usedCount?: true
  }

  export type DiscountCodeSumAggregateInputType = {
    value?: true
    maxUses?: true
    usedCount?: true
  }

  export type DiscountCodeMinAggregateInputType = {
    id?: true
    code?: true
    type?: true
    value?: true
    maxUses?: true
    usedCount?: true
    expiresAt?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DiscountCodeMaxAggregateInputType = {
    id?: true
    code?: true
    type?: true
    value?: true
    maxUses?: true
    usedCount?: true
    expiresAt?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DiscountCodeCountAggregateInputType = {
    id?: true
    code?: true
    type?: true
    value?: true
    maxUses?: true
    usedCount?: true
    expiresAt?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DiscountCodeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DiscountCode to aggregate.
     */
    where?: DiscountCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiscountCodes to fetch.
     */
    orderBy?: DiscountCodeOrderByWithRelationInput | DiscountCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DiscountCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiscountCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiscountCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DiscountCodes
    **/
    _count?: true | DiscountCodeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DiscountCodeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DiscountCodeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DiscountCodeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DiscountCodeMaxAggregateInputType
  }

  export type GetDiscountCodeAggregateType<T extends DiscountCodeAggregateArgs> = {
        [P in keyof T & keyof AggregateDiscountCode]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDiscountCode[P]>
      : GetScalarType<T[P], AggregateDiscountCode[P]>
  }




  export type DiscountCodeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DiscountCodeWhereInput
    orderBy?: DiscountCodeOrderByWithAggregationInput | DiscountCodeOrderByWithAggregationInput[]
    by: DiscountCodeScalarFieldEnum[] | DiscountCodeScalarFieldEnum
    having?: DiscountCodeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DiscountCodeCountAggregateInputType | true
    _avg?: DiscountCodeAvgAggregateInputType
    _sum?: DiscountCodeSumAggregateInputType
    _min?: DiscountCodeMinAggregateInputType
    _max?: DiscountCodeMaxAggregateInputType
  }

  export type DiscountCodeGroupByOutputType = {
    id: string
    code: string
    type: string
    value: Decimal
    maxUses: number | null
    usedCount: number
    expiresAt: Date | null
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: DiscountCodeCountAggregateOutputType | null
    _avg: DiscountCodeAvgAggregateOutputType | null
    _sum: DiscountCodeSumAggregateOutputType | null
    _min: DiscountCodeMinAggregateOutputType | null
    _max: DiscountCodeMaxAggregateOutputType | null
  }

  type GetDiscountCodeGroupByPayload<T extends DiscountCodeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DiscountCodeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DiscountCodeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DiscountCodeGroupByOutputType[P]>
            : GetScalarType<T[P], DiscountCodeGroupByOutputType[P]>
        }
      >
    >


  export type DiscountCodeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    type?: boolean
    value?: boolean
    maxUses?: boolean
    usedCount?: boolean
    expiresAt?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["discountCode"]>

  export type DiscountCodeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    type?: boolean
    value?: boolean
    maxUses?: boolean
    usedCount?: boolean
    expiresAt?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["discountCode"]>

  export type DiscountCodeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    type?: boolean
    value?: boolean
    maxUses?: boolean
    usedCount?: boolean
    expiresAt?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["discountCode"]>

  export type DiscountCodeSelectScalar = {
    id?: boolean
    code?: boolean
    type?: boolean
    value?: boolean
    maxUses?: boolean
    usedCount?: boolean
    expiresAt?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DiscountCodeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code" | "type" | "value" | "maxUses" | "usedCount" | "expiresAt" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["discountCode"]>

  export type $DiscountCodePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DiscountCode"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      code: string
      type: string
      value: Prisma.Decimal
      maxUses: number | null
      usedCount: number
      expiresAt: Date | null
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["discountCode"]>
    composites: {}
  }

  type DiscountCodeGetPayload<S extends boolean | null | undefined | DiscountCodeDefaultArgs> = $Result.GetResult<Prisma.$DiscountCodePayload, S>

  type DiscountCodeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DiscountCodeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DiscountCodeCountAggregateInputType | true
    }

  export interface DiscountCodeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DiscountCode'], meta: { name: 'DiscountCode' } }
    /**
     * Find zero or one DiscountCode that matches the filter.
     * @param {DiscountCodeFindUniqueArgs} args - Arguments to find a DiscountCode
     * @example
     * // Get one DiscountCode
     * const discountCode = await prisma.discountCode.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DiscountCodeFindUniqueArgs>(args: SelectSubset<T, DiscountCodeFindUniqueArgs<ExtArgs>>): Prisma__DiscountCodeClient<$Result.GetResult<Prisma.$DiscountCodePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DiscountCode that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DiscountCodeFindUniqueOrThrowArgs} args - Arguments to find a DiscountCode
     * @example
     * // Get one DiscountCode
     * const discountCode = await prisma.discountCode.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DiscountCodeFindUniqueOrThrowArgs>(args: SelectSubset<T, DiscountCodeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DiscountCodeClient<$Result.GetResult<Prisma.$DiscountCodePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DiscountCode that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscountCodeFindFirstArgs} args - Arguments to find a DiscountCode
     * @example
     * // Get one DiscountCode
     * const discountCode = await prisma.discountCode.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DiscountCodeFindFirstArgs>(args?: SelectSubset<T, DiscountCodeFindFirstArgs<ExtArgs>>): Prisma__DiscountCodeClient<$Result.GetResult<Prisma.$DiscountCodePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DiscountCode that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscountCodeFindFirstOrThrowArgs} args - Arguments to find a DiscountCode
     * @example
     * // Get one DiscountCode
     * const discountCode = await prisma.discountCode.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DiscountCodeFindFirstOrThrowArgs>(args?: SelectSubset<T, DiscountCodeFindFirstOrThrowArgs<ExtArgs>>): Prisma__DiscountCodeClient<$Result.GetResult<Prisma.$DiscountCodePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DiscountCodes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscountCodeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DiscountCodes
     * const discountCodes = await prisma.discountCode.findMany()
     * 
     * // Get first 10 DiscountCodes
     * const discountCodes = await prisma.discountCode.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const discountCodeWithIdOnly = await prisma.discountCode.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DiscountCodeFindManyArgs>(args?: SelectSubset<T, DiscountCodeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiscountCodePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DiscountCode.
     * @param {DiscountCodeCreateArgs} args - Arguments to create a DiscountCode.
     * @example
     * // Create one DiscountCode
     * const DiscountCode = await prisma.discountCode.create({
     *   data: {
     *     // ... data to create a DiscountCode
     *   }
     * })
     * 
     */
    create<T extends DiscountCodeCreateArgs>(args: SelectSubset<T, DiscountCodeCreateArgs<ExtArgs>>): Prisma__DiscountCodeClient<$Result.GetResult<Prisma.$DiscountCodePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DiscountCodes.
     * @param {DiscountCodeCreateManyArgs} args - Arguments to create many DiscountCodes.
     * @example
     * // Create many DiscountCodes
     * const discountCode = await prisma.discountCode.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DiscountCodeCreateManyArgs>(args?: SelectSubset<T, DiscountCodeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DiscountCodes and returns the data saved in the database.
     * @param {DiscountCodeCreateManyAndReturnArgs} args - Arguments to create many DiscountCodes.
     * @example
     * // Create many DiscountCodes
     * const discountCode = await prisma.discountCode.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DiscountCodes and only return the `id`
     * const discountCodeWithIdOnly = await prisma.discountCode.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DiscountCodeCreateManyAndReturnArgs>(args?: SelectSubset<T, DiscountCodeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiscountCodePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DiscountCode.
     * @param {DiscountCodeDeleteArgs} args - Arguments to delete one DiscountCode.
     * @example
     * // Delete one DiscountCode
     * const DiscountCode = await prisma.discountCode.delete({
     *   where: {
     *     // ... filter to delete one DiscountCode
     *   }
     * })
     * 
     */
    delete<T extends DiscountCodeDeleteArgs>(args: SelectSubset<T, DiscountCodeDeleteArgs<ExtArgs>>): Prisma__DiscountCodeClient<$Result.GetResult<Prisma.$DiscountCodePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DiscountCode.
     * @param {DiscountCodeUpdateArgs} args - Arguments to update one DiscountCode.
     * @example
     * // Update one DiscountCode
     * const discountCode = await prisma.discountCode.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DiscountCodeUpdateArgs>(args: SelectSubset<T, DiscountCodeUpdateArgs<ExtArgs>>): Prisma__DiscountCodeClient<$Result.GetResult<Prisma.$DiscountCodePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DiscountCodes.
     * @param {DiscountCodeDeleteManyArgs} args - Arguments to filter DiscountCodes to delete.
     * @example
     * // Delete a few DiscountCodes
     * const { count } = await prisma.discountCode.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DiscountCodeDeleteManyArgs>(args?: SelectSubset<T, DiscountCodeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DiscountCodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscountCodeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DiscountCodes
     * const discountCode = await prisma.discountCode.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DiscountCodeUpdateManyArgs>(args: SelectSubset<T, DiscountCodeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DiscountCodes and returns the data updated in the database.
     * @param {DiscountCodeUpdateManyAndReturnArgs} args - Arguments to update many DiscountCodes.
     * @example
     * // Update many DiscountCodes
     * const discountCode = await prisma.discountCode.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DiscountCodes and only return the `id`
     * const discountCodeWithIdOnly = await prisma.discountCode.updateManyAndReturn({
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
    updateManyAndReturn<T extends DiscountCodeUpdateManyAndReturnArgs>(args: SelectSubset<T, DiscountCodeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiscountCodePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DiscountCode.
     * @param {DiscountCodeUpsertArgs} args - Arguments to update or create a DiscountCode.
     * @example
     * // Update or create a DiscountCode
     * const discountCode = await prisma.discountCode.upsert({
     *   create: {
     *     // ... data to create a DiscountCode
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DiscountCode we want to update
     *   }
     * })
     */
    upsert<T extends DiscountCodeUpsertArgs>(args: SelectSubset<T, DiscountCodeUpsertArgs<ExtArgs>>): Prisma__DiscountCodeClient<$Result.GetResult<Prisma.$DiscountCodePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DiscountCodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscountCodeCountArgs} args - Arguments to filter DiscountCodes to count.
     * @example
     * // Count the number of DiscountCodes
     * const count = await prisma.discountCode.count({
     *   where: {
     *     // ... the filter for the DiscountCodes we want to count
     *   }
     * })
    **/
    count<T extends DiscountCodeCountArgs>(
      args?: Subset<T, DiscountCodeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DiscountCodeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DiscountCode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscountCodeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DiscountCodeAggregateArgs>(args: Subset<T, DiscountCodeAggregateArgs>): Prisma.PrismaPromise<GetDiscountCodeAggregateType<T>>

    /**
     * Group by DiscountCode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscountCodeGroupByArgs} args - Group by arguments.
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
      T extends DiscountCodeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DiscountCodeGroupByArgs['orderBy'] }
        : { orderBy?: DiscountCodeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DiscountCodeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDiscountCodeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DiscountCode model
   */
  readonly fields: DiscountCodeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DiscountCode.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DiscountCodeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the DiscountCode model
   */
  interface DiscountCodeFieldRefs {
    readonly id: FieldRef<"DiscountCode", 'String'>
    readonly code: FieldRef<"DiscountCode", 'String'>
    readonly type: FieldRef<"DiscountCode", 'String'>
    readonly value: FieldRef<"DiscountCode", 'Decimal'>
    readonly maxUses: FieldRef<"DiscountCode", 'Int'>
    readonly usedCount: FieldRef<"DiscountCode", 'Int'>
    readonly expiresAt: FieldRef<"DiscountCode", 'DateTime'>
    readonly isActive: FieldRef<"DiscountCode", 'Boolean'>
    readonly createdAt: FieldRef<"DiscountCode", 'DateTime'>
    readonly updatedAt: FieldRef<"DiscountCode", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DiscountCode findUnique
   */
  export type DiscountCodeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscountCode
     */
    select?: DiscountCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscountCode
     */
    omit?: DiscountCodeOmit<ExtArgs> | null
    /**
     * Filter, which DiscountCode to fetch.
     */
    where: DiscountCodeWhereUniqueInput
  }

  /**
   * DiscountCode findUniqueOrThrow
   */
  export type DiscountCodeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscountCode
     */
    select?: DiscountCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscountCode
     */
    omit?: DiscountCodeOmit<ExtArgs> | null
    /**
     * Filter, which DiscountCode to fetch.
     */
    where: DiscountCodeWhereUniqueInput
  }

  /**
   * DiscountCode findFirst
   */
  export type DiscountCodeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscountCode
     */
    select?: DiscountCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscountCode
     */
    omit?: DiscountCodeOmit<ExtArgs> | null
    /**
     * Filter, which DiscountCode to fetch.
     */
    where?: DiscountCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiscountCodes to fetch.
     */
    orderBy?: DiscountCodeOrderByWithRelationInput | DiscountCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DiscountCodes.
     */
    cursor?: DiscountCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiscountCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiscountCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DiscountCodes.
     */
    distinct?: DiscountCodeScalarFieldEnum | DiscountCodeScalarFieldEnum[]
  }

  /**
   * DiscountCode findFirstOrThrow
   */
  export type DiscountCodeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscountCode
     */
    select?: DiscountCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscountCode
     */
    omit?: DiscountCodeOmit<ExtArgs> | null
    /**
     * Filter, which DiscountCode to fetch.
     */
    where?: DiscountCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiscountCodes to fetch.
     */
    orderBy?: DiscountCodeOrderByWithRelationInput | DiscountCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DiscountCodes.
     */
    cursor?: DiscountCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiscountCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiscountCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DiscountCodes.
     */
    distinct?: DiscountCodeScalarFieldEnum | DiscountCodeScalarFieldEnum[]
  }

  /**
   * DiscountCode findMany
   */
  export type DiscountCodeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscountCode
     */
    select?: DiscountCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscountCode
     */
    omit?: DiscountCodeOmit<ExtArgs> | null
    /**
     * Filter, which DiscountCodes to fetch.
     */
    where?: DiscountCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiscountCodes to fetch.
     */
    orderBy?: DiscountCodeOrderByWithRelationInput | DiscountCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DiscountCodes.
     */
    cursor?: DiscountCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiscountCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiscountCodes.
     */
    skip?: number
    distinct?: DiscountCodeScalarFieldEnum | DiscountCodeScalarFieldEnum[]
  }

  /**
   * DiscountCode create
   */
  export type DiscountCodeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscountCode
     */
    select?: DiscountCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscountCode
     */
    omit?: DiscountCodeOmit<ExtArgs> | null
    /**
     * The data needed to create a DiscountCode.
     */
    data: XOR<DiscountCodeCreateInput, DiscountCodeUncheckedCreateInput>
  }

  /**
   * DiscountCode createMany
   */
  export type DiscountCodeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DiscountCodes.
     */
    data: DiscountCodeCreateManyInput | DiscountCodeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DiscountCode createManyAndReturn
   */
  export type DiscountCodeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscountCode
     */
    select?: DiscountCodeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DiscountCode
     */
    omit?: DiscountCodeOmit<ExtArgs> | null
    /**
     * The data used to create many DiscountCodes.
     */
    data: DiscountCodeCreateManyInput | DiscountCodeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DiscountCode update
   */
  export type DiscountCodeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscountCode
     */
    select?: DiscountCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscountCode
     */
    omit?: DiscountCodeOmit<ExtArgs> | null
    /**
     * The data needed to update a DiscountCode.
     */
    data: XOR<DiscountCodeUpdateInput, DiscountCodeUncheckedUpdateInput>
    /**
     * Choose, which DiscountCode to update.
     */
    where: DiscountCodeWhereUniqueInput
  }

  /**
   * DiscountCode updateMany
   */
  export type DiscountCodeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DiscountCodes.
     */
    data: XOR<DiscountCodeUpdateManyMutationInput, DiscountCodeUncheckedUpdateManyInput>
    /**
     * Filter which DiscountCodes to update
     */
    where?: DiscountCodeWhereInput
    /**
     * Limit how many DiscountCodes to update.
     */
    limit?: number
  }

  /**
   * DiscountCode updateManyAndReturn
   */
  export type DiscountCodeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscountCode
     */
    select?: DiscountCodeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DiscountCode
     */
    omit?: DiscountCodeOmit<ExtArgs> | null
    /**
     * The data used to update DiscountCodes.
     */
    data: XOR<DiscountCodeUpdateManyMutationInput, DiscountCodeUncheckedUpdateManyInput>
    /**
     * Filter which DiscountCodes to update
     */
    where?: DiscountCodeWhereInput
    /**
     * Limit how many DiscountCodes to update.
     */
    limit?: number
  }

  /**
   * DiscountCode upsert
   */
  export type DiscountCodeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscountCode
     */
    select?: DiscountCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscountCode
     */
    omit?: DiscountCodeOmit<ExtArgs> | null
    /**
     * The filter to search for the DiscountCode to update in case it exists.
     */
    where: DiscountCodeWhereUniqueInput
    /**
     * In case the DiscountCode found by the `where` argument doesn't exist, create a new DiscountCode with this data.
     */
    create: XOR<DiscountCodeCreateInput, DiscountCodeUncheckedCreateInput>
    /**
     * In case the DiscountCode was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DiscountCodeUpdateInput, DiscountCodeUncheckedUpdateInput>
  }

  /**
   * DiscountCode delete
   */
  export type DiscountCodeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscountCode
     */
    select?: DiscountCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscountCode
     */
    omit?: DiscountCodeOmit<ExtArgs> | null
    /**
     * Filter which DiscountCode to delete.
     */
    where: DiscountCodeWhereUniqueInput
  }

  /**
   * DiscountCode deleteMany
   */
  export type DiscountCodeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DiscountCodes to delete
     */
    where?: DiscountCodeWhereInput
    /**
     * Limit how many DiscountCodes to delete.
     */
    limit?: number
  }

  /**
   * DiscountCode without action
   */
  export type DiscountCodeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscountCode
     */
    select?: DiscountCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscountCode
     */
    omit?: DiscountCodeOmit<ExtArgs> | null
  }


  /**
   * Model SalesOrderLine
   */

  export type AggregateSalesOrderLine = {
    _count: SalesOrderLineCountAggregateOutputType | null
    _avg: SalesOrderLineAvgAggregateOutputType | null
    _sum: SalesOrderLineSumAggregateOutputType | null
    _min: SalesOrderLineMinAggregateOutputType | null
    _max: SalesOrderLineMaxAggregateOutputType | null
  }

  export type SalesOrderLineAvgAggregateOutputType = {
    quantity: Decimal | null
    unitPrice: Decimal | null
  }

  export type SalesOrderLineSumAggregateOutputType = {
    quantity: Decimal | null
    unitPrice: Decimal | null
  }

  export type SalesOrderLineMinAggregateOutputType = {
    id: string | null
    orderId: string | null
    itemId: string | null
    itemName: string | null
    measureUnit: string | null
    quantity: Decimal | null
    unitPrice: Decimal | null
    isGift: boolean | null
  }

  export type SalesOrderLineMaxAggregateOutputType = {
    id: string | null
    orderId: string | null
    itemId: string | null
    itemName: string | null
    measureUnit: string | null
    quantity: Decimal | null
    unitPrice: Decimal | null
    isGift: boolean | null
  }

  export type SalesOrderLineCountAggregateOutputType = {
    id: number
    orderId: number
    itemId: number
    itemName: number
    measureUnit: number
    quantity: number
    unitPrice: number
    isGift: number
    _all: number
  }


  export type SalesOrderLineAvgAggregateInputType = {
    quantity?: true
    unitPrice?: true
  }

  export type SalesOrderLineSumAggregateInputType = {
    quantity?: true
    unitPrice?: true
  }

  export type SalesOrderLineMinAggregateInputType = {
    id?: true
    orderId?: true
    itemId?: true
    itemName?: true
    measureUnit?: true
    quantity?: true
    unitPrice?: true
    isGift?: true
  }

  export type SalesOrderLineMaxAggregateInputType = {
    id?: true
    orderId?: true
    itemId?: true
    itemName?: true
    measureUnit?: true
    quantity?: true
    unitPrice?: true
    isGift?: true
  }

  export type SalesOrderLineCountAggregateInputType = {
    id?: true
    orderId?: true
    itemId?: true
    itemName?: true
    measureUnit?: true
    quantity?: true
    unitPrice?: true
    isGift?: true
    _all?: true
  }

  export type SalesOrderLineAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SalesOrderLine to aggregate.
     */
    where?: SalesOrderLineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SalesOrderLines to fetch.
     */
    orderBy?: SalesOrderLineOrderByWithRelationInput | SalesOrderLineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SalesOrderLineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SalesOrderLines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SalesOrderLines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SalesOrderLines
    **/
    _count?: true | SalesOrderLineCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SalesOrderLineAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SalesOrderLineSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SalesOrderLineMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SalesOrderLineMaxAggregateInputType
  }

  export type GetSalesOrderLineAggregateType<T extends SalesOrderLineAggregateArgs> = {
        [P in keyof T & keyof AggregateSalesOrderLine]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSalesOrderLine[P]>
      : GetScalarType<T[P], AggregateSalesOrderLine[P]>
  }




  export type SalesOrderLineGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SalesOrderLineWhereInput
    orderBy?: SalesOrderLineOrderByWithAggregationInput | SalesOrderLineOrderByWithAggregationInput[]
    by: SalesOrderLineScalarFieldEnum[] | SalesOrderLineScalarFieldEnum
    having?: SalesOrderLineScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SalesOrderLineCountAggregateInputType | true
    _avg?: SalesOrderLineAvgAggregateInputType
    _sum?: SalesOrderLineSumAggregateInputType
    _min?: SalesOrderLineMinAggregateInputType
    _max?: SalesOrderLineMaxAggregateInputType
  }

  export type SalesOrderLineGroupByOutputType = {
    id: string
    orderId: string
    itemId: string
    itemName: string
    measureUnit: string
    quantity: Decimal
    unitPrice: Decimal
    isGift: boolean
    _count: SalesOrderLineCountAggregateOutputType | null
    _avg: SalesOrderLineAvgAggregateOutputType | null
    _sum: SalesOrderLineSumAggregateOutputType | null
    _min: SalesOrderLineMinAggregateOutputType | null
    _max: SalesOrderLineMaxAggregateOutputType | null
  }

  type GetSalesOrderLineGroupByPayload<T extends SalesOrderLineGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SalesOrderLineGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SalesOrderLineGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SalesOrderLineGroupByOutputType[P]>
            : GetScalarType<T[P], SalesOrderLineGroupByOutputType[P]>
        }
      >
    >


  export type SalesOrderLineSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    itemId?: boolean
    itemName?: boolean
    measureUnit?: boolean
    quantity?: boolean
    unitPrice?: boolean
    isGift?: boolean
    order?: boolean | SalesOrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["salesOrderLine"]>

  export type SalesOrderLineSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    itemId?: boolean
    itemName?: boolean
    measureUnit?: boolean
    quantity?: boolean
    unitPrice?: boolean
    isGift?: boolean
    order?: boolean | SalesOrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["salesOrderLine"]>

  export type SalesOrderLineSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    itemId?: boolean
    itemName?: boolean
    measureUnit?: boolean
    quantity?: boolean
    unitPrice?: boolean
    isGift?: boolean
    order?: boolean | SalesOrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["salesOrderLine"]>

  export type SalesOrderLineSelectScalar = {
    id?: boolean
    orderId?: boolean
    itemId?: boolean
    itemName?: boolean
    measureUnit?: boolean
    quantity?: boolean
    unitPrice?: boolean
    isGift?: boolean
  }

  export type SalesOrderLineOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orderId" | "itemId" | "itemName" | "measureUnit" | "quantity" | "unitPrice" | "isGift", ExtArgs["result"]["salesOrderLine"]>
  export type SalesOrderLineInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | SalesOrderDefaultArgs<ExtArgs>
  }
  export type SalesOrderLineIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | SalesOrderDefaultArgs<ExtArgs>
  }
  export type SalesOrderLineIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | SalesOrderDefaultArgs<ExtArgs>
  }

  export type $SalesOrderLinePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SalesOrderLine"
    objects: {
      order: Prisma.$SalesOrderPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orderId: string
      itemId: string
      itemName: string
      measureUnit: string
      quantity: Prisma.Decimal
      unitPrice: Prisma.Decimal
      isGift: boolean
    }, ExtArgs["result"]["salesOrderLine"]>
    composites: {}
  }

  type SalesOrderLineGetPayload<S extends boolean | null | undefined | SalesOrderLineDefaultArgs> = $Result.GetResult<Prisma.$SalesOrderLinePayload, S>

  type SalesOrderLineCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SalesOrderLineFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SalesOrderLineCountAggregateInputType | true
    }

  export interface SalesOrderLineDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SalesOrderLine'], meta: { name: 'SalesOrderLine' } }
    /**
     * Find zero or one SalesOrderLine that matches the filter.
     * @param {SalesOrderLineFindUniqueArgs} args - Arguments to find a SalesOrderLine
     * @example
     * // Get one SalesOrderLine
     * const salesOrderLine = await prisma.salesOrderLine.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SalesOrderLineFindUniqueArgs>(args: SelectSubset<T, SalesOrderLineFindUniqueArgs<ExtArgs>>): Prisma__SalesOrderLineClient<$Result.GetResult<Prisma.$SalesOrderLinePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SalesOrderLine that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SalesOrderLineFindUniqueOrThrowArgs} args - Arguments to find a SalesOrderLine
     * @example
     * // Get one SalesOrderLine
     * const salesOrderLine = await prisma.salesOrderLine.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SalesOrderLineFindUniqueOrThrowArgs>(args: SelectSubset<T, SalesOrderLineFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SalesOrderLineClient<$Result.GetResult<Prisma.$SalesOrderLinePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SalesOrderLine that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesOrderLineFindFirstArgs} args - Arguments to find a SalesOrderLine
     * @example
     * // Get one SalesOrderLine
     * const salesOrderLine = await prisma.salesOrderLine.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SalesOrderLineFindFirstArgs>(args?: SelectSubset<T, SalesOrderLineFindFirstArgs<ExtArgs>>): Prisma__SalesOrderLineClient<$Result.GetResult<Prisma.$SalesOrderLinePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SalesOrderLine that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesOrderLineFindFirstOrThrowArgs} args - Arguments to find a SalesOrderLine
     * @example
     * // Get one SalesOrderLine
     * const salesOrderLine = await prisma.salesOrderLine.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SalesOrderLineFindFirstOrThrowArgs>(args?: SelectSubset<T, SalesOrderLineFindFirstOrThrowArgs<ExtArgs>>): Prisma__SalesOrderLineClient<$Result.GetResult<Prisma.$SalesOrderLinePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SalesOrderLines that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesOrderLineFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SalesOrderLines
     * const salesOrderLines = await prisma.salesOrderLine.findMany()
     * 
     * // Get first 10 SalesOrderLines
     * const salesOrderLines = await prisma.salesOrderLine.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const salesOrderLineWithIdOnly = await prisma.salesOrderLine.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SalesOrderLineFindManyArgs>(args?: SelectSubset<T, SalesOrderLineFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalesOrderLinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SalesOrderLine.
     * @param {SalesOrderLineCreateArgs} args - Arguments to create a SalesOrderLine.
     * @example
     * // Create one SalesOrderLine
     * const SalesOrderLine = await prisma.salesOrderLine.create({
     *   data: {
     *     // ... data to create a SalesOrderLine
     *   }
     * })
     * 
     */
    create<T extends SalesOrderLineCreateArgs>(args: SelectSubset<T, SalesOrderLineCreateArgs<ExtArgs>>): Prisma__SalesOrderLineClient<$Result.GetResult<Prisma.$SalesOrderLinePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SalesOrderLines.
     * @param {SalesOrderLineCreateManyArgs} args - Arguments to create many SalesOrderLines.
     * @example
     * // Create many SalesOrderLines
     * const salesOrderLine = await prisma.salesOrderLine.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SalesOrderLineCreateManyArgs>(args?: SelectSubset<T, SalesOrderLineCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SalesOrderLines and returns the data saved in the database.
     * @param {SalesOrderLineCreateManyAndReturnArgs} args - Arguments to create many SalesOrderLines.
     * @example
     * // Create many SalesOrderLines
     * const salesOrderLine = await prisma.salesOrderLine.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SalesOrderLines and only return the `id`
     * const salesOrderLineWithIdOnly = await prisma.salesOrderLine.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SalesOrderLineCreateManyAndReturnArgs>(args?: SelectSubset<T, SalesOrderLineCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalesOrderLinePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SalesOrderLine.
     * @param {SalesOrderLineDeleteArgs} args - Arguments to delete one SalesOrderLine.
     * @example
     * // Delete one SalesOrderLine
     * const SalesOrderLine = await prisma.salesOrderLine.delete({
     *   where: {
     *     // ... filter to delete one SalesOrderLine
     *   }
     * })
     * 
     */
    delete<T extends SalesOrderLineDeleteArgs>(args: SelectSubset<T, SalesOrderLineDeleteArgs<ExtArgs>>): Prisma__SalesOrderLineClient<$Result.GetResult<Prisma.$SalesOrderLinePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SalesOrderLine.
     * @param {SalesOrderLineUpdateArgs} args - Arguments to update one SalesOrderLine.
     * @example
     * // Update one SalesOrderLine
     * const salesOrderLine = await prisma.salesOrderLine.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SalesOrderLineUpdateArgs>(args: SelectSubset<T, SalesOrderLineUpdateArgs<ExtArgs>>): Prisma__SalesOrderLineClient<$Result.GetResult<Prisma.$SalesOrderLinePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SalesOrderLines.
     * @param {SalesOrderLineDeleteManyArgs} args - Arguments to filter SalesOrderLines to delete.
     * @example
     * // Delete a few SalesOrderLines
     * const { count } = await prisma.salesOrderLine.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SalesOrderLineDeleteManyArgs>(args?: SelectSubset<T, SalesOrderLineDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SalesOrderLines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesOrderLineUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SalesOrderLines
     * const salesOrderLine = await prisma.salesOrderLine.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SalesOrderLineUpdateManyArgs>(args: SelectSubset<T, SalesOrderLineUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SalesOrderLines and returns the data updated in the database.
     * @param {SalesOrderLineUpdateManyAndReturnArgs} args - Arguments to update many SalesOrderLines.
     * @example
     * // Update many SalesOrderLines
     * const salesOrderLine = await prisma.salesOrderLine.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SalesOrderLines and only return the `id`
     * const salesOrderLineWithIdOnly = await prisma.salesOrderLine.updateManyAndReturn({
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
    updateManyAndReturn<T extends SalesOrderLineUpdateManyAndReturnArgs>(args: SelectSubset<T, SalesOrderLineUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalesOrderLinePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SalesOrderLine.
     * @param {SalesOrderLineUpsertArgs} args - Arguments to update or create a SalesOrderLine.
     * @example
     * // Update or create a SalesOrderLine
     * const salesOrderLine = await prisma.salesOrderLine.upsert({
     *   create: {
     *     // ... data to create a SalesOrderLine
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SalesOrderLine we want to update
     *   }
     * })
     */
    upsert<T extends SalesOrderLineUpsertArgs>(args: SelectSubset<T, SalesOrderLineUpsertArgs<ExtArgs>>): Prisma__SalesOrderLineClient<$Result.GetResult<Prisma.$SalesOrderLinePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SalesOrderLines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesOrderLineCountArgs} args - Arguments to filter SalesOrderLines to count.
     * @example
     * // Count the number of SalesOrderLines
     * const count = await prisma.salesOrderLine.count({
     *   where: {
     *     // ... the filter for the SalesOrderLines we want to count
     *   }
     * })
    **/
    count<T extends SalesOrderLineCountArgs>(
      args?: Subset<T, SalesOrderLineCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SalesOrderLineCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SalesOrderLine.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesOrderLineAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SalesOrderLineAggregateArgs>(args: Subset<T, SalesOrderLineAggregateArgs>): Prisma.PrismaPromise<GetSalesOrderLineAggregateType<T>>

    /**
     * Group by SalesOrderLine.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesOrderLineGroupByArgs} args - Group by arguments.
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
      T extends SalesOrderLineGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SalesOrderLineGroupByArgs['orderBy'] }
        : { orderBy?: SalesOrderLineGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SalesOrderLineGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSalesOrderLineGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SalesOrderLine model
   */
  readonly fields: SalesOrderLineFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SalesOrderLine.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SalesOrderLineClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    order<T extends SalesOrderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SalesOrderDefaultArgs<ExtArgs>>): Prisma__SalesOrderClient<$Result.GetResult<Prisma.$SalesOrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the SalesOrderLine model
   */
  interface SalesOrderLineFieldRefs {
    readonly id: FieldRef<"SalesOrderLine", 'String'>
    readonly orderId: FieldRef<"SalesOrderLine", 'String'>
    readonly itemId: FieldRef<"SalesOrderLine", 'String'>
    readonly itemName: FieldRef<"SalesOrderLine", 'String'>
    readonly measureUnit: FieldRef<"SalesOrderLine", 'String'>
    readonly quantity: FieldRef<"SalesOrderLine", 'Decimal'>
    readonly unitPrice: FieldRef<"SalesOrderLine", 'Decimal'>
    readonly isGift: FieldRef<"SalesOrderLine", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * SalesOrderLine findUnique
   */
  export type SalesOrderLineFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesOrderLine
     */
    select?: SalesOrderLineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalesOrderLine
     */
    omit?: SalesOrderLineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesOrderLineInclude<ExtArgs> | null
    /**
     * Filter, which SalesOrderLine to fetch.
     */
    where: SalesOrderLineWhereUniqueInput
  }

  /**
   * SalesOrderLine findUniqueOrThrow
   */
  export type SalesOrderLineFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesOrderLine
     */
    select?: SalesOrderLineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalesOrderLine
     */
    omit?: SalesOrderLineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesOrderLineInclude<ExtArgs> | null
    /**
     * Filter, which SalesOrderLine to fetch.
     */
    where: SalesOrderLineWhereUniqueInput
  }

  /**
   * SalesOrderLine findFirst
   */
  export type SalesOrderLineFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesOrderLine
     */
    select?: SalesOrderLineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalesOrderLine
     */
    omit?: SalesOrderLineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesOrderLineInclude<ExtArgs> | null
    /**
     * Filter, which SalesOrderLine to fetch.
     */
    where?: SalesOrderLineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SalesOrderLines to fetch.
     */
    orderBy?: SalesOrderLineOrderByWithRelationInput | SalesOrderLineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SalesOrderLines.
     */
    cursor?: SalesOrderLineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SalesOrderLines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SalesOrderLines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SalesOrderLines.
     */
    distinct?: SalesOrderLineScalarFieldEnum | SalesOrderLineScalarFieldEnum[]
  }

  /**
   * SalesOrderLine findFirstOrThrow
   */
  export type SalesOrderLineFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesOrderLine
     */
    select?: SalesOrderLineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalesOrderLine
     */
    omit?: SalesOrderLineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesOrderLineInclude<ExtArgs> | null
    /**
     * Filter, which SalesOrderLine to fetch.
     */
    where?: SalesOrderLineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SalesOrderLines to fetch.
     */
    orderBy?: SalesOrderLineOrderByWithRelationInput | SalesOrderLineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SalesOrderLines.
     */
    cursor?: SalesOrderLineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SalesOrderLines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SalesOrderLines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SalesOrderLines.
     */
    distinct?: SalesOrderLineScalarFieldEnum | SalesOrderLineScalarFieldEnum[]
  }

  /**
   * SalesOrderLine findMany
   */
  export type SalesOrderLineFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesOrderLine
     */
    select?: SalesOrderLineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalesOrderLine
     */
    omit?: SalesOrderLineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesOrderLineInclude<ExtArgs> | null
    /**
     * Filter, which SalesOrderLines to fetch.
     */
    where?: SalesOrderLineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SalesOrderLines to fetch.
     */
    orderBy?: SalesOrderLineOrderByWithRelationInput | SalesOrderLineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SalesOrderLines.
     */
    cursor?: SalesOrderLineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SalesOrderLines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SalesOrderLines.
     */
    skip?: number
    distinct?: SalesOrderLineScalarFieldEnum | SalesOrderLineScalarFieldEnum[]
  }

  /**
   * SalesOrderLine create
   */
  export type SalesOrderLineCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesOrderLine
     */
    select?: SalesOrderLineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalesOrderLine
     */
    omit?: SalesOrderLineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesOrderLineInclude<ExtArgs> | null
    /**
     * The data needed to create a SalesOrderLine.
     */
    data: XOR<SalesOrderLineCreateInput, SalesOrderLineUncheckedCreateInput>
  }

  /**
   * SalesOrderLine createMany
   */
  export type SalesOrderLineCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SalesOrderLines.
     */
    data: SalesOrderLineCreateManyInput | SalesOrderLineCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SalesOrderLine createManyAndReturn
   */
  export type SalesOrderLineCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesOrderLine
     */
    select?: SalesOrderLineSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SalesOrderLine
     */
    omit?: SalesOrderLineOmit<ExtArgs> | null
    /**
     * The data used to create many SalesOrderLines.
     */
    data: SalesOrderLineCreateManyInput | SalesOrderLineCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesOrderLineIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SalesOrderLine update
   */
  export type SalesOrderLineUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesOrderLine
     */
    select?: SalesOrderLineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalesOrderLine
     */
    omit?: SalesOrderLineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesOrderLineInclude<ExtArgs> | null
    /**
     * The data needed to update a SalesOrderLine.
     */
    data: XOR<SalesOrderLineUpdateInput, SalesOrderLineUncheckedUpdateInput>
    /**
     * Choose, which SalesOrderLine to update.
     */
    where: SalesOrderLineWhereUniqueInput
  }

  /**
   * SalesOrderLine updateMany
   */
  export type SalesOrderLineUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SalesOrderLines.
     */
    data: XOR<SalesOrderLineUpdateManyMutationInput, SalesOrderLineUncheckedUpdateManyInput>
    /**
     * Filter which SalesOrderLines to update
     */
    where?: SalesOrderLineWhereInput
    /**
     * Limit how many SalesOrderLines to update.
     */
    limit?: number
  }

  /**
   * SalesOrderLine updateManyAndReturn
   */
  export type SalesOrderLineUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesOrderLine
     */
    select?: SalesOrderLineSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SalesOrderLine
     */
    omit?: SalesOrderLineOmit<ExtArgs> | null
    /**
     * The data used to update SalesOrderLines.
     */
    data: XOR<SalesOrderLineUpdateManyMutationInput, SalesOrderLineUncheckedUpdateManyInput>
    /**
     * Filter which SalesOrderLines to update
     */
    where?: SalesOrderLineWhereInput
    /**
     * Limit how many SalesOrderLines to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesOrderLineIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SalesOrderLine upsert
   */
  export type SalesOrderLineUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesOrderLine
     */
    select?: SalesOrderLineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalesOrderLine
     */
    omit?: SalesOrderLineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesOrderLineInclude<ExtArgs> | null
    /**
     * The filter to search for the SalesOrderLine to update in case it exists.
     */
    where: SalesOrderLineWhereUniqueInput
    /**
     * In case the SalesOrderLine found by the `where` argument doesn't exist, create a new SalesOrderLine with this data.
     */
    create: XOR<SalesOrderLineCreateInput, SalesOrderLineUncheckedCreateInput>
    /**
     * In case the SalesOrderLine was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SalesOrderLineUpdateInput, SalesOrderLineUncheckedUpdateInput>
  }

  /**
   * SalesOrderLine delete
   */
  export type SalesOrderLineDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesOrderLine
     */
    select?: SalesOrderLineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalesOrderLine
     */
    omit?: SalesOrderLineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesOrderLineInclude<ExtArgs> | null
    /**
     * Filter which SalesOrderLine to delete.
     */
    where: SalesOrderLineWhereUniqueInput
  }

  /**
   * SalesOrderLine deleteMany
   */
  export type SalesOrderLineDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SalesOrderLines to delete
     */
    where?: SalesOrderLineWhereInput
    /**
     * Limit how many SalesOrderLines to delete.
     */
    limit?: number
  }

  /**
   * SalesOrderLine without action
   */
  export type SalesOrderLineDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesOrderLine
     */
    select?: SalesOrderLineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalesOrderLine
     */
    omit?: SalesOrderLineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesOrderLineInclude<ExtArgs> | null
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


  export const SalesOrderScalarFieldEnum: {
    id: 'id',
    customerName: 'customerName',
    customerPhone: 'customerPhone',
    customerContact: 'customerContact',
    status: 'status',
    notes: 'notes',
    shippedAt: 'shippedAt',
    invoiceNumber: 'invoiceNumber',
    paymentStatus: 'paymentStatus',
    paidAt: 'paidAt',
    discountCode: 'discountCode',
    discountAmount: 'discountAmount',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SalesOrderScalarFieldEnum = (typeof SalesOrderScalarFieldEnum)[keyof typeof SalesOrderScalarFieldEnum]


  export const DiscountCodeScalarFieldEnum: {
    id: 'id',
    code: 'code',
    type: 'type',
    value: 'value',
    maxUses: 'maxUses',
    usedCount: 'usedCount',
    expiresAt: 'expiresAt',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DiscountCodeScalarFieldEnum = (typeof DiscountCodeScalarFieldEnum)[keyof typeof DiscountCodeScalarFieldEnum]


  export const SalesOrderLineScalarFieldEnum: {
    id: 'id',
    orderId: 'orderId',
    itemId: 'itemId',
    itemName: 'itemName',
    measureUnit: 'measureUnit',
    quantity: 'quantity',
    unitPrice: 'unitPrice',
    isGift: 'isGift'
  };

  export type SalesOrderLineScalarFieldEnum = (typeof SalesOrderLineScalarFieldEnum)[keyof typeof SalesOrderLineScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


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


  export type SalesOrderWhereInput = {
    AND?: SalesOrderWhereInput | SalesOrderWhereInput[]
    OR?: SalesOrderWhereInput[]
    NOT?: SalesOrderWhereInput | SalesOrderWhereInput[]
    id?: StringFilter<"SalesOrder"> | string
    customerName?: StringFilter<"SalesOrder"> | string
    customerPhone?: StringNullableFilter<"SalesOrder"> | string | null
    customerContact?: StringNullableFilter<"SalesOrder"> | string | null
    status?: StringFilter<"SalesOrder"> | string
    notes?: StringNullableFilter<"SalesOrder"> | string | null
    shippedAt?: DateTimeNullableFilter<"SalesOrder"> | Date | string | null
    invoiceNumber?: StringNullableFilter<"SalesOrder"> | string | null
    paymentStatus?: StringNullableFilter<"SalesOrder"> | string | null
    paidAt?: DateTimeNullableFilter<"SalesOrder"> | Date | string | null
    discountCode?: StringNullableFilter<"SalesOrder"> | string | null
    discountAmount?: DecimalFilter<"SalesOrder"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"SalesOrder"> | Date | string
    updatedAt?: DateTimeFilter<"SalesOrder"> | Date | string
    lines?: SalesOrderLineListRelationFilter
  }

  export type SalesOrderOrderByWithRelationInput = {
    id?: SortOrder
    customerName?: SortOrder
    customerPhone?: SortOrderInput | SortOrder
    customerContact?: SortOrderInput | SortOrder
    status?: SortOrder
    notes?: SortOrderInput | SortOrder
    shippedAt?: SortOrderInput | SortOrder
    invoiceNumber?: SortOrderInput | SortOrder
    paymentStatus?: SortOrderInput | SortOrder
    paidAt?: SortOrderInput | SortOrder
    discountCode?: SortOrderInput | SortOrder
    discountAmount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lines?: SalesOrderLineOrderByRelationAggregateInput
  }

  export type SalesOrderWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    invoiceNumber?: string
    AND?: SalesOrderWhereInput | SalesOrderWhereInput[]
    OR?: SalesOrderWhereInput[]
    NOT?: SalesOrderWhereInput | SalesOrderWhereInput[]
    customerName?: StringFilter<"SalesOrder"> | string
    customerPhone?: StringNullableFilter<"SalesOrder"> | string | null
    customerContact?: StringNullableFilter<"SalesOrder"> | string | null
    status?: StringFilter<"SalesOrder"> | string
    notes?: StringNullableFilter<"SalesOrder"> | string | null
    shippedAt?: DateTimeNullableFilter<"SalesOrder"> | Date | string | null
    paymentStatus?: StringNullableFilter<"SalesOrder"> | string | null
    paidAt?: DateTimeNullableFilter<"SalesOrder"> | Date | string | null
    discountCode?: StringNullableFilter<"SalesOrder"> | string | null
    discountAmount?: DecimalFilter<"SalesOrder"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"SalesOrder"> | Date | string
    updatedAt?: DateTimeFilter<"SalesOrder"> | Date | string
    lines?: SalesOrderLineListRelationFilter
  }, "id" | "invoiceNumber">

  export type SalesOrderOrderByWithAggregationInput = {
    id?: SortOrder
    customerName?: SortOrder
    customerPhone?: SortOrderInput | SortOrder
    customerContact?: SortOrderInput | SortOrder
    status?: SortOrder
    notes?: SortOrderInput | SortOrder
    shippedAt?: SortOrderInput | SortOrder
    invoiceNumber?: SortOrderInput | SortOrder
    paymentStatus?: SortOrderInput | SortOrder
    paidAt?: SortOrderInput | SortOrder
    discountCode?: SortOrderInput | SortOrder
    discountAmount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SalesOrderCountOrderByAggregateInput
    _avg?: SalesOrderAvgOrderByAggregateInput
    _max?: SalesOrderMaxOrderByAggregateInput
    _min?: SalesOrderMinOrderByAggregateInput
    _sum?: SalesOrderSumOrderByAggregateInput
  }

  export type SalesOrderScalarWhereWithAggregatesInput = {
    AND?: SalesOrderScalarWhereWithAggregatesInput | SalesOrderScalarWhereWithAggregatesInput[]
    OR?: SalesOrderScalarWhereWithAggregatesInput[]
    NOT?: SalesOrderScalarWhereWithAggregatesInput | SalesOrderScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SalesOrder"> | string
    customerName?: StringWithAggregatesFilter<"SalesOrder"> | string
    customerPhone?: StringNullableWithAggregatesFilter<"SalesOrder"> | string | null
    customerContact?: StringNullableWithAggregatesFilter<"SalesOrder"> | string | null
    status?: StringWithAggregatesFilter<"SalesOrder"> | string
    notes?: StringNullableWithAggregatesFilter<"SalesOrder"> | string | null
    shippedAt?: DateTimeNullableWithAggregatesFilter<"SalesOrder"> | Date | string | null
    invoiceNumber?: StringNullableWithAggregatesFilter<"SalesOrder"> | string | null
    paymentStatus?: StringNullableWithAggregatesFilter<"SalesOrder"> | string | null
    paidAt?: DateTimeNullableWithAggregatesFilter<"SalesOrder"> | Date | string | null
    discountCode?: StringNullableWithAggregatesFilter<"SalesOrder"> | string | null
    discountAmount?: DecimalWithAggregatesFilter<"SalesOrder"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeWithAggregatesFilter<"SalesOrder"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SalesOrder"> | Date | string
  }

  export type DiscountCodeWhereInput = {
    AND?: DiscountCodeWhereInput | DiscountCodeWhereInput[]
    OR?: DiscountCodeWhereInput[]
    NOT?: DiscountCodeWhereInput | DiscountCodeWhereInput[]
    id?: StringFilter<"DiscountCode"> | string
    code?: StringFilter<"DiscountCode"> | string
    type?: StringFilter<"DiscountCode"> | string
    value?: DecimalFilter<"DiscountCode"> | Decimal | DecimalJsLike | number | string
    maxUses?: IntNullableFilter<"DiscountCode"> | number | null
    usedCount?: IntFilter<"DiscountCode"> | number
    expiresAt?: DateTimeNullableFilter<"DiscountCode"> | Date | string | null
    isActive?: BoolFilter<"DiscountCode"> | boolean
    createdAt?: DateTimeFilter<"DiscountCode"> | Date | string
    updatedAt?: DateTimeFilter<"DiscountCode"> | Date | string
  }

  export type DiscountCodeOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    type?: SortOrder
    value?: SortOrder
    maxUses?: SortOrderInput | SortOrder
    usedCount?: SortOrder
    expiresAt?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DiscountCodeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    code?: string
    AND?: DiscountCodeWhereInput | DiscountCodeWhereInput[]
    OR?: DiscountCodeWhereInput[]
    NOT?: DiscountCodeWhereInput | DiscountCodeWhereInput[]
    type?: StringFilter<"DiscountCode"> | string
    value?: DecimalFilter<"DiscountCode"> | Decimal | DecimalJsLike | number | string
    maxUses?: IntNullableFilter<"DiscountCode"> | number | null
    usedCount?: IntFilter<"DiscountCode"> | number
    expiresAt?: DateTimeNullableFilter<"DiscountCode"> | Date | string | null
    isActive?: BoolFilter<"DiscountCode"> | boolean
    createdAt?: DateTimeFilter<"DiscountCode"> | Date | string
    updatedAt?: DateTimeFilter<"DiscountCode"> | Date | string
  }, "id" | "code">

  export type DiscountCodeOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    type?: SortOrder
    value?: SortOrder
    maxUses?: SortOrderInput | SortOrder
    usedCount?: SortOrder
    expiresAt?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DiscountCodeCountOrderByAggregateInput
    _avg?: DiscountCodeAvgOrderByAggregateInput
    _max?: DiscountCodeMaxOrderByAggregateInput
    _min?: DiscountCodeMinOrderByAggregateInput
    _sum?: DiscountCodeSumOrderByAggregateInput
  }

  export type DiscountCodeScalarWhereWithAggregatesInput = {
    AND?: DiscountCodeScalarWhereWithAggregatesInput | DiscountCodeScalarWhereWithAggregatesInput[]
    OR?: DiscountCodeScalarWhereWithAggregatesInput[]
    NOT?: DiscountCodeScalarWhereWithAggregatesInput | DiscountCodeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DiscountCode"> | string
    code?: StringWithAggregatesFilter<"DiscountCode"> | string
    type?: StringWithAggregatesFilter<"DiscountCode"> | string
    value?: DecimalWithAggregatesFilter<"DiscountCode"> | Decimal | DecimalJsLike | number | string
    maxUses?: IntNullableWithAggregatesFilter<"DiscountCode"> | number | null
    usedCount?: IntWithAggregatesFilter<"DiscountCode"> | number
    expiresAt?: DateTimeNullableWithAggregatesFilter<"DiscountCode"> | Date | string | null
    isActive?: BoolWithAggregatesFilter<"DiscountCode"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"DiscountCode"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"DiscountCode"> | Date | string
  }

  export type SalesOrderLineWhereInput = {
    AND?: SalesOrderLineWhereInput | SalesOrderLineWhereInput[]
    OR?: SalesOrderLineWhereInput[]
    NOT?: SalesOrderLineWhereInput | SalesOrderLineWhereInput[]
    id?: StringFilter<"SalesOrderLine"> | string
    orderId?: StringFilter<"SalesOrderLine"> | string
    itemId?: StringFilter<"SalesOrderLine"> | string
    itemName?: StringFilter<"SalesOrderLine"> | string
    measureUnit?: StringFilter<"SalesOrderLine"> | string
    quantity?: DecimalFilter<"SalesOrderLine"> | Decimal | DecimalJsLike | number | string
    unitPrice?: DecimalFilter<"SalesOrderLine"> | Decimal | DecimalJsLike | number | string
    isGift?: BoolFilter<"SalesOrderLine"> | boolean
    order?: XOR<SalesOrderScalarRelationFilter, SalesOrderWhereInput>
  }

  export type SalesOrderLineOrderByWithRelationInput = {
    id?: SortOrder
    orderId?: SortOrder
    itemId?: SortOrder
    itemName?: SortOrder
    measureUnit?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    isGift?: SortOrder
    order?: SalesOrderOrderByWithRelationInput
  }

  export type SalesOrderLineWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    orderId_itemId?: SalesOrderLineOrderIdItemIdCompoundUniqueInput
    AND?: SalesOrderLineWhereInput | SalesOrderLineWhereInput[]
    OR?: SalesOrderLineWhereInput[]
    NOT?: SalesOrderLineWhereInput | SalesOrderLineWhereInput[]
    orderId?: StringFilter<"SalesOrderLine"> | string
    itemId?: StringFilter<"SalesOrderLine"> | string
    itemName?: StringFilter<"SalesOrderLine"> | string
    measureUnit?: StringFilter<"SalesOrderLine"> | string
    quantity?: DecimalFilter<"SalesOrderLine"> | Decimal | DecimalJsLike | number | string
    unitPrice?: DecimalFilter<"SalesOrderLine"> | Decimal | DecimalJsLike | number | string
    isGift?: BoolFilter<"SalesOrderLine"> | boolean
    order?: XOR<SalesOrderScalarRelationFilter, SalesOrderWhereInput>
  }, "id" | "orderId_itemId">

  export type SalesOrderLineOrderByWithAggregationInput = {
    id?: SortOrder
    orderId?: SortOrder
    itemId?: SortOrder
    itemName?: SortOrder
    measureUnit?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    isGift?: SortOrder
    _count?: SalesOrderLineCountOrderByAggregateInput
    _avg?: SalesOrderLineAvgOrderByAggregateInput
    _max?: SalesOrderLineMaxOrderByAggregateInput
    _min?: SalesOrderLineMinOrderByAggregateInput
    _sum?: SalesOrderLineSumOrderByAggregateInput
  }

  export type SalesOrderLineScalarWhereWithAggregatesInput = {
    AND?: SalesOrderLineScalarWhereWithAggregatesInput | SalesOrderLineScalarWhereWithAggregatesInput[]
    OR?: SalesOrderLineScalarWhereWithAggregatesInput[]
    NOT?: SalesOrderLineScalarWhereWithAggregatesInput | SalesOrderLineScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SalesOrderLine"> | string
    orderId?: StringWithAggregatesFilter<"SalesOrderLine"> | string
    itemId?: StringWithAggregatesFilter<"SalesOrderLine"> | string
    itemName?: StringWithAggregatesFilter<"SalesOrderLine"> | string
    measureUnit?: StringWithAggregatesFilter<"SalesOrderLine"> | string
    quantity?: DecimalWithAggregatesFilter<"SalesOrderLine"> | Decimal | DecimalJsLike | number | string
    unitPrice?: DecimalWithAggregatesFilter<"SalesOrderLine"> | Decimal | DecimalJsLike | number | string
    isGift?: BoolWithAggregatesFilter<"SalesOrderLine"> | boolean
  }

  export type SalesOrderCreateInput = {
    id: string
    customerName: string
    customerPhone?: string | null
    customerContact?: string | null
    status?: string
    notes?: string | null
    shippedAt?: Date | string | null
    invoiceNumber?: string | null
    paymentStatus?: string | null
    paidAt?: Date | string | null
    discountCode?: string | null
    discountAmount?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    lines?: SalesOrderLineCreateNestedManyWithoutOrderInput
  }

  export type SalesOrderUncheckedCreateInput = {
    id: string
    customerName: string
    customerPhone?: string | null
    customerContact?: string | null
    status?: string
    notes?: string | null
    shippedAt?: Date | string | null
    invoiceNumber?: string | null
    paymentStatus?: string | null
    paidAt?: Date | string | null
    discountCode?: string | null
    discountAmount?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    lines?: SalesOrderLineUncheckedCreateNestedManyWithoutOrderInput
  }

  export type SalesOrderUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    customerPhone?: NullableStringFieldUpdateOperationsInput | string | null
    customerContact?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    shippedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    invoiceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    paymentStatus?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    discountCode?: NullableStringFieldUpdateOperationsInput | string | null
    discountAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lines?: SalesOrderLineUpdateManyWithoutOrderNestedInput
  }

  export type SalesOrderUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    customerPhone?: NullableStringFieldUpdateOperationsInput | string | null
    customerContact?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    shippedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    invoiceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    paymentStatus?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    discountCode?: NullableStringFieldUpdateOperationsInput | string | null
    discountAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lines?: SalesOrderLineUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type SalesOrderCreateManyInput = {
    id: string
    customerName: string
    customerPhone?: string | null
    customerContact?: string | null
    status?: string
    notes?: string | null
    shippedAt?: Date | string | null
    invoiceNumber?: string | null
    paymentStatus?: string | null
    paidAt?: Date | string | null
    discountCode?: string | null
    discountAmount?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SalesOrderUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    customerPhone?: NullableStringFieldUpdateOperationsInput | string | null
    customerContact?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    shippedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    invoiceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    paymentStatus?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    discountCode?: NullableStringFieldUpdateOperationsInput | string | null
    discountAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SalesOrderUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    customerPhone?: NullableStringFieldUpdateOperationsInput | string | null
    customerContact?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    shippedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    invoiceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    paymentStatus?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    discountCode?: NullableStringFieldUpdateOperationsInput | string | null
    discountAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DiscountCodeCreateInput = {
    id: string
    code: string
    type: string
    value: Decimal | DecimalJsLike | number | string
    maxUses?: number | null
    usedCount?: number
    expiresAt?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DiscountCodeUncheckedCreateInput = {
    id: string
    code: string
    type: string
    value: Decimal | DecimalJsLike | number | string
    maxUses?: number | null
    usedCount?: number
    expiresAt?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DiscountCodeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    maxUses?: NullableIntFieldUpdateOperationsInput | number | null
    usedCount?: IntFieldUpdateOperationsInput | number
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DiscountCodeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    maxUses?: NullableIntFieldUpdateOperationsInput | number | null
    usedCount?: IntFieldUpdateOperationsInput | number
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DiscountCodeCreateManyInput = {
    id: string
    code: string
    type: string
    value: Decimal | DecimalJsLike | number | string
    maxUses?: number | null
    usedCount?: number
    expiresAt?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DiscountCodeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    maxUses?: NullableIntFieldUpdateOperationsInput | number | null
    usedCount?: IntFieldUpdateOperationsInput | number
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DiscountCodeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    maxUses?: NullableIntFieldUpdateOperationsInput | number | null
    usedCount?: IntFieldUpdateOperationsInput | number
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SalesOrderLineCreateInput = {
    id: string
    itemId: string
    itemName: string
    measureUnit: string
    quantity: Decimal | DecimalJsLike | number | string
    unitPrice: Decimal | DecimalJsLike | number | string
    isGift?: boolean
    order: SalesOrderCreateNestedOneWithoutLinesInput
  }

  export type SalesOrderLineUncheckedCreateInput = {
    id: string
    orderId: string
    itemId: string
    itemName: string
    measureUnit: string
    quantity: Decimal | DecimalJsLike | number | string
    unitPrice: Decimal | DecimalJsLike | number | string
    isGift?: boolean
  }

  export type SalesOrderLineUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemId?: StringFieldUpdateOperationsInput | string
    itemName?: StringFieldUpdateOperationsInput | string
    measureUnit?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isGift?: BoolFieldUpdateOperationsInput | boolean
    order?: SalesOrderUpdateOneRequiredWithoutLinesNestedInput
  }

  export type SalesOrderLineUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    itemId?: StringFieldUpdateOperationsInput | string
    itemName?: StringFieldUpdateOperationsInput | string
    measureUnit?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isGift?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SalesOrderLineCreateManyInput = {
    id: string
    orderId: string
    itemId: string
    itemName: string
    measureUnit: string
    quantity: Decimal | DecimalJsLike | number | string
    unitPrice: Decimal | DecimalJsLike | number | string
    isGift?: boolean
  }

  export type SalesOrderLineUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemId?: StringFieldUpdateOperationsInput | string
    itemName?: StringFieldUpdateOperationsInput | string
    measureUnit?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isGift?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SalesOrderLineUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    itemId?: StringFieldUpdateOperationsInput | string
    itemName?: StringFieldUpdateOperationsInput | string
    measureUnit?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isGift?: BoolFieldUpdateOperationsInput | boolean
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

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
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

  export type SalesOrderLineListRelationFilter = {
    every?: SalesOrderLineWhereInput
    some?: SalesOrderLineWhereInput
    none?: SalesOrderLineWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SalesOrderLineOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SalesOrderCountOrderByAggregateInput = {
    id?: SortOrder
    customerName?: SortOrder
    customerPhone?: SortOrder
    customerContact?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    shippedAt?: SortOrder
    invoiceNumber?: SortOrder
    paymentStatus?: SortOrder
    paidAt?: SortOrder
    discountCode?: SortOrder
    discountAmount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SalesOrderAvgOrderByAggregateInput = {
    discountAmount?: SortOrder
  }

  export type SalesOrderMaxOrderByAggregateInput = {
    id?: SortOrder
    customerName?: SortOrder
    customerPhone?: SortOrder
    customerContact?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    shippedAt?: SortOrder
    invoiceNumber?: SortOrder
    paymentStatus?: SortOrder
    paidAt?: SortOrder
    discountCode?: SortOrder
    discountAmount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SalesOrderMinOrderByAggregateInput = {
    id?: SortOrder
    customerName?: SortOrder
    customerPhone?: SortOrder
    customerContact?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    shippedAt?: SortOrder
    invoiceNumber?: SortOrder
    paymentStatus?: SortOrder
    paidAt?: SortOrder
    discountCode?: SortOrder
    discountAmount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SalesOrderSumOrderByAggregateInput = {
    discountAmount?: SortOrder
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

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
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

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DiscountCodeCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    type?: SortOrder
    value?: SortOrder
    maxUses?: SortOrder
    usedCount?: SortOrder
    expiresAt?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DiscountCodeAvgOrderByAggregateInput = {
    value?: SortOrder
    maxUses?: SortOrder
    usedCount?: SortOrder
  }

  export type DiscountCodeMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    type?: SortOrder
    value?: SortOrder
    maxUses?: SortOrder
    usedCount?: SortOrder
    expiresAt?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DiscountCodeMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    type?: SortOrder
    value?: SortOrder
    maxUses?: SortOrder
    usedCount?: SortOrder
    expiresAt?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DiscountCodeSumOrderByAggregateInput = {
    value?: SortOrder
    maxUses?: SortOrder
    usedCount?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type SalesOrderScalarRelationFilter = {
    is?: SalesOrderWhereInput
    isNot?: SalesOrderWhereInput
  }

  export type SalesOrderLineOrderIdItemIdCompoundUniqueInput = {
    orderId: string
    itemId: string
  }

  export type SalesOrderLineCountOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    itemId?: SortOrder
    itemName?: SortOrder
    measureUnit?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    isGift?: SortOrder
  }

  export type SalesOrderLineAvgOrderByAggregateInput = {
    quantity?: SortOrder
    unitPrice?: SortOrder
  }

  export type SalesOrderLineMaxOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    itemId?: SortOrder
    itemName?: SortOrder
    measureUnit?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    isGift?: SortOrder
  }

  export type SalesOrderLineMinOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    itemId?: SortOrder
    itemName?: SortOrder
    measureUnit?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    isGift?: SortOrder
  }

  export type SalesOrderLineSumOrderByAggregateInput = {
    quantity?: SortOrder
    unitPrice?: SortOrder
  }

  export type SalesOrderLineCreateNestedManyWithoutOrderInput = {
    create?: XOR<SalesOrderLineCreateWithoutOrderInput, SalesOrderLineUncheckedCreateWithoutOrderInput> | SalesOrderLineCreateWithoutOrderInput[] | SalesOrderLineUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: SalesOrderLineCreateOrConnectWithoutOrderInput | SalesOrderLineCreateOrConnectWithoutOrderInput[]
    createMany?: SalesOrderLineCreateManyOrderInputEnvelope
    connect?: SalesOrderLineWhereUniqueInput | SalesOrderLineWhereUniqueInput[]
  }

  export type SalesOrderLineUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<SalesOrderLineCreateWithoutOrderInput, SalesOrderLineUncheckedCreateWithoutOrderInput> | SalesOrderLineCreateWithoutOrderInput[] | SalesOrderLineUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: SalesOrderLineCreateOrConnectWithoutOrderInput | SalesOrderLineCreateOrConnectWithoutOrderInput[]
    createMany?: SalesOrderLineCreateManyOrderInputEnvelope
    connect?: SalesOrderLineWhereUniqueInput | SalesOrderLineWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type SalesOrderLineUpdateManyWithoutOrderNestedInput = {
    create?: XOR<SalesOrderLineCreateWithoutOrderInput, SalesOrderLineUncheckedCreateWithoutOrderInput> | SalesOrderLineCreateWithoutOrderInput[] | SalesOrderLineUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: SalesOrderLineCreateOrConnectWithoutOrderInput | SalesOrderLineCreateOrConnectWithoutOrderInput[]
    upsert?: SalesOrderLineUpsertWithWhereUniqueWithoutOrderInput | SalesOrderLineUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: SalesOrderLineCreateManyOrderInputEnvelope
    set?: SalesOrderLineWhereUniqueInput | SalesOrderLineWhereUniqueInput[]
    disconnect?: SalesOrderLineWhereUniqueInput | SalesOrderLineWhereUniqueInput[]
    delete?: SalesOrderLineWhereUniqueInput | SalesOrderLineWhereUniqueInput[]
    connect?: SalesOrderLineWhereUniqueInput | SalesOrderLineWhereUniqueInput[]
    update?: SalesOrderLineUpdateWithWhereUniqueWithoutOrderInput | SalesOrderLineUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: SalesOrderLineUpdateManyWithWhereWithoutOrderInput | SalesOrderLineUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: SalesOrderLineScalarWhereInput | SalesOrderLineScalarWhereInput[]
  }

  export type SalesOrderLineUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<SalesOrderLineCreateWithoutOrderInput, SalesOrderLineUncheckedCreateWithoutOrderInput> | SalesOrderLineCreateWithoutOrderInput[] | SalesOrderLineUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: SalesOrderLineCreateOrConnectWithoutOrderInput | SalesOrderLineCreateOrConnectWithoutOrderInput[]
    upsert?: SalesOrderLineUpsertWithWhereUniqueWithoutOrderInput | SalesOrderLineUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: SalesOrderLineCreateManyOrderInputEnvelope
    set?: SalesOrderLineWhereUniqueInput | SalesOrderLineWhereUniqueInput[]
    disconnect?: SalesOrderLineWhereUniqueInput | SalesOrderLineWhereUniqueInput[]
    delete?: SalesOrderLineWhereUniqueInput | SalesOrderLineWhereUniqueInput[]
    connect?: SalesOrderLineWhereUniqueInput | SalesOrderLineWhereUniqueInput[]
    update?: SalesOrderLineUpdateWithWhereUniqueWithoutOrderInput | SalesOrderLineUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: SalesOrderLineUpdateManyWithWhereWithoutOrderInput | SalesOrderLineUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: SalesOrderLineScalarWhereInput | SalesOrderLineScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type SalesOrderCreateNestedOneWithoutLinesInput = {
    create?: XOR<SalesOrderCreateWithoutLinesInput, SalesOrderUncheckedCreateWithoutLinesInput>
    connectOrCreate?: SalesOrderCreateOrConnectWithoutLinesInput
    connect?: SalesOrderWhereUniqueInput
  }

  export type SalesOrderUpdateOneRequiredWithoutLinesNestedInput = {
    create?: XOR<SalesOrderCreateWithoutLinesInput, SalesOrderUncheckedCreateWithoutLinesInput>
    connectOrCreate?: SalesOrderCreateOrConnectWithoutLinesInput
    upsert?: SalesOrderUpsertWithoutLinesInput
    connect?: SalesOrderWhereUniqueInput
    update?: XOR<XOR<SalesOrderUpdateToOneWithWhereWithoutLinesInput, SalesOrderUpdateWithoutLinesInput>, SalesOrderUncheckedUpdateWithoutLinesInput>
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

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
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

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type SalesOrderLineCreateWithoutOrderInput = {
    id: string
    itemId: string
    itemName: string
    measureUnit: string
    quantity: Decimal | DecimalJsLike | number | string
    unitPrice: Decimal | DecimalJsLike | number | string
    isGift?: boolean
  }

  export type SalesOrderLineUncheckedCreateWithoutOrderInput = {
    id: string
    itemId: string
    itemName: string
    measureUnit: string
    quantity: Decimal | DecimalJsLike | number | string
    unitPrice: Decimal | DecimalJsLike | number | string
    isGift?: boolean
  }

  export type SalesOrderLineCreateOrConnectWithoutOrderInput = {
    where: SalesOrderLineWhereUniqueInput
    create: XOR<SalesOrderLineCreateWithoutOrderInput, SalesOrderLineUncheckedCreateWithoutOrderInput>
  }

  export type SalesOrderLineCreateManyOrderInputEnvelope = {
    data: SalesOrderLineCreateManyOrderInput | SalesOrderLineCreateManyOrderInput[]
    skipDuplicates?: boolean
  }

  export type SalesOrderLineUpsertWithWhereUniqueWithoutOrderInput = {
    where: SalesOrderLineWhereUniqueInput
    update: XOR<SalesOrderLineUpdateWithoutOrderInput, SalesOrderLineUncheckedUpdateWithoutOrderInput>
    create: XOR<SalesOrderLineCreateWithoutOrderInput, SalesOrderLineUncheckedCreateWithoutOrderInput>
  }

  export type SalesOrderLineUpdateWithWhereUniqueWithoutOrderInput = {
    where: SalesOrderLineWhereUniqueInput
    data: XOR<SalesOrderLineUpdateWithoutOrderInput, SalesOrderLineUncheckedUpdateWithoutOrderInput>
  }

  export type SalesOrderLineUpdateManyWithWhereWithoutOrderInput = {
    where: SalesOrderLineScalarWhereInput
    data: XOR<SalesOrderLineUpdateManyMutationInput, SalesOrderLineUncheckedUpdateManyWithoutOrderInput>
  }

  export type SalesOrderLineScalarWhereInput = {
    AND?: SalesOrderLineScalarWhereInput | SalesOrderLineScalarWhereInput[]
    OR?: SalesOrderLineScalarWhereInput[]
    NOT?: SalesOrderLineScalarWhereInput | SalesOrderLineScalarWhereInput[]
    id?: StringFilter<"SalesOrderLine"> | string
    orderId?: StringFilter<"SalesOrderLine"> | string
    itemId?: StringFilter<"SalesOrderLine"> | string
    itemName?: StringFilter<"SalesOrderLine"> | string
    measureUnit?: StringFilter<"SalesOrderLine"> | string
    quantity?: DecimalFilter<"SalesOrderLine"> | Decimal | DecimalJsLike | number | string
    unitPrice?: DecimalFilter<"SalesOrderLine"> | Decimal | DecimalJsLike | number | string
    isGift?: BoolFilter<"SalesOrderLine"> | boolean
  }

  export type SalesOrderCreateWithoutLinesInput = {
    id: string
    customerName: string
    customerPhone?: string | null
    customerContact?: string | null
    status?: string
    notes?: string | null
    shippedAt?: Date | string | null
    invoiceNumber?: string | null
    paymentStatus?: string | null
    paidAt?: Date | string | null
    discountCode?: string | null
    discountAmount?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SalesOrderUncheckedCreateWithoutLinesInput = {
    id: string
    customerName: string
    customerPhone?: string | null
    customerContact?: string | null
    status?: string
    notes?: string | null
    shippedAt?: Date | string | null
    invoiceNumber?: string | null
    paymentStatus?: string | null
    paidAt?: Date | string | null
    discountCode?: string | null
    discountAmount?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SalesOrderCreateOrConnectWithoutLinesInput = {
    where: SalesOrderWhereUniqueInput
    create: XOR<SalesOrderCreateWithoutLinesInput, SalesOrderUncheckedCreateWithoutLinesInput>
  }

  export type SalesOrderUpsertWithoutLinesInput = {
    update: XOR<SalesOrderUpdateWithoutLinesInput, SalesOrderUncheckedUpdateWithoutLinesInput>
    create: XOR<SalesOrderCreateWithoutLinesInput, SalesOrderUncheckedCreateWithoutLinesInput>
    where?: SalesOrderWhereInput
  }

  export type SalesOrderUpdateToOneWithWhereWithoutLinesInput = {
    where?: SalesOrderWhereInput
    data: XOR<SalesOrderUpdateWithoutLinesInput, SalesOrderUncheckedUpdateWithoutLinesInput>
  }

  export type SalesOrderUpdateWithoutLinesInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    customerPhone?: NullableStringFieldUpdateOperationsInput | string | null
    customerContact?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    shippedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    invoiceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    paymentStatus?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    discountCode?: NullableStringFieldUpdateOperationsInput | string | null
    discountAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SalesOrderUncheckedUpdateWithoutLinesInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    customerPhone?: NullableStringFieldUpdateOperationsInput | string | null
    customerContact?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    shippedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    invoiceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    paymentStatus?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    discountCode?: NullableStringFieldUpdateOperationsInput | string | null
    discountAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SalesOrderLineCreateManyOrderInput = {
    id: string
    itemId: string
    itemName: string
    measureUnit: string
    quantity: Decimal | DecimalJsLike | number | string
    unitPrice: Decimal | DecimalJsLike | number | string
    isGift?: boolean
  }

  export type SalesOrderLineUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemId?: StringFieldUpdateOperationsInput | string
    itemName?: StringFieldUpdateOperationsInput | string
    measureUnit?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isGift?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SalesOrderLineUncheckedUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemId?: StringFieldUpdateOperationsInput | string
    itemName?: StringFieldUpdateOperationsInput | string
    measureUnit?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isGift?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SalesOrderLineUncheckedUpdateManyWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemId?: StringFieldUpdateOperationsInput | string
    itemName?: StringFieldUpdateOperationsInput | string
    measureUnit?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isGift?: BoolFieldUpdateOperationsInput | boolean
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