import { Phrases } from '../../models/phrases';
import { ObjectId } from 'mongodb';

export const updateOneByProgress = async ({
  nextRepeat,
  phraseId,
  progress,
}: {
  nextRepeat: Date;
  phraseId: string;
  progress: number;
}): Promise<any> => {
  return Phrases.updateOne(
    { _id: new ObjectId(phraseId) },
    { $set: { progress, nextRepeat, updatedAt: new Date() } },
  );
};
