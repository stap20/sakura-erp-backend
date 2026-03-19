import { Injectable, Inject } from '@nestjs/common';
import { IInventoryPrismaClient } from '../database/inventory.prisma.client.interface';
import { PackagingComponentEntity } from '../database/entities/packaging-component.entity';

@Injectable()
export class ReadPackagingBomRepository {
    constructor(
        @Inject(IInventoryPrismaClient)
        private readonly prisma: IInventoryPrismaClient,
    ) {}

    async getByVariantItemId(variantItemId: string): Promise<PackagingComponentEntity[]> {
        const rows = await this.prisma.packagingComponent.findMany({
            where: { variantItemId },
            orderBy: { packagingItemId: 'asc' },
        });
        return rows.map((row) => new PackagingComponentEntity(row));
    }
}
