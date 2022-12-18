const express = require("express")
const orderRoute= express()
const {creatorder, getorder, getAllorders,updatorder,deletorder , getOrderByUserId}= require("../controllers/orderController")
const {verifyTokenAndAdmin,verifyTokenAndAuhorization, verifyToken}=require("../middleware/verifyToken")

orderRoute.post("/create",verifyToken,creatorder)
orderRoute.get("/get/:_id",getorder)
orderRoute.get("/All",getAllorders)
orderRoute.patch("/update/:_id",verifyTokenAndAuhorization, updatorder)
orderRoute.delete("/delete/:_id",verifyTokenAndAuhorization,deletorder)
orderRoute.get("/user/:userid",verifyTokenAndAuhorization, getOrderByUserId)
module.exports = orderRoute
 
