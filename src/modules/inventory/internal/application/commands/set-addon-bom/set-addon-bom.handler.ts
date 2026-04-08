import { Injectable, Inject } from '@nestjs/common';
import { CommandHandlerBase } from 'src/shared/application/command.handler.base';
import { IAddonBomRepository } from '../../../domain/repositories/addon-bom.repo.interface';
import { IItemRepository } from '../../../domain/repositories/item.repo.interface';
import { ItemId } from '../../../domain/value-objects/item-id.vo';
import { AddonComponent } from '../../../domain/entities/addon-component.entity';
import { ItemNotFoundApplicationError, ItemNotFinalProductForAddonError } from '../../errors/item.errors';
import { SetAddonBomCommand } from './set-addon-bom.command';
import { SetAddonBomResponse } from './set-addon-bom.response';

@Injectable()
export class SetAddonBomHandler extends CommandHandlerBase<SetAddonBomCommand, SetAddonBomResponse> {
    constructor(
        @Inject(IAddonBomRepository)
        private readonly addonBomRepository: IAddonBomRepository,
        @Inject(IItemRepository)
        private readonly itemRepository: IItemRepository,
    ) {
        super();
    }

    async handle(command: SetAddonBomCommand): Promise<SetAddonBomResponse> {
        const itemId = ItemId.create(command.variantItemId);
        const item = await this.itemRepository.getById(itemId);

        if (!item) {
            throw new ItemNotFoundApplicationError(command.variantItemId);
        }

        if (item.getType().value !== 'FINAL_PRODUCT') {
            throw new ItemNotFinalProductForAddonError();
        }

        await this.addonBomRepository.deleteAllForVariant(item.getId());

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
