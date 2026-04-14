export class AddFillingOrderLineCommand {
    constructor(
        public readonly orderId: string,
        public readonly variantItemId: string,
        public readonly quantityUnits: number,
    ) {}
}
