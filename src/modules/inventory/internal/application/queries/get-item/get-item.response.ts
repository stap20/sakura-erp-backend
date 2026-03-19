export class GetItemResponse {
    constructor(
        public readonly id: string,
        public readonly name: string,
        public readonly type: string,
        public readonly measureUnit: string,
        public readonly currentStock: number,
        public readonly categoryId: string | null,
        public readonly status: string,
        public readonly createdAt: Date,
        public readonly updatedAt: Date,
        public readonly unitWeightGm: number | null,
        public readonly weightedAverageUnitPrice: number | null,
    ) {}
}
