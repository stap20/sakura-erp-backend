export class ItemEntity {
    id: string;
    name: string;
    type: string;
    measureUnit: string;
    currentStock: number;
    categoryId: string | null;
    unitWeightGm: number | null;
    lastUnitPrice: number | null;
    status: string;
    createdAt: Date;
    updatedAt: Date;

    constructor(data: Partial<ItemEntity>) {
        Object.assign(this, data);
    }
}
