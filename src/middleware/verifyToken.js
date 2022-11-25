const {verify} = require("../helpers/jwt")

const verifyToken = (req,res,next)=>{
   const token =  req.headers.authorization
   const user = verify(token)
   if(!user){
     return res.status(400).json({message:"token is required"})
   }
   req.token =token
   req.user = user
  //  console.log(req.user);
  next()
}
const verifyTokenAndAdmin = async(req,res,next) => {

  const token =  req.headers.authorization
  const user = verify(token)
    if(user.data.role === "admin"){
      next()
    }else{
      res.status(500).json("you don't have access")
    }
  
}

const verifyTokenAndfamer = (req,res,next)=>{
  const token =  req.headers.authorization
  const user = verify(token)
    if(user.data._id === req.params._id || "farmer" ){
      next()
    }else{
      res.status(500).json("you don't have access")
    }
}

const verifyTokenAndAuhorization = (req,res,next)=>{
  const token =  req.headers.authorization
  const user = verify(token)
  console.log(user);
    if(user.data._id === req.params._id ){
      next()
    }else{
      res.status(500).json("you don't have access")
    }
}

module.exports = {verifyToken,verifyTokenAndAdmin,verifyTokenAndfamer,verifyTokenAndAuhorization }