import { ApiProperty } from '@nestjs/swagger';

export class UserResponseDto {
    @ApiProperty({
        description: 'Unique identifier of the user',
        example: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
        type: 'string',
        format: 'uuid'
    })
    id: string;

    @ApiProperty({
        description: 'User email address',
        example: 'john.doe@company.com',
        type: 'string',
        format: 'email'
    })
    email: string;

    @ApiProperty({
        description: 'User first name',
        example: 'John',
        type: 'string',
        minLength: 1,
        maxLength: 50
    })
    firstName: string;

    @ApiProperty({
        description: 'User last name',
        example: 'Doe',
        type: 'string',
        minLength: 1,
        maxLength: 50
    })
    lastName: string;

    @ApiProperty({
        description: 'User role determining access permissions',
        example: 'ADMIN',
        enum: ['ADMIN', 'USER', 'VENDOR'],
        type: 'string'
    })
    role: string;

    @ApiProperty({
        description: 'User employee id',
        example: 12345,
        type: 'number'
    })
    employeeId: number;

    @ApiProperty({
        description: 'User phone number',
        example: '+201121888835',
        type: 'string'
    })
    phoneNumber: string;

    @ApiProperty({
        description: 'Current status of the user account',
        example: 'ACTIVE',
        enum: ['ACTIVE', 'INACTIVE', 'SUSPENDED'],
        type: 'string'
    })
    status: string;

    constructor(
        id: string,
        email: string,
        firstName: string,
        lastName: string,
        role: string,
        employeeId: number,
        phoneNumber: string,
        status: string
    ) {
        this.id = id;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.role = role;
        this.employeeId = employeeId;
        this.phoneNumber = phoneNumber;
        this.status = status;
    }
}
