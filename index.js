const express = require('express')
const mongoose = require("mongoose")
const app = express()
const route = require("./src/route/route")
require('dotenv').config()

app.use(express.json())

mongoose.set('strictQuery',true)
mongoose.connect("mongodb+srv://group22:1234@group22databse.uvtoalh.mongodb.net/tailsweb-company-assignment",{useNewUrlParser:true})
.then(()=> console.log("MongoDb is connected"))
.catch((err)=> console.log(err))

app.use("/",route)

const PORT = 3000

app.listen(PORT,() => console.log(`Express app is running on port ${PORT}`))