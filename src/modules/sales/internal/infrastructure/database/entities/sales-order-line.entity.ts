export class SalesOrderLineEntity {
    id: string;
    orderId: string;
    itemId: string;
    itemName: string;
    measureUnit: string;
    quantity: number | string;
    unitPrice: number | string;

    constructor(data: Partial<SalesOrderLineEntity>) {
        Object.assign(this, data);
    }
}
