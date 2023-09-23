import express, { json } from "express";
import cors from "cors";
import routerGames from "./routes/gamesRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(routerGames)




const PORT = 5000 
app.listen(PORT, () => {console.log(`Server running on port ${PORT}`)});
