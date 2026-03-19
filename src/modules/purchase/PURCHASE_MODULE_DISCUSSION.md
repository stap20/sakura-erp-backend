# Purchase Module — Design Discussion

Sakura ERP · Cosmetics Factory · Procurement Management

---

## 1. Purpose

The **Purchase Module** manages procurement of RAW_MATERIAL and PACKAGING inventory
items from vendors. A Purchase Order (PO) tracks what was ordered, from whom, at what
price, and when received. Upon receipt, inventory is automatically restocked — including
`vendorId` and `unitPrice` on the InventoryTransaction for full audit trail.

---

## 2. Entity Relationship Diagram

```mermaid
erDiagram
    PurchaseOrder {
        string id PK
        string vendorId "denormalized ref to Vendor"
        string vendorName "snapshot at creation"
        string status "DRAFT | CONFIRMED | RECEIVED | CANCELLED"
        string notes
        datetime expectedDeliveryDate
        datetime receivedAt
        datetime createdAt
        datetime updatedAt
    }

    PurchaseOrderLine {
        string id PK
        string orderId FK
        string itemId "denormalized ref to Inventory Item"
        string itemName "snapshot from Inventory at add-line time"
        decimal quantity "units ordered"
        decimal unitPrice "price per unit"
    }

    PurchaseOrder ||--o{ PurchaseOrderLine : "contains"
```

> **Cross-module references**: `vendorId` is a string reference to Vendor module (client-provided
> snapshot of `vendorName`). `itemId` is validated against Inventory at write time and `itemName`
> is snapshotted automatically.

---

## 3. Purchase Order Lifecycle

```mermaid
stateDiagram-v2
    [*] --> DRAFT : CreatePurchaseOrder

    DRAFT --> DRAFT : AddLine / RemoveLine\nUpdateLine / UpdateNotes
    DRAFT --> CONFIRMED : ConfirmPurchaseOrder\n(locked — no more edits)
    DRAFT --> CANCELLED : CancelPurchaseOrder

    CONFIRMED --> RECEIVED : ReceivePurchaseOrder\n(auto-restocks inventory)
    CONFIRMED --> CANCELLED : CancelPurchaseOrder

    RECEIVED --> [*] : terminal — read only
    CANCELLED --> [*] : terminal — read only

    note right of DRAFT
        Fully editable
        Lines can be added,
        updated, or removed
    end note

    note right of CONFIRMED
        Locked — sent to vendor
        No edits allowed
    end note

    note right of RECEIVED
        Items arrived
        Inventory restocked
        InventoryTransaction created
        per line with vendorId + unitPrice
    end note
```

---

## 4. Receive PO — Sequence Flow

```mermaid
sequenceDiagram
    actor User
    participant Controller
    participant ReceiveHandler
    participant PurchaseRepo
    participant RestockHandler
    participant InventoryRepo
    participant PurchaseDB
    participant InventoryDB

    User->>Controller: POST /purchases/:id/receive
    Controller->>ReceiveHandler: ReceivePurchaseOrderCommand(orderId)

    ReceiveHandler->>PurchaseRepo: getById(orderId)
    PurchaseRepo-->>ReceiveHandler: PurchaseOrder (CONFIRMED)

    ReceiveHandler->>PurchaseOrder: receive()
    Note over PurchaseOrder: status: CONFIRMED → RECEIVED\nreceivedAt = now()

    loop for each PO line
        ReceiveHandler->>RestockHandler: handle(RestockItemCommand(\n  itemId, quantity, vendorId, unitPrice\n))
        RestockHandler->>InventoryRepo: saveWithTransaction(item, txData)
        InventoryRepo->>InventoryDB: UPDATE items SET stock += qty\nINSERT inventory_transactions (vendorId, unitPrice)
    end

    ReceiveHandler->>PurchaseRepo: save(PurchaseOrder)
    PurchaseRepo->>PurchaseDB: UPDATE purchase_orders SET status=RECEIVED

    ReceiveHandler-->>Controller: void
    Controller-->>User: 204 No Content
```

---

## 5. Module Internal Architecture

```mermaid
graph TD
    subgraph Presentation
        C[Controllers\n11 endpoints]
        D[DTOs\nRequest + Response]
    end

    subgraph Application
        CMD[Commands\ncreate / add-line / update-line /\nremove-line / confirm / receive / cancel]
        QRY[Queries\nget-by-id / get-all / by-vendor]
    end

    subgraph Domain
        AGG[PurchaseOrder Aggregate]
        ENT[PurchaseOrderLine Entity]
        VO[Value Objects\nPurchaseOrderId\nPurchaseOrderStatus]
        ERR[Domain Errors\nNotEditable · NotReceivable\nDuplicateLine · NotFound]
        IREPO[IPurchaseOrderRepository\ninterface]
    end

    subgraph Infrastructure
        REPO[PurchaseOrderRepository\nwrite side]
        RREPO[ReadPurchaseOrderRepository\nread side]
        MAP[PurchaseOrderMapper]
        PRISMA[Prisma Client\npurchase-db\nsakura_purchase_db]
    end

    C --> CMD
    C --> QRY
    CMD --> AGG
    CMD --> IREPO
    QRY --> RREPO
    AGG --> ENT
    AGG --> VO
    AGG --> ERR
    REPO --> IREPO
    REPO --> MAP
    REPO --> PRISMA
    RREPO --> PRISMA
    MAP --> AGG
```

---

## 6. Cross-Module Integration

```mermaid
graph LR
    subgraph VendorModule
        VEN[Vendor\nname · status]
    end

    subgraph InventoryModule
        INV_ITEM[Item\nRAW_MATERIAL\nPACKAGING]
        INV_RESTOCK[RestockItemHandler]
        INV_READ[ReadItemRepository]
        INV_TX[InventoryTransaction\nvendorId · unitPrice]
    end

    subgraph PurchaseModule
        PO[PurchaseOrder]
        POL[PurchaseOrderLine]
        ADD[AddLineHandler]
        RECV[ReceivePurchaseOrderHandler]
    end

    PO -->|vendorId + vendorName\nclient-provided snapshot| VEN
    POL -->|itemId ref| INV_ITEM

    ADD -->|validate item type\nget itemName snapshot| INV_READ
    RECV -->|restock per line\nwith vendorId + unitPrice| INV_RESTOCK
    INV_RESTOCK --> INV_TX
```

> **Design**: `vendorName` is client-provided snapshot (no Vendor validation).
> `itemName` is auto-fetched from Inventory at add-line time (validated + snapshotted).
> No cross-module calls at read time — all data is self-contained in Purchase DB.

---

## 7. API Endpoints Summary

| Method | Path | Description |
|--------|------|-------------|
| POST | `/api/v1/purchases` | Create new DRAFT PO |
| GET | `/api/v1/purchases` | List POs (filter: vendorId, status) |
| GET | `/api/v1/purchases/:id` | Get PO by ID (includes lines) |
| PATCH | `/api/v1/purchases/:id` | Update notes (DRAFT only) |
| POST | `/api/v1/purchases/:id/confirm` | DRAFT → CONFIRMED |
| POST | `/api/v1/purchases/:id/receive` | CONFIRMED → RECEIVED + restock |
| POST | `/api/v1/purchases/:id/cancel` | DRAFT\|CONFIRMED → CANCELLED |
| POST | `/api/v1/purchases/:id/lines` | Add line (DRAFT only) |
| PATCH | `/api/v1/purchases/:id/lines/:lineId` | Update line qty/price (DRAFT only) |
| DELETE | `/api/v1/purchases/:id/lines/:lineId` | Remove line (DRAFT only) |
| GET | `/api/v1/purchases/vendor/:vendorId` | Get all POs for a vendor |

---

## 8. Domain Rules Summary

| Rule | Enforcement |
|------|-------------|
| Only DRAFT POs can be edited | `PurchaseOrderNotEditableError` in aggregate |
| Only CONFIRMED POs can be received | `PurchaseOrderNotReceivableError` in aggregate |
| RECEIVED POs cannot be cancelled | `PurchaseOrderNotCancellableError` in aggregate |
| Same item cannot appear twice in one PO | `DuplicateLineItemError` + DB `@@unique([orderId, itemId])` |
| Item must be RAW_MATERIAL or PACKAGING | Validated in `AddLineHandler` via Inventory read repo |
| Auto-restock on receive | `ReceivePurchaseOrderHandler` calls `RestockItemHandler` per line |
| `unitPrice` tracked on InventoryTransaction | Passed through `RestockItemCommand` → `saveWithTransaction` |

---

## 9. Inventory Module Changes Required

Small backwards-compatible additions:

| File | Change |
|------|--------|
| `restock-item.command.ts` | Add `unitPrice?: number \| null` field |
| `restock-item.handler.ts` | Pass `unitPrice` to `saveWithTransaction` |
| `item.repository.ts` | Store `unitPrice` (field already exists in schema, was always null) |
| `inventory.module.ts` | Add `exports: [ReadItemRepository, RestockItemHandler]` |

Existing callers are unaffected — `unitPrice` defaults to null.
