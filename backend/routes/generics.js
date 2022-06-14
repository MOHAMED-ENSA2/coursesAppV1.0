const router = require("express").Router()

const  cache = require("../middlewares/cache")
const {getfilterItems, getAllEmails , addEmail, deleteEmail} = require("../controllers/generics")

router.get('/getfilterItems' , cache("filterItems") ,  getfilterItems )
router.get('/getAllEmails'  ,  getAllEmails )
router.post('/addEmail' , addEmail )
router.delete('/deleteEmail/:id' , deleteEmail )

module.exports  = router

