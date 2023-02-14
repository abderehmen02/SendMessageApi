const { StatusCodes } = require("http-status-codes");
const nodemailer = require("nodemailer");
require("dotenv")
const express = require("express")
const app = express()
// send me an email when someone visit Day After Day

const sendVisitingEmail = async (req , res)=>{

    let transporter = nodemailer.createTransport({
        service : 'gmail'  ,
        auth : {
            user : process.env.EMAIL_SENDER ,
            pass :  process.env.EMAIL_SENDER_PASSWORD
        }
});
 await transporter.sendMail({
    from: process.env.EMAIL_SENDER,
    to: process.env.EMAIL_RECEIVER,
    subject: 'visit day after day',
    text:  ` durration : ${req.body.durration}`
}, (err, info) => {
    if(info){
        res.status(StatusCodes.OK)
}
    if(err)    console.log(err)
});
}
const PORT = process.env.PORT || 2000




app.get("/" , (req , res)=>{ res.send("hello world") })
app.listen(PORT ,()=>console.log("app listening on port" + PORT) )