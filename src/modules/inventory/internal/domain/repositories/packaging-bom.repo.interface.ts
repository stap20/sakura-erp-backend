import { PackagingComponent } from '../entities/packaging-component.entity';

export interface IPackagingBomRepository {
    getByVariantItemId(variantItemId: string): Promise<PackagingComponent[]>;
    saveAll(components: PackagingComponent[]): Promise<void>;
    deleteAllForVariant(variantItemId: string): Promise<void>;
}

export const IPackagingBomRepository = Symbol('IPackagingBomRepository');
