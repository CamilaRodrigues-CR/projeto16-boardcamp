import { Router } from "express";
import { getGames, postGames } from "../controllers/routesGamesControllers.js";
import { validateSchema } from "../middlewares/validateSchema.js";
import { validateGames } from "../schemas/gamesValidate.js";

const routerGames = Router()

routerGames.get('/games' , getGames) ;
routerGames.post('/games' ,validateSchema(validateGames), postGames) ;

export default routerGames;