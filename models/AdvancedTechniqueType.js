import { Schema, model } from 'mongoose'
const advancedTechniqueTypeSchema = new Schema({
    name: String
}, {
    collection: "AdvancedTechniqueType"
})

export default model("AdvancedTechniqueType", advancedTechniqueTypeSchema)