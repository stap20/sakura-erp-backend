export class CreateProductCommand {
    constructor(
        public readonly name: string,
        public readonly description?: string | null,
        public readonly referenceBatchGm?: number | null,
        public readonly referenceDurationMin?: number | null,
    ) {}
}
