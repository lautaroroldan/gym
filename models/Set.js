import mongoose from 'mongoose';
import SetType from './SetType.js';
import AdvancedTechnique from './AdvancedTechnique.js';

const setSchema = new mongoose.Schema({
    type: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true,
        ref: "SetType"
    },
    repetition: Number,
    weight: Number,
    rest: Number,
    advancedtechnique: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "AdvancedTechnique"
    },
    observation: String,
}, {
    collection: "Set"
});

export default mongoose.model('Set', setSchema)
