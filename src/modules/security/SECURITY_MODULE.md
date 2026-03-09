# Security Module Documentation

## Overview
The `SecurityModule` provides the infrastructure for securing the application. It includes guards for route protection, decorators for accessing user data and defining roles, and the JWT configuration.

## Key Components

### Guards
- **`JwtAuthGuard`**: Ensures the request has a valid JWT (from Cookie or Bearer header). If invalid or missing, it throws an `UnauthorizedException` or `TokenError`.
- **`RolesGuard`**: Checks if the authenticated user has the required role(s) to access a resource. It works in conjunction with the `@Roles` decorator.

### Decorators
- **`@CurrentUser()`**: A custom parameter decorator to extract the `AuthenticatedUser` object from the request.
- **`@Roles(...roles: string[])`**: A metadata decorator to specify which roles are allowed to access a route or controller.

### Exports
The module exports:
- `JwtModule`: For JWT signing and verifying.
- `JwtAuthGuard`: For protecting routes globally or locally.
- `RolesGuard`: For role-based access control.

## Usage

### 1. Protect a Route (Authentication Only)
Use `JwtAuthGuard` to ensure a user is logged in.

```typescript
import { Controller, Get, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/modules/security/internal/infrastructure/guards/jwt-auth.guard';

@Controller('protected')
export class ProtectedController {
  
  @Get()
  @UseGuards(JwtAuthGuard)
  getProtectedData() {
    return 'This data is only for authenticated users';
  }
}
```

### 2. Protect a Route (Role-Based Authorization)
Use `RolesGuard` together with `@Roles` to restrict access to specific user roles.
**Note**: `RolesGuard` automatically checks for a valid token first, so you often use them together or assume `RolesGuard` implies authentication check if the user property is populated.

```typescript
import { Controller, Post, UseGuards } from '@nestjs/common';
import { RolesGuard } from 'src/modules/security/internal/infrastructure/guards/roles.guard';
import { Roles } from 'src/modules/security/internal/infrastructure/decorators/roles.decorator';

@Controller('admin')
@UseGuards(RolesGuard) 
export class AdminController {

  @Post('users')
  @Roles(['ADMIN']) // Only users with 'ADMIN' role can access this
  createUser() {
    return 'User created';
  }
}
```

### 3. Get Current User Object
Use the `@CurrentUser()` decorator in your controller methods to access the logged-in user's details without parsing the request manually.

```typescript
import { Controller, Get, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/modules/security/internal/infrastructure/guards/jwt-auth.guard';
import { CurrentUser } from 'src/modules/security/shared/decorators/current-user.decorator';
import type { AuthenticatedUser } from 'src/modules/security/shared/contracts/authenticated-user.interface';

@Controller('profile')
export class ProfileController {

  @Get()
  @UseGuards(JwtAuthGuard)
  getProfile(@CurrentUser() user: AuthenticatedUser) {
    console.log(user.userId);
    return user;
  }
}
```
**Important**: When using `AuthenticatedUser` in a controller method signature that is decorated (e.g., with Swagger decorators), make sure to use `import type` to avoid circular dependency or metadata emission issues with `isolatedModules`.

```typescript
import type { AuthenticatedUser } from 'src/modules/security/shared/contracts/authenticated-user.interface';
```

## Configuration
The module relies on the following environment variables:
- `JWT_SECRET`: The secret key for signing tokens.
- `JWT_EXPIRES_IN`: Token expiration time (e.g., '1d', '3600s').
