const Categorie = require("../models/categorie")
const storeCache = require("../utils/cache")

const getfilterItems = async(req,res,next) => {
    const lang = ["العربية" , "الإنجليزية"] 
    const type = ["كتاب" , "دورة"] 
    const year = ["2016" , "2017" , "2018" , "2019" , "2020" , "2021" , "2022"]
    
    try {
        let categorie = await Categorie.find().select("name")
        categorie = categorie.map(elm => elm.name)
        const data = {categorie , lang , type , year}
        storeCache( "filterItems" , data)
        res.send(data)
    } catch (error) {
        next(error)
    }
}


module.exports =  {getfilterItems} 
