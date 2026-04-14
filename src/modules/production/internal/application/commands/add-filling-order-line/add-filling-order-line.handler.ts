import { Injectable, Inject } from '@nestjs/common';
import { CommandHandlerBase } from 'src/shared/application/command.handler.base';
import { IFillingOrderRepository } from '../../../domain/repositories/filling-order.repo.interface';
import { FillingOrderId } from '../../../domain/value-objects/filling-order-id.vo';
import { FillingOrderLine } from '../../../domain/entities/filling-order-line.entity';
import { InventoryGateway } from '../../../infrastructure/gateways/inventory.gateway';
import { FillingOrderNotFoundApplicationError, VariantNotValidApplicationError } from '../../errors/production.errors';
import { AddFillingOrderLineCommand } from './add-filling-order-line.command';

@Injectable()
export class AddFillingOrderLineHandler extends CommandHandlerBase<AddFillingOrderLineCommand, void> {
    constructor(
        @Inject(IFillingOrderRepository)
        private readonly repo: IFillingOrderRepository,
        private readonly inventoryGateway: InventoryGateway,
    ) {
        super();
    }

    async handle(command: AddFillingOrderLineCommand): Promise<void> {
        const order = await this.repo.getById(FillingOrderId.create(command.orderId));
        if (!order) throw new FillingOrderNotFoundApplicationError(command.orderId);

        const item = await this.inventoryGateway.getItem(command.variantItemId);
        if (!item || item.type !== 'FINAL_PRODUCT' || item.productId !== order.getProductId()) {
            throw new VariantNotValidApplicationError(command.variantItemId);
        }

        const line = FillingOrderLine.create({
            id: crypto.randomUUID(),
            variantItemId: item.id,
            variantName: item.name,
            quantityUnits: command.quantityUnits,
            unitWeightGm: item.unitWeightGm ?? 0,
        });

        order.addLine(line);
        await this.repo.save(order);

        this.logger.info('Line added to filling order', {
            orderId: command.orderId,
            variantItemId: command.variantItemId,
        });
    }
}
