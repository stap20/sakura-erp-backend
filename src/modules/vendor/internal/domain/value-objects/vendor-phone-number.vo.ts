import { ValueObject } from 'src/shared/domain/value-objects/value-object';
import { EmptyVendorPhoneNumberError } from '../errors/vendor-phone-number.error';

export class VendorPhoneNumber extends ValueObject<string> {
    private constructor(value: string) {
        super(value);
    }

    public static create(phoneNumber: string): VendorPhoneNumber {
        if (!phoneNumber || phoneNumber.trim().length === 0) {
            throw new EmptyVendorPhoneNumberError();
        }

        return new VendorPhoneNumber(phoneNumber.trim());
    }
}
