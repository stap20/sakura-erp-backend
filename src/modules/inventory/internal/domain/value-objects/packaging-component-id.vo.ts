import { ValueObject } from 'src/shared/domain/value-objects/value-object';
import { InvalidPackagingComponentIdError } from '../errors/packaging-component.error';

export class PackagingComponentId extends ValueObject<string> {
    private constructor(value: string) {
        super(value);
    }

    public static create(id: string): PackagingComponentId {
        if (!id || id.trim().length === 0) {
            throw new InvalidPackagingComponentIdError();
        }
        return new PackagingComponentId(id.trim());
    }
}
