import { Users } from '../../models/users';
import { User } from '../../types';

export const selectAndCountList = async ({
  limit,
  offset,
}: {
  limit: number;
  offset: number;
}): Promise<{ items: User[]; total: number }> => {
  const rows = await Users.find({
    $or: [{ removedAt: { $exists: false } }, { removedAt: null }],
  })
    .skip(offset)
    .limit(limit)
    .toArray();
  const count = await Users.countDocuments({
    $or: [{ removedAt: { $exists: false } }, { removedAt: null }],
  });
  return {
    items: rows,
    total: count,
  };
};
