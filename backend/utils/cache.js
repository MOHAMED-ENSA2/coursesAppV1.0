const client = require('../startup/cache')()

module.exports = function(key, value){
    const storageDuration = 3000
    client.setex(key , storageDuration, JSON.stringify(value) )
}

