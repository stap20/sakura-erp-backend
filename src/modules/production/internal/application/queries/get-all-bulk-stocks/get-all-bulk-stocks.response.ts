export class GetAllBulkStocksResponse {
    constructor(
        public readonly productId: string,
        public readonly availableGm: number,
        public readonly updatedAt: Date,
    ) {}
}
