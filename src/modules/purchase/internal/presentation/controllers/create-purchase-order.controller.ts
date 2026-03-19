import { Controller, Post, Body, Version, Inject, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CreatePurchaseOrderHandler } from '../../application/commands/create-purchase-order/create-purchase-order.handler';
import { CreatePurchaseOrderCommand } from '../../application/commands/create-purchase-order/create-purchase-order.command';
import { CreatePurchaseOrderRequestDto } from '../dtos/requests/create-purchase-order.request.dto';
import { IGetPurchaseOrderHandler } from '../../application/queries/get-purchase-order/get-purchase-order.handler.interface';
import { GetPurchaseOrderQuery } from '../../application/queries/get-purchase-order/get-purchase-order.query';
import { PurchaseOrderResponseDto } from '../dtos/responses/purchase-order.response.dto';
import { toPurchaseOrderResponseDto } from './helpers/response.mapper';

@ApiTags('Purchases')
@Controller('purchases')
export class CreatePurchaseOrderController {
    constructor(
        @Inject(CreatePurchaseOrderHandler)
        private readonly handler: CreatePurchaseOrderHandler,
        @Inject(IGetPurchaseOrderHandler)
        private readonly getHandler: IGetPurchaseOrderHandler,
    ) {}

    @Version('1')
    @Post()
    @HttpCode(HttpStatus.CREATED)
    @ApiOperation({ summary: 'Create a new DRAFT purchase order' })
    @ApiResponse({ status: 201, type: PurchaseOrderResponseDto })
    async create(@Body() dto: CreatePurchaseOrderRequestDto): Promise<PurchaseOrderResponseDto> {
        const command = new CreatePurchaseOrderCommand(
            dto.vendorId,
            dto.vendorName,
            dto.vendorPhone,
            dto.vendorContact,
            dto.notes,
            dto.expectedDeliveryDate ? new Date(dto.expectedDeliveryDate) : null,
        );
        const id = await this.handler.handle(command);
        const result = await this.getHandler.handle(new GetPurchaseOrderQuery(id));
        return toPurchaseOrderResponseDto(result);
    }
}
