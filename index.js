import express from 'express'
import advancedTechniqueRouter from './routes/advancedTechnique.js'
import { connect } from 'mongoose'
import 'dotenv/config'
import Set from './models/Set.js'
import setRouter from './routes/set.js'
const { DATABASE_URL } = process.env
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

connect(DATABASE_URL).then(() => {
    console.log('Connected to database')
}).catch((error) => {
    console.log('Error connecting to database', error)
})

app.listen(3000, () => {
    console.log('Server is running on port 3000', DATABASE_URL)
})

app.get('/', async (req, res) => {
    res.send('Hello World!')
})

app.use('/advancedTechnique', advancedTechniqueRouter)
app.use('/set', setRouter)