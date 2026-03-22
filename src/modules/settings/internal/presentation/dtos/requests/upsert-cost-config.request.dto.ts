import { IsNumber, Min, IsOptional } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

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

    @ApiPropertyOptional({ example: 30, description: 'Default margin percentage for pricing (0 = no margin)', default: 0 })
    @IsOptional()
    @IsNumber()
    @Min(0)
    defaultMarginPercent?: number;
}
