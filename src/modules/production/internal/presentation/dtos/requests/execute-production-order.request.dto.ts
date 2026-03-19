import { IsString, IsNotEmpty, IsOptional } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class ExecuteProductionOrderRequestDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    performedBy: string;

    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    notes?: string;
}
