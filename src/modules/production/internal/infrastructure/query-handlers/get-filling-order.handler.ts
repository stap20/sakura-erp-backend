import { Injectable } from '@nestjs/common';
import { IGetFillingOrderHandler } from '../../application/queries/get-filling-order/get-filling-order.handler.interface';
import { GetFillingOrderQuery } from '../../application/queries/get-filling-order/get-filling-order.query';
import { GetFillingOrderResponse } from '../../application/queries/get-filling-order/get-filling-order.response';
import { ReadFillingOrderRepository } from '../repositories/read-filling-order.repository';
import { FillingOrderNotFoundApplicationError } from '../../application/errors/production.errors';
import { mapToFillingOrderResponse } from './filling-order.mapper.helper';

@Injectable()
export class GetFillingOrderHandler implements IGetFillingOrderHandler {
    constructor(private readonly readRepo: ReadFillingOrderRepository) {}

    async handle(query: GetFillingOrderQuery): Promise<GetFillingOrderResponse> {
        const entity = await this.readRepo.getById(query.id);
        if (!entity) throw new FillingOrderNotFoundApplicationError(query.id);
        return mapToFillingOrderResponse(entity);
    }
}
