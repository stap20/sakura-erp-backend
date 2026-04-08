import { DomainError } from 'src/shared/domain/errors/domain.error';

export class InvalidPackagingComponentIdError extends DomainError {
    constructor() {
        super('Packaging component ID cannot be empty');
    }
}
