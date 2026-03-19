import { Controller, Put, Body, Param, Version, Inject } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { SetPackagingBomHandler } from '../../application/commands/set-packaging-bom/set-packaging-bom.handler';
import { SetPackagingBomCommand } from '../../application/commands/set-packaging-bom/set-packaging-bom.command';
import { SetPackagingBomRequestDto } from '../dtos/requests/set-packaging-bom.request.dto';
import { SetPackagingBomResponse } from '../../application/commands/set-packaging-bom/set-packaging-bom.response';

@ApiTags('Inventory - Items')
@Controller('inventory/items')
export class SetPackagingBomController {
    constructor(
        @Inject(SetPackagingBomHandler)
        private readonly setPackagingBomHandler: SetPackagingBomHandler,
    ) {}

    @Version('1')
    @Put(':id/packaging-bom')
    @ApiOperation({ summary: 'Replace all packaging BOM components for a FINAL_PRODUCT variant' })
    @ApiResponse({ status: 200, description: 'Packaging BOM updated' })
    @ApiResponse({ status: 404, description: 'Item not found' })
    @ApiResponse({ status: 409, description: 'Item is not a FINAL_PRODUCT' })
    async set(
        @Param('id') id: string,
        @Body() dto: SetPackagingBomRequestDto,
    ): Promise<SetPackagingBomResponse> {
        const command = new SetPackagingBomCommand(id, dto.components);
        return this.setPackagingBomHandler.handle(command);
    }
}
