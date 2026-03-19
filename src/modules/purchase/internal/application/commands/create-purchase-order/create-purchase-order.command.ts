export class CreatePurchaseOrderCommand {
    constructor(
        public readonly vendorId: string,
        public readonly vendorName: string,
        public readonly vendorPhone?: string | null,
        public readonly vendorContact?: string | null,
        public readonly notes?: string | null,
        public readonly expectedDeliveryDate?: Date | null,
    ) {}
}
