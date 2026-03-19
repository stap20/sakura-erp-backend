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
