import { validateBody, validateParams, validateQuery, validationMiddleware } from './utils';
import Joi from '@hapi/joi';

export const getUserByIdValidator = [
  validateParams(
    Joi.object({
      userId: Joi.string().length(24).required(),
    }),
  ),
  validationMiddleware,
];

export const getUsersListValidator = [
  validateQuery(
    Joi.object({
      limit: Joi.number().integer().min(0),
      offset: Joi.number().integer().min(0),
    }),
  ),
  validationMiddleware,
];

export const updateUserValidator = [
  validateParams(
    Joi.object({
      userId: Joi.string().length(24).required(),
    }),
  ),
  validateBody(
    Joi.object({
      email: Joi.string(),
    }),
  ),
  validationMiddleware,
];

export const deleteUserValidator = [
  validateParams(
    Joi.object({
      userId: Joi.string().length(24).required(),
    }),
  ),
  validationMiddleware,
];
