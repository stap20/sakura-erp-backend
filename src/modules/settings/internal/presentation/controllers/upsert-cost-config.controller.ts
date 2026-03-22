import { Controller, Put, Body, Version, Inject, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { UpsertCostConfigHandler } from '../../application/commands/upsert-cost-config/upsert-cost-config.handler';
import { UpsertCostConfigCommand } from '../../application/commands/upsert-cost-config/upsert-cost-config.command';
import { UpsertCostConfigRequestDto } from '../dtos/requests/upsert-cost-config.request.dto';

@ApiTags('Settings')
@Controller('settings/cost-config')
export class UpsertCostConfigController {
    constructor(
        @Inject(UpsertCostConfigHandler)
        private readonly upsertCostConfigHandler: UpsertCostConfigHandler,
    ) {}

    @Version('1')
    @Put()
    @HttpCode(HttpStatus.OK)
    @ApiOperation({ summary: 'Upsert the cost configuration (singleton)' })
    @ApiResponse({ status: 200, description: 'Cost config saved' })
    async upsert(@Body() dto: UpsertCostConfigRequestDto): Promise<void> {
        await this.upsertCostConfigHandler.handle(
            new UpsertCostConfigCommand(dto.monthlySalary, dto.monthlyWorkingHours, dto.depreciationPerMinute, dto.defaultMarginPercent),
        );
    }
}
