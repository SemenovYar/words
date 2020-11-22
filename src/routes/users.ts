import { Router, NextFunction, Request, Response } from 'express';
import usersController from '../controllers/users';
import { PermsMiddlewares } from '../helpers/perms';
import { getUserFromReq } from '../helpers/jwtMiddleware';
import config from '../configs';
import {
  deleteUserValidator,
  getUserByIdValidator,
  getUsersListValidator,
  updateUserValidator,
} from '../helpers/validators';

const router = Router();

// GET
router.get(
  '/:userId',
  PermsMiddlewares.isAuthorizedUser,
  getUserByIdValidator,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const initiatorUser = getUserFromReq(req);
      const userId = req.params.userId.length === 0 ? initiatorUser._id : req.params.userId;

      const result = await usersController.getUserById({
        initiatorUser,
        userId,
      });

      return res.status(200).json(result);
    } catch (err) {
      return next(err);
    }
  },
);

router.get(
  '/',
  PermsMiddlewares.isUserAdmin,
  getUsersListValidator,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const initiatorUser = getUserFromReq(req);
      const { query } = req;
      const limit = +query.limit || config.general.defaultLimit;
      const offset = +query.offset || config.general.defaultOffset;

      const result = await usersController.getUsersList({
        initiatorUser,
        limit,
        offset,
      });

      return res.status(200).json(result);
    } catch (err) {
      return next(err);
    }
  },
);

// PUT
router.put(
  '/:userId',
  PermsMiddlewares.isAuthorizedUser,
  updateUserValidator,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const initiatorUser = getUserFromReq(req);
      const { userId } = req.params;
      const updatingUser = req.body;

      const result = await usersController.updateUser({
        initiatorUser,
        userId,
        updatingUser,
      });

      return res.status(200).json(result);
    } catch (err) {
      return next(err);
    }
  },
);

// DELETE
router.delete(
  '/:userId',
  PermsMiddlewares.isUserAdmin,
  deleteUserValidator,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { userId } = req.params;

      const result = await usersController.deleteUser(userId);

      return res.status(200).json(result);
    } catch (err) {
      return next(err);
    }
  },
);

export default router;
