import { Category } from '../aggregates/category.aggregate';
import { CategoryId } from '../value-objects/category-id.vo';
import { CategoryName } from '../value-objects/category-name.vo';

export interface ICategoryRepository {
    getById(id: CategoryId): Promise<Category | null>;
    getByName(name: CategoryName): Promise<Category | null>;
    save(category: Category): Promise<void>;
    hasActiveItems(id: CategoryId): Promise<boolean>;
}

export const ICategoryRepository = Symbol('ICategoryRepository');
