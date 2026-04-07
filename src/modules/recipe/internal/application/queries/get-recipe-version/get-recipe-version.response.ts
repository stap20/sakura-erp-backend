export class IngredientResponse {
    id: string;
    itemId: string | null;
    itemName: string | null;
    isAddOn: boolean;
    ingredientCategory: string | null;
    quantity: number;
    notes: string | null;
    resolutionPhase: string;
}

export class GetRecipeVersionResponse {
    constructor(
        public readonly id: string,
        public readonly productId: string,
        public readonly versionNumber: number,
        public readonly status: string,
        public readonly notes: string | null,
        public readonly ingredients: IngredientResponse[],
        public readonly createdAt: Date,
        public readonly updatedAt: Date,
    ) {}
}
