const mongoose=require('mongoose')
const advancedTechniqueSchema=new mongoose.Schema({
    type:{
        type: mongoose.SchemaTypes.ObjectId,
        required:true,
        ref:"AdvancedTechniqueType"//para que lo traiga bien hay que hacer referencia de a quien se lo esta trayendo
    },
    sets:[{
        repetition:Number,
        weight:Number,
        rest:Number
    }],
    seconds:Number,
    repetition:Number,
    repetitionQuantity:Number,
    rest:Number
    },
    {
    collection:"AdvancedTechnique"
    }
)
module.exports=mongoose.model("AdvancedTechnique",advancedTechniqueSchema)