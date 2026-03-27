import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class DiscountCodeResponseDto {
    @ApiProperty() id: string;
    @ApiProperty() code: string;
    @ApiProperty() type: string;
    @ApiProperty() value: number;
    @ApiPropertyOptional() maxUses: number | null;
    @ApiProperty() usedCount: number;
    @ApiPropertyOptional() expiresAt: Date | null;
    @ApiProperty() isActive: boolean;
    @ApiProperty() createdAt: Date;
    @ApiProperty() updatedAt: Date;
}
