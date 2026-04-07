import { AddonComponent } from '../entities/addon-component.entity';

export interface IAddonBomRepository {
    getByVariantItemId(variantItemId: string): Promise<AddonComponent[]>;
    saveAll(components: AddonComponent[]): Promise<void>;
    deleteAllForVariant(variantItemId: string): Promise<void>;
}

export const IAddonBomRepository = Symbol('IAddonBomRepository');
