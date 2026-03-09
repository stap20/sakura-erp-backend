# Inventory Module Implementation Plan

This document outlines the implementation plan for the **Inventory Module**, adhering strictly to the highly decoupled **Domain-Driven Design (DDD), Command Query Responsibility Segregation (CQRS), and Clean Architecture** patterns requested. It incorporates an enterprise-grade stock ledger architecture and mirrors the exact coding style of the reference `ticket` module.

## 1. Overview and Architecture

The new module will be created at `src/modules/inventory`. It manages items (raw materials, packaging, finished products), raw material categories, vendors, and inventory transactions.

### Architectural Rules Enforced

1. **Controller Per Endpoint**: Every REST endpoint gets its own isolated controller.
2. **DTO Per Request/Response**: Isolated Data Transfer Objects for the presentation layer (`.request.dto.ts` and `.response.dto.ts`).
3. **Command/Query Per Use Case**: Application layer maintains isolated commands/queries, their handlers, and specific internal responses (`.command.ts`, `.handler.ts`, `.response.ts`).
4. **Explicit Domain Errors**: Use of an `errors/` directory for domain-specific exceptions.
5. **Domain Events**: Dispatched by aggregates and handled in an `event-handlers/` layer (e.g., when stock crosses a threshold).

## 2. Core Concepts & Requirements

### 2.1 Item Definition

Users must define an item before stock can be added.

- **Initial stock value**: 0
- **Constraint**: Stock changes **only** through inventory transactions (Restock / Deduction).

### 2.2 Item Types

| Type                 | Description                                                       |
| -------------------- | ----------------------------------------------------------------- |
| `Raw Material`       | Ingredients used in cosmetics manufacturing. Requires a category. |
| `Packaging Material` | Bottles, caps, labels, boxes.                                     |
| `Finished Product`   | Final product ready for sale.                                     |

### 2.3 Functional Requirements Summary

- **Create/Edit Item**: Define Name, Type, Vendor, Price, Unit of Measure, Category (if Raw Material). `Item Type` cannot be edited once transactions exist.
- **Archive Item**: Items cannot be hard-deleted if transactions exist; they must be archived.
- **Inventory Transactions**:
    - `RESTOCK`: Adds quantity.
    - `DEDUCT`: Removes quantity. Stock cannot become negative.
- **Stock Tracking**: Full traceability required. Every transaction must log the User, Date, Quantity, Prior/New Stock, and Notes.
- **Views**:
    - Item List View with advanced filtering (Name, Vendor, Type, Category, Stock Status).
    - Item Detail View (Item info, current stock, last restock/deduction dates, transaction history).
    - Transaction History logs.

### 2.4 Data Models

- **Item**: `id`, `name`, `type`, `unit_measure`, `vendor_id`, `price`, `category_id`, `created_at`
- **Stock**: Implemented as materialized `current_quantity` on the `Item` aggregate for performance.
- **InventoryTransaction**: `id`, `item_id`, `type`, `quantity`, `previous_stock`, `new_stock`, `vendor_id`, `notes`, `created_by`, `created_at`
- **RawMaterialCategory**: `id`, `name`
- **Vendor**: `id`, `name`, `contact` (Will likely be managed externally via Gateway or reference locally).

### 2.5 Edge Cases Handled By Domain

| Scenario                                      | Handling                         | Layer Responsibility                                                  |
| --------------------------------------------- | -------------------------------- | --------------------------------------------------------------------- |
| Deduct more than available                    | Reject transaction               | Domain (`Item.deductStock()`) throwing `InsufficientStockError`       |
| Delete item with stock history                | Prevent deletion                 | Application (`ArchiveItemHandler` replaces hard delete)               |
| Change unit measure / type after transactions | Prevent change                   | Domain (`Item.updateDetails()`) throwing `InvalidItemTypeChangeError` |
| Vendor removed                                | Keep reference but mark inactive | External Gateway / Application logic                                  |

## 3. Directory Structure

```text
src/modules/inventory/
├── internal/
│   ├── presentation/
│   │   ├── controllers/
│   │   │   ├── item/
│   │   │   │   ├── create-item.controller.ts
│   │   │   │   ├── update-item.controller.ts
│   │   │   │   ├── archive-item.controller.ts
│   │   │   │   ├── get-item.controller.ts
│   │   │   │   └── get-all-items.controller.ts
│   │   │   ├── inventory-transaction/
│   │   │   │   ├── restock-item.controller.ts
│   │   │   │   ├── deduct-item.controller.ts
│   │   │   │   └── get-inventory-transactions.controller.ts
│   │   │   └── category/
│   │   │       ├── create-category.controller.ts
│   │   │       └── get-categories.controller.ts
│   │   └── dtos/
│   │       ├── item/
│   │       │   ├── create-item.request.dto.ts
│   │       │   ├── create-item.response.dto.ts
│   │       │   ├── update-item.request.dto.ts
│   │       │   ├── update-item.response.dto.ts
│   │       │   ├── get-item.request.dto.ts
│   │       │   ├── get-item.response.dto.ts
│   │       │   ├── get-all-items.request.dto.ts
│   │       │   └── get-all-items.response.dto.ts
│   │       ├── inventory-transaction/
│   │       │   ├── restock-item.request.dto.ts
│   │       │   ├── restock-item.response.dto.ts
│   │       │   ├── deduct-item.request.dto.ts
│   │       │   └── deduct-item.response.dto.ts
│   │       └── category/
│   │           ├── create-category.request.dto.ts
│   │           └── get-categories.response.dto.ts
│   ├── application/
│   │   ├── commands/
│   │   │   ├── item/
│   │   │   │   ├── create-item/
│   │   │   │   │   ├── create-item.command.ts
│   │   │   │   │   ├── create-item.handler.ts
│   │   │   │   │   └── create-item.response.ts
│   │   │   │   ├── update-item/
│   │   │   │   └── archive-item/
│   │   │   ├── inventory-transaction/
│   │   │   │   ├── restock-item/
│   │   │   │   │   ├── restock-item.command.ts
│   │   │   │   │   └── restock-item.handler.ts
│   │   │   │   └── deduct-item/
│   │   │   └── category/
│   │   │       └── create-category/
│   │   ├── queries/
│   │   │   ├── item/
│   │   │   │   ├── get-item/
│   │   │   │   └── get-all-items/
│   │   │   ├── inventory-transaction/
│   │   │   │   └── get-inventory-transactions/
│   │   │   └── category/
│   │   │       └── get-categories/
│   │   ├── errors/
│   │   │   ├── insufficient-stock.error.ts
│   │   │   ├── item-not-found.error.ts
│   │   │   └── invalid-item-type-change.error.ts
│   │   └── event-handlers/
│   │       └── stock-threshold-reached.handler.ts
│   ├── domain/
│   │   ├── aggregates/
│   │   │   ├── item.aggregate.ts
│   │   │   └── inventory-transaction.aggregate.ts
│   │   ├── entities/
│   │   │   ├── category.entity.ts
│   │   │   └── vendor.entity.ts
│   │   ├── value-objects/
│   │   │   ├── stock-quantity.value-object.ts
│   │   │   └── unit-price.value-object.ts
│   │   ├── events/
│   │   │   └── stock-threshold-reached.event.ts
│   │   └── enums/
│   │       ├── item-type.enum.ts
│   │       ├── stock-status.enum.ts
│   │       └── transaction-type.enum.ts
│   └── infrastructure/
│       ├── repositories/
│       │   ├── item.repository.ts
│       │   ├── read-item.repository.ts
│       │   └── inventory-transaction.repository.ts
│       └── mappers/
│           ├── item.mapper.ts
│           └── inventory-transaction.mapper.ts
└── inventory.module.ts
```

## 4. Detailed Component Plan

### 4.1 Domain Layer

- **`item.aggregate.ts`**: The root aggregate. Holds materialized `stockQuantity`. Contains domain logic: `deductStock(quantity)` checks if `stockQuantity - quantity < 0`. If true, it throws `InsufficientStockError`.
- **`inventory-transaction.aggregate.ts`**: Append-only ledger entry. Represents the immutable `RESTOCK` or `DEDUCT` events.
- **`stock-threshold-reached.event.ts`**: Dispatched by `Item` when stock hits the low threshold (useful for the "Notifications (Optional)" requirement).

### 4.2 Application Layer (CQRS + Errors + Events)

- **Commands / Queries**:
    - Ex: `RestockItemHandler` takes `RestockItemCommand`. It retrieves the `Item`, invokes `.addStock(qty)`, creates an `InventoryTransaction`, and saves both atomically via a database transaction.
- **Errors**:
    - `InsufficientStockError`: Thrown by the Domain when a deduction exceeds available stock.
    - `ItemNotFoundError`: Thrown by the Application layer when a repository query fails to find an ID.
    - `InvalidItemTypeChangeError`: Thrown by the Domain if an attempt is made to alter `itemType` when transactions already exist.
- **Event Handlers**:
    - `StockThresholdReachedHandler`: Listens for `StockThresholdReachedEvent` and logs/notifies the required personnel.

### 4.3 Presentation Layer

- **Controllers**:
    - `restock-item.controller.ts`: Maps `POST /inventory/restock`. Receives `RestockItemRequestDto`. Dispatches `RestockItemCommand`. Returns `RestockItemResponseDto`.
    - `get-all-items.controller.ts`: Maps `GET /inventory/items`. Receives `GetAllItemsRequestDto` (containing query filters like `vendorId`, `itemType`, `stockStatus`). Dispatches `GetAllItemsQuery`. Returning paginated results.

### 4.4 Infrastructure Layer

- **Write Repositories (`ItemRepository`)**: Used exclusively by Command Handlers to persist changes to Aggregates. Performs DB Transactions connecting `Item` updates and `InventoryTransaction` creation.
- **Read Repositories (`ReadItemRepository`)**: Used by Query Handlers to construct heavy join queries for the front-end views (fetching Items alongside their last deduction/restock dates, categories, etc.).

## 5. Verification Plan

### Automated Tests

- **Domain Layer Unit Tests**:
    - Execute using `npm run test` (assuming Jest config is present).
    - Verify `Item.deductStock()` updates quantity correctly.
    - Verify `Item.deductStock()` throws `InsufficientStockError` on overdrawing.
    - Verify changing `ItemType` with existing transaction history throws `InvalidItemTypeChangeError`.
- **Integration Tests**:
    - Validate the `RestockItemHandler` successfully inserts an `InventoryTransaction` and updates `Item` stock atomically.

### Manual Verification Workflow

1. Start the server: `npm run start:dev`.
2. **Setup**: Call `CreateCategoryController` to create "Oils".
3. **Item Creation**: Call `CreateItemController` to add "Coconut Oil" linked to the created category. Verify initial stock is 0.
4. **Restock Operation**: Call `RestockItemController` with quantity 100 on the new item's ID.
    - Verify success response.
    - Verify `GetItemController` now shows stock 100.
5. **Deduct Operation**: Call `DeductItemController` with quantity 5.
    - Verify `GetItemController` now shows stock 95.
6. **Edge Case Verification**: Call `DeductItemController` with quantity 200.
    - Verify HTTP 400 with the `InsufficientStockError` detail occurs.
7. **Read Operations**: Call `GetAllItemsController` applying `?stockStatus=In Stock` and verify correct pagination logic.
