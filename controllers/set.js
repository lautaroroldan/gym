import Set from "../models/Set.js"
import AdvancedTechnique from "../models/AdvancedTechnique.js"

export async function getAllSets() {
    try {
        return await Set.where('type').equals('66b63a5c1b4f2d9d466fddbc').populate({
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

export async function createSetWithAdvancedTechnique(newSet) {
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
            newSet.advancedtechnique = advancedTechnique._id;
        }

        const savedSet = await Set.create(newSet);
        return savedSet
    }
    catch (e) {
        console.log(e)
        return error
    }
}

export async function createSet(newSet) {
    try {
        const set = await Set.create(newSet)
        await set.save()
    } catch (e) {
        console.log(e)
        return error
    }
}