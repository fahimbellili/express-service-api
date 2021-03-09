import express from 'express';
import httpCors from 'cors';
import * as bodyParser from 'body-parser';
import * as path from 'path';
// import * as logger from 'logger';
import cookieParser from 'cookie-parser';
// import Debug from 'debug';
// import * as mongooseClient from 'mongoose';
// import mongoClient from '../conf/db.conf';
import IController from './interfaces/IController';

import { setup } from '../conf/di.conf';

setup();

// const debug = Debug('express-ts-service-api:server');

class App {
  public app: express.Application;
  public mongoClient;

  constructor({ mongoClient }: any, controllers: IController[]) {
    this.app = express();
    this.mongoClient = mongoClient;
    // this.getControllers = getControllers();
    // this.indexController = IndexController;

    this.connectToDatabase(mongoClient);
    // this.setMiddlewares();
    this.initializeMiddlewares();
    this.initializeControllers(controllers);
    // this.initializeErrorHandling();
  }

  public getServer(): unknown {
    return this.app;
  }

  private connectToDatabase(mongoClient: any) {
    return mongoClient;
  }

  // private setMiddlewares() {
  //   this.app.set('views', path.join(__dirname, '../public/views'));
  //   this.app.set('view engine', 'ejs');
  // }

  private initializeMiddlewares() {
    this.app.disable('x-powered-by');
    this.app.use(httpCors());
    this.app.use(bodyParser.json());
    // this.app.use(logger('dev'));
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(cookieParser());
    this.app.use(express.static(path.join(__dirname, '../public')));
  }

  private initializeControllers(controllers: IController[]) {
    controllers.forEach((controller) => {
      this.app.use('/', controller.router);
    });
  }

  public listen(): void {
    this.app.listen(process.env.PORT, () => {
      console.log(`App listening on the port ${process.env.PORT}`);
    });

    const server = this.app.listen();

    // shut down server
    function shutdown() {
      server.close(function onServerClosed(err) {
        if (err) {
          console.error(err);
          process.exitCode = 1;
        }
        process.exit();
      });
    }

    // quit on ctrl-c when running docker in terminal
    process.on('SIGINT', function onSigint() {
      console.info('Got SIGINT (aka ctrl-c in docker). Graceful shutdown ', new Date().toISOString());
      shutdown();
    });

    // quit properly on docker stop
    process.on('SIGTERM', function onSigterm() {
      console.info('Got SIGTERM (docker container stop). Graceful shutdown ', new Date().toISOString());
      shutdown();
    });
  }
}

export default App;
