const express = require("express")
const cartRoute= express()
const {createcart,getcart,deletecart,updatecart,getAllcart}= require("../controllers/cartController")

cartRoute.post("/create",createcart)
cartRoute.get("/get/:_id",getcart)
cartRoute.get("/All",getAllcart)
cartRoute.patch("/update/:_id",updatecart)
cartRoute.delete("/delete/:_id",deletecart)
module.exports = cartRoute
 
