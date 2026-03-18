import { AggregateRoot } from 'src/shared/domain/aggregate-root';
import { RecipeVersionId } from '../value-objects/recipe-version-id.vo';
import { RecipeVersionStatus } from '../value-objects/recipe-version-status.vo';
import { RecipeIngredient } from '../entities/recipe-ingredient.entity';
import {
    RecipeVersionNotEditableError,
    RecipeVersionNotArchivableError,
    RecipeIngredientNotFoundError,
    DuplicateIngredientError,
    RecipeVersionInvalidFormulaError,
} from '../errors/recipe.error';

export interface CreateRecipeVersionParams {
    id: string;
    productId: string;
    versionNumber: number;
    notes?: string | null;
}

export interface PersistenceRecipeVersionParams {
    id: string;
    productId: string;
    versionNumber: number;
    status: string;
    notes: string | null;
    createdAt: Date;
    updatedAt: Date;
    ingredients: RecipeIngredient[];
}

export class RecipeVersion extends AggregateRoot<RecipeVersionId> {
    private productId: string;
    private versionNumber: number;
    private status: RecipeVersionStatus;
    private ingredients: RecipeIngredient[];
    private notes: string | null;
    private createdAt: Date;
    private updatedAt: Date;

    private constructor(
        id: RecipeVersionId,
        productId: string,
        versionNumber: number,
        status: RecipeVersionStatus,
        ingredients: RecipeIngredient[],
        notes: string | null,
        createdAt: Date,
        updatedAt: Date,
    ) {
        super(id);
        this.productId = productId;
        this.versionNumber = versionNumber;
        this.status = status;
        this.ingredients = ingredients;
        this.notes = notes;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }

    public static create(params: CreateRecipeVersionParams): RecipeVersion {
        const id = RecipeVersionId.create(params.id);
        const status = RecipeVersionStatus.draft();
        const now = new Date();
        return new RecipeVersion(
            id,
            params.productId,
            params.versionNumber,
            status,
            [],
            params.notes ?? null,
            now,
            now,
        );
    }

    public static createFromPersistence(params: PersistenceRecipeVersionParams): RecipeVersion {
        const id = RecipeVersionId.create(params.id);
        const status = RecipeVersionStatus.fromString(params.status);
        return new RecipeVersion(
            id,
            params.productId,
            params.versionNumber,
            status,
            params.ingredients,
            params.notes,
            params.createdAt,
            params.updatedAt,
        );
    }

    public equals(other: AggregateRoot<RecipeVersionId>): boolean {
        return this.id.equals(other.getId());
    }

    public addIngredient(ingredient: RecipeIngredient): void {
        if (!this.status.isDraft()) {
            throw new RecipeVersionNotEditableError();
        }

        if (ingredient.isAddOn) {
            const duplicate = this.ingredients.find(
                (i) => i.isAddOn && i.ingredientCategory === ingredient.ingredientCategory,
            );
            if (duplicate) throw new DuplicateIngredientError();
        } else {
            const duplicate = this.ingredients.find(
                (i) => !i.isAddOn && i.itemId === ingredient.itemId,
            );
            if (duplicate) throw new DuplicateIngredientError();
        }

        this.ingredients.push(ingredient);
        this.updatedAt = new Date();
    }

    public removeIngredient(ingredientId: string): void {
        if (!this.status.isDraft()) {
            throw new RecipeVersionNotEditableError();
        }
        const index = this.ingredients.findIndex((i) => i.id === ingredientId);
        if (index === -1) throw new RecipeIngredientNotFoundError(ingredientId);
        this.ingredients.splice(index, 1);
        this.updatedAt = new Date();
    }

    public updateIngredient(ingredientId: string, quantity?: number, notes?: string | null): void {
        if (!this.status.isDraft()) {
            throw new RecipeVersionNotEditableError();
        }
        const ingredient = this.ingredients.find((i) => i.id === ingredientId);
        if (!ingredient) throw new RecipeIngredientNotFoundError(ingredientId);
        ingredient.update(quantity, notes);
        this.updatedAt = new Date();
    }

    public activate(): void {
        if (!this.status.isDraft()) {
            throw new RecipeVersionNotEditableError();
        }
        const baseTotal = this.ingredients
            .filter((i) => !i.isAddOn)
            .reduce((sum, i) => sum + i.quantity, 0);
        if (Math.abs(baseTotal - 100) > 0.01) {
            throw new RecipeVersionInvalidFormulaError(baseTotal);
        }
        this.status = RecipeVersionStatus.active();
        this.updatedAt = new Date();
    }

    public archive(): void {
        if (!this.status.isActive()) {
            throw new RecipeVersionNotArchivableError();
        }
        this.status = RecipeVersionStatus.archived();
        this.updatedAt = new Date();
    }

    public updateNotes(notes: string | null): void {
        if (!this.status.isDraft()) {
            throw new RecipeVersionNotEditableError();
        }
        this.notes = notes;
        this.updatedAt = new Date();
    }

    public getProductId(): string { return this.productId; }
    public getVersionNumber(): number { return this.versionNumber; }
    public getStatus(): RecipeVersionStatus { return this.status; }
    public getIngredients(): RecipeIngredient[] { return [...this.ingredients]; }
    public getNotes(): string | null { return this.notes; }
    public getCreatedAt(): Date { return this.createdAt; }
    public getUpdatedAt(): Date { return this.updatedAt; }
}
