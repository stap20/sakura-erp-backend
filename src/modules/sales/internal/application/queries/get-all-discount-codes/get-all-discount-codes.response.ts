export class GetAllDiscountCodesResponse {
    constructor(
        public readonly id: string,
        public readonly code: string,
        public readonly type: string,
        public readonly value: number,
        public readonly maxUses: number | null,
        public readonly usedCount: number,
        public readonly expiresAt: Date | null,
        public readonly isActive: boolean,
        public readonly createdAt: Date,
        public readonly updatedAt: Date,
    ) {}
}
