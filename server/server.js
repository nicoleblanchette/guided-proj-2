import express from "express";
import { MongoClient } from "mongodb";
import cors from "cors";

const url = process.env.MONGO_DB_URL;
const dbName = process.env.MONGO_DB;
// since we have multiple collections, i can't choose a single variable
// manually type it out every time OR have the server in multiple files

const app = express();
app.use(cors());
const PORT = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

app.get("/api/planets", (req, res) => {
  res.send("hello!");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
