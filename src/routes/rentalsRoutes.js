import { Router } from "express";
import { deleteRentals, getRentals } from "../controllers/routesRentalsControllers.js";


const routerRentals = Router();

routerRentals.get('/rentals', getRentals);
routerRentals.delete('/rentals/:id', deleteRentals);


export default routerRentals;