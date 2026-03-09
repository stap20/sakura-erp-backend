import { Injectable, Inject } from '@nestjs/common';
import { UserNotFoundError } from '../../domain/errors/user.error';
import { IGetUserHandler } from '../../application/queries/get-user/get-user.handler.interface';
import { GetUserQuery } from '../../application/queries/get-user/get-user.query';
import { GetUserResponse } from '../../application/queries/get-user/get-user.response';
import { ReadUserRepository } from '../repositories/read-user.repository';

@Injectable()
export class GetUserHandler implements IGetUserHandler {
  constructor(
    private readonly readUserRepo: ReadUserRepository
  ) { }

  async handle(query: GetUserQuery): Promise<GetUserResponse> {
    const user = await this.readUserRepo.getById(query.userId);

    if (!user) {
      throw new UserNotFoundError(query.userId);
    }

    return new GetUserResponse(
      user.id,
      user.email,
      user.firstName,
      user.lastName,
      user.role,
      user.empId,
      user.phoneNumber,
      user.status,
      user.createdAt,
    );
  }
}   