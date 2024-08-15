import mongoose from 'mongoose';
import AdvancedTechniqueType from './AdvancedTechniqueType.js';
import Set from './Set.js';
const advancedTechniqueSchema = new mongoose.Schema({
    type: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true,
        ref: "AdvancedTechniqueType"
    },
    sets: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Set"
    }],
    seconds: Number,
    repetitionQuantity: Number,
}, {
    collection: "AdvancedTechnique"
});

export default mongoose.model('AdvancedTechnique', advancedTechniqueSchema)//si no importo la funcion model, sino que todo mongoose. Hay que trabajar las llamadas a metodos y clases de esa forma