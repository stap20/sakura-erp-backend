export class RemoveFillingOrderLineCommand {
    constructor(
        public readonly orderId: string,
        public readonly lineId: string,
    ) {}
}
