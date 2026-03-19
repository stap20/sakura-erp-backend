export interface PackagingComponentInput {
    packagingItemId: string;
    qtyPerUnit: number;
}

export class SetPackagingBomCommand {
    constructor(
        public readonly variantItemId: string,
        public readonly components: PackagingComponentInput[],
    ) {}
}
