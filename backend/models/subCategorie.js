const  mongoose = require("mongoose")

const schema = new mongoose.Schema({
    name : {
        type : String , 
        required  : true 
    },
    categorie : {
        type : mongoose.Schema.Types.ObjectId , 
        ref : "Categorie" ,
        required : true
    }
})


module.exports = mongoose.model("SubCategorie" , schema)


