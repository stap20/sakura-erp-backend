export class ProductionOrderLineResponse {
    id: string;
    itemId: string | null;
    itemName: string;
    isAddOn: boolean;
    ingredientCategory: string | null;
    recipePercent: number;
    adjustedQuantityGm: number;
    unitPrice: number | null;
    lineCost: number | null;
}

export class GetProductionOrderResponse {
    constructor(
        public readonly id: string,
        public readonly productId: string,
        public readonly productName: string,
        public readonly unitWeightGm: number,
        public readonly recipeVersionId: string,
        public readonly recipeVersionNumber: number,
        public readonly quantityUnits: number,
        public readonly totalBatchWeightGm: number,
        public readonly wastePercent: number,
        public readonly status: string,
        public readonly notes: string | null,
        public readonly totalMaterialCost: number | null,
        public readonly executedAt: Date | null,
        public readonly lines: ProductionOrderLineResponse[],
        public readonly createdAt: Date,
        public readonly updatedAt: Date,
    ) {}
}
