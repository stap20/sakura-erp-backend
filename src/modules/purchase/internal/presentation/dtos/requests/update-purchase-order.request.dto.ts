import { IsString, IsOptional } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdatePurchaseOrderRequestDto {
    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    notes?: string | null;
}
