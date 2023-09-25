import express from "express";
import cors from "cors";
import routerGames from "./routes/gamesRoutes.js";
import routerCustomers from "./routes/customersRoutes.js";
import routerRentals from "./routes/rentalsRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(routerGames)
app.use(routerCustomers)
app.use(routerRentals)




const PORT = process.env.PORT || 5000
app.listen(PORT, () => {console.log(`Server running on port ${PORT}`)});
