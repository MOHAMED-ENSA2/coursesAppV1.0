const router = require("express").Router()

const  cache = require("../middlewares/cache")
const {getfilterItems} = require("../controllers/generics")

router.get('/getfilterItems' , cache("filterItems") ,  getfilterItems )

module.exports  = router

