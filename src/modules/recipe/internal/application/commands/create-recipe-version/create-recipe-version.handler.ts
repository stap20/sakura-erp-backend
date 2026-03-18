import { Injectable, Inject } from '@nestjs/common';
import { CommandHandlerBase } from 'src/shared/application/command.handler.base';
import { IRecipeVersionRepository } from '../../../domain/repositories/recipe-version.repo.interface';
import { RecipeVersion } from '../../../domain/aggregates/recipe-version.aggregate';
import { ReadRecipeVersionRepository } from '../../../infrastructure/repositories/read-recipe-version.repository';
import { CreateRecipeVersionCommand } from './create-recipe-version.command';
import { CreateRecipeVersionResponse } from './create-recipe-version.response';

@Injectable()
export class CreateRecipeVersionHandler extends CommandHandlerBase<
    CreateRecipeVersionCommand,
    CreateRecipeVersionResponse
> {
    constructor(
        @Inject(IRecipeVersionRepository)
        private readonly repo: IRecipeVersionRepository,
        private readonly readRepo: ReadRecipeVersionRepository,
    ) {
        super();
    }

    async handle(command: CreateRecipeVersionCommand): Promise<CreateRecipeVersionResponse> {
        const versionNumber = await this.readRepo.getNextVersionNumber(command.productId);

        const recipe = RecipeVersion.create({
            id: crypto.randomUUID(),
            productId: command.productId,
            versionNumber,
            notes: command.notes,
        });

        await this.repo.save(recipe);

        this.logger.info('Recipe version created', {
            id: recipe.getId().value,
            productId: recipe.getProductId(),
            versionNumber: recipe.getVersionNumber(),
        });

        return new CreateRecipeVersionResponse(
            recipe.getId().value,
            recipe.getProductId(),
            recipe.getVersionNumber(),
            recipe.getStatus().value,
            recipe.getNotes(),
            [],
            recipe.getCreatedAt(),
            recipe.getUpdatedAt(),
        );
    }
}
