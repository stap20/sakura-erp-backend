import { ProductionOrder } from '../aggregates/production-order.aggregate';
import { ProductionOrderId } from '../value-objects/production-order-id.vo';

export interface IProductionOrderRepository {
    getById(id: ProductionOrderId): Promise<ProductionOrder | null>;
    save(order: ProductionOrder): Promise<void>;
}

export const IProductionOrderRepository = Symbol('IProductionOrderRepository');
