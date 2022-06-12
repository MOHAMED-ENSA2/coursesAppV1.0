

module.exports =  error = (err , req, res, next) => {
    console.log("error : " , err)
    res.status(500).send("something wrong! " +  err);
    next();
}



