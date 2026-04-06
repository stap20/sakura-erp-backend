import { GetAllBulkStocksResponse } from './get-all-bulk-stocks.response';

export interface IGetAllBulkStocksHandler {
    handle(): Promise<GetAllBulkStocksResponse[]>;
}

export const IGetAllBulkStocksHandler = Symbol('IGetAllBulkStocksHandler');
