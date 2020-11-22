import { ObjectId } from 'mongodb';
import { Users } from '../../models/users';

export const markOneLikeRemoved = async (userId: string): Promise<any> => {
  return Users.updateOne(
    { _id: new ObjectId(userId) },
    {
      $set: { removedAt: new Date() },
    },
  );
};
