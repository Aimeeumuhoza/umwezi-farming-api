const Cart=require("../modals/Cart")
const Products = require("../modals/Product")
const User = require("../modals/User")

const createcart =async(req,res)=>{
    
    try{
      

      const createcart= await Cart.create({
        UserId:req.body.UserId,
        Products:req.body.Products,
        quantity:req.body.Quantity,
        
      })
      

       //successfully500
       res.status(200).json({message:"done",Cart})
      
    }catch(err){
       console.log(err);
       //server error
       res.status(500).json(err.message)
    }
   }
module.exports = createcart