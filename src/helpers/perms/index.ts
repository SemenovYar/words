import middlewares from './middlewares';
import { ReqUser, UserRole } from '../../types';
import { ForbiddenHttpError } from '../httpError';

export const PermsMiddlewares = middlewares;

export const Perms = {
  check: (user: ReqUser, role: UserRole): boolean => {
    return user.role === role;
  },
  throwCheck: (user: ReqUser, role: UserRole): void => {
    if (!Perms.check(user, role)) {
      throw new ForbiddenHttpError();
    }
  },
};
