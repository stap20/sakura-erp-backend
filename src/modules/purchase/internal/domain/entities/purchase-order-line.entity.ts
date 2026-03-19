export interface CreatePurchaseOrderLineParams {
    id: string;
    itemId: string;
    itemName: string;
    measureUnit: string;
    quantity: number;
    unitPrice: number;
}

export class PurchaseOrderLine {
    public readonly id: string;
    public readonly itemId: string;
    public readonly itemName: string;
    public readonly measureUnit: string;
    public quantity: number;
    public unitPrice: number;

    constructor(params: CreatePurchaseOrderLineParams) {
        this.id = params.id;
        this.itemId = params.itemId;
        this.itemName = params.itemName;
        this.measureUnit = params.measureUnit;
        this.quantity = params.quantity;
        this.unitPrice = params.unitPrice;
    }

    public update(quantity?: number, unitPrice?: number): void {
        if (quantity !== undefined) {
            this.quantity = quantity;
        }
        if (unitPrice !== undefined) {
            this.unitPrice = unitPrice;
        }
    }
}
