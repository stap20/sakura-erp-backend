import { Controller, Patch, Param, Body, Version, Inject, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { UpdateDiscountCodeHandler } from '../../application/commands/update-discount-code/update-discount-code.handler';
import { UpdateDiscountCodeCommand } from '../../application/commands/update-discount-code/update-discount-code.command';
import { UpdateDiscountCodeRequestDto } from '../dtos/requests/update-discount-code.request.dto';

@ApiTags('Promotions')
@Controller('promotions/discount-codes')
export class UpdateDiscountCodeController {
    constructor(
        @Inject(UpdateDiscountCodeHandler)
        private readonly handler: UpdateDiscountCodeHandler,
    ) {}

    @Version('1')
    @Patch(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    @ApiOperation({ summary: 'Update a discount code' })
    @ApiResponse({ status: 204 })
    async update(@Param('id') id: string, @Body() dto: UpdateDiscountCodeRequestDto): Promise<void> {
        await this.handler.handle(
            new UpdateDiscountCodeCommand(
                id,
                dto.code,
                dto.type,
                dto.value,
                dto.maxUses,
                dto.expiresAt ? new Date(dto.expiresAt) : undefined,
                dto.isActive,
            ),
        );
    }
}
