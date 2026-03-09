import { Controller, Get, Inject, Param, UseGuards, Version } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { IGetUserHandler } from '../../application/queries/get-user/get-user.handler.interface';
import { GetUserQuery } from '../../application/queries/get-user/get-user.query';
import { UserResponseDto } from '../dtos/responses/user.response.dto';
import { Roles } from 'src/modules/security/internal/infrastructure/decorators/roles.decorator';
import { RolesGuard } from 'src/modules/security/internal/infrastructure/guards/roles.guard';

@ApiTags('Authentication')
@Controller('auth')
@UseGuards(RolesGuard)
export class GetUserByIdController {
  constructor(
    @Inject(IGetUserHandler) private readonly getUserHandler: IGetUserHandler
  ) {}

  @Version('1')
  @Get('user/:id')
  @Roles(['ADMIN'])
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get user by ID (Admin only)' })
  @ApiResponse({ 
    status: 200, 
    description: 'User found', 
    type: UserResponseDto 
  })
  @ApiResponse({ 
    status: 404, 
    description: 'User not found' 
  })
  @ApiResponse({ 
    status: 403, 
    description: 'Insufficient permissions' 
  })
  @ApiResponse({ 
    status: 401, 
    description: 'Unauthorized' 
  })
  async getUserById(@Param('id') id: string): Promise<UserResponseDto> {
    const query = new GetUserQuery(id);
    const result = await this.getUserHandler.handle(query);
    return new UserResponseDto(
      result.id,
      result.email,
      result.firstName,
      result.lastName,
      result.role,
      result.employeeId,
      result.phoneNumber,
      result.status
    );
  }
}