import { IsOptional, IsString } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateSalesOrderRequestDto {
    @ApiPropertyOptional({ example: 'Updated delivery notes' })
    @IsOptional()
    @IsString()
    notes?: string;
}
