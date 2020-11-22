export enum UserRole {
  admin = 'admin',
  user = 'user',
}

export type UserCreationAttributes = {
  resetCode?: string;
  email: string;
  passwordHash: string;
  role: UserRole;
  createdAt: Date;
};

export type User = UserCreationAttributes & {
  _id: string;
  blockedAt?: Date;
  removedAt?: Date;
  updatedAt?: Date;
};

export type UserUpdatingAttributes = Omit<UserCreationAttributes, 'role'> & {
  email: string;
  passwordHash?: string;
  resetCode?: string;
};

export type UserWithoutPassword = Omit<User, 'passwordHash' | 'resetCode'>;

export const UserPublicFields = ['email', 'role', 'createdAt'];

export const UserAdminListFields = [
  'id',
  'companyName',
  'firstName',
  'lastName',
  'email',
  'role',
  'createdAt',
];
