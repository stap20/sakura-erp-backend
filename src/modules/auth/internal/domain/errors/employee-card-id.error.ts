import { DomainError } from 'src/shared/domain/errors/domain.error';

export class InvalidEmployeeCardIdFormatError extends DomainError {
    constructor() {
        super('Invalid Employee Card ID format. Must be a valid number between 1000 and 9999');
    }
}