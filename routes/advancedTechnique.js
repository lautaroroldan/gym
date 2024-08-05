import express from "express";
const advancedTechniqueRouter = express.Router()

advancedTechniqueRouter.get('/', (req, res) => {
    // retornar todos los advancedTechniques
    res.send('AdvancedTechniques')
})

advancedTechniqueRouter.get('/:id', (req, res) => {
    // retornar un advancedTechnique por id
})

advancedTechniqueRouter.post('/', (req, res) => {
    // crear un advancedTechnique
})

export default advancedTechniqueRouter 