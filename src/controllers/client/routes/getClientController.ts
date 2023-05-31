import { Request, Response } from 'express';
import { IClientUseCase } from '../../../useCases/client/IClientUseCase';

interface IGetClientController {
  listenForRequest(req: Request, res: Response): Promise<void>
}

export const getClientController = (clientUseCase: IClientUseCase) : IGetClientController =>{
  
  return {
    async listenForRequest (req: Request, res: Response): Promise<void> {
      const id = req.params.id;
      const client = await clientUseCase.getClient(id)
    
      res.status(200).json(client)
    }
  }
}