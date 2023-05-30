import ClientEntity from "../entities/client"

export interface IClientRepository {
  create(client: ClientEntity): Promise<void>
}