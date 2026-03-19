import { PurchaseOrder } from '../aggregates/purchase-order.aggregate';
import { PurchaseOrderId } from '../value-objects/purchase-order-id.vo';

export interface IPurchaseOrderRepository {
    getById(id: PurchaseOrderId): Promise<PurchaseOrder | null>;
    save(order: PurchaseOrder): Promise<void>;
}

export const IPurchaseOrderRepository = Symbol('IPurchaseOrderRepository');
