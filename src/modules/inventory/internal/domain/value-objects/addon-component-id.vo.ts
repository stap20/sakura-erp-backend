import { ValueObject } from 'src/shared/domain/value-objects/value-object';
import { InvalidAddonComponentIdError } from '../errors/addon-component.error';

export class AddonComponentId extends ValueObject<string> {
    private constructor(value: string) {
        super(value);
    }

    public static create(id: string): AddonComponentId {
        if (!id || id.trim().length === 0) {
            throw new InvalidAddonComponentIdError();
        }
        return new AddonComponentId(id.trim());
    }
}
