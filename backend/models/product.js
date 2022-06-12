const mongoose = require("mongoose") 

const schema = new mongoose.Schema({
    name : {
        type : String ,
        required :  true
    },
    type : {
        type : String ,
        enum : ["دورة" , "كتاب" , "برنامج"]
    },
    lang : {
        type : String , 
        enum : ["العربية" , "الفرنسية" , "الإنجليزية"]
    },
    author : {
        type : mongoose.Schema.Types.ObjectId , 
        ref : "Author"
    } ,
    shortDesc : {
        type  : String ,
        minlength : 50 , 
        maxlength : 120
    },
    description : {
        type  : String , 
        minlength : 120 
    },
    image : {
        type : String 
    },
    year : {
        type : Date
    } , 
    link :{
        type : String 
    } , 
    tags : {
        type : Array , 
        validate : {
            validator : function(v){
                return v.length > 0 
            },
            message : "you should add at least one tag!"
        }
    }, 
    rating : { 
        type :Number ,
        min : 0 , 
        max : 5 
    } , 
    price : {
        type : Number , 
        default : 0 
    },

    categorie : {
        type : [mongoose.Schema.Types.ObjectId] , 
        ref : "Categorie" , 
        required : true

    },
    subCategorie : {
        type : [mongoose.Schema.Types.ObjectId] , 
        ref : "SubCategorie" , 
        required : false 
    },
    create_at : {
        type : Date , 
        default : Date.now
    }
    
})


module.exports = mongoose.model("Product" , schema)