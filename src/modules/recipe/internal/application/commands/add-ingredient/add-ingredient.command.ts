export class AddIngredientCommand {
    constructor(
        public readonly recipeVersionId: string,
        public readonly isAddOn: boolean,
        public readonly quantity: number,
        public readonly notes?: string | null,
        public readonly itemId?: string | null,
        public readonly itemName?: string | null,
        public readonly ingredientCategory?: string | null,
    ) {}
}
