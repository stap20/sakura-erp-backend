import { Controller, Post, Body, Version, Inject, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CreateFillingOrderHandler } from '../../application/commands/create-filling-order/create-filling-order.handler';
import { CreateFillingOrderCommand, CreateFillingOrderLineInput } from '../../application/commands/create-filling-order/create-filling-order.command';
import { CreateFillingOrderRequestDto } from '../dtos/requests/create-filling-order.request.dto';
import { IGetFillingOrderHandler } from '../../application/queries/get-filling-order/get-filling-order.handler.interface';
import { GetFillingOrderQuery } from '../../application/queries/get-filling-order/get-filling-order.query';
import { FillingOrderResponseDto } from '../dtos/responses/filling-order.response.dto';
import { toFillingOrderResponseDto } from './helpers/response.mapper';

@ApiTags('Filling Orders')
@Controller('filling-orders')
export class CreateFillingOrderController {
    constructor(
        @Inject(CreateFillingOrderHandler)
        private readonly handler: CreateFillingOrderHandler,
        @Inject(IGetFillingOrderHandler)
        private readonly getHandler: IGetFillingOrderHandler,
    ) {}

    @Version('1')
    @Post()
    @HttpCode(HttpStatus.CREATED)
    @ApiOperation({ summary: 'Create a new DRAFT filling order' })
    @ApiResponse({ status: 201, type: FillingOrderResponseDto })
    async create(@Body() dto: CreateFillingOrderRequestDto): Promise<FillingOrderResponseDto> {
        const command = new CreateFillingOrderCommand(
            dto.productId,
            dto.lines.map((l) => new CreateFillingOrderLineInput(
                l.variantItemId,
                l.quantityUnits,
                l.unitWeightGm,
            )),
            dto.notes,
        );
        const id = await this.handler.handle(command);
        const result = await this.getHandler.handle(new GetFillingOrderQuery(id));
        return toFillingOrderResponseDto(result);
    }
}
