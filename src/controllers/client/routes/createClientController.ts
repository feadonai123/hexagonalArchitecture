import { Request, Response } from 'express';
import { ICreateClientUseCase } from '../../../useCases/createClient/ICreateClientUseCase';

interface ICreateClientController {
  listenForRequest(req: Request, res: Response): Promise<void>
}

export const createClientController = (createClientUseCase: ICreateClientUseCase) : ICreateClientController =>{
  
  return {
    async listenForRequest (req: Request, res: Response): Promise<void> {
      const {
        name,
        email,
        phone,
        cpf,
        birthDate
      } = req.body;
    
      const client = await createClientUseCase.execute({
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