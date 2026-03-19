-- CreateTable
CREATE TABLE "production_orders" (
    "id" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    "productName" TEXT NOT NULL,
    "unitWeightGm" DOUBLE PRECISION NOT NULL,
    "recipeVersionId" TEXT NOT NULL,
    "recipeVersionNumber" INTEGER NOT NULL,
    "quantityUnits" INTEGER NOT NULL,
    "totalBatchWeightGm" DOUBLE PRECISION NOT NULL,
    "wastePercent" DOUBLE PRECISION NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'DRAFT',
    "notes" TEXT,
    "totalMaterialCost" DOUBLE PRECISION,
    "executedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "production_orders_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "production_order_lines" (
    "id" TEXT NOT NULL,
    "orderId" TEXT NOT NULL,
    "itemId" TEXT,
    "itemName" TEXT NOT NULL,
    "isAddOn" BOOLEAN NOT NULL DEFAULT false,
    "ingredientCategory" TEXT,
    "recipePercent" DOUBLE PRECISION NOT NULL,
    "adjustedQuantityGm" DOUBLE PRECISION NOT NULL,
    "unitPrice" DOUBLE PRECISION,
    "lineCost" DOUBLE PRECISION,

    CONSTRAINT "production_order_lines_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "production_orders_productId_idx" ON "production_orders"("productId");

-- CreateIndex
CREATE INDEX "production_orders_status_idx" ON "production_orders"("status");

-- AddForeignKey
ALTER TABLE "production_order_lines" ADD CONSTRAINT "production_order_lines_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "production_orders"("id") ON DELETE CASCADE ON UPDATE CASCADE;
