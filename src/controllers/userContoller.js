const User = require('../modals/User')
const bcrypt = require('bcryptjs');
const {sign} = require("../helpers/jwt")
const mailer = require("../helpers/transport")

const createUser = async(req,res)=>{
    try{ 
        const salt = await bcrypt.genSalt(8)
        const hashpsw = await bcrypt.hash(req.body.password,salt)
         req.body.password = hashpsw
         
         const user = await User.create({
           username: req.body.username,
           email: req.body.email, 
           password: req.body.password,
           role:req.body.role
       })

      await mailer({email:user.email},"CreateUser")
      return res.status(200).json({message:"user created successfully",user})

    }catch(error){
       console.log(error);
       return res.status(400).json({error:error.message})
    }
}

const login= async(req,res)=>{
   try{
       const user = await User.findOne({email: req.body.email})
      
       if(user){
         const isMatch = await bcrypt.compare(req.body.password, user.password)
          if(isMatch){
            const token = await sign({id:user._id,email:user.email,role:user.role})
            user.password = null
            return res.status(200).json({message:"user logged in successfully",token,user})
          }
       }
   }catch(err){
     console.log(err)
      return res.status(400).json({error:err})
   }
}
const getuser = async (req,res)=>{
    try{ 
        const id=  req.params._id
        const user = await User.findById(id)
        return res.status(200).json({message:"user found",user})
    }catch(error){
      console.log(error);
    }
  }
  const getAll = async(req,res)=>{
    try{
       const user =await User.find()
       return res.status(200).json({message:"users found",user})
    }catch(err){
       console.log(err);
    }
  }
  const updateUser= async(req,res)=>{
      
    try{
       const id=req.params._id
       const user=await User.findByIdAndUpdate(id,req.body)
       res.status(200).json({messsage:"user updated",user})
    }
    catch(error){
       console.log(error)
    }
  }
  const deleteUser=async(req,res)=>{
      
    try{
        const id= req.params._id
        const user=await User.findByIdAndDelete(id)
        res.status(200).json({message:"user deleted ",user})
    }catch(error){
       console.log(error)
    }
    }

module.exports ={createUser,getuser,getAll,updateUser,deleteUser,login}    
