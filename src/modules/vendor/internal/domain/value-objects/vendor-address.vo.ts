import { ValueObject } from 'src/shared/domain/value-objects/value-object';
import { EmptyVendorAddressError } from '../errors/vendor-address.error';

export class VendorAddress extends ValueObject<string> {
    private constructor(value: string) {
        super(value);
    }

    public static create(address: string): VendorAddress {
        if (!address || address.trim().length === 0) {
            throw new EmptyVendorAddressError();
        }

        return new VendorAddress(address.trim());
    }
}
