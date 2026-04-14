import { IsNumber, Min } from 'class-validator';

export class UpdateFillingOrderLineRequestDto {
    @IsNumber()
    @Min(1)
    quantityUnits: number;
}
