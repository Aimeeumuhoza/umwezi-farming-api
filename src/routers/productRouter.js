const express = require("express")
const productRoute= express()
const {createproduct, getProduct,getAllproduct,updateproduct,deleteproduct,getUserProduct}= require("../controllers/productContoller")
const {verifyTokenAndfamer }=require("../middleware/verifyToken")
const upload = require("../helpers/multer")

productRoute.post("/create" ,upload.single("Image"),createproduct)
productRoute.get("/get/:_id", getProduct)
productRoute.get("/user/:userId", getUserProduct)
productRoute.get("/All", getAllproduct)
productRoute.patch("/update/:_id",updateproduct)
productRoute.delete("/delete/:_id",deleteproduct)
module.exports = productRoute
 
