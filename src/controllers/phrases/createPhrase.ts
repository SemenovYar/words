import { PhrasesRepository } from '../../repositories/phrases';

type CreatePhraseParam = {
  creatorId: string;
  words: string;
};

export const createPhrase = async ({ creatorId, words }: CreatePhraseParam): Promise<any> => {
  return PhrasesRepository.insertOne({ creatorId, words });
};
