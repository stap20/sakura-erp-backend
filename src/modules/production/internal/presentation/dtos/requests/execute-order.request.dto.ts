import { IsOptional, IsString } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class ExecuteOrderRequestDto {
    @ApiPropertyOptional({ default: 'SYSTEM' })
    @IsOptional()
    @IsString()
    performedBy?: string;
}
