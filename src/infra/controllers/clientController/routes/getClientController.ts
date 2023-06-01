import { Request, Response } from 'express';
import { ClientUseCasePort } from '@/domain/useCases/clientUseCase/clientUseCasePort';

interface IGetClientController {
  listenForRequest(req: Request, res: Response): Promise<void>
}

export const getClientController = (clientUseCase: ClientUseCasePort) : IGetClientController =>{
  
  return {
    async listenForRequest (req: Request, res: Response): Promise<void> {
      const id = req.params.id;
      const client = await clientUseCase.getClient(id)
    
      res.status(200).json(client)
    }
  }
}