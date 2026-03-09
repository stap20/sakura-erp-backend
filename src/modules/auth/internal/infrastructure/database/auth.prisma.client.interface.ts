import { PrismaClient } from 'auth-db';

export interface IAuthPrismaClient extends PrismaClient {
}

export const IAuthPrismaClient = Symbol('IAuthPrismaClient');
