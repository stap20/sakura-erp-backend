import { HttpException } from '@nestjs/common';

export class TokenError extends HttpException {
    constructor(message: string = 'Invalid or expired token') {
        super({
            statusCode: 498,
            message,
            error: 'Invalid Token'
        }, 498);
    }
}