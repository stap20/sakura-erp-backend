import { Entity } from 'src/shared/domain/entity';

export class AddonComponentId {
    private constructor(public readonly value: string) {}
    static create(value: string): AddonComponentId {
        if (!value) throw new Error('AddonComponentId cannot be empty');
        return new AddonComponentId(value);
    }
    equals(other: AddonComponentId): boolean {
        return this.value === other.value;
    }
}

export class AddonComponent extends Entity<AddonComponentId> {
    private variantItemId: string;
    private ingredientCategory: string;
    private addonItemId: string;

    private constructor(
        id: AddonComponentId,
        variantItemId: string,
        ingredientCategory: string,
        addonItemId: string,
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
        if (!params.ingredientCategory) throw new Error('ingredientCategory cannot be empty');
        if (!params.addonItemId) throw new Error('addonItemId cannot be empty');
        return new AddonComponent(
            AddonComponentId.create(params.id),
            params.variantItemId,
            params.ingredientCategory,
            params.addonItemId,
        );
    }

    public getVariantItemId(): string { return this.variantItemId; }
    public getIngredientCategory(): string { return this.ingredientCategory; }
    public getAddonItemId(): string { return this.addonItemId; }

    public equals(other: Entity<AddonComponentId>): boolean {
        if (!(other instanceof AddonComponent)) return false;
        return this.id.equals(other.id);
    }
}
