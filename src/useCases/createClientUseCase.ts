import { ICreateClientUseCase } from "../ports/ICreateClientUseCase"
import { IValidationService } from "../ports/IValidationService"
import { IClientRepository } from "../ports/IClientRepository"

import ClientEntity from "../entities/client"

export const createClientUseCase = (validationService: IValidationService, clientRepository: IClientRepository) : ICreateClientUseCase => {

  return {
    async execute (clientData): Promise<void> {
      validationService.validateName(clientData.name)
      validationService.validateEmail(clientData.email)
      validationService.validatePhone(clientData.phone)
      validationService.validateCpf(clientData.cpf)
      validationService.validateBirthDate(clientData.birthDate)

      const client = new ClientEntity(clientData.name, clientData.email, clientData.phone, clientData.cpf, clientData.birthDate)
      clientRepository.create(client)
    }
  }
}