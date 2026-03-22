import { Injectable } from '@nestjs/common';
import { IGetAllSalesOrdersHandler } from '../../application/queries/get-all-sales-orders/get-all-sales-orders.handler.interface';
import { GetAllSalesOrdersQuery } from '../../application/queries/get-all-sales-orders/get-all-sales-orders.query';
import { GetAllSalesOrdersResponse } from '../../application/queries/get-all-sales-orders/get-all-sales-orders.response';
import { ReadSalesOrderRepository } from '../repositories/read-sales-order.repository';
import { mapToGetAllSalesOrdersResponse } from './sales-order.mapper.helper';

@Injectable()
export class GetAllSalesOrdersHandler implements IGetAllSalesOrdersHandler {
    constructor(private readonly readRepo: ReadSalesOrderRepository) {}

    async handle(query: GetAllSalesOrdersQuery): Promise<GetAllSalesOrdersResponse[]> {
        const entities = await this.readRepo.findAll({ status: query.status, paymentStatus: query.paymentStatus });
        return entities.map(mapToGetAllSalesOrdersResponse);
    }
}
