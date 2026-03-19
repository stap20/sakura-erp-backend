import { DomainError } from 'src/shared/domain/errors/domain.error';
import { NotFoundDomainError } from 'src/shared/domain/errors/not-found.domain.error';

export class PurchaseOrderNotFoundError extends NotFoundDomainError {
    constructor(id: string) {
        super(`Purchase order with id ${id} not found`);
    }
}

export class PurchaseOrderLineNotFoundError extends NotFoundDomainError {
    constructor(id: string) {
        super(`Purchase order line with id ${id} not found`);
    }
}

export class PurchaseOrderNotEditableError extends DomainError {
    constructor() {
        super('Purchase order is not in DRAFT status and cannot be edited');
    }
}

export class PurchaseOrderNotConfirmableError extends DomainError {
    constructor() {
        super('Purchase order is not in DRAFT status and cannot be confirmed');
    }
}

export class PurchaseOrderNotReceivableError extends DomainError {
    constructor() {
        super('Purchase order is not in CONFIRMED status and cannot be received');
    }
}

export class PurchaseOrderNotCancellableError extends DomainError {
    constructor() {
        super('Purchase order cannot be cancelled in its current status');
    }
}

export class DuplicateLineItemError extends DomainError {
    constructor() {
        super('An item with this ID already exists in the purchase order');
    }
}
