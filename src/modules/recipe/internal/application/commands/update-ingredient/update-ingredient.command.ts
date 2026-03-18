export class UpdateIngredientCommand {
    constructor(
        public readonly recipeVersionId: string,
        public readonly ingredientId: string,
        public readonly quantity?: number,
        public readonly notes?: string | null,
    ) {}
}
