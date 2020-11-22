import { UserRepository } from '../../repositories/users';
import { encryptPassword } from '../../helpers/crypt';
import { UserRole, UserWithoutPassword, UserPublicFields } from '../../types';
import HttpError from '../../helpers/httpError';
import { USER_ALREADY_EXIST, VALIDATION_ERROR } from '../../helpers/errors';
import { getSomeObjectFields } from '../../helpers/getSomeObjectFields';

type Param = {
  email: string;
  password: string;
};

export const createUser = async ({ email, password }: Param): Promise<UserWithoutPassword> => {
  const user = await UserRepository.selectByEmail(email);

  if (user) {
    throw new HttpError(422, VALIDATION_ERROR, [
      {
        type: USER_ALREADY_EXIST,
        path: ['email'],
      },
    ]);
  }

  const passwordHash = password && encryptPassword(password);

  const newUser = await UserRepository.insertOne({
    email,
    passwordHash,
    role: UserRole.user,
    createdAt: new Date(),
  });

  return getSomeObjectFields(newUser, UserPublicFields);
};
