export class UpdateProductionOrderNotesCommand {
    constructor(
        public readonly orderId: string,
        public readonly notes: string | null,
    ) {}
}
