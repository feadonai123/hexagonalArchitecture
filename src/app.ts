import express, { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { clientController } from './infra/controllers/clientController/clientController';
import { clientUseCase } from './domain/useCases/clientUseCase/clientUseCase';
import { dbRepository } from './infra/repositories/dbRepository/dbRepository';
import { inMemoryRepository } from './infra/repositories/dbRepository/inMemoryRepository';
import { validationService } from './infra/services/validationService/validationService';
import InfraError from './infra/infraError';
import DomainError from './domain/domainError';

const router = express.Router();
const prisma = new PrismaClient();

const dbRepositoryInstance = dbRepository(prisma);
const inMemoryRepositoryInstance = inMemoryRepository();
const createClientUseCase = clientUseCase(validationService, dbRepositoryInstance);

export const appFactory = ()=>{
  
  const app = express();
  app.use(express.json());

  app.get('/', (req: Request, res: Response) => {
    res.status(200).end();
  });

  clientController(app, router, createClientUseCase).listenForRoutes();

  app.use((err: Error, req: Request, res: Response, next: Function) => {
    if(err instanceof InfraError){
      return res.status(err.statusCode).send(err.message);
    } else if(err instanceof DomainError){
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