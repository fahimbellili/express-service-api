import mongoose from 'mongoose';
// import Debug from 'debug';

import { dbConnectSuccessful, dbConnectNotSuccessful } from '../lib/wording/wording';

// // const debug = Debug('express-ts-service-api:server');

class mongoClient {
  constructor() {
    this.initDb();
  }

  private initDb = async () => {
    const { MONGO_USER, MONGO_PASSWORD, MONGO_HOST } = process.env;
    const mongoUri = `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}${MONGO_HOST}`;

    try {
      await mongoose.connect(mongoUri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
      });
      console.log(dbConnectSuccessful);
    } catch (err) {
      console.log(dbConnectNotSuccessful, '\n', err.stack);
    }
  };
}

export default mongoClient;
