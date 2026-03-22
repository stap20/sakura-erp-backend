import { Injectable, Inject } from '@nestjs/common';
import { CommandHandlerBase } from 'src/shared/application/command.handler.base';
import { ICostConfigRepository } from '../../../infrastructure/repositories/cost-config.repository';
import { CostConfigEntity } from '../../../domain/entities/cost-config.entity';
import { UpsertCostConfigCommand } from './upsert-cost-config.command';

@Injectable()
export class UpsertCostConfigHandler extends CommandHandlerBase<UpsertCostConfigCommand, void> {
    constructor(
        @Inject(ICostConfigRepository)
        private readonly costConfigRepository: ICostConfigRepository,
    ) {
        super();
    }

    async handle(command: UpsertCostConfigCommand): Promise<void> {
        const config = new CostConfigEntity({
            id: 'singleton',
            monthlySalary: command.monthlySalary,
            monthlyWorkingHours: command.monthlyWorkingHours,
            depreciationPerMinute: command.depreciationPerMinute,
            defaultMarginPercent: command.defaultMarginPercent,
        });

        await this.costConfigRepository.save(config);
        this.logger.info('CostConfig upserted');
    }
}
