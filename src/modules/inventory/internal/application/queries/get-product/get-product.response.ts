export class GetProductResponse {
    constructor(
        public readonly id: string,
        public readonly name: string,
        public readonly description: string | null,
        public readonly referenceBatchGm: number | null,
        public readonly referenceDurationMin: number | null,
        public readonly referenceWastePercent: number | null,
        public readonly createdAt: Date,
        public readonly updatedAt: Date,
    ) {}
}
