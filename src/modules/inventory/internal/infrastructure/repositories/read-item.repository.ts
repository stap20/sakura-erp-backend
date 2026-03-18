import { Injectable, Inject } from '@nestjs/common';
import { IInventoryPrismaClient } from '../database/inventory.prisma.client.interface';
import { ItemEntity } from '../database/entities/item.entity';

@Injectable()
export class ReadItemRepository {
    constructor(
        @Inject(IInventoryPrismaClient)
        private readonly prisma: IInventoryPrismaClient,
    ) {}

    async getById(id: string): Promise<ItemEntity | null> {
        const item = await this.prisma.item.findUnique({ where: { id } });

        if (!item) return null;

        return new ItemEntity({ ...item, currentStock: Number(item.currentStock) });
    }

    async search(
        offset: number = 0,
        limit: number = 20,
        filter: object = {},
    ): Promise<ItemEntity[]> {
        const items = await this.prisma.item.findMany({
            where: filter,
            skip: offset,
            take: limit,
            orderBy: [{ name: 'asc' }],
        });

        return items.map(
            (item) =>
                new ItemEntity({ ...item, currentStock: Number(item.currentStock) }),
        );
    }

    async hasTransactions(itemId: string): Promise<boolean> {
        const count = await this.prisma.inventoryTransaction.count({
            where: { itemId },
        });
        return count > 0;
    }
}
