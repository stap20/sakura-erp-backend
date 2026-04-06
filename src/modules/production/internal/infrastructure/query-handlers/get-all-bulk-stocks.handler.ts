import { Injectable } from '@nestjs/common';
import { ReadBulkStockRepository } from '../repositories/read-bulk-stock.repository';
import { IGetAllBulkStocksHandler } from '../../application/queries/get-all-bulk-stocks/get-all-bulk-stocks.handler.interface';
import { GetAllBulkStocksResponse } from '../../application/queries/get-all-bulk-stocks/get-all-bulk-stocks.response';

@Injectable()
export class GetAllBulkStocksHandler implements IGetAllBulkStocksHandler {
    constructor(private readonly readRepo: ReadBulkStockRepository) {}

    async handle(): Promise<GetAllBulkStocksResponse[]> {
        const rows = await this.readRepo.findAll();
        return rows.map((r) => new GetAllBulkStocksResponse(r.productId, r.availableGm, r.updatedAt));
    }
}
