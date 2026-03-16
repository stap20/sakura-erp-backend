import { DomainError } from 'src/shared/domain/errors/domain.error';

export class VendorNotFoundError extends DomainError {
    constructor(vendorId: string) {
        super(`Vendor with id ${vendorId} not found`);
    }
}

export class VendorAlreadyExistsError extends DomainError {
    constructor(name: string) {
        super(`Vendor with name "${name}" already exists`);
    }
}

export class VendorAlreadyActiveError extends DomainError {
    constructor(vendorId: string) {
        super(`Vendor with id ${vendorId} is already active`);
    }
}

export class VendorAlreadyInactiveError extends DomainError {
    constructor(vendorId: string) {
        super(`Vendor with id ${vendorId} is already inactive`);
    }
}

export class VendorNotActiveError extends DomainError {
    constructor(vendorId: string) {
        super(`Vendor with id ${vendorId} is not active`);
    }
}
