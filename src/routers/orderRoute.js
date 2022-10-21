const express = require("express")
const orderRoute= express()
const {creatorder, getorder, getAllorders,updatorder,deletorder}= require("../controllers/orderController")
const verifyToken=require("../middleware/verifyToken")

orderRoute.post("/create",verifyToken,creatorder)
orderRoute.get("/get/:_id",getorder)
orderRoute.get("/All",getAllorders)
orderRoute.patch("/update/:_id",updatorder)
orderRoute.delete("/delete/:_id",deletorder)
module.exports = orderRoute
 
