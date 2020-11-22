import Joi from '@hapi/joi';
import { validateBody, validationMiddleware } from './utils';

export const signUpValidator = [
  validateBody(
    Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    }),
  ),
  validationMiddleware,
];

export const loginValidator = [
  validateBody(
    Joi.object({
      login: Joi.string().required(),
      password: Joi.string().required(),
    }),
  ),
  validationMiddleware,
];
