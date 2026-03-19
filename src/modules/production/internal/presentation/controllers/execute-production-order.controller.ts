import { Controller, Post, Param, Body, Version, HttpCode, HttpStatus, Inject } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ExecuteProductionOrderHandler } from '../../application/commands/execute-production-order/execute-production-order.handler';
import { ExecuteProductionOrderCommand } from '../../application/commands/execute-production-order/execute-production-order.command';
import { ExecuteProductionOrderRequestDto } from '../dtos/requests/execute-production-order.request.dto';
import { IGetProductionOrderHandler } from '../../application/queries/get-production-order/get-production-order.handler.interface';
import { GetProductionOrderQuery } from '../../application/queries/get-production-order/get-production-order.query';
import { ProductionOrderResponseDto } from '../dtos/responses/production-order.response.dto';
import { toProductionOrderResponseDto } from './helpers/response.mapper';

@ApiTags('Production')
@Controller('production-orders')
export class ExecuteProductionOrderController {
    constructor(
        private readonly handler: ExecuteProductionOrderHandler,
        @Inject(IGetProductionOrderHandler)
        private readonly getHandler: IGetProductionOrderHandler,
    ) {}

    @Version('1')
    @Post(':id/execute')
    @HttpCode(HttpStatus.OK)
    @ApiOperation({ summary: 'Execute a CONFIRMED production order (deduct ingredients, restock product)' })
    @ApiResponse({ status: 200, type: ProductionOrderResponseDto })
    async execute(
        @Param('id') id: string,
        @Body() dto: ExecuteProductionOrderRequestDto,
    ): Promise<ProductionOrderResponseDto> {
        await this.handler.handle(
            new ExecuteProductionOrderCommand(id, dto.performedBy, dto.notes),
        );
        const result = await this.getHandler.handle(new GetProductionOrderQuery(id));
        return toProductionOrderResponseDto(result);
    }
}
