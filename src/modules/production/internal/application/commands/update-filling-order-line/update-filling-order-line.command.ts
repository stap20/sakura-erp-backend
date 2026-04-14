export class UpdateFillingOrderLineCommand {
    constructor(
        public readonly orderId: string,
        public readonly lineId: string,
        public readonly quantityUnits: number,
    ) {}
}
