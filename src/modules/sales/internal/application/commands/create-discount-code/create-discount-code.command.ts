export class CreateDiscountCodeCommand {
    constructor(
        public readonly code: string,
        public readonly type: 'PERCENT' | 'FIXED_AMOUNT',
        public readonly value: number,
        public readonly maxUses?: number | null,
        public readonly expiresAt?: Date | null,
    ) {}
}
