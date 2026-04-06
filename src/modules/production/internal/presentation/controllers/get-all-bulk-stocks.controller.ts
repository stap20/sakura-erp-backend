import { Controller, Get, Version, Inject } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { IGetAllBulkStocksHandler } from '../../application/queries/get-all-bulk-stocks/get-all-bulk-stocks.handler.interface';
import { BulkStockResponseDto } from '../dtos/responses/bulk-stock.response.dto';

@ApiTags('Production')
@Controller('production/bulk-stocks')
export class GetAllBulkStocksController {
    constructor(
        @Inject(IGetAllBulkStocksHandler)
        private readonly handler: IGetAllBulkStocksHandler,
    ) {}

    @Version('1')
    @Get()
    @ApiOperation({ summary: 'Get available bulk stock for all products' })
    @ApiResponse({ status: 200, type: [BulkStockResponseDto] })
    async getAll(): Promise<BulkStockResponseDto[]> {
        const results = await this.handler.handle();
        return results as BulkStockResponseDto[];
    }
}
