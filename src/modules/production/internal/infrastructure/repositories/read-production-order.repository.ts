import { Injectable, Inject } from '@nestjs/common';
import { IProductionPrismaClient } from '../database/production.prisma.client.interface';
import { ProductionOrderEntity } from '../database/entities/production-order.entity';

export interface ProductionOrderFilter {
    productId?: string;
    status?: string;
}

@Injectable()
export class ReadProductionOrderRepository {
    constructor(
        @Inject(IProductionPrismaClient)
        private readonly prisma: IProductionPrismaClient,
    ) {}

    async getById(id: string): Promise<ProductionOrderEntity | null> {
        const entity = await this.prisma.productionOrder.findUnique({
            where: { id },
        });
        if (!entity) return null;
        return entity as any;
    }

    async findAll(
        filter: ProductionOrderFilter,
        offset: number = 0,
        limit: number = 20,
    ): Promise<ProductionOrderEntity[]> {
        const where: any = {};
        if (filter.productId) where.productId = filter.productId;
        if (filter.status) where.status = filter.status;

        const entities = await this.prisma.productionOrder.findMany({
            where,
            skip: offset,
            take: limit,
            orderBy: { createdAt: 'desc' },
        });
        return entities as any[];
    }
}
