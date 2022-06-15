const mongoose = require("mongoose") 

module.exports = function(){
    db = process.env.MONGODB_URI
    mongoose.connect(db)
            .then(() => console.log("connect to database"))
            .catch((error) => console.error(error) )
}


