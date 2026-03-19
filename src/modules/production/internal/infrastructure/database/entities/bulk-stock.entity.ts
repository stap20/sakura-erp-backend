export class BulkStockEntity {
    id: string;
    productId: string;
    availableGm: number;
    updatedAt: Date;

    constructor(data: Partial<BulkStockEntity>) {
        Object.assign(this, data);
    }
}
