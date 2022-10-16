const Order=require("../modals/Order")
const User = require("../modals/User")

const creatorder =async(req,res)=>{
    
    try{
       // const id = req.user.data.id

      const order = await Order.create({
       
        Products:req.body.Products,
        Amount:req.body.Amount,
        Quantity:req.body.Quantity,
        Status: req.body.Status
      })
      //const user=await User.findById(id)

       //successfully500
       res.status(200).json({message:"order created successfully",order})
      
    }catch(err){
       console.log(err);
       //server error
       res.status(500).json(err.message)
    }
   }
module.exports = creatorder