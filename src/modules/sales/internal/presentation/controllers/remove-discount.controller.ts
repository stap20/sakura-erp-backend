import { Controller, Delete, Param, Version, Inject, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { RemoveDiscountHandler } from '../../application/commands/remove-discount/remove-discount.handler';
import { RemoveDiscountCommand } from '../../application/commands/remove-discount/remove-discount.command';

@ApiTags('Sales')
@Controller('sales')
export class RemoveDiscountController {
    constructor(
        @Inject(RemoveDiscountHandler)
        private readonly handler: RemoveDiscountHandler,
    ) {}

    @Version('1')
    @Delete(':id/discount')
    @HttpCode(HttpStatus.NO_CONTENT)
    @ApiOperation({ summary: 'Remove discount from a DRAFT sales order' })
    @ApiResponse({ status: 204 })
    async remove(@Param('id') id: string): Promise<void> {
        await this.handler.handle(new RemoveDiscountCommand(id));
    }
}
