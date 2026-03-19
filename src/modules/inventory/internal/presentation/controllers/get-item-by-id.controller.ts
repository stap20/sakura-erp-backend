import { Controller, Get, Param, Version, Inject } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { IGetItemHandler } from '../../application/queries/get-item/get-item.handler.interface';
import { GetItemQuery } from '../../application/queries/get-item/get-item.query';
import { ItemResponseDto } from '../dtos/responses/item.response.dto';

@ApiTags('Inventory - Items')
@Controller('inventory/items')
export class GetItemByIdController {
    constructor(
        @Inject(IGetItemHandler)
        private readonly getItemHandler: IGetItemHandler,
    ) {}

    @Version('1')
    @Get(':id')
    @ApiOperation({ summary: 'Get an inventory item by ID' })
    @ApiResponse({ status: 200, type: ItemResponseDto })
    @ApiResponse({ status: 404, description: 'Item not found' })
    async getById(@Param('id') id: string): Promise<ItemResponseDto> {
        const result = await this.getItemHandler.handle(new GetItemQuery(id));

        return new ItemResponseDto(
            result.id,
            result.name,
            result.type,
            result.measureUnit,
            result.currentStock,
            result.categoryId,
            result.status,
            result.createdAt,
            result.updatedAt,
            result.unitWeightGm,
            result.weightedAverageUnitPrice,
            result.productId,
        );
    }
}
