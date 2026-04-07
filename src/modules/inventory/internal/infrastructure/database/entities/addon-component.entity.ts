export class AddonComponentEntity {
    id: string;
    variantItemId: string;
    ingredientCategory: string;
    addonItemId: string;

    constructor(data: Partial<AddonComponentEntity>) {
        Object.assign(this, data);
    }
}
