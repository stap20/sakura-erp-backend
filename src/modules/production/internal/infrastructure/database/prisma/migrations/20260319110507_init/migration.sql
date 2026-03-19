-- CreateTable
CREATE TABLE "production_orders" (
    "id" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    "batchWeightGm" DOUBLE PRECISION NOT NULL,
    "wastePercent" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "notes" TEXT,
    "status" TEXT NOT NULL DEFAULT 'DRAFT',
    "performedBy" TEXT,
    "executedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "production_orders_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "filling_orders" (
    "id" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    "bulkUsedGm" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "notes" TEXT,
    "status" TEXT NOT NULL DEFAULT 'DRAFT',
    "performedBy" TEXT,
    "executedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "filling_orders_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "filling_order_lines" (
    "id" TEXT NOT NULL,
    "fillingOrderId" TEXT NOT NULL,
    "variantItemId" TEXT NOT NULL,
    "variantName" TEXT NOT NULL,
    "quantityUnits" DOUBLE PRECISION NOT NULL,
    "unitWeightGm" DOUBLE PRECISION NOT NULL,
    "bulkUsedGm" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "filling_order_lines_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "bulk_stocks" (
    "id" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    "availableGm" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "bulk_stocks_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "production_orders_productId_idx" ON "production_orders"("productId");

-- CreateIndex
CREATE INDEX "production_orders_status_idx" ON "production_orders"("status");

-- CreateIndex
CREATE INDEX "filling_orders_productId_idx" ON "filling_orders"("productId");

-- CreateIndex
CREATE INDEX "filling_orders_status_idx" ON "filling_orders"("status");

-- CreateIndex
CREATE UNIQUE INDEX "bulk_stocks_productId_key" ON "bulk_stocks"("productId");

-- AddForeignKey
ALTER TABLE "filling_order_lines" ADD CONSTRAINT "filling_order_lines_fillingOrderId_fkey" FOREIGN KEY ("fillingOrderId") REFERENCES "filling_orders"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
