import { IsString, IsOptional, IsNumber } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class GetAllVendorsRequestDto {
    @ApiProperty({
        description: 'Number of records to skip for pagination',
        example: 0,
        type: 'number',
        minimum: 0,
        default: 0,
    })
    @IsNumber()
    @Type(() => Number)
    offset: number;

    @ApiProperty({
        description: 'Maximum number of records to return per page',
        example: 20,
        type: 'number',
        minimum: 1,
        maximum: 100,
        default: 10,
    })
    @IsNumber()
    @Type(() => Number)
    limit: number;

    @ApiPropertyOptional({
        description: 'Search vendors by name (partial match)',
        example: 'chem',
        type: 'string',
    })
    @IsOptional()
    @IsString()
    name?: string;

    @ApiPropertyOptional({
        description: 'Filter vendors by status',
        example: 'ACTIVE',
        enum: ['ACTIVE', 'INACTIVE'],
        type: 'string',
    })
    @IsOptional()
    @IsString()
    status?: string;
}
