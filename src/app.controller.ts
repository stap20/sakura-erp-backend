import { Controller, Get, Version } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Public } from './modules/security/shared/decorators/public.decorator';

@Controller()
@ApiTags('App')
export class AppController {
    @Public()
    @Get('heartbeat')
    @Version('1')
    getHeartbeat(): string {
        return 'OK';
    }
}
