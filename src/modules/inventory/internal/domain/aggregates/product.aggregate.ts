import { AggregateRoot } from 'src/shared/domain/aggregate-root';
import { ProductId } from '../value-objects/product-id.vo';

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
    private name: string;
    private description: string | null;
    private referenceBatchGm: number | null;
    private referenceDurationMin: number | null;
    private referenceWastePercent: number | null;

    private constructor(
        id: ProductId,
        name: string,
        description: string | null,
        referenceBatchGm: number | null,
        referenceDurationMin: number | null,
        referenceWastePercent: number | null,
    ) {
        super(id);
        this.name = name;
        this.description = description;
        this.referenceBatchGm = referenceBatchGm;
        this.referenceDurationMin = referenceDurationMin;
        this.referenceWastePercent = referenceWastePercent;
    }

    public static create(params: CreateProductParams): Product {
        if (!params.name || params.name.trim().length < 2) {
            throw new Error('Product name must be at least 2 characters');
        }
        return new Product(
            ProductId.create(params.id),
            params.name.trim(),
            params.description ?? null,
            params.referenceBatchGm ?? null,
            params.referenceDurationMin ?? null,
            params.referenceWastePercent ?? null,
        );
    }

    public static createFromPersistence(params: PersistenceProductParams): Product {
        return new Product(
            ProductId.create(params.id),
            params.name,
            params.description,
            params.referenceBatchGm,
            params.referenceDurationMin,
            params.referenceWastePercent,
        );
    }

    public update(params: UpdateProductParams): void {
        if (params.name !== undefined) {
            if (!params.name || params.name.trim().length < 2) {
                throw new Error('Product name must be at least 2 characters');
            }
            this.name = params.name.trim();
        }
        if (params.description !== undefined) {
            this.description = params.description;
        }
        if (params.referenceBatchGm !== undefined) {
            this.referenceBatchGm = params.referenceBatchGm;
        }
        if (params.referenceDurationMin !== undefined) {
            this.referenceDurationMin = params.referenceDurationMin;
        }
        if (params.referenceWastePercent !== undefined) {
            this.referenceWastePercent = params.referenceWastePercent;
        }
    }

    public getName(): string {
        return this.name;
    }

    public getDescription(): string | null {
        return this.description;
    }

    public getReferenceBatchGm(): number | null {
        return this.referenceBatchGm;
    }

    public getReferenceDurationMin(): number | null {
        return this.referenceDurationMin;
    }

    public getReferenceWastePercent(): number | null {
        return this.referenceWastePercent;
    }

    public equals(other: Product): boolean {
        if (!(other instanceof Product)) return false;
        return this.id.equals(other.id);
    }
}
