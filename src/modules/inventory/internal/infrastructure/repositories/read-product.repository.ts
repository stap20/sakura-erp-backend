import { Injectable, Inject } from '@nestjs/common';
import { IInventoryPrismaClient } from '../database/inventory.prisma.client.interface';
import { ProductEntity } from '../database/entities/product.entity';

@Injectable()
export class ReadProductRepository {
    constructor(
        @Inject(IInventoryPrismaClient)
        private readonly prisma: IInventoryPrismaClient,
    ) {}

    async getById(id: string): Promise<ProductEntity | null> {
        const product = await this.prisma.product.findUnique({ where: { id } });
        if (!product) return null;
        return new ProductEntity(product);
    }

    async search(search?: string, offset = 0, limit = 20): Promise<ProductEntity[]> {
        const products = await this.prisma.product.findMany({
            where: search ? { name: { contains: search, mode: 'insensitive' } } : {},
            skip: offset,
            take: limit,
            orderBy: { name: 'asc' },
        });
        return products.map((p) => new ProductEntity(p));
    }
}
