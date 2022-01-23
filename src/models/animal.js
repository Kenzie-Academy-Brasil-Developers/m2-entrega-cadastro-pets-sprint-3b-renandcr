const db = require("../mock/db")

class Animals{
    constructor({name, animal = null, weight = null, color = null, breed = null}){
        this.id = this.createId() +1
        this.name = name
        this.animal = animal
        this.weight = weight
        this.color = color
        this.breed = breed
        this.createdAt = new Date().toUTCString()

    }

    save(){
        db.animals.push(this)
    }

    createId(){
        let max = 0
        db.animals.forEach(function(current){
            if(current.id > max){
                max = current.id
            }
        })
        return max
    }
}

module.exports = Animals