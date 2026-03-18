export class RemoveIngredientCommand {
    constructor(
        public readonly recipeVersionId: string,
        public readonly ingredientId: string,
    ) {}
}
