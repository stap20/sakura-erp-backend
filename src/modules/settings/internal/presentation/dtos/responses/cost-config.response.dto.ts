import { ApiProperty } from '@nestjs/swagger';

export class CostConfigResponseDto {
    @ApiProperty()
    monthlySalary: number;

    @ApiProperty()
    monthlyWorkingHours: number;

    @ApiProperty()
    depreciationPerMinute: number;

    @ApiProperty()
    updatedAt: Date;

    constructor(
        monthlySalary: number,
        monthlyWorkingHours: number,
        depreciationPerMinute: number,
        updatedAt: Date,
    ) {
        this.monthlySalary = monthlySalary;
        this.monthlyWorkingHours = monthlyWorkingHours;
        this.depreciationPerMinute = depreciationPerMinute;
        this.updatedAt = updatedAt;
    }
}
