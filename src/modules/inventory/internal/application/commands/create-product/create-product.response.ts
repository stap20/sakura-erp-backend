export class CreateProductResponse {
    constructor(
        public readonly id: string,
        public readonly name: string,
        public readonly description: string | null,
        public readonly referenceBatchGm: number | null,
        public readonly referenceDurationMin: number | null,
    ) {}
}
