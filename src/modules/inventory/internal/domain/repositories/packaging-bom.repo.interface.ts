import { PackagingComponent } from '../entities/packaging-component.entity';
import { ItemId } from '../value-objects/item-id.vo';

export interface IPackagingBomRepository {
    getByVariantItemId(variantItemId: ItemId): Promise<PackagingComponent[]>;
    saveAll(components: PackagingComponent[]): Promise<void>;
    deleteAllForVariant(variantItemId: ItemId): Promise<void>;
}

export const IPackagingBomRepository = Symbol('IPackagingBomRepository');
