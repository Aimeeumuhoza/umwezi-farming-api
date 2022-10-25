const express = require("express")
const  {createUser,getuser,getAll,updateUser,deleteUser,login}  = require("../controllers/userContoller")
const {verifyTokenAndAdmin}=require("../middleware/verifyToken")

const userRoute = express()

userRoute.post("/create", createUser)
userRoute.get("/get/:_id",verifyTokenAndAdmin, getuser)
userRoute.get("/All",verifyTokenAndAdmin, getAll)
userRoute.patch("/update/:_id", updateUser )
userRoute.delete("/delete/:_id", verifyTokenAndAdmin,deleteUser )
userRoute.post("/login", login )
module.exports = userRoute
 