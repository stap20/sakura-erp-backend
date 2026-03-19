import { InventoryItemDto } from './inventory-item.dto';
import { ProductFacadeDto } from './product-facade.dto';
import { RestockItemDto } from './restock-item.dto';
import { DeductItemDto } from './deduct-item.dto';

export interface IInventoryFacade {
    getItem(itemId: string): Promise<InventoryItemDto | null>;
    getProduct(productId: string): Promise<ProductFacadeDto | null>;
    restockItem(data: RestockItemDto): Promise<void>;
    deductItem(data: DeductItemDto): Promise<void>;
}

export const IInventoryFacade = Symbol('IInventoryFacade');
