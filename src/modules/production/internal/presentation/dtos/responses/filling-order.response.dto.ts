import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { FillingOrderLineResponseDto } from './filling-order-line.response.dto';

export class FillingOrderResponseDto {
    @ApiProperty()
    id: string;

    @ApiProperty()
    productId: string;

    @ApiProperty()
    bulkUsedGm: number;

    @ApiPropertyOptional()
    notes: string | null;

    @ApiProperty()
    status: string;

    @ApiPropertyOptional()
    performedBy: string | null;

    @ApiPropertyOptional()
    executedAt: Date | null;

    @ApiProperty({ type: [FillingOrderLineResponseDto] })
    lines: FillingOrderLineResponseDto[];

    @ApiProperty()
    createdAt: Date;

    @ApiProperty()
    updatedAt: Date;
}
