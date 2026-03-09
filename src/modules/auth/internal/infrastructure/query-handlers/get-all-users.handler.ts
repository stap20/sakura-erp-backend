import { Injectable } from '@nestjs/common';
import { IGetAllUsersHandler } from '../../application/queries/get-all-users/get-all-users.handler.interface';
import { GetAllUsersQuery } from '../../application/queries/get-all-users/get-all-users.query';
import { GetAllUsersResponse } from '../../application/queries/get-all-users/get-all-users.response';
import { ReadUserRepository } from '../repositories/read-user.repository';

@Injectable()
export class GetAllUsersHandler implements IGetAllUsersHandler {
  constructor(private readonly readUserRepo: ReadUserRepository) { }

  async handle(query: GetAllUsersQuery): Promise<GetAllUsersResponse> {
    const filter = this.filterFrom(query);
    const userList = await this.readUserRepo.search(
      query.offset,
      query.limit,
      filter,
    );
    return new GetAllUsersResponse(
      userList.map((user) => ({
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        role: user.role,
        employeeId: user.empId,
        phoneNumber: user.phoneNumber,
        status: user.status,
        createdAt: user.createdAt,
      })),
    );
  }

  filterFrom(query: GetAllUsersQuery): Object {
    const conditions: any = {};

    if (query.content) {
      conditions.OR = [
        { firstName: { contains: query.content, mode: 'insensitive' } },
        { lastName: { contains: query.content, mode: 'insensitive' } },
        { email: { contains: query.content, mode: 'insensitive' } },
      ];
    }

    if (query.role) {
      conditions.role = query.role;
    }

    return conditions;
  }
}
