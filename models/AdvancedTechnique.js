import mongoose from 'mongoose';
import AdvancedTechniqueType from './AdvancedTechniqueType.js';
const advancedTechniqueSchema = new mongoose.Schema({
    type: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true,
        ref: "AdvancedTechniqueType"
    },
    sets: [{
        repetition: Number,
        weight: Number,
        rest: Number
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