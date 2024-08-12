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
    repetition: Number,
    repetitionQuantity: Number,
    rest: Number
}, {
    collection: "AdvancedTechnique"
});

const AdvancedTechnique = mongoose.model('AdvancedTechnique', advancedTechniqueSchema);

export default AdvancedTechnique;