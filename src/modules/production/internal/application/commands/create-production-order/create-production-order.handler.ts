import { Injectable, Inject } from '@nestjs/common';
import { CommandHandlerBase } from 'src/shared/application/command.handler.base';
import { IProductionOrderRepository } from '../../../domain/repositories/production-order.repo.interface';
import { ProductionOrder } from '../../../domain/aggregates/production-order.aggregate';
import { AddonResolution } from '../../../domain/value-objects/addon-resolution.vo';
import { CreateProductionOrderCommand } from './create-production-order.command';
import { InventoryGateway } from '../../../infrastructure/gateways/inventory.gateway';
import { ProductNotFoundApplicationError } from '../../errors/production.errors';

@Injectable()
export class CreateProductionOrderHandler extends CommandHandlerBase<
    CreateProductionOrderCommand,
    string
> {
    constructor(
        @Inject(IProductionOrderRepository)
        private readonly repo: IProductionOrderRepository,
        private readonly inventoryGateway: InventoryGateway,
    ) {
        super();
    }

    async handle(command: CreateProductionOrderCommand): Promise<string> {
        const product = await this.inventoryGateway.getProduct(command.productId);
        if (!product) throw new ProductNotFoundApplicationError(command.productId);

        const order = ProductionOrder.create({
            id: crypto.randomUUID(),
            productId: command.productId,
            batchWeightGm: command.batchWeightGm,
            wastePercent: command.wastePercent,
            notes: command.notes,
            addonResolutions: (command.addonResolutions ?? []).map(
                (r) => new AddonResolution(r.ingredientCategory, r.addonItemId),
            ),
        });

        await this.repo.save(order);

        this.logger.info('Production order created', { id: order.getId().value });

        return order.getId().value;
    }
}
