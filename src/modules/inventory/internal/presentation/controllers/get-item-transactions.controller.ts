import { Controller, Get, Param, Query, Version, Inject } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { IGetItemTransactionsHandler } from '../../application/queries/get-item-transactions/get-item-transactions.handler.interface';
import { GetItemTransactionsQuery } from '../../application/queries/get-item-transactions/get-item-transactions.query';
import { GetItemTransactionsRequestDto } from '../dtos/requests/get-item-transactions.request.dto';
import { TransactionResponseDto } from '../dtos/responses/transaction.response.dto';

@ApiTags('Inventory - Items')
@Controller('inventory/items')
export class GetItemTransactionsController {
    constructor(
        @Inject(IGetItemTransactionsHandler)
        private readonly getItemTransactionsHandler: IGetItemTransactionsHandler,
    ) {}

    @Version('1')
    @Get(':id/transactions')
    @ApiOperation({ summary: 'Get stock transaction history for an item' })
    @ApiResponse({ status: 200, type: [TransactionResponseDto] })
    async getTransactions(
        @Param('id') id: string,
        @Query() dto: GetItemTransactionsRequestDto,
    ): Promise<TransactionResponseDto[]> {
        const query = new GetItemTransactionsQuery(
            id,
            dto.offset ?? 0,
            dto.limit ?? 20,
            dto.type,
        );

        const result = await this.getItemTransactionsHandler.handle(query);

        return result.transactions.map(
            (t) =>
                new TransactionResponseDto(
                    t.id,
                    t.itemId,
                    t.type,
                    t.quantity,
                    t.vendorId,
                    t.unitPrice,
                    t.performedBy,
                    t.notes,
                    t.createdAt,
                ),
        );
    }
}
