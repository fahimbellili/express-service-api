import HttpError from './HttpError';

class TownAlredyExistsError extends HttpError {
  constructor(townName: string) {
    super(400, `Town with name : ${townName}, alredy exists`);
  }
}

export default TownAlredyExistsError;
