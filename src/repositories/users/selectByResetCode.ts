import { Users } from '../../models/users';
import { User } from '../../types';

export const selectByResetCode = async (resetCode: string): Promise<User> => {
  return Users.findOne({ resetCode });
};
