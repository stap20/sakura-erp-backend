import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { SalesOrderLineResponseDto } from './sales-order-line.response.dto';

export class SalesOrderResponseDto {
    @ApiProperty() id: string;
    @ApiProperty() customerName: string;
    @ApiPropertyOptional() customerPhone: string | null;
    @ApiPropertyOptional() customerContact: string | null;
    @ApiProperty() status: string;
    @ApiPropertyOptional() notes: string | null;
    @ApiPropertyOptional() shippedAt: Date | null;
    @ApiProperty({ type: [SalesOrderLineResponseDto] }) lines: SalesOrderLineResponseDto[];
    @ApiProperty() createdAt: Date;
    @ApiProperty() updatedAt: Date;
}
