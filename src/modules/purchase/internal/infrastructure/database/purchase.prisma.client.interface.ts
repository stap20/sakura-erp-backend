import { PrismaClient } from 'purchase-db';

export interface IPurchasePrismaClient extends PrismaClient {}

export const IPurchasePrismaClient = Symbol('IPurchasePrismaClient');
