import {
    Controller,
    Get,
    UseGuards,
    Inject,
    Version,
} from '@nestjs/common';
import {
    ApiTags,
    ApiOperation,
    ApiResponse,
    ApiBearerAuth,
} from '@nestjs/swagger';
import { IGetUserHandler } from '../../application/queries/get-user/get-user.handler.interface';
import { GetUserQuery } from '../../application/queries/get-user/get-user.query';
import { UserResponseDto } from '../dtos/responses/user.response.dto';
import { JwtAuthGuard } from 'src/modules/security/internal/infrastructure/guards/jwt-auth.guard';
import type { AuthenticatedUser } from 'src/modules/security/shared/contracts/authenticated-user.interface';
import { CurrentUser } from 'src/modules/security/shared/decorators/current-user.decorator';

@ApiTags('Authentication')
@Controller('auth')
export class GetCurrentUserController {
    constructor(
        @Inject(IGetUserHandler)
        private readonly getUserHandler: IGetUserHandler,
    ) { }

    @Version('1')
    @Get('user/me')
    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth()
    @ApiOperation({ summary: 'Get current user' })
    @ApiResponse({
        status: 200,
        description: 'Current user',
        type: UserResponseDto,
    })
    @ApiResponse({
        status: 401,
        description: 'Unauthorized',
    })
    async getCurrentUser(
        @CurrentUser() user: AuthenticatedUser,
    ): Promise<UserResponseDto> {
        const query = new GetUserQuery(user.userId);
        const result = await this.getUserHandler.handle(query);

        return new UserResponseDto(
            result.id,
            result.email,
            result.firstName,
            result.lastName,
            result.role,
            result.employeeId,
            result.phoneNumber,
            result.status,
        );
    }
}
