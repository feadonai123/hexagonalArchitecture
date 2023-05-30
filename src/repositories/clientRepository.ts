import { IClientRepository } from "../ports/IClientRepository"

export const clientRepository = (): IClientRepository => {

  return {
    async create(client): Promise<void> {

    }
  }
}