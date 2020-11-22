import { selectById } from './selectById';
import { insertOne } from './insertOne';
import { selectByEmail } from './selectByEmail';
import { updateOne } from './updateOne';
import { markOneLikeRemoved } from './markOneLikeRemoved';
import { selectByResetCode } from './selectByResetCode';
import { selectAndCountList } from './selectAndCountList';
import { selectByLogin } from './selectByLogin';

export const UserRepository = {
  selectById,
  insertOne,
  selectByEmail,
  selectByResetCode,
  updateOne,
  markOneLikeRemoved,
  selectAndCountList,
  selectByLogin,
};
