import { ValueObject } from 'src/shared/domain/value-objects/value-object';
import { InvalidUnitWeightGmError } from '../errors/item.error';

export class UnitWeightGm extends ValueObject<number> {
    private constructor(value: number) {
        super(value);
    }

    public static create(value: number): UnitWeightGm {
        if (value <= 0) {
            throw new InvalidUnitWeightGmError();
        }
        return new UnitWeightGm(value);
    }
}
