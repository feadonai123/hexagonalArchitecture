import express, { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { clientController } from './controllers/client/clientController';
import { clientUseCase } from './useCases/client/clientUseCase';
import { mongoRepository } from './repositories/DbRepository/mongoRepository';
import { inMemoryRepository } from './repositories/DbRepository/inMemoryRepository';
import { validationService } from './services/validationService/validationService';
import AppError from './errors/appError';

export const appFactory = ()=>{
  
  const app = express();
  app.use(express.json());
  
  app.get('/', (req: Request, res: Response) => {
    res.status(200).end();
  });

  const router = express.Router();
  
  const prisma = new PrismaClient();
  const mongoRepositoryInstance = mongoRepository(prisma);
  const inMemoryRepositoryInstance = inMemoryRepository();

  const createClientUseCase = clientUseCase(validationService, mongoRepositoryInstance);

  clientController(app, router, createClientUseCase).listenForRoutes();

  app.use((err: Error, req: Request, res: Response, next: Function) => {
    if(err instanceof AppError){
      return res.status(err.statusCode).send(err.message);
    }
    return res.status(500).send("Erro interno no servidor");
  });

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