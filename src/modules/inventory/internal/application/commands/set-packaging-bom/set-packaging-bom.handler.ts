import { Injectable, Inject } from '@nestjs/common';
import { CommandHandlerBase } from 'src/shared/application/command.handler.base';
import { IPackagingBomRepository } from '../../../domain/repositories/packaging-bom.repo.interface';
import { ReadItemRepository } from '../../../infrastructure/repositories/read-item.repository';
import { PackagingComponent } from '../../../domain/entities/packaging-component.entity';
import { ItemNotFoundApplicationError } from '../../errors/item.errors';
import { ConflictError } from 'src/shared/application/errors/conflict.error';
import { SetPackagingBomCommand } from './set-packaging-bom.command';
import { SetPackagingBomResponse } from './set-packaging-bom.response';

export class ItemNotFinalProductApplicationError extends ConflictError {
    constructor() {
        super('Item is not a FINAL_PRODUCT and cannot have a packaging BOM');
    }
}

@Injectable()
export class SetPackagingBomHandler extends CommandHandlerBase<
    SetPackagingBomCommand,
    SetPackagingBomResponse
> {
    constructor(
        @Inject(IPackagingBomRepository)
        private readonly packagingBomRepository: IPackagingBomRepository,
        private readonly readItemRepository: ReadItemRepository,
    ) {
        super();
    }

    async handle(command: SetPackagingBomCommand): Promise<SetPackagingBomResponse> {
        const item = await this.readItemRepository.getById(command.variantItemId);

        if (!item) {
            throw new ItemNotFoundApplicationError(command.variantItemId);
        }

        if (item.type !== 'FINAL_PRODUCT') {
            throw new ItemNotFinalProductApplicationError();
        }

        await this.packagingBomRepository.deleteAllForVariant(command.variantItemId);

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
