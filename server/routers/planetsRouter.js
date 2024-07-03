import express from 'express';
import { MongoClient } from "mongodb";

const url = 'mongodb://localhost:27017'
const planetDB = 'swapi';
const planetCollect = 'planets'

const client = await MongoClient.connect(url);
const db = client.db(planetDB);
const collection = db.collection(planetCollect);

const planetsRouter = express.Router();

planetsRouter.get('/', (req, res) => {
    res.send('hello!!!!')
})

planetsRouter.get('/:id', (req, res) => {
    const { id } = req.params
    res.send(' its working')

})

planetsRouter.get('/:id/films', (req, res) => {
    const { id } = req.params
    res.send('its still working')

})

planetsRouter.get('/:id/characters', (req, res) => {
    const { id } = req.params
    res.send('please tell me its working')

})

planetsRouter.get("/", async (req, res) => {
    try {
      const planet = await collection.find({}).toArray();
      res.json(planet);
    } catch (err) {
      console.error("Error:", err);
      res.status(500).send("Hmmm, something's wrong... No planets for you! ☹");
    }
  });

export default planetsRouter;