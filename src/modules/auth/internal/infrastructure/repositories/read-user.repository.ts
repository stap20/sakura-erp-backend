import { Inject, Injectable } from "@nestjs/common";
import { IAuthPrismaClient } from '../database/auth.prisma.client.interface';
import { UserEntity } from "../database/entities/user.entity";

@Injectable()
export class ReadUserRepository {
    constructor(
        @Inject(IAuthPrismaClient) private readonly prisma: IAuthPrismaClient
    ) { }

    async getById(id: string): Promise<UserEntity | null> {
        const user = await this.prisma.user.findUnique({
            where: { id }
        })

        if (!user) {
            return null
        }

        return new UserEntity(user)
    }

    async getByIds(idList: string[]): Promise<UserEntity[]> {
        const userList = await this.prisma.user.findMany({
            where: {
                id: {
                    in: idList
                }
            }
        })

        return userList.map((user) => new UserEntity(user))
    }

    async search(offset: number = 0, limit: number = 10, filter: Object = {}): Promise<UserEntity[]> {
        const userList = await this.prisma.user.findMany({
            where: filter,
            skip: offset,
            take: limit,
            orderBy: [
                { firstName: 'asc' },
                { lastName: 'asc' }
            ]
        })

        return userList.map((user) => new UserEntity(user))
    }
}