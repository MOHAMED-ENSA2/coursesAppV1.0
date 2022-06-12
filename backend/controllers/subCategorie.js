const storeCache = require("../utils/cache")

const Categorie = require("../models/categorie")
const SubCategorie = require("../models/subCategorie")

const getSubCategories =  async (req,res, next) => {
    try{
        const categories = await SubCategorie.find().populate("categorie" , "name")
        if(!categories)
            return res.status(404).send("there is no subCategorie with giving id")
        storeCache("subCategories", categories)    
        res.send(categories)
    }
    catch(error){   
        next(error)
    }

}

const getSubCategorie =  async (req,res, next) => {
    const {id} = req.params

    try{
        const categorie = await SubCategorie.findById(id)
        console.log(categorie)
        if(!categorie)
            return res.status(404).send("there is no subCategorie with giving id")
        res.send(categorie)
    }
    catch(error){   
        next(error)
    }

}

const addSubCategorie =  async (req,res, next) => {
    const data = req.body 

    try{ 
        const categorie = await Categorie.findById(data.categorie)
        if(!categorie){
            return res.status(404).send("there is no categorie with the giving id!")
        }
        const subCategorie = new SubCategorie(data)
        const result =  await subCategorie.save()
        res.send(result)
    }
    catch(error){   
        next(error)
    }

}


const updateSubCategorie =  async (req,res, next) => {
    const {id} = req.params
    const data = req.body

    try{
        const categorie = await SubCategorie.findByIdAndUpdate(id , data)
        if(!categorie)
            return res.status(404).send("no product with giving id")
        res.send(product)
    }
    catch(error){   
        next(error)
    }

}

const deleteSubCategorie =  async (req,res, next) => {
    const {id} = req.params

    try{
        const categorie = await SubCategorie.findByIdAndDelete(id)
        if(!categorie)
            return res.status(404).send("not product with giving id")
        res.send(categorie)
    }
    catch(error){   
        next(error)
    }

}

module.exports = {getSubCategories , getSubCategorie , addSubCategorie , updateSubCategorie , deleteSubCategorie} 