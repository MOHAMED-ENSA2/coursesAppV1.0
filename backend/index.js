const app = require("express")()

// routes
require('./startup/routes')(app)
require('./startup/db')()


require("./startup/jobs")()

const port =  process.env.PORT || 3005
app.listen(port  , () => console.log("app listening to port " , port))


