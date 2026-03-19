import { Controller, Post, Body, Version, Inject, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CreateProductionOrderHandler } from '../../application/commands/create-production-order/create-production-order.handler';
import { CreateProductionOrderCommand } from '../../application/commands/create-production-order/create-production-order.command';
import { CreateProductionOrderRequestDto } from '../dtos/requests/create-production-order.request.dto';
import { IGetProductionOrderHandler } from '../../application/queries/get-production-order/get-production-order.handler.interface';
import { GetProductionOrderQuery } from '../../application/queries/get-production-order/get-production-order.query';
import { ProductionOrderResponseDto } from '../dtos/responses/production-order.response.dto';
import { toProductionOrderResponseDto } from './helpers/response.mapper';

@ApiTags('Production')
@Controller('production-orders')
export class CreateProductionOrderController {
    constructor(
        private readonly handler: CreateProductionOrderHandler,
        @Inject(IGetProductionOrderHandler)
        private readonly getHandler: IGetProductionOrderHandler,
    ) {}

    @Version('1')
    @Post()
    @HttpCode(HttpStatus.CREATED)
    @ApiOperation({ summary: 'Create a new DRAFT production order' })
    @ApiResponse({ status: 201, type: ProductionOrderResponseDto })
    async create(
        @Body() dto: CreateProductionOrderRequestDto,
    ): Promise<ProductionOrderResponseDto> {
        const result = await this.handler.handle(
            new CreateProductionOrderCommand(
                dto.productId,
                dto.quantityUnits,
                dto.wastePercent,
                dto.addonItemIds ?? {},
                'system',
                dto.notes,
            ),
        );
        const order = await this.getHandler.handle(new GetProductionOrderQuery(result.id));
        return toProductionOrderResponseDto(order);
    }
}
