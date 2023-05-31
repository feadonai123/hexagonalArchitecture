import ClientEntity from "../../entities/client"
import { IDbRepository } from "../../repositories/DbRepository/IDbRepository"

export const getClientUseCase = (clientRepository: IDbRepository) => {
  return {
    async execute (idClient: string) : Promise<ClientEntity> {
      return await clientRepository.getClient(idClient)
    }
  }
}