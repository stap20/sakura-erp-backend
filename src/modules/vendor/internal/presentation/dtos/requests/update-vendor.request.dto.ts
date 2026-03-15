import { IsString, IsOptional } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateVendorRequestDto {
    @ApiPropertyOptional({
        description: 'Vendor business name',
        example: 'Chemical Supplies Co.',
        type: 'string',
        minLength: 2,
        maxLength: 100,
    })
    @IsOptional()
    @IsString()
    name?: string;

    @ApiPropertyOptional({
        description: 'Vendor business address',
        example: '456 Commerce Blvd, Alexandria, Egypt',
        type: 'string',
    })
    @IsOptional()
    @IsString()
    address?: string;

    @ApiPropertyOptional({
        description: 'Primary contact phone number',
        example: '+201121888835',
        type: 'string',
    })
    @IsOptional()
    @IsString()
    phoneNumber?: string;

    @ApiPropertyOptional({
        description: 'Optional external contact link (website, social media, etc.)',
        example: 'https://www.chemicalsupplies.com',
        type: 'string',
    })
    @IsOptional()
    @IsString()
    contactLink?: string;
}
