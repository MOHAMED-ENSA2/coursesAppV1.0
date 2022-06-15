const router = require("express").Router()
const {getProducts, getProduct , addProduct , updateProduct,deleteProduct, getLastProducts, getTopRatedProducts, searchProduct } = require("../controllers/product")

const cache = require('../middlewares/cache')

router.get("/" , cache("products") , getProducts )
router.get("/getProduct/:id" , getProduct)
router.post("/add" , addProduct)
router.put("/update/:id" , updateProduct)
router.delete("/delete/:id" , deleteProduct)

router.get("/earliest" , cache("latestProducts") , getLastProducts)
router.get("/topRated" , cache("topProducts") , getTopRatedProducts)
router.get("/search" , searchProduct)

module.exports = router

