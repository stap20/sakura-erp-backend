-- CreateTable
CREATE TABLE "addon_components" (
    "id" TEXT NOT NULL,
    "variantItemId" TEXT NOT NULL,
    "ingredientCategory" TEXT NOT NULL,
    "addonItemId" TEXT NOT NULL,

    CONSTRAINT "addon_components_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "addon_components_variantItemId_ingredientCategory_key" ON "addon_components"("variantItemId", "ingredientCategory");

-- AddForeignKey
ALTER TABLE "addon_components" ADD CONSTRAINT "addon_components_variantItemId_fkey" FOREIGN KEY ("variantItemId") REFERENCES "items"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "addon_components" ADD CONSTRAINT "addon_components_addonItemId_fkey" FOREIGN KEY ("addonItemId") REFERENCES "items"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
