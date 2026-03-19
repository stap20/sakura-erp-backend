import { IsString, IsOptional, MinLength } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateProductRequestDto {
    @ApiPropertyOptional({ example: 'Body Butter Pro', minLength: 2 })
    @IsOptional()
    @IsString()
    @MinLength(2)
    name?: string;

    @ApiPropertyOptional({ example: 'Updated description', nullable: true })
    @IsOptional()
    @IsString()
    description?: string | null;
}
