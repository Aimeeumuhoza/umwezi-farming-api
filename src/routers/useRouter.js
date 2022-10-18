const express = require("express")
const  {createUser,getuser,getAll,updateUser,deleteUser,login}  = require("../controllers/userContoller")

const userRoute = express()

userRoute.post("/create", createUser)
userRoute.get("/get/:_id", getuser)
userRoute.get("/All", getAll)
userRoute.patch("/update/:_id", updateUser )
userRoute.delete("/delete/:_id", deleteUser )
userRoute.post("/login", login )
module.exports = userRoute
 