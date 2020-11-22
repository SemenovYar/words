import { UserRole, ReqUser, UserWithoutPassword, UserPublicFields } from '../../types';
import { Perms } from '../../helpers/perms';
import HttpError, { ForbiddenHttpError } from '../../helpers/httpError';
import { UserRepository } from '../../repositories/users';
import { getSomeObjectFields } from '../../helpers/getSomeObjectFields';
import { USER_NOT_FOUND } from '../../helpers/errors';

export const getUserById = async ({
  initiatorUser,
  userId,
}: {
  initiatorUser: ReqUser;
  userId: string;
}): Promise<UserWithoutPassword> => {
  if (!Perms.check(initiatorUser, UserRole.admin) && initiatorUser._id !== userId) {
    throw new ForbiddenHttpError();
  }

  const user = await UserRepository.selectById(userId);

  if (!user) {
    throw new HttpError(404, USER_NOT_FOUND);
  }

  return getSomeObjectFields(user, UserPublicFields);
};
