import { Injectable, Inject } from '@nestjs/common';
import { IInventoryFacade } from 'src/modules/inventory/shared/contracts/inventory-facade.interface';
import { InventoryItemDto } from 'src/modules/inventory/shared/contracts/inventory-item.dto';
import { DeductItemDto } from 'src/modules/inventory/shared/contracts/deduct-item.dto';
import { RestockItemDto } from 'src/modules/inventory/shared/contracts/restock-item.dto';

@Injectable()
export class InventoryGateway {
    constructor(
        @Inject(IInventoryFacade)
        private readonly inventoryFacade: IInventoryFacade,
    ) {}

    async getItem(itemId: string): Promise<InventoryItemDto | null> {
        return this.inventoryFacade.getItem(itemId);
    }

    async deductItem(data: DeductItemDto): Promise<void> {
        return this.inventoryFacade.deductItem(data);
    }

    async restockItem(data: RestockItemDto): Promise<void> {
        return this.inventoryFacade.restockItem(data);
    }
}
