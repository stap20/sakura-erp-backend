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

export class SalesOrderNotPayableApplicationError extends ConflictError {
    constructor(orderId: string) {
        super(`Sales order ${orderId} payment status is not PENDING and cannot be marked as paid`);
    }
}

export class DiscountCodeNotFoundApplicationError extends NotFoundError {
    constructor(code: string) {
        super(`Discount code '${code}' not found`);
    }
}

export class DiscountCodeIdNotFoundApplicationError extends NotFoundError {
    constructor(id: string) {
        super(`Discount code with id '${id}' not found`);
    }
}

export class DiscountCodeInvalidApplicationError extends ConflictError {
    constructor(reason: string) {
        super(`Discount code is invalid: ${reason}`);
    }
}

export class DiscountCodeDuplicateApplicationError extends ConflictError {
    constructor(code: string) {
        super(`Discount code '${code}' already exists`);
    }
}
