const express = require("express")
const orderRoute= express()
const {creatorder, getorder, getAllorders,updatorder,deletorder , getOrderByUserId}= require("../controllers/orderController")
const {verifyTokenAndAdmin,verifyTokenAndpersonsale, verifyToken}=require("../middleware/verifyToken")

orderRoute.post("/create",verifyToken,creatorder)
orderRoute.get("/get/:_id",getorder)
orderRoute.get("/All",getAllorders)
orderRoute.patch("/update/:_id",verifyTokenAndpersonsale, updatorder)
orderRoute.delete("/delete/:_id",verifyTokenAndpersonsale,deletorder)
orderRoute.get("/userOrder",verifyToken, getOrderByUserId)
module.exports = orderRoute
 
