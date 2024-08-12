import express from "express";
import { createSet, createSetWithAdvancedTechnique, getAllSets, } from "../controllers/set.js";
const setRouter = express.Router()

setRouter.post('/', async (req, res) => {
    try {
        await createSetWithAdvancedTechnique(req.body)
        res.send('Set created')
    } catch (e) {
        console.log(e)
        res.send('Error creating set')
    }

})

setRouter.get('/', async (req, res) => {
    try {
        const sets = await getAllSets()
        res.json(sets)
    } catch (e) {
        console.log(e)
        res.send('Error getting sets')
    }
})

export default setRouter