import { ValueObject } from 'src/shared/domain/value-objects/value-object';
import { DomainError } from 'src/shared/domain/errors/domain.error';

class InvalidItemStatusError extends DomainError {
    constructor(status: string) {
        super(`Invalid item status: ${status}. Allowed: ACTIVE, ARCHIVED`);
    }
}

export class ItemStatus extends ValueObject<string> {
    private constructor(value: string) {
        super(value);
    }

    public static active(): ItemStatus {
        return new ItemStatus('ACTIVE');
    }

    public static archived(): ItemStatus {
        return new ItemStatus('ARCHIVED');
    }

    public static fromString(status: string): ItemStatus {
        if (status !== 'ACTIVE' && status !== 'ARCHIVED') {
            throw new InvalidItemStatusError(status);
        }
        return new ItemStatus(status);
    }

    public isArchived(): boolean {
        return this._value === 'ARCHIVED';
    }
}
