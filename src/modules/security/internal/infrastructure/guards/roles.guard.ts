import {
    Injectable,
    CanActivate,
    ExecutionContext,
    ForbiddenException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { ROLES_KEY } from '../decorators/roles.decorator';
import { TokenError } from '../errors/token.error';

@Injectable()
export class RolesGuard implements CanActivate {
    constructor(
        private readonly reflector: Reflector,
        private readonly jwtService: JwtService,
    ) {}

    canActivate(context: ExecutionContext): boolean {
        const requiredRoles = this.reflector.getAllAndOverride<string[]>(
            ROLES_KEY,
            [context.getHandler(), context.getClass()],
        );

        if (!requiredRoles) {
            return true;
        }

        const request = context.switchToHttp().getRequest();
        const token = this.extractToken(request);

        if (!token) {
            throw new ForbiddenException('Access denied');
        }

        try {
            const payload = this.jwtService.verify(token);
            const hasRole = requiredRoles.includes(payload.role);

            if (!hasRole) {
                throw new ForbiddenException('Insufficient permissions');
            }

            request.user = payload;
            return true;
        } catch (error) {
            if (error instanceof ForbiddenException) {
                throw error;
            }

            // Use 498 for invalid tokens
            if (error.name === 'TokenExpiredError') {
                throw new TokenError('Token has expired');
            }
            if (error.name === 'JsonWebTokenError') {
                throw new TokenError('Token is malformed');
            }

            throw new TokenError('Invalid token');
        }
    }

    private extractToken(request: any): string | undefined {
        // 1. Try extracting from Cookie
        if (request.cookies && request.cookies.auth_token) {
            return request.cookies.auth_token;
        }

        // 2. Try extracting from Authorization header
        const [type, token] = request.headers.authorization?.split(' ') ?? [];
        return type === 'Bearer' ? token : undefined;
    }
}
