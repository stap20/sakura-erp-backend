-- CreateTable
CREATE TABLE "production_order_addon_resolutions" (
    "id" TEXT NOT NULL,
    "orderId" TEXT NOT NULL,
    "ingredientCategory" TEXT NOT NULL,
    "addonItemId" TEXT NOT NULL,

    CONSTRAINT "production_order_addon_resolutions_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "production_order_addon_resolutions" ADD CONSTRAINT "production_order_addon_resolutions_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "production_orders"("id") ON DELETE CASCADE ON UPDATE CASCADE;
