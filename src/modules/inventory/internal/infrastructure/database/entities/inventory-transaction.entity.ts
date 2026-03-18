export class InventoryTransactionEntity {
    id: string;
    itemId: string;
    type: string;
    quantity: number;
    vendorId: string | null;
    unitPrice: number | null;
    performedBy: string;
    notes: string | null;
    createdAt: Date;

    constructor(data: Partial<InventoryTransactionEntity>) {
        Object.assign(this, data);
    }
}
