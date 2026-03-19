import { IsOptional, IsString } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateProductionOrderNotesRequestDto {
    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    notes?: string | null;
}
