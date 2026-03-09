import { ValueObject } from 'src/shared/domain/value-objects/value-object';
import { InvalidEmployeeCardIdFormatError } from '../errors/employee-card-id.error';
import { ValueValidator } from 'src/shared/domain/value-objects/value-validator';

export class EmployeeCardId extends ValueObject<number> {
    private constructor(value: number) {
        super(value);
    }

    public static create(id: number): EmployeeCardId {
        this.validate(id);
        return new EmployeeCardId(id);
    }

    private static validate(id: number): void {
        if (
            !ValueValidator.isNumberInRange(id, 1000, 9999)
        ) {
            throw new InvalidEmployeeCardIdFormatError();
        }
    }
}
