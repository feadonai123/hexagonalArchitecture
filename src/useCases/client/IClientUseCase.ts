import ClientEntity from "../../entities/client"

export interface ICreateClientData {
  name: string,
  email: string,
  phone: string,
  cpf: string,
  birthDate: Date
}

export interface IClientUseCase {
    createClient(clientData: ICreateClientData): Promise<ClientEntity>
    getClient(idClient: string): Promise<ClientEntity>
}