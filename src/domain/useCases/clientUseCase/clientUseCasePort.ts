import ClientEntity from "@/domain/entities/client"

export interface ICreateClientData {
  name: string,
  email: string,
  phone: string,
  cpf: string,
  birthDate: Date
}

export interface ClientUseCasePort {
    createClient(clientData: ICreateClientData): Promise<ClientEntity>
    getClient(idClient: string): Promise<ClientEntity>
}