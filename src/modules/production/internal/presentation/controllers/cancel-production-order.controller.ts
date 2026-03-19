import { Controller, Post, Param, Version, HttpCode, HttpStatus, Inject } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CancelProductionOrderHandler } from '../../application/commands/cancel-production-order/cancel-production-order.handler';
import { CancelProductionOrderCommand } from '../../application/commands/cancel-production-order/cancel-production-order.command';
import { IGetProductionOrderHandler } from '../../application/queries/get-production-order/get-production-order.handler.interface';
import { GetProductionOrderQuery } from '../../application/queries/get-production-order/get-production-order.query';
import { ProductionOrderResponseDto } from '../dtos/responses/production-order.response.dto';
import { toProductionOrderResponseDto } from './helpers/response.mapper';

@ApiTags('Production')
@Controller('production-orders')
export class CancelProductionOrderController {
    constructor(
        private readonly handler: CancelProductionOrderHandler,
        @Inject(IGetProductionOrderHandler)
        private readonly getHandler: IGetProductionOrderHandler,
    ) {}

    @Version('1')
    @Post(':id/cancel')
    @HttpCode(HttpStatus.OK)
    @ApiOperation({ summary: 'Cancel a DRAFT or CONFIRMED production order' })
    @ApiResponse({ status: 200, type: ProductionOrderResponseDto })
    async cancel(@Param('id') id: string): Promise<ProductionOrderResponseDto> {
        await this.handler.handle(new CancelProductionOrderCommand(id));
        const result = await this.getHandler.handle(new GetProductionOrderQuery(id));
        return toProductionOrderResponseDto(result);
    }
}
