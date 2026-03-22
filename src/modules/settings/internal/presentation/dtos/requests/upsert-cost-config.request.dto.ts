import { IsNumber, Min } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpsertCostConfigRequestDto {
    @ApiProperty({ example: 3000, description: 'Monthly salary in currency units' })
    @IsNumber()
    @Min(0)
    monthlySalary: number;

    @ApiProperty({ example: 160, description: 'Monthly working hours' })
    @IsNumber()
    @Min(1)
    monthlyWorkingHours: number;

    @ApiProperty({ example: 0.05, description: 'Equipment depreciation cost per minute' })
    @IsNumber()
    @Min(0)
    depreciationPerMinute: number;
}
