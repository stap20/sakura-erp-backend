import { NotFoundError } from 'src/shared/application/errors/notfound.error';
import { BadRequestError } from 'src/shared/application/errors/bad-request.error';

export class ProductionOrderNotFoundApplicationError extends NotFoundError {
    constructor(orderId: string) {
        super(`Production order with id ${orderId} not found`);
    }
}

export class ProductItemNotFoundApplicationError extends NotFoundError {
    constructor(productId: string) {
        super(`Inventory item ${productId} not found`);
    }
}

export class ProductItemNotFinalProductApplicationError extends BadRequestError {
    constructor(productId: string) {
        super(`Item ${productId} is not a FINAL_PRODUCT`);
    }
}

export class ProductItemMissingUnitWeightApplicationError extends BadRequestError {
    constructor(productId: string) {
        super(`FINAL_PRODUCT item ${productId} has no unitWeightGm set`);
    }
}

export class ActiveRecipeNotFoundApplicationError extends NotFoundError {
    constructor(productId: string) {
        super(`No ACTIVE recipe found for product ${productId}`);
    }
}

export class IngredientItemNotFoundApplicationError extends NotFoundError {
    constructor(itemId: string) {
        super(`Ingredient item ${itemId} not found in inventory`);
    }
}
