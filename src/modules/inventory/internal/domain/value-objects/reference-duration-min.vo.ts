import { ValueObject } from 'src/shared/domain/value-objects/value-object';
import { InvalidReferenceDurationMinError } from '../errors/product.error';

export class ReferenceDurationMin extends ValueObject<number> {
    private constructor(value: number) {
        super(value);
    }

    public static create(value: number): ReferenceDurationMin {
        if (value <= 0) {
            throw new InvalidReferenceDurationMinError();
        }
        return new ReferenceDurationMin(value);
    }
}
