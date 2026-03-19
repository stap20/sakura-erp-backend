import { Controller, Get, Query, Version, Inject } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { IGetAllFillingOrdersHandler } from '../../application/queries/get-all-filling-orders/get-all-filling-orders.handler.interface';
import { GetAllFillingOrdersQuery } from '../../application/queries/get-all-filling-orders/get-all-filling-orders.query';
import { GetAllFillingOrdersQueryDto } from '../dtos/requests/get-all-filling-orders.query.dto';
import { FillingOrderResponseDto } from '../dtos/responses/filling-order.response.dto';
import { toFillingOrderResponseDto } from './helpers/response.mapper';

@ApiTags('Filling Orders')
@Controller('filling-orders')
export class GetAllFillingOrdersController {
    constructor(
        @Inject(IGetAllFillingOrdersHandler)
        private readonly handler: IGetAllFillingOrdersHandler,
    ) {}

    @Version('1')
    @Get()
    @ApiOperation({ summary: 'Get all filling orders with optional filters' })
    @ApiResponse({ status: 200, type: [FillingOrderResponseDto] })
    async getAll(@Query() dto: GetAllFillingOrdersQueryDto): Promise<FillingOrderResponseDto[]> {
        const query = new GetAllFillingOrdersQuery(dto.productId, dto.status, dto.offset ?? 0, dto.limit ?? 20);
        const results = await this.handler.handle(query);
        return results.map(toFillingOrderResponseDto);
    }
}
