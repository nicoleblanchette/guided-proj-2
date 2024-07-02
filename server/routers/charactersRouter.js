const url = process.env.MONGO_DB_URL;
const characterDB = process.env.MONGO_DB;
const characterCollect = process.env.MONGO_DB_COLLECTION;

import express from 'express';
const charactersRouter = express.Router();

charactersRouter.get('/', (req, res) => {
    
    res.send('star wars')
})
charactersRouter.get('/:id', (req, res) => {
    const { id } = req.params
    res.send('please tell me its working')
})

charactersRouter.get('/:id/films', (req, res) => {
    const { id } = req.params
    res.send('tell me its working')

})

charactersRouter.get("/characters", async (req, res) => {
    try {
      const client = await MongoClient.connect(url);
      const db = client.db(characterDB);
      const collection = db.collection(characterCollect);
      const character = await collection.find({}).toArray();
      res.json(character);
    } catch (err) {
      console.error("Error:", err);
      res.status(500).send("Hmmm, something's wrong... No characters for you! ☹");
    }
  });

export default charactersRouter;
