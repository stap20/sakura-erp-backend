-- AlterTable
ALTER TABLE "sales_orders" ADD COLUMN "invoiceNumber" TEXT,
ADD COLUMN "paidAt" TIMESTAMP(3),
ADD COLUMN "paymentStatus" TEXT;

-- CreateIndex
CREATE INDEX "sales_orders_paymentStatus_idx" ON "sales_orders"("paymentStatus");

-- CreateIndex
CREATE UNIQUE INDEX "sales_orders_invoiceNumber_key" ON "sales_orders"("invoiceNumber");
