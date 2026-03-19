export class PurchaseOrderLineResponse {
    id: string;
    itemId: string;
    itemName: string;
    measureUnit: string;
    quantity: number;
    unitPrice: number;
}

export class GetPurchaseOrderResponse {
    constructor(
        public readonly id: string,
        public readonly vendorId: string,
        public readonly vendorName: string,
        public readonly vendorPhone: string | null,
        public readonly vendorContact: string | null,
        public readonly status: string,
        public readonly notes: string | null,
        public readonly expectedDeliveryDate: Date | null,
        public readonly receivedAt: Date | null,
        public readonly lines: PurchaseOrderLineResponse[],
        public readonly createdAt: Date,
        public readonly updatedAt: Date,
    ) {}
}
