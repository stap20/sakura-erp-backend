import { IsString, IsOptional } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateCategoryRequestDto {
    @ApiPropertyOptional({ example: 'Emulsifiers & Waxes', minLength: 2, maxLength: 100 })
    @IsOptional()
    @IsString()
    name?: string;

    @ApiPropertyOptional({ example: 'Updated description', nullable: true })
    @IsOptional()
    @IsString()
    description?: string | null;
}
