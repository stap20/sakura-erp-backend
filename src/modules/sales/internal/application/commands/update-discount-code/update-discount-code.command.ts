export class UpdateDiscountCodeCommand {
    constructor(
        public readonly id: string,
        public readonly code?: string,
        public readonly type?: 'PERCENT' | 'FIXED_AMOUNT',
        public readonly value?: number,
        public readonly maxUses?: number | null,
        public readonly expiresAt?: Date | null,
        public readonly isActive?: boolean,
    ) {}
}
