import { Controller, Post, Body, Param, Version, Inject } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { DeductItemHandler } from '../../application/commands/deduct-item/deduct-item.handler';
import { DeductItemCommand } from '../../application/commands/deduct-item/deduct-item.command';
import { DeductItemRequestDto } from '../dtos/requests/deduct-item.request.dto';

@ApiTags('Inventory - Items')
@Controller('inventory/items')
export class DeductItemController {
    constructor(
        @Inject(DeductItemHandler)
        private readonly deductItemHandler: DeductItemHandler,
    ) {}

    @Version('1')
    @Post(':id/deduct')
    @ApiOperation({ summary: 'Deduct stock from an inventory item' })
    @ApiResponse({ status: 201, description: 'Stock deducted successfully' })
    @ApiResponse({ status: 404, description: 'Item not found' })
    @ApiResponse({ status: 400, description: 'Insufficient stock or item is archived' })
    async deduct(
        @Param('id') id: string,
        @Body() dto: DeductItemRequestDto,
    ) {
        const command = new DeductItemCommand(
            id,
            dto.quantity,
            dto.performedBy,
            dto.notes,
        );

        return this.deductItemHandler.handle(command);
    }
}
