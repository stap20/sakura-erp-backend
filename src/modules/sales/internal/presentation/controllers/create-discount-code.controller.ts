import { Controller, Post, Body, Version, Inject, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CreateDiscountCodeHandler } from '../../application/commands/create-discount-code/create-discount-code.handler';
import { CreateDiscountCodeCommand } from '../../application/commands/create-discount-code/create-discount-code.command';
import { CreateDiscountCodeRequestDto } from '../dtos/requests/create-discount-code.request.dto';
import { DiscountCodeResponseDto } from '../dtos/responses/discount-code.response.dto';
import { ReadDiscountCodeRepository } from '../../infrastructure/repositories/read-discount-code.repository';

@ApiTags('Promotions')
@Controller('promotions/discount-codes')
export class CreateDiscountCodeController {
    constructor(
        @Inject(CreateDiscountCodeHandler)
        private readonly handler: CreateDiscountCodeHandler,
        private readonly readRepo: ReadDiscountCodeRepository,
    ) {}

    @Version('1')
    @Post()
    @HttpCode(HttpStatus.CREATED)
    @ApiOperation({ summary: 'Create a new discount code' })
    @ApiResponse({ status: 201, type: DiscountCodeResponseDto })
    async create(@Body() dto: CreateDiscountCodeRequestDto): Promise<DiscountCodeResponseDto> {
        const id = await this.handler.handle(
            new CreateDiscountCodeCommand(
                dto.code,
                dto.type,
                dto.value,
                dto.maxUses ?? null,
                dto.expiresAt ? new Date(dto.expiresAt) : null,
            ),
        );
        const record = await this.readRepo.findById(id);
        return record as DiscountCodeResponseDto;
    }
}
