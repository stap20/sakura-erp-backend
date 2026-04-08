import { DomainError } from 'src/shared/domain/errors/domain.error';
import { NotFoundDomainError } from 'src/shared/domain/errors/not-found.domain.error';

export class ItemNotFoundError extends NotFoundDomainError {
    constructor(itemId: string) {
        super(`Item with id ${itemId} not found`);
    }
}

export class ItemAlreadyExistsError extends DomainError {
    constructor(name: string) {
        super(`Item with name "${name}" already exists`);
    }
}

export class ItemAlreadyArchivedError extends DomainError {
    constructor(itemId: string) {
        super(`Item with id ${itemId} is already archived`);
    }
}

export class InsufficientStockError extends DomainError {
    constructor(itemId: string, requested: number, available: number) {
        super(
            `Insufficient stock for item ${itemId}: requested ${requested}, available ${available}`,
        );
    }
}

export class ItemHasStockError extends DomainError {
    constructor(itemId: string, stock: number) {
        super(
            `Cannot archive item ${itemId}: it still has ${stock} units in stock`,
        );
    }
}

export class InvalidCategoryForItemTypeError extends DomainError {
    constructor() {
        super('Category can only be assigned to RAW_MATERIAL items');
    }
}

export class InvalidQuantityError extends DomainError {
    constructor() {
        super('Quantity must be greater than 0');
    }
}

export class MeasureUnitLockedError extends DomainError {
    constructor() {
        super(
            'Measure unit cannot be changed once transactions exist for this item',
        );
    }
}

export class InvalidCurrentStockError extends DomainError {
    constructor() {
        super('Current stock cannot be negative');
    }
}

export class InvalidUnitWeightGmError extends DomainError {
    constructor() {
        super('Unit weight must be greater than 0');
    }
}

export class InvalidWeightedAverageUnitPriceError extends DomainError {
    constructor() {
        super('Weighted average unit price cannot be negative');
    }
}
