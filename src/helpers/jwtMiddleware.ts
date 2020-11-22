import jwt from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';
import { ReqUser } from '../types';

export const jwtMiddleware = (req: Request, res: Response, next: NextFunction): void => {
  const secret = process.env.JWT_SECRET;
  const token = req.headers.authorization;

  if (!token) {
    return next();
  }

  try {
    const user = jwt.verify(token, secret);

    if (user) {
      // @ts-ignore
      req.user = user;
    }

    return next();
  } catch (err) {
    return next();
  }
};

export const getUserFromReq = (req: Request): ReqUser => {
  // @ts-ignore
  return req.user;
};
