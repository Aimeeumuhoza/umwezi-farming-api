const express = require("express")
const productRoute= express()
const {createproduct, getProduct,getAllproduct,updateproduct,deleteproduct}= require("../controllers/productContoller")

productRoute.post("/create",createproduct)
productRoute.get("/get/:_id", getProduct)
productRoute.get("/All", getAllproduct)
productRoute.patch("/update/:_id",updateproduct)
productRoute.delete("/delete/:_id",deleteproduct)
module.exports = productRoute
 
