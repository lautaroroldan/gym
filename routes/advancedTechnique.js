import express from "express";
const advancedTechniqueRouter = express.Router()
import { traerTodosLosAdvancedTechniques,traerAdvacedTechniquePorId,guardar,borrar } from "../controllers/advancedTechnique.js"
advancedTechniqueRouter.get('/', (req, res) => {
    // retornar todos los advancedTechniques
    traerTodosLosAdvancedTechniques
    res.send('AdvancedTechniques')
})

advancedTechniqueRouter.get('/:id', (req, res) => {
    req.params.id
    traerAdvacedTechniquePorId
})

advancedTechniqueRouter.post('/', (req, res) => {
    // crear un advancedTechnique
    req.body
    guardar
})
advancedTechniqueRouter.delete('/id',(req,res)=>{
    req.params.id
    borrar
})
export default advancedTechniqueRouter 