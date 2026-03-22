import { NotFoundError } from 'src/shared/application/errors/notfound.error';
import { BadRequestError } from 'src/shared/application/errors/bad-request.error';
import { ConflictError } from 'src/shared/application/errors/conflict.error';

export class SalesOrderNotFoundApplicationError extends NotFoundError {
    constructor(orderId: string) {
        super(`Sales order with id ${orderId} not found`);
    }
}

export class ItemNotFoundForSaleError extends NotFoundError {
    constructor(itemId: string) {
        super(`Item with id ${itemId} not found`);
    }
}

export class InvalidItemTypeForSaleError extends BadRequestError {
    constructor(itemType: string) {
        super(`Item type '${itemType}' is not valid for sales. Only FINAL_PRODUCT and SHIPPING_PACKAGING are allowed`);
    }
}

export class InsufficientStockForSaleError extends ConflictError {
    constructor(itemId: string) {
        super(`Insufficient stock for item ${itemId}`);
    }
}
