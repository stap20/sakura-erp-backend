import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class TransactionResponseDto {
    @ApiProperty({ example: 'clxyz1234567890' })
    id: string;

    @ApiProperty({ example: 'clxyz0987654321' })
    itemId: string;

    @ApiProperty({ example: 'RESTOCK', enum: ['RESTOCK', 'DEDUCT'] })
    type: string;

    @ApiProperty({ example: 10.5 })
    quantity: number;

    @ApiPropertyOptional({ example: 'clxyz1122334455', nullable: true })
    vendorId: string | null;

    @ApiPropertyOptional({ example: 25.5, nullable: true })
    unitPrice: number | null;

    @ApiProperty({ example: 'clxyz9988776655' })
    performedBy: string;

    @ApiPropertyOptional({ example: 'Monthly restock', nullable: true })
    notes: string | null;

    @ApiProperty({ type: 'string', format: 'date-time' })
    createdAt: Date;

    constructor(
        id: string,
        itemId: string,
        type: string,
        quantity: number,
        vendorId: string | null,
        unitPrice: number | null,
        performedBy: string,
        notes: string | null,
        createdAt: Date,
    ) {
        this.id = id;
        this.itemId = itemId;
        this.type = type;
        this.quantity = quantity;
        this.vendorId = vendorId;
        this.unitPrice = unitPrice;
        this.performedBy = performedBy;
        this.notes = notes;
        this.createdAt = createdAt;
    }
}
