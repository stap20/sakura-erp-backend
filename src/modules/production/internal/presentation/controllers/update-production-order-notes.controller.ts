import { Controller, Patch, Param, Body, Version, HttpCode, HttpStatus, Inject } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { UpdateProductionOrderNotesHandler } from '../../application/commands/update-production-order-notes/update-production-order-notes.handler';
import { UpdateProductionOrderNotesCommand } from '../../application/commands/update-production-order-notes/update-production-order-notes.command';
import { UpdateProductionOrderNotesRequestDto } from '../dtos/requests/update-production-order-notes.request.dto';
import { IGetProductionOrderHandler } from '../../application/queries/get-production-order/get-production-order.handler.interface';
import { GetProductionOrderQuery } from '../../application/queries/get-production-order/get-production-order.query';
import { ProductionOrderResponseDto } from '../dtos/responses/production-order.response.dto';
import { toProductionOrderResponseDto } from './helpers/response.mapper';

@ApiTags('Production')
@Controller('production-orders')
export class UpdateProductionOrderNotesController {
    constructor(
        private readonly handler: UpdateProductionOrderNotesHandler,
        @Inject(IGetProductionOrderHandler)
        private readonly getHandler: IGetProductionOrderHandler,
    ) {}

    @Version('1')
    @Patch(':id/notes')
    @HttpCode(HttpStatus.OK)
    @ApiOperation({ summary: 'Update notes on a DRAFT production order' })
    @ApiResponse({ status: 200, type: ProductionOrderResponseDto })
    async updateNotes(
        @Param('id') id: string,
        @Body() dto: UpdateProductionOrderNotesRequestDto,
    ): Promise<ProductionOrderResponseDto> {
        await this.handler.handle(
            new UpdateProductionOrderNotesCommand(id, dto.notes ?? null),
        );
        const result = await this.getHandler.handle(new GetProductionOrderQuery(id));
        return toProductionOrderResponseDto(result);
    }
}
