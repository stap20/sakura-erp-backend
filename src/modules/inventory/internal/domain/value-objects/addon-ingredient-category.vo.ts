import { ValueObject } from 'src/shared/domain/value-objects/value-object';
import { InvalidAddonIngredientCategoryError } from '../errors/addon-component.error';

export class AddonIngredientCategory extends ValueObject<string> {
    private constructor(value: string) {
        super(value);
    }

    public static create(category: string): AddonIngredientCategory {
        if (!category || category.trim().length === 0) {
            throw new InvalidAddonIngredientCategoryError();
        }
        return new AddonIngredientCategory(category.trim());
    }
}
