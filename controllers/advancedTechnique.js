import AdvancedTechnique from "../models/AdvancedTechnique.js"

export async function findAllAdvancedTechnique() {
    try {
        return await AdvancedTechnique.where().populate('type')
    } catch (error) {
        console.log(error)
        return error
    }
}

export async function findAdvancedTechniqueById(id) {
    try {
        return await AdvancedTechnique.findById(id).populate('type')
    } catch (error) {
        console.log(error)
        return error
    }
}

export async function createAdvancedTechnique(newAdvancedTechnique) {
    try {
        const advancedTechnique = await AdvancedTechnique.create(newAdvancedTechnique)
        await advancedTechnique.save()
    } catch (e) {
        console.log(e)
        return error
    }
}

export async function deleteAdvancedTechniqueById(id) {
    try {
        await AdvancedTechnique.findByIdAndDelete(id)
    } catch (e) {
        console.log(e)
        return error
    }
}