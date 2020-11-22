import { ObjectId } from 'mongodb';
import { Users } from '../../models/users';
import { User } from '../../types';

export const selectById = async (userId: string): Promise<User> => {
  return Users.findOne({ _id: new ObjectId(userId) });
};
