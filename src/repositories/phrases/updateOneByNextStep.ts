import { Phrases } from '../../models/phrases';

export const updateOneByNextStep = (id, progress, nextRepeat): Promise<any> => {
  if (progress <= 6) {
    return nextRepeat.setDate(nextRepeat.getDate() + 1);
  }
  if ((progress = 7)) {
    return nextRepeat.setDate(nextRepeat.getDate() + 7);
  }
  if (progress <= 8) {
    return nextRepeat.setDate(nextRepeat.getDate() + 14);
  }
  progress++;
  return Phrases.updateOne({ _id: id }, { $set: { progress, updatedAt: new Date(), nextRepeat: nextRepeat } });
};
