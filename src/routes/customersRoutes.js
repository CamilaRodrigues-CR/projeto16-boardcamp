import { Router } from "express";
import { getCustomers, getIdCustomers, postCustomers, updateCustomers } from "../controllers/routesCustomersControllers.js";
import { validateCustomers } from "../schemas/customersValidate.js";
import { validateSchema } from "../middlewares/validateSchema.js";

const routerCustomers = Router();

routerCustomers.get('/customers', getCustomers);
routerCustomers.get('/customers/:id', getIdCustomers)
routerCustomers.post('/customers', validateSchema(validateCustomers), postCustomers);
routerCustomers.put('/customers/:id',validateSchema(validateCustomers), updateCustomers)

export default routerCustomers;