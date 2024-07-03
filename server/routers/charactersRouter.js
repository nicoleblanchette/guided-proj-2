import express from 'express';
import { MongoClient } from "mongodb";

const url = 'mongodb://localhost:27017'
const characterDB = 'swapi';
const characterCollect = 'characters'

const client = await MongoClient.connect(url);
const db = client.db(characterDB);
const collection = db.collection(characterCollect);

const charactersRouter = express.Router();

charactersRouter.get("/", async (req, res) => {
  try {
    const characters = await collection.find({}).toArray();
    res.json(characters);
  } catch (err) {
    console.error("Error:", err);
    res.status(500).send("Hmmm, something's wrong... No characters for you! ☹");
  }
});

charactersRouter.get('/:id', async (req, res) => {
    const { id } = req.params
    try {
      const characters = await collection.find({id: parseInt(id)}).toArray();
      res.json(characters);
    } catch (err) {
      console.error("Error:", err);
      res.status(500).send(err.message);
    }
})

charactersRouter.get('/:id/films', (req, res) => {
    // const { id } = req.params
    // try {
    //   const films = await (collection.find({}))
    // }



})



export default charactersRouter;
