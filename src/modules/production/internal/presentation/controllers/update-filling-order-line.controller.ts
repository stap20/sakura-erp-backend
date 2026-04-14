import { Controller, Patch, Param, Body, Version, Inject, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { UpdateFillingOrderLineHandler } from '../../application/commands/update-filling-order-line/update-filling-order-line.handler';
import { UpdateFillingOrderLineCommand } from '../../application/commands/update-filling-order-line/update-filling-order-line.command';
import { UpdateFillingOrderLineRequestDto } from '../dtos/requests/update-filling-order-line.request.dto';
import { IGetFillingOrderHandler } from '../../application/queries/get-filling-order/get-filling-order.handler.interface';
import { GetFillingOrderQuery } from '../../application/queries/get-filling-order/get-filling-order.query';
import { FillingOrderResponseDto } from '../dtos/responses/filling-order.response.dto';
import { toFillingOrderResponseDto } from './helpers/response.mapper';

@ApiTags('Filling Orders')
@Controller('filling-orders')
export class UpdateFillingOrderLineController {
    constructor(
        @Inject(UpdateFillingOrderLineHandler)
        private readonly handler: UpdateFillingOrderLineHandler,
        @Inject(IGetFillingOrderHandler)
        private readonly getHandler: IGetFillingOrderHandler,
    ) {}

    @Version('1')
    @Patch(':id/lines/:lineId')
    @HttpCode(HttpStatus.OK)
    @ApiOperation({ summary: 'Update quantityUnits on a line of a DRAFT filling order' })
    @ApiResponse({ status: 200, type: FillingOrderResponseDto })
    async updateLine(
        @Param('id') id: string,
        @Param('lineId') lineId: string,
        @Body() dto: UpdateFillingOrderLineRequestDto,
    ): Promise<FillingOrderResponseDto> {
        await this.handler.handle(new UpdateFillingOrderLineCommand(id, lineId, dto.quantityUnits));
        const result = await this.getHandler.handle(new GetFillingOrderQuery(id));
        return toFillingOrderResponseDto(result);
    }
}
