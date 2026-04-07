export interface AddonComponentInput {
    ingredientCategory: string;
    addonItemId: string;
}

export class SetAddonBomCommand {
    constructor(
        public readonly variantItemId: string,
        public readonly components: AddonComponentInput[],
    ) {}
}
