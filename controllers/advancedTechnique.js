// Deberia estar los metodos de findAllAdvancedTechnique , findAdvancedTechniqueById, and createAdvancedTechnique or saveAdvancedTechnique
async function traerTodosLosAdvancedTechniques(){
    try {
     return await AdvancedTechnique.where().populate('type')
    } catch (error) {
        console.log(error)
    }
}
async function traerAdvacedTechniquePorId(id){
    try {
     return await AdvancedTechnique.findBy({_id:id}).populate('type')
    } catch (error) {
        console.log(error)
    }
}
async function guardar(){
    try{
        const advancedTechnique=await AdvancedTechnique.create({
            type:'66b0d6acae013f060b6ce8d0',
            sets:[{
                repetition:4
            },{
                repetition: 5
            }],
            rest:10
        })
        await advancedTechnique.save()
    }catch(e){console.log(e)}
}
async function borrar(id){
    try{
        await AdvancedTechnique.deleteOne({_id:id})
    }catch(e){console.log(e)}
}
export{traerTodosLosAdvancedTechniques,traerAdvacedTechniquePorId,guardar,borrar}