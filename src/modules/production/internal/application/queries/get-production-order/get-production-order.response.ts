export class GetProductionOrderResponse {
    constructor(
        public readonly id: string,
        public readonly productId: string,
        public readonly batchWeightGm: number,
        public readonly wastePercent: number,
        public readonly notes: string | null,
        public readonly status: string,
        public readonly performedBy: string | null,
        public readonly executedAt: Date | null,
        public readonly createdAt: Date,
        public readonly updatedAt: Date,
    ) {}
}
