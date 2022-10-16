const express = require("express")
const productRoute= express()
const createproduct= require("../controllers/productContoller")




productRoute.post("/create",createproduct)

module.exports = productRoute
 
