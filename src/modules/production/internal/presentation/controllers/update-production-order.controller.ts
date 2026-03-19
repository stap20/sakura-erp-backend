import { Controller, Patch, Param, Body, Version, Inject, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { UpdateProductionOrderHandler } from '../../application/commands/update-production-order/update-production-order.handler';
import { UpdateProductionOrderCommand } from '../../application/commands/update-production-order/update-production-order.command';
import { UpdateProductionOrderRequestDto } from '../dtos/requests/update-production-order.request.dto';
import { IGetProductionOrderHandler } from '../../application/queries/get-production-order/get-production-order.handler.interface';
import { GetProductionOrderQuery } from '../../application/queries/get-production-order/get-production-order.query';
import { ProductionOrderResponseDto } from '../dtos/responses/production-order.response.dto';
import { toProductionOrderResponseDto } from './helpers/response.mapper';

@ApiTags('Production Orders')
@Controller('production/orders')
export class UpdateProductionOrderController {
    constructor(
        @Inject(UpdateProductionOrderHandler)
        private readonly handler: UpdateProductionOrderHandler,
        @Inject(IGetProductionOrderHandler)
        private readonly getHandler: IGetProductionOrderHandler,
    ) {}

    @Version('1')
    @Patch(':id')
    @HttpCode(HttpStatus.OK)
    @ApiOperation({ summary: 'Update a DRAFT production order' })
    @ApiResponse({ status: 200, type: ProductionOrderResponseDto })
    async update(
        @Param('id') id: string,
        @Body() dto: UpdateProductionOrderRequestDto,
    ): Promise<ProductionOrderResponseDto> {
        const command = new UpdateProductionOrderCommand(
            id,
            dto.batchWeightGm,
            dto.wastePercent,
            dto.notes,
        );
        await this.handler.handle(command);
        const result = await this.getHandler.handle(new GetProductionOrderQuery(id));
        return toProductionOrderResponseDto(result);
    }
}
