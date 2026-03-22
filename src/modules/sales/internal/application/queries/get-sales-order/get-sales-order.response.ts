export class SalesOrderLineResponse {
    id: string;
    itemId: string;
    itemName: string;
    measureUnit: string;
    quantity: number;
    unitPrice: number;
    isGift: boolean;
}

export class GetSalesOrderResponse {
    constructor(
        public readonly id: string,
        public readonly customerName: string,
        public readonly customerPhone: string | null,
        public readonly customerContact: string | null,
        public readonly status: string,
        public readonly notes: string | null,
        public readonly shippedAt: Date | null,
        public readonly lines: SalesOrderLineResponse[],
        public readonly createdAt: Date,
        public readonly updatedAt: Date,
    ) {}
}
