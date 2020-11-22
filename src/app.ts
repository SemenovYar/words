import express, { Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import HttpError from './helpers/httpError';
import routes from './routes';
import { jwtMiddleware } from './helpers/jwtMiddleware';
import { INTERNAL_SERVER_ERROR, PAGE_NOT_FOUND } from './helpers/errors';

// Create Express server
const app = express();

app.use(cors({ origin: '*' }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(jwtMiddleware);

app.use('/auth', routes.authRoutes);

app.use('/phrases', routes.phrasesRoutes);
app.use('/users', routes.userRoutes);

// 404
app.use((req: Request, res: Response) => {
  return res.status(404).json({
    message: PAGE_NOT_FOUND,
  });
});

// Express error handling
// eslint-disable-next-line
app.use((err: Error | HttpError, req: Request, res: Response, _: NextFunction) => {
  if (err instanceof HttpError) {
    return res.status(err.status).json({ ...err, message: err.message });
  }

  console.log('Internal server error', err);

  return res.status(500).json({
    message: INTERNAL_SERVER_ERROR,
  });
});

export default app;
