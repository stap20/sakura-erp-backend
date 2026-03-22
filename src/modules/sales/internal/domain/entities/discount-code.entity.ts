export interface CreateDiscountCodeParams {
    id: string;
    code: string;
    type: 'PERCENT' | 'FIXED_AMOUNT';
    value: number;
    maxUses?: number | null;
    usedCount?: number;
    expiresAt?: Date | null;
    isActive?: boolean;
    createdAt?: Date;
    updatedAt?: Date;
}

export class DiscountCode {
    public readonly id: string;
    public code: string;
    public type: 'PERCENT' | 'FIXED_AMOUNT';
    public value: number;
    public maxUses: number | null;
    public usedCount: number;
    public expiresAt: Date | null;
    public isActive: boolean;
    public readonly createdAt: Date;
    public updatedAt: Date;

    constructor(params: CreateDiscountCodeParams) {
        const now = new Date();
        this.id = params.id;
        this.code = params.code;
        this.type = params.type;
        this.value = params.value;
        this.maxUses = params.maxUses ?? null;
        this.usedCount = params.usedCount ?? 0;
        this.expiresAt = params.expiresAt ?? null;
        this.isActive = params.isActive ?? true;
        this.createdAt = params.createdAt ?? now;
        this.updatedAt = params.updatedAt ?? now;
    }

    public update(data: {
        code?: string;
        type?: 'PERCENT' | 'FIXED_AMOUNT';
        value?: number;
        maxUses?: number | null;
        expiresAt?: Date | null;
        isActive?: boolean;
    }): void {
        if (data.code !== undefined) this.code = data.code;
        if (data.type !== undefined) this.type = data.type;
        if (data.value !== undefined) this.value = data.value;
        if (data.maxUses !== undefined) this.maxUses = data.maxUses;
        if (data.expiresAt !== undefined) this.expiresAt = data.expiresAt;
        if (data.isActive !== undefined) this.isActive = data.isActive;
        this.updatedAt = new Date();
    }

    public incrementUsedCount(): void {
        this.usedCount += 1;
        this.updatedAt = new Date();
    }
}
