import { AggregateRoot } from 'src/shared/domain/aggregate-root';
import { CategoryId } from '../value-objects/category-id.vo';
import { CategoryName } from '../value-objects/category-name.vo';
import { CategoryStatus } from '../value-objects/category-status.vo';
import { CategoryAlreadyArchivedError } from '../errors/category.error';

export interface CreateCategoryParams {
    id: string;
    name: string;
    description?: string | null;
}

export interface PersistenceCategoryParams {
    id: string;
    name: string;
    description: string | null;
    status: string;
}

export interface UpdateCategoryParams {
    name?: string;
    description?: string | null;
}

export class Category extends AggregateRoot<CategoryId> {
    private name: CategoryName;
    private description: string | null;
    private status: CategoryStatus;

    private constructor(
        id: CategoryId,
        name: CategoryName,
        description: string | null,
        status: CategoryStatus,
    ) {
        super(id);
        this.name = name;
        this.description = description;
        this.status = status;
    }

    public static create(params: CreateCategoryParams): Category {
        const id = CategoryId.create(params.id);
        const name = CategoryName.create(params.name);
        const status = CategoryStatus.active();

        return new Category(id, name, params.description ?? null, status);
    }

    public static createFromPersistence(
        params: PersistenceCategoryParams,
    ): Category {
        const id = CategoryId.create(params.id);
        const name = CategoryName.create(params.name);
        const status = CategoryStatus.fromString(params.status);

        return new Category(id, name, params.description, status);
    }

    public update(params: UpdateCategoryParams): void {
        if (params.name !== undefined) {
            this.name = CategoryName.create(params.name);
        }
        if (params.description !== undefined) {
            this.description = params.description;
        }
    }

    public archive(): void {
        if (this.status.isArchived()) {
            throw new CategoryAlreadyArchivedError(this.id.value);
        }
        this.status = CategoryStatus.archived();
    }

    public getName(): CategoryName {
        return this.name;
    }

    public getDescription(): string | null {
        return this.description;
    }

    public getStatus(): CategoryStatus {
        return this.status;
    }

    public equals(other: Category): boolean {
        if (!(other instanceof Category)) return false;
        return this.name.equals(other.name);
    }
}
