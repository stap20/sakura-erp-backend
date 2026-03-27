import { Controller, Get, Version, Inject } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import {
    IGetAllDiscountCodesHandler,
    GetAllDiscountCodesHandler,
} from '../../infrastructure/query-handlers/get-all-discount-codes.handler';
import { DiscountCodeResponseDto } from '../dtos/responses/discount-code.response.dto';

@ApiTags('Promotions')
@Controller('promotions/discount-codes')
export class GetAllDiscountCodesController {
    constructor(
        @Inject(IGetAllDiscountCodesHandler)
        private readonly handler: IGetAllDiscountCodesHandler,
    ) {}

    @Version('1')
    @Get()
    @ApiOperation({ summary: 'Get all discount codes' })
    @ApiResponse({ status: 200, type: [DiscountCodeResponseDto] })
    async getAll(): Promise<DiscountCodeResponseDto[]> {
        const results = await this.handler.handle();
        return results as DiscountCodeResponseDto[];
    }
}
