import { NotFoundError } from 'src/shared/application/errors/notfound.error';
import { ConflictError } from 'src/shared/application/errors/conflict.error';

export class ProductionOrderNotFoundApplicationError extends NotFoundError {
    constructor(id: string) {
        super(`Production order with id ${id} not found`);
    }
}

export class FillingOrderNotFoundApplicationError extends NotFoundError {
    constructor(id: string) {
        super(`Filling order with id ${id} not found`);
    }
}

export class ProductNotFoundApplicationError extends NotFoundError {
    constructor(id: string) {
        super(`Product with id ${id} not found`);
    }
}

export class ActiveRecipeNotFoundApplicationError extends NotFoundError {
    constructor(productId: string) {
        super(`No active recipe found for product ${productId}`);
    }
}

export class VariantNotValidApplicationError extends ConflictError {
    constructor(itemId: string) {
        super(`Item ${itemId} is not a FINAL_PRODUCT or does not belong to this product`);
    }
}

export class BulkStockNotFoundApplicationError extends NotFoundError {
    constructor(productId: string) {
        super(`No bulk stock found for product ${productId}`);
    }
}
