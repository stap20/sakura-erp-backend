import { ValueObject } from 'src/shared/domain/value-objects/value-object';
import { DomainError } from 'src/shared/domain/errors/domain.error';

class InvalidCategoryStatusError extends DomainError {
    constructor(status: string) {
        super(
            `Invalid category status: ${status}. Allowed: ACTIVE, ARCHIVED`,
        );
    }
}

export class CategoryStatus extends ValueObject<string> {
    private constructor(value: string) {
        super(value);
    }

    public static active(): CategoryStatus {
        return new CategoryStatus('ACTIVE');
    }

    public static archived(): CategoryStatus {
        return new CategoryStatus('ARCHIVED');
    }

    public static fromString(status: string): CategoryStatus {
        if (status !== 'ACTIVE' && status !== 'ARCHIVED') {
            throw new InvalidCategoryStatusError(status);
        }
        return new CategoryStatus(status);
    }

    public isArchived(): boolean {
        return this._value === 'ARCHIVED';
    }
}
