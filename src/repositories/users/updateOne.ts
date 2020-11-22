import { ObjectId } from 'mongodb';
import { Users } from '../../models/users';
import { UserUpdatingAttributes } from '../../types';

export const updateOne = async ({
  userId,
  user,
}: {
  userId: string;
  user: UserUpdatingAttributes;
}): Promise<any> => {
  return Users.updateOne({ _id: new ObjectId(userId) }, { $set: { email: user.email, updatedAt: new Date() } });
};
