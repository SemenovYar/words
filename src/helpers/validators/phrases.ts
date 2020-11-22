import Joi from '@hapi/joi';
import { validateBody, validationMiddleware, validateParams } from './utils';

export const createPhraseValidator = [
  validateBody(
    Joi.object({
      creatorId: Joi.string(),
      words: Joi.string().required(),
    }),
  ),
  validationMiddleware,
];

export const updatePhraseByProgressValidator = [
  validateParams(
    Joi.object({
      phraseId: Joi.string().length(24).required(),
    }),
  ),
  validationMiddleware,
];
