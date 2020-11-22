import { Users } from '../../models/users';
import { UserCreationAttributes } from '../../types';

export const insertOne = async ({
  email,
  passwordHash,
  role,
}: UserCreationAttributes): Promise<any> => {
  return Users.insertOne({
    email,
    passwordHash,
    role,
    createdAt: new Date(),
  });
};
