import { ValueObject } from 'src/shared/domain/value-objects/value-object';
import { InvalidCurrentStockError } from '../errors/item.error';

export class CurrentStock extends ValueObject<number> {
    private constructor(value: number) {
        super(value);
    }

    public static create(value: number): CurrentStock {
        if (value < 0) {
            throw new InvalidCurrentStockError();
        }
        return new CurrentStock(value);
    }
}
