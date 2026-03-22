export class UpdateSalesOrderCommand {
    constructor(
        public readonly orderId: string,
        public readonly notes: string | null,
    ) {}
}
