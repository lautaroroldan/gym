const mongoose=require('mongoose')
const advancedTechniqueSchema=mongoose.Schema(
    {
        name:String
    },
    {
        collection: "AdvancedTechniqueType"
    }
)
module.exports=mongoose.model("AdvancedTechniqueType",advancedTechniqueSchema)