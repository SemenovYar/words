import { MongoClient, Db } from 'mongodb';

// Connection URL
const url = 'mongodb://localhost:27017/words';

export let db: Db | undefined;

export const initDb = async (): Promise<void> => {
  db = (
    await MongoClient.connect(url, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    })
  ).db();
};
