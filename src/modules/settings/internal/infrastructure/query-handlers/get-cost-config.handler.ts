import { Injectable, Inject } from '@nestjs/common';
import { IGetCostConfigHandler } from '../../application/queries/get-cost-config/get-cost-config.handler.interface';
import { GetCostConfigQuery } from '../../application/queries/get-cost-config/get-cost-config.query';
import { GetCostConfigResponse } from '../../application/queries/get-cost-config/get-cost-config.response';
import { ICostConfigRepository } from '../repositories/cost-config.repository';
import { NotFoundError } from 'src/shared/application/errors/notfound.error';

@Injectable()
export class GetCostConfigHandler implements IGetCostConfigHandler {
    constructor(
        @Inject(ICostConfigRepository)
        private readonly costConfigRepository: ICostConfigRepository,
    ) {}

    async handle(_query: GetCostConfigQuery): Promise<GetCostConfigResponse> {
        const config = await this.costConfigRepository.get();
        if (!config) throw new NotFoundError('CostConfig not found');

        return new GetCostConfigResponse(
            config.monthlySalary,
            config.monthlyWorkingHours,
            config.depreciationPerMinute,
            config.updatedAt,
        );
    }
}
