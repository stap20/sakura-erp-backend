-- CreateTable
CREATE TABLE "recipe_versions" (
    "id" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    "versionNumber" INTEGER NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'DRAFT',
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "recipe_versions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "recipe_ingredients" (
    "id" TEXT NOT NULL,
    "recipeId" TEXT NOT NULL,
    "itemId" TEXT,
    "itemName" TEXT,
    "isAddOn" BOOLEAN NOT NULL DEFAULT false,
    "ingredientCategory" TEXT,
    "quantity" DECIMAL(65,30) NOT NULL,
    "notes" TEXT,

    CONSTRAINT "recipe_ingredients_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "recipe_versions_productId_idx" ON "recipe_versions"("productId");

-- CreateIndex
CREATE INDEX "recipe_versions_status_idx" ON "recipe_versions"("status");

-- CreateIndex
CREATE UNIQUE INDEX "recipe_versions_productId_versionNumber_key" ON "recipe_versions"("productId", "versionNumber");

-- CreateIndex
CREATE UNIQUE INDEX "recipe_ingredients_recipeId_itemId_key" ON "recipe_ingredients"("recipeId", "itemId");

-- CreateIndex
CREATE UNIQUE INDEX "recipe_ingredients_recipeId_ingredientCategory_key" ON "recipe_ingredients"("recipeId", "ingredientCategory");

-- AddForeignKey
ALTER TABLE "recipe_ingredients" ADD CONSTRAINT "recipe_ingredients_recipeId_fkey" FOREIGN KEY ("recipeId") REFERENCES "recipe_versions"("id") ON DELETE CASCADE ON UPDATE CASCADE;
