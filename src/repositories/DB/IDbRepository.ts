import ClientEntity from "../../entities/client"

export interface IDbRepository {
  createClient(client: ClientEntity): Promise<ClientEntity>
  deleteClient(id: string): Promise<void>
}