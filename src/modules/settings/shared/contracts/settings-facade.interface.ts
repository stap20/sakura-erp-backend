export interface CostConfigFacadeDto {
    monthlySalary: number;
    monthlyWorkingHours: number;
    depreciationPerMinute: number;
    updatedAt: Date;
}

export interface ISettingsFacade {
    getCostConfig(): Promise<CostConfigFacadeDto | null>;
}

export const ISettingsFacade = Symbol('ISettingsFacade');
