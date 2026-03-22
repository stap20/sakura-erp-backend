import { Injectable, Inject } from '@nestjs/common';
import { CostConfigEntity } from '../../domain/entities/cost-config.entity';
import { ISettingsPrismaClient } from '../database/settings.prisma.client.interface';

export interface ICostConfigRepository {
    get(): Promise<CostConfigEntity | null>;
    save(config: CostConfigEntity): Promise<void>;
}

export const ICostConfigRepository = Symbol('ICostConfigRepository');

@Injectable()
export class CostConfigRepository implements ICostConfigRepository {
    constructor(
        @Inject(ISettingsPrismaClient)
        private readonly prisma: ISettingsPrismaClient,
    ) {}

    async get(): Promise<CostConfigEntity | null> {
        const record = await this.prisma.costConfig.findUnique({ where: { id: 'singleton' } });
        if (!record) return null;
        return new CostConfigEntity(record);
    }

    async save(config: CostConfigEntity): Promise<void> {
        await this.prisma.costConfig.upsert({
            where: { id: 'singleton' },
            update: {
                monthlySalary: config.monthlySalary,
                monthlyWorkingHours: config.monthlyWorkingHours,
                depreciationPerMinute: config.depreciationPerMinute,
                defaultMarginPercent: config.defaultMarginPercent,
            },
            create: {
                id: 'singleton',
                monthlySalary: config.monthlySalary,
                monthlyWorkingHours: config.monthlyWorkingHours,
                depreciationPerMinute: config.depreciationPerMinute,
                defaultMarginPercent: config.defaultMarginPercent,
            },
        });
    }
}
