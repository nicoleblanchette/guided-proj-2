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

export default charactersRouter;
