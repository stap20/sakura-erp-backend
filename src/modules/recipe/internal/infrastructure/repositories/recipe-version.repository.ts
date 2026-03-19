import { Injectable, Inject } from '@nestjs/common';
import { IRecipeVersionRepository } from '../../domain/repositories/recipe-version.repo.interface';
import { RecipeVersion } from '../../domain/aggregates/recipe-version.aggregate';
import { RecipeVersionId } from '../../domain/value-objects/recipe-version-id.vo';
import { IRecipePrismaClient } from '../database/recipe.prisma.client.interface';
import { RecipeVersionMapper } from '../database/mappers/recipe-version.mapper';

@Injectable()
export class RecipeVersionRepository implements IRecipeVersionRepository {
    constructor(
        @Inject(IRecipePrismaClient)
        private readonly prisma: IRecipePrismaClient,
        private readonly mapper: RecipeVersionMapper,
    ) {}

    async getById(id: RecipeVersionId): Promise<RecipeVersion | null> {
        const entity = await this.prisma.recipeVersion.findUnique({
            where: { id: id.value },
            include: { ingredients: true },
        });
        if (!entity) return null;
        return this.mapper.toDomain(entity as any);
    }

    async getActiveByProductId(productId: string): Promise<RecipeVersion | null> {
        const entity = await this.prisma.recipeVersion.findFirst({
            where: { productId, status: 'ACTIVE' },
            include: { ingredients: true },
        });
        if (!entity) return null;
        return this.mapper.toDomain(entity as any);
    }

    async save(recipe: RecipeVersion): Promise<void> {
        const id = recipe.getId().value;
        const ingredients = recipe.getIngredients().map((i) =>
            this.mapper.ingredientToPersistence(id, i),
        );

        await this.prisma.$transaction([
            this.prisma.recipeIngredient.deleteMany({ where: { recipeId: id } }),
            this.prisma.recipeVersion.upsert({
                where: { id },
                update: {
                    status: recipe.getStatus().value,
                    notes: recipe.getNotes(),
                    updatedAt: recipe.getUpdatedAt(),
                },
                create: {
                    id,
                    productId: recipe.getProductId(),
                    versionNumber: recipe.getVersionNumber(),
                    status: recipe.getStatus().value,
                    notes: recipe.getNotes(),
                    createdAt: recipe.getCreatedAt(),
                    updatedAt: recipe.getUpdatedAt(),
                },
            }),
            ...ingredients.map((ing) =>
                this.prisma.recipeIngredient.create({ data: ing as any }),
            ),
        ]);
    }

    async activateVersion(
        toActivate: RecipeVersion,
        previousActive: RecipeVersion | null,
    ): Promise<void> {
        const operations: any[] = [
            this.prisma.recipeVersion.update({
                where: { id: toActivate.getId().value },
                data: { status: 'ACTIVE', updatedAt: toActivate.getUpdatedAt() },
            }),
        ];

        if (previousActive) {
            operations.push(
                this.prisma.recipeVersion.update({
                    where: { id: previousActive.getId().value },
                    data: { status: 'ARCHIVED', updatedAt: previousActive.getUpdatedAt() },
                }),
            );
        }

        await this.prisma.$transaction(operations);
    }
}
