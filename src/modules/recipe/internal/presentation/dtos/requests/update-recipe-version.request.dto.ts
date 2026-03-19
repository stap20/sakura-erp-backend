import { IsOptional, IsString } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateRecipeVersionRequestDto {
    @ApiPropertyOptional({ example: 'Reformulated with higher glycerin content', nullable: true })
    @IsOptional()
    @IsString()
    notes?: string;
}
