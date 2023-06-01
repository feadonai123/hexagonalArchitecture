import { Request, Response } from 'express';
import { ClientUseCasePort } from '@/domain/useCases/clientUseCase/clientUseCasePort';

interface ICreateClientController {
  listenForRequest(req: Request, res: Response): Promise<void>
}

export const createClientController = (clientUseCase: ClientUseCasePort) : ICreateClientController =>{
  
  return {
    async listenForRequest (req: Request, res: Response): Promise<void> {
      const {
        name,
        email,
        phone,
        cpf,
        birthDate
      } = req.body;
    
      const client = await clientUseCase.createClient({
        name,
        email,
        phone,
        cpf,
        birthDate: new Date(birthDate)
      })
    
      res.status(201).json({
        clientId: client.id
      })
    }
  }
}