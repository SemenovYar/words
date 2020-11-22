import { UserRole, ReqUser, UserWithoutPassword, UserAdminListFields } from '../../types';
import { Perms } from '../../helpers/perms';
import { UserRepository } from '../../repositories/users';
import { getSomeObjectFields } from '../../helpers/getSomeObjectFields';

export const getUsersList = async ({
  initiatorUser,
  limit,
  offset,
}: {
  initiatorUser: ReqUser;
  limit: number;
  offset: number;
}): Promise<{ items: UserWithoutPassword[]; total: number }> => {
  Perms.throwCheck(initiatorUser, UserRole.admin);

  const { items, total } = await UserRepository.selectAndCountList({ limit, offset });

  return {
    items: items.map((user) => getSomeObjectFields(user, UserAdminListFields)),
    total,
  };
};
