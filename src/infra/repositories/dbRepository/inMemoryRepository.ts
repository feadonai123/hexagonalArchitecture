import ClientEntity from "@/domain/entities/client"
import { DbRepositoryPort } from "./dbRepositoryPort"
import DbError from "./dbRepositoryError"

export const inMemoryRepository = (): DbRepositoryPort => {

  const clients: ClientEntity[] = []

  return {
    async getClient(id) {
      try{
        const client = clients.find(client => client.id === id)
        if(!client) throw new DbError("Cliente não encontrado", 404)
        return client
      } catch (error) {
        throw new DbError("Erro ao buscar cliente no banco", 500)
      }
    },
    async createClient(client) {
      try{
        clients.push(client)
        return clients[clients.length - 1]
      } catch (error) {
        throw new DbError("Erro ao criar cliente no banco", 500)
      }
    },
    async deleteClient(id) {
      try{
        const index = clients.findIndex(client => client.id === id)
        if (index >= 0) {
          clients.splice(index, 1)
        }
      } catch (error) {
        throw new DbError("Erro ao deletar cliente no banco", 500)
      }
    },
  }
}