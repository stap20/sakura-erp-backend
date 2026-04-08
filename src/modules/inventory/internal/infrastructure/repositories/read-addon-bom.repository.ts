import { Injectable, Inject } from '@nestjs/common';
import { IInventoryPrismaClient } from '../database/inventory.prisma.client.interface';
import { AddonComponentEntity } from '../database/entities/addon-component.entity';

@Injectable()
export class ReadAddonBomRepository {
    constructor(
        @Inject(IInventoryPrismaClient)
        private readonly prisma: IInventoryPrismaClient,
    ) {}

    async getByVariantItemId(variantItemId: string): Promise<AddonComponentEntity[]> {
        const rows = await this.prisma.addonComponent.findMany({
            where: { variantItemId },
            orderBy: { ingredientCategory: 'asc' },
        });
        return rows.map((row) => new AddonComponentEntity(row));
    }
}
