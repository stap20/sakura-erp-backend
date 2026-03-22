-- AlterTable: add discount fields to sales_orders
ALTER TABLE "sales_orders" ADD COLUMN "discountCode" TEXT;
ALTER TABLE "sales_orders" ADD COLUMN "discountAmount" DECIMAL(65,30) NOT NULL DEFAULT 0;

-- CreateTable: discount_codes
CREATE TABLE "discount_codes" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "value" DECIMAL(65,30) NOT NULL,
    "maxUses" INTEGER,
    "usedCount" INTEGER NOT NULL DEFAULT 0,
    "expiresAt" TIMESTAMP(3),
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "discount_codes_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "discount_codes_code_key" ON "discount_codes"("code");
CREATE INDEX "discount_codes_code_idx" ON "discount_codes"("code");
