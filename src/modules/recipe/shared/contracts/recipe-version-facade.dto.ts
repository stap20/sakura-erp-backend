export interface RecipeIngredientFacadeDto {
    itemId: string | null;
    ingredientCategory: string | null;
    percentage: number;
    isAddOn: boolean;
    resolutionPhase: string;
}

export class RecipeVersionFacadeDto {
    constructor(
        public readonly id: string,
        public readonly productId: string,
        public readonly versionNumber: number,
        public readonly ingredients: RecipeIngredientFacadeDto[],
    ) {}
}
