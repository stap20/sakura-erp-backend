import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class ProductResponseDto {
    @ApiProperty()
    id: string;

    @ApiProperty()
    name: string;

    @ApiPropertyOptional({ nullable: true })
    description: string | null;

    @ApiPropertyOptional({ nullable: true, description: 'Reference batch size in grams for duration calculation' })
    referenceBatchGm: number | null;

    @ApiPropertyOptional({ nullable: true, description: 'Duration in minutes to produce referenceBatchGm' })
    referenceDurationMin: number | null;

    @ApiProperty()
    createdAt: Date;

    @ApiProperty()
    updatedAt: Date;

    constructor(
        id: string,
        name: string,
        description: string | null,
        referenceBatchGm?: number | null,
        referenceDurationMin?: number | null,
        createdAt?: Date,
        updatedAt?: Date,
    ) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.referenceBatchGm = referenceBatchGm ?? null;
        this.referenceDurationMin = referenceDurationMin ?? null;
        if (createdAt) this.createdAt = createdAt;
        if (updatedAt) this.updatedAt = updatedAt;
    }
}
