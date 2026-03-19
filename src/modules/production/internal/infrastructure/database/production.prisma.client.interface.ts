import { PrismaClient } from 'production-db';

export interface IProductionPrismaClient extends PrismaClient {}

export const IProductionPrismaClient = Symbol('IProductionPrismaClient');
