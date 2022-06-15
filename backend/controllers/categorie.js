const storeCache = require("../utils/cache")

const Categorie = require("../models/categorie")
const SubCategorie = require("../models/subCategorie")
const Product = require("../models/product")


const getCategories =  async (req,res, next) => {
    try{
        const categories = await Categorie.find()
        if(!categories)
            return res.status(404).send('there is no categorie')
        storeCache("categories", categories )
        res.send( categories )
    }
    catch(error){   
        next(error)
    }

}

const getCategorie =  async (req,res, next) => {
    const {id} = req.params

    try{
        const categorie = await Categorie.findById(id)
        if(!categorie)
            res.status(404).send("there is no categorie with the giving id")
            
        storeCache("categorie", categorie )
        res.send(categorie)
    }
    catch(error){   
        next(error)
    }

}

const addCategorie =  async (req,res, next) => {
    const data = req.body

    try{
        const categorie = new Categorie(data)
        const result =  await categorie.save()
        res.send(result)
    }
    catch(error){   
        next(error)
    }

}


const updateCategorie =  async (req,res, next) => {
    const {id} = req.params
    const data = req.body

    try{
        const categorie = await Categorie.findByIdAndUpdate(id , data)
        if(!categorie)
            return res.status(404).send("no product with giving id")
        res.send(categorie)
    }
    catch(error){   
        next(error)
    }

}

const deleteCategorie =  async (req,res, next) => {
    const {id} = req.params

    try{
        const categorie = await Categorie.findByIdAndDelete(id)
        if(!categorie)
            return res.status(404).send("not product with giving id")
        res.send(categorie)
    }
    catch(error){   
        next(error)
    }

}


// all subcategorie of giving categorie 

const getSubCategorie = async (req, res, next) => {
    const {id} = req.params
    try {
        const subCategories = await SubCategorie.find({categorie : id})
        
        res.send(subCategories)
    } catch (error) {
        next(error)
    }
}


// all subcategorie of all  categorie 

const getallSubCategories = async (req, res, next) => {
    try {
        let data = [] 
        const categories = await Categorie.find().select("name")

        categories.forEach(async(elm , index) => {
            const subCategories = await SubCategorie.find({categorie : elm._id}).select("name")
            data =  [ ...data ,  { id : elm._id ,  [elm.name] :  subCategories }]
            
            if(index === categories.length - 1 ){
                storeCache("allCategorieSubs", data)
                res.send(data)  
            }
        })
        
    } catch (error) {
        next(error)
    }
}


// all products of giving categorie 

const getCategorieProducts =  async (req,res, next) => {
    const {id} = req.params

    try{
        const products = await Product.find().or([{categorie : id} , {subCategorie : id}] ).populate("categorie" , "name").populate("subCategorie" , "name")
        if(!products)
            return res.status(404).send("there is no product with the giving id!")
        res.send(products)
    }
    catch(error){   
        next(error)
    }

}

module.exports = {getCategories , getCategorie, addCategorie , updateCategorie , deleteCategorie , getSubCategorie , getallSubCategories, getCategorieProducts} 