import { ValueObject } from 'src/shared/domain/value-objects/value-object';
import { DomainError } from 'src/shared/domain/errors/domain.error';

export enum MeasureUnitEnum {
    KG = 'KG',
    G = 'G',
    L = 'L',
    ML = 'ML',
    PCS = 'PCS',
}

class InvalidMeasureUnitError extends DomainError {
    constructor(unit: string) {
        super(
            `Invalid measure unit: ${unit}. Allowed: KG, G, L, ML, PCS`,
        );
    }
}

export class MeasureUnit extends ValueObject<string> {
    private constructor(value: string) {
        super(value);
    }

    public static create(unit: string): MeasureUnit {
        if (!Object.values(MeasureUnitEnum).includes(unit as MeasureUnitEnum)) {
            throw new InvalidMeasureUnitError(unit);
        }
        return new MeasureUnit(unit);
    }
}
