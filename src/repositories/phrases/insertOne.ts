import { Phrases } from '../../models/phrases';

type CreatePhraseParam = {
  creatorId: string;
  words: string;
};
export const insertOne = ({ creatorId, words }: CreatePhraseParam): Promise<any> => {
  return Phrases.insertOne({
    createdAt: new Date(),
    progress: 0,
    nextRepeat: null,
    creatorId,
    words,
  });
};
