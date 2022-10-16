const express = require("express")
const cartRoute= express()
const createcart= require("../controllers/cartController")




cartRoute.post("/create",createcart)

module.exports = cartRoute
 
