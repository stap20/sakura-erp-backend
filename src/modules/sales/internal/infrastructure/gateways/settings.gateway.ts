import { Injectable, Inject } from '@nestjs/common';
import { ISettingsFacade, CostConfigFacadeDto } from 'src/modules/settings/shared/contracts/settings-facade.interface';

@Injectable()
export class SettingsGateway {
    constructor(
        @Inject(ISettingsFacade)
        private readonly settingsFacade: ISettingsFacade,
    ) {}

    async getCostConfig(): Promise<CostConfigFacadeDto | null> {
        return this.settingsFacade.getCostConfig();
    }
}
