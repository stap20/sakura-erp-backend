import { ValueObject } from 'src/shared/domain/value-objects/value-object';
import { DomainError } from 'src/shared/domain/errors/domain.error';

export enum ItemTypeEnum {
    RAW_MATERIAL = 'RAW_MATERIAL',
    PACKAGING = 'PACKAGING',
    FINAL_PRODUCT = 'FINAL_PRODUCT',
}

class InvalidItemTypeError extends DomainError {
    constructor(type: string) {
        super(
            `Invalid item type: ${type}. Allowed: RAW_MATERIAL, PACKAGING, FINAL_PRODUCT`,
        );
    }
}

export class ItemType extends ValueObject<string> {
    private constructor(value: string) {
        super(value);
    }

    public static create(type: string): ItemType {
        if (!Object.values(ItemTypeEnum).includes(type as ItemTypeEnum)) {
            throw new InvalidItemTypeError(type);
        }
        return new ItemType(type);
    }

    public isRawMaterial(): boolean {
        return this._value === ItemTypeEnum.RAW_MATERIAL;
    }
}
