import { GetProductionOrderResponse } from '../get-production-order/get-production-order.response';

export class GetProductionOrdersResponse {
    constructor(public readonly orders: GetProductionOrderResponse[]) {}
}
