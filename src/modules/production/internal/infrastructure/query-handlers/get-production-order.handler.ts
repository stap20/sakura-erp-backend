import { Injectable } from '@nestjs/common';
import { IGetProductionOrderHandler } from '../../application/queries/get-production-order/get-production-order.handler.interface';
import { GetProductionOrderQuery } from '../../application/queries/get-production-order/get-production-order.query';
import { GetProductionOrderResponse } from '../../application/queries/get-production-order/get-production-order.response';
import { ReadProductionOrderRepository } from '../repositories/read-production-order.repository';
import { ProductionOrderNotFoundApplicationError } from '../../application/errors/production.errors';
import { mapToProductionOrderResponse } from './production-order.mapper.helper';

@Injectable()
export class GetProductionOrderHandler implements IGetProductionOrderHandler {
    constructor(private readonly readRepo: ReadProductionOrderRepository) {}

    async handle(query: GetProductionOrderQuery): Promise<GetProductionOrderResponse> {
        const entity = await this.readRepo.getById(query.id);
        if (!entity) throw new ProductionOrderNotFoundApplicationError(query.id);
        return mapToProductionOrderResponse(entity);
    }
}
