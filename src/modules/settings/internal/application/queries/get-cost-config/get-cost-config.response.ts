export class GetCostConfigResponse {
    constructor(
        public readonly monthlySalary: number,
        public readonly monthlyWorkingHours: number,
        public readonly depreciationPerMinute: number,
        public readonly updatedAt: Date,
    ) {}
}
