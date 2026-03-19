import { Controller, Get, Param, Version, Inject } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { IGetFillingOrderHandler } from '../../application/queries/get-filling-order/get-filling-order.handler.interface';
import { GetFillingOrderQuery } from '../../application/queries/get-filling-order/get-filling-order.query';
import { FillingOrderResponseDto } from '../dtos/responses/filling-order.response.dto';
import { toFillingOrderResponseDto } from './helpers/response.mapper';

@ApiTags('Filling Orders')
@Controller('filling-orders')
export class GetFillingOrderByIdController {
    constructor(
        @Inject(IGetFillingOrderHandler)
        private readonly handler: IGetFillingOrderHandler,
    ) {}

    @Version('1')
    @Get(':id')
    @ApiOperation({ summary: 'Get filling order by ID' })
    @ApiResponse({ status: 200, type: FillingOrderResponseDto })
    async getById(@Param('id') id: string): Promise<FillingOrderResponseDto> {
        const result = await this.handler.handle(new GetFillingOrderQuery(id));
        return toFillingOrderResponseDto(result);
    }
}
