export class FillingOrderLineResponse {
    id: string;
    variantItemId: string;
    variantName: string;
    quantityUnits: number;
    unitWeightGm: number;
    bulkUsedGm: number;
}

export class GetFillingOrderResponse {
    constructor(
        public readonly id: string,
        public readonly productId: string,
        public readonly bulkUsedGm: number,
        public readonly notes: string | null,
        public readonly status: string,
        public readonly performedBy: string | null,
        public readonly executedAt: Date | null,
        public readonly lines: FillingOrderLineResponse[],
        public readonly createdAt: Date,
        public readonly updatedAt: Date,
    ) {}
}
