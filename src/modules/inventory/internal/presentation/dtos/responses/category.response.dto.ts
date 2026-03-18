import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CategoryResponseDto {
    @ApiProperty({ example: 'clxyz1234567890' })
    id: string;

    @ApiProperty({ example: 'Emulsifiers' })
    name: string;

    @ApiPropertyOptional({ example: 'Waxes and emulsifying agents', nullable: true })
    description: string | null;

    @ApiProperty({ example: 'ACTIVE', enum: ['ACTIVE', 'ARCHIVED'] })
    status: string;

    @ApiProperty({ type: 'string', format: 'date-time' })
    createdAt: Date;

    @ApiProperty({ type: 'string', format: 'date-time' })
    updatedAt: Date;

    constructor(
        id: string,
        name: string,
        description: string | null,
        status: string,
        createdAt?: Date,
        updatedAt?: Date,
    ) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.status = status;
        if (createdAt) this.createdAt = createdAt;
        if (updatedAt) this.updatedAt = updatedAt;
    }
}
