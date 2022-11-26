const express = require("express")
const requestRoute= express()
const {createrequest,getrequest,getAllrequest,updaterequest,deleterequest,confirmRequest}= require("../controllers/requestController")
const {verifyTokenAndAdmin}=require("../middleware/verifyToken")

requestRoute.post("/create",createrequest)
requestRoute.get("/get/:_id",getrequest)
requestRoute.get("/All",verifyTokenAndAdmin,getAllrequest)
requestRoute.patch("/update/:_id",updaterequest)
requestRoute.delete("/delete/:_id",verifyTokenAndAdmin,deleterequest)
requestRoute.post("/confirm/:_id",confirmRequest)

module.exports = requestRoute
 
