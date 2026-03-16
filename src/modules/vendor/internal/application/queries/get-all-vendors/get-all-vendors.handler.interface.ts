import { GetAllVendorsQuery } from './get-all-vendors.query';
import { GetAllVendorsResponse } from './get-all-vendors.response';
import { IQueryHandler } from 'src/shared/application/query.handler.interface';

export interface IGetAllVendorsHandler extends IQueryHandler<GetAllVendorsQuery, GetAllVendorsResponse> {}

export const IGetAllVendorsHandler = Symbol('IGetAllVendorsHandler');
