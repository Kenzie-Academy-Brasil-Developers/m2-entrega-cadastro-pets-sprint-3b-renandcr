const express = require("express")
const router = express.Router()
const AnimalsController = require("../controllers/animal")

router.get("/animals", (req, res) => {
    const data = AnimalsController.getAll()
    res.status(200).json(data)
})

router.post("/animals", (req, res) => {
    if(req.body.name == undefined){
        res.status(400).json({Error:"Operação não foi realizada. Propriedade name não deve ser omitida!"})
    } else{
        const data = AnimalsController.createOne(req.body)
        res.status(201).json(data)
    }
    

})

module.exports = router
