import { GetVendorQuery } from './get-vendor.query';
import { GetVendorResponse } from './get-vendor.response';
import { IQueryHandler } from 'src/shared/application/query.handler.interface';

export interface IGetVendorHandler extends IQueryHandler<GetVendorQuery, GetVendorResponse> {}

export const IGetVendorHandler = Symbol('IGetVendorHandler');
