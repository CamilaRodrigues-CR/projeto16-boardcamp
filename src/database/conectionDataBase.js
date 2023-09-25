import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

const {Pool} = pg;

const connection ={
    connectionString: process.env.DATABASE_URL,
  };

  if (process.env.NODE_ENV === "production") configDatabase.ssl = true;


export const db = new Pool(connection);

