import { Injectable, Inject } from '@nestjs/common';
import { IPurchasePrismaClient } from '../database/purchase.prisma.client.interface';
import { PurchaseOrderEntity } from '../database/entities/purchase-order.entity';

export interface PurchaseOrderFilter {
    vendorId?: string;
    status?: string;
}

@Injectable()
export class ReadPurchaseOrderRepository {
    constructor(
        @Inject(IPurchasePrismaClient)
        private readonly prisma: IPurchasePrismaClient,
    ) {}

    async getById(id: string): Promise<PurchaseOrderEntity | null> {
        const entity = await this.prisma.purchaseOrder.findUnique({
            where: { id },
            include: { lines: true },
        });
        if (!entity) return null;
        return entity as any;
    }

    async findAll(
        filter: PurchaseOrderFilter,
        offset: number = 0,
        limit: number = 20,
    ): Promise<PurchaseOrderEntity[]> {
        const where: any = {};
        if (filter.vendorId) where.vendorId = filter.vendorId;
        if (filter.status) where.status = filter.status;

        const entities = await this.prisma.purchaseOrder.findMany({
            where,
            include: { lines: true },
            skip: offset,
            take: limit,
            orderBy: { createdAt: 'desc' },
        });
        return entities as any[];
    }

    async getByVendorId(vendorId: string): Promise<PurchaseOrderEntity[]> {
        const entities = await this.prisma.purchaseOrder.findMany({
            where: { vendorId },
            include: { lines: true },
            orderBy: { createdAt: 'desc' },
        });
        return entities as any[];
    }
}
