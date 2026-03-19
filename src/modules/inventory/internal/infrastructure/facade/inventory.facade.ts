import { Injectable } from '@nestjs/common';
import { IInventoryFacade } from 'src/modules/inventory/shared/contracts/inventory-facade.interface';
import { InventoryItemDto } from 'src/modules/inventory/shared/contracts/inventory-item.dto';
import { RestockItemDto } from 'src/modules/inventory/shared/contracts/restock-item.dto';
import { ReadItemRepository } from '../repositories/read-item.repository';
import { RestockItemHandler } from '../../application/commands/restock-item/restock-item.handler';
import { RestockItemCommand } from '../../application/commands/restock-item/restock-item.command';

@Injectable()
export class InventoryFacade implements IInventoryFacade {
    constructor(
        private readonly readItemRepository: ReadItemRepository,
        private readonly restockItemHandler: RestockItemHandler,
    ) {}

    async getItem(itemId: string): Promise<InventoryItemDto | null> {
        const item = await this.readItemRepository.getById(itemId);
        if (!item) return null;
        return new InventoryItemDto(item.id, item.name, item.type, item.measureUnit);
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
}
