export class RestockItemDto {
    constructor(
        public readonly itemId: string,
        public readonly quantity: number,
        public readonly performedBy: string,
        public readonly vendorId?: string | null,
        public readonly unitPrice?: number | null,
        public readonly notes?: string | null,
    ) {}
}
