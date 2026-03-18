export class RestockItemResponse {
    constructor(
        public readonly itemId: string,
        public readonly newStock: number,
        public readonly transactionId: string,
        public readonly quantity: number,
    ) {}
}
