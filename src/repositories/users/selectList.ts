import { Users } from '../../models/users';
import { User } from '../../types';

export const selectList = async ({
  limit = 0,
  offset = 0,
}: {
  limit?: number;
  offset?: number;
}): Promise<User[]> => {
  return Users.find().skip(offset).limit(limit).toArray();
};
