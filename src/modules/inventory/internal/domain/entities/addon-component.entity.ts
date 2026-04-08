import { Entity } from 'src/shared/domain/entity';
import { AddonComponentId } from '../value-objects/addon-component-id.vo';
import { AddonIngredientCategory } from '../value-objects/addon-ingredient-category.vo';
import { ItemId } from '../value-objects/item-id.vo';

export class AddonComponent extends Entity<AddonComponentId> {
    private variantItemId: ItemId;
    private ingredientCategory: AddonIngredientCategory;
    private addonItemId: ItemId;

    private constructor(
        id: AddonComponentId,
        variantItemId: ItemId,
        ingredientCategory: AddonIngredientCategory,
        addonItemId: ItemId,
    ) {
        super(id);
        this.variantItemId = variantItemId;
        this.ingredientCategory = ingredientCategory;
        this.addonItemId = addonItemId;
    }

    public static create(params: {
        id: string;
        variantItemId: string;
        ingredientCategory: string;
        addonItemId: string;
    }): AddonComponent {
        return new AddonComponent(
            AddonComponentId.create(params.id),
            ItemId.create(params.variantItemId),
            AddonIngredientCategory.create(params.ingredientCategory),
            ItemId.create(params.addonItemId),
        );
    }

    public getVariantItemId(): string {
        return this.variantItemId.value;
    }

    public getIngredientCategory(): string {
        return this.ingredientCategory.value;
    }

    public getAddonItemId(): string {
        return this.addonItemId.value;
    }

    public equals(other: Entity<AddonComponentId>): boolean {
        if (!(other instanceof AddonComponent)) return false;
        return this.id.equals(other.id);
    }
}
