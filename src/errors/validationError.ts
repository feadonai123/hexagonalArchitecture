import AppError from "./appError";

export default class ValidationError extends AppError {

  constructor(
    readonly message: string,
    readonly statusCode: number = 400
  ) {
    super(message, statusCode);
  }
}