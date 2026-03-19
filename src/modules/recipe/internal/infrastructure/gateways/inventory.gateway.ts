import { Injectable, Inject } from '@nestjs/common';
import { IInventoryFacade } from 'src/modules/inventory/shared/contracts/inventory-facade.interface';
import { ProductFacadeDto } from 'src/modules/inventory/shared/contracts/product-facade.dto';

@Injectable()
export class InventoryGateway {
    constructor(
        @Inject(IInventoryFacade)
        private readonly inventoryFacade: IInventoryFacade,
    ) {}

    async getProduct(productId: string): Promise<ProductFacadeDto | null> {
        return this.inventoryFacade.getProduct(productId);
    }
}
