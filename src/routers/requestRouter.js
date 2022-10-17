const express = require("express")
const requestRoute= express()
const {createrequest,getrequest,getAllrequest,updaterequest,deleterequest}= require("../controllers/requestController")




requestRoute.post("/create",createrequest)
requestRoute.get("/get/:_id",getrequest)
requestRoute.get("/All",getAllrequest)
requestRoute.patch("/update/:_id",updaterequest)
requestRoute.delete("/delete/:_id",deleterequest)
module.exports = requestRoute
 
