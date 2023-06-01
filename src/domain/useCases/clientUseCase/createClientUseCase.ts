import { ValidationServicePort } from "@/infra/services/validationService/validationServicePort"
import { DbRepositoryPort } from "@/infra/repositories/dbRepository/dbRepositoryPort"
import { ICreateClientData } from "./clientUseCasePort"
import ClientEntity from "@/domain/entities/client"

export const createClientUseCase = (validationService: ValidationServicePort, clientRepository: DbRepositoryPort) => {

  return {
    async execute (clientData: ICreateClientData) {

      validationService.validateName(clientData.name)
      validationService.validateEmail(clientData.email)
      validationService.validatePhone(clientData.phone)
      validationService.validateCpf(clientData.cpf)
      validationService.validateBirthDate(clientData.birthDate)

      const client = new ClientEntity(clientData.name, clientData.email, clientData.phone, clientData.cpf, clientData.birthDate)
      return await clientRepository.createClient(client)
    }
  }
}