import InfraError from "@/infra/infraError";

export default class DbError extends InfraError {

  constructor(
    readonly message: string,
    readonly statusCode: number = 400
  ) {
    super(message, statusCode);
  }
}