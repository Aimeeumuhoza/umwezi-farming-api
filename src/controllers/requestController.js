const Request = require('../modals/Request')
const mailer = require("../helpers/transport")
const bcrypt = require('bcryptjs')
const generatePassword = require("../helpers/generatePassword")
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
      const {id} = req.params._id
      const user = await Request.find(id).select("Firstname Email Option")
      const password = generatePassword()
      const salt = await bcrypt.genSalt(10)
      const hashpsw = await bcrypt.hash(password,salt)
     
      if(user){
        const newUser = await User.create({
          username: user[0].Firstname,
          password:hashpsw,
          email:user[0].Email,
          role:user[0].Option
        })
        await mailer({email:newUser.email,password:password,username:newUser.username},"confirm")
        await newUser.save()
        // await user.remove()
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