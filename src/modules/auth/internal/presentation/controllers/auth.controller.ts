import { Controller, Post, Body, Version, Inject, Res } from '@nestjs/common';
import type { Response } from 'express';
import { ConfigService } from '@nestjs/config';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { AuthenticateHandler } from '../../application/commands/authenticate/authenticate.handler';
import { LoginRequestDto } from '../dtos/requests/login.request.dto';
import { LoginResponseDto } from '../dtos/responses/login.response.dto';
import { AuthenticateCommand } from '../../application/commands/authenticate/authenticate.command';

@ApiTags('Authentication')
@Controller('auth')
export class AuthController {
    constructor(
        @Inject(AuthenticateHandler)
        private readonly authenticateHandler: AuthenticateHandler,
        private readonly configService: ConfigService,
    ) {}

    @Version('1')
    @Post('login')
    @ApiOperation({ summary: 'User authentication' })
    @ApiResponse({
        status: 200,
        description: 'Authentication successful',
        type: LoginResponseDto,
    })
    @ApiResponse({
        status: 401,
        description: 'Invalid credentials',
    })
    async login(
        @Body() loginDto: LoginRequestDto,
        @Res({ passthrough: true }) res: Response,
    ): Promise<LoginResponseDto> {
        const command = new AuthenticateCommand(
            loginDto.email,
            loginDto.password,
        );
        const result = await this.authenticateHandler.handle(command);

        const expiresIn = this.configService.get<string>('JWT_EXPIRES_IN');
        const maxAge = this.parseDuration(expiresIn);

        res.cookie('auth_token', result.token, {
            httpOnly: true,
            secure: true,
            sameSite: 'strict',
            maxAge: maxAge,
        });

        return new LoginResponseDto(
            result.userId,
            result.employeeId,
            result.firstName,
            result.lastName,
            result.phoneNumber,
            result.email,
            result.role,
        );
    }

    @Post('logout')
    @ApiOperation({ summary: 'User logout' })
    @ApiResponse({ status: 200, description: 'Logout successful' })
    async logout(@Res({ passthrough: true }) res: Response): Promise<void> {
        res.clearCookie('auth_token');
        return;
    }

    private parseDuration(duration: string | undefined): number {
        if (!duration) {
            return 1000 * 60 * 60;
        }
        if (!isNaN(Number(duration))) {
             return Number(duration);
        }
        
        const match = duration.match(/^(\d+)([smhd])$/);
        if (!match) {
             return 1000 * 60 * 60;
        }

        const value = parseInt(match[1], 10);
        const unit = match[2];

        switch (unit) {
            case 's': return value * 1000;
            case 'm': return value * 1000 * 60;
            case 'h': return value * 1000 * 60 * 60;
            case 'd': return value * 1000 * 60 * 60 * 24;
            default: return 1000 * 60 * 60;
        }
    }
}
