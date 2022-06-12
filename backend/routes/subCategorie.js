const router = require("express").Router()
const {getSubCategories, getSubCategorie , addSubCategorie , updateSubCategorie,deleteSubCategorie } = require("../controllers/subCategorie")


router.get("/" , cache("subCategories") , getSubCategories )
router.get("/:id" , getSubCategorie)
router.post("/add" , addSubCategorie)
router.put("/update/:id" , updateSubCategorie)
router.delete("/delete/:id" , deleteSubCategorie)

module.exports = router