import { IsString, IsNotEmpty, IsOptional } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateVendorRequestDto {
    @ApiProperty({
        description: 'Vendor business name',
        example: 'Chemical Supplies Co.',
        type: 'string',
        minLength: 2,
        maxLength: 100,
    })
    @IsString()
    @IsNotEmpty()
    name: string;

    @ApiProperty({
        description: 'Vendor business address',
        example: '123 Industrial Ave, Cairo, Egypt',
        type: 'string',
    })
    @IsString()
    @IsNotEmpty()
    address: string;

    @ApiProperty({
        description: 'Primary contact phone number',
        example: '+201121888835',
        type: 'string',
    })
    @IsString()
    @IsNotEmpty()
    phoneNumber: string;

    @ApiPropertyOptional({
        description: 'Optional external contact link (website, social media, etc.)',
        example: 'https://www.chemicalsupplies.com',
        type: 'string',
    })
    @IsOptional()
    @IsString()
    contactLink?: string;
}
