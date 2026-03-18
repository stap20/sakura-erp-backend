import { Controller, Get, Query, Version, Inject } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { IGetAllItemsHandler } from '../../application/queries/get-all-items/get-all-items.handler.interface';
import { GetAllItemsQuery } from '../../application/queries/get-all-items/get-all-items.query';
import { GetAllItemsRequestDto } from '../dtos/requests/get-all-items.request.dto';
import { ItemResponseDto } from '../dtos/responses/item.response.dto';

@ApiTags('Inventory - Items')
@Controller('inventory/items')
export class GetAllItemsController {
    constructor(
        @Inject(IGetAllItemsHandler)
        private readonly getAllItemsHandler: IGetAllItemsHandler,
    ) {}

    @Version('1')
    @Get()
    @ApiOperation({ summary: 'Get all inventory items with filters' })
    @ApiResponse({ status: 200, type: [ItemResponseDto] })
    async getAll(@Query() dto: GetAllItemsRequestDto): Promise<ItemResponseDto[]> {
        const query = new GetAllItemsQuery(
            dto.offset ?? 0,
            dto.limit ?? 20,
            dto.search,
            dto.type,
            dto.categoryId,
            dto.vendorId,
            dto.stockStatus,
            dto.status,
        );

        const result = await this.getAllItemsHandler.handle(query);

        return result.items.map(
            (item) =>
                new ItemResponseDto(
                    item.id,
                    item.name,
                    item.type,
                    item.measureUnit,
                    item.currentStock,
                    item.categoryId,
                    item.status,
                    item.createdAt,
                    item.updatedAt,
                ),
        );
    }
}
