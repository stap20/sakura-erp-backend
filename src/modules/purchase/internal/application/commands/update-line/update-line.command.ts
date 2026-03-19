export class UpdateLineCommand {
    constructor(
        public readonly orderId: string,
        public readonly lineId: string,
        public readonly quantity?: number,
        public readonly unitPrice?: number,
    ) {}
}
