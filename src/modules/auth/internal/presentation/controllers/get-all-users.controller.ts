import {
    Controller,
    Get,
    Inject,
    Query,
    UseGuards,
    Version,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { RolesGuard } from 'src/modules/security/internal/infrastructure/guards/roles.guard';
import { IGetAllUsersHandler } from '../../application/queries/get-all-users/get-all-users.handler.interface';
import { GetAllUsersRequest } from '../dtos/requests/get-all-users.request';
import { GetAllUsersQuery } from '../../application/queries/get-all-users/get-all-users.query';
import { Roles } from 'src/modules/security/internal/infrastructure/decorators/roles.decorator';
import { UserResponseDto } from '../dtos/responses/user.response.dto';

@ApiTags('Authentication')
@Controller('auth')
@UseGuards(RolesGuard)
export class GetAllUsersController {
    constructor(
        @Inject(IGetAllUsersHandler)
        private readonly getAllUsersHandler: IGetAllUsersHandler,
    ) { }

    @Version('1')
    @Get('user')
    @Roles(['ADMIN'])
    @ApiBearerAuth()
    @ApiOperation({ summary: 'Get users based on query (Admin only)' })
    @ApiResponse({
        status: 200,
        description: 'Return all matchs users',
        type: [UserResponseDto]
    })
    @ApiResponse({
        status: 403,
        description: 'Insufficient permissions'
    })
    @ApiResponse({
        status: 401,
        description: 'Unauthorized'
    })
    async getAllUsers(
        @Query() request: GetAllUsersRequest,
    ): Promise<UserResponseDto[]> {
        const query = new GetAllUsersQuery(
            Math.max(request.offset, 0),
            Math.min(Math.max(request.limit, 1), 100),
            request.content,
            request.role,
        );

        const users = await this.getAllUsersHandler.handle(query);

        return users.userList;
    }
}
