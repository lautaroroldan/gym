import { Schema, model } from 'mongoose'
const setTypeSchema = new Schema({
    name: String
}, {
    collection: "SetType"
})

export default model("SetType", setTypeSchema)