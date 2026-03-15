import { DomainError } from 'src/shared/domain/errors/domain.error';

export class EmptyVendorNameError extends DomainError {
    constructor() {
        super('Vendor name cannot be empty');
    }
}

export class VendorNameTooShortError extends DomainError {
    constructor() {
        super('Vendor name must be at least 2 characters long');
    }
}

export class VendorNameTooLongError extends DomainError {
    constructor() {
        super('Vendor name must not exceed 100 characters');
    }
}
