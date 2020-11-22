import { insertOne } from './insertOne';
import { resetProgress } from './resetProgress';
import { selectByParam } from './selectByParam';
import { selectAll } from './selectAll';
import { findOneById } from './findOneById';
import { updateOneById } from './updateOneById';

export const PhrasesRepository = {
  insertOne,
  resetProgress,
  updateOneById,
  selectByParam,
  selectAll,
  findOneById,
};
