const express = require("express")
const cors = require("cors")

const error = require("../middlewares/error")
const productRouter = require("../routes/product")
const categorieRouter = require("../routes/categorie")
const subCategorieRouter = require("../routes/subCategorie")
const genericsRouter = require("../routes/generics")

function getRoutes(app){
    app.use(cors())
    app.use(express.json())

    app.use( "/products" , productRouter)
    app.use( "/categories" , categorieRouter)
    app.use( "/subCategories" , subCategorieRouter)
    app.use( "/generics" , genericsRouter)

    app.use(error)
}


module.exports = getRoutes