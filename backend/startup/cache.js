const redis = require("redis")

module.exports =  function(){
    const REDIS_PORT = process.env.PORT || 6379;
    let client = redis.createClient(REDIS_PORT)  
    // we are using  redislabs to host redis (gmail login)
    if (process.env.NODE_ENV === "production"){

        client = redis.createClient({
            host: process.env.REDIS_HOSTNAME ,
            port: process.env.REDIS_PORT ,
            password:  process.env.REDIS_PASSWORD 
        });
    }

    
    return client     
        
}


