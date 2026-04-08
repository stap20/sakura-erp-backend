import { Item } from '../aggregates/item.aggregate';
import { ItemId } from '../value-objects/item-id.vo';
import { ItemName } from '../value-objects/item-name.vo';

export interface StockTransactionData {
    id: string;
    type: string;
    quantity: number;
    vendorId: string | null;
    unitPrice: number | null;
    performedBy: string;
    notes: string | null;
}

export interface IItemRepository {
    getById(id: ItemId): Promise<Item | null>;
    getByName(name: ItemName): Promise<Item | null>;
    save(item: Item): Promise<void>;
    saveWithTransaction(
        item: Item,
        transaction: StockTransactionData,
    ): Promise<void>;
    hasTransactions(id: ItemId): Promise<boolean>;
}

export const IItemRepository = Symbol('IItemRepository');
