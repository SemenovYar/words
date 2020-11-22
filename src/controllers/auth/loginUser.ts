import { UserRepository } from '../../repositories/users';
import { UnauthorizedHttpError } from '../../helpers/httpError';
import { checkPassword } from '../../helpers/crypt';
import { TokenPair } from '../../types';
import { getTokenPair } from './utils';
import { LOGIN_OR_PASSWORD_INCORRECT } from '../../helpers/errors';

export const loginUser = async ({
  login,
  password,
}: {
  login: string;
  password: string;
}): Promise<TokenPair> => {
  const user = await UserRepository.selectByLogin({ login });

  if (!user || !checkPassword(password, user.passwordHash)) {
    throw new UnauthorizedHttpError(LOGIN_OR_PASSWORD_INCORRECT);
  }

  return getTokenPair({ user });
};
