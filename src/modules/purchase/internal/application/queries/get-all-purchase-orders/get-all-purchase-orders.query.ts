export class GetAllPurchaseOrdersQuery {
    constructor(
        public readonly vendorId?: string,
        public readonly status?: string,
        public readonly offset: number = 0,
        public readonly limit: number = 20,
    ) {}
}
