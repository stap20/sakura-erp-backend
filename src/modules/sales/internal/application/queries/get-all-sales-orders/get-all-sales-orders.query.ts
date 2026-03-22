export class GetAllSalesOrdersQuery {
    constructor(
        public readonly status?: string,
        public readonly paymentStatus?: string,
    ) {}
}
