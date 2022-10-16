const express = require("express")
const orderRoute= express()
const creatorder= require("../controllers/orderController")




orderRoute.post("/create",creatorder)

module.exports = orderRoute
 
