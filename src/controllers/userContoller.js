const User=require('../modals/User')
const bcrypt = require('bcryptjs');

const createUser = async(req,res)=>{
    try{ 
        const salt = await bcrypt.genSalt(8)
        const hashpsw = await bcrypt.hash(req.body.password,salt)
        req.body.password = hashpsw
       const user = await User.create({
           username: req.body.name,
           email: req.body.email, 
           password: req.body.password
       })
       return res.status(200).json({message:"user created successfully",user})
    }catch(error){
       console.log(error);
       
    }
}

const getuser = async (req,res)=>{
    try{ 
        const id=  req.params._id
        const user = await User.findById(id)
        // const user = await User.findAll()
        res.status(200).json({message:"user found",user})
    }catch(error){
      console.log(error);
    }
  }
  const getAll = async(req,res)=>{
    try{
       const user =await User.find()
       res.status(200).json(user)
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

module.exports ={createUser,getuser,getAll,updateUser,deleteUser}    
