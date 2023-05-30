export interface ICreateClientData {
  name: string,
  email: string,
  phone: string,
  cpf: string,
  birthDate: Date
}

export interface ICreateClientUseCase {
  execute(clientData: ICreateClientData): Promise<void>
}