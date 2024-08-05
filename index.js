import express from 'express'
import advancedTechniqueRouter from './routes/advancedTechnique.js'
const app = express()

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/advancedTechniques', advancedTechniqueRouter)