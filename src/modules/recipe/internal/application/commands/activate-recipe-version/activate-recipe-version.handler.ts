import { Injectable, Inject } from '@nestjs/common';
import { CommandHandlerBase } from 'src/shared/application/command.handler.base';
import { IRecipeVersionRepository } from '../../../domain/repositories/recipe-version.repo.interface';
import { RecipeVersionId } from '../../../domain/value-objects/recipe-version-id.vo';
import { RecipeVersionNotFoundError } from '../../../domain/errors/recipe.error';
import { ActivateRecipeVersionCommand } from './activate-recipe-version.command';

@Injectable()
export class ActivateRecipeVersionHandler extends CommandHandlerBase<
    ActivateRecipeVersionCommand,
    void
> {
    constructor(
        @Inject(IRecipeVersionRepository)
        private readonly repo: IRecipeVersionRepository,
    ) {
        super();
    }

    async handle(command: ActivateRecipeVersionCommand): Promise<void> {
        const id = RecipeVersionId.create(command.recipeVersionId);
        const toActivate = await this.repo.getById(id);
        if (!toActivate) throw new RecipeVersionNotFoundError(command.recipeVersionId);

        const previousActive = await this.repo.getActiveByProductId(toActivate.getProductId());

        toActivate.activate();
        if (previousActive) previousActive.archive();

        await this.repo.activateVersion(toActivate, previousActive);

        this.logger.info('Recipe version activated', {
            id: toActivate.getId().value,
            productId: toActivate.getProductId(),
            versionNumber: toActivate.getVersionNumber(),
        });
    }
}
