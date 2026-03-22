export class CostConfigEntity {
    id: string;
    monthlySalary: number;
    monthlyWorkingHours: number;
    depreciationPerMinute: number;
    defaultMarginPercent: number;
    updatedAt: Date;

    constructor(data: Partial<CostConfigEntity>) {
        Object.assign(this, data);
    }
}
