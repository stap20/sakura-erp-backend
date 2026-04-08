import { AddonComponent } from '../entities/addon-component.entity';
import { ItemId } from '../value-objects/item-id.vo';

export interface IAddonBomRepository {
    getByVariantItemId(variantItemId: ItemId): Promise<AddonComponent[]>;
    saveAll(components: AddonComponent[]): Promise<void>;
    deleteAllForVariant(variantItemId: ItemId): Promise<void>;
}

export const IAddonBomRepository = Symbol('IAddonBomRepository');
