import { ValueObject } from 'src/shared/domain/value-objects/value-object';
import { InvalidVendorIdError } from '../errors/vendor-id.error';

export class VendorId extends ValueObject<string> {
    private constructor(value: string) {
        super(value);
    }

    public static create(id: string): VendorId {
        if (!id || id.trim().length === 0) {
            throw new InvalidVendorIdError(id);
        }
        return new VendorId(id);
    }
}
