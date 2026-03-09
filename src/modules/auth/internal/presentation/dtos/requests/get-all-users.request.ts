import { IsString, IsOptional, IsNumber } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger"
import { Type } from 'class-transformer';

export class GetAllUsersRequest {
    @ApiProperty({
        description: 'Number of records to skip for pagination',
        example: 0,
        type: 'number',
        minimum: 0,
        default: 0
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
        default: 1
    })
    @IsNumber()
    @Type(() => Number)
    limit: number

    @ApiPropertyOptional({
        description: 'Search users by content in name or email',
        example: 'turbo',
        type: 'string',
    })
    @IsOptional()
    @IsString()
    content?: string

    @ApiPropertyOptional({
        description: 'Search user by role',
        example: 'USER',
        type: 'string',
    })
    @IsOptional()
    @IsString()
    role?: string

}