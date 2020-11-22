import { UserRepository } from '../../repositories/users';
import { UserRole, UserUpdatingAttributes, ReqUser } from '../../types';
import HttpError, { ForbiddenHttpError } from '../../helpers/httpError';
import { Perms } from '../../helpers/perms';
import { USER_NOT_FOUND } from '../../helpers/errors';

export const updateUser = async ({
  initiatorUser,
  userId,
  updatingUser,
}: {
  initiatorUser: ReqUser;
  userId: string;
  updatingUser: UserUpdatingAttributes;
}): Promise<boolean> => {
  if (!Perms.check(initiatorUser, UserRole.admin) && initiatorUser._id !== userId) {
    throw new ForbiddenHttpError();
  }

  const user = await UserRepository.selectById(userId);

  if (!user) {
    throw new HttpError(404, USER_NOT_FOUND);
  }

  await UserRepository.updateOne({
    user: updatingUser,
    userId,
  });

  return true;
};
