import { AggregateRoot } from 'src/shared/domain/aggregate-root';
import { ProductId } from '../value-objects/product-id.vo';

export interface CreateProductParams {
    id: string;
    name: string;
    description?: string | null;
}

export interface PersistenceProductParams {
    id: string;
    name: string;
    description: string | null;
}

export interface UpdateProductParams {
    name?: string;
    description?: string | null;
}

export class Product extends AggregateRoot<ProductId> {
    private name: string;
    private description: string | null;

    private constructor(id: ProductId, name: string, description: string | null) {
        super(id);
        this.name = name;
        this.description = description;
    }

    public static create(params: CreateProductParams): Product {
        if (!params.name || params.name.trim().length < 2) {
            throw new Error('Product name must be at least 2 characters');
        }
        return new Product(
            ProductId.create(params.id),
            params.name.trim(),
            params.description ?? null,
        );
    }

    public static createFromPersistence(params: PersistenceProductParams): Product {
        return new Product(
            ProductId.create(params.id),
            params.name,
            params.description,
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
    }

    public getName(): string {
        return this.name;
    }

    public getDescription(): string | null {
        return this.description;
    }

    public equals(other: Product): boolean {
        if (!(other instanceof Product)) return false;
        return this.id.equals(other.id);
    }
}
