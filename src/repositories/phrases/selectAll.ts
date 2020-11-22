import { Phrases } from '../../models/phrases';

export const selectAll = async (): Promise<any> => {
  return Phrases.find({}).toArray();
};
