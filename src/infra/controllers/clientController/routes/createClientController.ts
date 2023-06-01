import { Request, Response } from 'express';
import { ClientUseCasePort } from '@/domain/useCases/clientUseCase/clientUseCasePort';
import { ICreateClientData } from '@/domain/useCases/clientUseCase/clientUseCasePort';

interface ICreateClientController {
  listenForRequest(req: Request, res: Response): Promise<void>
}
interface DTO {
  name: string
  email: string
  phone: string
  cpf: string
  birthDate: string
}

export const createClientController = (clientUseCase: ClientUseCasePort) : ICreateClientController =>{
  
  return {
    async listenForRequest (req: Request, res: Response): Promise<void> {
      const requestData : DTO = req.body;
      const clientCreate : ICreateClientData= {
        name: requestData.name,
        email: requestData.email,
        phone: requestData.phone,
        cpf: requestData.cpf,
        birthDate: new Date(requestData.birthDate)
      }

      const client = await clientUseCase.createClient(clientCreate)
    
      res.status(201).json({
        clientId: client.id
      })
    }
  }
}