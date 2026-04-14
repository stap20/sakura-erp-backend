import { DomainError } from 'src/shared/domain/errors/domain.error';
import { NotFoundDomainError } from 'src/shared/domain/errors/not-found.domain.error';

export class ProductionOrderNotEditableError extends DomainError {
    constructor(status: string) {
        super(`Production order is not editable in status: ${status}`);
    }
}

export class FillingOrderNotEditableError extends DomainError {
    constructor(status: string) {
        super(`Filling order is not editable in status: ${status}`);
    }
}

export class InsufficientBulkStockError extends DomainError {
    constructor(available: number, required: number) {
        super(`Insufficient bulk stock: available ${available}gm, required ${required}gm`);
    }
}

export class FillingOrderLineNotFoundDomainError extends NotFoundDomainError {
    constructor(lineId: string) {
        super(`Filling order line ${lineId} not found`);
    }
}
