const client = require('../startup/cache')()

module.exports =  cache  = name => (req,res,next) => {

    client.get(name, (err, data) => {
        if (err) throw err;
    
        if (data !== null) {
          res.send(JSON.parse(data));
        } else {
          next();
        }
      });

}

