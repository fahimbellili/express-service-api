import 'dotenv/config';
// import os from 'os';
// import cluster from 'cluster';

import App from './App';
import { container } from '../conf/di.conf';
import IController from './interfaces/IController';

const mongoClient: unknown = container.resolve('mongoClient');
const townController: IController = container.resolve('townController');
const parkingController: IController = container.resolve('parkingController');

const app = new App(mongoClient, [townController, parkingController]);

// const numCPUs = os.cpus().length;
// const workers: unknown[] = [];

app.listen();

// function spawProcess() {
//   const worker = cluster.fork();
//   workers[worker.process.pid] = worker;
//   return worker;
// }

// if (cluster.isMaster) {
//   console.log(`Master cluster setting up ${numCPUs} workers...`);

//   for (let i = 0; i < numCPUs; i++) {
//     spawProcess();
//   }

//   cluster.on('exit', function (worker) {
//     console.log(`worker ${worker.process.pid} died. spawning a new process...`);
//     delete workers[worker.process.pid];
//     spawProcess();
//   });
// } else {
//   app.listen();
// }
