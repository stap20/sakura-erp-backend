import { IsString, IsNotEmpty, IsNumber, IsPositive } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class AddLineRequestDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    itemId: string;

    @ApiProperty()
    @IsNumber()
    @IsPositive()
    quantity: number;

    @ApiProperty()
    @IsNumber()
    @IsPositive()
    unitPrice: number;
}
