import { PrismaClient } from 'sales-db';

export interface ISalesPrismaClient extends PrismaClient {}

export const ISalesPrismaClient = Symbol('ISalesPrismaClient');
