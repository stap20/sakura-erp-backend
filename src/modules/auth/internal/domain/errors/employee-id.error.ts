import { DomainError } from 'src/shared/domain/errors/domain.error';

export class InvalidEmployeeIdFormatError extends DomainError {
    constructor() {
        super('Invalid Employee ID format. Must be a positive number');
    }
} 