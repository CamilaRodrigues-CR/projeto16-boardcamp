import { Router } from "express";
import { getRentals } from "../controllers/routesRentalsControllers.js";


const routerRentals = Router();

routerRentals.get('/rentals', getRentals);


export default routerRentals;