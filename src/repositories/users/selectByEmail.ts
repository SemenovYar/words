import { Users } from '../../models/users';
import { User } from '../../types';

export const selectByEmail = async (email: string): Promise<User> => {
  return Users.findOne({ email });
};
