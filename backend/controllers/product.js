const storeCache = require("../utils/cache")

const Author = require("../models/author")
const Product = require("../models/product")


const getProducts =  async (req,res, next) => {
    try{
        const products = await Product.find()
                                      .sort({"create_at" : "desc"})
                                      .populate("categorie" , "name")
                                      .populate("subCategorie" , "name")
                                      .populate("author" , "name")
    
        storeCache("products" , products)                 
    res.send(products)
    }
    catch(error){   
        next(error)
    }

}

const getProduct =  async (req,res, next) => {
    const {id} = req.params

    try{
        const product = await Product.findById(id).populate("categorie" , "name").populate("subCategorie" , "name").populate("author" , "name")
        if(!product)
            return res.status(404).send("there is no product with the giving id!")
            
        storeCache("product" , product)                 
        res.send(product)
    }
    catch(error){   
        next(error)
    }

}

const addProduct =  async (req,res, next) => {
    const data = req.body

    try{
        if(data.author){
            const newAuthor = new Author({name : data.author})
            const author = await newAuthor.save()
            const product = new Product({...data , author})
            const result =  await product.save()
            return res.send(result)
        }

        const product = new Product(data)
        const result =  await product.save()
        res.send(result)
    }
    catch(error){   
        next(error)
    }

}


const updateProduct =  async (req,res, next) => {
    const {id} = req.params
    const data = req.body

    try{
        const product = await Product.findByIdAndUpdate(id , data)
        if(!product)
            return res.status(404).send("no product with giving id")
        res.send(product)
    }
    catch(error){   
        next(error)
    }

}

const deleteProduct =  async (req,res, next) => {
    const {id} = req.params

    try{
        const product = await Product.findByIdAndDelete(id)
        if(!product)
            return res.status(404).send("not product with giving id")
        res.send(product)
    }
    catch(error){   
        next(error)
    }

}


// get the earliest dates  

const getLastProducts =  async (req,res, next) => {

    try{
        const products = await Product.find().sort({"create_at" : "desc"}).limit(3)
        if(!products)
            return res.status(404).send("not product with giving id")
        
        storeCache("latestProducts" , products)                 
        res.send(products)
    }
    catch(error){   
        next(error)
    }

}

const getTopRatedProducts = async(req, res , next) => {
       try {
            const products = await Product.find().sort({"rating": -1}).limit(3)
            if(!products)
                    return res.status(404).send("there is no product")
            storeCache("topProducts" , products)                 
            res.send(products)
       } catch (error) {
           next(error) 
       } 
    }

const searchProduct = async(req, res , next) => {
    const {value} = req.query

    try {
        const products = await Product.find({tags : value.toLowerCase()})
        // if(!products)
        //      return res.status(404).send("there is no product")
        res.send(products)
    } catch (error) {
        next(error) 
    } 
}

module.exports = {getProducts , getProduct , updateProduct , deleteProduct , addProduct, getLastProducts , getTopRatedProducts , searchProduct} 