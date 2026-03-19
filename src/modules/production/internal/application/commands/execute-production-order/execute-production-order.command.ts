export class ExecuteProductionOrderCommand {
    constructor(
        public readonly orderId: string,
        public readonly performedBy: string,
        public readonly notes?: string | null,
    ) {}
}
