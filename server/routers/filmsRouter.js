import express from 'express';
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

export default filmsRouter;