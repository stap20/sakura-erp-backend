import { Injectable, Inject } from '@nestjs/common';
import { ISettingsFacade, CostConfigFacadeDto } from '../../../shared/contracts/settings-facade.interface';
import { ICostConfigRepository } from '../repositories/cost-config.repository';

@Injectable()
export class SettingsFacade implements ISettingsFacade {
    constructor(
        @Inject(ICostConfigRepository)
        private readonly costConfigRepository: ICostConfigRepository,
    ) {}

    async getCostConfig(): Promise<CostConfigFacadeDto | null> {
        const config = await this.costConfigRepository.get();
        if (!config) return null;

        return {
            monthlySalary: config.monthlySalary,
            monthlyWorkingHours: config.monthlyWorkingHours,
            depreciationPerMinute: config.depreciationPerMinute,
            defaultMarginPercent: config.defaultMarginPercent,
            updatedAt: config.updatedAt,
        };
    }
}
