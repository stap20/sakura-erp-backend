import { DomainError } from 'src/shared/domain/errors/domain.error';

export class EmptyVendorPhoneNumberError extends DomainError {
    constructor() {
        super('Vendor phone number cannot be empty');
    }
}
