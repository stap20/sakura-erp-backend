import { IQueryHandler } from 'src/shared/application/query.handler.interface';
import { GetItemPricingQuery } from './get-item-pricing.query';
import { GetItemPricingResponse } from './get-item-pricing.response';

export interface IGetItemPricingHandler
    extends IQueryHandler<GetItemPricingQuery, GetItemPricingResponse> {}

export const IGetItemPricingHandler = Symbol('IGetItemPricingHandler');
