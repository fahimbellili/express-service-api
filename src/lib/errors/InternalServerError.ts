import HttpError from './HttpError';

class InternalServerError extends HttpError {
  constructor(message: string) {
    super(500, `${message}`);
  }
}

export default InternalServerError;
