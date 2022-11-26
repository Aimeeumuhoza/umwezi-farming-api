const Order=require("../modals/Order")
const Product = require("../modals/Product")
const mailer = require("../helpers/transport")
const creatorder =async(req,res)=>{
    
    try{
      const id= req.user.data.id
      const order = await Order.create({
        UserId:id,
        Products:req.body.Products,
        Amount:req.body.Amount,
        Quantity:req.body.Quantity,
        Status: req.body.Status
      })
      const email= req.user.data.email
      await mailer({email:email} ,"order").catch((error)=>{
        console.log(error)
       })
      return res.status(200).json({message:"order created successfully",order})
      
    }catch(err){
       console.log(err);
      return res.status(500).json(err.message)
    }
   }
   
   const getorder = async (req,res)=>{

    try{ 
        const id = req.params._id
        const order = await Order.findById(id)

        res.status(200).json({message:"order created",order})
    }catch(error){
      console.log(error);
    }
  }
  const getOrderByUserId = async(req,res) =>{
    try {
      const id = req.user.data.id
      const orders = await Order.find({userId:id})
      return res.status(200).json({message:"order are retrieved",orders})
    } catch (error) {
      
    }
  }
  const getAllorders = async(req,res)=>{
    try{
       const order =await Order.find()
       res.status(200).json(order)
    }catch(err){
       console.log(err);
    }
  }
  const updatorder= async(req,res)=>{
      
    try{
       const id=req.params._id
       const order=await Order .findByIdAndUpdate(id,req.body)
       res.status(200).json({messsage:"order updated",order})
    }
    catch(error){
       console.log(error)
    }
  }
  const deletorder=async(req,res)=>{
      
    try{
        const id= req.params._id
        const order=await Order.findByIdAndDelete(id)
        res.status(200).json({message:"order deleted ",order})
    }catch(error){
       console.log(error)
    }
    }
module.exports = {creatorder, getorder, getAllorders,updatorder,deletorder ,getOrderByUserId}