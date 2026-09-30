import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { JwtModule, JwtService } from '@nestjs/jwt';

import { RolesGuard } from '../internal/infrastructure/guards/roles.guard';
import { JwtAuthGuard } from '../internal/infrastructure/guards/jwt-auth.guard';

@Module({
    imports: [
        JwtModule.registerAsync({
            inject: [ConfigService],
            useFactory: (configService: ConfigService) => {
                const jwtSecret = configService.get<string>('JWT_SECRET');
                return {
                    secret: jwtSecret,
                    signOptions: {
                        expiresIn: configService.get<string>(
                            'JWT_EXPIRES_IN',
                        ) as any,
                    },
                };
            },
        }),
    ],
    providers: [
        JwtAuthGuard,
        RolesGuard,
        JwtService,
        // Every route requires a valid token unless marked @Public()
        { provide: APP_GUARD, useExisting: JwtAuthGuard },
    ],
    exports: [JwtModule, RolesGuard, JwtAuthGuard],
})
export class SecurityModule {}
