export interface ItemSummary {
    id: string;
    name: string;
    type: string;
    measureUnit: string;
    currentStock: number;
    categoryId: string | null;
    status: string;
    createdAt: Date;
    updatedAt: Date;
    unitWeightGm: number | null;
    weightedAverageUnitPrice: number | null;
}

export class GetAllItemsResponse {
    constructor(public readonly items: ItemSummary[]) {}
}
