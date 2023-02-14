const express = require("express")
const nodemailer  = require("nodemailer")
const app = express()

const port = process.env.PORT || 5000 ;


app.listen(port , ()=>{
    console.log(`app is running on port ${port}`)
})