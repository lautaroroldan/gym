import express from "express";
const advancedTechniqueRouter = express.Router()
import { createAdvancedTechnique, getAllAdvancedTechnique,findAdvancedTechniqueById,deleteAdvancedTechniqueById } from "../controllers/advancedTechnique.js"

advancedTechniqueRouter.get('/', async (req, res) => {
    const advancedTechniques = await getAllAdvancedTechnique()
    res.json(advancedTechniques)
})

advancedTechniqueRouter.get('/:id',async (req, res) => {
    const advancedTechnique =await findAdvancedTechniqueById(req.params.id)
    res.json(advancedTechnique)
})

advancedTechniqueRouter.post('/', async (req, res) => {
    try {
        await createAdvancedTechnique(req.body)
        res.send('Advanced Technique created')
    } catch (e) {
        console.log(e)
        res.send('Error creating advanced technique', e)
    }
})

advancedTechniqueRouter.delete('/:id', async (req, res) => {
   try{
        await deleteAdvancedTechniqueById(req.params.id)
        res.send('advancedtechnique deleted')
    }catch(e){
        console.log(e)
        res.send(e)
    }
})
export default advancedTechniqueRouter 