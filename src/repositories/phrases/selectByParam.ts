import { Phrases } from '../../models/phrases';
import { Phrase } from '../../controllers/phrases/types';

export const selectByParam = async (): Promise<Phrase[]> => {
  const today = new Date();
  return Phrases.find({
    $and: [
      { progress: { $ne: 9 } },
      { $or: [{ nextRepeat: { $gt: today } }, { nextRepeat: null }] },
    ],
  }).toArray();
};
