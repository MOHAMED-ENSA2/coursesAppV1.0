const nodemailer = require('nodemailer');
const config = require('config')


module.exports  = function (dist, subject , message){

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        // user: config.get("email"),
        // pass:  config.get("password")
        user: "macinessa365@gmail.com",
        pass:  "0642389199"
      }
    });
    
    const mailOptions = {
      from: config.get("email"),
      to: dist,
      subject: subject || "",
      text: message
    };
    
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
    
}