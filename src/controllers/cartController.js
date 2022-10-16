const Cart=require("../modals/Cart")
const Products = require("../modals/Product")
const User = require("../modals/User")

const createcart =async(req,res)=>{
    
    try{
        const id = req.user.data.id

      const createcart= await Cart.create({
        UserId:id,
        Products:req.body.Products,
        quantity:req.body.Quantity,
        
      })
      const cart=await User.findById(id)

       //successfully500
       res.status(200).json({message:"done",cart})
      
    }catch(err){
       console.log(err);
       //server error
       res.status(500).json(err.message)
    }
   }
module.exports = createcart