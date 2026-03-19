import { Entity } from 'src/shared/domain/entity';

export class PackagingComponentId {
    private constructor(public readonly value: string) {}
    static create(value: string): PackagingComponentId {
        if (!value) throw new Error('PackagingComponentId cannot be empty');
        return new PackagingComponentId(value);
    }
    equals(other: PackagingComponentId): boolean {
        return this.value === other.value;
    }
}

export class PackagingComponent extends Entity<PackagingComponentId> {
    private variantItemId: string;
    private packagingItemId: string;
    private qtyPerUnit: number;

    private constructor(
        id: PackagingComponentId,
        variantItemId: string,
        packagingItemId: string,
        qtyPerUnit: number,
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
        if (params.qtyPerUnit <= 0) {
            throw new Error('qtyPerUnit must be greater than 0');
        }
        return new PackagingComponent(
            PackagingComponentId.create(params.id),
            params.variantItemId,
            params.packagingItemId,
            params.qtyPerUnit,
        );
    }

    public getVariantItemId(): string {
        return this.variantItemId;
    }

    public getPackagingItemId(): string {
        return this.packagingItemId;
    }

    public getQtyPerUnit(): number {
        return this.qtyPerUnit;
    }

    public equals(other: Entity<PackagingComponentId>): boolean {
        if (!(other instanceof PackagingComponent)) return false;
        return this.id.equals(other.id);
    }
}
