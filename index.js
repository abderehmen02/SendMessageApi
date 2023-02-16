const { StatusCodes } = require("http-status-codes");
const nodemailer = require("nodemailer");
require("dotenv").config()
const express = require("express")
const app = express()
const cors = require("cors")
// send me an email when someone visit Day After Day

app.use(cors({
    origin: '*'
}));

app.use(express.json())
console.log(process.env.EMAIL_SENDER)

const sendVisitingEmail = async (req , res)=>{
    console.log(req.body)

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
    subject: req.body.subject,
    text:  ` durration : ${req.body.durration} , message : ${req.body.message}`
}, (err, info) => {
    if(info){
        res.status(StatusCodes.OK)
}
    if(err)    console.log(err)
});
}



app.post("/sendMessage" , sendVisitingEmail)






const PORT = process.env.PORT || 2000




app.get("/" , (req , res)=>{ res.send("hello world") })
app.listen(PORT ,()=>console.log("app listening on port" + PORT) )