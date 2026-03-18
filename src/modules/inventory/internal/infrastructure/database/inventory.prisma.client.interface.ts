import { PrismaClient } from 'inventory-db';

export interface IInventoryPrismaClient extends PrismaClient {}

export const IInventoryPrismaClient = Symbol('IInventoryPrismaClient');
