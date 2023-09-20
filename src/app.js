import express, { json } from "express";
import cors from "cors";
//import connection from "./database/conectionDataBase.js";


const app = express();
app.use(cors());
app.use(express.json());
//app.use(connection);




const PORT = 5000 
app.listen(PORT, () => {console.log(`Server running on port ${PORT}`)});