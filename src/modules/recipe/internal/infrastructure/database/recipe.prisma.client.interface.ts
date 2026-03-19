import { PrismaClient } from 'recipe-db';

export interface IRecipePrismaClient extends PrismaClient {}

export const IRecipePrismaClient = Symbol('IRecipePrismaClient');
