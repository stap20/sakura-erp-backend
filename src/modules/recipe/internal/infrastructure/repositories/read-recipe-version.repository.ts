import { Injectable, Inject } from '@nestjs/common';
import { IRecipePrismaClient } from '../database/recipe.prisma.client.interface';
import { RecipeVersionEntity } from '../database/entities/recipe-version.entity';

export interface RecipeVersionFilter {
    productId?: string;
    status?: string;
}

@Injectable()
export class ReadRecipeVersionRepository {
    constructor(
        @Inject(IRecipePrismaClient)
        private readonly prisma: IRecipePrismaClient,
    ) {}

    async getById(id: string): Promise<RecipeVersionEntity | null> {
        const entity = await this.prisma.recipeVersion.findUnique({
            where: { id },
            include: { ingredients: true },
        });
        if (!entity) return null;
        return entity as any;
    }

    async findAll(
        filter: RecipeVersionFilter,
        offset: number = 0,
        limit: number = 20,
    ): Promise<RecipeVersionEntity[]> {
        const where: any = {};
        if (filter.productId) where.productId = filter.productId;
        if (filter.status) where.status = filter.status;

        const entities = await this.prisma.recipeVersion.findMany({
            where,
            include: { ingredients: true },
            skip: offset,
            take: limit,
            orderBy: { createdAt: 'desc' },
        });
        return entities as any[];
    }

    async getVersionsByProductId(productId: string): Promise<RecipeVersionEntity[]> {
        const entities = await this.prisma.recipeVersion.findMany({
            where: { productId },
            include: { ingredients: true },
            orderBy: { versionNumber: 'asc' },
        });
        return entities as any[];
    }

    async getActiveByProductId(productId: string): Promise<RecipeVersionEntity | null> {
        const entity = await this.prisma.recipeVersion.findFirst({
            where: { productId, status: 'ACTIVE' },
            include: { ingredients: true },
        });
        if (!entity) return null;
        return entity as any;
    }

    async getNextVersionNumber(productId: string): Promise<number> {
        const result = await this.prisma.recipeVersion.aggregate({
            _max: { versionNumber: true },
            where: { productId },
        });
        return (result._max.versionNumber ?? 0) + 1;
    }
}
