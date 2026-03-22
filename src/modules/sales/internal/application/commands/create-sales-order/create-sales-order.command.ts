export class CreateSalesOrderCommand {
    constructor(
        public readonly customerName: string,
        public readonly customerPhone: string | null,
        public readonly customerContact: string | null,
        public readonly notes: string | null,
    ) {}
}
