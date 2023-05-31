import { Request, Response } from 'express';
import { IClientUseCase } from '../../../useCases/client/IClientUseCase';

interface ICreateClientController {
  listenForRequest(req: Request, res: Response): Promise<void>
}

export const createClientController = (clientUseCase: IClientUseCase) : ICreateClientController =>{
  
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