import { NotFoundError } from 'src/shared/application/errors/notfound.error';
import { ConflictError } from 'src/shared/application/errors/conflict.error';

export class ItemNotFoundApplicationError extends NotFoundError {
    constructor(itemId: string) {
        super(`Item with id ${itemId} not found`);
    }
}

export class ItemAlreadyExistsApplicationError extends ConflictError {
    constructor(name: string) {
        super(`Item with name ${name} already exists`);
    }
}

export class MeasureUnitLockedApplicationError extends ConflictError {
    constructor() {
        super('Measure unit cannot be changed once the item has transactions');
    }
}

export class ItemNotFinalProductApplicationError extends ConflictError {
    constructor() {
        super('Item is not a FINAL_PRODUCT and cannot have a packaging BOM');
    }
}

export class ItemNotFinalProductForAddonError extends ConflictError {
    constructor() {
        super('Item is not a FINAL_PRODUCT and cannot have an addon BOM');
    }
}
