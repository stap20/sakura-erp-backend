export class PurchaseOrderLineEntity {
    id: string;
    orderId: string;
    itemId: string;
    itemName: string;
    measureUnit: string;
    quantity: any; // Prisma Decimal
    unitPrice: any; // Prisma Decimal

    constructor(data: Partial<PurchaseOrderLineEntity>) {
        Object.assign(this, data);
    }
}
