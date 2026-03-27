import { Injectable, Inject } from '@nestjs/common';
import { ISalesPrismaClient } from '../database/sales.prisma.client.interface';

export interface DiscountCodeRecord {
    id: string;
    code: string;
    type: string;
    value: number;
    maxUses: number | null;
    usedCount: number;
    expiresAt: Date | null;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
}

@Injectable()
export class ReadDiscountCodeRepository {
    constructor(
        @Inject(ISalesPrismaClient)
        private readonly prisma: ISalesPrismaClient,
    ) {}

    async findAll(): Promise<DiscountCodeRecord[]> {
        const rows = await this.prisma.discountCode.findMany({
            orderBy: { createdAt: 'desc' },
        });
        return rows.map((r: any) => this.toRecord(r));
    }

    async findById(id: string): Promise<DiscountCodeRecord | null> {
        const row = await this.prisma.discountCode.findUnique({ where: { id } });
        if (!row) return null;
        return this.toRecord(row as any);
    }

    private toRecord(raw: any): DiscountCodeRecord {
        return {
            id: raw.id,
            code: raw.code,
            type: raw.type,
            value: Number(raw.value),
            maxUses: raw.maxUses ?? null,
            usedCount: raw.usedCount,
            expiresAt: raw.expiresAt ?? null,
            isActive: raw.isActive,
            createdAt: raw.createdAt,
            updatedAt: raw.updatedAt,
        };
    }
}
