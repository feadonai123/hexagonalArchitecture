import ClientEntity from "@/domain/entities/client"
import { DbRepositoryPort } from "@/infra/repositories/dbRepository/dbRepositoryPort"

export const getClientUseCase = (clientRepository: DbRepositoryPort) => {
  return {
    async execute (idClient: string) : Promise<ClientEntity> {
      return await clientRepository.getClient(idClient)
    }
  }
}