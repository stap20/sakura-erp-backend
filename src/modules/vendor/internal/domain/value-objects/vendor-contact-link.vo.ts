import { ValueObject } from 'src/shared/domain/value-objects/value-object';

export class VendorContactLink extends ValueObject<string | null> {
    private constructor(value: string | null) {
        super(value);
    }

    public static create(contactLink?: string | null): VendorContactLink {
        if (!contactLink || contactLink.trim().length === 0) {
            return new VendorContactLink(null);
        }

        return new VendorContactLink(contactLink.trim());
    }
}
