export class ExecuteProductionOrderCommand {
    constructor(
        public readonly orderId: string,
        public readonly performedBy: string = 'SYSTEM',
    ) {}
}
