const mongoose = require("mongoose") 
const config = require("config")

module.exports = function(){
    let db = config.get("db")
    // db = "mongodb://localhost:27017/coursesapp"
    if (process.env.NODE_ENV === "production")
        db = process.env.MONGODB_URI
    mongoose.connect(db)
            .then(() => console.log("connect to database"))
            .catch((error) => console.error(error) )
}


