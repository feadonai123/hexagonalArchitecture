export default class AppError {

  constructor(
    readonly message: string,
    readonly statusCode: number = 400
  ) {}

  getMessage() {
    return this.message;
  }

  getStatusCode() {
    return this.statusCode;
  }
}