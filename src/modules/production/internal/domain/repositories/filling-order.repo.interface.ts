import { FillingOrder } from '../aggregates/filling-order.aggregate';
import { FillingOrderId } from '../value-objects/filling-order-id.vo';

export interface IFillingOrderRepository {
    getById(id: FillingOrderId): Promise<FillingOrder | null>;
    save(order: FillingOrder): Promise<void>;
}

export const IFillingOrderRepository = Symbol('IFillingOrderRepository');
