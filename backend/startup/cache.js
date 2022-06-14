const config = require("config")
const redis = require("redis")

module.exports =  function(){
    const REDIS_PORT = process.env.PORT || 6379;
    
    // we are using  redislabs to host redis (gmail login)
    const client = redis.createClient({
        host: process.env.REDIS_HOSTNAME && config.get("REDIS_HOSTNAME"),
        port: process.env.REDIS_PORT && config.get("REDIS_PORT"),
        password:  process.env.REDIS_PASSWORD && config.get("REDIS_PASSWORD")
    });
    
    return client     
        
}


