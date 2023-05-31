import { ICreateClientUseCase } from "./ICreateClientUseCase"
import { IValidationService } from "../../services/validationService/IValidationService"
import { IDbRepository } from "../../repositories/DB/IDbRepository"

import ClientEntity from "../../entities/client"

export const createClientUseCase = (validationService: IValidationService, clientRepository: IDbRepository) : ICreateClientUseCase => {

  return {
    async execute (clientData) {

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