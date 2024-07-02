import express from "express";
import { MongoClient } from "mongodb";
import cors from "cors";

const url = process.env.MONGO_DB_URL;
const dbName = process.env.MONGO_DB;
//^^these might have to be moved to the individual router files

import planetsRouter from './routers/planetsRouter.js'
import charactersRouter from './routers/charactersRouter.js'
import filmsRouter from "./routers/filmsRouter.js";


const app = express();

const PORT = 3000;
// Middleware to parse JSON bodies
app.use(cors());
app.use(express.json());

app.use('/api/characters', charactersRouter);
app.use('/api/films', filmsRouter);
app.use('/api/planets', planetsRouter)

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
