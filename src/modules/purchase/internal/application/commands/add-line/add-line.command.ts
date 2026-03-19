export class AddLineCommand {
    constructor(
        public readonly orderId: string,
        public readonly itemId: string,
        public readonly quantity: number,
        public readonly unitPrice: number,
    ) {}
}
