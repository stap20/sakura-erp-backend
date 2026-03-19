export class ItemEntity {
    id: string;
    name: string;
    type: string;
    measureUnit: string;
    currentStock: number;
    categoryId: string | null;
    productId: string | null;
    status: string;
    unitWeightGm: number | null;
    weightedAverageUnitPrice: number | null;
    createdAt: Date;
    updatedAt: Date;

    constructor(data: Partial<ItemEntity>) {
        Object.assign(this, data);
    }
}
