import { ApiProperty } from '@nestjs/swagger';

export class BulkStockResponseDto {
    @ApiProperty() productId: string;
    @ApiProperty() availableGm: number;
    @ApiProperty() updatedAt: Date;
}
