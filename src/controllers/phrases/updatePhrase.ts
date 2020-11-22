import { getNextPhrase } from './getNextPhrase';
import { updateOneByNextStep } from '../../repositories/phrases/updateOneByNextStep';

export const updatePhraseByProgress = async (id): Promise<any> => {
  if (progress <= 6) {
    return nextRepeat.setDate(nextRepeat.getDate() + 1);
  }
  if ((progress = 7)) {
    return nextRepeat.setDate(nextRepeat.getDate() + 7);
  }
  if (progress <= 8) {
    return nextRepeat.setDate(nextRepeat.getDate() + 14);
  }
  progress++;
  const result = updateOneByNextStep(id, progress, nextRepeat);
  return result;
};
// сюда принимать id
