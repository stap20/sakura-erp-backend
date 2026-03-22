import { SalesOrder } from '../aggregates/sales-order.aggregate';
import { SalesOrderId } from '../value-objects/sales-order-id.vo';

export interface ISalesOrderRepository {
    getById(id: SalesOrderId): Promise<SalesOrder | null>;
    save(order: SalesOrder): Promise<void>;
}

export const ISalesOrderRepository = Symbol('ISalesOrderRepository');
