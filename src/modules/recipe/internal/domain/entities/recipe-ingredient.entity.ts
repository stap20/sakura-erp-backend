export interface CreateRecipeIngredientParams {
    id: string;
    itemId: string | null;
    itemName: string | null;
    isAddOn: boolean;
    ingredientCategory: string | null;
    quantity: number;
    notes?: string | null;
    resolutionPhase?: string;
}

export class RecipeIngredient {
    public readonly id: string;
    public readonly itemId: string | null;
    public readonly itemName: string | null;
    public readonly isAddOn: boolean;
    public readonly ingredientCategory: string | null;
    public quantity: number;
    public notes: string | null;
    public readonly resolutionPhase: string;

    constructor(params: CreateRecipeIngredientParams) {
        this.id = params.id;
        this.itemId = params.itemId;
        this.itemName = params.itemName;
        this.isAddOn = params.isAddOn;
        this.ingredientCategory = params.ingredientCategory;
        this.quantity = params.quantity;
        this.notes = params.notes ?? null;
        this.resolutionPhase = params.resolutionPhase ?? 'FILLING';
    }

    public update(quantity?: number, notes?: string | null): void {
        if (quantity !== undefined) {
            this.quantity = quantity;
        }
        if (notes !== undefined) {
            this.notes = notes;
        }
    }
}
