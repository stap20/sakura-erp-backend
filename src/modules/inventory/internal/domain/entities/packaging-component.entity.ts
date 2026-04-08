import { Entity } from 'src/shared/domain/entity';
import { PackagingComponentId } from '../value-objects/packaging-component-id.vo';
import { ItemId } from '../value-objects/item-id.vo';
import { Quantity } from '../value-objects/quantity.vo';

export class PackagingComponent extends Entity<PackagingComponentId> {
    private variantItemId: ItemId;
    private packagingItemId: ItemId;
    private qtyPerUnit: Quantity;

    private constructor(
        id: PackagingComponentId,
        variantItemId: ItemId,
        packagingItemId: ItemId,
        qtyPerUnit: Quantity,
    ) {
        super(id);
        this.variantItemId = variantItemId;
        this.packagingItemId = packagingItemId;
        this.qtyPerUnit = qtyPerUnit;
    }

    public static create(params: {
        id: string;
        variantItemId: string;
        packagingItemId: string;
        qtyPerUnit: number;
    }): PackagingComponent {
        return new PackagingComponent(
            PackagingComponentId.create(params.id),
            ItemId.create(params.variantItemId),
            ItemId.create(params.packagingItemId),
            Quantity.create(params.qtyPerUnit),
        );
    }

    public getVariantItemId(): string {
        return this.variantItemId.value;
    }

    public getPackagingItemId(): string {
        return this.packagingItemId.value;
    }

    public getQtyPerUnit(): number {
        return this.qtyPerUnit.value;
    }

    public equals(other: Entity<PackagingComponentId>): boolean {
        if (!(other instanceof PackagingComponent)) return false;
        return this.id.equals(other.id);
    }
}
