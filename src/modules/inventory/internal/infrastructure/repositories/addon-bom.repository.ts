import { Injectable, Inject } from '@nestjs/common';
import { IAddonBomRepository } from '../../domain/repositories/addon-bom.repo.interface';
import { AddonComponent } from '../../domain/entities/addon-component.entity';
import { IInventoryPrismaClient } from '../database/inventory.prisma.client.interface';

@Injectable()
export class AddonBomRepository implements IAddonBomRepository {
    constructor(
        @Inject(IInventoryPrismaClient)
        private readonly prisma: IInventoryPrismaClient,
    ) {}

    async getByVariantItemId(variantItemId: string): Promise<AddonComponent[]> {
        const rows = await this.prisma.addonComponent.findMany({
            where: { variantItemId },
        });
        return rows.map((row) =>
            AddonComponent.create({
                id: row.id,
                variantItemId: row.variantItemId,
                ingredientCategory: row.ingredientCategory,
                addonItemId: row.addonItemId,
            }),
        );
    }

    async saveAll(components: AddonComponent[]): Promise<void> {
        if (components.length === 0) return;
        await this.prisma.addonComponent.createMany({
            data: components.map((c) => ({
                id: c.getId().value,
                variantItemId: c.getVariantItemId(),
                ingredientCategory: c.getIngredientCategory(),
                addonItemId: c.getAddonItemId(),
            })),
        });
    }

    async deleteAllForVariant(variantItemId: string): Promise<void> {
        await this.prisma.addonComponent.deleteMany({
            where: { variantItemId },
        });
    }
}
