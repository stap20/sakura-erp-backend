export class GetAllSalesOrdersResponse {
    constructor(
        public readonly id: string,
        public readonly customerName: string,
        public readonly customerPhone: string | null,
        public readonly customerContact: string | null,
        public readonly status: string,
        public readonly notes: string | null,
        public readonly shippedAt: Date | null,
        public readonly linesCount: number,
        public readonly createdAt: Date,
        public readonly updatedAt: Date,
    ) {}
}
