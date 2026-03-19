import { Injectable, Inject } from '@nestjs/common';
import { IProductionPrismaClient } from '../database/production.prisma.client.interface';
import { FillingOrderEntity } from '../database/entities/filling-order.entity';

export interface FillingOrderFilter {
    productId?: string;
    status?: string;
}

@Injectable()
export class ReadFillingOrderRepository {
    constructor(
        @Inject(IProductionPrismaClient)
        private readonly prisma: IProductionPrismaClient,
    ) {}

    async getById(id: string): Promise<FillingOrderEntity | null> {
        const entity = await this.prisma.fillingOrder.findUnique({
            where: { id },
            include: { lines: true },
        });
        if (!entity) return null;
        return entity as any;
    }

    async findAll(
        filter: FillingOrderFilter,
        offset: number = 0,
        limit: number = 20,
    ): Promise<FillingOrderEntity[]> {
        const where: any = {};
        if (filter.productId) where.productId = filter.productId;
        if (filter.status) where.status = filter.status;

        const entities = await this.prisma.fillingOrder.findMany({
            where,
            include: { lines: true },
            skip: offset,
            take: limit,
            orderBy: { createdAt: 'desc' },
        });
        return entities as any[];
    }
}
