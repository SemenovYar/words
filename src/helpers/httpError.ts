import { UNAUTHORIZED, FORBIDDEN } from './errors';

class HttpError extends Error {
  status: number;

  message: string;

  errors: any;

  constructor(status: number, message: string, errors?: any) {
    super(message);
    this.status = status;
    this.message = message;
    this.errors = errors;
  }
}

export default HttpError;

export class UnauthorizedHttpError extends HttpError {
  constructor(message = UNAUTHORIZED, errors?: any) {
    super(401, message);
    this.status = 401;
    this.message = message;
    this.errors = errors;
  }
}

export class ForbiddenHttpError extends HttpError {
  constructor(message = FORBIDDEN, errors?: any) {
    super(403, message);
    this.status = 403;
    this.message = message;
    this.errors = errors;
  }
}
