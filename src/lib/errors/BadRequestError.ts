import HttpError from './HttpError';

class BadRequestError extends HttpError {
  constructor(error: string) {
    super(400, `${error}`);
  }
}

export default BadRequestError;
