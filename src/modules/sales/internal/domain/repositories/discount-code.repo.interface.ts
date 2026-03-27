import { DiscountCode } from '../entities/discount-code.entity';

export const IDiscountCodeRepository = Symbol('IDiscountCodeRepository');

export interface IDiscountCodeRepository {
    save(code: DiscountCode): Promise<void>;
    getByCode(code: string): Promise<DiscountCode | null>;
    getById(id: string): Promise<DiscountCode | null>;
}
