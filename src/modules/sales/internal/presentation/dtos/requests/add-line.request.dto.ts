import { IsString, IsPositive } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class AddLineRequestDto {
    @ApiProperty({ example: 'item-uuid' })
    @IsString()
    itemId: string;

    @ApiProperty({ example: 10 })
    @IsPositive()
    quantity: number;

    @ApiProperty({ example: 150.00 })
    @IsPositive()
    unitPrice: number;
}
