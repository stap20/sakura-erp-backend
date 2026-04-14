import { Controller, Post, Param, Body, Version, Inject, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { AddFillingOrderLineHandler } from '../../application/commands/add-filling-order-line/add-filling-order-line.handler';
import { AddFillingOrderLineCommand } from '../../application/commands/add-filling-order-line/add-filling-order-line.command';
import { AddFillingOrderLineRequestDto } from '../dtos/requests/add-filling-order-line.request.dto';
import { IGetFillingOrderHandler } from '../../application/queries/get-filling-order/get-filling-order.handler.interface';
import { GetFillingOrderQuery } from '../../application/queries/get-filling-order/get-filling-order.query';
import { FillingOrderResponseDto } from '../dtos/responses/filling-order.response.dto';
import { toFillingOrderResponseDto } from './helpers/response.mapper';

@ApiTags('Filling Orders')
@Controller('filling-orders')
export class AddFillingOrderLineController {
    constructor(
        @Inject(AddFillingOrderLineHandler)
        private readonly handler: AddFillingOrderLineHandler,
        @Inject(IGetFillingOrderHandler)
        private readonly getHandler: IGetFillingOrderHandler,
    ) {}

    @Version('1')
    @Post(':id/lines')
    @HttpCode(HttpStatus.CREATED)
    @ApiOperation({ summary: 'Add a line to a DRAFT filling order' })
    @ApiResponse({ status: 201, type: FillingOrderResponseDto })
    async addLine(
        @Param('id') id: string,
        @Body() dto: AddFillingOrderLineRequestDto,
    ): Promise<FillingOrderResponseDto> {
        await this.handler.handle(new AddFillingOrderLineCommand(id, dto.variantItemId, dto.quantityUnits));
        const result = await this.getHandler.handle(new GetFillingOrderQuery(id));
        return toFillingOrderResponseDto(result);
    }
}
