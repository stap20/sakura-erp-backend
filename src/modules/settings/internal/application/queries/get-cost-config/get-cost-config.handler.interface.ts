import { GetCostConfigQuery } from './get-cost-config.query';
import { GetCostConfigResponse } from './get-cost-config.response';

export interface IGetCostConfigHandler {
    handle(query: GetCostConfigQuery): Promise<GetCostConfigResponse>;
}

export const IGetCostConfigHandler = Symbol('IGetCostConfigHandler');
