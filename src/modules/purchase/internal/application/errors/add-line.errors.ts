import { NotFoundError } from 'src/shared/application/errors/notfound.error';
import { ConflictError } from 'src/shared/application/errors/conflict.error';

export class ItemNotFoundForPurchaseError extends NotFoundError {
    constructor(itemId: string) {
        super(`Item with id ${itemId} not found`);
    }
}

export class InvalidItemTypeForPurchaseError extends ConflictError {
    constructor(type: string) {
        super(`Item type ${type} is not allowed in a purchase order. Must be RAW_MATERIAL or PACKAGING`);
    }
}
