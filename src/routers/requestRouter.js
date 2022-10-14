const express = require("express")
const requestRoute= express()
const createrequest= require("../controllers/requestController")




requestRoute.post("/create",createrequest)

module.exports = requestRoute
 
