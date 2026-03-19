import { Injectable } from '@nestjs/common';
import { IInventoryFacade } from 'src/modules/inventory/shared/contracts/inventory-facade.interface';
import { InventoryItemDto } from 'src/modules/inventory/shared/contracts/inventory-item.dto';
import { ProductFacadeDto } from 'src/modules/inventory/shared/contracts/product-facade.dto';
import { RestockItemDto } from 'src/modules/inventory/shared/contracts/restock-item.dto';
import { DeductItemDto } from 'src/modules/inventory/shared/contracts/deduct-item.dto';
import { ReadItemRepository } from '../repositories/read-item.repository';
import { ReadProductRepository } from '../repositories/read-product.repository';
import { ReadPackagingBomRepository } from '../repositories/read-packaging-bom.repository';
import { RestockItemHandler } from '../../application/commands/restock-item/restock-item.handler';
import { RestockItemCommand } from '../../application/commands/restock-item/restock-item.command';
import { DeductItemHandler } from '../../application/commands/deduct-item/deduct-item.handler';
import { DeductItemCommand } from '../../application/commands/deduct-item/deduct-item.command';

@Injectable()
export class InventoryFacade implements IInventoryFacade {
    constructor(
        private readonly readItemRepository: ReadItemRepository,
        private readonly readProductRepository: ReadProductRepository,
        private readonly readPackagingBomRepository: ReadPackagingBomRepository,
        private readonly restockItemHandler: RestockItemHandler,
        private readonly deductItemHandler: DeductItemHandler,
    ) {}

    async getItem(itemId: string): Promise<InventoryItemDto | null> {
        const item = await this.readItemRepository.getById(itemId);
        if (!item) return null;
        const components = await this.readPackagingBomRepository.getByVariantItemId(itemId);
        return new InventoryItemDto(
            item.id,
            item.name,
            item.type,
            item.measureUnit,
            item.unitWeightGm ?? null,
            item.weightedAverageUnitPrice ?? null,
            components.map((c) => ({ packagingItemId: c.packagingItemId, qtyPerUnit: c.qtyPerUnit })),
        );
    }

    async getProduct(productId: string): Promise<ProductFacadeDto | null> {
        const product = await this.readProductRepository.getById(productId);
        if (!product) return null;
        return new ProductFacadeDto(product.id, product.name, product.description);
    }

    async restockItem(data: RestockItemDto): Promise<void> {
        await this.restockItemHandler.handle(
            new RestockItemCommand(
                data.itemId,
                data.quantity,
                data.performedBy,
                data.vendorId,
                data.unitPrice,
                data.notes,
            ),
        );
    }

    async deductItem(data: DeductItemDto): Promise<void> {
        await this.deductItemHandler.handle(
            new DeductItemCommand(
                data.itemId,
                data.quantity,
                data.performedBy,
                data.notes,
            ),
        );
    }
}
