const express = require("express")
const productRoute= express()
const {createproduct, getProduct}= require("../controllers/productContoller")

productRoute.post("/create",createproduct)
productRoute.get("/get", getProduct)

module.exports = productRoute
 
