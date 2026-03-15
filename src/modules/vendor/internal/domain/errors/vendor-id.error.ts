import { DomainError } from 'src/shared/domain/errors/domain.error';

export class InvalidVendorIdError extends DomainError {
    constructor(id: string) {
        super(`Invalid vendor id: ${id}`);
    }
}
