import { Controller, Post, Body, Version, Inject } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CreateItemHandler } from '../../application/commands/create-item/create-item.handler';
import { CreateItemCommand } from '../../application/commands/create-item/create-item.command';
import { CreateItemRequestDto } from '../dtos/requests/create-item.request.dto';
import { ItemResponseDto } from '../dtos/responses/item.response.dto';

@ApiTags('Inventory - Items')
@Controller('inventory/items')
export class CreateItemController {
    constructor(
        @Inject(CreateItemHandler)
        private readonly createItemHandler: CreateItemHandler,
    ) {}

    @Version('1')
    @Post()
    @ApiOperation({ summary: 'Create a new inventory item' })
    @ApiResponse({ status: 201, type: ItemResponseDto })
    @ApiResponse({ status: 400, description: 'Invalid input data' })
    @ApiResponse({ status: 409, description: 'Item with this name already exists' })
    async create(@Body() dto: CreateItemRequestDto): Promise<ItemResponseDto> {
        const command = new CreateItemCommand(
            dto.name,
            dto.type,
            dto.measureUnit,
            dto.categoryId,
        );

        const result = await this.createItemHandler.handle(command);

        return new ItemResponseDto(
            result.id,
            result.name,
            result.type,
            result.measureUnit,
            result.currentStock,
            result.categoryId,
            result.status,
        );
    }
}
