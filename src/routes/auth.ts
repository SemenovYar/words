import { Router, NextFunction, Request, Response } from 'express';
import usersController from '../controllers/users';
import { signUpValidator, loginValidator } from '../helpers/validators';
import authController from '../controllers/auth';

const router = Router();

// POST
router.post(
  '/sign-up',
  signUpValidator,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { email, password } = req.body;

      const result = await usersController.createUser({
        email,
        password,
      });

      return res.status(200).json(result);
    } catch (err) {
      return next(err);
    }
  },
);

router.post('/login', loginValidator, async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { login, password } = req.body;

    const result = await authController.loginUser({ login, password });

    return res.status(200).json(result);
  } catch (err) {
    return next(err);
  }
});

export default router;
