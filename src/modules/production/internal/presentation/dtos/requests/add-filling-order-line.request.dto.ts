import { IsNotEmpty, IsNumber, IsString, Min } from 'class-validator';

export class AddFillingOrderLineRequestDto {
    @IsString()
    @IsNotEmpty()
    variantItemId: string;

    @IsNumber()
    @Min(1)
    quantityUnits: number;
}
