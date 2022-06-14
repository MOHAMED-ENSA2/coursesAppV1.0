const mongoose =  require("mongoose")


const schema = new mongoose.Schema({
    email : {
        type : String ,
        unique : true , 
        required : true 
    }   
})


module.exports = mongoose.model("Email" , schema)