import { Injectable, Inject } from '@nestjs/common';
import { IPackagingBomRepository } from '../../domain/repositories/packaging-bom.repo.interface';
import { PackagingComponent } from '../../domain/entities/packaging-component.entity';
import { ItemId } from '../../domain/value-objects/item-id.vo';
import { IInventoryPrismaClient } from '../database/inventory.prisma.client.interface';
import { PackagingComponentMapper } from '../database/mappers/packaging-component.mapper';

@Injectable()
export class PackagingBomRepository implements IPackagingBomRepository {
    constructor(
        @Inject(IInventoryPrismaClient)
        private readonly prisma: IInventoryPrismaClient,
        private readonly mapper: PackagingComponentMapper,
    ) {}

    async getByVariantItemId(variantItemId: ItemId): Promise<PackagingComponent[]> {
        const rows = await this.prisma.packagingComponent.findMany({
            where: { variantItemId: variantItemId.value },
        });
        return rows.map((row) => this.mapper.toDomain(row));
    }

    async saveAll(components: PackagingComponent[]): Promise<void> {
        if (components.length === 0) return;
        await this.prisma.packagingComponent.createMany({
            data: components.map((c) => this.mapper.toPersistence(c)),
        });
    }

    async deleteAllForVariant(variantItemId: ItemId): Promise<void> {
        await this.prisma.packagingComponent.deleteMany({
            where: { variantItemId: variantItemId.value },
        });
    }
}
