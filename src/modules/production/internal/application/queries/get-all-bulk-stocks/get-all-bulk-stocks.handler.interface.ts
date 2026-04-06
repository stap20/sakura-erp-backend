import { IQueryHandler } from 'src/shared/application/query.handler.interface';
import { GetAllBulkStocksQuery } from './get-all-bulk-stocks.query';
import { GetAllBulkStocksResponse } from './get-all-bulk-stocks.response';

export interface IGetAllBulkStocksHandler
    extends IQueryHandler<GetAllBulkStocksQuery, GetAllBulkStocksResponse[]> {}

export const IGetAllBulkStocksHandler = Symbol('IGetAllBulkStocksHandler');
