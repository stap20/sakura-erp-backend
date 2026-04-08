import { Injectable, Inject } from '@nestjs/common';
import { IAddonBomRepository } from '../../domain/repositories/addon-bom.repo.interface';
import { AddonComponent } from '../../domain/entities/addon-component.entity';
import { ItemId } from '../../domain/value-objects/item-id.vo';
import { IInventoryPrismaClient } from '../database/inventory.prisma.client.interface';
import { AddonComponentMapper } from '../database/mappers/addon-component.mapper';

@Injectable()
export class AddonBomRepository implements IAddonBomRepository {
    constructor(
        @Inject(IInventoryPrismaClient)
        private readonly prisma: IInventoryPrismaClient,
        private readonly mapper: AddonComponentMapper,
    ) {}

    async getByVariantItemId(variantItemId: ItemId): Promise<AddonComponent[]> {
        const rows = await this.prisma.addonComponent.findMany({
            where: { variantItemId: variantItemId.value },
        });
        return rows.map((row) => this.mapper.toDomain(row));
    }

    async saveAll(components: AddonComponent[]): Promise<void> {
        if (components.length === 0) return;
        await this.prisma.addonComponent.createMany({
            data: components.map((c) => this.mapper.toPersistence(c)),
        });
    }

    async deleteAllForVariant(variantItemId: ItemId): Promise<void> {
        await this.prisma.addonComponent.deleteMany({
            where: { variantItemId: variantItemId.value },
        });
    }
}
