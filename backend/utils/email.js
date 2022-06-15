const nodemailer = require('nodemailer');
var Handlebars = require('handlebars');
const fs = require("fs")

const Product = require("../models/product")


module.exports  = async function (dist, subject ){

    // handlebars template config
    Handlebars.registerHelper('link', function () {
        return  process.env.clientURL + "/product/" + this._id
    })

    // get latest products from mongoDB database
    let products = []
    try {
        products = await Product.find().sort({"create_at" : "desc"}).limit(3).lean()
    } catch (error) {
        console.log("error in getting  products for daily emails  : " , error)
    }

    // read html from the file system
    const readHTMLFile = function(path, callback) {
      fs.readFile(path, {encoding: 'utf-8'}, function (err, html) {
          if (err) {
            callback(err); 
            throw err;
          }
          else {
              callback(null, html);
          }
      });
    };

    // configure the gmail transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.email , 
        pass:  process.env.password
      }
    });
    
    // send the the html template as email 
    readHTMLFile(__dirname + '/template/mailTemplate.html', function(err, html) {
      var template = Handlebars.compile(html);

      var data = { products: products};

      var htmlToSend = template(data);

      const mailOptions = {
          from: process.env.email,
          to: dist,
          subject: subject || "",
          html : htmlToSend
      };

      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
  });
    
}