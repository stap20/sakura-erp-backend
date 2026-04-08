import { Injectable, Inject } from '@nestjs/common';
import { CommandHandlerBase } from 'src/shared/application/command.handler.base';
import { IPackagingBomRepository } from '../../../domain/repositories/packaging-bom.repo.interface';
import { IItemRepository } from '../../../domain/repositories/item.repo.interface';
import { ItemId } from '../../../domain/value-objects/item-id.vo';
import { PackagingComponent } from '../../../domain/entities/packaging-component.entity';
import { ItemNotFoundApplicationError, ItemNotFinalProductApplicationError } from '../../errors/item.errors';
import { SetPackagingBomCommand } from './set-packaging-bom.command';
import { SetPackagingBomResponse } from './set-packaging-bom.response';

@Injectable()
export class SetPackagingBomHandler extends CommandHandlerBase<
    SetPackagingBomCommand,
    SetPackagingBomResponse
> {
    constructor(
        @Inject(IPackagingBomRepository)
        private readonly packagingBomRepository: IPackagingBomRepository,
        @Inject(IItemRepository)
        private readonly itemRepository: IItemRepository,
    ) {
        super();
    }

    async handle(command: SetPackagingBomCommand): Promise<SetPackagingBomResponse> {
        const itemId = ItemId.create(command.variantItemId);
        const item = await this.itemRepository.getById(itemId);

        if (!item) {
            throw new ItemNotFoundApplicationError(command.variantItemId);
        }

        if (item.getType().value !== 'FINAL_PRODUCT') {
            throw new ItemNotFinalProductApplicationError();
        }

        await this.packagingBomRepository.deleteAllForVariant(item.getId());

        const components = command.components.map((c) =>
            PackagingComponent.create({
                id: crypto.randomUUID(),
                variantItemId: command.variantItemId,
                packagingItemId: c.packagingItemId,
                qtyPerUnit: c.qtyPerUnit,
            }),
        );

        await this.packagingBomRepository.saveAll(components);

        this.logger.info('Packaging BOM set', {
            variantItemId: command.variantItemId,
            componentCount: components.length,
        });

        return new SetPackagingBomResponse(
            command.variantItemId,
            components.map((c) => ({
                id: c.getId().value,
                packagingItemId: c.getPackagingItemId(),
                qtyPerUnit: c.getQtyPerUnit(),
            })),
        );
    }
}
