 
import { Router } from "express";
import { ensureAuthenticateClient } from "./middlewares/ensureAuthenticateClient";
import { ensureAuthenticateDeliveryman } from "./middlewares/ensureAuthenticateDeliveryman";
import { AuthenticateClientController } from "./modules/account/authenticateClient/AuthenticateClientController";
import { AuthenticateDeliverymanController } from "./modules/account/authenticateDeliveryman/AuthenticateDeliverymanController";
import { CreateClientController } from "./modules/clients/useCases/createClient/CreateClientContrller";
import { FindAllDeliveriesController } from "./modules/clients/useCases/deliveries/FindAllDeliveriesController";
import { CreateDeliveryController } from "./modules/deliveries/useCases/createDelivery/CreateDeliveryController";
import { FindAllAvailableController } from "./modules/deliveries/useCases/findAllAvailable/FindAllAvailableController";
import { UpdateDeliverymanController } from "./modules/deliveries/useCases/updateDeliveryman/useCases/UpdateDeliverymanController";
import { CreateDeliverymanController } from "./modules/deliveryman/useCases/createDeliveryman/CreateDeliverymanController";
import { FindAllDeliveriesDeliverymanController } from "./modules/deliveryman/useCases/findAllDeliveries/FindAllDeliveriesDeliverymanController";

const routes = Router()

const createClientController = new CreateClientController()
const authenticateClientController = new AuthenticateClientController()
const createDeliverymanController = new CreateDeliverymanController()
const authenticareDeliverymanController = new AuthenticateDeliverymanController()
const createDeliveryController = new CreateDeliveryController()
const findAllAvailable = new FindAllAvailableController()
const updateDeliverymanController = new UpdateDeliverymanController()
const findAllDeliveriesController = new FindAllDeliveriesController()
const findAllDeliverisDeliverymanController = new FindAllDeliveriesDeliverymanController()

routes.post("/client/",  createClientController.handle)
routes.post("/deliveryman/",  createDeliverymanController.handle)

routes.post("/client/login", authenticateClientController.handle)
routes.post("/deliveryman/login", authenticareDeliverymanController.handle)

routes.post("/delivery", ensureAuthenticateClient, createDeliveryController.handle)

routes.get("/delivery/available", ensureAuthenticateDeliveryman, findAllAvailable.handle)

routes.put("/delivery/updateDeliveryman/:id", ensureAuthenticateDeliveryman, updateDeliverymanController.handle)

routes.get("/client/deliveries", ensureAuthenticateClient, findAllDeliveriesController.handle)
routes.get("/deliveryman/deliveries", ensureAuthenticateDeliveryman, findAllDeliverisDeliverymanController.handle)

export { routes }