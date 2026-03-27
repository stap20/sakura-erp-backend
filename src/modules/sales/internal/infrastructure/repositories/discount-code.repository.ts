import { Injectable, Inject } from '@nestjs/common';
import { IDiscountCodeRepository } from '../../domain/repositories/discount-code.repo.interface';
import { DiscountCode } from '../../domain/entities/discount-code.entity';
import { ISalesPrismaClient } from '../database/sales.prisma.client.interface';

@Injectable()
export class DiscountCodeRepository implements IDiscountCodeRepository {
    constructor(
        @Inject(ISalesPrismaClient)
        private readonly prisma: ISalesPrismaClient,
    ) {}

    async save(code: DiscountCode): Promise<void> {
        await this.prisma.discountCode.upsert({
            where: { id: code.id },
            update: {
                code: code.code,
                type: code.type,
                value: code.value,
                maxUses: code.maxUses,
                usedCount: code.usedCount,
                expiresAt: code.expiresAt,
                isActive: code.isActive,
                updatedAt: code.updatedAt,
            },
            create: {
                id: code.id,
                code: code.code,
                type: code.type,
                value: code.value,
                maxUses: code.maxUses,
                usedCount: code.usedCount,
                expiresAt: code.expiresAt,
                isActive: code.isActive,
                createdAt: code.createdAt,
                updatedAt: code.updatedAt,
            },
        });
    }

    async getByCode(code: string): Promise<DiscountCode | null> {
        const entity = await this.prisma.discountCode.findUnique({ where: { code } });
        if (!entity) return null;
        return this.toEntity(entity as any);
    }

    async getById(id: string): Promise<DiscountCode | null> {
        const entity = await this.prisma.discountCode.findUnique({ where: { id } });
        if (!entity) return null;
        return this.toEntity(entity as any);
    }

    private toEntity(raw: any): DiscountCode {
        return new DiscountCode({
            id: raw.id,
            code: raw.code,
            type: raw.type as 'PERCENT' | 'FIXED_AMOUNT',
            value: Number(raw.value),
            maxUses: raw.maxUses ?? null,
            usedCount: raw.usedCount,
            expiresAt: raw.expiresAt ?? null,
            isActive: raw.isActive,
            createdAt: raw.createdAt,
            updatedAt: raw.updatedAt,
        });
    }
}
