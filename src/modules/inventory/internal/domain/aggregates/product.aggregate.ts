import { AggregateRoot } from 'src/shared/domain/aggregate-root';
import { ProductId } from '../value-objects/product-id.vo';
import { ProductName } from '../value-objects/product-name.vo';
import { ReferenceBatchGm } from '../value-objects/reference-batch-gm.vo';
import { ReferenceDurationMin } from '../value-objects/reference-duration-min.vo';
import { ReferenceWastePercent } from '../value-objects/reference-waste-percent.vo';

export interface CreateProductParams {
    id: string;
    name: string;
    description?: string | null;
    referenceBatchGm?: number | null;
    referenceDurationMin?: number | null;
    referenceWastePercent?: number | null;
}

export interface PersistenceProductParams {
    id: string;
    name: string;
    description: string | null;
    referenceBatchGm: number | null;
    referenceDurationMin: number | null;
    referenceWastePercent: number | null;
}

export interface UpdateProductParams {
    name?: string;
    description?: string | null;
    referenceBatchGm?: number | null;
    referenceDurationMin?: number | null;
    referenceWastePercent?: number | null;
}

export class Product extends AggregateRoot<ProductId> {
    private name: ProductName;
    private description: string | null;
    private referenceBatchGm: ReferenceBatchGm | null;
    private referenceDurationMin: ReferenceDurationMin | null;
    private referenceWastePercent: ReferenceWastePercent | null;

    private constructor(
        id: ProductId,
        name: ProductName,
        description: string | null,
        referenceBatchGm: ReferenceBatchGm | null,
        referenceDurationMin: ReferenceDurationMin | null,
        referenceWastePercent: ReferenceWastePercent | null,
    ) {
        super(id);
        this.name = name;
        this.description = description;
        this.referenceBatchGm = referenceBatchGm;
        this.referenceDurationMin = referenceDurationMin;
        this.referenceWastePercent = referenceWastePercent;
    }

    public static create(params: CreateProductParams): Product {
        return new Product(
            ProductId.create(params.id),
            ProductName.create(params.name),
            params.description ?? null,
            params.referenceBatchGm != null ? ReferenceBatchGm.create(params.referenceBatchGm) : null,
            params.referenceDurationMin != null ? ReferenceDurationMin.create(params.referenceDurationMin) : null,
            params.referenceWastePercent != null ? ReferenceWastePercent.create(params.referenceWastePercent) : null,
        );
    }

    public static createFromPersistence(params: PersistenceProductParams): Product {
        return new Product(
            ProductId.create(params.id),
            ProductName.create(params.name),
            params.description,
            params.referenceBatchGm != null ? ReferenceBatchGm.create(params.referenceBatchGm) : null,
            params.referenceDurationMin != null ? ReferenceDurationMin.create(params.referenceDurationMin) : null,
            params.referenceWastePercent != null ? ReferenceWastePercent.create(params.referenceWastePercent) : null,
        );
    }

    public update(params: UpdateProductParams): void {
        if (params.name !== undefined) {
            this.name = ProductName.create(params.name);
        }
        if (params.description !== undefined) {
            this.description = params.description;
        }
        if (params.referenceBatchGm !== undefined) {
            this.referenceBatchGm = params.referenceBatchGm != null
                ? ReferenceBatchGm.create(params.referenceBatchGm)
                : null;
        }
        if (params.referenceDurationMin !== undefined) {
            this.referenceDurationMin = params.referenceDurationMin != null
                ? ReferenceDurationMin.create(params.referenceDurationMin)
                : null;
        }
        if (params.referenceWastePercent !== undefined) {
            this.referenceWastePercent = params.referenceWastePercent != null
                ? ReferenceWastePercent.create(params.referenceWastePercent)
                : null;
        }
    }

    public getName(): string {
        return this.name.value;
    }

    public getDescription(): string | null {
        return this.description;
    }

    public getReferenceBatchGm(): number | null {
        return this.referenceBatchGm?.value ?? null;
    }

    public getReferenceDurationMin(): number | null {
        return this.referenceDurationMin?.value ?? null;
    }

    public getReferenceWastePercent(): number | null {
        return this.referenceWastePercent?.value ?? null;
    }

    public equals(other: Product): boolean {
        if (!(other instanceof Product)) return false;
        return this.id.equals(other.id);
    }
}
