import { User } from '../../types';
import { Users } from '../../models/users';

export const selectByLogin = async ({ login }: { login: string }): Promise<User> => {
  return Users.findOne({ email: login });
};
