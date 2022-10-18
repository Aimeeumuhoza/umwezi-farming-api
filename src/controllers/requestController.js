const Request=require('../modals/Request')
const mailer = require("../helpers/transport")
const bcrypt = require('bcryptjs')
const User = require("../modals/User")

const createrequest=async(req,res)=>{
    try{
        const request = await Request.create({
          Firstname:req.body.Firstname,
          Lastname:req.body.Lastname,
          Email:req.body.Email, 
          Option:req.body.Option,
          Description:req.body.Description
        })
        
        await mailer({email:request.Email} ,"createrequest").catch((error)=>{
          console.log(error)
        })
        return res.status(200).json({message:"request sent successfully",request})
    }
    catch(err){
        console.log(err)
        return res.status(400).json({error:error.messageS})
    }
}
const getrequest = async (req,res)=>{
    try{ 
        const id=  req.params._id
        const request = await Request.findById(id)
        // const user = await User.findAll()
        res.status(200).json({message:"request",request})
    }catch(error){
      console.log(error);
    }
  }
  const getAllrequest = async(req,res)=>{
    try{
       const request =await Request.find()
       res.status(200).json(request)
    }catch(err){
       console.log(err);
    }
  }
  const updaterequest= async(req,res)=>{
      
    try{
       const id=req.params._id
       const request=await Request .findByIdAndUpdate(id,req.body)
       res.status(200).json({messsage:"request updated",request})
    }
    catch(error){
       console.log(error)
    }
  }
  const confirmRequest = async( req ,res )=>{
    try {
      const id = req.params._id
      const user = await Request.findOne(id)
      console.log(user);
      if(user){
        const newUser = await User.create({
          username: user.Firstname,
          password:"12345",
          email:user.Email
        })
        await newUser.save()
        // await mailer({})
      }
      return res.status(200).json({message:"request confirmed"})
    } catch (error) {
      console.log(error)
    }
  }
  const deleterequest=async(req,res)=>{
      
    try{
        const id= req.params._id
        const request=await Request.findByIdAndDelete(id)
        res.status(200).json({message:"request deleted ",request})
    }catch(error){
       console.log(error)
    }
    }

module.exports = {createrequest,getrequest,getAllrequest,updaterequest,deleterequest,confirmRequest} 