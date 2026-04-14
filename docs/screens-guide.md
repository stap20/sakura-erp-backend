# Sakura ERP — Screens Guide

> Screen-by-screen breakdown of every frontend page. Each entry lists the purpose, layout, data sources, user actions, and UX notes. Use this alongside `frontend-guide.md` which covers API reference and state machines.

---

## Navigation Layout (All Authenticated Screens)

```
┌──────────────────────────────────────────────────────────────────┐
│  🌸 Sakura ERP          [Search...]          [User Name ▾] [⚙]  │
├─────────────┬────────────────────────────────────────────────────┤
│  Dashboard  │                                                    │
│  Vendors    │              < Page Content >                      │
│  Inventory ▾│                                                    │
│   Items     │                                                    │
│   Categories│                                                    │
│   Products  │                                                    │
│  Recipes    │                                                    │
│  Purchases  │                                                    │
│  Production▾│                                                    │
│   Bulk Runs │                                                    │
│   Filling   │                                                    │
│  Sales      │                                                    │
│  Promotions │                                                    │
│  Settings ▾ │                                                    │
│   Cost Cfg  │                                                    │
│   Users     │                                                    │
└─────────────┴────────────────────────────────────────────────────┘
```

---

## Screen 1 — Login

**Route:** `/login`
**Purpose:** Authenticate user and establish JWT session (httpOnly cookie).

### Layout
```
┌──────────────────────────────────┐
│         🌸 Sakura ERP            │
│                                  │
│  Email ___________________________│
│  Password ________________________│
│                                  │
│         [  Sign In  ]            │
│                                  │
│  ⚠ "Invalid credentials" (error) │
└──────────────────────────────────┘
```

### Data & Actions
| Action | API Call | On Success |
|--------|----------|------------|
| Submit form | `POST /auth/login` | Redirect to `/dashboard` |

### UX Notes
- No sidebar — full-screen centered card
- JWT stored as httpOnly cookie by backend — no localStorage
- Show inline error message on 401 response
- `email` field: email validation; `password`: min 1 char
- After login, store `{id, firstName, lastName, role}` in Zustand auth store

---

## Screen 2 — Dashboard

**Route:** `/dashboard`
**Purpose:** High-level operational summary — stock alerts, pending actions, recent activity.

### Layout
```
┌─── KPI Cards (top row) ─────────────────────────────────────────┐
│  🔴 Low Stock Items: 4    🟡 PENDING PAYMENT: 7                 │
│  🟠 Draft POs: 2          🟢 Today's Sales: 12                  │
├─── Stock Alerts ────────────────────────────────────────────────┤
│  Item          │ Type          │ Stock  │ Action                 │
│  Rose Oil      │ RAW_MATERIAL  │ 0.2 KG │ [Restock →]           │
│  Kraft Box 500g│ PACKAGING     │ 3 PCS  │ [Restock →]           │
├─── Recent Sales Orders ─────────────────────────────────────────┤
│  #INV-20260322-0011 │ Sarah J.  │ CONFIRMED │ PENDING  │ [View] │
│  #INV-20260322-0010 │ Ahmed M.  │ SHIPPED   │ PAID     │ [View] │
├─── Available Bulk Stock ────────────────────────────────────────┤
│  Product         │ Available Gm │                               │
│  Rose Body Butter│ 4,500 gm     │                               │
└─────────────────────────────────────────────────────────────────┘
```

### Data & Actions
| Widget | API Call |
|--------|----------|
| Low stock items | `GET /inventory/items` → filter `currentStock < 5` (client-side) |
| Pending payment | `GET /sales?paymentStatus=PENDING` → count |
| Draft POs | `GET /purchases?status=DRAFT` → count |
| Today's sales | `GET /sales?status=CONFIRMED` → filter today (client) |
| Recent sales | `GET /sales` → first 5 results |
| Stock alerts table | `GET /inventory/items?limit=100` → filter low stock |

### UX Notes
- KPI cards are clickable and navigate to filtered list (e.g., click "PENDING PAYMENT" → `/sales?paymentStatus=PENDING`)
- Stock threshold configurable (hardcode to 5 units or 200g initially)
- Refresh button top-right to invalidate all dashboard queries

---

## Screen 3 — Vendor List

**Route:** `/vendors`
**Purpose:** Browse, search, and manage suppliers.

### Layout
```
┌─ Vendors ─────────────────────── [+ New Vendor] ────────────────┐
│  Search: [__________]  Status: [All ▾]                          │
├─────────────────────────────────────────────────────────────────┤
│  Name           │ Phone        │ Status   │ Actions             │
│  Bloom Supplies │ +20111...    │ ● ACTIVE │ [Edit] [Deactivate] │
│  Scent World    │ +20100...    │ ○ INACTIVE│ [Edit] [Activate]  │
└─────────────────────────────────────────────────────────────────┘
```

### Data & Actions
| Action | API Call |
|--------|----------|
| Load list | `GET /vendors?name=&status=` |
| Search | `GET /vendors?name={query}` (debounced 300ms) |
| Filter by status | `GET /vendors?status=ACTIVE|INACTIVE` |
| Create → opens modal | `POST /vendors` |
| Edit → opens modal | `PUT /vendors/:id` |
| Activate | `PATCH /vendors/:id/activate` |
| Deactivate | `PATCH /vendors/:id/deactivate` |
| Row click | Navigate to `/vendors/:id` |

### UX Notes
- Create/Edit in a slide-over or dialog (no separate page needed)
- Deactivate shows confirmation dialog
- Status toggle button label changes based on current status

---

## Screen 4 — Vendor Detail

**Route:** `/vendors/:id`
**Purpose:** View vendor info + full purchase history with that vendor.

### Layout
```
┌─ [← Vendors]  Bloom Supplies ──────── [Edit] [Deactivate] ──────┐
│  Address: 12 Industrial Zone, Cairo                             │
│  Phone: +20111000000                                            │
│  Contact: bloom@email.com                                       │
│  Status: ● ACTIVE                                               │
├─ Purchase Orders ──────────────────────────────── [+ New PO] ───┤
│  PO ID      │ Date       │ Status    │ Lines │ Actions          │
│  po-abc123  │ 2026-03-15 │ RECEIVED  │ 3     │ [View]           │
│  po-def456  │ 2026-03-20 │ CONFIRMED │ 1     │ [View]           │
└─────────────────────────────────────────────────────────────────┘
```

### Data & Actions
| Action | API Call |
|--------|----------|
| Load vendor | `GET /vendors/:id` |
| Load PO history | `GET /purchases/vendor/:vendorId` |
| New PO | Navigate to `/purchases/new?vendorId=:id` |
| View PO | Navigate to `/purchases/:id` |

---

## Screen 5 — Item List

**Route:** `/inventory/items`
**Purpose:** Browse all inventory items by type with stock status indicators.

### Layout
```
┌─ Inventory Items ─────────────────────────── [+ New Item] ──────┐
│  [All] [RAW_MATERIAL] [PACKAGING] [FINAL_PRODUCT] [SHIPPING]    │
│  Search: [__________]  Category: [All ▾]  Status: [Active ▾]   │
├─────────────────────────────────────────────────────────────────┤
│  Name              │ Type         │ Stock  │ WAUP  │ Status     │
│  Rose Hip Oil      │ RAW_MATERIAL │ 🟢 2 KG│ 85 EGP│ ACTIVE    │
│  Kraft Box 500g    │ PACKAGING    │ 🔴 3 PC│ 12 EGP│ ACTIVE    │
│  Body Butter 100g  │ FINAL_PRODUCT│ 🟢 24PC│ 45 EGP│ ACTIVE    │
└─────────────────────────────────────────────────────────────────┘
```

### Data & Actions
| Action | API Call |
|--------|----------|
| Load items | `GET /inventory/items?type=&status=ACTIVE&categoryId=` |
| Search | `GET /inventory/items?search={query}` |
| Create → modal | `POST /inventory/items` |
| Row click | Navigate to `/inventory/items/:id` |
| Archive (row action) | `POST /inventory/items/:id/archive` |

### UX Notes
- Type tabs update the `type` query param
- Stock color: 🟢 healthy / 🟡 low / 🔴 critical (thresholds vary by `measureUnit`)
- Show `weightedAverageUnitPrice` as "WAUP" — tooltip explaining what it means
- FINAL_PRODUCT and SHIPPING_PACKAGING rows show "Sell Price" hint from pricing endpoint

---

## Screen 6 — Item Detail

**Route:** `/inventory/items/:id`
**Purpose:** Full item info, stock management, and transaction history.

### Layout
```
┌─ [← Items]  Rose Hip Oil ────────── [Edit] [Archive] ───────────┐
│  Type: RAW_MATERIAL  │  Unit: KG  │  Category: Oils             │
│  Current Stock: 2.5 KG             WAUP: 85.00 EGP              │
│  Status: ● ACTIVE                                               │
├─ Stock Actions ─────────────────────────────────────────────────┤
│           [+ Restock]          [− Deduct]                       │
├─ Transaction History ───────────────────────────────────────────┤
│  Date       │ Type    │ Qty    │ Vendor        │ Unit Price     │
│  2026-03-20 │ RESTOCK │ +5 KG  │ Bloom Supplies│ 90 EGP        │
│  2026-03-18 │ DEDUCT  │ -0.5 KG│ —             │ —             │
└─────────────────────────────────────────────────────────────────┘
```

### Data & Actions
| Action | API Call |
|--------|----------|
| Load item | `GET /inventory/items/:id` |
| Load transactions | `GET /inventory/items/:id/transactions` |
| Restock → modal | `POST /inventory/items/:id/restock` (`{quantity, performedBy, vendorId?, notes?}`) |
| Deduct → modal | `POST /inventory/items/:id/deduct` (`{quantity, performedBy, notes?}`) |
| Edit → modal | `PATCH /inventory/items/:id` |
| Archive | `POST /inventory/items/:id/archive` (confirm dialog) |

### Extra: FINAL_PRODUCT only
Show additional section:
- **Linked Product**: link to `/inventory/products/:productId`
- **Packaging BOM**: table of packaging components + `[Edit BOM]` → inline table editor → `PUT /inventory/items/:id/packaging-bom`
- **Addon BOM**: table of add-on ingredient resolutions + `[Edit Addon BOM]` → inline table editor → `PUT /inventory/items/:id/addon-bom`
  - Each row: `ingredientCategory` (e.g. `fragrance`) → `addonItemId` (RAW_MATERIAL item picker)
  - Used to resolve which concrete inventory item gets deducted when a FILLING add-on is executed
- **Pricing**: card showing COGS breakdown → `GET /sales/pricing/item/:id`
  - Shows: `materialPerUnit`, `laborPerUnit`, `depreciationPerUnit`, `packagingPerUnit`, **`addonCostPerUnit`** (NEW), `totalCogs`, `suggestedPrice`

### UX Notes
- Restock modal: `vendorId` optional dropdown (loads from `GET /vendors?status=ACTIVE`); `unitPrice` optional number field — sets the Weighted Average Unit Price used in COGS calculations
- Transaction history paginated, filterable by type (RESTOCK / DEDUCT)
- `performedBy` can default to logged-in user id

---

## Screen 7 — Category List

**Route:** `/inventory/categories`
**Purpose:** Manage item categories used to group RAW_MATERIAL items.

### Layout
```
┌─ Categories ──────────────────────────── [+ New Category] ──────┐
│  Search: [__________]   Status: [All ▾]                         │
├─────────────────────────────────────────────────────────────────┤
│  Name        │ Description        │ Status   │ Actions          │
│  Oils        │ Base carrier oils  │ ● ACTIVE │ [Edit] [Archive] │
│  Waxes       │ Beeswax, candelilla│ ● ACTIVE │ [Edit] [Archive] │
│  Butters     │ Shea, cocoa        │ ○ ARCHIVED│ —               │
└─────────────────────────────────────────────────────────────────┘
```

### Data & Actions
| Action | API Call |
|--------|----------|
| Load | `GET /inventory/categories` |
| Create | `POST /inventory/categories` |
| Edit | `PATCH /inventory/categories/:id` |
| Archive | `POST /inventory/categories/:id/archive` |

### UX Notes
- Create/Edit in modal (no dedicated page needed)
- Archive disabled if category has ACTIVE items (backend returns 400 — show inline error)

---

## Screen 8 — Product List

**Route:** `/inventory/products`
**Purpose:** Browse formula families (products) with production-readiness status and bulk availability at a glance.

### Layout
```
┌─ Products ─────────────────────────────── [+ New Product] ──────┐
│  Search: [__________]                                           │
├─────────────────────────────────────────────────────────────────┤
│  Name              │ Recipe        │ Bulk Available │ Actions   │
│  Rose Body Butter  │ v3 · ACTIVE   │ 🟢 4,500 gm   │ [View]    │
│  Lavender Scrub    │ v1 · DRAFT    │ 🔴 0 gm        │ [View]    │
│  Argan Face Cream  │ —             │ —              │ [View]    │
└─────────────────────────────────────────────────────────────────┘
```

### Data & Actions
| Action | API Call |
|--------|----------|
| Load products | `GET /inventory/products?search=` |
| Load bulk stocks | `GET /production/bulk-stocks` — fetched in parallel, joined client-side by `productId` |
| Load recipe status per row | `GET /recipes/product/:productId/active` — called per row (parallel), shows `v{n} · STATUS` |
| Create → modal | `POST /inventory/products` |
| Row click | Navigate to `/inventory/products/:id` |

### Column guide

| Column | Source | Purpose |
|--------|--------|---------|
| **Recipe** | `GET /recipes/product/:id/active` | Shows `v3 · ACTIVE` or `v1 · DRAFT` or `—`. Production readiness flag — ACTIVE = ready to manufacture |
| **Bulk Available** | `GET /production/bulk-stocks` joined by `productId` | Grams of mixed bulk in tank. 🟢 >500 gm / 🔴 =0 gm / `—` if never produced |

### UX Notes
- Fetch products + bulk stocks in parallel (`Promise.all`) — join on `productId` client-side
- Recipe column: call `GET /recipes/product/:productId/active` per row with `Promise.all` — shows version number + status
- Products with no bulk stock entry yet show `—` (not `0 gm`) — means production has never run for that product

---

## Screen 9 — Product Detail

**Route:** `/inventory/products/:id`
**Purpose:** Central hub for a formula family — variants, recipe versions, production history.

### Layout
```
┌─ [← Products]  Rose Body Butter ─────────── [Edit] ────────────┐
│  Reference Batch: 10,000 gm  │  Waste: 5%  │  Duration: 120 min│
├─ Variants (FINAL_PRODUCT items linked to this product) ─────────┤
│  Name             │ Unit   │ Weight (gm) │ Stock  │ Actions     │
│  Body Butter 50g  │ PCS    │ 50          │ 🟢 48  │ [View Item] │
│  Body Butter 100g │ PCS    │ 100         │ 🟡 12  │ [View Item] │
│  Body Butter 200g │ PCS    │ 200         │ 🔴 3   │ [View Item] │
│                                          [+ Link Existing Item] │
├─ Recipe Versions ────────────────────────── [+ New Version] ────┤
│  Version │ Status  │ Created    │ Ingredients │ Actions         │
│  v3      │ ACTIVE  │ 2026-03-01 │ 6           │ [View]          │
│  v2      │ ARCHIVED│ 2026-01-15 │ 5           │ [View]          │
│  v1      │ ARCHIVED│ 2025-12-01 │ 4           │ [View]          │
├─ Bulk Stock ────────────────────────────────────────────────────┤
│  Available Bulk: 4,500 gm                                       │
│  [→ New Production Run]     [→ New Filling Order]               │
└─────────────────────────────────────────────────────────────────┘
```

### Data & Actions
| Action | API Call |
|--------|----------|
| Load product | `GET /inventory/products/:id` |
| Load variants | `GET /inventory/items?type=FINAL_PRODUCT` → filter by `productId` |
| Load recipe versions | `GET /recipes/product/:productId/versions` |
| Edit product | `PATCH /inventory/products/:id` |
| New recipe version | `POST /recipes` → navigate to `/recipes/:id` |
| New production run | Navigate to `/production/orders/new?productId=:id` |
| New filling order | Navigate to `/production/filling-orders/new?productId=:id` |

---

## Screen 10 — Recipe List

**Route:** `/recipes`
**Purpose:** Browse all recipe versions across products, filterable by status.

### Layout
```
┌─ Recipes ───────────────────────────────────────────────────────┐
│  Product: [All ▾]   Status: [All ▾]                            │
├─────────────────────────────────────────────────────────────────┤
│  Product           │ Version │ Status  │ Ingredients │ Actions  │
│  Rose Body Butter  │ v3      │ ACTIVE  │ 6           │ [Open]   │
│  Rose Body Butter  │ v2      │ ARCHIVED│ 5           │ [Open]   │
│  Lavender Scrub    │ v1      │ DRAFT   │ 3           │ [Open]   │
└─────────────────────────────────────────────────────────────────┘
```

### Data & Actions
| Action | API Call |
|--------|----------|
| Load | `GET /recipes?status=&productId=` |
| Filter | Update query params |
| Row click | Navigate to `/recipes/:id` |

---

## Screen 11 — Recipe Version Detail / Editor

**Route:** `/recipes/:id`
**Purpose:** View and edit a recipe version's formula (ingredients list with w/w% quantities).

### Layout
```
┌─ [← Recipes]  Rose Body Butter — v3 ── [Activate] [Archive] ───┐
│  Status: [DRAFT]   Created: 2026-03-01   Notes: Updated formula │
│  [Edit Notes]                                                   │
├─ Ingredients ─────────────────────────────────── [+ Add] ───────┤
│  Item              │ Category │ Add-on │ Phase   │  %   │ Actions│
│  Rose Hip Oil      │ Oils     │ ✗      │ —       │ 100.0│ [✎][🗑]│
│  [Fragrance]       │ fragrance│ ✓      │ FILLING │   5.0│ [✎][🗑]│
│  [Colorant]        │ colorant │ ✓      │ BULK    │   2.0│ [✎][🗑]│
├─────────────────────────────────────────────────────────────────┤
│  Base total: 100%  ✅           Add-ons: excluded from total    │
└─────────────────────────────────────────────────────────────────┘
```

### Data & Actions
| Action | API Call |
|--------|----------|
| Load | `GET /recipes/:id` |
| Add ingredient → inline modal | `POST /recipes/:id/ingredients` |
| Edit ingredient | `PATCH /recipes/:id/ingredients/:ingredientId` |
| Remove | `DELETE /recipes/:id/ingredients/:ingredientId` |
| Activate | `POST /recipes/:id/activate` |
| Archive | `POST /recipes/:id/archive` |
| Update notes | `PATCH /recipes/:id` |

### UX Notes
- Running total displayed at bottom — only counts base ingredients (`isAddOn: false`)
- Activate button **disabled** and shows warning if total ≠ 100%
- Only DRAFT recipes are editable — all edit actions hidden for ACTIVE/ARCHIVED
- **Add ingredient modal**:
  - Item picker (searchable dropdown → `GET /inventory/items?type=RAW_MATERIAL`), quantity (%), isAddOn toggle
  - When `isAddOn = true`: hide item picker, show `ingredientCategory` text input (e.g. `fragrance`) and `resolutionPhase` dropdown (`BULK` / `FILLING`, default `FILLING`)
  - **Phase column** only shown for add-on rows — `BULK` = deducted at bulk production time, `FILLING` = deducted per unit at filling time

---

## Screen 12 — Purchase Order List

**Route:** `/purchases`
**Purpose:** Browse all procurement orders, filtered by status.

### Layout
```
┌─ Purchase Orders ─────────────────────── [+ New PO] ───────────┐
│  [DRAFT] [CONFIRMED] [RECEIVED] [CANCELLED] [All]              │
│  Vendor: [All ▾]                                               │
├────────────────────────────────────────────────────────────────┤
│  ID        │ Vendor         │ Date       │ Lines │ Status      │
│  po-abc123 │ Bloom Supplies │ 2026-03-15 │ 3     │ CONFIRMED   │
│  po-def456 │ Scent World    │ 2026-03-20 │ 1     │ DRAFT       │
└────────────────────────────────────────────────────────────────┘
```

### Data & Actions
| Action | API Call |
|--------|----------|
| Load | `GET /purchases?status=&vendorId=` |
| Create → navigate | Navigate to `/purchases/new` |
| Row click | Navigate to `/purchases/:id` |

---

## Screen 13 — Purchase Order Detail

**Route:** `/purchases/:id` (also `/purchases/new` for creation)
**Purpose:** Create or manage a purchase order — add lines, confirm, receive.

### Layout
```
┌─ [← POs]  PO — Bloom Supplies ──── Status: [DRAFT] ────────────┐
│  Vendor: Bloom Supplies  │  Phone: +20111000000                 │
│  Expected Delivery: 2026-03-25  │  Notes: [edit]               │
├─ Lines ──────────────────────────────────────── [+ Add Line] ───┤
│  Item          │ Measure │ Qty  │ Unit Price │ Subtotal │ Action│
│  Rose Hip Oil  │ KG      │ 5    │ 90.00 EGP  │ 450 EGP  │ [✎][🗑]│
│  Shea Butter   │ KG      │ 3    │ 120.00 EGP │ 360 EGP  │ [✎][🗑]│
├──────────────────────────────────────────────── Total: 810 EGP ─┤
│              [Confirm]          [Cancel PO]                     │
└─────────────────────────────────────────────────────────────────┘
```

For CONFIRMED status:
```
│              [Receive]          [Cancel PO]                     │
```

### Data & Actions
| Action | API Call |
|--------|----------|
| Load | `GET /purchases/:id` |
| Update notes | `PATCH /purchases/:id` |
| Add line | `POST /purchases/:id/lines` (`{itemId, quantity, unitPrice}`) |
| Edit line | `PATCH /purchases/:id/lines/:lineId` |
| Remove line | `DELETE /purchases/:id/lines/:lineId` |
| Confirm | `POST /purchases/:id/confirm` |
| Receive | `POST /purchases/:id/receive` |
| Cancel | `POST /purchases/:id/cancel` |

### UX Notes
- Add line modal: item picker (only RAW_MATERIAL + PACKAGING items), quantity, unit price
- Action buttons shown based on status: DRAFT → [Confirm][Cancel] / CONFIRMED → [Receive][Cancel]
- Receive shows confirmation dialog warning it will restock inventory
- After receive, all line editing is hidden (order becomes read-only)

---

## Screen 14 — Production Order List

**Route:** `/production/orders`
**Purpose:** Browse bulk production runs.

### Layout
```
┌─ Production Orders ──────────────────── [+ New Run] ───────────┐
│  [DRAFT] [CONFIRMED] [EXECUTED] [CANCELLED] [All]              │
│  Product: [All ▾]                                              │
├────────────────────────────────────────────────────────────────┤
│  Product           │ Batch (gm) │ Waste │ Status   │ Actions   │
│  Rose Body Butter  │ 10,000     │ 5%    │ EXECUTED │ [View]    │
│  Lavender Scrub    │ 5,000      │ 3%    │ DRAFT    │ [View]    │
└────────────────────────────────────────────────────────────────┘
```

### Data & Actions
| Action | API Call |
|--------|----------|
| Load | `GET /production/orders?status=&productId=` |
| Create | Navigate to `/production/orders/new` |
| Row click | Navigate to `/production/orders/:id` |

---

## Screen 15 — Production Order Detail

**Route:** `/production/orders/:id`
**Purpose:** Create/manage a bulk production run — see ingredient deductions, execute.

### Layout
```
┌─ [← Production]  Bulk Run — Rose Body Butter ──────────────────┐
│  Status: [CONFIRMED]   Batch: 10,000 gm   Waste: 5%            │
│  Notes: [edit inline]                                           │
├─ Base Ingredients (from active recipe) ─────────────────────────┤
│  Ingredient    │ Recipe % │ Will Deduct  │ Current Stock        │
│  Rose Hip Oil  │ 30%      │ 3,150 gm     │ 🟢 5,000 gm         │
│  Shea Butter   │ 40%      │ 4,200 gm     │ 🟡 4,500 gm         │
│  Beeswax       │ 15%      │ 1,575 gm     │ 🟢 8,000 gm         │
│  Vitamin E     │ 15%      │ 1,575 gm     │ 🔴 1,200 gm ⚠       │
├─ BULK Add-on Resolutions (only shown if recipe has BULK add-ons)┤
│  Add-on Category │ Resolved Item         │ Will Deduct         │
│  colorant        │ [Red Colorant ▾]      │ 210 gm              │
├─────────────────────────────────────────────────────────────────┤
│         [Execute Run]         [Cancel]                          │
│  ⚠ Vitamin E stock insufficient — execution may fail           │
└─────────────────────────────────────────────────────────────────┘
```

### Data & Actions
| Action | API Call |
|--------|----------|
| Load order | `GET /production/orders/:id` |
| Load active recipe | `GET /recipes/product/:productId/active` |
| Load item stocks | `GET /inventory/items?type=RAW_MATERIAL` |
| Create (new) | `POST /production/orders` with optional `addonResolutions[]` |
| Update (DRAFT) | `PATCH /production/orders/:id` |
| Confirm | `POST /production/orders/:id/confirm` |
| Execute | `POST /production/orders/:id/execute` |
| Cancel | `POST /production/orders/:id/cancel` |

### UX Notes
- Ingredient preview is client-side calculation: `deductQty = batchWeightGm × (pct/100) × (1 + wastePercent/100)`
- Highlight rows where `deductQty > currentStock` in red with warning
- Execute shows confirmation dialog listing all deductions
- **BULK Add-on Resolutions**: If recipe has ingredients where `isAddOn: true && resolutionPhase === 'BULK'`, show a resolver section at creation time
  - Each add-on `ingredientCategory` (e.g. `colorant`) must be mapped to a concrete RAW_MATERIAL item via a dropdown (`GET /inventory/items?type=RAW_MATERIAL`)
  - Include these mappings as `addonResolutions: [{ ingredientCategory, addonItemId }]` in the `POST /production/orders` body
  - Will deduct quantity: same formula as base ingredients — `batchWeightGm × (pct/100) × (1 + waste%/100)`
- **FILLING add-ons** (resolutionPhase=FILLING) are NOT resolved here — they're resolved automatically at FillingOrder execute via the variant item's AddonBOM

---

## Screen 16 — Filling Order List

**Route:** `/production/filling-orders`
**Purpose:** Browse filling runs (bulk → packaged variants).

### Layout
```
┌─ Filling Orders ─────────────────────── [+ New Fill] ──────────┐
│  [DRAFT] [CONFIRMED] [EXECUTED] [CANCELLED] [All]              │
│  Product: [All ▾]                                              │
├────────────────────────────────────────────────────────────────┤
│  Product          │ Bulk Used (gm) │ Status   │ Actions        │
│  Rose Body Butter │ 5,000          │ EXECUTED │ [View]         │
│  Rose Body Butter │ 2,000          │ DRAFT    │ [View]         │
└────────────────────────────────────────────────────────────────┘
```

### Data & Actions
| Action | API Call |
|--------|----------|
| Load | `GET /filling-orders?status=&productId=` |
| Create | Navigate to `/production/filling-orders/new` |
| Row click | Navigate to `/production/filling-orders/:id` |

---

## Screen 17 — Filling Order Detail

**Route:** `/production/filling-orders/:id`
**Purpose:** Fill bulk stock into packaged variants — specify units per variant, see packaging deductions.

### Layout
```
┌─ [← Filling]  Filling — Rose Body Butter ──────────────────────┐
│  Status: [DRAFT]   Available Bulk: 4,500 gm   [Edit Notes]     │
├─ Fill Lines ─────────────────────────────── [+ Add Variant] ───┤
│  Variant         │ Units │ Unit Weight │ Bulk Used │ Actions    │
│  Body Butter 50g │ 20    │ 50 gm       │ 1,000 gm  │ [Edit] [×]│
│  Body Butter 100g│ 10    │ 100 gm      │ 1,000 gm  │ [Edit] [×]│
├─────────────────────────────────────────────────────────────────┤
│  Total Bulk Used: 2,000 gm  (Available: 4,500 gm ✅)           │
│         [Confirm]           [Cancel]                            │
└─────────────────────────────────────────────────────────────────┘
```

`[Edit Notes]`, `[+ Add Variant]`, `[Edit]`, and `[×]` are only visible when status is `DRAFT`.

### Data & Actions
| Action | API Call |
|--------|----------|
| Load | `GET /filling-orders/:id` |
| Create | `POST /filling-orders` |
| Update notes (DRAFT only) | `PATCH /filling-orders/:id` `{notes?}` |
| Add line (DRAFT only) | `POST /filling-orders/:id/lines` `{variantItemId, quantityUnits}` |
| Update line qty (DRAFT only) | `PATCH /filling-orders/:id/lines/:lineId` `{quantityUnits}` |
| Remove line (DRAFT only) | `DELETE /filling-orders/:id/lines/:lineId` |
| Confirm | `POST /filling-orders/:id/confirm` |
| Execute | `POST /filling-orders/:id/execute` |
| Cancel | `POST /filling-orders/:id/cancel` |

### UX Notes
- Variant picker (`[+ Add Variant]`): only FINAL_PRODUCT items linked to the selected product; `unitWeightGm` is auto-resolved by the backend from the item — do NOT send it in the add-line request
- `[Edit]` on a line opens a qty-only input (unit weight is read-only, derived from the variant item)
- `bulkUsedGm = units × unitWeightGm` — recalculated by the backend on each add/update/remove; reflect the returned `bulkUsedGm` from the response
- Warn if total bulk used > available bulk
- Packaging BOM is informational only (shown from item detail, not recalculated here)
- **FILLING Add-ons**: At execute time, the backend automatically deducts add-on ingredients (e.g. fragrance) using each variant's `addonComponents[]` BOM — no user input needed
  - Show an informational note: "Add-on ingredients (e.g. fragrance, colorant) will be automatically deducted from inventory based on each variant's Addon BOM"
  - If a variant is missing its AddonBOM for a required add-on category, the backend silently skips it (no error) — a missing AddonBOM means that add-on is not tracked for that variant

---

## Screen 18 — Sales Order List

**Route:** `/sales`
**Purpose:** Browse all customer orders, filter by status and payment state.

### Layout
```
┌─ Sales Orders ─────────────────────────── [+ New Order] ────────┐
│  [All] [DRAFT] [CONFIRMED] [SHIPPED] [CANCELLED]               │
│  Payment: [All ▾]   (PENDING / PAID)                           │
├─────────────────────────────────────────────────────────────────┤
│  Invoice       │ Customer  │ Status    │ Payment │ Total │ Date │
│ INV-20260322-11│ Sarah J.  │ CONFIRMED │ PENDING │ 250   │ today│
│ INV-20260322-10│ Ahmed M.  │ SHIPPED   │ PAID    │ 500   │ today│
│ —              │ Mona K.   │ DRAFT     │ —       │ 150   │ today│
└─────────────────────────────────────────────────────────────────┘
```

### Data & Actions
| Action | API Call |
|--------|----------|
| Load | `GET /sales?status=&paymentStatus=` |
| Create → navigate | Navigate to `/sales/new` |
| Row click | Navigate to `/sales/:id` |

### UX Notes
- "Total" column = sum of non-gift line subtotals − discountAmount (client-side calc)
- Invoice number shown as `—` for DRAFT orders (not yet confirmed)

---

## Screen 19 — Sales Order Detail

**Route:** `/sales/:id`
**Purpose:** The primary sales management screen — create orders, add products, apply discounts, confirm, ship, and track payment.

### Layout
```
┌─ [← Sales]  INV-20260322-0011 ─── [CONFIRMED] [PENDING] ───────┐
│  Customer: Sarah Johnson   Phone: +20100000000                  │
│  Contact: sarah@email.com  Notes: Urgent [edit]                 │
├─ Lines ──────────────────────────────────── [+ Add Item] ───────┤
│  Item              │ Qty │ Price  │ Gift│ Subtotal │ Actions    │
│  Body Butter 100g  │ 2   │ 150 EGP│  ✗ │ 300 EGP  │ [✎] [🗑]  │
│  [Gift Box]        │ 1   │   0    │  ✓ │ —        │ [✎] [🗑]  │
│  Kraft Mailer Bag  │ 2   │  15 EGP│  ✗ │  30 EGP  │ [✎] [🗑]  │
├─ Discount ──────────────────────────────────────────────────────┤
│  Code: SUMMER20   -50 EGP                   [Remove Discount]  │
│  — or —  [Apply Discount Code...]                               │
├─────────────────────────────────────────────────── Total ───────┤
│  Subtotal (non-gift):  330 EGP                                  │
│  Discount:            -50 EGP                                   │
│  Total:               280 EGP                                   │
├─ Actions ───────────────────────────────────────────────────────┤
│  [Ship Order]     [Mark as Paid]     [Cancel Order]            │
└─────────────────────────────────────────────────────────────────┘
```

### Data & Actions
| Action | API Call |
|--------|----------|
| Load order | `GET /sales/:id` |
| Create order | `POST /sales` |
| Update notes | `PATCH /sales/:id` |
| Add line | `POST /sales/:id/lines` (`{itemId, quantity, unitPrice, isGift?}`) |
| Update line | `PATCH /sales/:id/lines/:lineId` |
| Remove line | `DELETE /sales/:id/lines/:lineId` |
| Apply discount | `POST /sales/:id/apply-discount` (`{code}`) |
| Remove discount | `DELETE /sales/:id/discount` |
| Confirm | `POST /sales/:id/confirm` |
| Ship | `POST /sales/:id/ship` |
| Mark as Paid | `POST /sales/:id/mark-paid` |
| Cancel | `POST /sales/:id/cancel` |

### Add Line Modal
```
┌─ Add Item ─────────────────────────┐
│  Item: [Search FINAL_PRODUCT...  ▾]│
│  Suggested Price: 150 EGP  (COGS)  │
│  Unit Price: [150      ]           │
│  Quantity:   [1        ]           │
│  ☐ Mark as Gift                    │
│          [Add to Order]            │
└────────────────────────────────────┘
```
- Item picker: `GET /inventory/items?type=FINAL_PRODUCT` + `type=SHIPPING_PACKAGING`
- On item select: call `GET /sales/pricing/item/:itemId` → show suggested price as hint

### UX Notes
- **Status gates**: editing lines/discount only when `status === DRAFT`
- **Action visibility**:
  - DRAFT: [Confirm], [Cancel]
  - CONFIRMED: [Ship], [Cancel], [Mark as Paid] (if paymentStatus=PENDING)
  - SHIPPED: [Mark as Paid] (if paymentStatus=PENDING)
  - CANCELLED / PAID: no actions
- Gift lines show `—` in subtotal column and are excluded from discount calculation
- Apply discount: inline text input + button → shows applied code + amount

---

## Screen 20 — Discount Codes

**Route:** `/promotions/discount-codes`
**Purpose:** Manage promotional discount codes (create, update, deactivate).

### Layout
```
┌─ Discount Codes ─────────────────── [+ New Code] ──────────────┐
│  Code       │ Type         │ Value │ Uses      │ Expires │ Active│
│  SUMMER20   │ PERCENT      │ 20%   │ 5/—       │ —       │ ✅    │
│  FLAT50     │ FIXED_AMOUNT │ 50 EGP│ 2/10      │ 2027-12 │ ✅    │
│  EXPIRED10  │ PERCENT      │ 10%   │ 0/—       │ 2020-01 │ ✅    │
└─────────────────────────────────────────────────────────────────┘
```

### Data & Actions
| Action | API Call |
|--------|----------|
| Load | `GET /promotions/discount-codes` |
| Create → modal | `POST /promotions/discount-codes` |
| Edit → modal | `PATCH /promotions/discount-codes/:id` |
| Deactivate | `PATCH /promotions/discount-codes/:id` with `{isActive: false}` |

### Create/Edit Modal
```
┌─ New Discount Code ──────────────────┐
│  Code:      [SUMMER20         ]      │
│  Type:      [PERCENT ▾]              │
│  Value:     [20               ]      │
│  Max Uses:  [— (unlimited)    ]      │
│  Expires:   [— (no expiry)    ]      │
│             [  Save  ]               │
└──────────────────────────────────────┘
```

### UX Notes
- Show `usedCount / maxUses` (or `usedCount / ∞` if no max)
- Highlight expired codes in red (compare `expiresAt` to today client-side)
- Inactive codes grayed out

---

## Screen 21 — Cost Config

**Route:** `/settings/cost-config`
**Purpose:** Configure the COGS calculation parameters (singleton — upsert on save).

### Layout
```
┌─ Cost Configuration ────────────────────────────────────────────┐
│  These values are used to calculate the suggested selling price │
│  for all FINAL_PRODUCT items.                                   │
├─────────────────────────────────────────────────────────────────┤
│  Monthly Salary (EGP):         [  8,000  ]                      │
│  Monthly Working Hours:        [    160  ]                      │
│  Depreciation per Minute (EGP):[   0.50  ]                      │
│  Default Margin (%):           [     30  ]                      │
├─────────────────────────────────────────────────────────────────┤
│  Last updated: 2026-03-01                                       │
│                           [  Save  ]                            │
└─────────────────────────────────────────────────────────────────┘
```

### Data & Actions
| Action | API Call |
|--------|----------|
| Load | `GET /settings/cost-config` |
| Save | `PUT /settings/cost-config` |

### UX Notes
- 404 on load = config not yet created → show empty form (PUT still works)
- Show "Saved successfully" toast on success
- All fields required (except `defaultMarginPercent` which defaults to 0)

---

## Screen 22 — User Management

**Route:** `/settings/users`
**Purpose:** Admin-only screen to browse and create system users.

### Layout
```
┌─ Users ─────────────────────────────── [+ New User] ───────────┐
│  Search: [__________]   Role: [All ▾]                          │
├─────────────────────────────────────────────────────────────────┤
│  Name         │ Email            │ Role  │ Status   │ Actions  │
│  Kalpo Admin  │ admin@sakura.com │ ADMIN │ ACTIVE   │ [Edit]   │
│  Nour Staff   │ nour@sakura.com  │ USER  │ ACTIVE   │ [Edit]   │
└─────────────────────────────────────────────────────────────────┘
```

### Data & Actions
| Action | API Call |
|--------|----------|
| Load | `GET /auth/user` |
| Search | `GET /auth/user?content={query}` |
| Filter by role | `GET /auth/user?role=ADMIN|USER` |

### UX Notes
- Only visible to users with `role === ADMIN` (hide from sidebar for others)
- Create user functionality depends on a `POST /auth/user` endpoint — if not implemented yet, hide the button

---

## Summary — Screen Count by Module

| Module | Screens |
|--------|---------|
| Auth | 1 (Login) |
| Dashboard | 1 |
| Vendors | 2 (List, Detail) |
| Inventory | 5 (Items, Item Detail, Categories, Products, Product Detail) |
| Recipes | 2 (List, Detail/Editor) |
| Purchase | 2 (List, Detail) |
| Production | 4 (Bulk List, Bulk Detail, Filling List, Filling Detail) |
| Sales | 2 (List, Detail) |
| Promotions | 1 (Discount Codes) |
| Settings | 2 (Cost Config, Users) |
| **Total** | **22 screens** |
