import { Injectable, Inject } from '@nestjs/common';
import { ICategoryRepository } from '../../domain/repositories/category.repo.interface';
import { Category } from '../../domain/aggregates/category.aggregate';
import { CategoryId } from '../../domain/value-objects/category-id.vo';
import { CategoryName } from '../../domain/value-objects/category-name.vo';
import { IInventoryPrismaClient } from '../database/inventory.prisma.client.interface';
import { CategoryMapper } from '../database/mappers/category.mapper';

@Injectable()
export class CategoryRepository implements ICategoryRepository {
    constructor(
        @Inject(IInventoryPrismaClient)
        private readonly prisma: IInventoryPrismaClient,
        private readonly categoryMapper: CategoryMapper,
    ) {}

    async getById(id: CategoryId): Promise<Category | null> {
        const entity = await this.prisma.category.findUnique({
            where: { id: id.value },
        });

        if (!entity) return null;

        return this.categoryMapper.toDomain(entity);
    }

    async getByName(name: CategoryName): Promise<Category | null> {
        const entity = await this.prisma.category.findUnique({
            where: { name: name.value },
        });

        if (!entity) return null;

        return this.categoryMapper.toDomain(entity);
    }

    async save(category: Category): Promise<void> {
        const data = this.categoryMapper.toPersistence(category);

        await this.prisma.category.upsert({
            where: { id: data.id },
            update: {
                name: data.name,
                description: data.description,
                status: data.status,
                updatedAt: new Date(),
            },
            create: data,
        });
    }
}
