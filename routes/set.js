import express from "express";
import { createSet, getAllSets, findSetById, deleteSetById} from "../controllers/set.js";
const setRouter = express.Router()

setRouter.post('/', async (req, res) => {
    try {
        await createSet(req.body)
        res.send('Set created')
    } catch (e) {
        console.log(e)
        res.send('Error creating set')
    }
})


setRouter.get('/', async (req, res) => {
    try {
        const sets = await getAllSets()
        res.json(sets)//porque aca .json y en la otra res.send con la variable. Para que sea un formato json, el send lo dejamos para mensajes personalizados
    } catch (e) {
        console.log(e)
        res.send('Error getting sets')
    }
})

setRouter.get('/:id', async(req,res)=>{
    try{
        const set=await findSetById(req.params.id)
        res.json(set)
    }catch(e){
        console.log(e)
        res.send('Error getting set')
    }
})

setRouter.delete('/:id',async(req,res)=>{
    try{
        await deleteSetById(req.params.id)
    }catch(e){
        console.log(e)
        res.send('Error deleting set')
    }
})
export default setRouter