# Shared Module Structure & Implementation Details

This document provides a comprehensive walkthrough of the `src/shared` module file tree, detailing the specific implementations, dependencies, and responsibilities of each component.

## File Tree Walkthrough

```
├── application
│   ├── errors
│   │   ├── application.error.ts        # Abstract base class for all logical failures in use cases.
│   │   ├── bad-request.error.ts        # Specific error for invalid inputs (e.g. valid JSON but invalid logical data).
│   │   ├── notfound.error.ts           # Specific error when a resource ID does not exist.
│   │   └── unauthorized.error.ts       # Specific error for permission failures.
│   ├── command.handler.base.ts         # Abstract class standardizing how Commands are executed.
│   ├── command.interface.ts            # Marker interface ensuring all Commands follow the same shape.
│   ├── event-handler.base.ts           # Abstract class that auto-subscribes to the EventBus on module init.
│   ├── query.handler.interface.ts      # Interface defining the input/output types for Query Handlers.
│   ├── query.interface.ts              # Interface ensuring strict typing for Query objects.
│   └── service.base.ts                 # Abstract class providing shared infrastructure (like Logger) to Services.
├── domain
│   ├── contracts
│   │   ├── event-bus.interface.ts      # Port: Decouples Domain from the specific Event Emitter implementation (NestJS vs RabbitMQ).
│   │   └── logger.interface.ts         # Port: Decouples Domain from Console/Winston/Pino implementations.
│   ├── errors
│   │   └── domain.error.ts             # Abstract base class for Business Rule violations (e.g., "Invoice already paid").
│   ├── events
│   │   ├── domain-event.ts             # Base class for internal system events (includes ID, Timestamp, Metadata).
│   │   └── integration-event.ts        # Base class for events meant for external systems.
│   ├── value-objects
│   │   ├── value-object.ts             # Base class implementing `equals()` via structural quality (JSON comparison).
│   │   └── value-validator.ts          # Static utility class containing common regex patterns (Email, UUID, Credit Card).
│   ├── aggregate-root.ts               # Base class managing the lifecycle of Domain Events (Aggregate holds them until commit).
│   └── entity.ts                       # Base class implementing `equals()` via ID comparison.
└── infrastructure
    ├── decorators                      
    │   # Contains custom decorators like @Roles() or @CurrentUser() to keep controllers clean.
    ├── errors
    │   ├── database.error.ts           # Wraps ORM/SQL errors to prevent leaking database details to the client.
    │   ├── external-service.error.ts   # Wraps failures from HTTP calls to other microservices/APIs.
    │   └── infrastructure.error.ts     # Generic catch-all for system-level failures.
    ├── event
    │   └── nest-event-bus.ts           # [Implementation Detail] Uses `EventEmitter2` from `@nestjs/event-emitter`.
    ├── facades
    │   └── facade.base.ts              # Base class for Facades, simplifying complex subsystem interactions.
    ├── filters
    │   ├── global-error.filter.ts      # [Implementation Detail] The central exception handler.
    │   ├── prisma-known-exception.filter.ts   # [Implementation Detail] Maps P-codes to HTTP statuses.
    │   └── prisma-unknown-exception.filter.ts # Handles unexpected DB crashes.
    ├── jobs
    │   ├── cron-job-config.interface.ts # Type definition for cron schedules (`cronExpression`) and job names.
    │   ├── cron-job.base.ts             # [Implementation Detail] Wrapper around `cron` package.
    │   ├── nest-schedule-registry.ts    # Adapter for NestJS `SchedulerRegistry`.
    │   └── schedule-registry.interface.ts # Port for job scheduling.
    └── logger
        └── nest-logger.ts               # [Implementation Detail] Wrapper around standard `@nestjs/common` Logger.
```

---

## Key Infrastructure Implementations

### 1. Logger (`nest-logger.ts`)
*   **Dependency**: `@nestjs/common` -> `Logger` service.
*   **Mechanism**: It adapts the standard NestJS logger into our `ILogger` interface.
*   **Why**: This allows us to swap the logger later (e.g., to Winston or Pino for JSON logging in production) without changing a single line of code in the Domain or Application layers, as they only depend on `ILogger`.

### 2. Event System
#### Event Bus (`nest-event-bus.ts`)
*   **Dependency**: `@nestjs/event-emitter`.
*   **Mechanism**: Implements `IEventBus`. It uses the underlying synchronous/asynchronous node event emitter.
*   **Significance**: It decouples the publisher (Domain/Application) from the subscriber. A command handler creating an "Invoice Sent" event doesn't need to know *who* is listening (Email Service, Analytics, etc.).

#### Event Handlers (`event-handler.base.ts`)
*   **Mechanism**: Abstract class that enforces defining `handle(event)`.
*   **Lifecycle**: Auto-subscribes to the specific Event Name during the Module Initialization phase.

### 3. Cron Jobs (`cron-job.base.ts`)
*   **Dependencies**: 
    *   `cron` (npm package)
    *   `@nestjs/schedule`
*   **Mechanism**:
    *   The `CronJobBase` abstract class handles the boilerplate of creating a `CronJob` instance.
    *   It automatically registers the job with the `NestScheduleRegistry` so it can be managed (started/stopped) via API if needed.
    *   It wraps the `execute()` method in a try-catch block to ensure one failed job run doesn't crash the process, and logs the execution duration.

### 4. Exception Filters (`filters/*.ts`)
The error handling strategy depends on three filters working together:

#### Global Exception Filter (`global-error.filter.ts`)
*   **Scope**: Catch-all for standard application errors.
*   **Mapping Logic**:
    *   `DomainError` → **409 Conflict** (Business rule violation).
    *   `BadRequestError` → **400 Bad Request** (Invalid input).
    *   `UnauthorizedError` → **401 Unauthorized**.
    *   `NotFoundError` → **404 Not Found**.
    *   `InfrastructureError` (or unknown) → **500 Internal Server Error**.

#### Prisma Known Exception Filter (`prisma-known-exception.filter.ts`)
*   **Scope**: Catches `PrismaClientKnownRequestError` (errors with specific "P" codes).
*   **Mapping Logic**:
    *   `P2002` (Unique Constraint) → **409 Conflict** (e.g., "Email already exists").
    *   `P2025` (Record Not Found) → **404 Not Found**.
    *   `P2000` (Value too long) → **400 Bad Request**.
    *   `P1001` (Connection Error) → **503 Service Unavailable**.

#### Prisma Unknown Exception Filter (`prisma-unknown-exception.filter.ts`)
*   **Scope**: Catches `PrismaClientUnknownRequestError`.
*   **Action**: Logs the full error with user context and returns a specific **500 Internal Server Error** with code `UNKNOWN_DATABASE_ERROR`.
