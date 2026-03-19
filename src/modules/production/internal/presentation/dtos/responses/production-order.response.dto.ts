import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class ProductionOrderResponseDto {
    @ApiProperty()
    id: string;

    @ApiProperty()
    productId: string;

    @ApiProperty()
    batchWeightGm: number;

    @ApiProperty()
    wastePercent: number;

    @ApiPropertyOptional()
    notes: string | null;

    @ApiProperty()
    status: string;

    @ApiPropertyOptional()
    performedBy: string | null;

    @ApiPropertyOptional()
    executedAt: Date | null;

    @ApiProperty()
    createdAt: Date;

    @ApiProperty()
    updatedAt: Date;
}
