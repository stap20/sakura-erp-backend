export class DeductItemDto {
    constructor(
        public readonly itemId: string,
        public readonly quantity: number,
        public readonly performedBy: string,
        public readonly notes?: string | null,
    ) {}
}
