import { Controller, Put, Body, Param, Version, Inject } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { SetAddonBomHandler } from '../../application/commands/set-addon-bom/set-addon-bom.handler';
import { SetAddonBomCommand } from '../../application/commands/set-addon-bom/set-addon-bom.command';
import { SetAddonBomRequestDto } from '../dtos/requests/set-addon-bom.request.dto';
import { SetAddonBomResponse } from '../../application/commands/set-addon-bom/set-addon-bom.response';

@ApiTags('Inventory - Items')
@Controller('inventory/items')
export class SetAddonBomController {
    constructor(
        @Inject(SetAddonBomHandler)
        private readonly setAddonBomHandler: SetAddonBomHandler,
    ) {}

    @Version('1')
    @Put(':id/addon-bom')
    @ApiOperation({ summary: 'Replace all addon BOM components for a FINAL_PRODUCT variant (fragrance, colorant)' })
    @ApiResponse({ status: 200, description: 'Addon BOM updated' })
    @ApiResponse({ status: 404, description: 'Item not found' })
    @ApiResponse({ status: 409, description: 'Item is not a FINAL_PRODUCT' })
    async set(
        @Param('id') id: string,
        @Body() dto: SetAddonBomRequestDto,
    ): Promise<SetAddonBomResponse> {
        const command = new SetAddonBomCommand(id, dto.components);
        return this.setAddonBomHandler.handle(command);
    }
}
