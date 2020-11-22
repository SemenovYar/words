import { ObjectId } from 'mongodb';
import { Phrases } from '../../models/phrases';

export const updateOneById = async ({
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
