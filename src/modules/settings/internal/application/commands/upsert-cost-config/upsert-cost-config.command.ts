export class UpsertCostConfigCommand {
    constructor(
        public readonly monthlySalary: number,
        public readonly monthlyWorkingHours: number,
        public readonly depreciationPerMinute: number,
    ) {}
}
