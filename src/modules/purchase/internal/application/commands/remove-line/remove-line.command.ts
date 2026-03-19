export class RemoveLineCommand {
    constructor(
        public readonly orderId: string,
        public readonly lineId: string,
    ) {}
}
