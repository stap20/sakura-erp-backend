export class SalesOrderLineEntity {
    id: string;
    orderId: string;
    itemId: string;
    itemName: string;
    measureUnit: string;
    quantity: number | string;
    unitPrice: number | string;
    isGift: boolean;

    constructor(data: Partial<SalesOrderLineEntity>) {
        Object.assign(this, data);
    }
}
