import dotenv from 'dotenv';
import { initDb } from './helpers/db';

dotenv.config();

const port = +process.env.PORT;
const host = process.env.HOST;

initDb().then(async () => {
  console.log('Mongodb started');

  const { default: app } = await import('./app');

  app.listen(port, host, () => {
    console.log(`Server start on ${host}:${port}`);
  });
});

process.on('unhandledRejection', (err) => {
  if (err) {
    console.error(err);
  }
});

process.on('rejectionHandled', (err) => {
  if (err) {
    console.error(err);
  }
});

process.on('uncaughtException', (err) => {
  if (err) {
    console.error(err);
  }
});
