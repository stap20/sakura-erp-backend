export class CreateFillingOrderLineInput {
    constructor(
        public readonly variantItemId: string,
        public readonly quantityUnits: number,
        public readonly unitWeightGm: number,
    ) {}
}

export class CreateFillingOrderCommand {
    constructor(
        public readonly productId: string,
        public readonly lines: CreateFillingOrderLineInput[],
        public readonly notes?: string | null,
    ) {}
}
