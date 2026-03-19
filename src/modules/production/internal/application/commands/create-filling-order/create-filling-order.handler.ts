import { Injectable, Inject } from '@nestjs/common';
import { CommandHandlerBase } from 'src/shared/application/command.handler.base';
import { IFillingOrderRepository } from '../../../domain/repositories/filling-order.repo.interface';
import { FillingOrder } from '../../../domain/aggregates/filling-order.aggregate';
import { CreateFillingOrderCommand } from './create-filling-order.command';
import { InventoryGateway } from '../../../infrastructure/gateways/inventory.gateway';
import {
    ProductNotFoundApplicationError,
    VariantNotValidApplicationError,
} from '../../errors/production.errors';

@Injectable()
export class CreateFillingOrderHandler extends CommandHandlerBase<
    CreateFillingOrderCommand,
    string
> {
    constructor(
        @Inject(IFillingOrderRepository)
        private readonly repo: IFillingOrderRepository,
        private readonly inventoryGateway: InventoryGateway,
    ) {
        super();
    }

    async handle(command: CreateFillingOrderCommand): Promise<string> {
        // Validate product exists
        const product = await this.inventoryGateway.getProduct(command.productId);
        if (!product) throw new ProductNotFoundApplicationError(command.productId);

        // Validate each variant line
        const lines: {
            id: string;
            variantItemId: string;
            variantName: string;
            quantityUnits: number;
            unitWeightGm: number;
        }[] = [];

        for (const line of command.lines) {
            const item = await this.inventoryGateway.getItem(line.variantItemId);
            if (!item || item.type !== 'FINAL_PRODUCT') {
                throw new VariantNotValidApplicationError(line.variantItemId);
            }

            lines.push({
                id: crypto.randomUUID(),
                variantItemId: line.variantItemId,
                variantName: item.name,
                quantityUnits: line.quantityUnits,
                unitWeightGm: line.unitWeightGm,
            });
        }

        const order = FillingOrder.create({
            id: crypto.randomUUID(),
            productId: command.productId,
            lines,
            notes: command.notes,
        });

        await this.repo.save(order);

        this.logger.info('Filling order created', { id: order.getId().value });

        return order.getId().value;
    }
}
