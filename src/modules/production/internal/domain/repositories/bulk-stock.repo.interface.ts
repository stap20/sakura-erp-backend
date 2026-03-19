import { BulkStock } from '../entities/bulk-stock.entity';

export interface IBulkStockRepository {
    getByProductId(productId: string): Promise<BulkStock | null>;
    save(bulkStock: BulkStock): Promise<void>;
}

export const IBulkStockRepository = Symbol('IBulkStockRepository');
