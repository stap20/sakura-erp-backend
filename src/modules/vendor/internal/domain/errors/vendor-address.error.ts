import { DomainError } from 'src/shared/domain/errors/domain.error';

export class EmptyVendorAddressError extends DomainError {
    constructor() {
        super('Vendor address cannot be empty');
    }
}
