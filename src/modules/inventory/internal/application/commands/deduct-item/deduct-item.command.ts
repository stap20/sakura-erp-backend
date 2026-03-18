export class DeductItemCommand {
    constructor(
        public readonly id: string,
        public readonly quantity: number,
        public readonly performedBy: string,
        public readonly notes?: string | null,
    ) {}
}
