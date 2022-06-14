const schedule = require("node-schedule")
const Email = require("../models/email")
const sendEmail = require("../utils/email")



module.exports = dailyEmailNotification = async () => {

    try {
        let emails = await Email.find()
        emails = emails.map(elm => elm.email)
        
        schedule.scheduleJob("* 45 7 * * *" , () => {
            sendEmail(emails, "موقع تحميل ta7mil.online" )
        })

    } catch (error) {
        console.log(error)
    }

} 