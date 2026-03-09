import { Injectable } from '@nestjs/common';
import { User } from '../../../domain/entities/user.aggregate';
import { UserEntity } from '../entities/user.entity';

@Injectable()
export class UserMapper {
  async toDomain(userEntity: UserEntity): Promise<User> {
    return User.createFromPersistence({
      id: userEntity.id,
      email: userEntity.email,
      password: userEntity.password,
      role: userEntity.role,
      firstName: userEntity.firstName,
      lastName: userEntity.lastName,
      status: userEntity.status,
      empId: userEntity.empId,
      empCardId: userEntity.empCardId,
      phoneNumber: userEntity.phoneNumber,
    });
  }

  toPersistence(user: User): Omit<UserEntity, 'createdAt' | 'updatedAt'> {
    return {
      id: user.getId().value,
      email: user.getEmail().value,
      password: user.getPassword().value,
      firstName: user.getName().getFirstName(),
      lastName: user.getName().getLastName(),
      role: user.getRole().value,
      status: user.getStatus().value,
      empId: user.getEmployeeId().value,
      empCardId: user.getEmployeeCardId().value,
      phoneNumber: user.getEmployeePhoneNumber().value,
    };
  }
}