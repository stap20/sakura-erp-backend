import { ApiProperty } from '@nestjs/swagger';

export class SalesOrderLineResponseDto {
    @ApiProperty() id: string;
    @ApiProperty() itemId: string;
    @ApiProperty() itemName: string;
    @ApiProperty() measureUnit: string;
    @ApiProperty() quantity: number;
    @ApiProperty() unitPrice: number;
}
