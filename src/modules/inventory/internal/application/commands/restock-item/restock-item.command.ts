export class RestockItemCommand {
    constructor(
        public readonly id: string,
        public readonly quantity: number,
        public readonly performedBy: string,
        public readonly vendorId?: string | null,
        public readonly notes?: string | null,
    ) {}
}
