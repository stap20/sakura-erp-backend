export class ProductionOrderEntity {
    id: string;
    productId: string;
    batchWeightGm: number;
    wastePercent: number;
    notes: string | null;
    status: string;
    performedBy: string | null;
    executedAt: Date | null;
    createdAt: Date;
    updatedAt: Date;

    constructor(data: Partial<ProductionOrderEntity>) {
        Object.assign(this, data);
    }
}
