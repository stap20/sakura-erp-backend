import { Injectable } from '@nestjs/common';
import { IGetSalesOrderHandler } from '../../application/queries/get-sales-order/get-sales-order.handler.interface';
import { GetSalesOrderQuery } from '../../application/queries/get-sales-order/get-sales-order.query';
import { GetSalesOrderResponse } from '../../application/queries/get-sales-order/get-sales-order.response';
import { ReadSalesOrderRepository } from '../repositories/read-sales-order.repository';
import { SalesOrderNotFoundApplicationError } from '../../application/errors/sales-order.errors';
import { mapToGetSalesOrderResponse } from './sales-order.mapper.helper';

@Injectable()
export class GetSalesOrderHandler implements IGetSalesOrderHandler {
    constructor(private readonly readRepo: ReadSalesOrderRepository) {}

    async handle(query: GetSalesOrderQuery): Promise<GetSalesOrderResponse> {
        const entity = await this.readRepo.getById(query.id);
        if (!entity) throw new SalesOrderNotFoundApplicationError(query.id);
        return mapToGetSalesOrderResponse(entity);
    }
}
