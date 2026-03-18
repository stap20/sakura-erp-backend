import { IQueryHandler } from 'src/shared/application/query.handler.interface';
import { GetItemTransactionsQuery } from './get-item-transactions.query';
import { GetItemTransactionsResponse } from './get-item-transactions.response';

export interface IGetItemTransactionsHandler
    extends IQueryHandler<
        GetItemTransactionsQuery,
        GetItemTransactionsResponse
    > {}

export const IGetItemTransactionsHandler = Symbol(
    'IGetItemTransactionsHandler',
);
