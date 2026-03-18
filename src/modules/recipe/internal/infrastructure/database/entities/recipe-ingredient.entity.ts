export class RecipeIngredientEntity {
    id: string;
    recipeId: string;
    itemId: string | null;
    itemName: string | null;
    isAddOn: boolean;
    ingredientCategory: string | null;
    quantity: any; // Prisma Decimal
    notes: string | null;

    constructor(data: Partial<RecipeIngredientEntity>) {
        Object.assign(this, data);
    }
}
