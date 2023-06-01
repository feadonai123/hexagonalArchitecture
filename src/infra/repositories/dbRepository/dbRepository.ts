import { PrismaClient } from '@prisma/client'
import ClientEntity from "@/domain/entities/client"
import { DbRepositoryPort } from "./dbRepositoryPort"
import DbError from './dbRepositoryError'

export const dbRepository = (prisma: PrismaClient): DbRepositoryPort => {

  return {
    async getClient(id) {
      try{
        const clientDB = await prisma.client.findUnique({
          where: {
            id: id
          }
        })

        if(!clientDB) throw new DbError("Cliente não encontrado", 404)
        const client = new ClientEntity(clientDB.name, clientDB.email, clientDB.phone, clientDB.cpf, clientDB.birthDate, clientDB.id)
        return client
      } catch (error) {
        throw new DbError("Erro ao buscar cliente no banco", 500)
      }
    },
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
        throw new DbError("Erro ao criar cliente no banco", 500)
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
        throw new DbError("Erro ao deletar cliente no banco", 500);
      }
    }
  }
}