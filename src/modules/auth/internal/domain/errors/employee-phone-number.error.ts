import { DomainError } from 'src/shared/domain/errors/domain.error';

export class EmptyEmployeePhoneNumberError extends DomainError {
    constructor() {
        super('Employee phone number cannot be empty');
    }
}

export class InvalidEmployeePhoneNumberFormatError extends DomainError {
    constructor() {
        super('Invalid employee phone number format. Must be a valid phone number');
    }
} 