import { Injectable, Inject } from '@nestjs/common';
import { CommandHandlerBase } from 'src/shared/application/command.handler.base';
import { ISalesOrderRepository } from '../../../domain/repositories/sales-order.repo.interface';
import { SalesOrderId } from '../../../domain/value-objects/sales-order-id.vo';
import { SalesOrderLine } from '../../../domain/entities/sales-order-line.entity';
import { SalesOrderNotFoundApplicationError, ItemNotFoundForSaleError, InvalidItemTypeForSaleError } from '../../errors/sales-order.errors';
import { InventoryGateway } from '../../../infrastructure/gateways/inventory.gateway';
import { AddLineCommand } from './add-line.command';

const ALLOWED_ITEM_TYPES = ['FINAL_PRODUCT', 'SHIPPING_PACKAGING'];

@Injectable()
export class AddLineHandler extends CommandHandlerBase<AddLineCommand, void> {
    constructor(
        @Inject(ISalesOrderRepository)
        private readonly repo: ISalesOrderRepository,
        private readonly inventoryGateway: InventoryGateway,
    ) {
        super();
    }

    async handle(command: AddLineCommand): Promise<void> {
        const id = SalesOrderId.create(command.orderId);
        const order = await this.repo.getById(id);
        if (!order) throw new SalesOrderNotFoundApplicationError(command.orderId);

        const item = await this.inventoryGateway.getItem(command.itemId);
        if (!item) throw new ItemNotFoundForSaleError(command.itemId);

        if (!ALLOWED_ITEM_TYPES.includes(item.type)) {
            throw new InvalidItemTypeForSaleError(item.type);
        }

        const line = new SalesOrderLine({
            id: crypto.randomUUID(),
            itemId: item.id,
            itemName: item.name,
            measureUnit: item.measureUnit,
            quantity: command.quantity,
            unitPrice: command.unitPrice,
            isGift: command.isGift ?? false,
        });

        order.addLine(line);
        await this.repo.save(order);
    }
}
