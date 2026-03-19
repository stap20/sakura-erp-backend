
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
 * Model ProductionOrderLine
 * 
 */
export type ProductionOrderLine = $Result.DefaultSelection<Prisma.$ProductionOrderLinePayload>

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
   * `prisma.productionOrderLine`: Exposes CRUD operations for the **ProductionOrderLine** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductionOrderLines
    * const productionOrderLines = await prisma.productionOrderLine.findMany()
    * ```
    */
  get productionOrderLine(): Prisma.ProductionOrderLineDelegate<ExtArgs, ClientOptions>;
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
    ProductionOrderLine: 'ProductionOrderLine'
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
      modelProps: "productionOrder" | "productionOrderLine"
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
      ProductionOrderLine: {
        payload: Prisma.$ProductionOrderLinePayload<ExtArgs>
        fields: Prisma.ProductionOrderLineFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductionOrderLineFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductionOrderLinePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductionOrderLineFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductionOrderLinePayload>
          }
          findFirst: {
            args: Prisma.ProductionOrderLineFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductionOrderLinePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductionOrderLineFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductionOrderLinePayload>
          }
          findMany: {
            args: Prisma.ProductionOrderLineFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductionOrderLinePayload>[]
          }
          create: {
            args: Prisma.ProductionOrderLineCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductionOrderLinePayload>
          }
          createMany: {
            args: Prisma.ProductionOrderLineCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductionOrderLineCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductionOrderLinePayload>[]
          }
          delete: {
            args: Prisma.ProductionOrderLineDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductionOrderLinePayload>
          }
          update: {
            args: Prisma.ProductionOrderLineUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductionOrderLinePayload>
          }
          deleteMany: {
            args: Prisma.ProductionOrderLineDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductionOrderLineUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductionOrderLineUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductionOrderLinePayload>[]
          }
          upsert: {
            args: Prisma.ProductionOrderLineUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductionOrderLinePayload>
          }
          aggregate: {
            args: Prisma.ProductionOrderLineAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductionOrderLine>
          }
          groupBy: {
            args: Prisma.ProductionOrderLineGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductionOrderLineGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductionOrderLineCountArgs<ExtArgs>
            result: $Utils.Optional<ProductionOrderLineCountAggregateOutputType> | number
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
    productionOrderLine?: ProductionOrderLineOmit
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
    lines: number
  }

  export type ProductionOrderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lines?: boolean | ProductionOrderCountOutputTypeCountLinesArgs
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
  export type ProductionOrderCountOutputTypeCountLinesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductionOrderLineWhereInput
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
    unitWeightGm: number | null
    recipeVersionNumber: number | null
    quantityUnits: number | null
    totalBatchWeightGm: number | null
    wastePercent: number | null
    totalMaterialCost: number | null
  }

  export type ProductionOrderSumAggregateOutputType = {
    unitWeightGm: number | null
    recipeVersionNumber: number | null
    quantityUnits: number | null
    totalBatchWeightGm: number | null
    wastePercent: number | null
    totalMaterialCost: number | null
  }

  export type ProductionOrderMinAggregateOutputType = {
    id: string | null
    productId: string | null
    productName: string | null
    unitWeightGm: number | null
    recipeVersionId: string | null
    recipeVersionNumber: number | null
    quantityUnits: number | null
    totalBatchWeightGm: number | null
    wastePercent: number | null
    status: string | null
    notes: string | null
    totalMaterialCost: number | null
    executedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductionOrderMaxAggregateOutputType = {
    id: string | null
    productId: string | null
    productName: string | null
    unitWeightGm: number | null
    recipeVersionId: string | null
    recipeVersionNumber: number | null
    quantityUnits: number | null
    totalBatchWeightGm: number | null
    wastePercent: number | null
    status: string | null
    notes: string | null
    totalMaterialCost: number | null
    executedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductionOrderCountAggregateOutputType = {
    id: number
    productId: number
    productName: number
    unitWeightGm: number
    recipeVersionId: number
    recipeVersionNumber: number
    quantityUnits: number
    totalBatchWeightGm: number
    wastePercent: number
    status: number
    notes: number
    totalMaterialCost: number
    executedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProductionOrderAvgAggregateInputType = {
    unitWeightGm?: true
    recipeVersionNumber?: true
    quantityUnits?: true
    totalBatchWeightGm?: true
    wastePercent?: true
    totalMaterialCost?: true
  }

  export type ProductionOrderSumAggregateInputType = {
    unitWeightGm?: true
    recipeVersionNumber?: true
    quantityUnits?: true
    totalBatchWeightGm?: true
    wastePercent?: true
    totalMaterialCost?: true
  }

  export type ProductionOrderMinAggregateInputType = {
    id?: true
    productId?: true
    productName?: true
    unitWeightGm?: true
    recipeVersionId?: true
    recipeVersionNumber?: true
    quantityUnits?: true
    totalBatchWeightGm?: true
    wastePercent?: true
    status?: true
    notes?: true
    totalMaterialCost?: true
    executedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductionOrderMaxAggregateInputType = {
    id?: true
    productId?: true
    productName?: true
    unitWeightGm?: true
    recipeVersionId?: true
    recipeVersionNumber?: true
    quantityUnits?: true
    totalBatchWeightGm?: true
    wastePercent?: true
    status?: true
    notes?: true
    totalMaterialCost?: true
    executedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductionOrderCountAggregateInputType = {
    id?: true
    productId?: true
    productName?: true
    unitWeightGm?: true
    recipeVersionId?: true
    recipeVersionNumber?: true
    quantityUnits?: true
    totalBatchWeightGm?: true
    wastePercent?: true
    status?: true
    notes?: true
    totalMaterialCost?: true
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
    productName: string
    unitWeightGm: number
    recipeVersionId: string
    recipeVersionNumber: number
    quantityUnits: number
    totalBatchWeightGm: number
    wastePercent: number
    status: string
    notes: string | null
    totalMaterialCost: number | null
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
    productName?: boolean
    unitWeightGm?: boolean
    recipeVersionId?: boolean
    recipeVersionNumber?: boolean
    quantityUnits?: boolean
    totalBatchWeightGm?: boolean
    wastePercent?: boolean
    status?: boolean
    notes?: boolean
    totalMaterialCost?: boolean
    executedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lines?: boolean | ProductionOrder$linesArgs<ExtArgs>
    _count?: boolean | ProductionOrderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productionOrder"]>

  export type ProductionOrderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    productName?: boolean
    unitWeightGm?: boolean
    recipeVersionId?: boolean
    recipeVersionNumber?: boolean
    quantityUnits?: boolean
    totalBatchWeightGm?: boolean
    wastePercent?: boolean
    status?: boolean
    notes?: boolean
    totalMaterialCost?: boolean
    executedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["productionOrder"]>

  export type ProductionOrderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    productName?: boolean
    unitWeightGm?: boolean
    recipeVersionId?: boolean
    recipeVersionNumber?: boolean
    quantityUnits?: boolean
    totalBatchWeightGm?: boolean
    wastePercent?: boolean
    status?: boolean
    notes?: boolean
    totalMaterialCost?: boolean
    executedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["productionOrder"]>

  export type ProductionOrderSelectScalar = {
    id?: boolean
    productId?: boolean
    productName?: boolean
    unitWeightGm?: boolean
    recipeVersionId?: boolean
    recipeVersionNumber?: boolean
    quantityUnits?: boolean
    totalBatchWeightGm?: boolean
    wastePercent?: boolean
    status?: boolean
    notes?: boolean
    totalMaterialCost?: boolean
    executedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProductionOrderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "productId" | "productName" | "unitWeightGm" | "recipeVersionId" | "recipeVersionNumber" | "quantityUnits" | "totalBatchWeightGm" | "wastePercent" | "status" | "notes" | "totalMaterialCost" | "executedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["productionOrder"]>
  export type ProductionOrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lines?: boolean | ProductionOrder$linesArgs<ExtArgs>
    _count?: boolean | ProductionOrderCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductionOrderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ProductionOrderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProductionOrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductionOrder"
    objects: {
      lines: Prisma.$ProductionOrderLinePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      productId: string
      productName: string
      unitWeightGm: number
      recipeVersionId: string
      recipeVersionNumber: number
      quantityUnits: number
      totalBatchWeightGm: number
      wastePercent: number
      status: string
      notes: string | null
      totalMaterialCost: number | null
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
    lines<T extends ProductionOrder$linesArgs<ExtArgs> = {}>(args?: Subset<T, ProductionOrder$linesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductionOrderLinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly productName: FieldRef<"ProductionOrder", 'String'>
    readonly unitWeightGm: FieldRef<"ProductionOrder", 'Float'>
    readonly recipeVersionId: FieldRef<"ProductionOrder", 'String'>
    readonly recipeVersionNumber: FieldRef<"ProductionOrder", 'Int'>
    readonly quantityUnits: FieldRef<"ProductionOrder", 'Int'>
    readonly totalBatchWeightGm: FieldRef<"ProductionOrder", 'Float'>
    readonly wastePercent: FieldRef<"ProductionOrder", 'Float'>
    readonly status: FieldRef<"ProductionOrder", 'String'>
    readonly notes: FieldRef<"ProductionOrder", 'String'>
    readonly totalMaterialCost: FieldRef<"ProductionOrder", 'Float'>
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
   * ProductionOrder.lines
   */
  export type ProductionOrder$linesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductionOrderLine
     */
    select?: ProductionOrderLineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductionOrderLine
     */
    omit?: ProductionOrderLineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductionOrderLineInclude<ExtArgs> | null
    where?: ProductionOrderLineWhereInput
    orderBy?: ProductionOrderLineOrderByWithRelationInput | ProductionOrderLineOrderByWithRelationInput[]
    cursor?: ProductionOrderLineWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductionOrderLineScalarFieldEnum | ProductionOrderLineScalarFieldEnum[]
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
   * Model ProductionOrderLine
   */

  export type AggregateProductionOrderLine = {
    _count: ProductionOrderLineCountAggregateOutputType | null
    _avg: ProductionOrderLineAvgAggregateOutputType | null
    _sum: ProductionOrderLineSumAggregateOutputType | null
    _min: ProductionOrderLineMinAggregateOutputType | null
    _max: ProductionOrderLineMaxAggregateOutputType | null
  }

  export type ProductionOrderLineAvgAggregateOutputType = {
    recipePercent: number | null
    adjustedQuantityGm: number | null
    unitPrice: number | null
    lineCost: number | null
  }

  export type ProductionOrderLineSumAggregateOutputType = {
    recipePercent: number | null
    adjustedQuantityGm: number | null
    unitPrice: number | null
    lineCost: number | null
  }

  export type ProductionOrderLineMinAggregateOutputType = {
    id: string | null
    orderId: string | null
    itemId: string | null
    itemName: string | null
    isAddOn: boolean | null
    ingredientCategory: string | null
    recipePercent: number | null
    adjustedQuantityGm: number | null
    unitPrice: number | null
    lineCost: number | null
  }

  export type ProductionOrderLineMaxAggregateOutputType = {
    id: string | null
    orderId: string | null
    itemId: string | null
    itemName: string | null
    isAddOn: boolean | null
    ingredientCategory: string | null
    recipePercent: number | null
    adjustedQuantityGm: number | null
    unitPrice: number | null
    lineCost: number | null
  }

  export type ProductionOrderLineCountAggregateOutputType = {
    id: number
    orderId: number
    itemId: number
    itemName: number
    isAddOn: number
    ingredientCategory: number
    recipePercent: number
    adjustedQuantityGm: number
    unitPrice: number
    lineCost: number
    _all: number
  }


  export type ProductionOrderLineAvgAggregateInputType = {
    recipePercent?: true
    adjustedQuantityGm?: true
    unitPrice?: true
    lineCost?: true
  }

  export type ProductionOrderLineSumAggregateInputType = {
    recipePercent?: true
    adjustedQuantityGm?: true
    unitPrice?: true
    lineCost?: true
  }

  export type ProductionOrderLineMinAggregateInputType = {
    id?: true
    orderId?: true
    itemId?: true
    itemName?: true
    isAddOn?: true
    ingredientCategory?: true
    recipePercent?: true
    adjustedQuantityGm?: true
    unitPrice?: true
    lineCost?: true
  }

  export type ProductionOrderLineMaxAggregateInputType = {
    id?: true
    orderId?: true
    itemId?: true
    itemName?: true
    isAddOn?: true
    ingredientCategory?: true
    recipePercent?: true
    adjustedQuantityGm?: true
    unitPrice?: true
    lineCost?: true
  }

  export type ProductionOrderLineCountAggregateInputType = {
    id?: true
    orderId?: true
    itemId?: true
    itemName?: true
    isAddOn?: true
    ingredientCategory?: true
    recipePercent?: true
    adjustedQuantityGm?: true
    unitPrice?: true
    lineCost?: true
    _all?: true
  }

  export type ProductionOrderLineAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductionOrderLine to aggregate.
     */
    where?: ProductionOrderLineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductionOrderLines to fetch.
     */
    orderBy?: ProductionOrderLineOrderByWithRelationInput | ProductionOrderLineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductionOrderLineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductionOrderLines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductionOrderLines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductionOrderLines
    **/
    _count?: true | ProductionOrderLineCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductionOrderLineAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductionOrderLineSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductionOrderLineMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductionOrderLineMaxAggregateInputType
  }

  export type GetProductionOrderLineAggregateType<T extends ProductionOrderLineAggregateArgs> = {
        [P in keyof T & keyof AggregateProductionOrderLine]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductionOrderLine[P]>
      : GetScalarType<T[P], AggregateProductionOrderLine[P]>
  }




  export type ProductionOrderLineGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductionOrderLineWhereInput
    orderBy?: ProductionOrderLineOrderByWithAggregationInput | ProductionOrderLineOrderByWithAggregationInput[]
    by: ProductionOrderLineScalarFieldEnum[] | ProductionOrderLineScalarFieldEnum
    having?: ProductionOrderLineScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductionOrderLineCountAggregateInputType | true
    _avg?: ProductionOrderLineAvgAggregateInputType
    _sum?: ProductionOrderLineSumAggregateInputType
    _min?: ProductionOrderLineMinAggregateInputType
    _max?: ProductionOrderLineMaxAggregateInputType
  }

  export type ProductionOrderLineGroupByOutputType = {
    id: string
    orderId: string
    itemId: string | null
    itemName: string
    isAddOn: boolean
    ingredientCategory: string | null
    recipePercent: number
    adjustedQuantityGm: number
    unitPrice: number | null
    lineCost: number | null
    _count: ProductionOrderLineCountAggregateOutputType | null
    _avg: ProductionOrderLineAvgAggregateOutputType | null
    _sum: ProductionOrderLineSumAggregateOutputType | null
    _min: ProductionOrderLineMinAggregateOutputType | null
    _max: ProductionOrderLineMaxAggregateOutputType | null
  }

  type GetProductionOrderLineGroupByPayload<T extends ProductionOrderLineGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductionOrderLineGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductionOrderLineGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductionOrderLineGroupByOutputType[P]>
            : GetScalarType<T[P], ProductionOrderLineGroupByOutputType[P]>
        }
      >
    >


  export type ProductionOrderLineSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    itemId?: boolean
    itemName?: boolean
    isAddOn?: boolean
    ingredientCategory?: boolean
    recipePercent?: boolean
    adjustedQuantityGm?: boolean
    unitPrice?: boolean
    lineCost?: boolean
    order?: boolean | ProductionOrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productionOrderLine"]>

  export type ProductionOrderLineSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    itemId?: boolean
    itemName?: boolean
    isAddOn?: boolean
    ingredientCategory?: boolean
    recipePercent?: boolean
    adjustedQuantityGm?: boolean
    unitPrice?: boolean
    lineCost?: boolean
    order?: boolean | ProductionOrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productionOrderLine"]>

  export type ProductionOrderLineSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    itemId?: boolean
    itemName?: boolean
    isAddOn?: boolean
    ingredientCategory?: boolean
    recipePercent?: boolean
    adjustedQuantityGm?: boolean
    unitPrice?: boolean
    lineCost?: boolean
    order?: boolean | ProductionOrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productionOrderLine"]>

  export type ProductionOrderLineSelectScalar = {
    id?: boolean
    orderId?: boolean
    itemId?: boolean
    itemName?: boolean
    isAddOn?: boolean
    ingredientCategory?: boolean
    recipePercent?: boolean
    adjustedQuantityGm?: boolean
    unitPrice?: boolean
    lineCost?: boolean
  }

  export type ProductionOrderLineOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orderId" | "itemId" | "itemName" | "isAddOn" | "ingredientCategory" | "recipePercent" | "adjustedQuantityGm" | "unitPrice" | "lineCost", ExtArgs["result"]["productionOrderLine"]>
  export type ProductionOrderLineInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | ProductionOrderDefaultArgs<ExtArgs>
  }
  export type ProductionOrderLineIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | ProductionOrderDefaultArgs<ExtArgs>
  }
  export type ProductionOrderLineIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | ProductionOrderDefaultArgs<ExtArgs>
  }

  export type $ProductionOrderLinePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductionOrderLine"
    objects: {
      order: Prisma.$ProductionOrderPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orderId: string
      itemId: string | null
      itemName: string
      isAddOn: boolean
      ingredientCategory: string | null
      recipePercent: number
      adjustedQuantityGm: number
      unitPrice: number | null
      lineCost: number | null
    }, ExtArgs["result"]["productionOrderLine"]>
    composites: {}
  }

  type ProductionOrderLineGetPayload<S extends boolean | null | undefined | ProductionOrderLineDefaultArgs> = $Result.GetResult<Prisma.$ProductionOrderLinePayload, S>

  type ProductionOrderLineCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductionOrderLineFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductionOrderLineCountAggregateInputType | true
    }

  export interface ProductionOrderLineDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductionOrderLine'], meta: { name: 'ProductionOrderLine' } }
    /**
     * Find zero or one ProductionOrderLine that matches the filter.
     * @param {ProductionOrderLineFindUniqueArgs} args - Arguments to find a ProductionOrderLine
     * @example
     * // Get one ProductionOrderLine
     * const productionOrderLine = await prisma.productionOrderLine.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductionOrderLineFindUniqueArgs>(args: SelectSubset<T, ProductionOrderLineFindUniqueArgs<ExtArgs>>): Prisma__ProductionOrderLineClient<$Result.GetResult<Prisma.$ProductionOrderLinePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProductionOrderLine that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductionOrderLineFindUniqueOrThrowArgs} args - Arguments to find a ProductionOrderLine
     * @example
     * // Get one ProductionOrderLine
     * const productionOrderLine = await prisma.productionOrderLine.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductionOrderLineFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductionOrderLineFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductionOrderLineClient<$Result.GetResult<Prisma.$ProductionOrderLinePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductionOrderLine that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductionOrderLineFindFirstArgs} args - Arguments to find a ProductionOrderLine
     * @example
     * // Get one ProductionOrderLine
     * const productionOrderLine = await prisma.productionOrderLine.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductionOrderLineFindFirstArgs>(args?: SelectSubset<T, ProductionOrderLineFindFirstArgs<ExtArgs>>): Prisma__ProductionOrderLineClient<$Result.GetResult<Prisma.$ProductionOrderLinePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductionOrderLine that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductionOrderLineFindFirstOrThrowArgs} args - Arguments to find a ProductionOrderLine
     * @example
     * // Get one ProductionOrderLine
     * const productionOrderLine = await prisma.productionOrderLine.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductionOrderLineFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductionOrderLineFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductionOrderLineClient<$Result.GetResult<Prisma.$ProductionOrderLinePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProductionOrderLines that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductionOrderLineFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductionOrderLines
     * const productionOrderLines = await prisma.productionOrderLine.findMany()
     * 
     * // Get first 10 ProductionOrderLines
     * const productionOrderLines = await prisma.productionOrderLine.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productionOrderLineWithIdOnly = await prisma.productionOrderLine.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductionOrderLineFindManyArgs>(args?: SelectSubset<T, ProductionOrderLineFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductionOrderLinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProductionOrderLine.
     * @param {ProductionOrderLineCreateArgs} args - Arguments to create a ProductionOrderLine.
     * @example
     * // Create one ProductionOrderLine
     * const ProductionOrderLine = await prisma.productionOrderLine.create({
     *   data: {
     *     // ... data to create a ProductionOrderLine
     *   }
     * })
     * 
     */
    create<T extends ProductionOrderLineCreateArgs>(args: SelectSubset<T, ProductionOrderLineCreateArgs<ExtArgs>>): Prisma__ProductionOrderLineClient<$Result.GetResult<Prisma.$ProductionOrderLinePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProductionOrderLines.
     * @param {ProductionOrderLineCreateManyArgs} args - Arguments to create many ProductionOrderLines.
     * @example
     * // Create many ProductionOrderLines
     * const productionOrderLine = await prisma.productionOrderLine.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductionOrderLineCreateManyArgs>(args?: SelectSubset<T, ProductionOrderLineCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProductionOrderLines and returns the data saved in the database.
     * @param {ProductionOrderLineCreateManyAndReturnArgs} args - Arguments to create many ProductionOrderLines.
     * @example
     * // Create many ProductionOrderLines
     * const productionOrderLine = await prisma.productionOrderLine.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProductionOrderLines and only return the `id`
     * const productionOrderLineWithIdOnly = await prisma.productionOrderLine.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductionOrderLineCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductionOrderLineCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductionOrderLinePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProductionOrderLine.
     * @param {ProductionOrderLineDeleteArgs} args - Arguments to delete one ProductionOrderLine.
     * @example
     * // Delete one ProductionOrderLine
     * const ProductionOrderLine = await prisma.productionOrderLine.delete({
     *   where: {
     *     // ... filter to delete one ProductionOrderLine
     *   }
     * })
     * 
     */
    delete<T extends ProductionOrderLineDeleteArgs>(args: SelectSubset<T, ProductionOrderLineDeleteArgs<ExtArgs>>): Prisma__ProductionOrderLineClient<$Result.GetResult<Prisma.$ProductionOrderLinePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProductionOrderLine.
     * @param {ProductionOrderLineUpdateArgs} args - Arguments to update one ProductionOrderLine.
     * @example
     * // Update one ProductionOrderLine
     * const productionOrderLine = await prisma.productionOrderLine.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductionOrderLineUpdateArgs>(args: SelectSubset<T, ProductionOrderLineUpdateArgs<ExtArgs>>): Prisma__ProductionOrderLineClient<$Result.GetResult<Prisma.$ProductionOrderLinePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProductionOrderLines.
     * @param {ProductionOrderLineDeleteManyArgs} args - Arguments to filter ProductionOrderLines to delete.
     * @example
     * // Delete a few ProductionOrderLines
     * const { count } = await prisma.productionOrderLine.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductionOrderLineDeleteManyArgs>(args?: SelectSubset<T, ProductionOrderLineDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductionOrderLines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductionOrderLineUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductionOrderLines
     * const productionOrderLine = await prisma.productionOrderLine.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductionOrderLineUpdateManyArgs>(args: SelectSubset<T, ProductionOrderLineUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductionOrderLines and returns the data updated in the database.
     * @param {ProductionOrderLineUpdateManyAndReturnArgs} args - Arguments to update many ProductionOrderLines.
     * @example
     * // Update many ProductionOrderLines
     * const productionOrderLine = await prisma.productionOrderLine.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProductionOrderLines and only return the `id`
     * const productionOrderLineWithIdOnly = await prisma.productionOrderLine.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProductionOrderLineUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductionOrderLineUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductionOrderLinePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProductionOrderLine.
     * @param {ProductionOrderLineUpsertArgs} args - Arguments to update or create a ProductionOrderLine.
     * @example
     * // Update or create a ProductionOrderLine
     * const productionOrderLine = await prisma.productionOrderLine.upsert({
     *   create: {
     *     // ... data to create a ProductionOrderLine
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductionOrderLine we want to update
     *   }
     * })
     */
    upsert<T extends ProductionOrderLineUpsertArgs>(args: SelectSubset<T, ProductionOrderLineUpsertArgs<ExtArgs>>): Prisma__ProductionOrderLineClient<$Result.GetResult<Prisma.$ProductionOrderLinePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProductionOrderLines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductionOrderLineCountArgs} args - Arguments to filter ProductionOrderLines to count.
     * @example
     * // Count the number of ProductionOrderLines
     * const count = await prisma.productionOrderLine.count({
     *   where: {
     *     // ... the filter for the ProductionOrderLines we want to count
     *   }
     * })
    **/
    count<T extends ProductionOrderLineCountArgs>(
      args?: Subset<T, ProductionOrderLineCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductionOrderLineCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductionOrderLine.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductionOrderLineAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductionOrderLineAggregateArgs>(args: Subset<T, ProductionOrderLineAggregateArgs>): Prisma.PrismaPromise<GetProductionOrderLineAggregateType<T>>

    /**
     * Group by ProductionOrderLine.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductionOrderLineGroupByArgs} args - Group by arguments.
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
      T extends ProductionOrderLineGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductionOrderLineGroupByArgs['orderBy'] }
        : { orderBy?: ProductionOrderLineGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductionOrderLineGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductionOrderLineGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductionOrderLine model
   */
  readonly fields: ProductionOrderLineFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductionOrderLine.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductionOrderLineClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the ProductionOrderLine model
   */
  interface ProductionOrderLineFieldRefs {
    readonly id: FieldRef<"ProductionOrderLine", 'String'>
    readonly orderId: FieldRef<"ProductionOrderLine", 'String'>
    readonly itemId: FieldRef<"ProductionOrderLine", 'String'>
    readonly itemName: FieldRef<"ProductionOrderLine", 'String'>
    readonly isAddOn: FieldRef<"ProductionOrderLine", 'Boolean'>
    readonly ingredientCategory: FieldRef<"ProductionOrderLine", 'String'>
    readonly recipePercent: FieldRef<"ProductionOrderLine", 'Float'>
    readonly adjustedQuantityGm: FieldRef<"ProductionOrderLine", 'Float'>
    readonly unitPrice: FieldRef<"ProductionOrderLine", 'Float'>
    readonly lineCost: FieldRef<"ProductionOrderLine", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * ProductionOrderLine findUnique
   */
  export type ProductionOrderLineFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductionOrderLine
     */
    select?: ProductionOrderLineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductionOrderLine
     */
    omit?: ProductionOrderLineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductionOrderLineInclude<ExtArgs> | null
    /**
     * Filter, which ProductionOrderLine to fetch.
     */
    where: ProductionOrderLineWhereUniqueInput
  }

  /**
   * ProductionOrderLine findUniqueOrThrow
   */
  export type ProductionOrderLineFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductionOrderLine
     */
    select?: ProductionOrderLineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductionOrderLine
     */
    omit?: ProductionOrderLineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductionOrderLineInclude<ExtArgs> | null
    /**
     * Filter, which ProductionOrderLine to fetch.
     */
    where: ProductionOrderLineWhereUniqueInput
  }

  /**
   * ProductionOrderLine findFirst
   */
  export type ProductionOrderLineFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductionOrderLine
     */
    select?: ProductionOrderLineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductionOrderLine
     */
    omit?: ProductionOrderLineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductionOrderLineInclude<ExtArgs> | null
    /**
     * Filter, which ProductionOrderLine to fetch.
     */
    where?: ProductionOrderLineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductionOrderLines to fetch.
     */
    orderBy?: ProductionOrderLineOrderByWithRelationInput | ProductionOrderLineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductionOrderLines.
     */
    cursor?: ProductionOrderLineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductionOrderLines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductionOrderLines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductionOrderLines.
     */
    distinct?: ProductionOrderLineScalarFieldEnum | ProductionOrderLineScalarFieldEnum[]
  }

  /**
   * ProductionOrderLine findFirstOrThrow
   */
  export type ProductionOrderLineFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductionOrderLine
     */
    select?: ProductionOrderLineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductionOrderLine
     */
    omit?: ProductionOrderLineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductionOrderLineInclude<ExtArgs> | null
    /**
     * Filter, which ProductionOrderLine to fetch.
     */
    where?: ProductionOrderLineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductionOrderLines to fetch.
     */
    orderBy?: ProductionOrderLineOrderByWithRelationInput | ProductionOrderLineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductionOrderLines.
     */
    cursor?: ProductionOrderLineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductionOrderLines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductionOrderLines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductionOrderLines.
     */
    distinct?: ProductionOrderLineScalarFieldEnum | ProductionOrderLineScalarFieldEnum[]
  }

  /**
   * ProductionOrderLine findMany
   */
  export type ProductionOrderLineFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductionOrderLine
     */
    select?: ProductionOrderLineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductionOrderLine
     */
    omit?: ProductionOrderLineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductionOrderLineInclude<ExtArgs> | null
    /**
     * Filter, which ProductionOrderLines to fetch.
     */
    where?: ProductionOrderLineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductionOrderLines to fetch.
     */
    orderBy?: ProductionOrderLineOrderByWithRelationInput | ProductionOrderLineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductionOrderLines.
     */
    cursor?: ProductionOrderLineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductionOrderLines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductionOrderLines.
     */
    skip?: number
    distinct?: ProductionOrderLineScalarFieldEnum | ProductionOrderLineScalarFieldEnum[]
  }

  /**
   * ProductionOrderLine create
   */
  export type ProductionOrderLineCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductionOrderLine
     */
    select?: ProductionOrderLineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductionOrderLine
     */
    omit?: ProductionOrderLineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductionOrderLineInclude<ExtArgs> | null
    /**
     * The data needed to create a ProductionOrderLine.
     */
    data: XOR<ProductionOrderLineCreateInput, ProductionOrderLineUncheckedCreateInput>
  }

  /**
   * ProductionOrderLine createMany
   */
  export type ProductionOrderLineCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductionOrderLines.
     */
    data: ProductionOrderLineCreateManyInput | ProductionOrderLineCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProductionOrderLine createManyAndReturn
   */
  export type ProductionOrderLineCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductionOrderLine
     */
    select?: ProductionOrderLineSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductionOrderLine
     */
    omit?: ProductionOrderLineOmit<ExtArgs> | null
    /**
     * The data used to create many ProductionOrderLines.
     */
    data: ProductionOrderLineCreateManyInput | ProductionOrderLineCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductionOrderLineIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductionOrderLine update
   */
  export type ProductionOrderLineUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductionOrderLine
     */
    select?: ProductionOrderLineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductionOrderLine
     */
    omit?: ProductionOrderLineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductionOrderLineInclude<ExtArgs> | null
    /**
     * The data needed to update a ProductionOrderLine.
     */
    data: XOR<ProductionOrderLineUpdateInput, ProductionOrderLineUncheckedUpdateInput>
    /**
     * Choose, which ProductionOrderLine to update.
     */
    where: ProductionOrderLineWhereUniqueInput
  }

  /**
   * ProductionOrderLine updateMany
   */
  export type ProductionOrderLineUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductionOrderLines.
     */
    data: XOR<ProductionOrderLineUpdateManyMutationInput, ProductionOrderLineUncheckedUpdateManyInput>
    /**
     * Filter which ProductionOrderLines to update
     */
    where?: ProductionOrderLineWhereInput
    /**
     * Limit how many ProductionOrderLines to update.
     */
    limit?: number
  }

  /**
   * ProductionOrderLine updateManyAndReturn
   */
  export type ProductionOrderLineUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductionOrderLine
     */
    select?: ProductionOrderLineSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductionOrderLine
     */
    omit?: ProductionOrderLineOmit<ExtArgs> | null
    /**
     * The data used to update ProductionOrderLines.
     */
    data: XOR<ProductionOrderLineUpdateManyMutationInput, ProductionOrderLineUncheckedUpdateManyInput>
    /**
     * Filter which ProductionOrderLines to update
     */
    where?: ProductionOrderLineWhereInput
    /**
     * Limit how many ProductionOrderLines to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductionOrderLineIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductionOrderLine upsert
   */
  export type ProductionOrderLineUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductionOrderLine
     */
    select?: ProductionOrderLineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductionOrderLine
     */
    omit?: ProductionOrderLineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductionOrderLineInclude<ExtArgs> | null
    /**
     * The filter to search for the ProductionOrderLine to update in case it exists.
     */
    where: ProductionOrderLineWhereUniqueInput
    /**
     * In case the ProductionOrderLine found by the `where` argument doesn't exist, create a new ProductionOrderLine with this data.
     */
    create: XOR<ProductionOrderLineCreateInput, ProductionOrderLineUncheckedCreateInput>
    /**
     * In case the ProductionOrderLine was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductionOrderLineUpdateInput, ProductionOrderLineUncheckedUpdateInput>
  }

  /**
   * ProductionOrderLine delete
   */
  export type ProductionOrderLineDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductionOrderLine
     */
    select?: ProductionOrderLineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductionOrderLine
     */
    omit?: ProductionOrderLineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductionOrderLineInclude<ExtArgs> | null
    /**
     * Filter which ProductionOrderLine to delete.
     */
    where: ProductionOrderLineWhereUniqueInput
  }

  /**
   * ProductionOrderLine deleteMany
   */
  export type ProductionOrderLineDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductionOrderLines to delete
     */
    where?: ProductionOrderLineWhereInput
    /**
     * Limit how many ProductionOrderLines to delete.
     */
    limit?: number
  }

  /**
   * ProductionOrderLine without action
   */
  export type ProductionOrderLineDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductionOrderLine
     */
    select?: ProductionOrderLineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductionOrderLine
     */
    omit?: ProductionOrderLineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductionOrderLineInclude<ExtArgs> | null
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
    productName: 'productName',
    unitWeightGm: 'unitWeightGm',
    recipeVersionId: 'recipeVersionId',
    recipeVersionNumber: 'recipeVersionNumber',
    quantityUnits: 'quantityUnits',
    totalBatchWeightGm: 'totalBatchWeightGm',
    wastePercent: 'wastePercent',
    status: 'status',
    notes: 'notes',
    totalMaterialCost: 'totalMaterialCost',
    executedAt: 'executedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProductionOrderScalarFieldEnum = (typeof ProductionOrderScalarFieldEnum)[keyof typeof ProductionOrderScalarFieldEnum]


  export const ProductionOrderLineScalarFieldEnum: {
    id: 'id',
    orderId: 'orderId',
    itemId: 'itemId',
    itemName: 'itemName',
    isAddOn: 'isAddOn',
    ingredientCategory: 'ingredientCategory',
    recipePercent: 'recipePercent',
    adjustedQuantityGm: 'adjustedQuantityGm',
    unitPrice: 'unitPrice',
    lineCost: 'lineCost'
  };

  export type ProductionOrderLineScalarFieldEnum = (typeof ProductionOrderLineScalarFieldEnum)[keyof typeof ProductionOrderLineScalarFieldEnum]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type ProductionOrderWhereInput = {
    AND?: ProductionOrderWhereInput | ProductionOrderWhereInput[]
    OR?: ProductionOrderWhereInput[]
    NOT?: ProductionOrderWhereInput | ProductionOrderWhereInput[]
    id?: StringFilter<"ProductionOrder"> | string
    productId?: StringFilter<"ProductionOrder"> | string
    productName?: StringFilter<"ProductionOrder"> | string
    unitWeightGm?: FloatFilter<"ProductionOrder"> | number
    recipeVersionId?: StringFilter<"ProductionOrder"> | string
    recipeVersionNumber?: IntFilter<"ProductionOrder"> | number
    quantityUnits?: IntFilter<"ProductionOrder"> | number
    totalBatchWeightGm?: FloatFilter<"ProductionOrder"> | number
    wastePercent?: FloatFilter<"ProductionOrder"> | number
    status?: StringFilter<"ProductionOrder"> | string
    notes?: StringNullableFilter<"ProductionOrder"> | string | null
    totalMaterialCost?: FloatNullableFilter<"ProductionOrder"> | number | null
    executedAt?: DateTimeNullableFilter<"ProductionOrder"> | Date | string | null
    createdAt?: DateTimeFilter<"ProductionOrder"> | Date | string
    updatedAt?: DateTimeFilter<"ProductionOrder"> | Date | string
    lines?: ProductionOrderLineListRelationFilter
  }

  export type ProductionOrderOrderByWithRelationInput = {
    id?: SortOrder
    productId?: SortOrder
    productName?: SortOrder
    unitWeightGm?: SortOrder
    recipeVersionId?: SortOrder
    recipeVersionNumber?: SortOrder
    quantityUnits?: SortOrder
    totalBatchWeightGm?: SortOrder
    wastePercent?: SortOrder
    status?: SortOrder
    notes?: SortOrderInput | SortOrder
    totalMaterialCost?: SortOrderInput | SortOrder
    executedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lines?: ProductionOrderLineOrderByRelationAggregateInput
  }

  export type ProductionOrderWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProductionOrderWhereInput | ProductionOrderWhereInput[]
    OR?: ProductionOrderWhereInput[]
    NOT?: ProductionOrderWhereInput | ProductionOrderWhereInput[]
    productId?: StringFilter<"ProductionOrder"> | string
    productName?: StringFilter<"ProductionOrder"> | string
    unitWeightGm?: FloatFilter<"ProductionOrder"> | number
    recipeVersionId?: StringFilter<"ProductionOrder"> | string
    recipeVersionNumber?: IntFilter<"ProductionOrder"> | number
    quantityUnits?: IntFilter<"ProductionOrder"> | number
    totalBatchWeightGm?: FloatFilter<"ProductionOrder"> | number
    wastePercent?: FloatFilter<"ProductionOrder"> | number
    status?: StringFilter<"ProductionOrder"> | string
    notes?: StringNullableFilter<"ProductionOrder"> | string | null
    totalMaterialCost?: FloatNullableFilter<"ProductionOrder"> | number | null
    executedAt?: DateTimeNullableFilter<"ProductionOrder"> | Date | string | null
    createdAt?: DateTimeFilter<"ProductionOrder"> | Date | string
    updatedAt?: DateTimeFilter<"ProductionOrder"> | Date | string
    lines?: ProductionOrderLineListRelationFilter
  }, "id">

  export type ProductionOrderOrderByWithAggregationInput = {
    id?: SortOrder
    productId?: SortOrder
    productName?: SortOrder
    unitWeightGm?: SortOrder
    recipeVersionId?: SortOrder
    recipeVersionNumber?: SortOrder
    quantityUnits?: SortOrder
    totalBatchWeightGm?: SortOrder
    wastePercent?: SortOrder
    status?: SortOrder
    notes?: SortOrderInput | SortOrder
    totalMaterialCost?: SortOrderInput | SortOrder
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
    productName?: StringWithAggregatesFilter<"ProductionOrder"> | string
    unitWeightGm?: FloatWithAggregatesFilter<"ProductionOrder"> | number
    recipeVersionId?: StringWithAggregatesFilter<"ProductionOrder"> | string
    recipeVersionNumber?: IntWithAggregatesFilter<"ProductionOrder"> | number
    quantityUnits?: IntWithAggregatesFilter<"ProductionOrder"> | number
    totalBatchWeightGm?: FloatWithAggregatesFilter<"ProductionOrder"> | number
    wastePercent?: FloatWithAggregatesFilter<"ProductionOrder"> | number
    status?: StringWithAggregatesFilter<"ProductionOrder"> | string
    notes?: StringNullableWithAggregatesFilter<"ProductionOrder"> | string | null
    totalMaterialCost?: FloatNullableWithAggregatesFilter<"ProductionOrder"> | number | null
    executedAt?: DateTimeNullableWithAggregatesFilter<"ProductionOrder"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ProductionOrder"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ProductionOrder"> | Date | string
  }

  export type ProductionOrderLineWhereInput = {
    AND?: ProductionOrderLineWhereInput | ProductionOrderLineWhereInput[]
    OR?: ProductionOrderLineWhereInput[]
    NOT?: ProductionOrderLineWhereInput | ProductionOrderLineWhereInput[]
    id?: StringFilter<"ProductionOrderLine"> | string
    orderId?: StringFilter<"ProductionOrderLine"> | string
    itemId?: StringNullableFilter<"ProductionOrderLine"> | string | null
    itemName?: StringFilter<"ProductionOrderLine"> | string
    isAddOn?: BoolFilter<"ProductionOrderLine"> | boolean
    ingredientCategory?: StringNullableFilter<"ProductionOrderLine"> | string | null
    recipePercent?: FloatFilter<"ProductionOrderLine"> | number
    adjustedQuantityGm?: FloatFilter<"ProductionOrderLine"> | number
    unitPrice?: FloatNullableFilter<"ProductionOrderLine"> | number | null
    lineCost?: FloatNullableFilter<"ProductionOrderLine"> | number | null
    order?: XOR<ProductionOrderScalarRelationFilter, ProductionOrderWhereInput>
  }

  export type ProductionOrderLineOrderByWithRelationInput = {
    id?: SortOrder
    orderId?: SortOrder
    itemId?: SortOrderInput | SortOrder
    itemName?: SortOrder
    isAddOn?: SortOrder
    ingredientCategory?: SortOrderInput | SortOrder
    recipePercent?: SortOrder
    adjustedQuantityGm?: SortOrder
    unitPrice?: SortOrderInput | SortOrder
    lineCost?: SortOrderInput | SortOrder
    order?: ProductionOrderOrderByWithRelationInput
  }

  export type ProductionOrderLineWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProductionOrderLineWhereInput | ProductionOrderLineWhereInput[]
    OR?: ProductionOrderLineWhereInput[]
    NOT?: ProductionOrderLineWhereInput | ProductionOrderLineWhereInput[]
    orderId?: StringFilter<"ProductionOrderLine"> | string
    itemId?: StringNullableFilter<"ProductionOrderLine"> | string | null
    itemName?: StringFilter<"ProductionOrderLine"> | string
    isAddOn?: BoolFilter<"ProductionOrderLine"> | boolean
    ingredientCategory?: StringNullableFilter<"ProductionOrderLine"> | string | null
    recipePercent?: FloatFilter<"ProductionOrderLine"> | number
    adjustedQuantityGm?: FloatFilter<"ProductionOrderLine"> | number
    unitPrice?: FloatNullableFilter<"ProductionOrderLine"> | number | null
    lineCost?: FloatNullableFilter<"ProductionOrderLine"> | number | null
    order?: XOR<ProductionOrderScalarRelationFilter, ProductionOrderWhereInput>
  }, "id">

  export type ProductionOrderLineOrderByWithAggregationInput = {
    id?: SortOrder
    orderId?: SortOrder
    itemId?: SortOrderInput | SortOrder
    itemName?: SortOrder
    isAddOn?: SortOrder
    ingredientCategory?: SortOrderInput | SortOrder
    recipePercent?: SortOrder
    adjustedQuantityGm?: SortOrder
    unitPrice?: SortOrderInput | SortOrder
    lineCost?: SortOrderInput | SortOrder
    _count?: ProductionOrderLineCountOrderByAggregateInput
    _avg?: ProductionOrderLineAvgOrderByAggregateInput
    _max?: ProductionOrderLineMaxOrderByAggregateInput
    _min?: ProductionOrderLineMinOrderByAggregateInput
    _sum?: ProductionOrderLineSumOrderByAggregateInput
  }

  export type ProductionOrderLineScalarWhereWithAggregatesInput = {
    AND?: ProductionOrderLineScalarWhereWithAggregatesInput | ProductionOrderLineScalarWhereWithAggregatesInput[]
    OR?: ProductionOrderLineScalarWhereWithAggregatesInput[]
    NOT?: ProductionOrderLineScalarWhereWithAggregatesInput | ProductionOrderLineScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProductionOrderLine"> | string
    orderId?: StringWithAggregatesFilter<"ProductionOrderLine"> | string
    itemId?: StringNullableWithAggregatesFilter<"ProductionOrderLine"> | string | null
    itemName?: StringWithAggregatesFilter<"ProductionOrderLine"> | string
    isAddOn?: BoolWithAggregatesFilter<"ProductionOrderLine"> | boolean
    ingredientCategory?: StringNullableWithAggregatesFilter<"ProductionOrderLine"> | string | null
    recipePercent?: FloatWithAggregatesFilter<"ProductionOrderLine"> | number
    adjustedQuantityGm?: FloatWithAggregatesFilter<"ProductionOrderLine"> | number
    unitPrice?: FloatNullableWithAggregatesFilter<"ProductionOrderLine"> | number | null
    lineCost?: FloatNullableWithAggregatesFilter<"ProductionOrderLine"> | number | null
  }

  export type ProductionOrderCreateInput = {
    id: string
    productId: string
    productName: string
    unitWeightGm: number
    recipeVersionId: string
    recipeVersionNumber: number
    quantityUnits: number
    totalBatchWeightGm: number
    wastePercent: number
    status?: string
    notes?: string | null
    totalMaterialCost?: number | null
    executedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lines?: ProductionOrderLineCreateNestedManyWithoutOrderInput
  }

  export type ProductionOrderUncheckedCreateInput = {
    id: string
    productId: string
    productName: string
    unitWeightGm: number
    recipeVersionId: string
    recipeVersionNumber: number
    quantityUnits: number
    totalBatchWeightGm: number
    wastePercent: number
    status?: string
    notes?: string | null
    totalMaterialCost?: number | null
    executedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lines?: ProductionOrderLineUncheckedCreateNestedManyWithoutOrderInput
  }

  export type ProductionOrderUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    unitWeightGm?: FloatFieldUpdateOperationsInput | number
    recipeVersionId?: StringFieldUpdateOperationsInput | string
    recipeVersionNumber?: IntFieldUpdateOperationsInput | number
    quantityUnits?: IntFieldUpdateOperationsInput | number
    totalBatchWeightGm?: FloatFieldUpdateOperationsInput | number
    wastePercent?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    totalMaterialCost?: NullableFloatFieldUpdateOperationsInput | number | null
    executedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lines?: ProductionOrderLineUpdateManyWithoutOrderNestedInput
  }

  export type ProductionOrderUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    unitWeightGm?: FloatFieldUpdateOperationsInput | number
    recipeVersionId?: StringFieldUpdateOperationsInput | string
    recipeVersionNumber?: IntFieldUpdateOperationsInput | number
    quantityUnits?: IntFieldUpdateOperationsInput | number
    totalBatchWeightGm?: FloatFieldUpdateOperationsInput | number
    wastePercent?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    totalMaterialCost?: NullableFloatFieldUpdateOperationsInput | number | null
    executedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lines?: ProductionOrderLineUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type ProductionOrderCreateManyInput = {
    id: string
    productId: string
    productName: string
    unitWeightGm: number
    recipeVersionId: string
    recipeVersionNumber: number
    quantityUnits: number
    totalBatchWeightGm: number
    wastePercent: number
    status?: string
    notes?: string | null
    totalMaterialCost?: number | null
    executedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductionOrderUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    unitWeightGm?: FloatFieldUpdateOperationsInput | number
    recipeVersionId?: StringFieldUpdateOperationsInput | string
    recipeVersionNumber?: IntFieldUpdateOperationsInput | number
    quantityUnits?: IntFieldUpdateOperationsInput | number
    totalBatchWeightGm?: FloatFieldUpdateOperationsInput | number
    wastePercent?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    totalMaterialCost?: NullableFloatFieldUpdateOperationsInput | number | null
    executedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductionOrderUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    unitWeightGm?: FloatFieldUpdateOperationsInput | number
    recipeVersionId?: StringFieldUpdateOperationsInput | string
    recipeVersionNumber?: IntFieldUpdateOperationsInput | number
    quantityUnits?: IntFieldUpdateOperationsInput | number
    totalBatchWeightGm?: FloatFieldUpdateOperationsInput | number
    wastePercent?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    totalMaterialCost?: NullableFloatFieldUpdateOperationsInput | number | null
    executedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductionOrderLineCreateInput = {
    id: string
    itemId?: string | null
    itemName: string
    isAddOn?: boolean
    ingredientCategory?: string | null
    recipePercent: number
    adjustedQuantityGm: number
    unitPrice?: number | null
    lineCost?: number | null
    order: ProductionOrderCreateNestedOneWithoutLinesInput
  }

  export type ProductionOrderLineUncheckedCreateInput = {
    id: string
    orderId: string
    itemId?: string | null
    itemName: string
    isAddOn?: boolean
    ingredientCategory?: string | null
    recipePercent: number
    adjustedQuantityGm: number
    unitPrice?: number | null
    lineCost?: number | null
  }

  export type ProductionOrderLineUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemId?: NullableStringFieldUpdateOperationsInput | string | null
    itemName?: StringFieldUpdateOperationsInput | string
    isAddOn?: BoolFieldUpdateOperationsInput | boolean
    ingredientCategory?: NullableStringFieldUpdateOperationsInput | string | null
    recipePercent?: FloatFieldUpdateOperationsInput | number
    adjustedQuantityGm?: FloatFieldUpdateOperationsInput | number
    unitPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    lineCost?: NullableFloatFieldUpdateOperationsInput | number | null
    order?: ProductionOrderUpdateOneRequiredWithoutLinesNestedInput
  }

  export type ProductionOrderLineUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    itemId?: NullableStringFieldUpdateOperationsInput | string | null
    itemName?: StringFieldUpdateOperationsInput | string
    isAddOn?: BoolFieldUpdateOperationsInput | boolean
    ingredientCategory?: NullableStringFieldUpdateOperationsInput | string | null
    recipePercent?: FloatFieldUpdateOperationsInput | number
    adjustedQuantityGm?: FloatFieldUpdateOperationsInput | number
    unitPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    lineCost?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type ProductionOrderLineCreateManyInput = {
    id: string
    orderId: string
    itemId?: string | null
    itemName: string
    isAddOn?: boolean
    ingredientCategory?: string | null
    recipePercent: number
    adjustedQuantityGm: number
    unitPrice?: number | null
    lineCost?: number | null
  }

  export type ProductionOrderLineUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemId?: NullableStringFieldUpdateOperationsInput | string | null
    itemName?: StringFieldUpdateOperationsInput | string
    isAddOn?: BoolFieldUpdateOperationsInput | boolean
    ingredientCategory?: NullableStringFieldUpdateOperationsInput | string | null
    recipePercent?: FloatFieldUpdateOperationsInput | number
    adjustedQuantityGm?: FloatFieldUpdateOperationsInput | number
    unitPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    lineCost?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type ProductionOrderLineUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    itemId?: NullableStringFieldUpdateOperationsInput | string | null
    itemName?: StringFieldUpdateOperationsInput | string
    isAddOn?: BoolFieldUpdateOperationsInput | boolean
    ingredientCategory?: NullableStringFieldUpdateOperationsInput | string | null
    recipePercent?: FloatFieldUpdateOperationsInput | number
    adjustedQuantityGm?: FloatFieldUpdateOperationsInput | number
    unitPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    lineCost?: NullableFloatFieldUpdateOperationsInput | number | null
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

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
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

  export type ProductionOrderLineListRelationFilter = {
    every?: ProductionOrderLineWhereInput
    some?: ProductionOrderLineWhereInput
    none?: ProductionOrderLineWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ProductionOrderLineOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductionOrderCountOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    productName?: SortOrder
    unitWeightGm?: SortOrder
    recipeVersionId?: SortOrder
    recipeVersionNumber?: SortOrder
    quantityUnits?: SortOrder
    totalBatchWeightGm?: SortOrder
    wastePercent?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    totalMaterialCost?: SortOrder
    executedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductionOrderAvgOrderByAggregateInput = {
    unitWeightGm?: SortOrder
    recipeVersionNumber?: SortOrder
    quantityUnits?: SortOrder
    totalBatchWeightGm?: SortOrder
    wastePercent?: SortOrder
    totalMaterialCost?: SortOrder
  }

  export type ProductionOrderMaxOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    productName?: SortOrder
    unitWeightGm?: SortOrder
    recipeVersionId?: SortOrder
    recipeVersionNumber?: SortOrder
    quantityUnits?: SortOrder
    totalBatchWeightGm?: SortOrder
    wastePercent?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    totalMaterialCost?: SortOrder
    executedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductionOrderMinOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    productName?: SortOrder
    unitWeightGm?: SortOrder
    recipeVersionId?: SortOrder
    recipeVersionNumber?: SortOrder
    quantityUnits?: SortOrder
    totalBatchWeightGm?: SortOrder
    wastePercent?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    totalMaterialCost?: SortOrder
    executedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductionOrderSumOrderByAggregateInput = {
    unitWeightGm?: SortOrder
    recipeVersionNumber?: SortOrder
    quantityUnits?: SortOrder
    totalBatchWeightGm?: SortOrder
    wastePercent?: SortOrder
    totalMaterialCost?: SortOrder
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

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ProductionOrderScalarRelationFilter = {
    is?: ProductionOrderWhereInput
    isNot?: ProductionOrderWhereInput
  }

  export type ProductionOrderLineCountOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    itemId?: SortOrder
    itemName?: SortOrder
    isAddOn?: SortOrder
    ingredientCategory?: SortOrder
    recipePercent?: SortOrder
    adjustedQuantityGm?: SortOrder
    unitPrice?: SortOrder
    lineCost?: SortOrder
  }

  export type ProductionOrderLineAvgOrderByAggregateInput = {
    recipePercent?: SortOrder
    adjustedQuantityGm?: SortOrder
    unitPrice?: SortOrder
    lineCost?: SortOrder
  }

  export type ProductionOrderLineMaxOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    itemId?: SortOrder
    itemName?: SortOrder
    isAddOn?: SortOrder
    ingredientCategory?: SortOrder
    recipePercent?: SortOrder
    adjustedQuantityGm?: SortOrder
    unitPrice?: SortOrder
    lineCost?: SortOrder
  }

  export type ProductionOrderLineMinOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    itemId?: SortOrder
    itemName?: SortOrder
    isAddOn?: SortOrder
    ingredientCategory?: SortOrder
    recipePercent?: SortOrder
    adjustedQuantityGm?: SortOrder
    unitPrice?: SortOrder
    lineCost?: SortOrder
  }

  export type ProductionOrderLineSumOrderByAggregateInput = {
    recipePercent?: SortOrder
    adjustedQuantityGm?: SortOrder
    unitPrice?: SortOrder
    lineCost?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ProductionOrderLineCreateNestedManyWithoutOrderInput = {
    create?: XOR<ProductionOrderLineCreateWithoutOrderInput, ProductionOrderLineUncheckedCreateWithoutOrderInput> | ProductionOrderLineCreateWithoutOrderInput[] | ProductionOrderLineUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: ProductionOrderLineCreateOrConnectWithoutOrderInput | ProductionOrderLineCreateOrConnectWithoutOrderInput[]
    createMany?: ProductionOrderLineCreateManyOrderInputEnvelope
    connect?: ProductionOrderLineWhereUniqueInput | ProductionOrderLineWhereUniqueInput[]
  }

  export type ProductionOrderLineUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<ProductionOrderLineCreateWithoutOrderInput, ProductionOrderLineUncheckedCreateWithoutOrderInput> | ProductionOrderLineCreateWithoutOrderInput[] | ProductionOrderLineUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: ProductionOrderLineCreateOrConnectWithoutOrderInput | ProductionOrderLineCreateOrConnectWithoutOrderInput[]
    createMany?: ProductionOrderLineCreateManyOrderInputEnvelope
    connect?: ProductionOrderLineWhereUniqueInput | ProductionOrderLineWhereUniqueInput[]
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

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
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

  export type ProductionOrderLineUpdateManyWithoutOrderNestedInput = {
    create?: XOR<ProductionOrderLineCreateWithoutOrderInput, ProductionOrderLineUncheckedCreateWithoutOrderInput> | ProductionOrderLineCreateWithoutOrderInput[] | ProductionOrderLineUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: ProductionOrderLineCreateOrConnectWithoutOrderInput | ProductionOrderLineCreateOrConnectWithoutOrderInput[]
    upsert?: ProductionOrderLineUpsertWithWhereUniqueWithoutOrderInput | ProductionOrderLineUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: ProductionOrderLineCreateManyOrderInputEnvelope
    set?: ProductionOrderLineWhereUniqueInput | ProductionOrderLineWhereUniqueInput[]
    disconnect?: ProductionOrderLineWhereUniqueInput | ProductionOrderLineWhereUniqueInput[]
    delete?: ProductionOrderLineWhereUniqueInput | ProductionOrderLineWhereUniqueInput[]
    connect?: ProductionOrderLineWhereUniqueInput | ProductionOrderLineWhereUniqueInput[]
    update?: ProductionOrderLineUpdateWithWhereUniqueWithoutOrderInput | ProductionOrderLineUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: ProductionOrderLineUpdateManyWithWhereWithoutOrderInput | ProductionOrderLineUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: ProductionOrderLineScalarWhereInput | ProductionOrderLineScalarWhereInput[]
  }

  export type ProductionOrderLineUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<ProductionOrderLineCreateWithoutOrderInput, ProductionOrderLineUncheckedCreateWithoutOrderInput> | ProductionOrderLineCreateWithoutOrderInput[] | ProductionOrderLineUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: ProductionOrderLineCreateOrConnectWithoutOrderInput | ProductionOrderLineCreateOrConnectWithoutOrderInput[]
    upsert?: ProductionOrderLineUpsertWithWhereUniqueWithoutOrderInput | ProductionOrderLineUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: ProductionOrderLineCreateManyOrderInputEnvelope
    set?: ProductionOrderLineWhereUniqueInput | ProductionOrderLineWhereUniqueInput[]
    disconnect?: ProductionOrderLineWhereUniqueInput | ProductionOrderLineWhereUniqueInput[]
    delete?: ProductionOrderLineWhereUniqueInput | ProductionOrderLineWhereUniqueInput[]
    connect?: ProductionOrderLineWhereUniqueInput | ProductionOrderLineWhereUniqueInput[]
    update?: ProductionOrderLineUpdateWithWhereUniqueWithoutOrderInput | ProductionOrderLineUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: ProductionOrderLineUpdateManyWithWhereWithoutOrderInput | ProductionOrderLineUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: ProductionOrderLineScalarWhereInput | ProductionOrderLineScalarWhereInput[]
  }

  export type ProductionOrderCreateNestedOneWithoutLinesInput = {
    create?: XOR<ProductionOrderCreateWithoutLinesInput, ProductionOrderUncheckedCreateWithoutLinesInput>
    connectOrCreate?: ProductionOrderCreateOrConnectWithoutLinesInput
    connect?: ProductionOrderWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ProductionOrderUpdateOneRequiredWithoutLinesNestedInput = {
    create?: XOR<ProductionOrderCreateWithoutLinesInput, ProductionOrderUncheckedCreateWithoutLinesInput>
    connectOrCreate?: ProductionOrderCreateOrConnectWithoutLinesInput
    upsert?: ProductionOrderUpsertWithoutLinesInput
    connect?: ProductionOrderWhereUniqueInput
    update?: XOR<XOR<ProductionOrderUpdateToOneWithWhereWithoutLinesInput, ProductionOrderUpdateWithoutLinesInput>, ProductionOrderUncheckedUpdateWithoutLinesInput>
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

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ProductionOrderLineCreateWithoutOrderInput = {
    id: string
    itemId?: string | null
    itemName: string
    isAddOn?: boolean
    ingredientCategory?: string | null
    recipePercent: number
    adjustedQuantityGm: number
    unitPrice?: number | null
    lineCost?: number | null
  }

  export type ProductionOrderLineUncheckedCreateWithoutOrderInput = {
    id: string
    itemId?: string | null
    itemName: string
    isAddOn?: boolean
    ingredientCategory?: string | null
    recipePercent: number
    adjustedQuantityGm: number
    unitPrice?: number | null
    lineCost?: number | null
  }

  export type ProductionOrderLineCreateOrConnectWithoutOrderInput = {
    where: ProductionOrderLineWhereUniqueInput
    create: XOR<ProductionOrderLineCreateWithoutOrderInput, ProductionOrderLineUncheckedCreateWithoutOrderInput>
  }

  export type ProductionOrderLineCreateManyOrderInputEnvelope = {
    data: ProductionOrderLineCreateManyOrderInput | ProductionOrderLineCreateManyOrderInput[]
    skipDuplicates?: boolean
  }

  export type ProductionOrderLineUpsertWithWhereUniqueWithoutOrderInput = {
    where: ProductionOrderLineWhereUniqueInput
    update: XOR<ProductionOrderLineUpdateWithoutOrderInput, ProductionOrderLineUncheckedUpdateWithoutOrderInput>
    create: XOR<ProductionOrderLineCreateWithoutOrderInput, ProductionOrderLineUncheckedCreateWithoutOrderInput>
  }

  export type ProductionOrderLineUpdateWithWhereUniqueWithoutOrderInput = {
    where: ProductionOrderLineWhereUniqueInput
    data: XOR<ProductionOrderLineUpdateWithoutOrderInput, ProductionOrderLineUncheckedUpdateWithoutOrderInput>
  }

  export type ProductionOrderLineUpdateManyWithWhereWithoutOrderInput = {
    where: ProductionOrderLineScalarWhereInput
    data: XOR<ProductionOrderLineUpdateManyMutationInput, ProductionOrderLineUncheckedUpdateManyWithoutOrderInput>
  }

  export type ProductionOrderLineScalarWhereInput = {
    AND?: ProductionOrderLineScalarWhereInput | ProductionOrderLineScalarWhereInput[]
    OR?: ProductionOrderLineScalarWhereInput[]
    NOT?: ProductionOrderLineScalarWhereInput | ProductionOrderLineScalarWhereInput[]
    id?: StringFilter<"ProductionOrderLine"> | string
    orderId?: StringFilter<"ProductionOrderLine"> | string
    itemId?: StringNullableFilter<"ProductionOrderLine"> | string | null
    itemName?: StringFilter<"ProductionOrderLine"> | string
    isAddOn?: BoolFilter<"ProductionOrderLine"> | boolean
    ingredientCategory?: StringNullableFilter<"ProductionOrderLine"> | string | null
    recipePercent?: FloatFilter<"ProductionOrderLine"> | number
    adjustedQuantityGm?: FloatFilter<"ProductionOrderLine"> | number
    unitPrice?: FloatNullableFilter<"ProductionOrderLine"> | number | null
    lineCost?: FloatNullableFilter<"ProductionOrderLine"> | number | null
  }

  export type ProductionOrderCreateWithoutLinesInput = {
    id: string
    productId: string
    productName: string
    unitWeightGm: number
    recipeVersionId: string
    recipeVersionNumber: number
    quantityUnits: number
    totalBatchWeightGm: number
    wastePercent: number
    status?: string
    notes?: string | null
    totalMaterialCost?: number | null
    executedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductionOrderUncheckedCreateWithoutLinesInput = {
    id: string
    productId: string
    productName: string
    unitWeightGm: number
    recipeVersionId: string
    recipeVersionNumber: number
    quantityUnits: number
    totalBatchWeightGm: number
    wastePercent: number
    status?: string
    notes?: string | null
    totalMaterialCost?: number | null
    executedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductionOrderCreateOrConnectWithoutLinesInput = {
    where: ProductionOrderWhereUniqueInput
    create: XOR<ProductionOrderCreateWithoutLinesInput, ProductionOrderUncheckedCreateWithoutLinesInput>
  }

  export type ProductionOrderUpsertWithoutLinesInput = {
    update: XOR<ProductionOrderUpdateWithoutLinesInput, ProductionOrderUncheckedUpdateWithoutLinesInput>
    create: XOR<ProductionOrderCreateWithoutLinesInput, ProductionOrderUncheckedCreateWithoutLinesInput>
    where?: ProductionOrderWhereInput
  }

  export type ProductionOrderUpdateToOneWithWhereWithoutLinesInput = {
    where?: ProductionOrderWhereInput
    data: XOR<ProductionOrderUpdateWithoutLinesInput, ProductionOrderUncheckedUpdateWithoutLinesInput>
  }

  export type ProductionOrderUpdateWithoutLinesInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    unitWeightGm?: FloatFieldUpdateOperationsInput | number
    recipeVersionId?: StringFieldUpdateOperationsInput | string
    recipeVersionNumber?: IntFieldUpdateOperationsInput | number
    quantityUnits?: IntFieldUpdateOperationsInput | number
    totalBatchWeightGm?: FloatFieldUpdateOperationsInput | number
    wastePercent?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    totalMaterialCost?: NullableFloatFieldUpdateOperationsInput | number | null
    executedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductionOrderUncheckedUpdateWithoutLinesInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    unitWeightGm?: FloatFieldUpdateOperationsInput | number
    recipeVersionId?: StringFieldUpdateOperationsInput | string
    recipeVersionNumber?: IntFieldUpdateOperationsInput | number
    quantityUnits?: IntFieldUpdateOperationsInput | number
    totalBatchWeightGm?: FloatFieldUpdateOperationsInput | number
    wastePercent?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    totalMaterialCost?: NullableFloatFieldUpdateOperationsInput | number | null
    executedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductionOrderLineCreateManyOrderInput = {
    id: string
    itemId?: string | null
    itemName: string
    isAddOn?: boolean
    ingredientCategory?: string | null
    recipePercent: number
    adjustedQuantityGm: number
    unitPrice?: number | null
    lineCost?: number | null
  }

  export type ProductionOrderLineUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemId?: NullableStringFieldUpdateOperationsInput | string | null
    itemName?: StringFieldUpdateOperationsInput | string
    isAddOn?: BoolFieldUpdateOperationsInput | boolean
    ingredientCategory?: NullableStringFieldUpdateOperationsInput | string | null
    recipePercent?: FloatFieldUpdateOperationsInput | number
    adjustedQuantityGm?: FloatFieldUpdateOperationsInput | number
    unitPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    lineCost?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type ProductionOrderLineUncheckedUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemId?: NullableStringFieldUpdateOperationsInput | string | null
    itemName?: StringFieldUpdateOperationsInput | string
    isAddOn?: BoolFieldUpdateOperationsInput | boolean
    ingredientCategory?: NullableStringFieldUpdateOperationsInput | string | null
    recipePercent?: FloatFieldUpdateOperationsInput | number
    adjustedQuantityGm?: FloatFieldUpdateOperationsInput | number
    unitPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    lineCost?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type ProductionOrderLineUncheckedUpdateManyWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemId?: NullableStringFieldUpdateOperationsInput | string | null
    itemName?: StringFieldUpdateOperationsInput | string
    isAddOn?: BoolFieldUpdateOperationsInput | boolean
    ingredientCategory?: NullableStringFieldUpdateOperationsInput | string | null
    recipePercent?: FloatFieldUpdateOperationsInput | number
    adjustedQuantityGm?: FloatFieldUpdateOperationsInput | number
    unitPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    lineCost?: NullableFloatFieldUpdateOperationsInput | number | null
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