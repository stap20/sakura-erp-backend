import { DomainError } from 'src/shared/domain/errors/domain.error';

export class EmptyProductNameError extends DomainError {
    constructor() {
        super('Product name cannot be empty');
    }
}

export class ProductNameTooShortError extends DomainError {
    constructor() {
        super('Product name must be at least 2 characters');
    }
}

export class ProductNameTooLongError extends DomainError {
    constructor() {
        super('Product name cannot exceed 100 characters');
    }
}

export class InvalidReferenceBatchGmError extends DomainError {
    constructor() {
        super('Reference batch weight must be greater than 0');
    }
}

export class InvalidReferenceDurationMinError extends DomainError {
    constructor() {
        super('Reference duration must be greater than 0');
    }
}

export class InvalidReferenceWastePercentError extends DomainError {
    constructor() {
        super('Reference waste percent must be between 0 and 100');
    }
}
