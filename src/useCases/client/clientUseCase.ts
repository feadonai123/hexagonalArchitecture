import { IClientUseCase } from "./IClientUseCase";
import { getClientUseCase } from "./getClientUseCase";
import { createClientUseCase } from "./createClientUseCase";
import { IDbRepository } from "../../repositories/DbRepository/IDbRepository";
import { IValidationService } from "../../services/validationService/IValidationService";

export const clientUseCase = (validationService: IValidationService, clientRepository: IDbRepository) : IClientUseCase=> {

    const getClientDriver = getClientUseCase(clientRepository)
    const createClientDriver = createClientUseCase(validationService, clientRepository)

    return {
        createClient: createClientDriver.execute,
        getClient: getClientDriver.execute
    }
}