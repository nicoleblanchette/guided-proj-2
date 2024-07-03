import express from 'express';
import { MongoClient } from "mongodb";
 
const url = 'mongodb://localhost:27017'
const filmDB = 'swapi';
const filmCollect = 'films'

const client = await MongoClient.connect(url);
const db = client.db(filmDB);
const collection = db.collection(filmCollect);

const filmsRouter = express.Router();

filmsRouter.get('/', (req, res) => {
    res.send('wassup')
})
filmsRouter.get('/:id', (req, res) => {
    const { id } = req.params
    res.send('please tell me its working')
})

filmsRouter.get('/:id/', (req, res) => {
    const { id } = req.params
    res.send('tell me its working')
        
})

filmsRouter.get('/:id/characters', (req, res) => {
    const { id } = req.params
    res.send('please tell me its working')

})

filmsRouter.get('/:id/planets', (req, res) => {
    const { id } = req.params
    res.send('tell me its working')

})

filmsRouter.get("/", async (req, res) => {
    try {
      const film = await collection.find({}).toArray();
      res.json(film);
    } catch (err) {
      console.error("Error:", err);
      res.status(500).send("Hmmm, something's wrong... No films")
    }
  });

export default filmsRouter;