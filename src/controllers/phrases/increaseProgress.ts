import { findOneById } from '../../repositories/phrases/findOneById';
import { PhrasesRepository } from '../../repositories/phrases';

const dayMs = 1000 * 60 * 60 * 24;

const nextRepeatOffSetMap: Record<number, number> = {
  1: dayMs,
  2: dayMs,
  3: dayMs,
  4: dayMs,
  5: dayMs,
  6: dayMs,
  7: dayMs * 7,
  8: dayMs * 14,
};

export const increaseProgress = async (phraseId: string): Promise<any> => {
  const phrase = await findOneById(phraseId);
  const { progress } = phrase;

  const newProgress = progress + 1;

  const nextRepeatOffSet = nextRepeatOffSetMap[progress];
  const newNextRepeat = nextRepeatOffSet ? new Date(Date.now() + nextRepeatOffSet) : null;

  return PhrasesRepository.updateOneById({
    nextRepeat: newNextRepeat,
    phraseId,
    progress: newProgress,
  });
};
