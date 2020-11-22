import HttpError from '../../helpers/httpError';
import { PhrasesRepository } from '../../repositories/phrases';

export const getPhrases = async (): Promise<any> => {
  const phrases = await PhrasesRepository.selectAll();

  if (!phrases) {
    throw new HttpError(404, 'Prases not found');
  }

  return phrases;
};
