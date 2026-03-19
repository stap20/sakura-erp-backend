import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { PurchaseOrderLineResponseDto } from './purchase-order-line.response.dto';

export class PurchaseOrderResponseDto {
    @ApiProperty()
    id: string;

    @ApiProperty()
    vendorId: string;

    @ApiProperty()
    vendorName: string;

    @ApiPropertyOptional()
    vendorPhone: string | null;

    @ApiPropertyOptional()
    vendorContact: string | null;

    @ApiProperty()
    status: string;

    @ApiPropertyOptional()
    notes: string | null;

    @ApiPropertyOptional()
    expectedDeliveryDate: Date | null;

    @ApiPropertyOptional()
    receivedAt: Date | null;

    @ApiProperty({ type: [PurchaseOrderLineResponseDto] })
    lines: PurchaseOrderLineResponseDto[];

    @ApiProperty()
    createdAt: Date;

    @ApiProperty()
    updatedAt: Date;
}
