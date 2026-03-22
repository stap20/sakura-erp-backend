import { Injectable, Inject } from '@nestjs/common';
import { IProductRepository } from '../../domain/repositories/product.repo.interface';
import { Product } from '../../domain/aggregates/product.aggregate';
import { ProductId } from '../../domain/value-objects/product-id.vo';
import { IInventoryPrismaClient } from '../database/inventory.prisma.client.interface';
import { ProductMapper } from '../database/mappers/product.mapper';

@Injectable()
export class ProductRepository implements IProductRepository {
    constructor(
        @Inject(IInventoryPrismaClient)
        private readonly prisma: IInventoryPrismaClient,
        private readonly productMapper: ProductMapper,
    ) {}

    async getById(id: ProductId): Promise<Product | null> {
        const entity = await this.prisma.product.findUnique({ where: { id: id.value } });
        if (!entity) return null;
        return this.productMapper.toDomain(entity);
    }

    async getByName(name: string): Promise<Product | null> {
        const entity = await this.prisma.product.findUnique({ where: { name } });
        if (!entity) return null;
        return this.productMapper.toDomain(entity);
    }

    async save(product: Product): Promise<void> {
        const data = this.productMapper.toPersistence(product);
        await this.prisma.product.upsert({
            where: { id: data.id },
            update: { name: data.name, description: data.description, referenceBatchGm: data.referenceBatchGm, referenceDurationMin: data.referenceDurationMin, referenceWastePercent: data.referenceWastePercent },
            create: { id: data.id, name: data.name, description: data.description, referenceBatchGm: data.referenceBatchGm, referenceDurationMin: data.referenceDurationMin, referenceWastePercent: data.referenceWastePercent },
        });
    }
}
