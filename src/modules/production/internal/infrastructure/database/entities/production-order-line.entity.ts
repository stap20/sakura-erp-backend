export class ProductionOrderLineEntity {
    id: string;
    orderId: string;
    itemId: string | null;
    itemName: string;
    isAddOn: boolean;
    ingredientCategory: string | null;
    recipePercent: number;
    adjustedQuantityGm: number;
    unitPrice: number | null;
    lineCost: number | null;
}
