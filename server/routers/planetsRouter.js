import express from 'express';
const planetsRouter = express.Router();

planetsRouter.get('/', (req, res) => {
    res.send('hello!!!!')
})

export default planetsRouter;