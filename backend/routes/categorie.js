const router = require("express").Router()
const {getCategories, getCategorie , addCategorie , updateCategorie,deleteCategorie, getSubCategorie , getallSubCategories , getCategorieProducts } = require("../controllers/categorie")

const cache = require('../middlewares/cache')

router.get("/getAll" , cache("categories") ,getCategories )
router.get("/get/:id" , getCategorie)
router.post("/add" , addCategorie)
router.put("/update/:id" , updateCategorie)
router.delete("/delete/:id" , deleteCategorie)
router.get("/subs" , cache("allCategorieSubs") ,getallSubCategories)
router.get("/subs/:id" , cache("categorieSubs") ,getSubCategorie)
router.get("/products/:id" , cache("categorieProducts") ,getCategorieProducts)

module.exports = router