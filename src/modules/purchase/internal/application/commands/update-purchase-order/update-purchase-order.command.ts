export class UpdatePurchaseOrderCommand {
    constructor(
        public readonly orderId: string,
        public readonly notes?: string | null,
    ) {}
}
