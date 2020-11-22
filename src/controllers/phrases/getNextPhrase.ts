import HttpError from '../../helpers/httpError';
import { PhrasesRepository } from '../../repositories/phrases';
import { Phrase } from './types';
import { THERE_IS_NO_APPROPRIATE_PHRASE } from '../../helpers/errors';

const today = new Date();
const startToday = today.setHours(0, 0, 0);
const endToday = today.setHours(23, 59, 59);

const getTodayPhrase = (phrases: Phrase[]): Phrase | undefined => {
  return phrases.find(
    (el) =>
      el.nextRepeat !== null &&
      el.nextRepeat.valueOf() >= startToday &&
      el.nextRepeat.valueOf() <= endToday,
  );
};

const getNewPhrase = (phrases: Phrase[]): Phrase | undefined => {
  return phrases.find((el) => el.nextRepeat == null);
};

const getExpiredPhrase = (phrases: Phrase[]): Phrase | undefined => {
  return phrases.find((el) => el.nextRepeat !== null && el.nextRepeat.valueOf() < startToday);
};

export const getNextPhrase = async (): Promise<Phrase> => {
  const phrases = await PhrasesRepository.selectByParam();

  const firstResult = getTodayPhrase(phrases);

  if (firstResult) {
    return firstResult;
  }
  const secondResult = getNewPhrase(phrases);

  if (secondResult) {
    return secondResult;
  }
  const thirdResult = getExpiredPhrase(phrases);

  if (thirdResult) {
    await PhrasesRepository.resetProgress(thirdResult._id);
    return thirdResult;
  }

  throw new HttpError(404, THERE_IS_NO_APPROPRIATE_PHRASE);
};
