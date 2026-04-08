import { ValueObject } from 'src/shared/domain/value-objects/value-object';
import { InvalidReferenceBatchGmError } from '../errors/product.error';

export class ReferenceBatchGm extends ValueObject<number> {
    private constructor(value: number) {
        super(value);
    }

    public static create(value: number): ReferenceBatchGm {
        if (value <= 0) {
            throw new InvalidReferenceBatchGmError();
        }
        return new ReferenceBatchGm(value);
    }
}
