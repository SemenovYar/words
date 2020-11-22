import { ObjectId } from 'mongodb';
import { Phrases } from '../../models/phrases';
import { Phrase } from '../../controllers/phrases/types';

export const findOneById = async (id: string): Promise<Phrase | undefined> => {
  return Phrases.findOne({ _id: new ObjectId(id) });
};
