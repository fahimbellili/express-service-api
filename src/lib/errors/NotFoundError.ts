import HttpError from './HttpError';

class NotFoundError extends HttpError {
  constructor() {
    super(404, `Not found`);
  }
}

export default NotFoundError;
