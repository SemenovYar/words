import { Router, NextFunction, Request, Response } from 'express';
import phrasesController from '../controllers/phrases';
import { createPhraseValidator, updatePhraseByProgressValidator } from '../helpers/validators';

const router = Router();

// POST
router.post('/', createPhraseValidator, async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { words } = req.body;
    // todo
    const creatorId = 'user1';

    const result = await phrasesController.createPhrase({ creatorId, words });

    return res.status(200).json(result);
  } catch (err) {
    return next(err);
  }
});

// PUT
router.put(
  '/progress/:phraseId',
  updatePhraseByProgressValidator,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { phraseId } = req.params;

      const result = await phrasesController.increaseProgress(phraseId);

      return res.status(200).json(result);
    } catch (err) {
      return next(err);
    }
  },
);

// GET
router.get('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await phrasesController.getPhrases();

    return res.status(200).json(result);
  } catch (err) {
    next(err);
  }
});

router.get('/next', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await phrasesController.getNextPhrase();

    return res.status(200).json(result);
  } catch (err) {
    next(err);
  }
});

export default router;
