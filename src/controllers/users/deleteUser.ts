import { UserRepository } from '../../repositories/users';
import HttpError from '../../helpers/httpError';
import { USER_NOT_FOUND } from '../../helpers/errors';

export const deleteUser = async (userId: string): Promise<boolean> => {
  const user = await UserRepository.selectById(userId);

  if (!user) {
    throw new HttpError(404, USER_NOT_FOUND);
  }

  return UserRepository.markOneLikeRemoved(userId);
};
