import { PrismaClient } from 'vendor-db';

export interface IVendorPrismaClient extends PrismaClient {
}

export const IVendorPrismaClient = Symbol('IVendorPrismaClient');
