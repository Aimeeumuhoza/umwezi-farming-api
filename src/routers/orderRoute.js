const express = require("express")
const orderRoute= express()
const {creatorder, getorder, getAllorders,updatorder,deletorder}= require("../controllers/orderController")




orderRoute.post("/create",creatorder)
orderRoute.get("/get/:_id",getorder)
orderRoute.get("/All",getAllorders)
orderRoute.patch("/update/:_id",updatorder)
orderRoute.delete("/delete/:_id",deletorder)
module.exports = orderRoute
 
