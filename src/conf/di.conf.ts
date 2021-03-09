import * as awilix from 'awilix';

import mongoClient from './db.conf';

import Town from '../lib/models/Town';
import TownController from '../lib/controllers/TownController';
import TownService from '../lib/services/TownService';
import ParkingController from '../lib/controllers/ParkingController';

export const container = awilix.createContainer({
  injectionMode: awilix.InjectionMode.PROXY,
});

export function setup(): void {
  container.register({
    // Database
    mongoClient: awilix.asClass(mongoClient),

    // Models
    townModel: awilix.asValue(Town),

    // Controllers
    townController: awilix.asClass(TownController),
    parkingController: awilix.asClass(ParkingController),

    // Services
    townService: awilix.asClass(TownService),
  });
}
