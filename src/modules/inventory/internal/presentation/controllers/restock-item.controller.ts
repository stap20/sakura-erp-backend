import { Controller, Post, Body, Param, Version, Inject } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { RestockItemHandler } from '../../application/commands/restock-item/restock-item.handler';
import { RestockItemCommand } from '../../application/commands/restock-item/restock-item.command';
import { RestockItemRequestDto } from '../dtos/requests/restock-item.request.dto';

@ApiTags('Inventory - Items')
@Controller('inventory/items')
export class RestockItemController {
    constructor(
        @Inject(RestockItemHandler)
        private readonly restockItemHandler: RestockItemHandler,
    ) {}

    @Version('1')
    @Post(':id/restock')
    @ApiOperation({ summary: 'Restock an inventory item' })
    @ApiResponse({ status: 201, description: 'Item restocked successfully' })
    @ApiResponse({ status: 404, description: 'Item not found' })
    @ApiResponse({ status: 400, description: 'Invalid quantity or item is archived' })
    async restock(
        @Param('id') id: string,
        @Body() dto: RestockItemRequestDto,
    ) {
        const command = new RestockItemCommand(
            id,
            dto.quantity,
            dto.performedBy,
            dto.vendorId,
            dto.unitPrice ?? null,
            dto.notes,
        );

        return this.restockItemHandler.handle(command);
    }
}
