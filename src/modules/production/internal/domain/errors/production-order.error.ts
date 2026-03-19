import { DomainError } from 'src/shared/domain/errors/domain.error';

export class ProductionOrderNotEditableError extends DomainError {
    constructor(orderId: string, status: string) {
        super(`Production order ${orderId} is not editable (status: ${status})`);
    }
}

export class ProductionOrderNotConfirmedError extends DomainError {
    constructor(orderId: string, status: string) {
        super(`Production order ${orderId} cannot be executed (status: ${status})`);
    }
}

export class ProductionOrderNotCancellableError extends DomainError {
    constructor(orderId: string, status: string) {
        super(`Production order ${orderId} cannot be cancelled (status: ${status})`);
    }
}

export class ProductionOrderNoLinesError extends DomainError {
    constructor(orderId: string) {
        super(`Production order ${orderId} has no lines and cannot be confirmed`);
    }
}

export class ProductionOrderLineNotFoundError extends DomainError {
    constructor(lineId: string) {
        super(`Production order line ${lineId} not found`);
    }
}
