const express = require("express")
const  createUser  = require("../controllers/userContoller")
const userRoute = express()

userRoute.post("/create", createUser  )

module.exports = userRoute
 