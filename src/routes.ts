 
import { Router } from "express";
import { AuthenticateClientController } from "./modules/account/authenticateClient/AuthenticateClientController";
import { AuthenticateDeliverymanController } from "./modules/account/authenticateDeliveryman/AuthenticateDeliverymanController";
import { CreateClientController } from "./modules/clients/useCases/createClient/CreateClientContrller";
import { CreateDeliverymanController } from "./modules/deliveryman/useCases/createDeliveryman/CreateDeliverymanController";

const routes = Router()

const createClientController = new CreateClientController
const authenticateClientController = new AuthenticateClientController
const createDeliverymanController = new CreateDeliverymanController
const authenticareDeliverymanController = new AuthenticateDeliverymanController

routes.post("/client/",  createClientController.handle)
routes.post("/deliveryman/",  createDeliverymanController.handle)

routes.post("/client/login", authenticateClientController.handle)
routes.post("/deliveryman/login", authenticareDeliverymanController.handle)

export { routes }