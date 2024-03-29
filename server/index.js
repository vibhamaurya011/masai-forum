const express = require("express")
const cors = require("cors")
const cookieParser = require("cookie-parser")
const connection = require("./config/db")
const userRoute = require("./route/user.route")
const postRoute = require("./route/post.route")
require("dotenv").config()
const port = process.env.PORT_NO
const app = express()
app.use(cookieParser());
app.use(express.json())
app.use(cors())

app.use("/", userRoute)
app.use("/", postRoute)

app.listen(port, async()=>{
    try{
        await connection
        console.log("Connected to Database.")
        console.log(`Server is running on ${port}`)
    }catch(err){
        console.log(err)
    }
})