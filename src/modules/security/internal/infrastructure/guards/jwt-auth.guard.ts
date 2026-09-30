import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { TokenError } from '../errors/token.error';
import { IS_PUBLIC_KEY } from '../../../shared/decorators/public.decorator';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(
    private readonly jwtService: JwtService,
    private readonly reflector: Reflector,
  ) {}

  canActivate(context: ExecutionContext): boolean {
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (isPublic) {
      return true;
    }

    const request = context.switchToHttp().getRequest();
    const token = this.extractToken(request);
    
    if (!token) {
      throw new UnauthorizedException('No token provided');
    }
    
    try {
      const payload = this.jwtService.verify(token);
      request.user = payload;
      return true;
    } catch (error) {
      // Use 498 for any invalid token scenarios
      if (error.name === 'TokenExpiredError') {
        throw new TokenError('Token has expired');
      }
      if (error.name === 'JsonWebTokenError') {
        throw new TokenError('Token is malformed');
      }
      if (error.name === 'NotBeforeError') {
        throw new TokenError('Token not active yet');
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
