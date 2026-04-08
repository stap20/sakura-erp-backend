import { ValueObject } from 'src/shared/domain/value-objects/value-object';
import { InvalidReferenceWastePercentError } from '../errors/product.error';

export class ReferenceWastePercent extends ValueObject<number> {
    private constructor(value: number) {
        super(value);
    }

    public static create(value: number): ReferenceWastePercent {
        if (value < 0 || value > 100) {
            throw new InvalidReferenceWastePercentError();
        }
        return new ReferenceWastePercent(value);
    }
}
