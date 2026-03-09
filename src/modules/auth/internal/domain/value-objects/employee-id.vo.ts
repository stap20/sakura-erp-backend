import { ValueObject } from 'src/shared/domain/value-objects/value-object';
import { InvalidEmployeeIdFormatError } from '../errors/employee-id.error';
import { ValueValidator } from 'src/shared/domain/value-objects/value-validator';

export class EmployeeId extends ValueObject<number> {
    private constructor(value: number) {
        super(value);
    }

    public static create(id: number): EmployeeId {
        this.validate(id);
        return new EmployeeId(id);
    }

    private static validate(id: number): void {
        if (!ValueValidator.isPositiveNumber(id)) {
            throw new InvalidEmployeeIdFormatError();
        }
    }
} 