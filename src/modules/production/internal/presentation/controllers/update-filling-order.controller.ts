import { Controller, Patch, Param, Body, Version, Inject, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { UpdateFillingOrderHandler } from '../../application/commands/update-filling-order/update-filling-order.handler';
import { UpdateFillingOrderCommand } from '../../application/commands/update-filling-order/update-filling-order.command';
import { UpdateFillingOrderRequestDto } from '../dtos/requests/update-filling-order.request.dto';
import { IGetFillingOrderHandler } from '../../application/queries/get-filling-order/get-filling-order.handler.interface';
import { GetFillingOrderQuery } from '../../application/queries/get-filling-order/get-filling-order.query';
import { FillingOrderResponseDto } from '../dtos/responses/filling-order.response.dto';
import { toFillingOrderResponseDto } from './helpers/response.mapper';

@ApiTags('Filling Orders')
@Controller('filling-orders')
export class UpdateFillingOrderController {
    constructor(
        @Inject(UpdateFillingOrderHandler)
        private readonly handler: UpdateFillingOrderHandler,
        @Inject(IGetFillingOrderHandler)
        private readonly getHandler: IGetFillingOrderHandler,
    ) {}

    @Version('1')
    @Patch(':id')
    @HttpCode(HttpStatus.OK)
    @ApiOperation({ summary: 'Update a DRAFT filling order' })
    @ApiResponse({ status: 200, type: FillingOrderResponseDto })
    async update(
        @Param('id') id: string,
        @Body() dto: UpdateFillingOrderRequestDto,
    ): Promise<FillingOrderResponseDto> {
        const command = new UpdateFillingOrderCommand(id, dto.notes);
        await this.handler.handle(command);
        const result = await this.getHandler.handle(new GetFillingOrderQuery(id));
        return toFillingOrderResponseDto(result);
    }
}
