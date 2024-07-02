import express from 'express';
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

export default planetsRouter;