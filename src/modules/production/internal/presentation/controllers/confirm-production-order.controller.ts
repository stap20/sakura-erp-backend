import { Controller, Post, Param, Version, HttpCode, HttpStatus, Inject } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ConfirmProductionOrderHandler } from '../../application/commands/confirm-production-order/confirm-production-order.handler';
import { ConfirmProductionOrderCommand } from '../../application/commands/confirm-production-order/confirm-production-order.command';
import { IGetProductionOrderHandler } from '../../application/queries/get-production-order/get-production-order.handler.interface';
import { GetProductionOrderQuery } from '../../application/queries/get-production-order/get-production-order.query';
import { ProductionOrderResponseDto } from '../dtos/responses/production-order.response.dto';
import { toProductionOrderResponseDto } from './helpers/response.mapper';

@ApiTags('Production')
@Controller('production-orders')
export class ConfirmProductionOrderController {
    constructor(
        private readonly handler: ConfirmProductionOrderHandler,
        @Inject(IGetProductionOrderHandler)
        private readonly getHandler: IGetProductionOrderHandler,
    ) {}

    @Version('1')
    @Post(':id/confirm')
    @HttpCode(HttpStatus.OK)
    @ApiOperation({ summary: 'Confirm a DRAFT production order' })
    @ApiResponse({ status: 200, type: ProductionOrderResponseDto })
    async confirm(@Param('id') id: string): Promise<ProductionOrderResponseDto> {
        await this.handler.handle(new ConfirmProductionOrderCommand(id));
        const result = await this.getHandler.handle(new GetProductionOrderQuery(id));
        return toProductionOrderResponseDto(result);
    }
}
