import express from "express";
const advancedTechniqueRouter = express.Router()
import { findAllAdvancedTechnique, findAdvancedTechniqueById, createAdvancedTechnique, deleteAdvancedTechniqueById } from "../controllers/advancedTechnique.js"

advancedTechniqueRouter.get('/', async (req, res) => {
    const advancedTechniques = await findAllAdvancedTechnique()
    res.send(advancedTechniques)
})

advancedTechniqueRouter.get('/:id', (req, res) => {
    req.params.id
    // findAdvancedTechniqueById
})

advancedTechniqueRouter.post('/', async (req, res) => {
    try {
        await createAdvancedTechnique(req.body)
        res.send('Advanced Technique created')
    } catch (e) {
        console.log(e)
        res.send('Error creating advanced technique')
    }
})
advancedTechniqueRouter.delete('/:id', (req, res) => {
    // req.params.id
    // deleteAdvancedTechniqueById
})
export default advancedTechniqueRouter 