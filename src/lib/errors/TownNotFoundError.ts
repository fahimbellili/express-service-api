import HttpError from './HttpError';

class TownNotFoundError extends HttpError {
  constructor(townName: string) {
    super(404, `Town with name : ${townName}, not found`);
  }
}

export default TownNotFoundError;
