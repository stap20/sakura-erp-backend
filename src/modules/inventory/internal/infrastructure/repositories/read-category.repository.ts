import { Injectable, Inject } from '@nestjs/common';
import { IInventoryPrismaClient } from '../database/inventory.prisma.client.interface';
import { CategoryEntity } from '../database/entities/category.entity';

@Injectable()
export class ReadCategoryRepository {
    constructor(
        @Inject(IInventoryPrismaClient)
        private readonly prisma: IInventoryPrismaClient,
    ) {}

    async getById(id: string): Promise<CategoryEntity | null> {
        const category = await this.prisma.category.findUnique({
            where: { id },
        });

        if (!category) return null;

        return new CategoryEntity(category);
    }

    async search(
        offset: number = 0,
        limit: number = 20,
        filter: object = {},
    ): Promise<CategoryEntity[]> {
        const categories = await this.prisma.category.findMany({
            where: filter,
            skip: offset,
            take: limit,
            orderBy: [{ name: 'asc' }],
        });

        return categories.map((c) => new CategoryEntity(c));
    }

    async hasActiveItems(categoryId: string): Promise<boolean> {
        const count = await this.prisma.item.count({
            where: { categoryId, status: 'ACTIVE' },
        });
        return count > 0;
    }
}
