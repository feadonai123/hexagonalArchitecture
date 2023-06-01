import ClientEntity from "@/domain/entities/client"

export interface DbRepositoryPort {
  createClient(client: ClientEntity): Promise<ClientEntity>
  deleteClient(id: string): Promise<void>
  getClient(id: string): Promise<ClientEntity>
}