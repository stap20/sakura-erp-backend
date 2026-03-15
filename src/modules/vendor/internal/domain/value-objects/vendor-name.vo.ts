import { ValueObject } from 'src/shared/domain/value-objects/value-object';
import {
    EmptyVendorNameError,
    VendorNameTooShortError,
    VendorNameTooLongError,
} from '../errors/vendor-name.error';

export class VendorName extends ValueObject<string> {
    private static readonly MIN_LENGTH = 2;
    private static readonly MAX_LENGTH = 100;

    private constructor(value: string) {
        super(value);
    }

    public static create(name: string): VendorName {
        if (!name || name.trim().length === 0) {
            throw new EmptyVendorNameError();
        }

        const trimmed = name.trim();

        if (trimmed.length < this.MIN_LENGTH) {
            throw new VendorNameTooShortError();
        }

        if (trimmed.length > this.MAX_LENGTH) {
            throw new VendorNameTooLongError();
        }

        return new VendorName(trimmed);
    }
}
