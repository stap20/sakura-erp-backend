export class IngredientFacadeDto {
    constructor(
        public readonly id: string,
        public readonly itemId: string | null,
        public readonly isAddOn: boolean,
        public readonly ingredientCategory: string | null,
        public readonly quantity: number,
        public readonly notes: string | null,
    ) {}
}

export class RecipeVersionFacadeDto {
    constructor(
        public readonly id: string,
        public readonly productId: string,
        public readonly versionNumber: number,
        public readonly ingredients: IngredientFacadeDto[],
    ) {}
}
