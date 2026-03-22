export class ApplyDiscountCommand {
    constructor(
        public readonly orderId: string,
        public readonly code: string,
    ) {}
}
