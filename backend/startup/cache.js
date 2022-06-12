const redis = require("redis")


module.exports = function(){
    const REDIS_PORT = process.env.PORT || 6379;
    const client = redis.createClient(REDIS_PORT);
    return client    
}

