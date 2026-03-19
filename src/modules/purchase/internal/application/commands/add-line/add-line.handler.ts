import { Injectable, Inject } from '@nestjs/common';
import { CommandHandlerBase } from 'src/shared/application/command.handler.base';
import { IPurchaseOrderRepository } from '../../../domain/repositories/purchase-order.repo.interface';
import { PurchaseOrderId } from '../../../domain/value-objects/purchase-order-id.vo';
import { PurchaseOrderLine } from '../../../domain/entities/purchase-order-line.entity';
import { PurchaseOrderNotFoundError } from '../../../domain/errors/purchase.error';
import { DomainError } from 'src/shared/domain/errors/domain.error';
import { NotFoundDomainError } from 'src/shared/domain/errors/not-found.domain.error';
import { InventoryGateway } from '../../../infrastructure/gateways/inventory.gateway';
import { AddLineCommand } from './add-line.command';

const ALLOWED_TYPES = ['RAW_MATERIAL', 'PACKAGING'];

class InvalidItemTypeError extends DomainError {
    constructor(type: string) {
        super(`Item type ${type} is not allowed in a purchase order. Must be RAW_MATERIAL or PACKAGING`);
    }
}

class ItemNotFoundForPurchaseError extends NotFoundDomainError {
    constructor(id: string) {
        super(`Item with id ${id} not found`);
    }
}

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
        if (!order) throw new PurchaseOrderNotFoundError(command.orderId);

        const item = await this.inventoryGateway.getItem(command.itemId);
        if (!item) throw new ItemNotFoundForPurchaseError(command.itemId);

        if (!ALLOWED_TYPES.includes(item.type)) {
            throw new InvalidItemTypeError(item.type);
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
