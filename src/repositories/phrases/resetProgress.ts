import { Phrases } from '../../models/phrases';

export const resetProgress = (id: string): Promise<any> => {
  return Phrases.updateOne(
    { _id: id },
    { $set: { progress: 0, updatedAt: new Date(), nextRepeat: null } },
  );
};
