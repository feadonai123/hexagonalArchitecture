import { Request, Response } from 'express';
import { ICreateClientUseCase } from '../../../ports/ICreateClientUseCase';

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
    
      createClientUseCase.execute({
        name,
        email,
        phone,
        cpf,
        birthDate
      })
    
      res.status(201).send("Cliente criado com sucesso")
    }
  }
}