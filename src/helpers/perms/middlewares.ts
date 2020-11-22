import { NextFunction, Request, Response } from 'express';
import { UnauthorizedHttpError, ForbiddenHttpError } from '../httpError';
import { getUserFromReq } from '../jwtMiddleware';
import { UserRole } from '../../types';

export const isAuthorizedUser = (req: Request, res: Response, next: NextFunction): void => {
  const user = getUserFromReq(req);

  if (!user) {
    throw new UnauthorizedHttpError();
  }

  return next();
};

export const isUserAdmin = (req: Request, res: Response, next: NextFunction): void => {
  const user = getUserFromReq(req);

  if (!user) {
    throw new UnauthorizedHttpError();
  }

  if (user.role !== UserRole.admin) {
    throw new ForbiddenHttpError();
  }

  return next();
};

export default { isAuthorizedUser, isUserAdmin };
