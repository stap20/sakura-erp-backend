import { IsString, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ApplyDiscountRequestDto {
    @ApiProperty({ example: 'SUMMER20' })
    @IsString()
    @MinLength(2)
    code: string;
}
