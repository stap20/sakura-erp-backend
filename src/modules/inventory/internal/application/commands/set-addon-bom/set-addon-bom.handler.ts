import { Injectable, Inject } from '@nestjs/common';
import { CommandHandlerBase } from 'src/shared/application/command.handler.base';
import { IAddonBomRepository } from '../../../domain/repositories/addon-bom.repo.interface';
import { ReadItemRepository } from '../../../infrastructure/repositories/read-item.repository';
import { AddonComponent } from '../../../domain/entities/addon-component.entity';
import { ItemNotFoundApplicationError } from '../../errors/item.errors';
import { ConflictError } from 'src/shared/application/errors/conflict.error';
import { SetAddonBomCommand } from './set-addon-bom.command';
import { SetAddonBomResponse } from './set-addon-bom.response';

export class ItemNotFinalProductForAddonError extends ConflictError {
    constructor() {
        super('Item is not a FINAL_PRODUCT and cannot have an addon BOM');
    }
}

@Injectable()
export class SetAddonBomHandler extends CommandHandlerBase<SetAddonBomCommand, SetAddonBomResponse> {
    constructor(
        @Inject(IAddonBomRepository)
        private readonly addonBomRepository: IAddonBomRepository,
        private readonly readItemRepository: ReadItemRepository,
    ) {
        super();
    }

    async handle(command: SetAddonBomCommand): Promise<SetAddonBomResponse> {
        const item = await this.readItemRepository.getById(command.variantItemId);

        if (!item) {
            throw new ItemNotFoundApplicationError(command.variantItemId);
        }

        if (item.type !== 'FINAL_PRODUCT') {
            throw new ItemNotFinalProductForAddonError();
        }

        await this.addonBomRepository.deleteAllForVariant(command.variantItemId);

        const components = command.components.map((c) =>
            AddonComponent.create({
                id: crypto.randomUUID(),
                variantItemId: command.variantItemId,
                ingredientCategory: c.ingredientCategory,
                addonItemId: c.addonItemId,
            }),
        );

        await this.addonBomRepository.saveAll(components);

        this.logger.info('Addon BOM set', {
            variantItemId: command.variantItemId,
            componentCount: components.length,
        });

        return new SetAddonBomResponse(
            command.variantItemId,
            components.map((c) => ({
                id: c.getId().value,
                ingredientCategory: c.getIngredientCategory(),
                addonItemId: c.getAddonItemId(),
            })),
        );
    }
}
