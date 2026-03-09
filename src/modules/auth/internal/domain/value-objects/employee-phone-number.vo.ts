import { ValueObject } from 'src/shared/domain/value-objects/value-object';
import { EmptyEmployeePhoneNumberError, InvalidEmployeePhoneNumberFormatError } from '../errors/employee-phone-number.error';
import { ValueValidator } from 'src/shared/domain/value-objects/value-validator';

export class EmployeePhoneNumber extends ValueObject<string> {
    private constructor(value: string) {
        super(value);
    }

    public static create(id: string): EmployeePhoneNumber {
        this.validate(id);
        return new EmployeePhoneNumber(id);
    }

    private static validate(id: string): void {
        if (ValueValidator.isEmpty(id)) {
            throw new EmptyEmployeePhoneNumberError();
        }

        if(!ValueValidator.isValidPhoneNumber(id)) {
            throw new InvalidEmployeePhoneNumberFormatError();
        }
    }
} 