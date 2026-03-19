export class UpdateProductionOrderCommand {
    constructor(
        public readonly orderId: string,
        public readonly batchWeightGm?: number,
        public readonly wastePercent?: number,
        public readonly notes?: string | null,
    ) {}
}
