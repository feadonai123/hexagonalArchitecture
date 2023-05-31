import { IDbRepository } from "./IDbRepository"
import PersistenceError from "../../errors/persistenceError"
import ClientEntity from "../../entities/client"

export const inMemoryRepository = (): IDbRepository => {

  const clients: ClientEntity[] = []

  return {
    async createClient(client) {
      try{
        clients.push(client)
        return clients[clients.length - 1]
      } catch (error) {
        throw new PersistenceError("Erro ao criar cliente no banco", 500)
      }
    },
    async deleteClient(id) {
      try{
        const index = clients.findIndex(client => client.id === id)
        if (index >= 0) {
          clients.splice(index, 1)
        }
      } catch (error) {
        throw new PersistenceError("Erro ao deletar cliente no banco", 500)
      }
    },
  }
}