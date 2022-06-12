const app = require("express")()

// routes
require('./startup/routes')(app)
require('./startup/db')()

require('./utils/email')("elmezianimohamed45@gmail.com" , "test" , "test" )


const port =  process.env.PORT || 3005
app.listen(port  , () => console.log("app listening to port " , port))


