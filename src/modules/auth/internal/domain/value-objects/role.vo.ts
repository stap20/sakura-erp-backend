import { ValueObject } from 'src/shared/domain/value-objects/value-object';
import { InvalidRoleError } from '../errors/role.errors';

export enum UserRole {
  ADMIN = 'ADMIN',
  SUPER_ADMIN = 'SUPER_ADMIN',
  ENGINEER = 'ENGINEER',
}

export class Role extends ValueObject<UserRole> {
  private constructor(value: UserRole) {
    super(value);
  }

  public static create(role: string): Role {
    if (!Object.values(UserRole).includes(role as UserRole)) {
      throw new InvalidRoleError(role);
    }
    
    return new Role(role as UserRole);
  }

  public isAdmin(): boolean {
    return this._value === UserRole.ADMIN;
  }

  public isSuperAdmin(): boolean {
    return this._value === UserRole.SUPER_ADMIN;
  }

  public isEngineer(): boolean {
    return this._value === UserRole.ENGINEER;
  }
} 