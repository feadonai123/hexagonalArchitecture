import express, { Request, Response } from 'express';
import { clientController } from './controllers/client/clientController';
import { createClientUseCase } from './useCases/createClientUseCase';
import { clientRepository } from './repositories/clientRepository';
import { validationService } from './services/validationService';

export const appFactory = ()=>{
  
  const app = express();
  app.use(express.json());
  
  app.get('/', (req: Request, res: Response) => {
    res.status(200).end();
  });

  const router = express.Router();
  const clientRepositoryInstance = clientRepository();
  const createClientUseCaseInstance = createClientUseCase(validationService, clientRepositoryInstance);
  clientController(app, router, createClientUseCaseInstance).listenForRoutes();

  return {
    start (portNumber: number) {
      app.listen(portNumber, () => {
        console.log(`Servidor rodando na porta ${portNumber}`);
      });
    },
    getApp(){
      return app;
    }
  }
}