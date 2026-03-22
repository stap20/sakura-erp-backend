import { Controller, Get, Version, Inject } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { IGetCostConfigHandler } from '../../application/queries/get-cost-config/get-cost-config.handler.interface';
import { GetCostConfigQuery } from '../../application/queries/get-cost-config/get-cost-config.query';
import { CostConfigResponseDto } from '../dtos/responses/cost-config.response.dto';

@ApiTags('Settings')
@Controller('settings/cost-config')
export class GetCostConfigController {
    constructor(
        @Inject(IGetCostConfigHandler)
        private readonly getCostConfigHandler: IGetCostConfigHandler,
    ) {}

    @Version('1')
    @Get()
    @ApiOperation({ summary: 'Get the cost configuration' })
    @ApiResponse({ status: 200, type: CostConfigResponseDto })
    @ApiResponse({ status: 404, description: 'Cost config not found' })
    async get(): Promise<CostConfigResponseDto> {
        const result = await this.getCostConfigHandler.handle(new GetCostConfigQuery());
        return new CostConfigResponseDto(
            result.monthlySalary,
            result.monthlyWorkingHours,
            result.depreciationPerMinute,
            result.defaultMarginPercent,
            result.updatedAt,
        );
    }
}
