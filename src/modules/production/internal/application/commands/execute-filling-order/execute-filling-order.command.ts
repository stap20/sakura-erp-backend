export class ExecuteFillingOrderCommand {
    constructor(
        public readonly orderId: string,
        public readonly performedBy: string = 'SYSTEM',
    ) {}
}
