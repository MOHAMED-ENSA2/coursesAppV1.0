const Categorie = require("../models/categorie")
const Email = require("../models/email")
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

const getAllEmails = async(req,res,next) => {
    try {
        const emails = await Email.find()
        if(!emails)
            return res.status(404).send("there is no emails in the database")
        res.send(emails)
    } catch (error) {
        next(error)
    }
}


const addEmail = async(req,res,next) => {
    const {email} = req.body
    
    try {
        const newemail =  new Email({email})
        const result = await newemail.save()
        res.send(result)

    } catch (error) {
        next(error)
    }
}

const deleteEmail = async(req,res,next) => {
    const {id}  = req.params
    try {
        const email = await Email.findByIdAndDelete(id)
        if(!email)
            return res.status(404).send("there is no emails with giving id")
        res.send(email)
    } catch (error) {
        next(error)
    }
}

module.exports =  {getfilterItems, getAllEmails , addEmail, deleteEmail} 
