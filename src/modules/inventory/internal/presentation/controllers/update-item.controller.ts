import { Controller, Patch, Body, Param, Version, Inject } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { UpdateItemHandler } from '../../application/commands/update-item/update-item.handler';
import { UpdateItemCommand } from '../../application/commands/update-item/update-item.command';
import { UpdateItemRequestDto } from '../dtos/requests/update-item.request.dto';
import { ItemResponseDto } from '../dtos/responses/item.response.dto';

@ApiTags('Inventory - Items')
@Controller('inventory/items')
export class UpdateItemController {
    constructor(
        @Inject(UpdateItemHandler)
        private readonly updateItemHandler: UpdateItemHandler,
    ) {}

    @Version('1')
    @Patch(':id')
    @ApiOperation({ summary: 'Update an inventory item' })
    @ApiResponse({ status: 200, type: ItemResponseDto })
    @ApiResponse({ status: 404, description: 'Item not found' })
    async update(
        @Param('id') id: string,
        @Body() dto: UpdateItemRequestDto,
    ): Promise<ItemResponseDto> {
        const command = new UpdateItemCommand(
            id,
            dto.name,
            dto.measureUnit,
            dto.categoryId,
            dto.unitWeightGm,
            dto.productId,
        );

        const result = await this.updateItemHandler.handle(command);

        return new ItemResponseDto(
            result.id,
            result.name,
            result.type,
            result.measureUnit,
            result.currentStock,
            result.categoryId,
            result.status,
            undefined,
            undefined,
            result.unitWeightGm,
            result.weightedAverageUnitPrice,
            result.productId,
        );
    }
}
