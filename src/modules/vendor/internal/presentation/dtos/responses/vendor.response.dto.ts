import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class VendorResponseDto {
    @ApiProperty({
        description: 'Unique vendor identifier',
        example: 'clxyz1234567890',
        type: 'string',
    })
    id: string;

    @ApiProperty({
        description: 'Vendor business name',
        example: 'Chemical Supplies Co.',
        type: 'string',
    })
    name: string;

    @ApiProperty({
        description: 'Vendor business address',
        example: '123 Industrial Ave, Cairo, Egypt',
        type: 'string',
    })
    address: string;

    @ApiProperty({
        description: 'Primary contact phone number',
        example: '+201121888835',
        type: 'string',
    })
    phoneNumber: string;

    @ApiPropertyOptional({
        description: 'Optional external contact link',
        example: 'https://www.chemicalsupplies.com',
        type: 'string',
        nullable: true,
    })
    contactLink: string | null;

    @ApiProperty({
        description: 'Vendor status',
        example: 'ACTIVE',
        enum: ['ACTIVE', 'INACTIVE'],
        type: 'string',
    })
    status: string;

    @ApiProperty({
        description: 'Record creation timestamp',
        type: 'string',
        format: 'date-time',
    })
    createdAt: Date;

    @ApiProperty({
        description: 'Last update timestamp',
        type: 'string',
        format: 'date-time',
    })
    updatedAt: Date;

    constructor(
        id: string,
        name: string,
        address: string,
        phoneNumber: string,
        contactLink: string | null,
        status: string,
        createdAt?: Date,
        updatedAt?: Date,
    ) {
        this.id = id;
        this.name = name;
        this.address = address;
        this.phoneNumber = phoneNumber;
        this.contactLink = contactLink;
        this.status = status;
        if (createdAt) this.createdAt = createdAt;
        if (updatedAt) this.updatedAt = updatedAt;
    }
}
