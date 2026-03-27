import { DomainError } from 'src/shared/domain/errors/domain.error';

export class SalesOrderNotEditableError extends DomainError {
    constructor() {
        super('Sales order is not in DRAFT status and cannot be edited');
    }
}

export class SalesOrderNotConfirmableError extends DomainError {
    constructor() {
        super('Sales order is not in DRAFT status and cannot be confirmed');
    }
}

export class SalesOrderNotShippableError extends DomainError {
    constructor() {
        super('Sales order is not in CONFIRMED status and cannot be shipped');
    }
}

export class SalesOrderNotCancellableError extends DomainError {
    constructor() {
        super('Sales order cannot be cancelled in its current status');
    }
}

export class SalesOrderLineNotFoundError extends DomainError {
    constructor(id: string) {
        super(`Sales order line with id ${id} not found`);
    }
}

export class DuplicateLineItemError extends DomainError {
    constructor() {
        super('An item with this ID already exists in the sales order');
    }
}

export class SalesOrderNotPayableError extends DomainError {
    constructor() {
        super('Sales order payment status is not PENDING and cannot be marked as paid');
    }
}
