# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development
```bash
npm run start:dev       # Start with hot reload (watch mode)
npm run start           # Start normally
npm run build           # Compile TypeScript to dist/
npm run start:prod      # Run compiled production build
```

### Testing
```bash
npm test                # Run all unit tests (*.spec.ts)
npm run test:e2e        # Run end-to-end tests
npm test -- --testPathPattern=vendor  # Run tests matching a pattern
```

### Linting & Formatting
```bash
npm run lint            # ESLint check
npm run format          # Prettier format
```

### E2E Tests
```bash
npm run test:e2e                                                           # Run all e2e tests
npx jest --config test/jest-e2e.json --testPathPatterns=items             # Items suite only
npx jest --config test/jest-e2e.json --testPathPatterns=categories        # Categories suite only
npx jest --config test/jest-e2e.json --testPathPatterns=recipes           # Recipes suite only
npx jest --config test/jest-e2e.json --testPathPatterns=purchases         # Purchases suite only
npx jest --config test/jest-e2e.json --testPathPatterns=products          # Products suite only
npx jest --config test/jest-e2e.json --testPathPatterns=settings          # Settings suite only
npx jest --config test/jest-e2e.json --testPathPatterns=sales             # Sales suite only
```

E2E tests use the real databases and clean relevant tables before each suite. Test files live in `test/inventory/`, `test/recipe/`, `test/purchase/`, `test/settings/`, and `test/sales/`. The helper `test/helpers/app.setup.ts` bootstraps the full `AppModule` with identical global setup to `main.ts` and exports `cleanInventoryDb()`, `cleanRecipeDb()`, `cleanPurchaseDb()`, `cleanSettingsDb()`, and `cleanSalesDb()`.

**Important**: The `test:e2e` script runs with `--runInBand` (all suites in one process, sequentially). This is required because all suites share the same real databases — parallel execution causes `cleanXxxDb()` calls from one suite to corrupt in-flight data of another. Do not remove `--runInBand`.

Current totals: **148 tests** — 29 inventory items + 4 categories + 12 products + 32 recipe + 27 purchase + 7 settings + 37 sales.

### Database (Prisma — per module)
```bash
# Auth DB
npm run auth:db:generate    # Generate Prisma client
npm run auth:db:migrate     # Run migrations (dev)
npm run auth:db:deploy      # Deploy migrations (prod)
npm run auth:db:studio      # Open Prisma Studio

# Vendor DB
npm run vendor:db:generate
npm run vendor:db:migrate
npm run vendor:db:deploy
npm run vendor:db:studio

# Inventory DB
npm run inventory:db:generate
npm run inventory:db:migrate
npm run inventory:db:deploy
npm run inventory:db:studio

# Recipe DB
npm run recipe:db:generate
npm run recipe:db:migrate
npm run recipe:db:deploy
npm run recipe:db:studio

# Purchase DB
npm run purchase:db:generate
npm run purchase:db:migrate
npm run purchase:db:deploy
npm run purchase:db:studio

# Production DB
npm run production:db:generate
npm run production:db:migrate
npm run production:db:deploy
npm run production:db:studio

# Sales DB
npm run sales:db:generate
npm run sales:db:migrate
npm run sales:db:deploy
npm run sales:db:studio
```

## Architecture

This project follows **DDD + CQRS + Clean Architecture**. Each module is self-contained and isolated.

### Module Structure

Every feature module lives under `src/modules/{module}/` and is split into:

```
{module}/
├── shared/                    # NestJS module definition + public contracts
│   ├── {module}.module.ts
│   └── contracts/             # Public interface + DTOs for cross-module consumption
│       ├── {module}-facade.interface.ts
│       └── *.dto.ts
└── internal/
    ├── application/
    │   ├── commands/          # Write use cases (one folder per command)
    │   │   └── {command}/
    │   │       ├── {command}.command.ts
    │   │       └── {command}.handler.ts
    │   ├── queries/           # Read use cases (one folder per query)
    │   └── errors/            # Application-layer errors (extend ApplicationError)
    ├── domain/
    │   ├── aggregates/        # Aggregate root (business logic)
    │   ├── entities/
    │   ├── value-objects/
    │   ├── events/            # Domain events
    │   ├── errors/            # Domain-specific errors (aggregate-internal use only)
    │   └── repositories/      # Repository interfaces (contracts only)
    ├── infrastructure/
    │   ├── database/prisma/   # Prisma schema + generated client
    │   ├── repositories/      # Read + Write repository implementations
    │   ├── mappers/           # Domain ↔ DB entity conversion
    │   ├── facade/            # Facade implementation (when this module is consumed by others)
    │   ├── gateways/          # Outbound gateways (when this module consumes other modules)
    │   └── events/            # Event publisher implementations
    └── presentation/
        ├── controllers/       # One controller per endpoint
        └── dtos/              # Request/response DTOs with class-validator
```

### Multi-Database Design

Each module has its own PostgreSQL database and Prisma client:

| Module    | Database               | Env Var                   |
|-----------|------------------------|---------------------------|
| Auth      | `sakura_users_db`      | `AUTH_DATABASE_URL`       |
| Vendor    | `sakura_vendor_db`     | `VENDOR_DATABASE_URL`     |
| Inventory | `sakura_inventory_db`  | `INVENTORY_DATABASE_URL`  |
| Recipe    | `sakura_recipe_db`     | `RECIPE_DATABASE_URL`     |
| Purchase   | `sakura_purchase_db`    | `PURCHASE_DATABASE_URL`   |
| Production | `sakura_production_db`  | `PRODUCTION_DATABASE_URL` |
| Sales      | `sakura_sales_db`       | `SALES_DATABASE_URL`      |

Prisma schemas and generated clients live inside each module's infrastructure directory, not at the project root.

### Shared Abstractions (`src/shared/`)

- `domain/`: Base classes — `AggregateRoot<T>`, `Entity<T>`, `ValueObject<T>`, `DomainEvent`, `IntegrationEvent`; contracts — `IEventBus`, `ILogger`, `IIdGenerator`; error base classes — `DomainError`, `NotFoundDomainError` (maps to HTTP 404)
- `application/`: `CommandHandlerBase`, `ServiceBase`, `FacadeBase`; error hierarchy — `ApplicationError`, `BadRequestError`, `NotFoundError`, `ConflictError` (→ 409), `UnauthorizedError`. **Module-level contracts** (facade interfaces + shared DTOs) live in `{module}/shared/contracts/`, not here.
- `infrastructure/`: `NestLogger`, `UuidGenerator`, global error filters

### Key Patterns

- **CQRS**: Commands (write) and Queries (read) have separate handlers and separate repository implementations (`UserRepository` vs `ReadUserRepository`).
- **Value Objects**: All domain primitives are wrapped (e.g., `VendorName`, `Email`, `Password`) with validation at construction time.
- **Domain Errors**: Business rule violations inside aggregates/entities throw typed domain errors (e.g., `PurchaseOrderNotEditableError`). These propagate naturally through the global filter: `NotFoundDomainError` → 404, `DomainError` → 409. Domain errors are **aggregate-internal only** — application handlers never import or throw them.
- **Application-Layer Errors**: Every module has `internal/application/errors/` with module-specific classes extending `NotFoundError` (→ 404) or `ConflictError` (→ 409). Handlers are orchestrators and must only throw `ApplicationError` subclasses for orchestration concerns (entity-not-found checks, duplicate guards, etc.).
- **Cross-Module Communication (Facade Pattern)**: When Module A needs to call Module B:
  1. Module B publishes `IXxxFacade` interface + shared DTOs in `shared/contracts/`
  2. Module B implements `XxxFacade` in `internal/infrastructure/facade/` and exports only the interface token
  3. Module A creates `XxxGateway` in `internal/infrastructure/gateways/` that injects `IXxxFacade`
  4. Module A's application handlers use the gateway — zero direct dependency on Module B internals
- **Dependency Injection via interfaces**: Handlers depend on repository/service *interfaces* (e.g., `IVendorRepository`), not concrete classes.

### Security (`src/modules/security/`)

- `JwtAuthGuard`: Validates JWT tokens on protected routes
- `RolesGuard` + `@Roles()` decorator: Role-based access control
- `@CurrentUser()` decorator: Injects authenticated user into controller handlers

### API

- Global prefix: `/api`
- Versioning: URI-based, default `v1` → routes at `/api/v1/...`
- Swagger UI: Available at `/api` in development
- Global `ValidationPipe` with `whitelist: true`, `transform: true`, `forbidNonWhitelisted: true`

### Key Domain Concepts

- **Product aggregate** (`inventory` module): Groups FINAL_PRODUCT size variants under one formula identity. Recipe links to `Product.id`, not to a specific Item. `Item.productId` FK (nullable) links each variant to its parent Product.
- **PackagingBOM** (`inventory` module): `PackagingComponent` records per FINAL_PRODUCT variant define which PACKAGING items and qty per unit to deduct during FillingOrder execution. Managed via `PUT /inventory/items/:id/packaging-bom`.
- **AddonBOM** (`inventory` module): `AddonComponent` records per FINAL_PRODUCT variant link a recipe add-on category (e.g. `fragrance`) to a concrete RAW_MATERIAL inventory item. Managed via `PUT /inventory/items/:id/addon-bom`. No qty stored — derived from recipe percentage at runtime. Visible in `GET /inventory/items/:id` response.
- **Add-on ingredients** (`recipe` module): Recipe ingredients with `isAddOn: true` have `ingredientCategory` (e.g. `fragrance`) instead of `itemId`. They carry a `resolutionPhase: 'BULK' | 'FILLING'` (default `FILLING`) that determines when the ingredient is deducted. The recipe `RecipeFacade` exposes all ingredients including add-ons.
- **WAUP (Weighted Average Unit Price)**: Running average on Item, updated on each RESTOCK that includes a `unitPrice`: `newWAUP = (oldStock × oldWAUP + newQty × newPrice) / (oldStock + newQty)`. Computed O(1) per restock, not on read. The `PUT /inventory/items/:id/restock` endpoint accepts optional `unitPrice`.
- **Two-phase production**:
  - **Phase 1 — ProductionOrder** (bulk): accepts `addonResolutions[]` (which concrete item to use per add-on category). Deducts base ingredients + BULK-phase add-ons scaled by `batchWeightGm × (pct/100) × (1 + waste%)`, then upserts `BulkStock.availableGm += batchWeightGm`.
  - **Phase 2 — FillingOrder** (fill): validates `bulkUsedGm ≤ BulkStock.availableGm`, deducts bulk, restocks variant items, deducts PackagingBOM components per unit filled, and deducts FILLING-phase add-ons per variant's AddonBOM.
- **BulkStock**: Per-Product entity in `production` DB tracking available bulk grams.
- **COGS pricing** (`sales` module): `GET /sales/pricing/item/:itemId` computes per-unit cost breakdown including `addonCostPerUnit` (from AddonBOM × recipe % × WAUP). PR #9.
- **SHIPPING_PACKAGING**: ItemType for boxes/bags/flyers used in sales orders alongside FINAL_PRODUCT.

### Module Implementation Status

- **Auth**: Complete (login, user CRUD)
- **Vendor**: Complete (CRUD, activate/deactivate)
- **Security**: Complete (JWT + RBAC)
- **Inventory**: Complete — 4 item types, categories, Product aggregate, PackagingBOM, AddonBOM (`PUT /inventory/items/:id/addon-bom`), restock/deduct with WAUP (unitPrice now exposed on HTTP restock), immutable transaction audit trail, soft-delete (archive). `GET /inventory/items/:id` returns `addonComponents[]`. E2E tested (29 tests).
- **Recipe**: Complete — formula/BOM management with version lifecycle (DRAFT → ACTIVE → ARCHIVED), w/w% percentage quantities, add-on placeholders with `ingredientCategory` + `resolutionPhase` (BULK/FILLING), 100% base formula validation at activation. Links to Product aggregate (not Item). `GET /recipes/:id` returns `resolutionPhase` per ingredient. E2E tested (32 tests).
- **Purchase**: Complete — procurement management with PO lifecycle (DRAFT → CONFIRMED → RECEIVED + CANCELLED), vendor snapshot, item validation (RAW_MATERIAL/PACKAGING only), auto-restock on receive with vendorId + unitPrice propagation to InventoryTransaction. Cross-module integration via `IInventoryFacade` (facade pattern). E2E tested (27 tests).
- **Production**: Complete — two-phase production: ProductionOrder (bulk batch, supports `addonResolutions[]` for BULK add-on deduction) + FillingOrder (fill into variants, deducts FILLING add-ons via AddonBOM). BulkStock tracks available bulk grams per Product. Cross-module integration via `IInventoryFacade` + `IRecipeFacade`. No E2E tests yet.
- **Sales**: Complete — sell FINAL_PRODUCT and SHIPPING_PACKAGING with lifecycle (DRAFT → CONFIRMED → SHIPPED + CANCELLED). Invoice number + payment status (PENDING/PAID). Gift line support. Discount codes (PERCENT + FIXED_AMOUNT). COGS pricing includes `addonCostPerUnit`. Cross-module integration via `IInventoryFacade` + `IRecipeFacade` + `ISettingsFacade`. E2E tested (37 tests).

**Total E2E tests: 148** (inventory 29 + recipe 32 + purchase 27 + settings 7 + products 12 + sales 37 + categories 4)
