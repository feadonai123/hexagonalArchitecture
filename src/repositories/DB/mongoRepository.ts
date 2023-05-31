import { IDbRepository } from "./IDbRepository"
import { PrismaClient } from '@prisma/client'
import PersistenceError from "../../errors/persistenceError"
import ClientEntity from "../../entities/client"

export const mongoRepository = (prisma: PrismaClient): IDbRepository => {

  return {
    async createClient(client) {
      try{
        const clientDB = await prisma.client.create({
          data: {
            name: client.name,
            email: client.email,
            phone: client.phone,
            cpf: client.cpf,
            birthDate: client.birthDate
          }
        })

        const newClient = new ClientEntity(clientDB.name, clientDB.email, clientDB.phone, clientDB.cpf, clientDB.birthDate, clientDB.id)
        return newClient
      } catch (error) {
        throw new PersistenceError("Erro ao criar cliente no banco"+ error, 500)
      }
    },
    async deleteClient(id) {
      try{
        await prisma.client.delete({
          where: {
            id: id
          }
        })
      } catch (error) {
        throw new PersistenceError("Erro ao deletar cliente no banco", 500);
      }
    }
  }
}