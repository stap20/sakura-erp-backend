import { ValueObject } from 'src/shared/domain/value-objects/value-object';
import { InvalidWeightedAverageUnitPriceError } from '../errors/item.error';

export class WeightedAverageUnitPrice extends ValueObject<number> {
    private constructor(value: number) {
        super(value);
    }

    public static create(value: number): WeightedAverageUnitPrice {
        if (value < 0) {
            throw new InvalidWeightedAverageUnitPriceError();
        }
        return new WeightedAverageUnitPrice(value);
    }
}
