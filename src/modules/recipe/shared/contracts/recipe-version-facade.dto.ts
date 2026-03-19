export interface RecipeIngredientFacadeDto {
    itemId: string;
    percentage: number;
    isAddOn: boolean;
}

export class RecipeVersionFacadeDto {
    constructor(
        public readonly id: string,
        public readonly productId: string,
        public readonly versionNumber: number,
        public readonly ingredients: RecipeIngredientFacadeDto[],
    ) {}
}
