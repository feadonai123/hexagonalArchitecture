import { Express, Router } from "express"
import { createClientController } from "./routes/createClientController"
import { getClientController } from "./routes/getClientController"
import { ClientUseCasePort } from "@/domain/useCases/clientUseCase/clientUseCasePort"

export const clientController = (app: Express, expressRouter: Router, clientUseCase: ClientUseCasePort) => {

  const createClientDriver = createClientController(clientUseCase)
  const getClientDriver = getClientController(clientUseCase)

  const routes = [
    expressRouter.post("/", createClientDriver.listenForRequest),
    expressRouter.get("/:id", getClientDriver.listenForRequest)
  ]

  return {
    listenForRoutes(){
      routes.forEach(route => app.use("/client", route))
    }
  }
}