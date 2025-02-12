import Set from "../models/Set.js"
import AdvancedTechnique from "../models/AdvancedTechnique.js"
import { deleteAdvancedTechniqueById } from "./advancedTechnique.js"

export async function getAllSets() {
    try {
        return await Set.where().populate({
            path: 'type', // Popula el campo 'type' del Set
        })
            .populate({
                path: 'advancedtechnique', // Popula el campo 'advancedtechnique' del Set
                populate: [
                    {
                        path: 'type', // Popula el campo 'type' dentro de 'advancedtechnique'
                    },
                    {
                        path: 'sets', // Popula el campo 'sets' dentro de 'advancedtechnique'
                        populate: {
                            path: 'type', // Popula el campo 'type' dentro de cada Set de 'advancedtechnique'
                        }
                    }
                ]
            })
    } catch (error) {
        console.log(error)
        return error
    }
}

export async function findSetById(id) {
    try {
        return await Set.findById(id).populate({
            path: 'type', // Popula el campo 'type' del Set
        })
            .populate({
                path: 'advancedtechnique', // Popula el campo 'advancedtechnique' del Set
                populate: [
                    {
                        path: 'type', // Popula el campo 'type' dentro de 'advancedtechnique'
                    },
                    {
                        path: 'sets', // Popula el campo 'sets' dentro de 'advancedtechnique'
                        populate: {
                            path: 'type', // Popula el campo 'type' dentro de cada Set de 'advancedtechnique'
                        }
                    }
                ]
            })
    } catch (error) {
        console.log(error)
        return error
    }
}

export async function createSet(newSet) {
    try {
        if (newSet.advancedtechnique && typeof newSet.advancedtechnique === 'object') {
            const advancedTechniqueData = newSet.advancedtechnique;

            // Guarda los sets anidados dentro de advancedtechnique primero
            const setPromises = advancedTechniqueData.sets.map(async (set) => {
                return await Set.create(set);
            });

            const savedSets = await Promise.all(setPromises);

            // Reemplaza los objetos de sets con sus ObjectId
            advancedTechniqueData.sets = savedSets.map(set => set._id);

            // Crea y guarda el AdvancedTechnique
            const advancedTechnique = await AdvancedTechnique.create(advancedTechniqueData);
            newSet.advancedtechnique = advancedTechnique._id
        }
        const savedSet = await Set.create(newSet);
        await savedSet.save()
        return savedSet
    }
    catch (e) {
        console.log(e)
        return e
    }
}

export async function deleteSetById(id) {
    try {
        const set = await Set.findById(id)
        if (!set) {
            throw new Error('set not found')
        }
        if (set.advancedtechnique) {
            await deleteAdvancedTechniqueById(set.advancedtechnique)
        }
        await Set.findByIdAndDelete(id)
    } catch (error) {
        console.log(error)
        return error
    }
}