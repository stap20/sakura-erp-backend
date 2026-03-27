import { Injectable, Inject } from '@nestjs/common';
import { ISalesPrismaClient } from '../database/sales.prisma.client.interface';
import { SalesOrderEntity } from '../database/entities/sales-order.entity';

export interface SalesOrderFilter {
    status?: string;
    paymentStatus?: string;
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
        if (filter.paymentStatus) where.paymentStatus = filter.paymentStatus;

        const entities = await this.prisma.salesOrder.findMany({
            where,
            include: { lines: true },
            orderBy: { createdAt: 'desc' },
        });
        return entities as any[];
    }

    async countConfirmedToday(): Promise<number> {
        const startOfDay = new Date();
        startOfDay.setHours(0, 0, 0, 0);
        const endOfDay = new Date();
        endOfDay.setHours(23, 59, 59, 999);

        return this.prisma.salesOrder.count({
            where: {
                status: { not: 'DRAFT' },
                createdAt: { gte: startOfDay, lte: endOfDay },
                invoiceNumber: { not: null },
            },
        });
    }
}
