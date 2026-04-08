# Add-On BOM System — Design Document

> Feature branch: `feat/addon-bom`
> Status: Design review (not yet implemented)

---

## Table of Contents

1. [Problem Statement](#1-problem-statement)
2. [Business Model — Products & Variants](#2-business-model--products--variants)
3. [Current Flow (Broken)](#3-current-flow-broken)
4. [Proposed Data Model](#4-proposed-data-model)
5. [Quantity Derivation](#5-quantity-derivation)
6. [New Phase 1 Flow — ProductionOrder with BULK Add-Ons](#6-new-phase-1-flow--productionorder-with-bulk-add-ons)
7. [New Phase 2 Flow — FillingOrder with FILLING Add-Ons](#7-new-phase-2-flow--fillingorder-with-filling-add-ons)
8. [New COGS Flow — Pricing with Add-On Cost](#8-new-cogs-flow--pricing-with-add-on-cost)
9. [API Changes](#9-api-changes)
10. [Implementation Scope per Module](#10-implementation-scope-per-module)

---

## 1. Problem Statement

### What is broken today

Recipe add-on ingredients (fragrance, colorant) are defined as **category placeholders** with `itemId = null`. They describe the *type* of ingredient needed (e.g. "fragrance") but not the specific item.

Because `itemId` is null, the system cannot deduct these items from inventory or include their cost in pricing. The result:

| Symptom | Root cause |
|---------|-----------|
| Fragrance/colorant inventory never decrements | `ExecuteProductionOrderHandler` skips add-ons: `if (ingredient.isAddOn) continue` |
| Filling orders don't track fragrance/colorant | `ExecuteFillingOrderHandler` doesn't involve the recipe at all |
| COGS is understated | `GetItemPricingHandler` filters: `recipe.ingredients.filter(i => !i.isAddOn)` |
| Suggested sale price is too low | COGS missing addon cost → margin calculation is wrong |

---

## 2. Business Model — Products & Variants

A **Product** is a formula family. It has multiple **size variants** and each size comes in multiple **scents**. Each size × scent combination is a separate `FINAL_PRODUCT` item in inventory.

```
Product: "Rose Body Butter"
  ├── Variant: Body Butter 50gm Rose      ← uses Rose Fragrance + Pink Colorant
  ├── Variant: Body Butter 50gm Lavender  ← uses Lavender Fragrance + Purple Colorant
  ├── Variant: Body Butter 50gm Bergamot  ← uses Bergamot Fragrance + Yellow Colorant
  ├── Variant: Body Butter 150gm Rose     ← uses Rose Fragrance + Pink Colorant
  ├── Variant: Body Butter 150gm Lavender ← uses Lavender Fragrance + Purple Colorant
  └── Variant: Body Butter 150gm Bergamot ← uses Bergamot Fragrance + Yellow Colorant
```

**Key rule:** The fragrance and colorant for each variant are **fixed and known** — a Rose variant always uses Rose Fragrance Oil. This never varies batch-to-batch for the same variant.

### Entity Relationship (current + proposed)

```mermaid
erDiagram
    Product {
        string id PK
        string name
        int referenceBatchGm
        int referenceDurationMin
        float referenceWastePercent
    }

    Item {
        string id PK
        string name
        string type
        string productId FK
        int unitWeightGm
        float weightedAverageUnitPrice
    }

    PackagingComponent {
        string id PK
        string itemId FK
        string packagingItemId
        float qtyPerUnit
    }

    AddonComponent {
        string id PK
        string itemId FK
        string ingredientCategory
        string addonItemId
    }

    RecipeVersion {
        string id PK
        string productId FK
        int versionNumber
        string status
    }

    RecipeIngredient {
        string id PK
        string recipeId FK
        string itemId
        string ingredientCategory
        bool isAddOn
        float percentage
        string resolutionPhase
    }

    Product ||--o{ Item : "has variants"
    Item ||--o{ PackagingComponent : "packagingBOM (existing)"
    Item ||--o{ AddonComponent : "addonBOM (NEW)"
    Product ||--o{ RecipeVersion : "has versions"
    RecipeVersion ||--o{ RecipeIngredient : "has ingredients"
```

---

## 3. Current Flow (Broken)

### Phase 1 — ProductionOrder Execute (today)

```mermaid
sequenceDiagram
    participant Handler as ExecuteProductionOrderHandler
    participant RecipeGW as RecipeGateway
    participant InvGW as InventoryGateway
    participant BulkRepo as BulkStockRepository

    Handler->>RecipeGW: getActiveRecipeByProduct(productId)
    RecipeGW-->>Handler: recipe { ingredients[] }

    loop each ingredient
        alt isAddOn = false (base)
            Handler->>InvGW: deductItem(itemId, qty)
        else isAddOn = true (add-on)
            Handler-->>Handler: ⚠ SKIP — itemId is null
        end
    end

    Handler->>BulkRepo: addBulk(batchWeightGm)
    note over Handler: Fragrance/colorant NEVER deducted
```

### Phase 2 — FillingOrder Execute (today)

```mermaid
sequenceDiagram
    participant Handler as ExecuteFillingOrderHandler
    participant InvGW as InventoryGateway
    participant BulkRepo as BulkStockRepository

    Handler->>BulkRepo: deductBulk(bulkUsedGm)

    loop each filling line
        Handler->>InvGW: restockItem(variantItemId, qty)
        Handler->>InvGW: getItem(variantItemId)
        loop each packagingComponent
            Handler->>InvGW: deductItem(packagingItemId, qty)
        end
    end

    note over Handler: Recipe not consulted at all
    note over Handler: Add-ons not deducted
```

### COGS Calculation (today)

```mermaid
sequenceDiagram
    participant Handler as GetItemPricingHandler
    participant InvGW as InventoryGateway
    participant RecipeGW as RecipeGateway
    participant SettingsGW as SettingsGateway

    Handler->>InvGW: getItem(itemId)
    Handler->>InvGW: getProduct(productId)
    Handler->>RecipeGW: getActiveRecipeByProduct(productId)
    Handler->>SettingsGW: getCostConfig()

    note over Handler: filter: baseIngredients = ingredients.filter(i => !i.isAddOn)

    loop each BASE ingredient only
        Handler->>InvGW: getItem(ingredient.itemId)
        Handler-->>Handler: cost += gmsUsed × WAUP
    end

    loop each packagingComponent
        Handler->>InvGW: getItem(component.packagingItemId)
        Handler-->>Handler: packagingCost += qtyPerUnit × WAUP
    end

    Handler-->>Handler: COGS = material + labor + depreciation + packaging
    note over Handler: ⚠ addonCost = 0 (missing from COGS)
```

---

## 4. Proposed Data Model

### 4.1 Recipe DB — add `resolutionPhase` to RecipeIngredient

New field: `resolutionPhase: 'BULK' | 'FILLING'` (default: `'FILLING'`)

- `BULK` — this add-on is mixed into the bulk during **Phase 1** (ProductionOrder). Example: fragrance in body splash — cannot produce neutral bulk.
- `FILLING` — this add-on is added when filling into containers during **Phase 2** (FillingOrder). Example: colorant added per jar.

```
recipe_ingredients table — after migration:
  id                  string PK
  recipeId            string FK
  itemId              string? (null for add-ons)
  ingredientCategory  string? (e.g. "fragrance", "colorant")
  isAddOn             bool
  percentage          decimal
  resolutionPhase     string  DEFAULT 'FILLING'   ← NEW
  notes               string?
```

### 4.2 Inventory DB — new `addon_components` table

Links each FINAL_PRODUCT variant to the actual items used for each add-on category.

```
addon_components table (NEW):
  id                  string PK
  itemId              string FK → items.id  (the variant: "Body Butter 50gm Rose")
  ingredientCategory  string               (matches recipe add-on: "fragrance")
  addonItemId         string               (the real item: "Rose Fragrance Oil")

  @@unique([itemId, ingredientCategory])   (one item per category per variant)
```

**No quantity stored** — quantity is always derived from the recipe at deduction time.

### 4.3 Production DB — new `production_order_addon_resolutions` table

Stores which items staff selected for BULK-phase add-ons when creating a ProductionOrder.

```
production_order_addon_resolutions table (NEW):
  id                  string PK
  orderId             string FK → production_orders.id
  ingredientCategory  string  (e.g. "fragrance")
  addonItemId         string  (e.g. "rose-fragrance-oil-id")
```

Only populated for BULK add-ons. FILLING add-ons are resolved at fill time from Item AddonBOM.

---

## 5. Quantity Derivation

No quantity is stored in AddonBOM or addon resolutions. It is always computed at the moment of deduction using the recipe percentage.

```
BULK add-on (deducted at ProductionOrder execute):
  qty = (recipe.percentage / 100) × batchWeightGm × (1 + wastePercent / 100)

FILLING add-on (deducted at FillingOrder execute, per line):
  qty = (recipe.percentage / 100) × line.unitWeightGm × line.quantityUnits

COGS add-on cost per unit (same formula for both):
  costPerUnit = (recipe.percentage / 100) × item.unitWeightGm × addonItem.WAUP
```

### Why no stored quantity?

- Recipe owns the percentage (single source of truth)
- If recipe is updated (new version activated), deduction automatically uses new percentage
- No sync problem between stored quantity and recipe percentage

---

## 6. New Phase 1 Flow — ProductionOrder with BULK Add-Ons

### How staff create a ProductionOrder with BULK add-ons

```json
POST /api/v1/production/orders
{
  "productId": "prod-abc",
  "batchWeightGm": 10000,
  "wastePercent": 5,
  "notes": "Batch #42",
  "addonResolutions": [
    { "ingredientCategory": "fragrance", "itemId": "rose-oil-id" }
  ]
}
```

`addonResolutions` is optional. If the recipe has BULK add-ons and none are provided, the order is created but execution will fail validation.

### Execute flow

```mermaid
sequenceDiagram
    participant Staff
    participant Controller
    participant Handler as ExecuteProductionOrderHandler
    participant RecipeGW as RecipeGateway
    participant InvGW as InventoryGateway
    participant BulkRepo as BulkStockRepository

    Staff->>Controller: POST /production/orders/:id/execute
    Controller->>Handler: handle(ExecuteProductionOrderCommand)

    Handler->>RecipeGW: getActiveRecipeByProduct(productId)
    RecipeGW-->>Handler: recipe { ingredients[] with resolutionPhase }

    loop each ingredient
        alt isAddOn = false (base ingredient)
            Handler->>InvGW: deductItem(itemId, batchGm × pct × (1+waste%))
            note over InvGW: same as today
        else isAddOn = true AND resolutionPhase = BULK
            Handler-->>Handler: find resolution for ingredientCategory
            Handler->>InvGW: deductItem(resolution.addonItemId, batchGm × pct × (1+waste%))
            note over InvGW: NEW — fragrance/colorant deducted
        else isAddOn = true AND resolutionPhase = FILLING
            Handler-->>Handler: skip (will be handled at filling time)
        end
    end

    Handler->>BulkRepo: addBulk(batchWeightGm)
```

---

## 7. New Phase 2 Flow — FillingOrder with FILLING Add-Ons

No changes to FillingOrder creation. The add-on resolution happens automatically at execute time using the variant item's AddonBOM.

```mermaid
sequenceDiagram
    participant Handler as ExecuteFillingOrderHandler
    participant RecipeGW as RecipeGateway
    participant InvGW as InventoryGateway
    participant BulkRepo as BulkStockRepository

    Handler->>BulkRepo: deductBulk(bulkUsedGm)

    Handler->>RecipeGW: getActiveRecipeByProduct(productId)
    RecipeGW-->>Handler: recipe { ingredients[] with resolutionPhase }

    note over Handler: fillingAddOns = ingredients.filter(i => i.isAddOn && i.resolutionPhase = FILLING)

    loop each filling line (variant + qty)
        Handler->>InvGW: restockItem(variantItemId, quantityUnits)

        Handler->>InvGW: getItem(variantItemId)
        InvGW-->>Handler: item { packagingComponents[], addonComponents[] }

        loop each packagingComponent
            Handler->>InvGW: deductItem(packagingItemId, qtyPerUnit × quantityUnits)
            note over InvGW: same as today
        end

        loop each FILLING add-on from recipe
            Handler-->>Handler: find addonComponent by ingredientCategory
            Handler->>InvGW: deductItem(addonComponent.addonItemId, pct × unitWeightGm × quantityUnits)
            note over InvGW: NEW — colorant deducted per unit filled
        end
    end
```

---

## 8. New COGS Flow — Pricing with Add-On Cost

```mermaid
sequenceDiagram
    participant Handler as GetItemPricingHandler
    participant InvGW as InventoryGateway
    participant RecipeGW as RecipeGateway
    participant SettingsGW as SettingsGateway

    Handler->>InvGW: getItem(itemId)
    note over Handler: item includes addonComponents[] (NEW)
    Handler->>InvGW: getProduct(productId)
    Handler->>RecipeGW: getActiveRecipeByProduct(productId)
    Handler->>SettingsGW: getCostConfig()

    loop each BASE ingredient
        Handler->>InvGW: getItem(ingredient.itemId)
        Handler-->>Handler: materialCost += gmsUsed × WAUP
    end

    loop each ADD-ON ingredient (all phases)
        Handler-->>Handler: find addonComponent by ingredientCategory
        Handler->>InvGW: getItem(addonComponent.addonItemId)
        Handler-->>Handler: addonCost += (pct/100 × unitWeightGm) × WAUP
        note over Handler: NEW — addon cost per unit included
    end

    loop each packagingComponent
        Handler->>InvGW: getItem(component.packagingItemId)
        Handler-->>Handler: packagingCost += qtyPerUnit × WAUP
    end

    Handler-->>Handler: COGS = material + addon + labor + depreciation + packaging
    note over Handler: suggestedPrice = COGS × (1 + marginPercent/100)
```

### New pricing response fields

```typescript
// Before
GetItemPricingResponse {
  materialPerUnit: number
  laborPerUnit: number
  depreciationPerUnit: number
  packagingPerUnit: number
  totalCogs: number
  suggestedPrice: number
}

// After
GetItemPricingResponse {
  materialPerUnit: number
  addonPerUnit: number        // NEW — fragrance + colorant cost per unit
  laborPerUnit: number
  depreciationPerUnit: number
  packagingPerUnit: number
  totalCogs: number           // now includes addonPerUnit
  suggestedPrice: number
}
```

---

## 9. API Changes

| Method | Endpoint | Change |
|--------|----------|--------|
| `POST` | `/recipes/:id/ingredients` | Accept `resolutionPhase: "BULK" \| "FILLING"` on add-on ingredients (default: `"FILLING"`) |
| `PUT` | `/inventory/items/:id/addon-bom` | **NEW** — replace all addon components for a variant item |
| `POST` | `/production/orders` | Accept optional `addonResolutions: [{ingredientCategory, itemId}]` |
| `GET` | `/sales/items/:id/pricing` | Response adds `addonPerUnit` field; `totalCogs` now includes addon cost |

### PUT /inventory/items/:id/addon-bom — request body

```json
[
  { "ingredientCategory": "fragrance", "addonItemId": "rose-oil-id" },
  { "ingredientCategory": "colorant",  "addonItemId": "pink-oxide-id" }
]
```

Replaces all existing addon components for the item (same pattern as PackagingBOM).

### POST /production/orders — with addon resolutions

```json
{
  "productId": "prod-abc",
  "batchWeightGm": 10000,
  "wastePercent": 5,
  "addonResolutions": [
    { "ingredientCategory": "fragrance", "itemId": "rose-oil-id" }
  ]
}
```

Only needed when the product's active recipe has BULK add-ons. Optional for products with all FILLING add-ons.

---

## 10. Implementation Scope per Module

### Decision flowchart — which phase handles each add-on

```mermaid
flowchart TD
    A[Recipe Add-On Ingredient] --> B{resolutionPhase?}
    B -->|BULK| C[ProductionOrder Creation]
    B -->|FILLING| D[FillingOrder Execute]

    C --> E[Staff provides addonResolutions\nin POST /production/orders]
    E --> F[ExecuteProductionOrderHandler\ndeducts add-on using resolution]

    D --> G[Item AddonBOM stores\nactual itemId per category]
    G --> H[ExecuteFillingOrderHandler\ndeducts add-on per unit filled]

    F --> I[Inventory decremented correctly]
    H --> I

    I --> J[COGS reads AddonBOM\nfor pricing calculation]
    J --> K[Accurate suggestedPrice]
```

### Module breakdown

| Module | What changes | Files affected |
|--------|-------------|----------------|
| **Recipe** | Add `resolutionPhase` field to `RecipeIngredient` entity + DB migration + DTO + facade DTO | `recipe-ingredient.entity.ts`, `schema.prisma`, `add-ingredient.request.dto.ts`, `recipe-facade.interface.ts`, facade DTO |
| **Inventory** | New `addon_components` table + `AddonComponent` entity on `Item` + repo + `PUT addon-bom` endpoint + expose via facade | `schema.prisma`, `item.aggregate.ts`, `addon-component.entity.ts`, `addon-bom.repo.interface.ts`, new controller, `inventory-facade.interface.ts`, facade DTO |
| **Production** | `ProductionOrder` stores `addonResolutions[]` + execute handler deducts BULK add-ons + filling execute handler deducts FILLING add-ons | `production-order.aggregate.ts`, `schema.prisma`, `create-production-order.command.ts`, `execute-production-order.handler.ts`, `execute-filling-order.handler.ts`, `IRecipeFacade` usage in filling |
| **Sales** | COGS handler reads `addonComponents` from item + computes `addonPerUnit` + adds to response | `get-item-pricing.handler.ts`, `get-item-pricing.response.ts`, `item-pricing.response.dto.ts` |

### Migration summary

| DB | Migration |
|----|-----------|
| `sakura_recipe_db` | Add `resolution_phase VARCHAR DEFAULT 'FILLING'` to `recipe_ingredients` |
| `sakura_inventory_db` | Create `addon_components` table |
| `sakura_production_db` | Create `production_order_addon_resolutions` table |

---

*This document is for design review. No code has been changed yet.*
