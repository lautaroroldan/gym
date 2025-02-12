import AdvancedTechnique from "../models/AdvancedTechnique.js"
import Set from "../models/Set.js"

export async function getAllAdvancedTechnique() {
    try {
        return await AdvancedTechnique.where().populate('type').populate('sets')
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
        if (newAdvancedTechnique.sets && Array.isArray(newAdvancedTechnique.sets)) {

            // Guarda los sets anidados dentro de advancedtechnique primero
            const setPromises = newAdvancedTechnique.sets.map(async (set) => {
                return await Set.create(set);
            });

            const savedSets = await Promise.all(setPromises);

            // Reemplaza los objetos de sets con sus ObjectId
            newAdvancedTechnique.sets = savedSets.map(set => set._id);

        }
        const advancedTechnique = await AdvancedTechnique.create(newAdvancedTechnique)
        await advancedTechnique.save()
    } catch (e) {
        console.log(e)
        return error
    }
}

export async function deleteAdvancedTechniqueById(id) {
    try {
        const advancedTechnique = await AdvancedTechnique.findById(id).populate('sets')
        if (!advancedTechnique) {
            throw new Error('advanced technique not found')
        }
        if (advancedTechnique.sets && advancedTechnique.sets.length > 0) {
            const sets = advancedTechnique.sets
            await Promise.all(sets.map(set => Set.findByIdAndDelete(set._id)))
        }
        await AdvancedTechnique.findByIdAndDelete(id)
    } catch (e) {
        console.log(e)
        return e
    }
}