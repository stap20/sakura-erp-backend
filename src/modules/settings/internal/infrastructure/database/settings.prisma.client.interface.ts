import { PrismaClient } from 'settings-db';

export interface ISettingsPrismaClient extends PrismaClient {}

export const ISettingsPrismaClient = Symbol('ISettingsPrismaClient');
