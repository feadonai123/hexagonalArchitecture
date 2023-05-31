import { Express, Router } from "express"
import { createClientController } from "./routes/createClientController"
import { ICreateClientUseCase } from "../../useCases/createClient/ICreateClientUseCase"

export const clientController = (app: Express, expressRouter: Router, createClientUseCase: ICreateClientUseCase) => {

  const routes = [
    expressRouter.post("/", createClientController(createClientUseCase).listenForRequest)
  ]

  return {
    listenForRoutes(){
      routes.forEach(route => app.use("/client", route))
    }
  }
}