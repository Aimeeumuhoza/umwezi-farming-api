const Order=require("../modals/Order")
const User = require("../modals/User")

const creatorder =async(req,res)=>{
    
    try{
      const order = await Order.create({
         UserId:req.body.UserId,
        Products:req.body.Products,
        Amount:req.body.Amount,
        Quantity:req.body.Quantity,
        Status: req.body.Status
      })
      
      return res.status(200).json({message:"order created successfully",order})
      
    }catch(err){
       console.log(err);
      return res.status(500).json(err.message)
    }
   }
module.exports = creatorder