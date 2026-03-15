import { IQuery } from 'src/shared/application/query.interface';

export class GetAllVendorsQuery implements IQuery {
    constructor(
        public readonly offset: number,
        public readonly limit: number,
        public readonly name?: string,
        public readonly status?: string,
    ) {}
}
