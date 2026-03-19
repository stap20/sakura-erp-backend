import { Entity } from 'src/shared/domain/entity';

export class FillingOrderLineId {
    private constructor(public readonly value: string) {}
    static create(value: string): FillingOrderLineId {
        return new FillingOrderLineId(value);
    }
    equals(other: FillingOrderLineId): boolean {
        return this.value === other.value;
    }
}

export class FillingOrderLine extends Entity<FillingOrderLineId> {
    private variantItemId: string;
    private variantName: string;
    private quantityUnits: number;
    private unitWeightGm: number;
    private bulkUsedGm: number;

    private constructor(
        id: FillingOrderLineId,
        variantItemId: string,
        variantName: string,
        quantityUnits: number,
        unitWeightGm: number,
        bulkUsedGm: number,
    ) {
        super(id);
        this.variantItemId = variantItemId;
        this.variantName = variantName;
        this.quantityUnits = quantityUnits;
        this.unitWeightGm = unitWeightGm;
        this.bulkUsedGm = bulkUsedGm;
    }

    public static create(params: {
        id: string;
        variantItemId: string;
        variantName: string;
        quantityUnits: number;
        unitWeightGm: number;
    }): FillingOrderLine {
        const bulkUsedGm = params.quantityUnits * params.unitWeightGm;
        return new FillingOrderLine(
            FillingOrderLineId.create(params.id),
            params.variantItemId,
            params.variantName,
            params.quantityUnits,
            params.unitWeightGm,
            bulkUsedGm,
        );
    }

    public static createFromPersistence(params: {
        id: string;
        variantItemId: string;
        variantName: string;
        quantityUnits: number;
        unitWeightGm: number;
        bulkUsedGm: number;
    }): FillingOrderLine {
        return new FillingOrderLine(
            FillingOrderLineId.create(params.id),
            params.variantItemId,
            params.variantName,
            params.quantityUnits,
            params.unitWeightGm,
            params.bulkUsedGm,
        );
    }

    public getVariantItemId(): string { return this.variantItemId; }
    public getVariantName(): string { return this.variantName; }
    public getQuantityUnits(): number { return this.quantityUnits; }
    public getUnitWeightGm(): number { return this.unitWeightGm; }
    public getBulkUsedGm(): number { return this.bulkUsedGm; }

    public equals(other: Entity<FillingOrderLineId>): boolean {
        if (!(other instanceof FillingOrderLine)) return false;
        return this.id.equals(other.id);
    }
}
