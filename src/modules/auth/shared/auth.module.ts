import { Module } from '@nestjs/common';
import { PrismaPg } from '@prisma/adapter-pg';
import { ConfigService } from '@nestjs/config';
import { Pool } from 'pg';

import { PrismaClient } from 'auth-db';

import { AuthController } from '../internal/presentation/controllers/auth.controller';
import { GetUserByIdController } from '../internal/presentation/controllers/get-user-by-id.controller';
import { GetCurrentUserController } from '../internal/presentation/controllers/get-current-user.controller';

import { GetUserHandler } from '../internal/infrastructure/query-handlers/get-user.handler';
import { AuthenticateHandler } from '../internal/application/commands/authenticate/authenticate.handler';

import { ITokenGenerator } from '../internal/application/contracts/token-generator.interface';
import { IGetUserHandler } from '../internal/application/queries/get-user/get-user.handler.interface';
import { IGetAllUsersHandler } from '../internal/application/queries/get-all-users/get-all-users.handler.interface';

import { UserMapper } from '../internal/infrastructure/database/mappers/user.mapper';
import { JwtTokenGenerator } from '../internal/infrastructure/auth/jwt-token-generator';
import { UserRepository } from '../internal/infrastructure/repositories/user.repository';
import { IAuthPrismaClient } from '../internal/infrastructure/database/auth.prisma.client.interface';

import { IUserRepository } from '../internal/domain/repositories/user.repo.interface';

import { ILogger } from 'src/shared/domain/contracts/logger.interface';
import { NestLogger } from 'src/shared/infrastructure/logger/nest-logger';
import { IEventBus } from 'src/shared/domain/contracts/event-bus.interface';
import { NestEventBus } from 'src/shared/infrastructure/event/nest-event-bus';
import { SecurityModule } from 'src/modules/security/shared/security.module';
import { ReadUserRepository } from '../internal/infrastructure/repositories/read-user.repository';
import { GetAllUsersController } from '../internal/presentation/controllers/get-all-users.controller';
import { GetAllUsersHandler } from '../internal/infrastructure/query-handlers/get-all-users.handler';

@Module({
    imports: [SecurityModule],
    providers: [
        {
            provide: IAuthPrismaClient,
            useFactory: (configService: ConfigService) => {
                const pool = new Pool({
                    connectionString: configService.get<string>(
                        'AUTH_DATABASE_URL',
                    ),
                });
                return new PrismaClient({
                    adapter: new PrismaPg(pool),
                });
            },
            inject: [ConfigService],
        },
        AuthenticateHandler,
        UserMapper,
        ReadUserRepository,
        {
            provide: IGetUserHandler,
            useClass: GetUserHandler,
        },
        {
            provide: IGetAllUsersHandler,
            useClass: GetAllUsersHandler,
        },
        {
            provide: IUserRepository,
            useClass: UserRepository,
        },
        {
            provide: ITokenGenerator,
            useClass: JwtTokenGenerator,
        },
        {
            provide: ILogger,
            useClass: NestLogger,
        },
        {
            provide: IEventBus,
            useClass: NestEventBus,
        },
    ],
    controllers: [
        AuthController,
        GetCurrentUserController,
        GetUserByIdController,
        GetAllUsersController,
    ],
})
export class AuthModule { }
