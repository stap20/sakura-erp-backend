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
npm run test:e2e                                                        # Run all e2e tests
npx jest --config test/jest-e2e.json --testPathPattern=items            # Items suite only
npx jest --config test/jest-e2e.json --testPathPattern=categories       # Categories suite only
```

E2E tests use the real database and clean all inventory tables before each suite (`cleanInventoryDb()`). Test files live in `test/inventory/`. The helper `test/helpers/app.setup.ts` bootstraps the full `AppModule` with identical global setup to `main.ts`.

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
```

## Architecture

This project follows **DDD + CQRS + Clean Architecture**. Each module is self-contained and isolated.

### Module Structure

Every feature module lives under `src/modules/{module}/` and is split into:

```
{module}/
├── shared/                    # NestJS module definition
│   └── {module}.module.ts
└── internal/
    ├── application/
    │   ├── commands/          # Write use cases (one folder per command)
    │   │   └── {command}/
    │   │       ├── {command}.command.ts
    │   │       └── {command}.handler.ts
    │   └── queries/           # Read use cases (one folder per query)
    ├── domain/
    │   ├── aggregates/        # Aggregate root (business logic)
    │   ├── entities/
    │   ├── value-objects/
    │   ├── events/            # Domain events
    │   ├── errors/            # Domain-specific errors
    │   └── repositories/      # Repository interfaces (contracts only)
    ├── infrastructure/
    │   ├── database/prisma/   # Prisma schema + generated client
    │   ├── repositories/      # Read + Write repository implementations
    │   ├── mappers/           # Domain ↔ DB entity conversion
    │   └── events/            # Event publisher implementations
    └── presentation/
        ├── controllers/       # One controller per endpoint
        └── dtos/              # Request/response DTOs with class-validator
```

### Multi-Database Design

Each module has its own PostgreSQL database and Prisma client:

| Module    | Database              | Env Var                  |
|-----------|-----------------------|--------------------------|
| Auth      | `sakura_users_db`     | `AUTH_DATABASE_URL`      |
| Vendor    | `sakura_vendor_db`    | `VENDOR_DATABASE_URL`    |
| Inventory | `sakura_inventory_db` | `INVENTORY_DATABASE_URL` |

Prisma schemas and generated clients live inside each module's infrastructure directory, not at the project root.

### Shared Abstractions (`src/shared/`)

- `domain/`: Base classes — `AggregateRoot<T>`, `Entity<T>`, `ValueObject<T>`, `DomainEvent`, `IntegrationEvent`; contracts — `IEventBus`, `ILogger`, `IIdGenerator`; error base classes — `DomainError`, `NotFoundDomainError` (maps to HTTP 404)
- `application/`: `CommandHandlerBase`, `ServiceBase`, `FacadeBase`; error hierarchy — `ApplicationError`, `BadRequestError`, `NotFoundError`, `UnauthorizedError`
- `infrastructure/`: `NestLogger`, `UuidGenerator`, global error filters

### Key Patterns

- **CQRS**: Commands (write) and Queries (read) have separate handlers and separate repository implementations (`UserRepository` vs `ReadUserRepository`).
- **Value Objects**: All domain primitives are wrapped (e.g., `VendorName`, `Email`, `Password`) with validation at construction time.
- **Domain Errors**: Business rule violations throw typed domain errors (e.g., `VendorAlreadyExistsError`), not raw HTTP exceptions. "Not found" errors extend `NotFoundDomainError` (→ 404); all other domain errors extend `DomainError` (→ 409).
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

### Module Implementation Status

- **Auth**: Complete (login, user CRUD)
- **Vendor**: Complete (CRUD, activate/deactivate)
- **Security**: Complete (JWT + RBAC)
- **Inventory**: Complete — 3 item types (RAW_MATERIAL, PACKAGING, FINAL_PRODUCT), categories, restock/deduct with immutable transaction audit trail, soft-delete (archive). E2E tested (28 tests).
