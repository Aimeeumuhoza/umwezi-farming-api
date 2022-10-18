const Cart=require("../modals/Cart")


const createcart =async(req,res)=>{
    
    try{
      const cart= await Cart.create({
        UserId:req.body.UserId,
        Products:req.body.Products,
        quantity:req.body.Quantity,
        
      })
      
       //successfully500
      return res.status(200).json({message:"done",cart})
      
    }catch(err){
       console.log(err);
       //server error
       res.status(500).json(err.message)
    }
   }
   const getcart = async (req,res)=>{

      try{ 
          const id = req.params._id
          const cart = await Cart.findById(id)
          res.status(200).json({message:"cart chosen",cart})
      }catch(error){
        console.log(error);
      }
    }
    
  const getAllcart = async(req,res)=>{
   try{
      const cart =await Cart.find()
      res.status(200).json(cart)
   }catch(err){
      console.log(err);
   }
 }
 
 const updatecart= async(req,res)=>{
      
   try{
      const id=req.params._id
      const cart=await Cart .findByIdAndUpdate(id,req.body)
      res.status(200).json({messsage:"cart updated",cart})
   }
   catch(error){
      console.log(error)
   }
 }
 const deletecart=async(req,res)=>{
     
   try{
       const id= req.params._id
       const cart=await Cart.findByIdAndDelete(id)
       res.status(200).json({message:"cart deleted ",cart})
   }catch(error){
      console.log(error)
   }
   }
module.exports = {createcart,getcart, deletecart,updatecart,getAllcart}