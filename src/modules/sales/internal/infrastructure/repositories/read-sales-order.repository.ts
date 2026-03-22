import { Injectable, Inject } from '@nestjs/common';
import { ISalesPrismaClient } from '../database/sales.prisma.client.interface';
import { SalesOrderEntity } from '../database/entities/sales-order.entity';

export interface SalesOrderFilter {
    status?: string;
}

@Injectable()
export class ReadSalesOrderRepository {
    constructor(
        @Inject(ISalesPrismaClient)
        private readonly prisma: ISalesPrismaClient,
    ) {}

    async getById(id: string): Promise<SalesOrderEntity | null> {
        const entity = await this.prisma.salesOrder.findUnique({
            where: { id },
            include: { lines: true },
        });
        if (!entity) return null;
        return entity as any;
    }

    async findAll(filter: SalesOrderFilter = {}): Promise<SalesOrderEntity[]> {
        const where: any = {};
        if (filter.status) where.status = filter.status;

        const entities = await this.prisma.salesOrder.findMany({
            where,
            include: { lines: true },
            orderBy: { createdAt: 'desc' },
        });
        return entities as any[];
    }
}
