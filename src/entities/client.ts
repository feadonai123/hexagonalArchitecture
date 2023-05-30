export default class ClientEntity{

  constructor(
    readonly name: string,
    readonly email: string,
    readonly phone: string,
    readonly cpf: string,
    readonly birthDate: Date
  ) {}

}