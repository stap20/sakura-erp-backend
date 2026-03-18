import { IsString, IsNotEmpty, IsOptional } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateCategoryRequestDto {
    @ApiProperty({ example: 'Emulsifiers', minLength: 2, maxLength: 100 })
    @IsString()
    @IsNotEmpty()
    name: string;

    @ApiPropertyOptional({ example: 'Waxes and emulsifying agents used in cream bases' })
    @IsOptional()
    @IsString()
    description?: string | null;
}
