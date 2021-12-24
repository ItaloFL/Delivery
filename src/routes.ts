 
import { Router } from "express";
import { AuthenticateClientController } from "./modules/account/authenticateClient/AuthenticateClientController";
import { CreateClientController } from "./modules/clients/useCases/createClient/CreateClientContrller";

const routes = Router()

const createClientController = new CreateClientController
const authenticateClientController = new AuthenticateClientController

routes.post("/client/",  createClientController.handle)

routes.post("/login", authenticateClientController.handle)

export { routes }