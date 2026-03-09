import { Controller, Get, Version } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@Controller()
@ApiTags('App')
export class AppController {
    @Get('heartbeat')
    @Version('1')
    getHeartbeat(): string {
        return 'OK';
    }
}
