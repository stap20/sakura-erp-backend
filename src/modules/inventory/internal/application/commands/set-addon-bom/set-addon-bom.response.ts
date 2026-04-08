export interface AddonComponentResponseItem {
    id: string;
    ingredientCategory: string;
    addonItemId: string;
}

export class SetAddonBomResponse {
    constructor(
        public readonly variantItemId: string,
        public readonly components: AddonComponentResponseItem[],
    ) {}
}
