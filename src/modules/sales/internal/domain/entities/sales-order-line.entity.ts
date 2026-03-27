export interface CreateSalesOrderLineParams {
    id: string;
    itemId: string;
    itemName: string;
    measureUnit: string;
    quantity: number;
    unitPrice: number;
    isGift?: boolean;
}

export class SalesOrderLine {
    public readonly id: string;
    public readonly itemId: string;
    public readonly itemName: string;
    public readonly measureUnit: string;
    public quantity: number;
    public unitPrice: number;
    public isGift: boolean;

    constructor(params: CreateSalesOrderLineParams) {
        this.id = params.id;
        this.itemId = params.itemId;
        this.itemName = params.itemName;
        this.measureUnit = params.measureUnit;
        this.quantity = params.quantity;
        this.unitPrice = params.unitPrice;
        this.isGift = params.isGift ?? false;
    }

    public update(quantity?: number, unitPrice?: number, isGift?: boolean): void {
        if (quantity !== undefined) this.quantity = quantity;
        if (unitPrice !== undefined) this.unitPrice = unitPrice;
        if (isGift !== undefined) this.isGift = isGift;
    }
}
