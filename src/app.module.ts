import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { EventEmitterModule } from '@nestjs/event-emitter';

import { ConfigModule } from './config/config.module';
import { SecurityModule } from './modules/security/shared/security.module';

import { AuthModule } from './modules/auth/shared/auth.module';

import { AppController } from './app.controller';

@Module({
    imports: [
        EventEmitterModule.forRoot(),
        ScheduleModule.forRoot(),
        ConfigModule,
        SecurityModule,
        AuthModule,
    ],
    controllers: [AppController],
})
export class AppModule {}
