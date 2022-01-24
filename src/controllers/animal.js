// const { status } = require("express/lib/response")
const db = require("../mock/db")
const Animals = require("../models/animal")

class AnimalsController{

    static
    getAll(){
        return db.animals
    }

    static
    createOne(data){
            const animalNew = new Animals(data)
            animalNew.save()
            return animalNew
    }

}


module.exports = AnimalsController
