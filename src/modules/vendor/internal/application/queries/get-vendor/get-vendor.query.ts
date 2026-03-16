import { IQuery } from 'src/shared/application/query.interface';

export class GetVendorQuery implements IQuery {
    constructor(public readonly vendorId: string) {}
}
