import { Injectable, Inject } from '@nestjs/common';
import { IInventoryFacade } from 'src/shared/contracts/inventory/inventory-facade.interface';
import { InventoryItemDto } from 'src/shared/contracts/inventory/inventory-item.dto';
import { RestockItemDto } from 'src/shared/contracts/inventory/restock-item.dto';

@Injectable()
export class InventoryGateway {
    constructor(
        @Inject(IInventoryFacade)
        private readonly inventoryFacade: IInventoryFacade,
    ) {}

    async getItem(itemId: string): Promise<InventoryItemDto | null> {
        return this.inventoryFacade.getItem(itemId);
    }

    async restockItem(data: RestockItemDto): Promise<void> {
        return this.inventoryFacade.restockItem(data);
    }
}
