import { ClientUseCasePort } from "./clientUseCasePort";
import { getClientUseCase } from "./getClientUseCase";
import { createClientUseCase } from "./createClientUseCase";
import { DbRepositoryPort } from "@/infra/repositories/dbRepository/dbRepositoryPort";
import { ValidationServicePort } from "@/infra/services/validationService/validationServicePort";

export const clientUseCase = (validationService: ValidationServicePort, clientRepository: DbRepositoryPort) : ClientUseCasePort=> {

    const getClientDriver = getClientUseCase(clientRepository)
    const createClientDriver = createClientUseCase(validationService, clientRepository)

    return {
        createClient: createClientDriver.execute,
        getClient: getClientDriver.execute
    }
}