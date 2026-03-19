import { Injectable, Inject } from '@nestjs/common';
import { CommandHandlerBase } from 'src/shared/application/command.handler.base';
import { IPurchaseOrderRepository } from '../../../domain/repositories/purchase-order.repo.interface';
import { PurchaseOrderId } from '../../../domain/value-objects/purchase-order-id.vo';
import { PurchaseOrderLine } from '../../../domain/entities/purchase-order-line.entity';
import { PurchaseOrderNotFoundApplicationError } from '../../errors/purchase-order.errors';
import { InventoryGateway } from '../../../infrastructure/gateways/inventory.gateway';
import { ItemNotFoundForPurchaseError, InvalidItemTypeForPurchaseError } from '../../errors/add-line.errors';
import { AddLineCommand } from './add-line.command';

const ALLOWED_TYPES = ['RAW_MATERIAL', 'PACKAGING'];

@Injectable()
export class AddLineHandler extends CommandHandlerBase<AddLineCommand, void> {
    constructor(
        @Inject(IPurchaseOrderRepository)
        private readonly repo: IPurchaseOrderRepository,
        private readonly inventoryGateway: InventoryGateway,
    ) {
        super();
    }

    async handle(command: AddLineCommand): Promise<void> {
        const id = PurchaseOrderId.create(command.orderId);
        const order = await this.repo.getById(id);
        if (!order) throw new PurchaseOrderNotFoundApplicationError(command.orderId);

        const item = await this.inventoryGateway.getItem(command.itemId);
        if (!item) throw new ItemNotFoundForPurchaseError(command.itemId);

        if (!ALLOWED_TYPES.includes(item.type)) {
            throw new InvalidItemTypeForPurchaseError(item.type);
        }

        const line = new PurchaseOrderLine({
            id: crypto.randomUUID(),
            itemId: item.id,
            itemName: item.name,
            measureUnit: item.measureUnit,
            quantity: command.quantity,
            unitPrice: command.unitPrice,
        });

        order.addLine(line);
        await this.repo.save(order);

        this.logger.info('Line added to purchase order', {
            orderId: command.orderId,
            itemId: command.itemId,
        });
    }
}
