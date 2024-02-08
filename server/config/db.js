const mongoess = require("mongoose")
require("dotenv").config()

const connection  = mongoess.connect(process.env.DB_URL)

module.exports=connection