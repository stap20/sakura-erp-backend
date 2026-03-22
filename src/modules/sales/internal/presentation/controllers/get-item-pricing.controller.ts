import { Controller, Get, Param, Version, Inject } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { IGetItemPricingHandler } from '../../application/queries/get-item-pricing/get-item-pricing.handler.interface';
import { GetItemPricingQuery } from '../../application/queries/get-item-pricing/get-item-pricing.query';
import { ItemPricingResponseDto } from '../dtos/responses/item-pricing.response.dto';
import { toItemPricingResponseDto } from './helpers/response.mapper';

@ApiTags('Sales')
@Controller('sales')
export class GetItemPricingController {
    constructor(
        @Inject(IGetItemPricingHandler)
        private readonly handler: IGetItemPricingHandler,
    ) {}

    @Version('1')
    @Get('pricing/item/:itemId')
    @ApiOperation({ summary: 'Get COGS breakdown and suggested price for a FINAL_PRODUCT item' })
    @ApiResponse({ status: 200, type: ItemPricingResponseDto })
    async getPricing(@Param('itemId') itemId: string): Promise<ItemPricingResponseDto> {
        const result = await this.handler.handle(new GetItemPricingQuery(itemId));
        return toItemPricingResponseDto(result);
    }
}
