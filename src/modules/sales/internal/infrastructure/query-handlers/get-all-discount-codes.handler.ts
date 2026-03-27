import { Injectable } from '@nestjs/common';
import { ReadDiscountCodeRepository } from '../repositories/read-discount-code.repository';
import { GetAllDiscountCodesResponse } from '../../application/queries/get-all-discount-codes/get-all-discount-codes.response';

export const IGetAllDiscountCodesHandler = Symbol('IGetAllDiscountCodesHandler');

export interface IGetAllDiscountCodesHandler {
    handle(): Promise<GetAllDiscountCodesResponse[]>;
}

@Injectable()
export class GetAllDiscountCodesHandler implements IGetAllDiscountCodesHandler {
    constructor(private readonly readRepo: ReadDiscountCodeRepository) {}

    async handle(): Promise<GetAllDiscountCodesResponse[]> {
        const rows = await this.readRepo.findAll();
        return rows.map(
            (r) =>
                new GetAllDiscountCodesResponse(
                    r.id,
                    r.code,
                    r.type,
                    r.value,
                    r.maxUses,
                    r.usedCount,
                    r.expiresAt,
                    r.isActive,
                    r.createdAt,
                    r.updatedAt,
                ),
        );
    }
}
