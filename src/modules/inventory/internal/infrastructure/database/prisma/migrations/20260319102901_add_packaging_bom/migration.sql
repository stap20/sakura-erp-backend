-- CreateTable
CREATE TABLE "packaging_components" (
    "id" TEXT NOT NULL,
    "variantItemId" TEXT NOT NULL,
    "packagingItemId" TEXT NOT NULL,
    "qtyPerUnit" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "packaging_components_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "packaging_components" ADD CONSTRAINT "packaging_components_variantItemId_fkey" FOREIGN KEY ("variantItemId") REFERENCES "items"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "packaging_components" ADD CONSTRAINT "packaging_components_packagingItemId_fkey" FOREIGN KEY ("packagingItemId") REFERENCES "items"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
