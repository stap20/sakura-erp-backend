export class CreateProductionOrderCommand {
    constructor(
        public readonly productId: string,
        public readonly batchWeightGm: number,
        public readonly wastePercent?: number,
        public readonly notes?: string | null,
    ) {}
}
