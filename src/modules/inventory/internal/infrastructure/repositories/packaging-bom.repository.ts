import { Injectable, Inject } from '@nestjs/common';
import { IPackagingBomRepository } from '../../domain/repositories/packaging-bom.repo.interface';
import { PackagingComponent } from '../../domain/entities/packaging-component.entity';
import { IInventoryPrismaClient } from '../database/inventory.prisma.client.interface';

@Injectable()
export class PackagingBomRepository implements IPackagingBomRepository {
    constructor(
        @Inject(IInventoryPrismaClient)
        private readonly prisma: IInventoryPrismaClient,
    ) {}

    async getByVariantItemId(variantItemId: string): Promise<PackagingComponent[]> {
        const rows = await this.prisma.packagingComponent.findMany({
            where: { variantItemId },
        });
        return rows.map((row) =>
            PackagingComponent.create({
                id: row.id,
                variantItemId: row.variantItemId,
                packagingItemId: row.packagingItemId,
                qtyPerUnit: row.qtyPerUnit,
            }),
        );
    }

    async saveAll(components: PackagingComponent[]): Promise<void> {
        if (components.length === 0) return;
        await this.prisma.packagingComponent.createMany({
            data: components.map((c) => ({
                id: c.getId().value,
                variantItemId: c.getVariantItemId(),
                packagingItemId: c.getPackagingItemId(),
                qtyPerUnit: c.getQtyPerUnit(),
            })),
        });
    }

    async deleteAllForVariant(variantItemId: string): Promise<void> {
        await this.prisma.packagingComponent.deleteMany({
            where: { variantItemId },
        });
    }
}
